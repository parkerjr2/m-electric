import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Sitewide OG / Twitter share image. Renders the same "Get Wired Up.
 * Tulsa's Trusted Electrician." headline that's on the home hero — so
 * the iMessage / Slack / Facebook unfurl matches the landing experience.
 *
 * Per-route opengraph-image files would override this for specific pages.
 * Pages that set their own `openGraph.images` in metadata also override.
 */
export const alt =
  "M Electric — Tulsa's trusted electrician since 1999. Family-owned, Army-veteran-led.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  const bebas = await readFile(
    join(process.cwd(), "public/fonts/BebasNeue-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background:
            "radial-gradient(circle at 25% 30%, rgba(220,38,38,0.18) 0%, rgba(0,0,0,0) 55%), radial-gradient(circle at 80% 75%, rgba(127,29,29,0.22) 0%, rgba(0,0,0,0) 55%), #050505",
          color: "white",
          fontFamily: "Bebas",
          position: "relative",
        }}
      >
        {/* Faint grid overlay to match the hero */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#fca5a5",
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 56,
              height: 2,
              background: "#dc2626",
            }}
          />
          Tulsa, Oklahoma · Family-Owned Since 1999
        </div>

        {/* Headline — matches the home hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.92,
              letterSpacing: -2,
              color: "#ffffff",
            }}
          >
            GET WIRED UP.
          </div>
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.92,
              letterSpacing: -2,
              marginTop: 8,
              backgroundImage:
                "linear-gradient(90deg, #f87171 0%, #ef4444 50%, #fca5a5 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            TULSA&#39;S TRUSTED ELECTRICIAN.
          </div>
        </div>

        {/* Footer strip — credentials */}
        <div
          style={{
            position: "absolute",
            left: 96,
            right: 96,
            bottom: 56,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a3a3a3",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>Licensed</span>
            <span style={{ color: "#525252" }}>·</span>
            <span>Bonded</span>
            <span style={{ color: "#525252" }}>·</span>
            <span>Insured</span>
            <span style={{ color: "#525252" }}>·</span>
            <span>OK Lic #87288</span>
          </div>
          <div style={{ color: "#fca5a5", fontWeight: 600 }}>
            (918) 992-6282
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bebas",
          data: bebas,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
