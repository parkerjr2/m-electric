import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { areas, getArea } from "../areas-data";

/**
 * Per-city OG / Twitter share image. Mirrors the home opengraph-image.tsx
 * styling but with the city name as the visual anchor. Each of the 16 city
 * pages gets its own prerendered 1200×630 PNG at build time.
 *
 * The font size for the city headline scales down on longer names so
 * "BROKEN ARROW" and "SAND SPRINGS" still fit on one line.
 */

export const alt = "M Electric — Licensed electrician in the Tulsa metro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

/** Pick a font size that keeps the city name on one line at ~1000px wide. */
function cityFontSize(city: string): number {
  const len = city.length;
  if (len <= 7) return 220;
  if (len <= 10) return 180;
  return 150;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  const city = (area?.city ?? "TULSA METRO").toUpperCase();
  const state = (area?.state ?? "OK").toUpperCase();
  const cityFs = cityFontSize(city);

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
        {/* Faint grid overlay matching the rest of the site */}
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
          M Electric · Licensed Tulsa-Metro Electrician · Since 1999
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 110,
              lineHeight: 0.92,
              letterSpacing: -1,
              color: "#ffffff",
            }}
          >
            ELECTRICIAN IN
          </div>
          <div
            style={{
              fontSize: cityFs,
              lineHeight: 0.92,
              letterSpacing: -2,
              marginTop: 12,
              backgroundImage:
                "linear-gradient(90deg, #f87171 0%, #ef4444 50%, #fca5a5 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {`${city}, ${state}.`}
          </div>
        </div>

        {/* Footer credentials */}
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
