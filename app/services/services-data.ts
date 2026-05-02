/**
 * Source of truth for all residential service pages.
 * Each entry drives /services/[slug] and the /services index.
 */

export type ServiceSection =
  | { kind: "paragraph"; heading: string; body: string }
  | { kind: "bullets"; heading: string; lead?: string; bullets: string[] }
  | {
      kind: "feature-bullets";
      heading: string;
      lead?: string;
      items: { title: string; body: string }[];
    };

export type ServiceFAQ = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  /** Schema.org Service.serviceType — short, canonical service name */
  serviceType: string;
  /** Used in nav, breadcrumbs, related-services — keyword-rich label */
  navTitle: string;
  /** Used in browser <title>; ≤ 70 chars ideal */
  metaTitle: string;
  /** Meta description; 150–170 chars */
  metaDescription: string;

  /** Hero block */
  heroEyebrow: string;
  /** H1 split: first half (white) */
  h1Top: string;
  /** H1 split: second half (red gradient) */
  h1Bottom: string;
  heroLead: string;
  /** Unsplash photo ID (the part after `photo-` in CDN URLs) */
  heroImageId: string;
  /** Keyword-rich alt text */
  heroImageAlt: string;

  /** Mid-body sections */
  body: ServiceSection[];

  process?: {
    heading: string;
    steps: { title: string; body?: string }[];
  };

  whyChoose: {
    heading: string;
    bullets: string[];
  };

  faqs: ServiceFAQ[];

  /** Slugs of related services to surface at the bottom of the page */
  related: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "electrical-repair",
    serviceType: "Electrical Repair",
    navTitle: "Electrical Repair Services in Tulsa",
    metaTitle:
      "Electrical Repair in Tulsa, OK | Same-Day Service | M Electric",
    metaDescription:
      "Licensed Tulsa electricians for fast, reliable electrical repair. Same-day service, 24/7 emergency response across Tulsa, Broken Arrow, Owasso & the metro.",
    heroEyebrow: "Tulsa Electrical Repair",
    h1Top: "Professional electrical",
    h1Bottom: "repair in Tulsa, OK.",
    heroLead:
      "When electrical problems strike your Tulsa home, you need fast, reliable repair from a trusted pro. M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — provides expert electrical repair throughout Greater Tulsa, with licensed electricians available 24/7 for emergency calls in Tulsa, Broken Arrow, Owasso, Bixby, Jenks, and Sapulpa.",
    heroImageId: "photo-1682345262055-8f95f3c513ea",
    heroImageAlt:
      "Tulsa electrician's hands working on residential wiring during a repair",
    body: [
      {
        kind: "paragraph",
        heading:
          "Fast, professional Tulsa electrical repair when you need it most",
        body: "At M Electric, we understand that electrical issues can disrupt your daily life and create dangerous situations. From flickering lights and dead outlets to complete power failures, our expert technicians arrive promptly to diagnose and resolve your electrical problems. We take pride in delivering reliable repairs and exceptional service to homeowners throughout the Tulsa metropolitan area.",
      },
      {
        kind: "paragraph",
        heading: "Efficient and reliable service across the Tulsa metro",
        body: "Efficiency is a hallmark of our service. From diagnosing faulty wiring to upgrading outdated electrical panels, our team works swiftly without sacrificing quality. We understand the urgency that often accompanies electrical repairs, which is why we prioritize prompt responses and timely service delivery. Each member of our staff is trained in advanced troubleshooting techniques, allowing us to quickly identify problems and offer effective solutions.",
      },
      {
        kind: "bullets",
        heading: "Common electrical problems we repair in Tulsa homes",
        bullets: [
          "Circuit breaker trips and electrical panel issues",
          "Outlet and switch malfunctions",
          "Flickering or dimming lights",
          "Power outages and partial power loss",
          "Burning odors from outlets or switches",
          "Outdated or unsafe wiring",
          "Hot outlets or switches",
          "GFCI outlet failures",
          "Electrical surge damage",
        ],
      },
    ],
    process: {
      heading: "Our professional repair process",
      steps: [
        {
          title: "Expert diagnosis",
          body: "Our licensed electricians thoroughly assess your electrical system to identify both immediate issues and potential future problems. We use advanced diagnostic tools to pinpoint the exact cause of your electrical troubles.",
        },
        {
          title: "Clear communication",
          body: "We explain our findings in plain language and provide detailed repair options with upfront pricing. You'll understand exactly what needs to be done before we begin any work.",
        },
        {
          title: "Quality repairs",
          body: "Using professional-grade materials and following all current electrical codes, we complete repairs efficiently and safely. Our work is always thoroughly tested and inspected.",
        },
        {
          title: "Safety verification",
          body: "Before considering any job complete, we perform comprehensive testing and a final safety check to ensure everything is working properly.",
        },
      ],
    },
    whyChoose: {
      heading: "Why Tulsa homeowners choose M Electric",
      bullets: [
        "Available 24/7 for emergency electrical repairs",
        "Licensed, insured, and background-checked electricians",
        "Same-day service in most cases",
        "Clear, upfront pricing with no hidden fees",
        "Comprehensive electrical safety inspections included",
        "Fully-stocked service vehicles for faster repairs",
        "Locally owned and operated",
        "Serving all Greater Tulsa communities",
        "100% satisfaction guaranteed",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to fix electrical problems in a house?",
        a: "Electrical repair costs vary depending on the specific issue and complexity of the repair. Minor repairs like replacing an outlet typically range from $150–$300, while more complex electrical work can cost more. We provide detailed quotes before beginning any work and offer financing options for larger repairs.",
      },
      {
        q: "Can a homeowner do their own electrical work in Oklahoma?",
        a: "While Oklahoma law permits homeowners to perform some electrical work on their own homes, we strongly recommend hiring a licensed electrician. DIY electrical work can create serious safety hazards and liability issues if not done correctly. Professional electricians ensure all work meets current safety codes and standards.",
      },
      {
        q: "Who should do electrical repairs?",
        a: "Always choose a licensed, insured electrician for electrical repairs. Our technicians are fully licensed, undergo regular training, and stay current with the latest electrical codes and safety standards. This ensures your repairs are done safely and correctly the first time.",
      },
      {
        q: "How much electricity does a 2 bedroom apartment use?",
        a: "A typical 2-bedroom apartment in Tulsa uses between 800–1,000 kWh per month, though usage varies based on factors like appliance efficiency, HVAC system, and personal habits. We can provide an electrical assessment to help identify ways to reduce your energy consumption.",
      },
      {
        q: "Is 700 kWh a month a lot?",
        a: "For a Tulsa residence, 700 kWh is generally considered average to moderate monthly usage. However, many factors affect electricity consumption, including home size, appliance efficiency, and season. Our electricians can perform an energy audit to help optimize your electrical usage.",
      },
    ],
    related: ["panel-upgrades", "wiring-repair", "outlet-installation"],
  },

  {
    slug: "panel-upgrades",
    serviceType: "Electrical Panel Upgrade",
    navTitle: "Electrical Panel Upgrades in Tulsa",
    metaTitle: "Electrical Panel Upgrades in Tulsa, OK | M Electric",
    metaDescription:
      "Tulsa electrical panel upgrades by licensed electricians. 100A to 400A installs, permit handling, code compliance. Free consultation. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Panel Upgrades",
    h1Top: "Electrical panel upgrades",
    h1Bottom: "& installation in Tulsa.",
    heroLead:
      "Is your home's electrical panel showing signs of age or struggling to keep up with modern power demands? Trust M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — for professional electrical panel upgrades in Tulsa and surrounding areas. With decades of experience and a team of licensed electricians, we specialize in upgrading residential panels to ensure your home's safety and efficiency.",
    heroImageId: "photo-1576446470246-499c738d1c8e",
    heroImageAlt:
      "Close-up of a residential electrical breaker panel — the kind M Electric upgrades for Tulsa homes",
    body: [
      {
        kind: "bullets",
        heading: "Signs your Tulsa home needs an electrical panel upgrade",
        bullets: [
          "Frequent circuit breaker trips",
          "Flickering or dimming lights",
          "Warm or discolored outlet covers",
          "Buzzing sounds from the panel",
          "Old fuse box or outdated panel",
          "Planning home renovations or additions",
          "Installing new high-powered appliances",
        ],
      },
      {
        kind: "paragraph",
        heading: "Built for the way modern Tulsa homes use power",
        body: "Today's homes draw far more current than the homes of even fifteen years ago — EV chargers, heat pumps, induction ranges, multiple A/C zones, home offices, and high-draw kitchen appliances. An undersized or aging panel will trip, run hot, or simply fail to keep up. We size and install panels to fit how you actually live, not just to meet code minimums.",
      },
    ],
    process: {
      heading: "Our panel upgrade process",
      steps: [
        {
          title: "Initial assessment",
          body: "We thoroughly evaluate your current electrical system and the loads you need to support.",
        },
        {
          title: "Custom solution",
          body: "Recommend the right panel size for your needs — typically 200A or 400A for modern Tulsa homes.",
        },
        {
          title: "Permit acquisition",
          body: "Handle all necessary permits and paperwork with the City of Tulsa or your local jurisdiction.",
        },
        {
          title: "Professional installation",
          body: "Expert installation by licensed electricians, coordinated with your utility's disconnect.",
        },
        {
          title: "Safety inspection",
          body: "Complete testing and official inspection — we don't leave until your panel passes.",
        },
        {
          title: "Final walkthrough",
          body: "Detailed explanation of your new system, breaker map, and any maintenance you should know about.",
        },
      ],
    },
    whyChoose: {
      heading: "Why choose M Electric for your panel upgrade",
      bullets: [
        "Licensed and insured professionals — all work by certified electricians",
        "Local Tulsa expertise serving the metro since 1999",
        "Complete solutions from 100A to 400A panel installations",
        "We handle all permits and inspections",
        "Satisfaction guaranteed on every installation",
        "24/7 emergency service available",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to upgrade an electric panel?",
        a: "Panel upgrade costs vary based on amperage needs and complexity. Most residential upgrades range from $2,500–$4,500. Contact us for a detailed quote specific to your home's needs.",
      },
      {
        q: "Is it worth it to upgrade an electrical panel?",
        a: "Yes — an upgraded panel improves safety, increases home value, and ensures reliable power for modern appliances. It's especially valuable before home renovations or adding new electrical equipment.",
      },
      {
        q: "Does upgrading to 200 amp service increase home value?",
        a: "Yes, upgrading to 200A service typically increases home value by improving safety and allowing for modern amenities. It's particularly attractive to potential buyers and often required by insurance companies.",
      },
      {
        q: "Can I change my 100 amp panel to 200 amp?",
        a: "Yes. We can upgrade your 100A panel to 200A service. This process requires utility company coordination and permits, which we handle completely for you.",
      },
      {
        q: "Is 200 amps enough for a house?",
        a: "For most modern homes, 200A provides sufficient power. It can support multiple high-draw appliances, EV charging, and standard household needs. We'll assess your specific requirements to recommend the right amperage.",
      },
    ],
    related: ["electrical-repair", "home-rewiring", "surge-protection"],
  },

  {
    slug: "indoor-lighting",
    serviceType: "Indoor Lighting Installation",
    navTitle: "Indoor Lighting Installation Tulsa",
    metaTitle:
      "Indoor Lighting Installation in Tulsa | LED, Recessed | M Electric",
    metaDescription:
      "Professional indoor lighting installation by Tulsa electricians. Recessed, LED, under-cabinet, smart lighting & custom design. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Indoor Lighting",
    h1Top: "Indoor lighting installation",
    h1Bottom: "& design in Tulsa.",
    heroLead:
      "Looking for professional indoor lighting installation in Tulsa? M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — specializes in transforming homes with expert lighting solutions that enhance both functionality and style. Proper indoor lighting creates ambiance, improves functionality, and increases home value.",
    heroImageId: "/job-gallery/chandelier-entryway.jpg",
    heroImageAlt:
      "Alabaster chandelier installed by M Electric in a Tulsa home entryway — residential indoor lighting installation",
    body: [
      {
        kind: "paragraph",
        heading: "LED, dimmer compatibility, and color-temperature for Tulsa homes",
        body: "Modern LED retrofits introduce two trade-offs that didn't exist with old incandescent lighting. First, dimmer compatibility: most older wall dimmers were designed for incandescent leading-edge phase control and don't dim modern LED fixtures smoothly — flickering, buzzing, or refusing to dim below 30% are all common symptoms. We replace older dimmers with LED-rated trailing-edge dimmers (Lutron Caséta, Maestro, or comparable) to keep dimming smooth across the full range. Second, color temperature: Tulsa kitchens and bathrooms typically benefit from 3000–3500K (warm-to-neutral white) for everyday use, while task areas like a workshop or pantry often work better at 4000–5000K (neutral-to-cool). We help homeowners pick the right Kelvin temperature per room and stick with consistent fixtures so the lighting feels intentional, not mismatched. Most projects are completed in a single day with cleanup included.",
      },
      {
        kind: "feature-bullets",
        heading: "Our Tulsa indoor lighting installation services",
        items: [
          {
            title: "Recessed Lighting",
            body: "Strategic placement for modern, even illumination throughout living spaces.",
          },
          {
            title: "LED Lighting Upgrades",
            body: "Energy-efficient professional installation and full retrofitting of older fixtures.",
          },
          {
            title: "Custom Lighting Design",
            body: "Layered approach combining ambient, task, and accent lighting for any room.",
          },
          {
            title: "Under-Cabinet Lighting",
            body: "Kitchen functionality and aesthetic improvements that transform meal prep.",
          },
          {
            title: "Chandelier & Pendant Installation",
            body: "Decorative, professionally mounted fixtures, sized and centered correctly.",
          },
          {
            title: "Smart Lighting Systems",
            body: "Controllable smart options for convenience, schedules, and energy management.",
          },
        ],
      },
    ],
    process: {
      heading: "Our professional lighting installation process",
      steps: [
        {
          title: "Initial consultation",
          body: "Goals and budget discussion — we listen first.",
        },
        {
          title: "Custom design",
          body: "A tailored lighting plan created for your space and how you live in it.",
        },
        {
          title: "Detailed quote",
          body: "Clear, itemized estimate with no surprises.",
        },
        {
          title: "Professional installation",
          body: "Safe, efficient completion with drop cloths and respect for your home.",
        },
        {
          title: "Final inspection",
          body: "Verification, dimmer calibration, and a thorough cleanup.",
        },
      ],
    },
    whyChoose: {
      heading: "Why choose M Electric for indoor lighting installation",
      bullets: [
        "Licensed, background-checked electricians with lighting expertise",
        "Transparent, upfront pricing with no hidden fees",
        "Home protection during installation",
        "Full warranty coverage on parts and labor",
        "24/7 emergency services available",
        "Veteran-owned local Tulsa business",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to install interior lighting?",
        a: "Basic fixture replacement typically starts around $150–$300, while complete room lighting design and installation projects may range from $500–$2,500+ depending on complexity, fixture count, and any drywall or wiring work needed.",
      },
      {
        q: "Do you need an electrician to install a light?",
        a: "Professional expertise ensures safety and code compliance through proper wiring, mounting, and electrical connections. For anything beyond a simple fixture swap on existing wiring, hire a licensed electrician.",
      },
      {
        q: "Can you install a ceiling light without existing wiring?",
        a: "Yes — but new installations require running electrical wiring through walls and ceilings. Our electricians evaluate the best approach to minimize drywall work while keeping the install clean and to code.",
      },
      {
        q: "How much does an electrician charge to install recessed lighting?",
        a: "Recessed lighting installation typically costs $125–$300 per light, including labor and materials. Costs vary based on ceiling access, existing wiring, and fixture choice.",
      },
    ],
    related: ["outdoor-lighting", "ceiling-fan-installation", "outlet-installation"],
  },

  {
    slug: "home-rewiring",
    serviceType: "Home Rewiring",
    navTitle: "Home Rewiring Services in Tulsa",
    metaTitle:
      "Professional Home Rewiring Services in Tulsa, OK | M Electric",
    metaDescription:
      "Complete home rewiring in Tulsa by licensed electricians. Aluminum, knob-and-tube, and outdated wiring replacement. Permits included. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Home Rewiring",
    h1Top: "Professional home rewiring",
    h1Bottom: "services in Tulsa.",
    heroLead:
      "M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — provides complete home rewiring services throughout the Tulsa metro area, including Jenks, Liberty, and Sapulpa. Our licensed electricians modernize systems with minimal disruption. We handle outdated aluminum wiring and modern electrical demands. Inspections and permits are included in every project.",
    heroImageId: "photo-1768321911048-46171ac7d425",
    heroImageAlt:
      "Newly run armored cable feeding two metal junction boxes mounted on a wood stud — whole-home rewire in progress on a Tulsa home by M Electric",
    body: [
      {
        kind: "paragraph",
        heading: "Why consider home rewiring in Tulsa",
        body: "Home rewiring replaces outdated or unsafe wiring throughout your house. Modern Tulsa homes consume up to 400% more electricity than homes from decades past, requiring updates for safety and functionality while meeting current electrical codes.",
      },
      {
        kind: "bullets",
        heading: "Signs your Tulsa home may need rewiring",
        bullets: [
          "Frequent circuit breaker trips or blown fuses",
          "Dimming or flickering lights when using appliances",
          "Burning odors from outlets or switches",
          "Discolored or warm outlet covers",
          "Two-prong ungrounded outlets",
          "Aluminum wiring (common in homes built 1965–1973)",
          "Knob-and-tube wiring in older homes",
          "Electric shocks from appliances or outlets",
        ],
      },
    ],
    process: {
      heading: "Our professional rewiring process",
      steps: [
        { title: "Comprehensive electrical inspection" },
        { title: "Detailed project assessment" },
        { title: "Permit acquisition" },
        { title: "Strategic wire installation" },
        { title: "Electrical panel updates" },
        { title: "Code compliance testing" },
        { title: "Final inspection and certification" },
      ],
    },
    whyChoose: {
      heading: "Why choose M Electric for home rewiring",
      bullets: [
        "Licensed and insured electrical contractors",
        "Extensive experience with historic and modern homes",
        "Complete permit handling and code compliance",
        "Minimal disruption techniques",
        "Upfront, transparent pricing",
        "Clean, professional installation",
        "Satisfaction guaranteed",
        "Local, trusted Tulsa expertise",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to rewire a house?",
        a: "Costs vary based on home size, age, and construction. A 2,000 square foot home typically ranges from $12,000–$20,000. Contact (918) 992-6282 for a detailed quote.",
      },
      {
        q: "Can a house be rewired without removing drywall?",
        a: "Some wiring replacement happens through attics and crawl spaces, but most complete projects require drywall access. We use minimally invasive techniques with careful repair methods.",
      },
      {
        q: "How often should a house be rewired?",
        a: "Most electrical systems should be evaluated for rewiring every 40–50 years. Homes with aluminum wiring or frequent issues may need it sooner. Regular inspections help determine the right timing.",
      },
      {
        q: "How long does it take to rewire a whole house?",
        a: "A complete home rewiring typically takes 5–10 days for an average-sized house. Smaller homes (1,000 sq ft) usually take 3–4 days; larger homes may require 1–2 weeks.",
      },
      {
        q: "Is 70-year-old wiring safe?",
        a: "While some older wiring still functions, it likely fails to meet modern safety standards or power demands. Older systems lack proper grounding, have degraded insulation, and may not safely handle current electrical loads. A professional inspection is recommended for wiring over 40 years old.",
      },
      {
        q: "How do I know if my house needs rewiring?",
        a: "Common indicators: frequent electrical issues or breaker trips, burning smells from outlets, flickering or dimming lights, two-prong outlets, visible wire wear, homes over 40 years old with original wiring, and aluminum wiring.",
      },
      {
        q: "What's the difference between aluminum and copper home wiring?",
        a: "Many Tulsa-area homes built between 1965 and 1973 were wired with aluminum branch circuits as a copper alternative during the wartime price spike. Aluminum expands and contracts more than copper, which loosens connections at outlets and switches over time. Loose connections create heat and fire risk. We typically address aluminum by either replacing affected branches with copper, or by retrofitting AlumiConn or COPALUM connectors at every termination per the CPSC guidance.",
      },
    ],
    related: ["panel-upgrades", "wiring-repair", "electrical-repair"],
  },

  {
    slug: "outlet-installation",
    serviceType: "Outlet Installation and Repair",
    navTitle: "Outlet Installation & Repair Tulsa",
    metaTitle:
      "Outlet Installation & Repair in Tulsa, OK | GFCI, USB, 240V",
    metaDescription:
      "Tulsa outlet installation and repair — GFCI, USB combo, 240V appliance, weather-resistant outdoor. Same-day service. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Outlet Services",
    h1Top: "Outlet installation",
    h1Bottom: "& repair in Tulsa.",
    heroLead:
      "Looking for professional outlet installation and repair in Tulsa? M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — provides expert electrical outlet services. We handle GFCI installation in kitchens and bathrooms, outlet repairs, USB combo outlets, and 240V appliance circuits.",
    heroImageId: "photo-1762330464388-de535963b42e",
    heroImageAlt:
      "Close-up of a residential wall outlet with plugs inserted — outlet services by M Electric in Tulsa",
    body: [
      {
        kind: "bullets",
        heading: "Expert Tulsa outlet services for every need",
        lead: "M Electric handles all residential outlet work, including:",
        bullets: [
          "New electrical outlet installations",
          "Replacement of outdated or damaged outlets",
          "GFCI upgrades for kitchens and bathrooms",
          "USB combo outlet installation",
          "220V/240V outlets for appliances",
          "Two-prong to grounded outlet conversion",
          "Loose or non-working outlet repair",
          "Weather-resistant outdoor outlets",
        ],
      },
      {
        kind: "paragraph",
        heading: "Tulsa outlet code requirements you should know",
        body: "Modern Tulsa-area code (NEC 2020 with Oklahoma adoption) requires GFCI protection for any outlet within 6 feet of a sink, in kitchens, bathrooms, garages, unfinished basements, and outdoor locations. AFCI protection is now required on most 15- and 20-amp branch circuits serving living spaces — bedrooms, family rooms, dining rooms, hallways, and similar. Older Tulsa homes built before these requirements rarely have the protection, which means the right move during any outlet upgrade is often to add a GFCI/AFCI breaker at the panel rather than just replacing the outlet alone. Kitchens require a minimum of two 20-amp small-appliance circuits and a dedicated 20-amp outlet for the dishwasher and disposal. Bathrooms need a dedicated 20-amp circuit for receptacles. We pull the right circuits and the right protection per current code on every install — not just a like-for-like swap.",
      },
      {
        kind: "bullets",
        heading: "Signs your Tulsa home needs outlet repair or replacement",
        lead: "Call an electrician right away if you notice:",
        bullets: [
          "Outlets warm to the touch",
          "Loose covers or poor plug grip",
          "Sparking or buzzing",
          "Tripping breakers when used",
          "Discoloration around the outlet",
          "Ungrounded outlets (two-prong)",
          "Non-functional power",
        ],
      },
    ],
    process: {
      heading: "Our professional outlet installation process",
      steps: [
        { title: "Initial electrical needs assessment" },
        { title: "Existing wiring and panel inspection" },
        { title: "Code-compliant professional installation" },
        { title: "Function testing" },
        { title: "Safety inspection" },
        { title: "Workspace cleanup" },
      ],
    },
    whyChoose: {
      heading: "Why choose M Electric for outlet services",
      bullets: [
        "Licensed and insured local Tulsa electricians",
        "Same-day service available",
        "Upfront, transparent pricing",
        "Satisfaction guaranteed",
        "Clean, professional service",
        "Emergency repairs available",
        "Years of experience serving Tulsa",
        "Full safety inspection with every service",
      ],
    },
    faqs: [
      {
        q: "How much does outlet installation cost?",
        a: "Basic outlet installations typically range from $150–$300, while specialized outlets like GFCI or 240V appliance circuits may cost more depending on the run length and panel work needed.",
      },
      {
        q: "Should I call an electrician to replace an outlet?",
        a: "Yes — you should always hire a licensed electrician for outlet replacement. Improper work creates fire and shock hazards.",
      },
      {
        q: "How much does outlet repair cost?",
        a: "Outlet repair costs typically range from $100–$200 depending on the issue and whether the wiring behind the box also needs work.",
      },
      {
        q: "Can a handyman install an outlet?",
        a: "Electrical work should only be done by licensed electricians. Most handyman insurance excludes electrical work, and Oklahoma code requires licensed installation.",
      },
      {
        q: "What is a tamper-resistant (TR) outlet, and do I need one?",
        a: "Tamper-resistant outlets have built-in spring-loaded shutters that block foreign objects (paperclips, hairpins) from being inserted into the slots. NEC has required TR outlets in residential dwelling spaces since 2008. If your Tulsa home was built or significantly remodeled after 2008, you should already have them. We install TR outlets by default on every residential install.",
      },
    ],
    related: ["indoor-lighting", "electrical-repair", "wiring-repair"],
  },

  {
    slug: "outdoor-lighting",
    serviceType: "Outdoor Lighting Installation",
    navTitle: "Outdoor Lighting Services Tulsa",
    metaTitle: "Outdoor Lighting Services in Tulsa, OK | M Electric",
    metaDescription:
      "Professional outdoor lighting in Tulsa — landscape, security, pathway, deck & patio. Licensed Tulsa electricians, free estimates. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Outdoor Lighting",
    h1Top: "Professional outdoor",
    h1Bottom: "lighting in Tulsa.",
    heroLead:
      "Professional outdoor lighting installation transforms your property's nighttime appearance while providing essential security and safety benefits. M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — designs custom Tulsa lighting solutions that highlight your home's best features, illuminate dark areas, and create an inviting atmosphere for family and guests.",
    heroImageId: "photo-1775287122266-a6db37cb0abf",
    heroImageAlt:
      "Residential landscape light glowing among rocks and plants — outdoor lighting installed by M Electric in Tulsa",
    body: [
      {
        kind: "paragraph",
        heading: "Weatherproofing and code requirements for Tulsa outdoor lighting",
        body: "Tulsa's climate is harder on outdoor electrical than most of the country — driving rain, ice, summer humidity, and tornado-season wind all stress fixtures and connections. Anything we install outdoors carries a wet-location UL rating, uses gasketed in-use covers on receptacles (not the older flip-up covers, which only protect when nothing is plugged in), and is grounded through GFCI per NEC 2020. Wiring runs are typically in PVC conduit at 18 inches below grade for branch circuits, or direct-burial UF cable where conduit isn't required by code. We seal every weatherhead penetration into the house with butyl gasket and silicone, terminate with weatherproof junction boxes rated for the conductor count, and use bronze or stainless mounting hardware that won't corrode in humid Oklahoma summers. The result is outdoor lighting that survives 10+ years without service calls.",
      },
      {
        kind: "feature-bullets",
        heading: "Our Tulsa outdoor lighting installation services",
        lead: "Comprehensive outdoor lighting solutions for Tulsa homeowners:",
        items: [
          {
            title: "Landscape Lighting",
            body: "Highlight gardens, trees, and architectural features with strategically placed LED fixtures that create stunning nighttime views.",
          },
          {
            title: "Security Lighting",
            body: "Protect your property with motion-activated flood lights and permanent security fixtures that deter intruders.",
          },
          {
            title: "Pathway & Step Lighting",
            body: "Ensure safe navigation around your property with professionally installed path lights and step illumination.",
          },
          {
            title: "Architectural Accent Lighting",
            body: "Showcase your home's exterior features with carefully positioned uplighting and downlighting.",
          },
          {
            title: "Deck & Patio Lighting",
            body: "Extend your outdoor living space with ambient lighting for entertaining areas.",
          },
          {
            title: "Energy-Efficient LED",
            body: "Save on energy costs with modern LED fixtures and smart controls that pay for themselves over time.",
          },
        ],
      },
    ],
    process: {
      heading: "Our professional installation process",
      steps: [
        {
          title: "Free initial consultation",
          body: "We assess your property and discuss your lighting goals.",
        },
        {
          title: "Custom design",
          body: "Our team creates a tailored lighting plan for your specific needs.",
        },
        {
          title: "Professional installation",
          body: "Licensed electricians handle all electrical work safely and to code.",
        },
        {
          title: "Quality inspection",
          body: "We test all systems and make adjustments for optimal performance.",
        },
        {
          title: "Client walkthrough",
          body: "We demonstrate your new lighting system and answer any questions.",
        },
      ],
    },
    whyChoose: {
      heading: "Why choose M Electric for outdoor lighting",
      bullets: [
        "Licensed and insured electricians",
        "Free detailed estimates",
        "Energy-efficient solutions",
        "Professional design services",
        "Quality workmanship guarantee",
        "Excellent customer service",
        "Emergency services available",
        "Competitive pricing",
      ],
    },
    faqs: [
      {
        q: "What is the average cost of installing outdoor lighting?",
        a: "Installation costs typically range from $2,000 to $6,000, depending on the project scope, number of fixtures, and complexity of installation. Contact (918) 992-6282 for a quote on your project.",
      },
      {
        q: "Do you need an electrician to install outdoor lighting?",
        a: "Yes — professional installation by a licensed electrician is strongly recommended. This ensures proper wiring, code compliance, and safe operation in Oklahoma weather.",
      },
      {
        q: "Why is outdoor lighting worth the investment?",
        a: "It increases home value and curb appeal, improves security and safety, extends usable outdoor living space, reduces energy costs with LED technology, and enhances overall property aesthetics.",
      },
      {
        q: "How long does outdoor lighting installation take?",
        a: "Most residential installations can be completed in 1–3 days, depending on the project scope.",
      },
    ],
    related: ["indoor-lighting", "ceiling-fan-installation", "surge-protection"],
  },

  {
    slug: "ceiling-fan-installation",
    serviceType: "Ceiling Fan Installation",
    navTitle: "Ceiling Fan Installation Tulsa",
    metaTitle: "Expert Ceiling Fan Installation in Tulsa, OK | M Electric",
    metaDescription:
      "Tulsa ceiling fan installation by licensed electricians. Same-day service, secure mounting, switch & remote installation. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Ceiling Fan Installation",
    h1Top: "Expert ceiling fan",
    h1Bottom: "installation in Tulsa.",
    heroLead:
      "Looking for professional ceiling fan installation in Tulsa? M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — delivers expert ceiling fan installation services that keep your home comfortable and energy-efficient year-round. Proper installation is crucial for both safety and performance.",
    heroImageId: "photo-1649083048819-3fcd37423f45",
    heroImageAlt:
      "Modern bedroom with a ceiling fan professionally installed by M Electric in Tulsa",
    body: [
      {
        kind: "bullets",
        heading: "Our Tulsa ceiling fan installation services",
        bullets: [
          "Professional mounting and secure installation",
          "Expert electrical wiring and connections",
          "Switch and control installation (wall switches or remote controls)",
          "Existing fan removal and replacement",
          "New electrical box installation when needed",
          "Balance testing and performance verification",
        ],
      },
      {
        kind: "paragraph",
        heading: "Sizing and mounting considerations for Tulsa homes",
        body: "Tulsa homes vary widely in ceiling height — from 8-foot mid-century ranches in midtown to 12+ foot vaulted ceilings in newer South Tulsa subdivisions. Fan size and downrod length both depend on the ceiling. Rooms up to 75 sq ft typically take a 29–36\" fan; 75–144 sq ft rooms need 36–42\"; rooms 144–225 sq ft work best with 44–50\"; and great rooms over 225 sq ft generally need 52\" or larger to actually move air. Downrod length is set so the blades hang 8–10 feet above the floor: a flush-mount works for 8-foot ceilings, a 6\" downrod for 9-foot, 12\" for 10-foot, and longer for vaulted spaces. We also confirm the existing electrical box is rated for ceiling-fan support (not just light-fixture weight), and replace it with a fan-rated metal box if it's not. Sloped-ceiling adapters are stocked on the truck for vaulted-ceiling installs.",
      },
      {
        kind: "feature-bullets",
        heading: "Benefits of professional ceiling fan installation in Tulsa",
        items: [
          {
            title: "Safety First",
            body: "Proper electrical connections prevent fire hazards in the ceiling cavity.",
          },
          {
            title: "Energy Efficiency",
            body: "Correct installation ensures optimal blade pitch and motor performance.",
          },
          {
            title: "Peace of Mind",
            body: "All work guaranteed and up to current Oklahoma electrical code.",
          },
          {
            title: "Expert Guidance",
            body: "Help selecting the right fan size and style for your room.",
          },
          {
            title: "Long-Term Reliability",
            body: "Secure mounting prevents wobbling, noise, and downstream damage.",
          },
        ],
      },
    ],
    whyChoose: {
      heading: "Why Tulsa homeowners choose M Electric",
      bullets: [
        "Licensed and insured electricians",
        "Same-day service available",
        "Upfront, honest pricing",
        "Clean, professional installation",
        "Service warranty included",
        "100% satisfaction guaranteed",
      ],
    },
    faqs: [
      {
        q: "Should you hire an electrician to install a ceiling fan?",
        a: "Yes — hiring a licensed electrician is strongly recommended. Many installs require an electrical box upgrade, new wiring, circuit load calculations, and proper ceiling-rated mounting that's beyond DIY work.",
      },
      {
        q: "How much should ceiling fan installation cost?",
        a: "Costs vary based on existing wiring, electrical box needs, installation height and complexity, and fan type. Contact us for a personalized quote.",
      },
      {
        q: "What type of ceiling fan is most effective?",
        a: "Selection depends on room size, blade count (3–5 is optimal), motor quality (DC motors preferred for efficiency and quiet operation), and proper blade height for circulation.",
      },
      {
        q: "Should the ceiling fan rotate clockwise or counter-clockwise?",
        a: "In summer, fans should rotate counter-clockwise (looking up) at higher speed to push cooler air down and create a wind-chill effect. In winter, reverse to clockwise at low speed to gently push warm air at the ceiling back down along the walls. The directional switch is on the motor housing on most fans, or in the remote/app for smart fans. We confirm direction at install and walk the homeowner through the seasonal switch.",
      },
      {
        q: "Can I install a ceiling fan where there's currently only a ceiling light?",
        a: "Sometimes. The existing electrical box must be ceiling-fan-rated for the weight and torque of a fan, which most light-only boxes are not. We swap the box for a fan-rated metal box during the install. Existing wiring works for most fan-only swaps, but adding a separately-switched light kit may require an additional conductor pulled to the wall switch.",
      },
    ],
    related: ["indoor-lighting", "outlet-installation", "electrical-repair"],
  },

  {
    slug: "surge-protection",
    serviceType: "Whole Home Surge Protection",
    navTitle: "Whole Home Surge Protection Tulsa",
    metaTitle:
      "Whole Home Surge Protection in Tulsa, OK | M Electric",
    metaDescription:
      "Whole-home surge protection installation in Tulsa by licensed electricians. Protect electronics, HVAC & appliances. Free consultation. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Surge Protection",
    h1Top: "Whole home surge",
    h1Bottom: "protection in Tulsa.",
    heroLead:
      "Protect your valuable electronics and appliances with professional whole-home surge protection in Tulsa, OK. M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — installs comprehensive surge protection systems at the panel level. Only a professionally installed whole-house surge protector can provide complete coverage for your entire electrical system.",
    heroImageId: "photo-1732414887157-647ac19671fa",
    heroImageAlt:
      "Lightning strikes behind a residential home at dusk — the type of severe weather event that whole-home surge protection defends against in the Tulsa metro",
    body: [
      {
        kind: "paragraph",
        heading: "Understanding whole-home surge protection for Tulsa homes",
        body: "A whole-home surge protector is your first line of defense against dangerous power surges. These devices install at the electrical panel to protect the entire home's electrical system — covering TVs, computers, HVAC systems, kitchen appliances, and anything else hardwired into your panel. Power strips alone can't provide this level of coverage, and Oklahoma's storm season makes whole-home protection a smart investment for any Tulsa homeowner.",
      },
      {
        kind: "paragraph",
        heading: "Type 1 vs Type 2 vs Type 3 surge protection — what each does",
        body: "Whole-home surge protection comes in three classifications. Type 1 SPDs install on the line side of the main breaker, between the meter and the panel. They handle the largest external surges (lightning strikes on the utility line) before the surge reaches the panel. Type 2 SPDs install on the load side of the main breaker, inside the panel itself — they're the most common residential install and handle both external surges that pass the Type 1 (or service entrance with no Type 1) plus internal surges from large motor loads cycling. Type 3 SPDs are point-of-use surge strips at sensitive electronics. The strongest residential setup is a Type 2 panel-level SPD plus Type 3 strips at home-office and entertainment equipment. Joule rating matters: we install SPDs rated 40,000+ joules with low let-through voltage (<400V at 3kA) so transients are clamped before they reach connected equipment.",
      },
      {
        kind: "bullets",
        heading: "What causes power surges in Tulsa homes?",
        bullets: [
          "Lightning strikes",
          "Power grid fluctuations",
          "Large appliances cycling on and off",
          "Electrical accidents",
          "Utility company equipment problems",
          "Internal wiring issues",
        ],
      },
      {
        kind: "bullets",
        heading: "Benefits of whole-home surge protection",
        bullets: [
          "Protects all connected electronics and appliances",
          "Prevents costly equipment damage",
          "Extends the life of your devices",
          "Provides peace of mind during Oklahoma storms",
          "Saves money on potential replacements",
          "Guards against both external and internal surges",
        ],
      },
    ],
    process: {
      heading: "Our installation process",
      steps: [
        { title: "Initial consultation and assessment" },
        { title: "Custom protection plan development" },
        { title: "Professional installation by licensed electricians" },
        { title: "System testing and verification" },
        { title: "Final inspection and warranty documentation" },
      ],
    },
    whyChoose: {
      heading: "Why choose M Electric for surge protection",
      bullets: [
        "Licensed and experienced electricians",
        "Comprehensive whole-house protection",
        "High-quality surge protection devices",
        "Professional installation",
        "Free consultations",
        "Same-day service available",
        "Serving all of Tulsa and surrounding areas",
      ],
    },
    faqs: [
      {
        q: "What is the average cost for a whole-house surge protector?",
        a: "Typical whole-house surge protection installation ranges from $300–$700. A precise quote depends on your panel and any additional protection layers you want.",
      },
      {
        q: "Is it worth getting a whole-house surge protector?",
        a: "Yes. With the average home containing over $15,000 worth of electronic devices and appliances, whole-house surge protection is a smart investment.",
      },
      {
        q: "Do I need an electrician to install a whole-house surge protector?",
        a: "Yes. Professional installation by a licensed electrician is essential — the device installs at your panel and must be wired correctly to function safely.",
      },
      {
        q: "How long does a whole-house surge protector last?",
        a: "Most quality whole-house surge protectors last 5–10 years with proper installation and maintenance. Major surge events may require earlier replacement.",
      },
      {
        q: "Will a whole-house surge protector protect my HVAC system?",
        a: "Yes. Our whole-house surge protection systems safeguard all hardwired appliances, including your HVAC system, from damaging power surges.",
      },
    ],
    related: ["panel-upgrades", "electrical-repair", "wiring-repair"],
  },

  {
    slug: "wiring-repair",
    serviceType: "Electrical Wiring Repair",
    navTitle: "Electrical Wiring Repair Services in Tulsa",
    metaTitle:
      "Expert Electrical Wiring Repair in Tulsa, OK | M Electric",
    metaDescription:
      "Tulsa electrical wiring repair by licensed electricians — diagnosis, fault tracing, replacement. 24/7 emergency, free estimates. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Wiring Repair",
    h1Top: "Expert electrical wiring",
    h1Bottom: "repair in Tulsa, OK.",
    heroLead:
      "Is your home experiencing electrical issues? Trust M Electric's licensed electricians for professional electrical wiring repair in Tulsa, OK. M Electric is owned and operated by US Army veteran Marshall Morgan, who has served the Tulsa metro since 1999. With years of experience serving residential and commercial customers, we provide expert diagnosis, repair, and replacement of faulty electrical wiring to keep your property safe and powered.",
    heroImageId: "photo-1683295083329-4d4738291f3a",
    heroImageAlt:
      "Tulsa electrician's gloved hands carefully working on a wiring repair for M Electric",
    body: [
      {
        kind: "paragraph",
        heading: "Why choose M Electric for Tulsa electrical wiring repair",
        body: "At M Electric, we understand that electrical wiring problems can be stressful and potentially dangerous. Our licensed Tulsa electricians are thoroughly trained to identify and repair all types of wiring issues, from old knob-and-tube systems to modern electrical installations.",
      },
      {
        kind: "bullets",
        heading: "Common signs your Tulsa home needs wiring repair",
        lead: "Watch for these warning signs that indicate potential wiring problems:",
        bullets: [
          "Flickering or dimming lights",
          "Burning smells from outlets or switches",
          "Frequently tripping circuit breakers",
          "Hot outlet covers or switch plates",
          "Buzzing sounds from electrical fixtures",
          "Outdated wiring systems (pre-1970s)",
          "Visible wear or damage to exposed wires",
        ],
      },
    ],
    process: {
      heading: "Our electrical wiring repair process",
      steps: [
        {
          title: "Initial assessment",
          body: "Our licensed electricians thoroughly inspect your electrical system to identify any wiring issues.",
        },
        {
          title: "Detailed diagnosis",
          body: "We use advanced testing equipment to pinpoint exact problems and their causes.",
        },
        {
          title: "Solution planning",
          body: "We present clear repair options with upfront pricing.",
        },
        {
          title: "Professional repair",
          body: "Our team safely repairs or replaces damaged wiring using high-quality materials.",
        },
        {
          title: "Safety verification",
          body: "We conduct comprehensive testing to ensure all repairs meet local electrical codes.",
        },
      ],
    },
    whyChoose: {
      heading: "Why trust M Electric with your electrical wiring",
      bullets: [
        "Licensed and insured electricians",
        "Available 24/7 for emergency repairs",
        "Extensive experience with all wiring types",
        "Commitment to safety and code compliance",
        "Transparent pricing and free estimates",
        "Satisfaction guaranteed",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to fix electrical wiring?",
        a: "Costs vary depending on the extent of repairs needed, ranging from $150–$500 for minor repairs to $2,000–$8,000 for whole-house rewiring. Contact us at (918) 992-6282 for a free estimate.",
      },
      {
        q: "Can electrical wiring be repaired?",
        a: "Yes — many electrical wiring issues can be repaired by licensed electricians. However, severely damaged or outdated wiring may require complete replacement for safety.",
      },
      {
        q: "How do electricians find faulty wiring?",
        a: "We use specialized diagnostic tools including thermal imaging cameras, circuit analyzers, voltage testers, continuity testers, and visual inspection techniques to trace faults without unnecessary drywall damage.",
      },
      {
        q: "What is the lifespan of electrical wires in a residential house?",
        a: "Most electrical wiring lasts 50–70 years when properly installed. However, factors like heat exposure, moisture, and wear can significantly reduce this lifespan.",
      },
      {
        q: "When should an old house be rewired?",
        a: "Consider rewiring if your home is over 40 years old with original wiring, has aluminum wiring, shows signs of electrical problems, lacks grounded outlets, or has outdated fuse boxes.",
      },
      {
        q: "What are AFCI breakers and do I need them?",
        a: "Arc-Fault Circuit Interrupters (AFCI) detect dangerous arc faults — high-energy electrical discharges that cause many home electrical fires. NEC has required AFCI protection on most living-space branch circuits since 2014. If your Tulsa home is older than that, your panel likely doesn't have AFCI protection on bedrooms, family rooms, or hallways. We add AFCI breakers as part of any panel upgrade or significant rewire.",
      },
    ],
    related: ["home-rewiring", "electrical-repair", "panel-upgrades"],
  },

  {
    slug: "commercial-lighting",
    serviceType: "Commercial Lighting Installation",
    navTitle: "Commercial Lighting Solutions Tulsa",
    metaTitle:
      "Commercial Lighting in Tulsa, OK | LED Retrofits | M Electric",
    metaDescription:
      "Tulsa commercial lighting by licensed electricians — LED retrofits, office, retail, warehouse, and parking-lot lighting. Free consultation. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Commercial Lighting",
    h1Top: "Commercial lighting installation",
    h1Bottom: "& design in Tulsa.",
    heroLead:
      "M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — delivers cutting-edge commercial lighting design and installation across the Tulsa metro. We do LED retrofits, office and retail lighting, warehouse high-bays, parking-lot lighting, and full lighting controls. Two decades of commercial lighting experience for businesses from downtown Tulsa to industrial facilities in Broken Arrow.",
    heroImageId: "photo-1587293852726-70cdb56c2866",
    heroImageAlt:
      "M Electric commercial electrician installing LED warehouse lighting in Tulsa",
    body: [
      {
        kind: "paragraph",
        heading: "Professional commercial lighting for Tulsa businesses",
        body: "At M Electric, we understand that proper lighting is critical for business success. Comprehensive commercial lighting solutions help Tulsa businesses cut energy costs, improve workplace productivity, and create inviting spaces for customers and employees. Whether you need a complete lighting design for a new construction project, a retrofit from old T8 fluorescents to high-efficiency LED, or upgraded controls and occupancy sensors for an existing building, our licensed commercial electricians deliver reliable results across the Tulsa metro. We've worked on commercial lighting in downtown Tulsa office spaces, retail interiors in Brookside, warehouses in Broken Arrow, and industrial facilities in Owasso. Every project is designed around your operating schedule, energy targets, and budget — and every system is commissioned, tested, and documented before we leave the site.",
      },
      {
        kind: "bullets",
        heading: "Our Tulsa commercial lighting solutions",
        bullets: [
          "LED lighting upgrades and retrofits",
          "Office and workplace lighting design",
          "Retail and display lighting",
          "Warehouse and industrial high-bay lighting",
          "Parking-lot and exterior lighting",
          "Emergency and exit lighting",
          "Motion sensors and lighting controls",
          "Energy-efficient lighting controls and automation systems",
        ],
      },
      {
        kind: "bullets",
        heading: "Commercial LED lighting: a smart investment for Tulsa businesses",
        lead: "Modern LED lighting technology offers numerous advantages for businesses across the Tulsa metro:",
        bullets: [
          "Up to 75% reduction in energy costs",
          "50,000+ hour lifespan for quality LED fixtures",
          "Improved light quality and color consistency",
          "Reduced maintenance and re-lamp labor",
          "Enhanced workplace safety and productivity",
          "Qualification for utility energy-efficiency rebates",
        ],
      },
    ],
    process: {
      heading: "Our commercial lighting process",
      steps: [
        {
          title: "Site assessment",
          body: "We walk the space, measure existing fixtures, and map your code-required vs preferred lighting levels.",
        },
        {
          title: "Lighting design",
          body: "Custom plan with fixture specs, layout, and energy projections — including utility rebate calculations.",
        },
        {
          title: "Detailed quote",
          body: "Itemized cost breakdown with payback timeline and rebate documentation.",
        },
        {
          title: "Professional installation",
          body: "Licensed commercial electricians work around your operating hours to minimize disruption.",
        },
        {
          title: "Final testing",
          body: "Light-level verification, controls calibration, and operations walkthrough with your facilities team.",
        },
      ],
    },
    whyChoose: {
      heading: "Why Tulsa businesses choose M Electric for commercial lighting",
      bullets: [
        "Licensed and insured commercial electricians",
        "Local Tulsa expertise — downtown office, Broken Arrow industrial, Owasso retail",
        "Energy-efficient LED solutions with rebate program assistance",
        "Same-day service available for emergency lighting failures",
        "Comprehensive warranty on parts and labor",
        "Two decades of commercial lighting experience",
        "Minimal business disruption — after-hours work available",
      ],
    },
    faqs: [
      {
        q: "How long do commercial LED lights last?",
        a: "Quality commercial LED fixtures typically last 50,000 to 100,000 hours, which translates to 10–20 years of normal Tulsa business operation. This significantly reduces maintenance and replacement costs compared to traditional fluorescent or HID lighting. Most commercial-grade LED products carry 5–10 year warranties from the manufacturer; M Electric adds installation warranty on top of that.",
      },
      {
        q: "How many lights per square foot are needed in a commercial building?",
        a: "Lighting requirements vary by space type. General offices need 30–40 lumens per square foot for normal task work. Retail spaces typically require 50–100 lumens per square foot, with feature areas going higher. Warehouses with rack storage usually target 30–50 lumens per square foot at the work plane. Our team performs an on-site assessment to determine your specific lumen targets, factoring in ceiling height, surface reflectance, and the visual tasks performed in each zone.",
      },
      {
        q: "How much does commercial lighting installation cost in Tulsa?",
        a: "Commercial lighting installation costs vary based on project scope, fixture types, and installation requirements. A small office LED retrofit may run $2,000–$5,000, while a full warehouse high-bay replacement can range from $15,000–$80,000 depending on fixture count and ceiling height. New-construction lighting design typically runs $4–$8 per square foot installed. We provide detailed, transparent quotes after assessing your specific space. Call (918) 992-6282 to schedule a free consultation.",
      },
      {
        q: "Do commercial LED upgrades qualify for utility rebates in the Tulsa area?",
        a: "Yes. Tulsa-area commercial customers can often qualify for incentive programs through their utility (PSO, OEC, or similar) when retrofitting older fixtures to LED. These rebates can offset 15–40% of project cost depending on fixture type and quantity. M Electric handles the rebate paperwork on behalf of the customer; we maintain pre-approved fixture lists and have submitted hundreds of incentive applications.",
      },
      {
        q: "Can you do commercial lighting work after hours to avoid disrupting business?",
        a: "Yes. Most retail, restaurant, and office lighting projects in the Tulsa metro are completed evenings or weekends to avoid disrupting normal operations. After-hours work carries a small premium but typically pays back through avoided revenue loss and faster project completion. We coordinate site access, cleanup, and security with your facilities or operations team in advance.",
      },
    ],
    related: ["commercial-wiring", "panel-upgrades", "outdoor-lighting"],
  },

  {
    slug: "commercial-wiring",
    serviceType: "Commercial Electrical Wiring",
    navTitle: "Commercial Electrical Wiring Tulsa",
    metaTitle:
      "Commercial Electrical Wiring in Tulsa, OK | M Electric",
    metaDescription:
      "Licensed Tulsa commercial wiring — new construction, tenant build-outs, panel upgrades, code-compliant installations. 24/7 emergency. Call (918) 992-6282.",
    heroEyebrow: "Tulsa Commercial Wiring",
    h1Top: "Commercial electrical",
    h1Bottom: "wiring in Tulsa, OK.",
    heroLead:
      "M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — delivers professional commercial electrical wiring for Tulsa businesses. We handle new construction, tenant build-outs, panel and distribution upgrades, and code-compliant installations completed to NEC and Oklahoma standards. Our licensed commercial electricians handle everything from a single dedicated circuit to complete building electrical systems.",
    heroImageId: "photo-1758101755915-462eddc23f57",
    heroImageAlt:
      "Tulsa commercial electrician testing a commercial electrical panel with a multimeter — M Electric commercial wiring services",
    body: [
      {
        kind: "paragraph",
        heading: "Professional commercial wiring solutions for Tulsa businesses",
        body: "At M Electric, we understand that reliable electrical systems are the backbone of any successful business operation. Our team of licensed commercial electricians brings decades of combined experience planning, installing, and maintaining commercial wiring systems that keep Tulsa businesses running smoothly and safely. We work directly with general contractors, building owners, facility managers, and architects on projects ranging from a single tenant improvement to ground-up commercial construction. Every installation is designed around your operating requirements, code obligations, and growth plans — and every system is documented with as-built drawings, panel schedules, and circuit directories so future work is straightforward.",
      },
      {
        kind: "feature-bullets",
        heading: "Our commercial wiring services in Tulsa",
        items: [
          {
            title: "New Construction Wiring",
            body: "Complete electrical systems for ground-up commercial builds — main service, distribution panels, branch circuits, dedicated equipment circuits, lighting wiring, data and communication runs, and emergency backup systems.",
          },
          {
            title: "Tenant Build-Outs & Renovations",
            body: "Office, retail, and restaurant build-outs coordinated with the property's existing service. Code compliance review, permit handling, and minimal disruption to neighboring tenants.",
          },
          {
            title: "Panel & Distribution Upgrades",
            body: "Service entrance upgrades, distribution panel installations, sub-panel additions, and modern grounding systems for buildings adding load or replacing aging gear.",
          },
          {
            title: "Industrial & Heavy Commercial",
            body: "Machine and equipment wiring, industrial control systems, motor controls and VFDs, transformer installations, and high-voltage services for industrial facilities.",
          },
          {
            title: "Emergency & Backup Power",
            body: "Generator transfer switches, emergency lighting circuits, UPS connections, and life-safety wiring to keep critical systems online during outages.",
          },
          {
            title: "Wiring Repairs & Diagnostics",
            body: "24/7 emergency commercial wiring repair across the Tulsa metro. Thermal imaging, circuit analysis, and fault tracing to minimize downtime.",
          },
        ],
      },
    ],
    process: {
      heading: "Our commercial wiring process",
      steps: [
        {
          title: "Initial consultation",
          body: "Site walk, business needs assessment, code-compliance review, and safety evaluation.",
        },
        {
          title: "Detailed proposal",
          body: "Transparent cost breakdown, project timeline, material specifications, and energy-efficiency recommendations.",
        },
        {
          title: "Permit & coordination",
          body: "We pull permits, coordinate with utility (PSO/OEC), inspections, and any other trades on site.",
        },
        {
          title: "Professional installation",
          body: "Licensed commercial electricians work to plan with regular progress updates and minimal disruption.",
        },
        {
          title: "Quality control",
          body: "Megger testing, ground-fault verification, panel labeling, and torque verification per manufacturer specs.",
        },
        {
          title: "Final inspection & turnover",
          body: "City inspection, operations demonstration, as-built drawings, and full documentation handed to the owner or facility manager.",
        },
      ],
    },
    whyChoose: {
      heading: "Why Tulsa businesses choose M Electric for commercial wiring",
      bullets: [
        "Licensed and insured Oklahoma commercial electrical contractors",
        "Code-compliant installations to NEC and local Tulsa amendments",
        "24/7 emergency wiring repair across the Tulsa metro",
        "Comprehensive system inspections and preventative maintenance",
        "Competitive pricing with detailed itemized quotes",
        "Decades of commercial experience — from a single circuit to a 50,000 sq ft retrofit",
        "Direct work with general contractors, architects, and facility managers",
      ],
    },
    faqs: [
      {
        q: "How much does commercial electrical wiring cost in Tulsa?",
        a: "Commercial wiring costs vary significantly based on project scope, building size, and specific requirements. A simple tenant improvement with a few new circuits typically starts around $2,000. A mid-sized office build-out runs $15,000–$40,000. Complete electrical for new commercial construction can range from $10–$30 per square foot installed depending on use type, code requirements, and finish level. Industrial or restaurant projects with heavy load and specialty equipment can reach $100,000+. Contact us for a detailed quote tailored to your specific scope.",
      },
      {
        q: "Is there a difference between commercial and residential electricians?",
        a: "Yes, significantly. Commercial electricians work with three-phase power, larger conductor sizes, industrial-grade equipment, conduit-based wiring methods, and complex commercial building codes. They handle distribution panels in the 200A–4000A range, motor controls, fire-alarm interfaces, life-safety systems, and coordination with other trades on a job site. Commercial work also requires familiarity with bid documents, RFIs, change orders, and submittals. M Electric's commercial electricians carry certifications and ongoing training specifically for commercial applications.",
      },
      {
        q: "What type of electrical wiring is used in commercial buildings?",
        a: "Commercial buildings typically use heavy-duty wiring methods that meet NEC and local Tulsa code: THHN/THWN-2 copper conductors run in EMT (electrical metallic tubing) or rigid conduit; MC (metal-clad) cable for plenum or concealed runs; armored cable in some applications; and specialty cable types for fire-alarm, data, and emergency systems. Conductor size is engineered based on load calculations, voltage drop, and ambient temperature. All wiring must meet local Tulsa building codes and NEC requirements.",
      },
      {
        q: "Does commercial wiring have to be in conduit?",
        a: "In most Tulsa commercial settings, yes. Commercial electrical codes typically require wiring to be protected by appropriate conduit systems for safety and durability. Specific requirements vary by jurisdiction and application — exposed wiring is generally only allowed in concealed plenum spaces or with armored cable in specific applications. Our team handles the code research as part of any project, so you don't have to navigate the requirements yourself.",
      },
      {
        q: "How quickly can you respond to commercial electrical emergencies?",
        a: "Our emergency response team is available 24/7 and typically arrives within 60 minutes for urgent commercial electrical problems in the Tulsa metro. For Broken Arrow, Owasso, Bixby, and Jenks, expect 60–90 minutes. We carry stocked service vehicles with the most common commercial-grade parts so we can usually restore power on the first visit, even for after-hours calls.",
      },
    ],
    related: ["commercial-lighting", "panel-upgrades", "wiring-repair"],
  },

  {
    slug: "smart-home-wiring",
    serviceType: "Smart Home Wiring",
    navTitle: "Smart Home Wiring Services Tulsa",
    metaTitle:
      "Smart Home Wiring & Installation in Tulsa, OK | M Electric",
    metaDescription:
      "Tulsa smart home wiring — structured cabling, smart switches, security cameras, climate, voice control. Licensed Tulsa electricians. (918) 992-6282.",
    heroEyebrow: "Tulsa Smart Home Wiring",
    h1Top: "Smart home wiring",
    h1Bottom: "& installation in Tulsa.",
    heroLead:
      "M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — specializes in transforming traditional Tulsa homes into integrated, automated living spaces through expert smart home wiring and installation. We install structured cabling, hardwired smart switches, security cameras, climate integration, and the network infrastructure that makes it all work — cleanly and to code.",
    heroImageId: "photo-1545259741-2ea3ebf61fa3",
    heroImageAlt:
      "Modern smart-home thermostat installed by M Electric in a Tulsa home",
    body: [
      {
        kind: "paragraph",
        heading: "Expert smart home wiring solutions for Tulsa homes",
        body: "At M Electric, we understand that modern Tulsa homes require modern infrastructure. Our smart home wiring services lay the foundation for a fully integrated home automation system that enhances comfort, security, and energy efficiency — from automated lighting and climate control to whole-home audio, security cameras, video doorbells, and voice-control hubs. We design the structured cabling, run the dedicated circuits, install the in-wall control panels, and configure the network so every component works together. Whether you're pre-wiring a new construction in South Tulsa, retrofitting a 1950s ranch in Brookside, or adding smart lighting and security to a downtown loft, we handle it. Every install is licensed, permitted where required, and warrantied — and Marshall personally walks you through how to use the system once it's commissioned.",
      },
      {
        kind: "feature-bullets",
        heading: "Smart home services we provide",
        items: [
          {
            title: "Structured Wiring",
            body: "Whole-home structured cabling for data, video, audio, and control. The backbone of every reliable smart home install.",
          },
          {
            title: "Smart Lighting Control",
            body: "Hardwired smart switches, dimmers, and scene controllers that integrate with Lutron, Caséta, Philips Hue, and major hubs.",
          },
          {
            title: "Security Camera & Doorbell Wiring",
            body: "Hardwired security cameras, video doorbells, and proper PoE/low-voltage runs — no battery drama, no Wi-Fi dropouts.",
          },
          {
            title: "Home Theater & Audio",
            body: "In-wall and ceiling speaker wiring, multi-zone audio runs, and dedicated AV-equipment circuits with proper grounding.",
          },
          {
            title: "Climate & HVAC Integration",
            body: "Smart thermostat installation, zoning controllers, and the low-voltage runs to integrate HVAC into your automation hub.",
          },
          {
            title: "Network & Wi-Fi Infrastructure",
            body: "Cat-6 runs, Wi-Fi access point placement, and structured patch panels in a dedicated network closet.",
          },
          {
            title: "Voice Control & Smart Hub Wiring",
            body: "Dedicated power and network for Alexa, Google Home, Apple HomeKit hubs, plus the wiring to make voice control reliable.",
          },
          {
            title: "Smart Appliance Integration",
            body: "Dedicated circuits and network drops for smart appliances, EV chargers, and integrated kitchen systems.",
          },
        ],
      },
    ],
    process: {
      heading: "Our smart home wiring process",
      steps: [
        {
          title: "Initial consultation",
          body: "We discuss your automation goals and assess your home's existing electrical and network infrastructure.",
        },
        {
          title: "Custom system design",
          body: "Our team creates a detailed wiring plan tailored to your platform choices and how you actually use the home.",
        },
        {
          title: "Professional installation",
          body: "Licensed electricians implement the wiring with precision — clean, labeled, and documented.",
        },
        {
          title: "System integration",
          body: "We configure the hubs, controllers, and network so every component talks to every other component.",
        },
        {
          title: "Testing & verification",
          body: "Comprehensive testing of every device, scene, and automation rule before we leave.",
        },
        {
          title: "Client training",
          body: "We walk you through how to use the system, add new devices later, and troubleshoot common issues.",
        },
      ],
    },
    whyChoose: {
      heading: "Why Tulsa homeowners choose M Electric for smart home wiring",
      bullets: [
        "Licensed, insured electricians with specialized smart-home training",
        "Comprehensive support for all major automation platforms",
        "Custom design tailored to your needs and home layout",
        "Clean, professional installation with minimal home disruption",
        "Ongoing support and maintenance services",
        "Local Tulsa company since 1999, family-owned and Army-veteran-led",
      ],
    },
    faqs: [
      {
        q: "How much does a smart home installation cost in Tulsa?",
        a: "Smart home installation costs in the Tulsa area typically range from $2,000 to $15,000+ depending on the scope. A basic smart-lighting and thermostat retrofit may run $2,000–$4,000. A full whole-home structured-wiring package with security cameras, audio, and integrated climate control often falls in the $8,000–$15,000 range. New-construction pre-wires are typically priced per square foot during finish-out. Contact us for a free on-site consultation and detailed quote tailored to your home.",
      },
      {
        q: "What is smart wiring for homes?",
        a: "Smart wiring is a structured cabling system that ties together every smart-device category in a home — lighting, security, entertainment, climate, network, voice control, and smart appliances. Instead of relying solely on Wi-Fi, smart wiring runs Cat-6 data, dedicated low-voltage control, in-wall speaker cable, and PoE camera runs back to a central network closet or hub. This dramatically improves reliability, range, and future flexibility.",
      },
      {
        q: "What does a smart home installer actually do?",
        a: "A smart home installer designs and implements the electrical and network infrastructure for home automation. That means running appropriate cables through walls and ceilings, installing in-wall control panels and keypads, configuring routers and Wi-Fi access points, setting up automation hubs, integrating each smart device with the rest, and ensuring everything communicates reliably. M Electric handles all of that as a licensed Oklahoma electrical contractor.",
      },
      {
        q: "Is smart home automation worth it?",
        a: "For most Tulsa homeowners, yes. The most-cited benefits are enhanced energy efficiency (smart thermostats and scheduling typically cut utility bills 10–15%), improved security and remote monitoring, greater day-to-day convenience, increased property resale value, and remote control of home systems while traveling. The biggest gains usually come from getting the foundational wiring right at the start so adding new devices later is plug-and-play.",
      },
      {
        q: "Does a smart home increase property value?",
        a: "Yes. Industry data shows smart-home features increase property value by 3–5% on average, with the largest gains coming from smart security systems, smart thermostats, and integrated lighting. The premium is highest when the wiring is done professionally and documented — buyers and appraisers can see what's actually in the walls.",
      },
    ],
    related: ["indoor-lighting", "ev-charger-installation", "outlet-installation"],
  },

  {
    slug: "generator-installation",
    serviceType: "Generator Installation",
    navTitle: "Generator Installation Tulsa",
    metaTitle:
      "Whole-Home Generator Installation in Tulsa, OK | M Electric",
    metaDescription:
      "Tulsa whole-home standby generator installation — Generac, Kohler, Champion. Sizing, transfer switch, permits, gas-line coordination. (918) 992-6282.",
    heroEyebrow: "Tulsa Generator Installation",
    h1Top: "Professional generator",
    h1Bottom: "installation in Tulsa.",
    heroLead:
      "Is your Tulsa home prepared for the next ice storm or tornado-season outage? M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — is your trusted local expert for whole-home standby generator installation across the Tulsa metro. We handle sizing, transfer-switch wiring, gas-line coordination, permits, and inspection-ready installs.",
    heroImageId: "/job-gallery/generac-transfer-switch.png",
    heroImageAlt:
      "Generac whole-home standby generator transfer switch wired beside a residential breaker panel — installed by M Electric in a Tulsa home",
    body: [
      {
        kind: "paragraph",
        heading: "Why a whole-home generator matters in Tulsa",
        body: "Tulsa sits in Tornado Alley and on the edge of Ice Storm Alley — between spring tornadic storms, summer derechos, and winter ice events, multi-day power outages are a real possibility every year. A whole-home standby generator is permanently installed outside the house, runs on natural gas or propane, and starts automatically within seconds of an outage. It powers the entire home — HVAC, well pump, refrigeration, medical devices, home office, garage door, security system — until utility power returns. Professional installation is critical: the generator has to be properly sized to your panel, the transfer switch correctly wired, the gas line sized for the unit's BTU draw, and the install permitted and inspected. M Electric handles all of that as a licensed Oklahoma electrical contractor with extensive generator-install experience across the Tulsa metro.",
      },
      {
        kind: "bullets",
        heading: "Why choose professional generator installation",
        bullets: [
          "Professional site assessment and system sizing",
          "Permit acquisition and full code compliance",
          "Complete electrical and gas-line installation",
          "Transfer switch installation and configuration",
          "Full system testing and commissioning",
          "Manufacturer warranty registration handled for you",
          "PSO and gas-utility coordination",
        ],
      },
      {
        kind: "feature-bullets",
        heading: "Generator sizing guide for Tulsa homes",
        lead: "Approximate generator sizing based on home square footage. Final sizing depends on your specific appliance loads and HVAC capacity.",
        items: [
          {
            title: "1,200 sq ft home",
            body: "Typically suitable for a 14–16 kW generator. Covers HVAC, refrigeration, lighting, and basic essentials.",
          },
          {
            title: "2,000 sq ft home",
            body: "Typically requires a 16–22 kW generator. Whole-home coverage with no major load shedding.",
          },
          {
            title: "3,000+ sq ft home",
            body: "May need a 22–48 kW generator. Larger homes with multiple HVAC units, EV chargers, and electric ranges run on the upper end.",
          },
          {
            title: "Custom sizing",
            body: "We do a full load calculation on every job — your actual usage matters more than square footage. Final sizing is documented in your written estimate.",
          },
        ],
      },
    ],
    process: {
      heading: "Our generator installation process",
      steps: [
        {
          title: "Site assessment",
          body: "We walk the property, identify the install location, evaluate the existing panel and gas service, and confirm setbacks per local code.",
        },
        {
          title: "Sizing & quote",
          body: "Detailed load calculation, generator and transfer-switch recommendations, and a written itemized quote with timeline.",
        },
        {
          title: "Permits & utility coordination",
          body: "We pull electrical and mechanical permits, coordinate with PSO for any service work, and confirm gas-line capacity with the gas utility.",
        },
        {
          title: "Installation",
          body: "Concrete pad, generator placement, transfer-switch wiring, gas-line tie-in, panel work, and weatherproof exterior connections.",
        },
        {
          title: "Commissioning",
          body: "Initial start-up, automatic-transfer-switch testing under simulated outage, manufacturer warranty registration, and final inspection.",
        },
        {
          title: "Owner walkthrough",
          body: "We show you how the system works, what the maintenance schedule looks like, and what to expect during the next outage.",
        },
      ],
    },
    whyChoose: {
      heading: "Why Tulsa homeowners choose M Electric for generator installs",
      bullets: [
        "Licensed and insured Oklahoma electricians",
        "Extensive whole-home standby generator experience",
        "Comprehensive workmanship warranties",
        "24/7 emergency service if the unit ever has an issue",
        "Competitive transparent pricing — no upsells",
        "Local Tulsa business with 25+ years in the metro",
        "Generac, Kohler, Champion, and other major brand experience",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to have a generator installed in Tulsa?",
        a: "Whole-home standby generator installation in Tulsa typically runs $7,500–$18,000 fully installed, depending on generator size, complexity of the gas-line tie-in, transfer-switch type, and any panel work needed. A 16–22 kW unit on a typical 2,000 sq ft home with existing natural gas service usually falls in the $9,000–$13,000 range. The unit itself is roughly half the cost; the rest is concrete, electrical work, gas line, transfer switch, permits, and commissioning. Call (918) 992-6282 for a free on-site quote.",
      },
      {
        q: "Do I need a permit to install a generator in Tulsa?",
        a: "Yes. Generator installation in Tulsa typically requires both an electrical permit and a mechanical permit (for the gas line tie-in). M Electric handles all permitting, coordinates with PSO and the gas utility, and schedules the City of Tulsa inspections as part of the service. You don't need to interact with the permit office at all — we handle it end-to-end.",
      },
      {
        q: "Can any electrician install a whole-home generator?",
        a: "Technically any licensed electrician can install one, but it's strongly preferred to work with electricians who have specific generator and transfer-switch experience. Sizing errors, improper bonding, incorrect transfer-switch wiring, and undersized gas lines are common failure modes when this work is treated as a standard panel install. M Electric has installed many whole-home generators across the Tulsa metro and is registered as an installer with major manufacturers.",
      },
      {
        q: "Is Kohler better than Generac for a Tulsa home?",
        a: "Both Kohler and Generac make excellent whole-home generators with different strengths. Generac dominates the residential market in the US and has the broadest dealer network, which usually means faster parts availability for service. Kohler is often preferred for higher reliability under heavy continuous load and tends to have quieter operation. We install both and walk you through the trade-offs based on your specific situation, runtime expectations, and budget.",
      },
      {
        q: "How long can a whole-home generator run during an outage?",
        a: "Effectively indefinitely on natural gas, since the gas utility almost never goes down with the electric grid. On a propane tank, runtime depends on tank size — a typical 500-gallon tank running a 22 kW generator at half-load lasts roughly a week before needing a refill. We help you size both the generator and the fuel source to your expected outage scenarios.",
      },
    ],
    related: ["panel-upgrades", "ev-charger-installation", "surge-protection"],
  },

  {
    slug: "ev-charger-installation",
    serviceType: "EV Charger Installation",
    navTitle: "EV Charger Installation Tulsa",
    metaTitle:
      "EV Charger Installation in Tulsa, OK | Level 2, Tesla | M Electric",
    metaDescription:
      "Tulsa EV charger installation — Level 2 home and commercial DC fast charging. Tesla, ChargePoint, JuiceBox, Wallbox. Same-day service. (918) 992-6282.",
    heroEyebrow: "Tulsa EV Charger Installation",
    h1Top: "Electric vehicle charger",
    h1Bottom: "installation in Tulsa.",
    heroLead:
      "M Electric — owned and operated by US Army veteran Marshall Morgan since 1999 — specializes in residential and commercial EV charging station installation across the Tulsa metro, from Broken Arrow to Sapulpa, Owasso to Bixby. Licensed Oklahoma electricians handle the load calc, dedicated 240V circuit, panel coordination, permits, and inspection so your charger is installed safely, efficiently, and to code.",
    heroImageId: "photo-1692052664566-477579a08e8c",
    heroImageAlt:
      "Level 2 EV charger installed at a Tulsa home garage by M Electric",
    body: [
      {
        kind: "paragraph",
        heading: "Expert EV charger installation for Tulsa homes and businesses",
        body: "At M Electric, we understand that a reliable home charging solution is essential for any Tulsa EV owner. Whether you're a first-time EV owner adding your first Level 2 charger to a 2,000 sq ft Brookside home, upgrading from the manufacturer's slow Level 1 cord, or installing a fleet of commercial Level 2 chargers at an Owasso office building, our experienced team will help you select the right charger, run the right circuit, and pull the right permit. We've installed every major brand — Tesla Wall Connector, ChargePoint, JuiceBox, Wallbox, Grizzl-E, and the universal NACS adapters that work across both Tesla and J1772 vehicles. Most home Level 2 installs are completed same-day for an existing 200A panel; larger jobs with panel upgrades or longer conduit runs typically take one to two days.",
      },
      {
        kind: "feature-bullets",
        heading: "Types of EV chargers we install in Tulsa",
        items: [
          {
            title: "Level 1 Charging (120V)",
            body: "Most EVs ship with a Level 1 cord that plugs into a standard outlet. It's slow — 3–5 miles of range per hour — and only practical for low-mileage drivers. We can assess whether Level 1 meets your needs or whether upgrading to Level 2 makes sense.",
          },
          {
            title: "Level 2 Home Chargers (240V)",
            body: "The right call for almost every Tulsa EV owner. 25–35 miles of range per hour, full overnight charging. We install dedicated 240V circuits, hardwired or plug-in mounting, smart-charger setup, and integration with home energy management.",
          },
          {
            title: "Level 2 Commercial Chargers",
            body: "Office buildings, multi-unit residential, retail destinations, and small fleet operations. We design the load calc, run the 240V circuits, and install dual-port and networked charging stations with proper accessibility compliance.",
          },
          {
            title: "Level 3 / DC Fast Charging",
            body: "For larger commercial properties, we install DC fast chargers that deliver up to 80% charge in roughly 30 minutes. Suitable for retail destinations, employee charging, fleet hubs, and multi-tenant properties wanting amenity-grade charging.",
          },
          {
            title: "Tesla Wall Connector",
            body: "Tesla-specific home charging with the proprietary connector. We're familiar with the Tesla install workflow, permit requirements, and the load-sharing options for multi-Tesla households.",
          },
          {
            title: "Universal & NACS Chargers",
            body: "Universal chargers and NACS-compatible units that serve both Tesla and J1772 vehicles — increasingly the default for households with mixed EVs.",
          },
        ],
      },
    ],
    process: {
      heading: "Our EV charger installation process",
      steps: [
        {
          title: "Site assessment",
          body: "We evaluate your panel capacity, garage or driveway location, and run a full load calculation to confirm the new circuit fits.",
        },
        {
          title: "Charger selection",
          body: "We help you pick the right charger for your vehicle, daily mileage, and budget — without pushing brands we don't believe in.",
        },
        {
          title: "Permit & quote",
          body: "Detailed itemized quote with timeline, plus electrical permit pulled with the City of Tulsa or your local jurisdiction.",
        },
        {
          title: "Installation",
          body: "Dedicated 240V circuit run, breaker installed, conduit and disconnect (where required), charger mounted and commissioned.",
        },
        {
          title: "Testing & inspection",
          body: "Function test with your actual EV, final city inspection, and walkthrough of how the smart features and app integration work.",
        },
      ],
    },
    whyChoose: {
      heading: "Why Tulsa EV owners choose M Electric",
      bullets: [
        "Licensed and insured electricians with specific EV-charging expertise",
        "Comprehensive site assessment to ensure proper installation",
        "Installation of all major EV charger brands and models",
        "Full compliance with NEC and local Oklahoma electrical codes",
        "Same-day service available for most home Level 2 installs",
        "Serving the entire Tulsa metropolitan area with no travel surcharge",
        "Family-owned, Army-veteran-led, in business since 1999",
      ],
    },
    faqs: [
      {
        q: "How much does it cost to install an EV charger in Tulsa?",
        a: "Home Level 2 EV charger installation in the Tulsa metro typically ranges from $500 to $2,500 fully installed, depending on existing electrical setup, the charger you choose, distance from the panel to the charger location, and any panel work required. A simple install on an existing 200A panel with the charger near the panel often falls in the $700–$1,200 range. Longer conduit runs, panel upgrades, or 320A service upgrades push the price higher. The charger unit itself is typically $400–$900 and is usually customer-supplied or included in the install quote.",
      },
      {
        q: "Do I really need a Level 2 charger at home?",
        a: "Not strictly required, but most Tulsa EV owners find Level 2 worthwhile after a few weeks on Level 1. Level 1 charging at 120V provides only 3–5 miles of range per hour — fine if you drive under 30 miles a day and can leave the car plugged in for 12 hours. Level 2 at 240V provides 25–35 miles per hour, meaning you can fully charge most EVs overnight from empty. For households with two EVs or daily commutes over 40 miles, Level 2 is effectively essential.",
      },
      {
        q: "Can a local Tulsa electrician install an EV charger?",
        a: "Yes, but choose one with specific EV-charging experience. Improperly sized circuits, incorrect grounding, undersized panel work, and missed permit requirements are common when EV chargers are treated as standard 240V outlet installs. M Electric has installed Level 2 EV chargers across the Tulsa metro since the early days of mainstream EV adoption, and we follow all NEC and local Oklahoma code requirements.",
      },
      {
        q: "How much does it cost to install a 240V outlet for EV charging?",
        a: "A standalone 240V outlet (NEMA 14-50 or 6-50) for plug-in EV charging typically runs $300–$800 in the Tulsa area, depending on panel capacity and distance from the panel to the outlet location. A 14-50 outlet near the panel on an existing 200A service is usually toward the low end. Hardwired Level 2 chargers cost slightly more to install than outlet-based but are more reliable for long-term daily charging.",
      },
      {
        q: "Will my home panel support an EV charger, or do I need to upgrade?",
        a: "Most modern Tulsa-area homes with 200A service can support a Level 2 charger without a panel upgrade — we run a load calculation to confirm. Older homes with 100A service, multiple high-draw appliances, or homes already running heat pumps and induction ranges sometimes need a 200A → 320A upgrade to add EV charging. We assess this on the site visit and include any required panel work in the written quote upfront.",
      },
    ],
    related: ["panel-upgrades", "smart-home-wiring", "outlet-installation"],
  },
];

export const servicesBySlug = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): ServiceContent | undefined {
  return servicesBySlug.get(slug);
}
