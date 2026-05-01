#!/usr/bin/env python3
"""One-shot analyzer for the M Electric homepage HTML."""
import json
import re
from pathlib import Path
from bs4 import BeautifulSoup

SRC = Path("/Users/joeparker/AppDev/webpage-test/seo-audit-melectric/homepage-googlebot.html")
html = SRC.read_text()
soup = BeautifulSoup(html, "html.parser")

# === Head metadata ===
title = soup.title.string.strip() if soup.title else None
meta_desc = soup.find("meta", attrs={"name": "description"})
meta_desc = meta_desc["content"].strip() if meta_desc and meta_desc.get("content") else None
canonical = soup.find("link", rel="canonical")
canonical = canonical["href"] if canonical else None
viewport = soup.find("meta", attrs={"name": "viewport"})
viewport = viewport["content"] if viewport and viewport.get("content") else None
robots_meta = soup.find("meta", attrs={"name": "robots"})
robots_meta = robots_meta["content"] if robots_meta and robots_meta.get("content") else None

og = {m.get("property", "")[3:]: m.get("content", "") for m in soup.find_all("meta", attrs={"property": True}) if m.get("property", "").startswith("og:")}
twitter = {m.get("name", "")[8:]: m.get("content", "") for m in soup.find_all("meta", attrs={"name": True}) if m.get("name", "").startswith("twitter:")}

# === Resources ===
scripts = soup.find_all("script", src=True)
inline_scripts = soup.find_all("script", src=False)
stylesheets = soup.find_all("link", rel="stylesheet")
images = soup.find_all("img")
iframes = soup.find_all("iframe")

third_party_hosts = set()
for s in scripts:
    src = s.get("src", "")
    m = re.search(r"^https?://([^/]+)/", src)
    if m and "m-electricllc.com" not in m.group(1):
        third_party_hosts.add(m.group(1))

# === Headings ===
h1s = [h.get_text(strip=True) for h in soup.find_all("h1")]
h2s = [h.get_text(strip=True) for h in soup.find_all("h2")]
h3s = [h.get_text(strip=True) for h in soup.find_all("h3")]

# === Body text ===
for tag in soup(["script", "style", "noscript"]):
    tag.decompose()
body_text = soup.body.get_text(" ", strip=True) if soup.body else ""
body_words = len(body_text.split())

# === Images ===
imgs_no_alt = [img.get("src", "(no src)") for img in soup.find_all("img") if not img.get("alt")]
imgs_with_alt = [img.get("alt", "") for img in soup.find_all("img") if img.get("alt")]
img_lazy = sum(1 for img in soup.find_all("img") if img.get("loading") == "lazy")
img_total = len(soup.find_all("img"))

# === Links ===
links = soup.find_all("a", href=True)
internal_links = [a["href"] for a in links if "m-electricllc.com" in a["href"] or a["href"].startswith("/")]
external_links = [a["href"] for a in links if a["href"].startswith("http") and "m-electricllc.com" not in a["href"]]

# === Phone/Email visible ===
phone_visible = "918-992-6282" in body_text or "(918) 992-6282" in body_text or "918.992.6282" in body_text or "9189926282" in re.sub(r"\D", "", body_text)
email_visible = "info@m-electricllc.com" in body_text

# === Structured data ===
ld_json_blocks = soup.find_all("script", attrs={"type": "application/ld+json"})

print("=" * 60)
print("HOMEPAGE ANALYSIS — m-electricllc.com")
print("=" * 60)

print(f"\n## Head metadata")
print(f"  title:       {title!r}  (len={len(title) if title else 0})")
print(f"  description: {meta_desc!r}  (len={len(meta_desc) if meta_desc else 0})")
print(f"  canonical:   {canonical}")
print(f"  viewport:    {viewport}")
print(f"  robots meta: {robots_meta}")

print(f"\n## Open Graph ({len(og)} tags)")
for k, v in list(og.items())[:5]:
    print(f"  og:{k} = {v[:80]}")
print(f"\n## Twitter Card ({len(twitter)} tags)")
for k, v in list(twitter.items())[:5]:
    print(f"  twitter:{k} = {v[:80]}")

print(f"\n## Resources")
print(f"  external scripts:  {len(scripts)}")
print(f"  inline scripts:    {len(inline_scripts)}")
print(f"  stylesheets:       {len(stylesheets)}")
print(f"  iframes:           {len(iframes)}")
print(f"  third-party hosts: {len(third_party_hosts)}")
for h in sorted(third_party_hosts):
    print(f"    - {h}")

print(f"\n## Headings")
print(f"  h1 count: {len(h1s)}")
for h in h1s[:5]:
    print(f"    H1: {h!r}")
print(f"  h2 count: {len(h2s)}")
for h in h2s[:8]:
    print(f"    H2: {h!r}")
print(f"  h3 count: {len(h3s)}")

print(f"\n## Body content")
print(f"  word count:       {body_words}")
print(f"  phone visible:    {phone_visible}")
print(f"  email visible:    {email_visible}")
print(f"  body sample:      {body_text[:300]!r}...")

print(f"\n## Images")
print(f"  total imgs:       {img_total}")
print(f"  missing alt:      {len(imgs_no_alt)}")
print(f"  lazy loading:     {img_lazy}/{img_total}")
for img in imgs_no_alt[:5]:
    print(f"    no alt: {img[:80]}")

print(f"\n## Links")
print(f"  internal links:   {len(internal_links)}")
print(f"  external links:   {len(external_links)}")
print(f"  external sample:")
for ext in sorted(set(external_links))[:10]:
    print(f"    {ext}")

print(f"\n## Structured data")
print(f"  JSON-LD blocks:   {len(ld_json_blocks)}")
for i, block in enumerate(ld_json_blocks[:3]):
    try:
        data = json.loads(block.string or "")
        if isinstance(data, dict) and "@graph" in data:
            print(f"  Block {i}: @graph with {len(data['@graph'])} nodes")
            for node in data["@graph"][:8]:
                if isinstance(node, dict):
                    print(f"    - @type={node.get('@type', '?')} @id={node.get('@id', '?')[:60]}")
        else:
            print(f"  Block {i}: {data.get('@type', '?')}")
    except Exception as e:
        print(f"  Block {i}: parse error: {e}")

# === HTML size analysis ===
print(f"\n## File size")
print(f"  homepage HTML: {len(html):,} bytes")
print(f"  body text:     {len(body_text):,} chars")
print(f"  text-to-html:  {len(body_text)/len(html)*100:.1f}%")
