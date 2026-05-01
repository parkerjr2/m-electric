/**
 * Source of truth for all 11 service-area landing pages.
 *
 * IMPORTANT — doorway-page risk:
 * Each entry below must contain genuinely city-specific content. If the swap
 * test passes (you can replace the city name and the page still reads), it's
 * a doorway page and Google will penalize accordingly (March 2024 Core Update
 * caused an HVAC company to lose 80% rankings + 63% traffic for this pattern).
 *
 * Content here uses verifiable facts: real neighborhoods, real population,
 * real county, real housing-stock era, real utility provider, real driving
 * distances. Where I don't have a confident distinguishing detail (small
 * unincorporated communities), the page is shorter and frames around what
 * IS true rather than fabricating local color.
 */

export type AreaCommonWork = {
  title: string;
  body: string;
};

export type AreaFAQ = { q: string; a: string };

export type ServiceArea = {
  slug: string;
  city: string;
  state: "OK";
  county: string;
  /** Human-readable population, used in body copy and schema description */
  population: string;
  /** ~150-word UNIQUE intro paragraph for AI citation */
  introParagraph: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroEyebrow: string;
  h1Top: string;
  h1Bottom: string;
  heroLead: string;

  // Local context
  neighborhoods?: string[];
  /** Drive time / response time from Tulsa base */
  responseTime: string;
  utilities: string[];
  driveTimeFromTulsa: string;

  // What we typically work on in this specific city
  commonWork: AreaCommonWork[];

  faqs: AreaFAQ[];

  /** Geo for schema */
  geo: { lat: number; lng: number };
};

/** Static fields shared by all city pages — used in schema, not in body copy. */
export const PHONE_E164 = "+1-918-992-6282";

export const areas: ServiceArea[] = [
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "tulsa",
    city: "Tulsa",
    state: "OK",
    county: "Tulsa County",
    population: "411,000",
    geo: { lat: 36.1539816, lng: -95.992775 },
    metaTitle:
      "Licensed Electrician in Tulsa, OK | M Electric — 24/7 Emergency",
    metaDescription:
      "Tulsa's family-owned electrician since 1999 — historic Maple Ridge, Brookside, downtown Deco District, South Tulsa. 24/7 emergency. Call (918) 992-6282.",
    heroEyebrow: "Tulsa, OK",
    h1Top: "Licensed electrical",
    h1Bottom: "services in Tulsa.",
    heroLead:
      "M Electric is the Tulsa electrician homeowners and businesses have called for over 25 years. From the historic Art Deco buildings downtown to the modern subdivisions of South Tulsa, our licensed electricians know how Tulsa's buildings actually work.",
    introParagraph:
      "M Electric has served Tulsa as a family-owned electrician since 1999, owned and operated by US Army veteran Marshall Morgan. Tulsa's housing stock is unusually diverse for a metro this size — historic Maple Ridge and Yorktown bungalows from the oil boom, the 1920s–1940s Art Deco of the Deco District, mid-century ranches across midtown, and modern construction in South Tulsa and Brookside infill. Each era brings its own electrical character: knob-and-tube and aluminum wiring in the historic neighborhoods, undersized 60–100A panels in the mid-century homes, and modern code-compliant systems in newer construction that often need EV-charger and heat-pump load additions. We work on every type. As Tulsa's home base, our trucks are typically inside the loop — emergency response is under 60 minutes day or night across the city, and we're licensed under the Oklahoma Construction Industries Board and accredited by the Tulsa BBB.",
    neighborhoods: [
      "Downtown Tulsa",
      "Deco District",
      "Brady Arts District",
      "Maple Ridge",
      "Swan Lake",
      "Yorktown",
      "Brookside",
      "Cherry Street",
      "Midtown",
      "South Tulsa",
      "East Tulsa",
      "Admiral Place",
      "Riverside",
      "Kendall-Whittier",
    ],
    responseTime: "Under 60 minutes — Tulsa is our base of operations",
    utilities: ["PSO (AEP-Oklahoma)"],
    driveTimeFromTulsa: "0 minutes — we're based in Tulsa",
    commonWork: [
      {
        title: "Knob-and-tube and aluminum wiring replacement",
        body: "Maple Ridge, Yorktown, Swan Lake, and the historic core of Brookside have homes that still carry pre-1970s wiring. We rewire those homes with modern copper, modern grounding, and proper panel coordination — without ripping more drywall than necessary.",
      },
      {
        title: "Historic-home panel upgrades",
        body: "60A and 100A fuse panels still exist across midtown Tulsa. Upgrading to 200A (or 320A for larger homes) lets you actually run a modern HVAC, electric range, EV charger, and home office without nuisance trips.",
      },
      {
        title: "Deco District and downtown commercial",
        body: "Historic commercial buildings in downtown Tulsa carry electrical systems that were never designed for modern POS, server racks, and induction kitchens. We modernize those systems while preserving the building's historic envelope.",
      },
      {
        title: "Storm-recovery and surge protection",
        body: "Tulsa sits squarely in Tornado Alley. Whole-home surge protection at the panel and lightning-resistant grounding is something every Tulsa homeowner should consider — especially after each spring storm season.",
      },
    ],
    faqs: [
      {
        q: "What's the typical response time for a Tulsa electrical emergency?",
        a: "Tulsa is our base of operations. For inside-the-loop emergencies (Maple Ridge, Brookside, midtown, downtown, Cherry Street, Riverside), we typically arrive in under 60 minutes day or night. For South Tulsa, East Tulsa, and the outer neighborhoods, expect 60–90 minutes depending on traffic. Marshall Morgan answers the emergency line personally.",
      },
      {
        q: "Do you work on historic homes in Tulsa?",
        a: "Yes — historic-home electrical work is a significant portion of our Tulsa residential business. We regularly rewire, upgrade panels, and modernize lighting in Maple Ridge, Yorktown, Swan Lake, Brady Arts District, and the older sections of Brookside and Cherry Street. Our crews understand how to work in plaster walls, old conduit, and around historic finishes.",
      },
      {
        q: "Do you handle commercial electrical work in downtown Tulsa?",
        a: "Yes. We handle tenant build-outs, panel upgrades, and full electrical systems for commercial properties across downtown Tulsa, the Brady Arts District, Cherry Street, and Brookside. We're familiar with the City of Tulsa permit process and the building inspectors at the One Technology Center.",
      },
      {
        q: "What utility does Tulsa use, and do you coordinate with them?",
        a: "PSO (Public Service Company of Oklahoma, an AEP company) serves the city of Tulsa. Anytime work involves the service entrance — meter pulls, service upgrades, panel changes — we coordinate the scheduling and inspection directly with PSO so you don't have to.",
      },
      {
        q: "Do you serve all Tulsa zip codes?",
        a: "Yes. We cover every Tulsa zip code, from 74103 downtown through 74137 in far South Tulsa, and the East Tulsa and West Tulsa zips along the way. If you're inside the city of Tulsa, we serve you.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "broken-arrow",
    city: "Broken Arrow",
    state: "OK",
    county: "Tulsa County (with portions in Wagoner County)",
    population: "117,000",
    geo: { lat: 36.0526, lng: -95.7908 },
    metaTitle:
      "Broken Arrow Electrician | M Electric — Licensed, 24/7 Emergency",
    metaDescription:
      "Broken Arrow's trusted electrician — Rose District, Battle Creek, Forest Ridge. Panel upgrades, EV chargers, residential and commercial. (918) 992-6282.",
    heroEyebrow: "Broken Arrow, OK",
    h1Top: "Broken Arrow",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric serves Broken Arrow homeowners and businesses with the same family-owned, veteran-led electrical service we've provided across the Tulsa metro since 1999 — from the Rose District revitalization downtown to the new construction along Aspen Avenue and Battle Creek.",
    introParagraph:
      "Broken Arrow is the second-largest city in Oklahoma and the fastest-growing major city in the state, with a population around 117,000. That growth shows up in the housing stock — the historic core around the Rose District has homes from the 1900s–1950s, but the bulk of Broken Arrow's residential is suburban subdivisions built between 1980 and the present, including Battle Creek, Forest Ridge, Aspen Creek, and the newer developments along Kenosha and 71st Street. Newer suburban construction means newer electrical needs: EV chargers in attached garages, heat-pump load additions, smart-home retrofits, generator installs ahead of Oklahoma storm season, and panel upgrades from 200A to 320A or 400A for larger homes adding multiple high-draw appliances. M Electric — owned by US Army veteran Marshall Morgan and family-operated since 1999 — typically reaches Broken Arrow in 30–60 minutes from our Tulsa base, and we've been licensed and insured for Broken Arrow work since the company's founding.",
    neighborhoods: [
      "Rose District (downtown)",
      "Battle Creek",
      "Forest Ridge",
      "Aspen Creek",
      "Stone Wood Hills",
      "Indian Springs",
      "Tucson Estates",
    ],
    responseTime: "30–60 minutes from our Tulsa base",
    utilities: ["PSO", "OEC (Oklahoma Electric Cooperative) — some areas"],
    driveTimeFromTulsa: "20–30 minutes from downtown Tulsa",
    commonWork: [
      {
        title: "EV charger installs in attached garages",
        body: "Newer Broken Arrow subdivisions tend to have larger homes with two- and three-car attached garages — ideal for Level 2 EV charger installs. We size the circuit, calculate the home's load, and install to inspection standards.",
      },
      {
        title: "200A → 320A panel upgrades",
        body: "Broken Arrow homes adding heat pumps, induction ranges, EV chargers, and home offices often outgrow their original 200A service. Upgrading to 320A or even 400A keeps everything running without nuisance trips.",
      },
      {
        title: "Whole-home standby generators",
        body: "Broken Arrow's tree cover and storm exposure make whole-home standby generators a popular install. We size to your panel, coordinate the gas line, and handle the transfer-switch wiring and inspection.",
      },
      {
        title: "Rose District commercial",
        body: "Downtown Broken Arrow's Rose District has been revitalized with new restaurants, retail, and office space. We handle tenant build-outs, panel upgrades, and historic-building electrical modernization throughout the district.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to get an electrician to Broken Arrow from Tulsa?",
        a: "Standard service calls in Broken Arrow are typically scheduled same-day or next-day. For 24/7 emergencies, our response time is 60–90 minutes from our Tulsa base, depending on traffic on the BA Expressway.",
      },
      {
        q: "Do you charge a travel fee to Broken Arrow?",
        a: "No. Broken Arrow is fully inside our standard service area, no travel surcharge. We handle Broken Arrow at the same rates as Tulsa.",
      },
      {
        q: "Do you handle EV charger installs in Broken Arrow?",
        a: "Yes — EV charger installs are one of our most common Broken Arrow service calls. We do load calculations, install dedicated 240V circuits, coordinate any panel work, and pull permits with the City of Broken Arrow.",
      },
      {
        q: "Are you licensed for commercial work in Broken Arrow's Rose District?",
        a: "Yes. We're fully licensed by the Oklahoma Construction Industries Board for both residential and commercial electrical work and are familiar with the City of Broken Arrow permit and inspection process.",
      },
      {
        q: "What's the typical electrical issue you see in older Broken Arrow homes?",
        a: "The historic core around the Rose District has homes from the 1920s–1950s. Common issues are undersized panels (60A or 100A fuse boxes), ungrounded two-prong outlets, and old aluminum branch circuits. We rewire and upgrade those systems to modern code while preserving the home's character.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "owasso",
    city: "Owasso",
    state: "OK",
    county: "Tulsa County (with portions in Rogers County)",
    population: "39,000",
    geo: { lat: 36.2695, lng: -95.8547 },
    metaTitle:
      "Owasso Electrician | M Electric — Residential & Commercial",
    metaDescription:
      "Owasso's licensed electrician — Bailey Ranch, Stone Canyon, Three Lakes. Smart home, generators, EV chargers, panel upgrades. (918) 992-6282.",
    heroEyebrow: "Owasso, OK",
    h1Top: "Owasso",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric provides licensed residential and commercial electrical service across Owasso — from the established Bailey Ranch subdivision to the Stone Canyon golf course community and the newer construction along 96th Street. Family-owned, Army-veteran-led, and serving the Owasso area since 1999.",
    introParagraph:
      "Owasso sits along the northern edge of the Tulsa metro and has grown rapidly over the past 25 years to a population of about 39,000. Most of Owasso's residential is newer construction (1990s onward) with a strong mix of master-planned communities like Bailey Ranch, Stone Canyon, Three Lakes, and the Falls at Garrett Creek. Newer construction tends to bring different electrical work than older Tulsa neighborhoods — instead of knob-and-tube replacements, we're more often installing whole-home standby generators ahead of storm season, smart-home wiring during finish-out, EV chargers as households add second EVs, and load additions for hot tubs, outdoor kitchens, and detached shops common in the larger Owasso lots. M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — typically reaches Owasso in 30–50 minutes from our Tulsa base, with same-day service available for non-emergency calls placed before mid-morning.",
    neighborhoods: [
      "Bailey Ranch",
      "Stone Canyon",
      "Three Lakes",
      "Falls at Garrett Creek",
      "The Greens",
      "Honey Creek",
    ],
    responseTime: "60–90 minutes for emergencies; same-day standard service",
    utilities: ["PSO"],
    driveTimeFromTulsa: "20–30 minutes from north Tulsa",
    commonWork: [
      {
        title: "Whole-home standby generators",
        body: "Owasso's tree-lined subdivisions are exposed to storm-related outages. Standby generators sized to the panel, with proper gas-line coordination and transfer-switch wiring, are one of our most common Owasso installs.",
      },
      {
        title: "Smart-home wiring on new construction",
        body: "Owasso's newer master-planned communities often include smart-home pre-wires during construction. We install structured cabling, hardwired smart switches, video doorbell circuits, and security-system rough-ins during finish-out.",
      },
      {
        title: "EV charger and panel upgrades",
        body: "As Owasso's larger homes add second and third vehicles, dedicated EV charger circuits — and occasional 200A → 320A panel upgrades to support them — are routine work for us in the area.",
      },
      {
        title: "Detached shop and outbuilding wiring",
        body: "Many Owasso lots include detached shops, barns, or outbuildings. We run sub-panels, dedicated circuits, and lighting to those structures with proper grounding and weatherhead sealing.",
      },
    ],
    faqs: [
      {
        q: "How fast can an electrician get to Owasso from Tulsa?",
        a: "Owasso is roughly 20–30 minutes from north Tulsa. Standard service calls are typically scheduled same-day or next-day. For 24/7 emergencies, expect 60–90 minutes from our Tulsa base.",
      },
      {
        q: "Do you install standby generators in Owasso?",
        a: "Yes — standby generator installs are a frequent Owasso service. We handle sizing, gas-line coordination, transfer-switch wiring, permit, and final inspection through the City of Owasso building department.",
      },
      {
        q: "Do you wire new construction in Owasso?",
        a: "Yes. We work directly with builders and homeowners on new-construction electrical, including the structured-wiring and smart-home rough-ins common in Owasso's newer subdivisions.",
      },
      {
        q: "Do you charge a travel fee to Owasso?",
        a: "No. Owasso is fully inside our standard service area. Our pricing in Owasso matches our Tulsa pricing.",
      },
      {
        q: "Can you wire a detached shop or outbuilding on an Owasso property?",
        a: "Yes. Detached-structure wiring — sub-panels, dedicated circuits, lighting, weatherhead service — is common Owasso work for us. We pull permits with the City of Owasso and handle inspection coordination.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "bixby",
    city: "Bixby",
    state: "OK",
    county: "Tulsa County (with portions in Wagoner County)",
    population: "30,000",
    geo: { lat: 35.9420, lng: -95.8833 },
    metaTitle: "Bixby Electrician | M Electric — Licensed, 24/7 Emergency",
    metaDescription:
      "Licensed Bixby electrician — riverside subdivisions, rural acreage, detached shops, EV chargers, generator installs. Call (918) 992-6282.",
    heroEyebrow: "Bixby, OK",
    h1Top: "Bixby",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric provides licensed electrical service across Bixby — from the riverside subdivisions along the Arkansas to the rural acreage south of 121st Street. Whether you need a panel upgrade in a Bixby Public Schools-area subdivision or a sub-panel run to a detached shop, we handle it.",
    introParagraph:
      "Bixby sits along the Arkansas River at the southern edge of the Tulsa metro, with a population around 30,000 and a distinctive mix of suburban subdivisions, riverside developments, and rural acreage. That mix shapes the electrical work we do here. The newer suburbs around Bixby Public Schools and Memorial Drive look like other parts of the metro — 200A panels, EV chargers, smart-home retrofits. But Bixby's rural-residential acreage south of 121st Street is different: detached shops and barns needing sub-panels, well pumps with dedicated circuits, longer service drops, and occasionally cooperative-utility coordination instead of PSO. M Electric — owned by US Army veteran Marshall Morgan and family-run since 1999 — typically reaches Bixby in 30–50 minutes from our Tulsa base. We're licensed by the Oklahoma Construction Industries Board for residential and light-commercial work and pull permits through the City of Bixby's building department.",
    neighborhoods: [
      "Memorial Drive corridor",
      "Bixby Public Schools area",
      "Riverside (Arkansas River frontage)",
      "South Bixby rural acreage",
    ],
    responseTime: "60–120 minutes for emergencies; same-day standard service",
    utilities: ["PSO", "VVEC (Verdigris Valley Electric Cooperative) — rural areas"],
    driveTimeFromTulsa: "30–40 minutes from south Tulsa",
    commonWork: [
      {
        title: "Detached shop and barn wiring",
        body: "Bixby's rural acreage frequently includes detached shops, barns, or workshops needing power. We install sub-panels, run dedicated circuits, set up lighting, and properly weatherhead the service feed.",
      },
      {
        title: "Well pump and rural service circuits",
        body: "Properties on Bixby's south side often have wells. We wire well pump dedicated circuits, troubleshoot pump electrical issues, and handle the controller wiring at the pressure tank.",
      },
      {
        title: "EV chargers in newer Bixby suburbs",
        body: "Newer Bixby subdivisions are EV-charger candidates. We do the load calc, install the dedicated 240V circuit, and pull permits with the City of Bixby.",
      },
      {
        title: "Riverside subdivisions and storm protection",
        body: "Homes near the Arkansas River are storm-exposed. Whole-home surge protection at the panel and lightning grounding are smart investments for any Bixby riverside property.",
      },
    ],
    faqs: [
      {
        q: "Do you serve Bixby's rural acreage south of 121st Street?",
        a: "Yes. We serve all of Bixby including the rural-residential acreage to the south. We're familiar with longer service-drop runs, well pump wiring, and detached-structure sub-panels common to the area.",
      },
      {
        q: "What utility does my Bixby property use?",
        a: "Most of Bixby is served by PSO (AEP-Oklahoma). Some rural areas south and east of the city are served by Verdigris Valley Electric Cooperative (VVEC). We coordinate with whichever utility serves your address for any service-entrance work.",
      },
      {
        q: "Can you install a sub-panel in a Bixby detached shop or barn?",
        a: "Yes — that's one of our most common Bixby service calls. Properly sized sub-panel, weatherheaded feed, sized conductor, and grounding done to NEC. Permits handled with the City of Bixby.",
      },
      {
        q: "Do you charge a travel fee to Bixby?",
        a: "No. Bixby is fully inside our standard service area. Our rates in Bixby match our Tulsa rates.",
      },
      {
        q: "How fast can you respond to a Bixby emergency?",
        a: "Bixby is 30–40 minutes from our Tulsa base in normal traffic. For 24/7 emergencies, our typical response is 60–120 minutes depending on traffic on Memorial Drive and 91st Street.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "jenks",
    city: "Jenks",
    state: "OK",
    county: "Tulsa County",
    population: "27,000",
    geo: { lat: 36.0228, lng: -95.9683 },
    metaTitle:
      "Jenks Electrician | M Electric — Riverwalk, Antique District",
    metaDescription:
      "Licensed Jenks electrician — Riverwalk Crossing, downtown Jenks Antique District, residential and commercial. (918) 992-6282.",
    heroEyebrow: "Jenks, OK",
    h1Top: "Jenks",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric serves Jenks with licensed residential and commercial electrical work — from the historic Antique District on Main Street to the modern subdivisions around Riverwalk Crossing and the Oklahoma Aquarium.",
    introParagraph:
      "Jenks is a fast-growing Tulsa-metro city with a population around 27,000 and a distinctive split personality. Downtown Jenks — the historic Main Street corridor that's earned the name 'Antique Capital of Oklahoma' — has older commercial buildings dating back to the early 1900s. Just east, the Riverwalk Crossing area along the Arkansas River is one of the metro's newer commercial developments, anchored by the Oklahoma Aquarium. Residential ranges from older bungalows near downtown Jenks to large modern subdivisions throughout the rest of the city. That mix means we see everything in Jenks: knob-and-tube replacements in pre-1950s homes, panel upgrades in mid-century ranches, EV charger installs in newer subdivisions, and commercial tenant build-outs along the Riverwalk and Main Street corridor. M Electric — owned by US Army veteran Marshall Morgan since 1999 — is typically 25–45 minutes from a Jenks property and pulls permits through the City of Jenks building department.",
    neighborhoods: [
      "Downtown Jenks (Antique District)",
      "Riverwalk Crossing",
      "Jenks Public Schools area",
      "Stonebrooke",
    ],
    responseTime: "60–90 minutes for emergencies; same-day standard service",
    utilities: ["PSO", "OEC (Oklahoma Electric Cooperative) — some areas"],
    driveTimeFromTulsa: "20–30 minutes from south Tulsa",
    commonWork: [
      {
        title: "Antique District commercial wiring",
        body: "Historic commercial buildings on Main Street weren't wired for modern POS, refrigeration, and lighting loads. We modernize commercial electrical without disrupting the building's historic character or the antique merchandise stored inside.",
      },
      {
        title: "Riverwalk tenant build-outs",
        body: "The Riverwalk Crossing and surrounding commercial corridor sees tenant turnover and build-out work for restaurants, retail, and office space. We handle electrical for tenant improvements working alongside other trades.",
      },
      {
        title: "Older Jenks home rewiring",
        body: "Pre-1960s homes near downtown Jenks often still carry old wiring methods. We rewire to modern code while minimizing drywall damage and preserving the home's character.",
      },
      {
        title: "Newer subdivision EV chargers and panel work",
        body: "Larger Jenks subdivisions have newer construction with attached garages and 200A panels — ideal candidates for EV charger installs and the occasional load-driven 320A upgrade.",
      },
    ],
    faqs: [
      {
        q: "Do you handle commercial electrical work in the Jenks Antique District?",
        a: "Yes — we work regularly in downtown Jenks commercial properties, including the historic Main Street buildings in the Antique District. We coordinate with property owners on minimal-disruption retrofits and pull permits through the City of Jenks.",
      },
      {
        q: "Can you wire restaurant and retail spaces along Riverwalk Crossing?",
        a: "Yes. The Riverwalk and surrounding commercial corridor is a frequent build-out market for us. We handle restaurant electrical (high-draw equipment, kitchen exhaust controls, dedicated circuits), retail buildouts, and office tenant improvements.",
      },
      {
        q: "Do you do home rewiring in older Jenks neighborhoods?",
        a: "Yes — older homes near downtown Jenks often need full or partial rewiring. We rewire with modern copper, modern grounding, and proper panel coordination, working through attics and crawl spaces wherever we can to minimize drywall work.",
      },
      {
        q: "How long does it take to get to Jenks from Tulsa?",
        a: "Jenks is 20–30 minutes from south Tulsa via Highway 75 or Riverside Drive. For 24/7 emergencies, expect 60–90 minutes from our Tulsa base.",
      },
      {
        q: "Do you charge a travel fee to Jenks?",
        a: "No. Jenks is fully inside our standard service area. No travel fee.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "sapulpa",
    city: "Sapulpa",
    state: "OK",
    county: "Creek County",
    population: "21,000",
    geo: { lat: 35.9989, lng: -96.1142 },
    metaTitle:
      "Sapulpa Electrician | M Electric — Route 66 Heritage, Older Homes",
    metaDescription:
      "Licensed Sapulpa electrician — historic downtown, older home rewires, panel upgrades, residential & commercial. (918) 992-6282.",
    heroEyebrow: "Sapulpa, OK",
    h1Top: "Sapulpa",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric serves Sapulpa with licensed residential and commercial electrical work, with particular experience in the older homes and historic commercial buildings along the Route 66 corridor and downtown Sapulpa.",
    introParagraph:
      "Sapulpa is the Creek County seat with a population around 21,000 and a distinct character shaped by its glass-industry heritage and Route 66 history. That history is reflected in the housing stock — Sapulpa has a higher concentration of older homes (pre-1960s) than the newer-construction-dominated suburbs to the east, particularly around downtown and the historic neighborhoods west of Mission Street. Older housing means different electrical work: more knob-and-tube and old aluminum branch circuit replacements, more 60A and 100A fuse-panel upgrades, more grounding retrofits, and more requests for whole-home surge protection given Oklahoma's storm exposure. Sapulpa is in Creek County rather than Tulsa County, but it's fully inside our standard service area at 30–50 minutes from our Tulsa base, with no travel surcharge. M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — pulls permits through the City of Sapulpa building department.",
    neighborhoods: [
      "Downtown Sapulpa",
      "Route 66 corridor",
      "Mission Hills",
      "Sapulpa High School area",
    ],
    responseTime: "60–120 minutes for emergencies; same-day standard service",
    utilities: ["AEP-PSO"],
    driveTimeFromTulsa: "30–40 minutes from southwest Tulsa",
    commonWork: [
      {
        title: "Older home rewiring",
        body: "Sapulpa's older housing stock — particularly pre-1970s homes near downtown — often still has knob-and-tube or aluminum branch wiring. We rewire to modern copper with proper grounding throughout.",
      },
      {
        title: "Fuse panel to breaker panel upgrades",
        body: "Many original Sapulpa homes still operate on 60A or 100A fuse panels that struggle with modern HVAC and appliance loads. Upgrading to 200A breaker panels is one of our most frequent Sapulpa jobs.",
      },
      {
        title: "Historic downtown commercial",
        body: "Downtown Sapulpa's older commercial buildings need careful electrical work — retrofits for modern lighting, dedicated circuits for new equipment, and proper grounding without compromising the building's character.",
      },
      {
        title: "Whole-home surge protection",
        body: "Sapulpa sits in the same Tornado Alley belt as the rest of the metro. Older homes especially benefit from whole-home surge protection at the panel because their internal wiring is less robust to surge transients.",
      },
    ],
    faqs: [
      {
        q: "Do you serve Sapulpa even though it's in Creek County?",
        a: "Yes. Sapulpa is fully inside our standard service area despite being across the Tulsa County line into Creek County. No travel surcharge — Sapulpa rates match our Tulsa rates.",
      },
      {
        q: "Do you do whole-house rewiring on older Sapulpa homes?",
        a: "Yes — full and partial rewiring is one of our most common Sapulpa jobs. We work through attics, crawl spaces, and walls to replace knob-and-tube or old aluminum wiring with modern copper and proper grounding, minimizing drywall damage.",
      },
      {
        q: "Can you upgrade my old fuse panel?",
        a: "Yes. Upgrading 60A or 100A fuse panels to modern 200A breaker panels (or 320A for larger homes) is routine Sapulpa work. We handle utility coordination with PSO, permits, and the inspection through the City of Sapulpa.",
      },
      {
        q: "How fast can you respond to a Sapulpa electrical emergency?",
        a: "Sapulpa is 30–40 minutes from our Tulsa base. For 24/7 emergencies, expect 60–120 minutes depending on traffic on the Creek Turnpike or Highway 75.",
      },
      {
        q: "Do you handle historic downtown Sapulpa commercial work?",
        a: "Yes. We do tenant build-outs, lighting retrofits, and panel upgrades for the older commercial buildings in downtown Sapulpa, working sensitively around the building's historic character.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "sand-springs",
    city: "Sand Springs",
    state: "OK",
    county: "Tulsa County",
    population: "19,000",
    geo: { lat: 36.1397, lng: -96.1086 },
    metaTitle:
      "Sand Springs Electrician | M Electric — Residential & Commercial",
    metaDescription:
      "Licensed Sand Springs electrician — older home rewires, industrial, panel upgrades, residential & commercial. (918) 992-6282.",
    heroEyebrow: "Sand Springs, OK",
    h1Top: "Sand Springs",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric provides licensed electrical service across Sand Springs — older home rewiring, panel upgrades, light industrial work, and commercial service for the historic refining-town community west of Tulsa along the Arkansas River.",
    introParagraph:
      "Sand Springs sits west of Tulsa along the Arkansas River with a population around 19,000 and a unique character shaped by its origins as a planned company town built by Charles Page around the local refining industry. Many Sand Springs homes date to the mid-20th century when the city's industrial base was at its peak, and residential work here often involves panel upgrades, rewires, and modernization of homes that haven't seen significant electrical updates in decades. There's also an active light-industrial sector along the Arkansas riverfront and Highway 412 — for that work we handle commercial wiring, panel upgrades, and the kind of light-industrial circuits common to fabrication and warehouse operations. Sand Springs is 25–40 minutes from our Tulsa base via Highway 64 or Charles Page Boulevard, with no travel surcharge. M Electric — owned by US Army veteran Marshall Morgan and family-run since 1999 — pulls permits through the City of Sand Springs.",
    neighborhoods: [
      "Downtown Sand Springs",
      "Charles Page Boulevard corridor",
      "Sand Springs Public Schools area",
      "Riverside (Arkansas River frontage)",
    ],
    responseTime: "60–90 minutes for emergencies; same-day standard service",
    utilities: ["PSO"],
    driveTimeFromTulsa: "20–25 minutes from west Tulsa",
    commonWork: [
      {
        title: "Mid-century home electrical updates",
        body: "Sand Springs' company-town heritage left a high concentration of mid-20th-century homes. Panel upgrades, grounding retrofits, and partial rewires are common service calls.",
      },
      {
        title: "Light industrial and commercial wiring",
        body: "Sand Springs has an active light-industrial sector. We handle commercial wiring, machine circuits, three-phase service work, and panel upgrades for shop and warehouse operations along the riverfront and 412 corridor.",
      },
      {
        title: "Storm damage and surge protection",
        body: "Sand Springs experiences the same Tornado Alley exposure as the rest of the metro. Whole-home surge protection at the panel and lightning grounding are practical investments for any Sand Springs property.",
      },
      {
        title: "Outbuilding wiring on larger lots",
        body: "Many Sand Springs properties include detached garages, workshops, or outbuildings. We run sub-panels, dedicated circuits, and lighting with proper grounding and weatherheaded feeds.",
      },
    ],
    faqs: [
      {
        q: "Do you handle light industrial electrical work in Sand Springs?",
        a: "Yes. The Sand Springs riverfront and 412 corridor have an active light-industrial sector. We do commercial wiring, machine circuits, panel upgrades, and three-phase service work for shop and warehouse operations.",
      },
      {
        q: "How long does it take to get to Sand Springs from Tulsa?",
        a: "Sand Springs is 20–25 minutes from west Tulsa via Highway 64 or Charles Page Boulevard. For 24/7 emergencies, expect 60–90 minutes from our Tulsa base.",
      },
      {
        q: "Can you work on the older homes downtown Sand Springs?",
        a: "Yes. Sand Springs' older housing stock makes panel upgrades and rewires routine work for us. We handle the City of Sand Springs permit and inspection process.",
      },
      {
        q: "Do you charge a travel fee to Sand Springs?",
        a: "No. Sand Springs is fully inside our standard service area, no travel surcharge.",
      },
      {
        q: "Do you serve commercial customers in Sand Springs?",
        a: "Yes — we work with retail, restaurants, light industrial, and office tenants across Sand Springs. Same family-owned, veteran-led service we provide to Tulsa-area commercial customers.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "berryhill",
    city: "Berryhill",
    state: "OK",
    county: "Tulsa County",
    population: "4,000",
    geo: { lat: 36.115, lng: -96.05 },
    metaTitle:
      "Berryhill Electrician | M Electric — Licensed, Local, 24/7",
    metaDescription:
      "Licensed Berryhill electrician — residential repairs, panel upgrades, rewiring. Same-day service from Tulsa. Call (918) 992-6282.",
    heroEyebrow: "Berryhill, OK",
    h1Top: "Berryhill",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric serves Berryhill with the same licensed residential electrical service we provide to Tulsa, Sand Springs, and the rest of the metro. From panel upgrades to emergency repairs, we cover the Berryhill community at our standard rates with no travel surcharge.",
    introParagraph:
      "Berryhill is a small, mostly residential unincorporated community in Tulsa County, southwest of Tulsa proper near the Sand Springs city line. Population is around 4,000, and the area is anchored by Berryhill Public Schools (an independent district within Tulsa County). Most Berryhill housing is mid-20th-century single-family residential on modest lots, which means the electrical work we see here mirrors what we do in older parts of Tulsa: panel upgrades from undersized fuse boxes, partial rewires of pre-1970s homes, ungrounded outlet conversions, and standard residential service work. Berryhill is 25–40 minutes from our Tulsa base via Charles Page Boulevard or Highway 64. M Electric — owned by US Army veteran Marshall Morgan since 1999 — is licensed by the Oklahoma Construction Industries Board and pulls permits through Tulsa County for unincorporated work. Berryhill is fully inside our standard service area with no travel surcharge.",
    responseTime: "60–90 minutes for emergencies; same-day standard service",
    utilities: ["PSO"],
    driveTimeFromTulsa: "25–30 minutes from west Tulsa",
    commonWork: [
      {
        title: "Mid-century home panel upgrades",
        body: "Berryhill's housing stock means panel upgrades and grounding retrofits are common — bringing 60A or 100A homes up to a modern 200A standard.",
      },
      {
        title: "Outlet and switch updates",
        body: "Two-prong ungrounded outlet conversions, GFCI installs in kitchens and bathrooms, and switch replacements are standard Berryhill service calls.",
      },
      {
        title: "Service repair and troubleshooting",
        body: "Tripping breakers, dead outlets, intermittent power — the standard residential troubleshooting that older homes need.",
      },
    ],
    faqs: [
      {
        q: "Do you serve Berryhill?",
        a: "Yes. Berryhill is fully inside our standard service area with no travel surcharge. We provide licensed residential electrical service to Berryhill at our standard Tulsa-area rates.",
      },
      {
        q: "How long does it take to get to Berryhill from Tulsa?",
        a: "Berryhill is 25–30 minutes from west Tulsa via Charles Page Boulevard. For 24/7 emergencies, expect 60–90 minutes from our Tulsa base.",
      },
      {
        q: "Who pulls permits for electrical work in Berryhill?",
        a: "Berryhill is unincorporated and falls under Tulsa County jurisdiction for permits and inspections. We handle the County permit process on your behalf.",
      },
      {
        q: "What utility serves Berryhill?",
        a: "PSO (AEP-Oklahoma) serves Berryhill. We coordinate any service-entrance work, meter pulls, and panel changes directly with PSO.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "turley",
    city: "Turley",
    state: "OK",
    county: "Tulsa County",
    population: "3,000",
    geo: { lat: 36.234, lng: -95.993 },
    metaTitle: "Turley Electrician | M Electric — Licensed, Same-Day Service",
    metaDescription:
      "Licensed Turley electrician — residential repairs, panel upgrades, rewiring. Same-day service from Tulsa. Call (918) 992-6282.",
    heroEyebrow: "Turley, OK",
    h1Top: "Turley",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric serves Turley with licensed residential electrical service at our standard Tulsa-area rates. Just north of Tulsa city limits, Turley is one of the closer service-area communities to our base, with response times under an hour for most emergencies.",
    introParagraph:
      "Turley is a small unincorporated community in north Tulsa County, just north of the Tulsa city limits along Highway 75. Population is around 3,000, and the area is mostly older single-family residential. Because Turley is so close to Tulsa proper, our response times here are among the fastest in the service area — typically 20–35 minutes from our Tulsa base, depending on traffic on Highway 75 or Peoria Avenue. The electrical work we do in Turley mirrors what we do in north Tulsa neighborhoods: panel upgrades, older-home rewiring, GFCI conversions, repairs to aging service entrances, and standard residential service calls. Turley is unincorporated, so permits run through Tulsa County rather than a city building department. M Electric — owned by US Army veteran Marshall Morgan and family-run since 1999 — applies the same rates and standards in Turley as in Tulsa proper, with no travel surcharge.",
    responseTime: "45–75 minutes for emergencies; same-day standard service",
    utilities: ["PSO"],
    driveTimeFromTulsa: "15–20 minutes from north Tulsa",
    commonWork: [
      {
        title: "Older-home panel upgrades",
        body: "Turley's older residential stock often runs on undersized panels. Upgrading to 200A is one of our most common Turley jobs.",
      },
      {
        title: "Service entrance repair and replacement",
        body: "Aging service entrances — meter bases, weatherheads, mast pipes — are common in Turley homes. We replace and repair them with PSO coordination.",
      },
      {
        title: "Standard residential repair",
        body: "Tripping breakers, dead outlets, switch problems, ceiling fan installs, light fixture replacements — the standard service calls older neighborhoods need.",
      },
    ],
    faqs: [
      {
        q: "Do you serve Turley?",
        a: "Yes. Turley is one of the closest service-area communities to our Tulsa base. Same-day standard service, 24/7 emergency response, no travel surcharge.",
      },
      {
        q: "How long does it take to get to Turley from Tulsa?",
        a: "Turley is 15–20 minutes from north Tulsa via Highway 75 or Peoria Avenue. For 24/7 emergencies, expect 45–75 minutes from our Tulsa base.",
      },
      {
        q: "Who handles Turley electrical permits?",
        a: "Turley is unincorporated, so electrical permits and inspections run through Tulsa County. We handle the County permit process on your behalf.",
      },
      {
        q: "What utility does Turley use?",
        a: "PSO (AEP-Oklahoma) serves Turley. We coordinate any service-entrance work directly with PSO.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "oakhurst",
    city: "Oakhurst",
    state: "OK",
    county: "Tulsa County",
    population: "2,000",
    geo: { lat: 36.066, lng: -96.077 },
    metaTitle: "Oakhurst Electrician | M Electric — Licensed Residential",
    metaDescription:
      "Licensed Oakhurst electrician — residential repairs, panel upgrades, rewiring. Same-day service from Tulsa. Call (918) 992-6282.",
    heroEyebrow: "Oakhurst, OK",
    h1Top: "Oakhurst",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric serves Oakhurst with the same licensed residential electrical service we provide across the Tulsa metro. Small community, same expert service — same-day standard scheduling and 24/7 emergency response, no travel surcharge.",
    introParagraph:
      "Oakhurst is a small unincorporated community in west Tulsa County, between Tulsa proper and Sand Springs. Population is around 2,000, and the area is mostly residential. Because Oakhurst sits between two larger communities we already serve daily, including it in our standard service area was a natural fit — there's no travel surcharge, and we typically reach Oakhurst in 30–45 minutes from our Tulsa base. Most of our work in Oakhurst is standard residential: panel upgrades, repair calls, GFCI installs, ceiling fan installations, and the occasional whole-home rewire on older properties. Permits run through Tulsa County since Oakhurst is unincorporated. M Electric — owned by US Army veteran Marshall Morgan since 1999 — applies the same standard residential rates in Oakhurst as in Tulsa proper.",
    responseTime: "60–90 minutes for emergencies; same-day standard service",
    utilities: ["PSO"],
    driveTimeFromTulsa: "20–30 minutes from west Tulsa",
    commonWork: [
      {
        title: "Standard residential service",
        body: "Panel upgrades, outlet and switch replacements, breaker work, and standard troubleshooting calls — the bread-and-butter residential electrical Oakhurst homeowners need.",
      },
      {
        title: "Older-home electrical updates",
        body: "Where Oakhurst homes carry aging electrical systems, we handle partial rewires, grounding retrofits, and service entrance updates.",
      },
      {
        title: "Lighting and ceiling fan installs",
        body: "Indoor lighting upgrades, recessed light installs, and ceiling fan replacements are common Oakhurst calls.",
      },
    ],
    faqs: [
      {
        q: "Do you serve Oakhurst?",
        a: "Yes. Oakhurst is fully inside our standard service area, no travel surcharge.",
      },
      {
        q: "How long does it take to get to Oakhurst?",
        a: "Oakhurst is 20–30 minutes from west Tulsa. For 24/7 emergencies, expect 60–90 minutes from our Tulsa base.",
      },
      {
        q: "Who handles permits for Oakhurst electrical work?",
        a: "Oakhurst is unincorporated, so electrical permits and inspections run through Tulsa County. We handle the County permit process on your behalf.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "glenpool",
    city: "Glenpool",
    state: "OK",
    county: "Tulsa County (with portions in Creek County)",
    population: "14,000",
    geo: { lat: 35.9551, lng: -96.0083 },
    metaTitle: "Glenpool Electrician | M Electric — Residential & Commercial",
    metaDescription:
      "Licensed Glenpool electrician — residential, commercial, panel upgrades, EV chargers. Same-day service. Call (918) 992-6282.",
    heroEyebrow: "Glenpool, OK",
    h1Top: "Glenpool",
    h1Bottom: "electrical services.",
    heroLead:
      "M Electric provides licensed residential and commercial electrical service in Glenpool — birthplace of Oklahoma's oil boom and now one of the south Tulsa metro's growing suburbs. Same-day standard service and 24/7 emergency response from our Tulsa base.",
    introParagraph:
      "Glenpool sits at the southern edge of the Tulsa metro with a population around 14,000 and a notable history — the 1905 Glenpool oil strike that helped kick off Oklahoma's oil boom. Today Glenpool is a fast-growing residential community with a mix of established mid-century neighborhoods and newer subdivision growth, plus a small but active commercial corridor along Highway 75 and 141st Street. The work we do in Glenpool reflects that mix: panel upgrades and rewires in older established homes, EV chargers and generator installs in the newer subdivisions, and tenant build-out and lighting work for the commercial corridor. Glenpool spans both Tulsa County and Creek County depending on the address — for permits we coordinate with whichever jurisdiction applies. M Electric — owned by US Army veteran Marshall Morgan since 1999 — is typically 30–45 minutes from a Glenpool property via Highway 75. No travel surcharge — Glenpool rates match our Tulsa rates.",
    neighborhoods: [
      "Downtown Glenpool",
      "Glenpool Public Schools area",
      "Highway 75 corridor",
      "141st Street corridor",
    ],
    responseTime: "60–90 minutes for emergencies; same-day standard service",
    utilities: ["PSO"],
    driveTimeFromTulsa: "20–25 minutes from south Tulsa",
    commonWork: [
      {
        title: "Newer-subdivision EV chargers and generators",
        body: "Glenpool's newer residential subdivisions are typical EV-charger and standby-generator candidates — modern 200A panels with attached garages and gas service available.",
      },
      {
        title: "Older home rewiring and panel upgrades",
        body: "Established Glenpool neighborhoods have mid-century homes that often need panel upgrades, partial rewires, and grounding retrofits.",
      },
      {
        title: "Highway 75 commercial corridor",
        body: "We handle commercial tenant build-outs, lighting retrofits, and panel work for the retail and office commercial along Highway 75 and 141st Street in Glenpool.",
      },
      {
        title: "Storm protection and surge",
        body: "Like the rest of the metro, Glenpool sits in Tornado Alley. Whole-home surge protection and proper lightning grounding are practical investments for any Glenpool property.",
      },
    ],
    faqs: [
      {
        q: "Is Glenpool in Tulsa County or Creek County?",
        a: "Both, depending on the address. Most of Glenpool is in Tulsa County, but portions extend into Creek County. For permits we coordinate with whichever county jurisdiction applies to your property.",
      },
      {
        q: "How long does it take to get to Glenpool from Tulsa?",
        a: "Glenpool is 20–25 minutes from south Tulsa via Highway 75. For 24/7 emergencies, expect 60–90 minutes from our Tulsa base.",
      },
      {
        q: "Do you handle commercial electrical work along the Glenpool Highway 75 corridor?",
        a: "Yes. The Highway 75 and 141st Street commercial corridor is regular service-area work for us. Tenant build-outs, lighting retrofits, panel upgrades, and standard commercial service.",
      },
      {
        q: "Do you charge a travel fee to Glenpool?",
        a: "No. Glenpool is fully inside our standard service area, no travel surcharge.",
      },
      {
        q: "What utility serves Glenpool?",
        a: "PSO (AEP-Oklahoma) serves Glenpool. We coordinate any service-entrance work directly with PSO.",
      },
    ],
  },
];

export const areasBySlug = new Map(areas.map((a) => [a.slug, a]));

export function getArea(slug: string): ServiceArea | undefined {
  return areasBySlug.get(slug);
}
