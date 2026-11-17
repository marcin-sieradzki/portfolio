"use client";

/* The project modals (each a drawing and its copy) are not part of the first load: phones would download and parse
   all eight drawings before anyone opens one. Each is its own chunk, fetched when its card scrolls near the screen
   (on idle) or, at the latest, when the modal opens. */
import { Component, Fragment, Suspense, use, type ComponentType, type ReactNode } from "react";
import { useT } from "@/i18n/LocaleProvider";
import type { ProjectId } from "@/lib/works";

const LOADERS: Record<ProjectId, () => Promise<ComponentType>> = {
  studio: () => import("./CaseGdsStudio").then((m) => m.CaseGdsStudio),
  "grundfos-ds": () => import("./CaseGrundfos").then((m) => m.CaseGrundfos),
  "maersk-ds": () => import("./CaseMaerskDesignSystem").then((m) => m.CaseMaerskDesignSystem),
  "perron-mylder": () => import("./CasePerronMylder").then((m) => m.CasePerronMylder),
  schedules: () => import("./CaseSchedules").then((m) => m.CaseSchedules),
  vendor: () => import("./CaseVendorMasterData").then((m) => m.CaseVendorMasterData),
  factory: () => import("./CaseSoftwareFactory").then((m) => m.CaseSoftwareFactory),
  "vml-map": () => import("./CaseMicroFrontends").then((m) => m.CaseMicroFrontends),
};

const loaded: Partial<Record<ProjectId, ComponentType>> = {};
const pending: Partial<Record<ProjectId, Promise<ComponentType>>> = {};

/* Fetch a project's modal once. A failed fetch (a dropped connection) is forgotten, so the next try fetches again. */
export function loadCase(id: ProjectId): Promise<ComponentType> {
  let p = pending[id];
  if (!p) {
    p = LOADERS[id]().then(
      (C) => (loaded[id] = C),
      (err) => {
        delete pending[id];
        throw err;
      },
    );
    pending[id] = p;
  }
  return p;
}

/* Fetch it when the browser has nothing better to do. Errors are left for the modal to show. */
export function prefetchCase(id: ProjectId) {
  if (loaded[id] || pending[id]) return;
  const go = () => void loadCase(id).catch(() => {});
  if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(go, { timeout: 2000 });
  else setTimeout(go, 200);
}

function CaseInner({ id }: { id: ProjectId }) {
  const C = loaded[id] ?? use(loadCase(id));
  /* C is the module's own export, the same component every time for a given project, not one made here. */
  // eslint-disable-next-line react-hooks/static-components
  return <C />;
}

/* Keeps the panel's height while the drawing arrives, so the modal does not jump. */
function CaseWait({ children }: { children?: ReactNode }) {
  return (
    <div
      aria-busy={children ? undefined : true}
      style={{
        minHeight: "min(60vh, 520px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "24px",
        boxSizing: "border-box",
        color: "var(--perron-color-text-secondary)",
        font: "400 15px/1.5 var(--perron-font-family-body)",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

function CaseFailed({ onRetry }: { onRetry: () => void }) {
  const t = useT();
  return (
    <CaseWait>
      <p style={{ margin: "0" }}>{t("This project did not load.")}</p>
      <button type="button" className="cs-btn" onClick={onRetry} style={{ padding: "8px 16px" }}>
        {t("Try again")}
      </button>
    </CaseWait>
  );
}

/* A dropped connection shows a retry button in the modal instead of taking the page down. */
class CaseBoundary extends Component<{ id: ProjectId; children: ReactNode }, { failed: boolean; tries: number }> {
  state = { failed: false, tries: 0 };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidUpdate(prev: { id: ProjectId }) {
    if (prev.id !== this.props.id && this.state.failed) this.setState({ failed: false });
  }
  render() {
    if (this.state.failed)
      return <CaseFailed onRetry={() => this.setState((s) => ({ failed: false, tries: s.tries + 1 }))} />;
    return <Fragment key={this.state.tries}>{this.props.children}</Fragment>;
  }
}

/* The modal body of one project. */
export function CaseBody({ id }: { id: ProjectId }) {
  return (
    <CaseBoundary id={id}>
      <Suspense fallback={<CaseWait />}>
        <CaseInner id={id} />
      </Suspense>
    </CaseBoundary>
  );
}
