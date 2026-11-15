/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */
import portrait from "@/assets/marcin.webp";
import type { PortraitVals } from "./Portrait";

export function PortraitView({ v }: { v: PortraitVals }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        ref={v.faceBox}
        onPointerDown={v.faceDown}
        onPointerMove={v.faceMove}
        onPointerUp={v.faceUp}
        onPointerCancel={v.faceUp}
        onLostPointerCapture={v.faceLost}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1024 / 1284",
          touchAction: "pan-y",
          cursor: "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        <div
          ref={v.faceDisc}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "0",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            background: v.faceTint,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "0",
            overflow: "hidden",
            borderRadius: "0 0 50% 50% / 0 0 39.875% 39.875%",
            pointerEvents: "none",
          }}
        >
          <img
            ref={v.faceImg}
            src={portrait.src}
            alt="Marcin Sieradzki, smiling, wearing white headphones"
            fetchPriority="high"
            draggable={false}
            onLoad={v.faceLoaded}
            style={{
              display: "block",
              width: "100%",
              aspectRatio: "1024 / 1284",
              objectFit: "contain",
              objectPosition: "50% 100%",
              opacity: v.faceImgOpacity,
            }}
          />
        </div>
        <canvas
          ref={v.faceCanvas}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-20%",
            top: "-20%",
            width: "140%",
            aspectRatio: "1024 / 1284",
            pointerEvents: "none",
          }}
        />
        <div
          ref={v.faceGhost}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            display: "flex",
            alignItems: "flex-start",
            pointerEvents: "none",
            opacity: "0",
            willChange: "transform, opacity",
          }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" aria-hidden="true" style={{ flex: "none" }}>
            <path
              d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
              fill="#FF7EB6"
              stroke="#0A0C10"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              margin: "14px 0 0 -2px",
              padding: "3px 7px",
              borderRadius: "var(--perron-radius-xs)",
              background: "#FF7EB6",
              color: "var(--perron-color-text-on-color-dark)",
              font: "600 11px/1.3 var(--perron-font-family-data)",
              whiteSpace: "nowrap",
            }}
          >
            visitor
          </span>
        </div>
      </div>
      <p
        style={{
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: "14px",
          lineHeight: "1.4",
          fontWeight: "500",
          color: "var(--perron-color-text-secondary)",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ flex: "none" }}
        >
          <path d="M8 2v12M2 8h12M8 2L6 4M8 2l2 2M8 14l-2-2M8 14l2-2M2 8l2-2M2 8l2 2M14 8l-2-2M14 8l-2 2" />
        </svg>
        <span>Grab my face and pull. It springs back.</span>
      </p>
    </div>
  );
}
