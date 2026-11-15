/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

export function Nav() {
  return (
    <header
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px 32px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px 32px",
      }}
    >
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minHeight: "44px",
          color: "var(--perron-color-text-primary)",
          textDecoration: "none",
          fontFamily: "var(--perron-font-family-display)",
          fontWeight: "700",
          fontSize: "18px",
          letterSpacing: "-0.01em",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "var(--perron-radius-sm)",
            background: "var(--perron-color-surface-brand)",
            color: "var(--perron-color-text-on-color-dark)",
            fontFamily: "var(--perron-font-family-body)",
            fontWeight: "700",
            fontSize: "16px",
            letterSpacing: "0.12px",
          }}
        >
          M
        </span>
        <span>Marcin Sieradzki</span>
      </a>
      <nav
        aria-label="Main"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0 28px",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        <a
          href="#work"
          style={{ padding: "11px 0", color: "var(--perron-color-text-secondary)", textDecoration: "none" }}
        >
          Work
        </a>
        <a
          href="#experience"
          style={{ padding: "11px 0", color: "var(--perron-color-text-secondary)", textDecoration: "none" }}
        >
          Experience
        </a>
        <a
          href="#about"
          style={{ padding: "11px 0", color: "var(--perron-color-text-secondary)", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="#contact"
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: "44px",
            boxSizing: "border-box",
            padding: "0 16px",
            border: "1px solid var(--perron-color-border-control)",
            borderRadius: "var(--perron-radius-md)",
            color: "var(--perron-color-text-primary)",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
