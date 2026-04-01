import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zenki Group | Manufacturing, Distribution and Trading";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#3D8EB9",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#3D8EB9",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Zenki Group
          </p>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Manufacturing.{"\n"}Distribution.{"\n"}Trading.
          </h1>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontSize: 20,
              color: "#6B7280",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Vertically integrated operations from Karachi
          </p>
          <p
            style={{
              fontSize: 18,
              color: "#3D8EB9",
              fontWeight: 600,
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            zenki-pk.com
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
