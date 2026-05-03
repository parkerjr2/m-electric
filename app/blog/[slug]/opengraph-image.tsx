import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { posts, getPost } from "../posts-data";

/**
 * Per-post OG / Twitter share image. Mirrors the home + per-city pattern:
 * black bg with radial red glow, Bebas Neue headline scaled to fit, brand
 * footer strip. Each blog post gets its own prerendered 1200×630 PNG.
 */

export const alt =
  "M Electric — Licensed electrician in the Tulsa metro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** Pick a font size that keeps the title readable across post lengths. */
function titleFontSize(title: string): number {
  const len = title.length;
  if (len <= 35) return 88;
  if (len <= 55) return 72;
  if (len <= 80) return 60;
  return 50;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  // Title fallback if for some reason the route resolves with no post (shouldn't happen with generateStaticParams).
  const title = post?.title ?? "M Electric Blog";
  const fs = titleFontSize(title);

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
          padding: "80px 96px",
          background:
            "radial-gradient(circle at 25% 30%, rgba(220,38,38,0.18) 0%, rgba(0,0,0,0) 55%), radial-gradient(circle at 80% 75%, rgba(127,29,29,0.22) 0%, rgba(0,0,0,0) 55%), #050505",
          color: "white",
          fontFamily: "Bebas",
          position: "relative",
        }}
      >
        {/* Faint grid */}
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
          <span style={{ width: 56, height: 2, background: "#dc2626" }} />
          M Electric · Tulsa Electrician Blog
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: fs,
              lineHeight: 1.0,
              letterSpacing: -1,
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #fecaca 60%, #fca5a5 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a3a3a3",
            paddingTop: 24,
            borderTop: "1px solid #262626",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>By Marshall Morgan</span>
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
