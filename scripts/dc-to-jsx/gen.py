"""Generate the view components of the Next.js port from the Version E template."""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))
from convert import Emitter, parse, find, find_all  # noqa: E402

SRC = sys.argv[1]
OUT = sys.argv[2]  # src/components/site

src = open(SRC, encoding="utf-8").read()
tpl = src[src.index("</helmet>") + len("</helmet>"):src.index("</x-dc>")]
tree = parse(tpl)
root = find(tree, lambda n: n.name == "div" and n.attr("data-theme") == "dark")

HEADER = "/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */\n"


def write(rel, text):
    p = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, "w", encoding="utf-8").write(text)


def body(node, em, ind=2):
    return em.node(node, {}, ind)


def static_component(name, node, extra_imports=""):
    em = Emitter()
    jsx = body(node, em)
    return HEADER + extra_imports + "\nexport function %s() {\n  return (\n%s\n  );\n}\n" % (name, jsx)


def by_id(i):
    return find(root, lambda n: n.attr("id") == i)


header = find(root, lambda n: n.name == "header")
hero = by_id("top")
work = by_id("work")
experience = by_id("experience")
method = by_id("method")
about = by_id("about")
contact = by_id("contact")
footer = find(root, lambda n: n.name == "footer" and n.parent is root)
modal = [c for c in root.children if c.kind == "el" and c.name == "sc-if"][-1]


def between_markers(parent_tree, start, end):
    """The single element between two marker comments."""
    hits = []

    def walk(n):
        for i, c in enumerate(n.children):
            if c.kind == "comment" and c.text.strip() == start:
                j = i + 1
                while not (n.children[j].kind == "comment" and n.children[j].text.strip() == end):
                    if n.children[j].kind == "el":
                        hits.append(n.children[j])
                    j += 1
            walk(c)

    walk(parent_tree)
    assert len(hits) == 1, hits
    return hits[0]


portrait = between_markers(hero, "CONCEPT:START", "CONCEPT:END")

# Nav, sections without logic
write("Nav.tsx", static_component("Nav", header))
write("Experience.tsx", static_component("Experience", experience))
write("Method.tsx", static_component("Method", method))
write("About.tsx", static_component("About", about))
write("Footer.tsx", static_component("Footer", footer))

# Hero: static, with the portrait as a client component
em = Emitter(replace={id(portrait): "<Portrait />"})
write("Hero.tsx", HEADER + 'import { Portrait } from "./Portrait";\n' +
      "\nexport function Hero() {\n  return (\n%s\n  );\n}\n" % body(hero, em))

# Portrait view
em = Emitter()
write("PortraitView.tsx", HEADER + 'import type { PortraitVals } from "./Portrait";\n' +
      "\nexport function PortraitView({ v }: { v: PortraitVals }) {\n  return (\n%s\n  );\n}\n" % body(portrait, em))

# Contact view
em = Emitter()
write("ContactView.tsx", HEADER + 'import { Fragment } from "react";\nimport type { ContactVals } from "./Contact";\n' +
      "\nexport function ContactView({ v }: { v: ContactVals }) {\n  return (\n%s\n  );\n}\n" % body(contact, em))

# Work view, with the project bodies split out
case_ifs = find_all(modal, lambda n: n.name == "sc-if" and (n.attr("value") or "").startswith("{{caseIs.p"))
names = ["GdsStudio", "PerronMylder", "SoftwareFactory", "Grundfos", "MaerskDesignSystem", "Schedules", "VendorMasterData", "MicroFrontends"]
assert len(case_ifs) == 8
replace = {}
for k, ci in enumerate(case_ifs):
    els = [c for c in ci.children if c.kind == "el"]
    assert len(els) == 1
    art = els[0]
    write("cases/Case%s.tsx" % names[k], static_component("Case" + names[k], art))
    replace[id(art)] = "<Case%s />" % names[k]
em = Emitter(replace=replace)
work_jsx = body(work, em, 3)
modal_jsx = body(modal, em, 3)
imports = 'import { Fragment, type ReactNode } from "react";\nimport type { WorkVals } from "./Work";\n' + "".join(
    'import { Case%s } from "./cases/Case%s";\n' % (n, n) for n in names)
write("WorkView.tsx", HEADER + imports +
      "\n/* The Work section, then whatever follows it on the page (children), then the project modal.\n"
      "   The modal stays last in the page so it paints over everything, as in the prototype. */\n"
      "export function WorkView({ v, children }: { v: WorkVals; children?: ReactNode }) {\n  return (\n    <>\n%s\n      {children}\n%s\n    </>\n  );\n}\n" % (work_jsx, modal_jsx))

# root style, for page.tsx
print(root.attr("style"))
