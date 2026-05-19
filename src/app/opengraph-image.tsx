import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111116",
          color: "#f7f6f2",
          padding: 72,
          fontFamily: "Arial"
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ maxWidth: 760, fontSize: 34, lineHeight: 1.35, color: "#b9c7bb" }}>
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    size
  );
}
