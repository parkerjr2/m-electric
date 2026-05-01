#!/usr/bin/env python3
"""Build a single styled PDF from the audit markdown files."""
from pathlib import Path
from datetime import datetime
import markdown
from weasyprint import HTML, CSS

AUDIT_DIR = Path("/Users/joeparker/AppDev/webpage-test/seo-audit-melectric")
OUT = AUDIT_DIR / "M-Electric-SEO-Audit.pdf"

# Order in which sections appear in the PDF
SECTION_FILES = [
    ("FULL-AUDIT-REPORT.md", "Executive Summary"),
    ("ACTION-PLAN.md", "Action Plan"),
    ("technical-findings.md", "Technical SEO"),
    ("content-findings.md", "Content Quality / E-E-A-T"),
    ("schema-findings.md", "Schema / Structured Data"),
    ("sitemap-findings.md", "Sitemap Architecture"),
    ("performance-findings.md", "Performance / Core Web Vitals"),
    ("visual-findings.md", "Visual / Mobile UX"),
    ("geo-findings.md", "GEO / AI Search Readiness"),
    ("local-findings.md", "Local SEO"),
    ("sxo-findings.md", "Search Experience Optimization"),
    ("backlinks-findings.md", "Backlinks"),
]

CSS_STYLES = """
@page {
    size: A4;
    margin: 22mm 18mm 25mm 18mm;
    @bottom-right {
        content: counter(page) " / " counter(pages);
        font-family: -apple-system, "Segoe UI", sans-serif;
        font-size: 9pt;
        color: #888;
    }
    @bottom-left {
        content: "M Electric, LLC — SEO Audit · 2026-04-30";
        font-family: -apple-system, "Segoe UI", sans-serif;
        font-size: 9pt;
        color: #888;
    }
}

@page :first {
    margin: 0;
    @bottom-right { content: ""; }
    @bottom-left { content: ""; }
}

* { box-sizing: border-box; }

html { font-family: -apple-system, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 10.5pt; line-height: 1.55; color: #1a1a1a; }
body { margin: 0; padding: 0; }

/* === Cover === */
.cover {
    page-break-after: always;
    height: 297mm;
    padding: 35mm 25mm;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 60%, #2a0a0a 100%);
    color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cover .top { font-size: 11pt; letter-spacing: 0.3em; text-transform: uppercase; color: #dc2626; font-weight: 600; }
.cover .top span { color: #888; margin-left: 1em; letter-spacing: 0.2em; }
.cover h1 { font-size: 60pt; line-height: 0.95; letter-spacing: -0.03em; margin: 18mm 0 8mm 0; font-weight: 800; }
.cover h1 em { color: #dc2626; font-style: normal; }
.cover .sub { font-size: 16pt; line-height: 1.4; color: #b8b8b8; max-width: 140mm; margin-bottom: 18mm; }
.cover .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10mm 14mm; margin-top: 8mm; }
.cover .meta-grid .lab { font-size: 9pt; letter-spacing: 0.25em; text-transform: uppercase; color: #888; margin-bottom: 2mm; }
.cover .meta-grid .val { font-size: 13pt; color: #fafafa; font-weight: 500; }
.cover .score-box {
    border-top: 2px solid #dc2626;
    padding-top: 6mm;
    margin-top: auto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.cover .score-num { font-size: 90pt; font-weight: 800; color: #dc2626; line-height: 1; letter-spacing: -0.05em; }
.cover .score-den { font-size: 32pt; color: #888; }
.cover .score-label { font-size: 11pt; letter-spacing: 0.3em; text-transform: uppercase; color: #b8b8b8; text-align: right; max-width: 80mm; line-height: 1.5; }
.cover .footer { font-size: 9pt; letter-spacing: 0.3em; text-transform: uppercase; color: #555; text-align: center; margin-top: 8mm; }

/* === TOC === */
.toc { page-break-after: always; }
.toc h2 { font-size: 26pt; letter-spacing: -0.02em; color: #0a0a0a; margin: 0 0 8mm 0; border-bottom: 3px solid #dc2626; padding-bottom: 4mm; font-weight: 800; }
.toc ol { list-style: none; padding: 0; margin: 0; counter-reset: toc; }
.toc li { counter-increment: toc; display: flex; padding: 3mm 0; border-bottom: 1px dashed #ddd; align-items: baseline; font-size: 12pt; }
.toc li::before { content: counter(toc, decimal-leading-zero) " "; color: #dc2626; font-weight: 700; min-width: 14mm; }
.toc li .name { flex: 1; font-weight: 500; color: #1a1a1a; }
.toc li a { color: inherit; text-decoration: none; }
.toc li .pg { color: #888; font-variant-numeric: tabular-nums; min-width: 14mm; text-align: right; }

/* === Score chart on TOC page === */
.score-chart { margin: 14mm 0 6mm 0; padding: 8mm; background: #f6f6f6; border-radius: 4mm; }
.score-chart h3 { margin: 0 0 5mm 0; font-size: 11pt; letter-spacing: 0.15em; text-transform: uppercase; color: #555; }
.bar-row { display: grid; grid-template-columns: 70mm 70mm 18mm; gap: 4mm; align-items: center; padding: 1.8mm 0; font-size: 9.5pt; }
.bar-row .lab { color: #1a1a1a; font-weight: 500; }
.bar-row .bar-bg { background: #e5e5e5; height: 5mm; border-radius: 1mm; overflow: hidden; }
.bar-row .bar-fg { height: 100%; background: #dc2626; }
.bar-row .num { text-align: right; font-variant-numeric: tabular-nums; color: #1a1a1a; font-weight: 600; }
.bar-row.weighted .bar-fg { background: linear-gradient(90deg, #dc2626 0%, #ef4444 100%); }
.bar-row .lab.bad::before, .bar-row .lab.poor::before, .bar-row .lab.ok::before, .bar-row .lab.good::before {
    display: inline-block; width: 3mm; height: 3mm; border-radius: 50%; content: ""; margin-right: 2.5mm; vertical-align: middle;
}
.bar-row .lab.poor::before { background: #dc2626; }
.bar-row .lab.bad::before { background: #f59e0b; }
.bar-row .lab.ok::before { background: #84cc16; }
.bar-row .lab.good::before { background: #16a34a; }

/* === Sections === */
section { page-break-before: always; }
section.executive-summary { page-break-before: avoid; }

/* Section header banner */
section > h1:first-of-type, section > h2:first-of-type {
    font-size: 22pt;
    letter-spacing: -0.01em;
    color: #0a0a0a;
    border-top: 4px solid #dc2626;
    padding-top: 6mm;
    margin: 0 0 5mm 0;
    font-weight: 800;
}

h1 { font-size: 22pt; margin: 6mm 0 3mm 0; color: #0a0a0a; font-weight: 800; }
h2 { font-size: 15pt; margin: 8mm 0 3mm 0; color: #0a0a0a; font-weight: 700; }
h3 { font-size: 12pt; margin: 6mm 0 2mm 0; color: #1a1a1a; font-weight: 700; }
h4 { font-size: 10.5pt; margin: 4mm 0 1.5mm 0; color: #1a1a1a; font-weight: 700; }
p { margin: 0 0 3mm 0; }
ul, ol { margin: 0 0 3mm 0; padding-left: 6mm; }
li { margin: 1mm 0; }

strong { color: #0a0a0a; }
em { color: #555; }
code { font-family: "SF Mono", "Menlo", "Consolas", monospace; font-size: 9pt; background: #f6f6f6; padding: 0.5mm 1.5mm; border-radius: 0.8mm; color: #b91c1c; }
pre { font-family: "SF Mono", "Menlo", "Consolas", monospace; font-size: 8.5pt; background: #f8f8f8; padding: 4mm; border-left: 3px solid #dc2626; overflow-x: hidden; white-space: pre-wrap; word-wrap: break-word; line-height: 1.4; margin: 3mm 0; border-radius: 1mm; }
pre code { background: none; padding: 0; color: inherit; font-size: inherit; }

a { color: #dc2626; text-decoration: none; }
hr { border: 0; border-top: 1px solid #e5e5e5; margin: 6mm 0; }

table { width: 100%; border-collapse: collapse; margin: 3mm 0; font-size: 9pt; }
th { background: #0a0a0a; color: #fafafa; padding: 2mm 3mm; text-align: left; font-weight: 600; letter-spacing: 0.03em; }
td { padding: 1.8mm 3mm; border-bottom: 1px solid #e5e5e5; vertical-align: top; }
tr:nth-child(even) td { background: #fafafa; }

blockquote { border-left: 3px solid #dc2626; margin: 3mm 0; padding: 2mm 4mm; background: #fef2f2; color: #1a1a1a; font-style: italic; }

/* Severity hints — generated from text */
.tag { display: inline-block; font-size: 8pt; padding: 0.5mm 2mm; border-radius: 1mm; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: middle; margin-right: 2mm; }
.tag-critical { background: #dc2626; color: white; }
.tag-high { background: #f59e0b; color: #1a1a1a; }
.tag-medium { background: #84cc16; color: #1a1a1a; }
.tag-low { background: #94a3b8; color: white; }

/* Section divider page */
.section-cover { page-break-before: always; page-break-after: avoid; height: 200mm; display: flex; flex-direction: column; justify-content: center; padding: 0 0 0 15mm; border-left: 6mm solid #dc2626; margin: 0 -18mm; padding-left: 18mm; }
.section-cover .num { font-size: 50pt; color: #dc2626; font-weight: 800; line-height: 1; letter-spacing: -0.05em; }
.section-cover .title { font-size: 32pt; color: #0a0a0a; line-height: 1.05; font-weight: 800; margin-top: 4mm; max-width: 140mm; }
.section-cover .sub { font-size: 11pt; color: #555; margin-top: 6mm; letter-spacing: 0.15em; text-transform: uppercase; }
"""


SCORES = [
    ("Technical SEO", 22, 22),
    ("Content Quality", 23, 34),
    ("On-Page SEO", 20, 50),
    ("Schema / Structured Data", 10, 16),
    ("Performance (CWV)", 10, 48),
    ("AI Search Readiness", 10, 18),
    ("Images", 5, 65),
]
SUPPLEMENTARY = [
    ("SXO (Search Experience)", 41),
    ("Local SEO", 38),
    ("Backlinks", 35),
    ("Visual / UX", 42),
    ("Sitemap Quality", 38),
]
TOTAL_SCORE = 34


def severity_class(score: int) -> str:
    if score < 35:
        return "poor"
    if score < 55:
        return "bad"
    if score < 75:
        return "ok"
    return "good"


def md_to_html(md_text: str) -> str:
    return markdown.markdown(
        md_text,
        extensions=["tables", "fenced_code", "sane_lists"],
    )


def build_cover() -> str:
    return f"""
<div class="cover">
  <div>
    <div class="top">M Electric, LLC <span>· Tulsa, Oklahoma</span></div>
    <h1>SEO<br>Audit <em>Report</em></h1>
    <div class="sub">A complete review of m-electricllc.com — technical, content, schema, performance, AI search readiness, local SEO, and search experience.</div>
  </div>
  <div>
    <div class="meta-grid">
      <div><div class="lab">Domain</div><div class="val">m-electricllc.com</div></div>
      <div><div class="lab">Audit Date</div><div class="val">{datetime.now().strftime('%B %d, %Y')}</div></div>
      <div><div class="lab">Business Type</div><div class="val">Service-Area Business · Electrician</div></div>
      <div><div class="lab">Pages Reviewed</div><div class="val">389 in sitemap</div></div>
    </div>
    <div class="score-box">
      <div><span class="score-num">{TOTAL_SCORE}</span><span class="score-den"> / 100</span></div>
      <div class="score-label">Overall<br>SEO Health<br>Score</div>
    </div>
    <div class="footer">Confidential · Diagnostic Audit</div>
  </div>
</div>
"""


def build_toc() -> str:
    items = []
    for i, (_, title) in enumerate(SECTION_FILES):
        items.append(f'<li><span class="name"><a href="#sec-{i}">{title}</a></span></li>')
    score_bars = []
    for label, weight, score in SCORES:
        cls = severity_class(score)
        weighted = round(weight * score / 100, 1)
        score_bars.append(
            f'<div class="bar-row">'
            f'<div class="lab {cls}">{label}</div>'
            f'<div class="bar-bg"><div class="bar-fg" style="width: {score}%;"></div></div>'
            f'<div class="num">{score}</div>'
            f'</div>'
        )
    sup_bars = []
    for label, score in SUPPLEMENTARY:
        cls = severity_class(score)
        sup_bars.append(
            f'<div class="bar-row">'
            f'<div class="lab {cls}">{label}</div>'
            f'<div class="bar-bg"><div class="bar-fg" style="width: {score}%;"></div></div>'
            f'<div class="num">{score}</div>'
            f'</div>'
        )
    return f"""
<div class="toc">
  <h2>Contents &amp; Scoreboard</h2>
  <div class="score-chart">
    <h3>Weighted Categories</h3>
    {''.join(score_bars)}
  </div>
  <div class="score-chart">
    <h3>Supplementary Scores</h3>
    {''.join(sup_bars)}
  </div>
  <h3 style="margin-top: 8mm; font-size: 11pt; letter-spacing: 0.15em; text-transform: uppercase; color: #555;">Sections</h3>
  <ol>{''.join(items)}</ol>
</div>
"""


def build_section(idx: int, filename: str, title: str) -> str:
    md_path = AUDIT_DIR / filename
    if not md_path.exists():
        return ""
    raw = md_path.read_text()
    # Strip the first H1 — we render it from the section cover
    lines = raw.split("\n")
    if lines and lines[0].startswith("# "):
        lines = lines[1:]
    body_html = md_to_html("\n".join(lines))
    cover_num = f"{idx + 1:02d}"
    return f"""
<section id="sec-{idx}">
  <div class="section-cover">
    <div class="num">{cover_num}</div>
    <div class="title">{title}</div>
    <div class="sub">m-electricllc.com · 2026-04-30</div>
  </div>
  {body_html}
</section>
"""


def main() -> None:
    parts = [build_cover(), build_toc()]
    for i, (filename, title) in enumerate(SECTION_FILES):
        parts.append(build_section(i, filename, title))

    html_body = "\n".join(parts)
    html_doc = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>M Electric SEO Audit</title></head>
<body>{html_body}</body></html>
"""
    HTML(string=html_doc, base_url=str(AUDIT_DIR)).write_pdf(
        str(OUT),
        stylesheets=[CSS(string=CSS_STYLES)],
    )
    size = OUT.stat().st_size
    print(f"PDF saved: {OUT}  ({size:,} bytes)")


if __name__ == "__main__":
    main()
