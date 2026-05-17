import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "SVF Soya — India's Purest Non-GMO Soya Processing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f0f5ee",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        {/* White rounded card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            background: "#ffffff",
            borderRadius: 48,
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="SVF Soya"
            style={{ width: 560, objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 700,
                color: "#209e2e",
                letterSpacing: "-0.5px",
              }}
            >
              India&apos;s Purest Non-GMO Soya Processing
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 20,
                color: "#4a5568",
                letterSpacing: "0.2px",
              }}
            >
              Chemical-free · FSSAI & APEDA Certified · 180 TPD · Karnataka, India
            </p>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
