import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = `${siteConfig.siteName} — Action Figures Premium`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a0a0a 0%, #12372a 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#25D366", letterSpacing: 6 }}>ACTION FIGURES PREMIUM</div>
        <div style={{ display: "flex", fontSize: 110, fontWeight: 800, marginTop: 16 }}>{siteConfig.siteName}</div>
        <div style={{ display: "flex", fontSize: 36, color: "#d1d5db", marginTop: 20 }}>{siteConfig.slogan}</div>
      </div>
    ),
    { ...size }
  );
}
