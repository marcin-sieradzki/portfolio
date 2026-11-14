"""Convert the Version E .dc.html template into JSX fragments.

The dc runtime semantics this mirrors (read from dc-runtime.js):
  * whitespace-only text without a space character is dropped, every other text node is kept;
  * {{path}} holes: dotted lookups, `!x`, `a === b`, literals;
  * whole-value attribute holes pass the raw value, mixed ones interpolate a string;
  * style strings are split on ';' and ':' into a style object;
  * <sc-if value> renders its children when the value is truthy, <sc-for list as> repeats them.
"""
import html
import json
import re
import sys

VOID = {"img", "br", "input", "meta", "link", "hr", "source", "area", "col", "wbr"}

TOKEN = re.compile(r"<!--(.*?)-->|<(/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:\s+[^\s=/>]+(?:=(?:\"[^\"]*\"|'[^']*'|[^\s>]+))?)*)\s*(/?)>", re.S)
ATTR = re.compile(r"([^\s=/>]+)(?:=(?:\"([^\"]*)\"|'([^']*)'|([^\s>]+)))?")


class Node:
    def __init__(self, kind, name=None, attrs=None, text=None):
        self.kind = kind  # 'el' | 'text' | 'comment'
        self.name = name
        self.attrs = attrs or []
        self.text = text
        self.children = []
        self.parent = None

    def attr(self, k):
        for a, v in self.attrs:
            if a == k:
                return v
        return None


def parse(src):
    root = Node("el", "#root")
    cur = root
    pos = 0
    for m in TOKEN.finditer(src):
        if m.start() > pos:
            t = Node("text", text=src[pos:m.start()])
            t.parent = cur
            cur.children.append(t)
        pos = m.end()
        if m.group(1) is not None:
            c = Node("comment", text=m.group(1))
            c.parent = cur
            cur.children.append(c)
            continue
        closing, name, rawattrs, selfclose = m.group(2), m.group(3), m.group(4), m.group(5)
        if closing:
            # pop to matching
            n = cur
            while n is not None and n.name != name:
                n = n.parent
            if n is None:
                raise SystemExit("unmatched </%s> at %d" % (name, m.start()))
            if n is not cur:
                raise SystemExit("mis-nested </%s> at %d (open %s)" % (name, m.start(), cur.name))
            cur = n.parent
            continue
        attrs = []
        for am in ATTR.finditer(rawattrs):
            v = am.group(2) if am.group(2) is not None else am.group(3) if am.group(3) is not None else am.group(4)
            attrs.append((am.group(1), None if v is None else html.unescape(v)))
        el = Node("el", name, attrs)
        el.parent = cur
        cur.children.append(el)
        if not selfclose and name.lower() not in VOID:
            cur = el
    if pos < len(src):
        t = Node("text", text=src[pos:])
        t.parent = cur
        cur.children.append(t)
    if cur is not root:
        raise SystemExit("unclosed " + cur.name)
    return root


# ---------- holes ----------

def hole_expr(expr, scope, vname):
    e = expr.strip()
    if e.startswith("(") and e.endswith(")"):
        return "(" + hole_expr(e[1:-1], scope, vname) + ")"
    for op in ("===", "!==", "==", "!="):
        if op in e:
            a, b = e.split(op, 1)
            return "%s %s %s" % (hole_expr(a, scope, vname), op, hole_expr(b, scope, vname))
    if e.startswith("!"):
        return "!" + hole_expr(e[1:], scope, vname)
    if e in ("true", "false", "null"):
        return e
    if re.fullmatch(r"-?\d+(\.\d+)?", e):
        return e
    if len(e) >= 2 and e[0] in "'\"" and e[-1] == e[0]:
        return json.dumps(e[1:-1])
    if not re.fullmatch(r"[A-Za-z_$][\w$]*(\.[\w$]+)*", e):
        raise SystemExit("unsupported hole: " + e)
    root = e.split(".")[0]
    if root in scope:
        return scope[root] + e[len(root):]
    return vname + "." + e


HOLE = re.compile(r"\{\{([\s\S]+?)\}\}")


def whole_hole(v):
    m = re.fullmatch(r"\s*\{\{([\s\S]+?)\}\}\s*", v)
    return m.group(1) if m else None


def interp(v, scope, vname):
    """A string with holes -> JS template literal; without holes -> JSON string."""
    if "{{" not in v:
        return json.dumps(v, ensure_ascii=False)
    parts = HOLE.split(v)
    out = "`"
    for i, p in enumerate(parts):
        if i % 2:
            out += "${" + hole_expr(p, scope, vname) + "}"
        else:
            out += p.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    return out + "`"


# ---------- attributes ----------

EVENT = {
    "onclick": "onClick", "onkeydown": "onKeyDown", "onpointerdown": "onPointerDown", "onpointermove": "onPointerMove",
    "onpointerup": "onPointerUp", "onpointercancel": "onPointerCancel", "onpointerleave": "onPointerLeave",
    "onlostpointercapture": "onLostPointerCapture", "onload": "onLoad",
}
RENAME = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "viewbox": "viewBox",
          "preserveaspectratio": "preserveAspectRatio", "xlink:href": "xlinkHref", "xml:space": "xmlSpace"}


def camel(s):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), s)


def style_key(k):
    if k.startswith("--"):
        return k
    if k.startswith("-webkit-"):
        return "Webkit" + camel(k[8:])[0].upper() + camel(k[8:])[1:]
    if k.startswith("-moz-"):
        return "Moz" + camel(k[5:])[0].upper() + camel(k[5:])[1:]
    return camel(k)


def style_obj(v, scope, vname):
    items = []
    for decl in v.split(";"):
        i = decl.find(":")
        if i < 0:
            continue
        k = decl[:i].strip()
        val = decl[i + 1:].strip()
        if "%%" in val:
            # The prototype has `top:58%%` here. A browser drops that declaration, so the port leaves it out.
            continue
        h = whole_hole(val)
        js = hole_expr(h, scope, vname) if h is not None else interp(val, scope, vname)
        items.append("%s: %s" % (json.dumps(style_key(k)), js))
    return "{{ " + ", ".join(items) + " }}"


def attr_jsx(name, value, scope, vname):
    low = name.lower()
    if low.startswith("hint-"):
        return None
    if low == "style":
        return "style=" + style_obj(value, scope, vname)
    if low in EVENT:
        rname = EVENT[low]
    elif low in RENAME:
        rname = RENAME[low]
    elif low.startswith("aria-") or low.startswith("data-"):
        rname = low
    elif "-" in name:
        rname = camel(name)
    else:
        rname = name
    if value is None:
        return rname
    h = whole_hole(value)
    if h is not None:
        return "%s={%s}" % (rname, hole_expr(h, scope, vname))
    if "{{" in value:
        return "%s={%s}" % (rname, interp(value, scope, vname))
    if low == "src" and value.startswith("/_blob/"):
        value = "/images/marcin.webp"
    if rname == "tabIndex" and re.fullmatch(r"-?\d+", value):
        return "tabIndex={%s}" % value
    if rname in ("draggable",) and value in ("true", "false"):
        return "%s={%s}" % (rname, value)
    if '"' in value or "\\" in value:
        return "%s={%s}" % (rname, json.dumps(value, ensure_ascii=False))
    return '%s="%s"' % (rname, value)


# ---------- emit ----------

def jsx_text(t):
    """A run of HTML text (no holes) as JSX. Whitespace collapses as HTML would."""
    t = re.sub(r"\s+", " ", t)
    if t == "":
        return ""
    if t.strip() == "":
        return '{" "}'
    lead = t[0] == " "
    trail = t[-1] == " "
    core = t.strip()
    if re.search(r"[{}<>]", core) or core.startswith("//"):
        body = "{" + json.dumps(core, ensure_ascii=False) + "}"
    else:
        body = core.replace("'", "&apos;").replace('"', "&quot;")
    return ('{" "}' if lead else "") + body + ('{" "}' if trail else "")


class Emitter:
    def __init__(self, vname="v", replace=None):
        self.vname = vname
        self.replace = replace or {}  # id(node) -> jsx string
        self.loop = 0

    def children(self, node, scope, ind):
        out = []
        for c in node.children:
            s = self.node(c, scope, ind)
            if s:
                out.append(s)
        return out

    def node(self, n, scope, ind):
        pad = "  " * ind
        if id(n) in self.replace:
            return pad + self.replace[id(n)]
        if n.kind == "comment":
            t = n.text.strip().replace("*/", "* /")
            t = re.sub(r"\n\s*", "\n" + pad + "   ", t)
            return pad + "{/* " + t + " */}"
        if n.kind == "text":
            t = n.text
            if t.strip() == "" and " " not in t:
                return ""
            if "{{" not in t:
                s = jsx_text(t)
                return pad + s if s else ""
            parts = HOLE.split(t)
            out = ""
            for i, p in enumerate(parts):
                if i % 2:
                    out += "{" + hole_expr(p, scope, self.vname) + "}"
                else:
                    out += jsx_text(p)
            return pad + out
        name = n.name
        if name == "sc-if":
            cond = hole_expr(whole_hole(n.attr("value")), scope, self.vname)
            kids = self.children(n, scope, ind + 2)
            return "%s{%s ? (\n%s  <>\n%s\n%s  </>\n%s) : null}" % (pad, cond, pad, "\n".join(kids), pad, pad)
        if name == "sc-for":
            lst = hole_expr(whole_hole(n.attr("list")), scope, self.vname)
            var = n.attr("as") or "item"
            self.loop += 1
            idx = "i" + (str(self.loop) if self.loop > 1 else "")
            sc = dict(scope)
            sc[var] = var
            sc["$index"] = idx
            kids = self.children(n, sc, ind + 2)
            self.loop -= 1
            return "%s{%s.map((%s, %s) => (\n%s  <Fragment key={%s}>\n%s\n%s  </Fragment>\n%s))}" % (
                pad, lst, var, idx, pad, idx, "\n".join(kids), pad, pad)
        attrs = [a for a in (attr_jsx(k, v, scope, self.vname) for k, v in n.attrs) if a]
        open_ = "<" + name + ("" if not attrs else " " + " ".join(attrs))
        if name in VOID or not n.children:
            return pad + open_ + " />"
        kids = self.children(n, scope, ind + 1)
        if not kids:
            return pad + open_ + " />"
        # keep short inline content on one line
        return pad + open_ + ">\n" + "\n".join(kids) + "\n" + pad + "</" + name + ">"


def find(node, pred):
    if node.kind == "el" and pred(node):
        return node
    for c in node.children:
        r = find(c, pred)
        if r:
            return r
    return None


def find_all(node, pred, out=None):
    out = [] if out is None else out
    if node.kind == "el" and pred(node):
        out.append(node)
    for c in node.children:
        find_all(c, pred, out)
    return out
