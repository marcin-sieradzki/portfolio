/* The drawing in the Software factory modal. Underneath are the five layers of trust the factory stands on, drawn
   as a stack that is built from the bottom up. On top is the factory itself: a spec becomes tickets, an implementer
   pump builds each one, three brakes sit on the pipe, a hand valve is the human review, and a triage pipe runs
   from the end back to the factory. The Component Factory is a tag in the corner.
   Flat and schematic, in the same palette and with the same pipes and pumps as the other project drawings. */
import type { ReactNode } from "react";
import { useT } from "@/i18n/LocaleProvider";
import { AGENTS } from "@/lib/works";

const BG0 = "#0A0C10",
  BG1 = "#10141B",
  BG2 = "#141A25",
  BG3 = "#1A202B";
const L1 = "#232A36",
  L2 = "#2E3746",
  L3 = "#3A4557",
  L4 = "#4A5568";
const T1 = "#F2F4F7",
  T2 = "#A4ADBB",
  T3 = "#7C8696";
const GREEN = "#3DDC97",
  ORANGE = "#FF8A5B",
  LIME = "#C8F560";
const MONO = "JetBrains Mono, ui-monospace, Menlo, monospace";

const Y = 166; /* the main line */
const Y_BACK = 242; /* the rework pipe under it */
const Y_TRIAGE = 40; /* the triage pipe over it */

/* The layers of trust, from the top of the stack down. They are built in the other order: the codebase first. */
const LAYERS = [
  { no: 5, name: "human review", note: "last, and with the least left to catch" },
  { no: 4, name: "prose", note: "rules, skills, AGENTS.md" },
  { no: 3, name: "verification", note: "agents run the app and show the evidence" },
  { no: 2, name: "static analysis", note: "lint, types, tests, CI" },
  { no: 1, name: "codebase", note: "clear APIs, firm architecture, constant refactoring" },
];
const LAYER_TOP = 280,
  LAYER_H = 17,
  LAYER_STEP = 60; /* each layer is this much wider on both sides than the one above it */

function Label({
  x,
  y,
  children,
  fill = T2,
  size = 10,
  anchor = "middle",
  weight = 500,
  spacing,
}: {
  x: number;
  y: number;
  children: ReactNode;
  fill?: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
  weight?: number;
  spacing?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily={MONO}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      letterSpacing={spacing}
    >
      {children}
    </text>
  );
}

/* A tube: outer wall, dark bore, and dashes that move with the flow. */
function Pipe({ d, color, w = 12, dur = "1.2s" }: { d: string; color: string; w?: number; dur?: string }) {
  return (
    <>
      <path d={d} fill="none" stroke={L2} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={BG0} strokeWidth={w - 4} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 13"
        className="mv"
        style={{ animation: `csFlow ${dur} linear infinite` }}
      />
    </>
  );
}

/* A rounded box with one line of text, centred. */
function Chip({
  x,
  y,
  w,
  h,
  children,
  stroke = L2,
  fill = BG1,
  color = T1,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children: ReactNode;
  stroke?: string;
  fill?: string;
  color?: string;
}) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <Label x={x + w / 2} y={y + h / 2 + 3.8} fill={color} size={10.5} weight={600}>
        {children}
      </Label>
    </>
  );
}

/* A vertical inline pump standing on the pipe: base with two flanges, stage sleeve, motor with the agent's colour. */
function Pump({ x, y, color, scale }: { x: number; y: number; color: string; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-23" y="-15" width="46" height="30" rx="5" fill={BG3} stroke={L4} strokeWidth="1.5" />
      <rect x="-29" y="-9" width="6" height="18" rx="1.5" fill={L2} stroke={L4} strokeWidth="1.5" />
      <rect x="23" y="-9" width="6" height="18" rx="1.5" fill={L2} stroke={L4} strokeWidth="1.5" />
      <rect x="-14" y="-78" width="28" height="63" rx="2" fill={BG2} stroke={L3} strokeWidth="1.5" />
      <path d="M-14 -65.4h28M-14 -52.8h28M-14 -40.2h28M-14 -27.6h28" fill="none" stroke={L2} strokeWidth="1.5" />
      <rect x="-20" y="-140" width="40" height="62" rx="6" fill={L1} stroke={L4} strokeWidth="1.5" />
      <path d="M-16 -118h32M-16 -111h32M-16 -104h32M-16 -97h32M-16 -90h32" fill="none" stroke={L3} strokeWidth="1.5" />
      <rect x="-20" y="-134" width="40" height="9" fill={color} />
      <rect x="-12" y="-147" width="24" height="8" rx="3" fill={L2} stroke={L4} strokeWidth="1.5" />
      <circle r="5" fill={color} className="mv" style={{ animation: "csPulse 3.2s ease-in-out infinite" }} />
    </g>
  );
}

/* A brake on the main line: a gauge with its sign, and two lines of text under it. */
function Brake({ x, name, note, children }: { x: number; name: string; note: string; children: ReactNode }) {
  return (
    <>
      <circle cx={x} cy={Y} r="18" fill={BG1} stroke={L4} strokeWidth="1.5" />
      <g
        transform={`translate(${x} ${Y})`}
        fill="none"
        stroke={GREEN}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
      <Label x={x} y={Y + 38} fill={T1} weight={600}>
        {name}
      </Label>
      <Label x={x} y={Y + 51}>
        {note}
      </Label>
    </>
  );
}

/* The eight agents of the Component Factory, in the order they work. */
const LINE = ["capture", "research", "architect", "code", "test", "docs", "a11y", "visual"] as const;

export function FactoryDrawing() {
  const t = useT();
  return (
    <svg
      viewBox="0 0 1040 380"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={t(
        "Underneath, a stack of five layers of trust, built from the bottom up: the codebase, static analysis, verification, prose and human review. On top of it, the software factory as one long pipe. A spec becomes tickets, an implementer pump builds each ticket test-first, and three brakes sit on the pipe: checks, review and verdict. A return pipe under them is marked rework, two rounds at most. A hand valve marked human review leads to a pull request, and a pipe marked triage after every run leads from there back to the factory. A tag in the corner names the side line, the Component Factory, with 22 components merged.",
      )}
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      {/* ---------- the software factory, the main line ---------- */}
      <Label x={40} y={26} fill={T3} anchor="start" weight={600} spacing={0.9}>
        {t("SOFTWARE FACTORY")}
      </Label>

      {/* the side line, as a tag: the eight agents of the Component Factory */}
      <rect
        x="34"
        y="40"
        width="262"
        height="46"
        rx="8"
        fill={BG1}
        stroke={L2}
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <Label x={46} y={58} anchor="start" fill={T1} size={10.5} weight={600}>
        {t("side line: Component Factory")}
      </Label>
      {LINE.map((key, i) => (
        <circle
          key={key}
          cx={50 + i * 12}
          cy={72}
          r="4"
          fill={AGENTS[key].color}
          className="mv"
          style={{ animation: `csPulse 3.2s ease-in-out ${(-3.2 + i * 0.4).toFixed(1)}s infinite` }}
        />
      ))}
      <Label x={148} y={75.5} anchor="start">
        {t("22 components merged")}
      </Label>

      {/* triage: from the pull request back to the factory */}
      <Pipe d={`M924 ${Y - 16}V${Y_TRIAGE}H330V${Y - 106}`} color={LIME} w={10} dur="1.6s" />
      <Chip x={470} y={Y_TRIAGE - 14} w={316} h={28} stroke={LIME} fill={BG1} color={LIME}>
        {t("triage after every run: the factory improves")}
      </Chip>

      {/* rework: from behind the brakes back to the implementer */}
      <Pipe d={`M756 ${Y}V${Y_BACK}H282V${Y}`} color={ORANGE} w={10} dur="1.4s" />
      <Chip x={420} y={Y_BACK - 13} w={204} h={26}>
        {t("rework, two rounds at most")}
      </Chip>

      <Pipe d={`M120 ${Y}H870`} color={GREEN} />

      <Chip x={34} y={Y - 17} w={86} h={34}>
        {t("spec")}
      </Chip>

      {/* the spec is cut into tickets */}
      <rect x="184" y={Y - 25} width="84" height="34" rx="8" fill={BG1} stroke={L2} strokeWidth="1.5" />
      <rect x="180" y={Y - 21} width="84" height="34" rx="8" fill={BG1} stroke={L2} strokeWidth="1.5" />
      <Chip x={176} y={Y - 17} w={84} h={34} stroke={L4}>
        {t("tickets")}
      </Chip>
      <Label x={218} y={Y + 38}>
        {t("cut small")}
      </Label>

      <Pump x={330} y={Y} color={AGENTS.code.color} scale={0.72} />
      <Label x={334} y={Y + 38} fill={T1} weight={600}>
        implementer
      </Label>
      <Label x={334} y={Y + 51}>
        {t("test-first")}
      </Label>

      {/* the three brakes */}
      <path d={`M448 ${Y - 30}v-6h264v6`} fill="none" stroke={L4} strokeWidth="1.5" />
      <Label x={580} y={Y - 44} fill={T3} weight={600} spacing={0.9}>
        {t("THREE BRAKES ON EVERY TICKET")}
      </Label>
      <Brake x={470} name={t("checks")} note={t("automated")}>
        <path d="M-6.5 0l4.4 4.4 8.4-9" />
      </Brake>
      <Brake x={580} name="review" note={t("the diff, cold")}>
        <path d="M-8 0q8 -9 16 0q-8 9 -16 0z" />
        <circle r="2.2" fill={GREEN} stroke="none" />
      </Brake>
      <Brake x={690} name={t("verdict")} note={t("the running app")}>
        <path d="M-4.5 -7.5v15l11 -7.5z" />
      </Brake>

      {/* hand valve: the human review */}
      <path
        d={`M806 ${Y - 14}l22 28h-44zM806 ${Y + 14}l22 -28h-44z`}
        fill={BG3}
        stroke={L4}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d={`M806 ${Y - 12}V${Y - 26}`} fill="none" stroke={L4} strokeWidth="2" />
      <path d={`M792 ${Y - 26}H820`} fill="none" stroke={T1} strokeWidth="3" strokeLinecap="round" />
      <Label x={806} y={Y + 38} fill={T1} weight={600}>
        {t("human review")}
      </Label>

      <Chip x={866} y={Y - 16} w={116} h={32} stroke={GREEN} fill="rgba(61,220,151,0.12)" color={GREEN}>
        pull request
      </Chip>

      {/* ---------- the five layers of trust the factory stands on ---------- */}
      <path d="M34 266H1006" fill="none" stroke={L2} strokeWidth="1.5" strokeDasharray="4 8" />
      <Label x={40} y={LAYER_TOP + 8} fill={T3} anchor="start" weight={600} spacing={0.9}>
        {t("FIRST, THE")}
      </Label>
      <Label x={40} y={LAYER_TOP + 21} fill={T3} anchor="start" weight={600} spacing={0.9}>
        {t("FIVE LAYERS")}
      </Label>
      <Label x={40} y={LAYER_TOP + 34} fill={T3} anchor="start" weight={600} spacing={0.9}>
        {t("OF TRUST")}
      </Label>
      {LAYERS.map((layer, i) => {
        const half = 190 + i * LAYER_STEP;
        const y = LAYER_TOP + i * LAYER_H;
        const base = layer.no === 1;
        return (
          <g key={layer.no}>
            <rect
              x={570 - half}
              y={y}
              width={half * 2}
              height={LAYER_H - 3}
              rx="4"
              fill={base ? "rgba(61,220,151,0.12)" : BG1}
              stroke={base ? GREEN : L3}
              strokeWidth="1.5"
            />
            <text x={570} y={y + 10.5} textAnchor="middle" fontFamily={MONO} fontSize="10">
              <tspan fill={GREEN} fontWeight="600">
                {layer.no}
              </tspan>
              <tspan fill={T1} fontWeight="600">
                {" " + t(layer.name)}
              </tspan>
              <tspan fill={T2}>{" · " + t(layer.note)}</tspan>
            </text>
          </g>
        );
      })}
      {/* built from the bottom up */}
      <path
        d={`M1012 ${LAYER_TOP + 5 * LAYER_H - 6}V${LAYER_TOP + 30}m-4.5 6l4.5 -6l4.5 6`}
        fill="none"
        stroke={L4}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
