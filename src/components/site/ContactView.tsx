/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */
import { Fragment } from "react";
import type { ContactVals } from "./Contact";

export function ContactView({ v }: { v: ContactVals }) {
  return (
    <section
      id="contact"
      style={{ maxWidth: "1240px", margin: "0 auto", boxSizing: "border-box", padding: "120px 32px 0" }}
    >
      {/* The card clips and has no top padding of its own, so in the two-column layout the badge's strap comes down from the card's top edge. When the columns stack, the text column's bottom padding plus the row gap leave the room the pivot needs above the badge. The card also hands pointer moves to the badge for the tilt. */}
      <div
        onPointerMove={v.badgeHover}
        onPointerLeave={v.badgeLeave}
        style={{
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "0 clamp(32px, 6vw, 72px)",
          border: "1px solid var(--perron-color-border-subtle)",
          borderRadius: "var(--perron-radius-xl)",
          backgroundColor: "var(--perron-color-surface-raised)",
          backgroundImage: "radial-gradient(var(--perron-color-border-subtle) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "40px 64px",
        }}
      >
        <div
          style={{
            flex: "3 1 440px",
            minWidth: "0",
            alignSelf: "center",
            boxSizing: "border-box",
            padding: "clamp(32px, 6vw, 72px) 0",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <span
              style={{
                font: "600 12px/1.3 var(--perron-font-family-body)",
                letterSpacing: "0.88px",
                textTransform: "uppercase",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              <span style={{ color: "var(--perron-color-text-brand)" }}>05</span> / Contact
            </span>
            <h2
              style={{
                fontFamily: "var(--perron-font-family-display)",
                margin: "0",
                fontSize: "clamp(36px, 5.4vw, 76px)",
                lineHeight: "1",
                letterSpacing: "-0.04em",
                fontWeight: "700",
                textWrap: "balance",
              }}
            >
              Next stop: your team?
            </h2>
            <p
              style={{
                margin: "0",
                maxWidth: "520px",
                fontSize: "17px",
                lineHeight: "1.55",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              If you want AI agents working inside your software lifecycle and your design system, and someone to lead
              that work, I would like to hear about it.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
            <a
              href="mailto:marcin.sieradzki97@gmail.com"
              className="ct-email"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                boxSizing: "border-box",
                padding: "0 24px",
                border: "1px solid transparent",
                borderRadius: "var(--perron-radius-md)",
                background: "var(--perron-color-surface-inverse)",
                color: "var(--perron-color-text-inverse)",
                fontWeight: "600",
                fontSize: "17px",
                textDecoration: "none",
                overflowWrap: "anywhere",
              }}
            >
              marcin.sieradzki97@gmail.com{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 24px", fontSize: "15.5px", fontWeight: "600" }}>
              <a
                href="https://www.linkedin.com/in/marcin-sieradzki-5a9774150/"
                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 0", textDecoration: "none" }}
              >
                LinkedIn{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 11l6-6M6 5h5v5" />
                </svg>
              </a>
              <a
                href="https://github.com/marcin-sieradzki"
                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 0", textDecoration: "none" }}
              >
                GitHub{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 11l6-6M6 5h5v5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ flex: "1 1 400px", minWidth: "0", boxSizing: "border-box", paddingBottom: "clamp(28px, 4vw, 40px)" }}
        >
          {/* CONCEPT C:START */}
          {/* Concept C, lanyard badge. It sizes itself from its own width through the ruler. The pivot sits 40 px (times the scale) above this box: the card clips it at its top edge. For the tilt, the card binds onPointerMove to badgeHover and onPointerLeave to badgeLeave. Script side: the BADGE_ constants, the badge methods and badgeVals. Helmet side: keyframes badgeSway. */}
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              ref={v.badgeRuler}
              aria-hidden="true"
              style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "0", pointerEvents: "none" }}
            />
            <div ref={v.badgeStage} style={{ position: "relative", alignSelf: "stretch", height: "730px" }}>
              <div
                ref={v.badgeScaler}
                style={{ position: "absolute", left: "50%", top: "0", width: "0", height: "0", transformOrigin: "0 0" }}
              >
                <div
                  ref={v.badgeSway}
                  className="mv"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "-40px",
                    width: "0",
                    height: "0",
                    transformOrigin: "0 0",
                    animation: v.badgeSwayAnim,
                  }}
                >
                  <div
                    ref={v.badgeArm}
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "0",
                      height: "0",
                      transformOrigin: "0 0",
                      willChange: "transform",
                    }}
                  >
                    {/* strap */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-15px",
                        top: "-12px",
                        width: "30px",
                        height: "272px",
                        overflow: "hidden",
                        background: v.badgeStrap,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          bottom: "0",
                          width: "30px",
                          writingMode: "vertical-rl",
                          whiteSpace: "nowrap",
                          font: "600 9px/30px var(--perron-font-family-data)",
                          letterSpacing: "0.1em",
                          color: "var(--perron-color-text-on-color-dark)",
                        }}
                      >
                        AGENTS BUILD IT · CHECKS DECIDE · AGENTS BUILD IT · CHECKS DECIDE ·
                      </span>
                    </span>
                    {/* clip */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-22px",
                        top: "252px",
                        width: "44px",
                        height: "28px",
                        boxSizing: "border-box",
                        borderRadius: "var(--perron-radius-md)",
                        background: "var(--perron-palette-neutral-400)",
                        border: "1px solid var(--perron-palette-neutral-300)",
                      }}
                    />
                    {/* badge */}
                    <button
                      ref={v.badgeBtn}
                      type="button"
                      aria-label="Flip the badge to show contact details"
                      aria-pressed={v.badgeFlipped}
                      onClick={v.badgeFlip}
                      onPointerDown={v.badgeDown}
                      onPointerMove={v.badgeMove}
                      onPointerUp={v.badgeUp}
                      onPointerCancel={v.badgeUp}
                      onLostPointerCapture={v.badgeUp}
                      style={{
                        position: "absolute",
                        left: "-165px",
                        top: "290px",
                        width: "330px",
                        height: "460px",
                        margin: "0",
                        padding: "0",
                        border: "0",
                        borderRadius: "var(--perron-radius-xl)",
                        background: "none",
                        color: "inherit",
                        font: "inherit",
                        textAlign: "left",
                        cursor: "grab",
                        touchAction: "pan-y",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        WebkitTapHighlightColor: "transparent",
                        perspective: "1100px",
                      }}
                    >
                      <span
                        ref={v.badgeTilt}
                        style={{
                          position: "absolute",
                          inset: "0",
                          display: "block",
                          transformStyle: "preserve-3d",
                          transformOrigin: "50% 18px",
                          willChange: "transform",
                          pointerEvents: "none",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            inset: "0",
                            display: "block",
                            transformStyle: "preserve-3d",
                            transform: v.badgeFlipTf,
                            transition: `transform ${v.badgeFlipMs} var(--perron-easing-sheet)`,
                          }}
                        >
                          {/* front */}
                          <span
                            style={{
                              position: "absolute",
                              inset: "0",
                              boxSizing: "border-box",
                              padding: "36px 22px 20px",
                              borderRadius: "var(--perron-radius-xl)",
                              background: "var(--perron-color-surface-inverse)",
                              color: "var(--perron-color-text-on-color-dark)",
                              boxShadow: "var(--perron-shadow-panel)",
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(0deg)",
                              display: "flex",
                              flexDirection: "column",
                              gap: "12px",
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                position: "absolute",
                                left: "50%",
                                top: "13px",
                                width: "56px",
                                height: "10px",
                                marginLeft: "-28px",
                                borderRadius: "var(--perron-radius-full)",
                                background: "var(--perron-color-surface-default)",
                              }}
                            />
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "12px",
                                font: "600 11px/1 var(--perron-font-family-data)",
                                letterSpacing: "0.08em",
                              }}
                            >
                              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span
                                  aria-hidden="true"
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "24px",
                                    minWidth: "24px",
                                    boxSizing: "border-box",
                                    padding: "0 5px",
                                    borderRadius: "var(--perron-radius-sm)",
                                    font: "700 14px/1 var(--perron-font-family-body)",
                                    letterSpacing: "0.12px",
                                    background: v.badgeStrap,
                                    color: "var(--perron-color-text-on-color-dark)",
                                  }}
                                >
                                  M
                                </span>
                                <span>LINE M · CPH</span>
                              </span>
                              <span>2026</span>
                            </span>
                            <span
                              style={{
                                position: "relative",
                                flex: "none",
                                display: "block",
                                height: "200px",
                                overflow: "hidden",
                                borderRadius: "var(--perron-radius-lg)",
                                background: v.badgePhoto,
                              }}
                            >
                              <img
                                src="/images/marcin.webp"
                                alt="Marcin Sieradzki, smiling, wearing white headphones"
                                draggable={false}
                                style={{
                                  position: "absolute",
                                  left: "16%",
                                  top: "4%",
                                  width: "66.2%",
                                  height: "96%",
                                  objectFit: "cover",
                                  objectPosition: "50% 0%",
                                  display: "block",
                                }}
                              />
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span
                                style={{
                                  fontFamily: "var(--perron-font-family-display)",
                                  fontSize: "34px",
                                  lineHeight: "1",
                                  letterSpacing: "-0.03em",
                                  fontWeight: "700",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Marcin Sieradzki
                              </span>
                              <span style={{ fontSize: "14.5px", lineHeight: "1.3", fontWeight: "600" }}>
                                Lead Software Engineer
                              </span>
                            </span>
                            <span style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                              <span
                                style={{
                                  padding: "3px 8px",
                                  borderRadius: "var(--perron-radius-full)",
                                  font: "600 10.5px/1.3 var(--perron-font-family-body)",
                                  letterSpacing: "0.6px",
                                  textTransform: "uppercase",
                                  border: "1px solid var(--perron-color-text-on-color-dark)",
                                }}
                              >
                                AI agents
                              </span>
                              <span
                                style={{
                                  padding: "3px 8px",
                                  borderRadius: "var(--perron-radius-full)",
                                  font: "600 10.5px/1.3 var(--perron-font-family-body)",
                                  letterSpacing: "0.6px",
                                  textTransform: "uppercase",
                                  border: "1px solid var(--perron-color-text-on-color-dark)",
                                }}
                              >
                                Design systems
                              </span>
                              <span
                                style={{
                                  padding: "3px 8px",
                                  borderRadius: "var(--perron-radius-full)",
                                  font: "600 10.5px/1.3 var(--perron-font-family-body)",
                                  letterSpacing: "0.6px",
                                  textTransform: "uppercase",
                                  border: "1px solid var(--perron-color-text-on-color-dark)",
                                }}
                              >
                                Apps
                              </span>
                            </span>
                            <span
                              style={{
                                marginTop: "auto",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                gap: "12px",
                              }}
                            >
                              <span style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                                <span
                                  aria-hidden="true"
                                  style={{ display: "flex", alignItems: "stretch", gap: "2px", height: "24px" }}
                                >
                                  {v.badgeBars.map((b, i) => (
                                    <Fragment key={i}>
                                      <span
                                        style={{
                                          width: `${b.w}px`,
                                          background: "var(--perron-color-text-on-color-dark)",
                                        }}
                                      />
                                    </Fragment>
                                  ))}
                                </span>
                                <span
                                  style={{
                                    font: "600 10.5px/1 var(--perron-font-family-data)",
                                    letterSpacing: "0.1em",
                                  }}
                                >
                                  ACCESS · ALL LAYERS
                                </span>
                              </span>
                              <span
                                style={{
                                  flex: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "44px",
                                  height: "44px",
                                  borderRadius: "50%",
                                  background: "var(--perron-color-surface-default)",
                                }}
                              >
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="#3DDC97"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  role="img"
                                  aria-label="Verified"
                                >
                                  <path d="M3 8.5l3.2 3.2L13 4.8" />
                                </svg>
                              </span>
                            </span>
                          </span>
                          {/* back */}
                          <span
                            style={{
                              position: "absolute",
                              inset: "0",
                              boxSizing: "border-box",
                              padding: "36px 22px 20px",
                              borderRadius: "var(--perron-radius-xl)",
                              background: "var(--perron-color-surface-raised)",
                              border: "1px solid var(--perron-color-border-strong)",
                              color: "var(--perron-color-text-primary)",
                              boxShadow: "var(--perron-shadow-panel)",
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                              display: "flex",
                              flexDirection: "column",
                              gap: "16px",
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                position: "absolute",
                                left: "50%",
                                top: "12px",
                                width: "56px",
                                height: "10px",
                                marginLeft: "-28px",
                                boxSizing: "border-box",
                                borderRadius: "var(--perron-radius-full)",
                                background: "var(--perron-color-surface-default)",
                                border: "1px solid var(--perron-color-border-strong)",
                              }}
                            />
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                font: "600 12px/1.3 var(--perron-font-family-body)",
                                letterSpacing: "0.88px",
                                textTransform: "uppercase",
                                color: "var(--perron-color-text-secondary)",
                              }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  flex: "none",
                                  width: "14px",
                                  height: "14px",
                                  boxSizing: "border-box",
                                  borderRadius: "50%",
                                  border: "2px dashed var(--perron-color-text-secondary)",
                                }}
                              />
                              <span>Next stop</span>
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--perron-font-family-display)",
                                fontSize: "44px",
                                lineHeight: "1",
                                letterSpacing: "-0.03em",
                                fontWeight: "700",
                              }}
                            >
                              Your team?
                            </span>
                            <span
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                font: "500 12.5px/1.4 var(--perron-font-family-data)",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "3px",
                                  padding: "14px 0",
                                  borderTop: "1px solid var(--perron-color-border-subtle)",
                                }}
                              >
                                <span style={{ color: "var(--perron-color-text-secondary)" }}>Email</span>
                                <span style={{ overflowWrap: "anywhere" }}>marcin.sieradzki97@gmail.com</span>
                              </span>
                              <span
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "3px",
                                  padding: "14px 0",
                                  borderTop: "1px solid var(--perron-color-border-subtle)",
                                }}
                              >
                                <span style={{ color: "var(--perron-color-text-secondary)" }}>LinkedIn</span>
                                <span style={{ overflowWrap: "anywhere" }}>in/marcin-sieradzki-5a9774150</span>
                              </span>
                              <span
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "3px",
                                  padding: "14px 0",
                                  borderTop: "1px solid var(--perron-color-border-subtle)",
                                  borderBottom: "1px solid var(--perron-color-border-subtle)",
                                }}
                              >
                                <span style={{ color: "var(--perron-color-text-secondary)" }}>GitHub</span>
                                <span style={{ overflowWrap: "anywhere" }}>marcin-sieradzki</span>
                              </span>
                            </span>
                            <span
                              style={{
                                marginTop: "auto",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                gap: "12px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "13.5px",
                                  lineHeight: "1.45",
                                  color: "var(--perron-color-text-secondary)",
                                }}
                              >
                                Copenhagen, or remote. Tap to flip back.
                              </span>
                              <span
                                aria-hidden="true"
                                style={{
                                  flex: "none",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  height: "28px",
                                  minWidth: "28px",
                                  boxSizing: "border-box",
                                  padding: "0 6px",
                                  borderRadius: "var(--perron-radius-sm)",
                                  font: "700 16px/1 var(--perron-font-family-body)",
                                  letterSpacing: "0.12px",
                                  background: v.badgeStrap,
                                  color: "var(--perron-color-text-on-color-dark)",
                                }}
                              >
                                M
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </button>
                    {/* clip ring, drawn over the card so it reads as passing through the slot */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9px",
                        top: "272px",
                        width: "18px",
                        height: "40px",
                        boxSizing: "border-box",
                        borderRadius: "var(--perron-radius-full)",
                        border: "3px solid var(--perron-palette-neutral-500)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
                {/* peg at the pivot */}
                <span
                  ref={v.badgePivot}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-7px",
                    top: "-47px",
                    width: "14px",
                    height: "14px",
                    boxSizing: "border-box",
                    borderRadius: "50%",
                    background: "var(--perron-color-surface-inset)",
                    border: "2px solid var(--perron-color-border-control)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
            <p
              style={{
                margin: "0",
                textAlign: "center",
                font: "500 12.5px/1.5 var(--perron-font-family-data)",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              Drag the badge to swing it. Tap it to flip.
            </p>
          </div>
          {/* CONCEPT C:END */}
        </div>
      </div>
    </section>
  );
}
