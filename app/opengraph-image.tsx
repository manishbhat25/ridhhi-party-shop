import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} in ${site.locality}, ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 12% 12%, #FF7AB6 0%, transparent 36%), radial-gradient(circle at 88% 18%, #F4C430 0%, transparent 32%), #FFF7FB",
          color: "#1A0828",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6 }}>
          {site.locality.toUpperCase()} · {site.city.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.9, letterSpacing: -3 }}>
            Ridhhi Party Shop
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              fontFamily: "sans-serif",
              color: "#5A3D58",
            }}
          >
            Make every celebration feel special.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 72,
            height: 8,
            background: "#FF2E8A",
            borderRadius: 8,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
