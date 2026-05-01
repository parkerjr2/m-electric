from playwright.sync_api import sync_playwright
import os

GOOGLEBOT_UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
OUT_DIR = "/Users/joeparker/AppDev/webpage-test/seo-audit-melectric/screenshots"

CAPTURES = [
    # (url, filename_base, full_page, viewport_w, viewport_h)
    ("https://m-electricllc.com/",                                                   "home_atf_mobile",    False, 375,  812),
    ("https://m-electricllc.com/",                                                   "home_full_mobile",   True,  375,  812),
    ("https://m-electricllc.com/",                                                   "home_atf_desktop",   False, 1440, 900),
    ("https://m-electricllc.com/",                                                   "home_full_desktop",  True,  1440, 900),
    ("https://m-electricllc.com/about/",                                             "about_atf_mobile",   False, 375,  812),
    ("https://m-electricllc.com/about/",                                             "about_atf_desktop",  False, 1440, 900),
    ("https://m-electricllc.com/contactus/",                                         "contact_atf_mobile", False, 375,  812),
    ("https://m-electricllc.com/contactus/",                                         "contact_atf_desktop",False, 1440, 900),
    ("https://m-electricllc.com/residential-services-tulsa/panel-upgrades-tulsa/",  "panel_atf_mobile",   False, 375,  812),
    ("https://m-electricllc.com/residential-services-tulsa/panel-upgrades-tulsa/",  "panel_atf_desktop",  False, 1440, 900),
    ("https://m-electricllc.com/service-areas/broken-arrow/",                        "broken_arrow_atf_mobile",  False, 375,  812),
    ("https://m-electricllc.com/service-areas/broken-arrow/",                        "broken_arrow_atf_desktop", False, 1440, 900),
]

def capture(page, url, output_path, full_page):
    page.goto(url, wait_until="networkidle", timeout=30000)
    page.screenshot(path=output_path, full_page=full_page)
    print(f"Saved: {output_path}")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Group by viewport to avoid re-creating context too often
    for url, name, full_page, vw, vh in CAPTURES:
        context = browser.new_context(
            viewport={"width": vw, "height": vh},
            user_agent=GOOGLEBOT_UA,
        )
        page = context.new_page()
        out = os.path.join(OUT_DIR, f"{name}.png")
        try:
            capture(page, url, out, full_page)
        except Exception as e:
            print(f"ERROR capturing {name}: {e}")
        finally:
            context.close()

    browser.close()
    print("All done.")
