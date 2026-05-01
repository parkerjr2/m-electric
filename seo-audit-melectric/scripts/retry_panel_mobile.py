from playwright.sync_api import sync_playwright
import os

GOOGLEBOT_UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
OUT_DIR = "/Users/joeparker/AppDev/webpage-test/seo-audit-melectric/screenshots"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={"width": 375, "height": 812},
        user_agent=GOOGLEBOT_UA,
    )
    page = context.new_page()
    page.goto(
        "https://m-electricllc.com/residential-services-tulsa/panel-upgrades-tulsa/",
        wait_until="domcontentloaded",
        timeout=60000,
    )
    page.wait_for_timeout(3000)
    out = os.path.join(OUT_DIR, "panel_atf_mobile.png")
    page.screenshot(path=out, full_page=False)
    print(f"Saved: {out}")
    context.close()
    browser.close()
