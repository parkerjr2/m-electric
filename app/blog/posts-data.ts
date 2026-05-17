/**
 * Source of truth for all blog posts.
 *
 * Adding a post:
 *   1. Append a new entry to `posts`.
 *   2. Run `npm run build` and verify the new /blog/[slug] route + per-post
 *      OG image both prerender.
 *   3. Add the post URL to public/llms.txt under the ## Blog section.
 *
 * Inline link convention inside any `body` field:
 *   - `[label](/internal/path)`   → renders as Next <Link> (client-side)
 *   - `[label](https://...)`      → renders as <a target="_blank" rel="noopener noreferrer">
 *   - `**bold text**`             → renders as <strong>
 *
 * Section anchor IDs on `kind: "h2"` are used by Quick Answer jumpLinks and
 * by browsers for in-page hash navigation.
 */

export type PostSection =
  | { kind: "paragraph"; body: string }
  | { kind: "h2"; text: string; id: string }
  | { kind: "h3"; text: string }
  | { kind: "bullets"; lead?: string; bullets: string[] }
  | { kind: "ordered"; lead?: string; items: string[] }
  | {
      kind: "callout";
      variant: "quick-answer" | "warning" | "tip";
      title?: string;
      body: string;
      jumpLinks?: { label: string; toId: string }[];
    }
  | {
      kind: "embed";
      component:
        | "PowerOutageDecisionChart"
        | "StormSafetyChecklist"
        | "SurgeProtectionCoverage"
        | "PanelUpgradeWarningSigns"
        | "AcBreakerCallChart";
      caption?: string;
    }
  | { kind: "image"; src: string; alt: string; caption?: string };

export type PostFAQ = { q: string; a: string };

export type PostSource = { label: string; url: string };

export type PostPillar =
  | "panel-load"
  | "lighting"
  | "ev-generator"
  | "older-home"
  | "code-safety";

export type PostContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  pillar: PostPillar;
  /** ISO 8601 date (YYYY-MM-DD) */
  datePublished: string;
  /** ISO 8601 date (YYYY-MM-DD) */
  dateModified: string;
  /** Currently always "marshall-morgan" — resolves to founder Person @id. */
  author: "marshall-morgan";
  /** Either an Unsplash photo ID (`photo-XXXX-YYYY`) or a local path starting with `/`. */
  heroImageId: string;
  heroImageAlt: string;
  /** Approximate word count of the body content. */
  wordCount: number;
  body: PostSection[];
  faqs: PostFAQ[];
  sources?: PostSource[];
  /** Slugs of related blog posts to surface at the bottom (Phase 2.1). */
  related?: string[];
};

export const posts: PostContent[] = [
  {
    slug: "what-to-do-after-power-outage-tulsa",
    title:
      "What to Do After a Power Outage in Tulsa: A Homeowner's Safety and Recovery Guide",
    metaTitle: "What to Do After a Power Outage in Tulsa | M Electric",
    metaDescription:
      "Tulsa homeowner's guide to power outages: when to call PSO, 911, or a licensed electrician, plus safety steps for storms, partial power, and surges.",
    excerpt:
      "When the lights go out, who do you call — PSO, 911, or a licensed electrician? A Tulsa-specific homeowner's guide to staying safe, recognizing serious damage, and getting power back without making things worse.",
    pillar: "code-safety",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    author: "marshall-morgan",
    heroImageId: "photo-1473341304170-971dccb5ac1e",
    heroImageAlt:
      "Power transmission lines silhouetted against a stormy Tulsa-area sky",
    wordCount: 3000,
    body: [
      {
        kind: "callout",
        variant: "quick-answer",
        title: "Quick Answer: What to Do After a Power Outage in Tulsa",
        body: "1. **Stay away from any downed power lines** and call **911** immediately if you see one. Assume every line is energized.\n2. **Check the neighborhood.** If your neighbors are also dark, it's a utility issue — report it to **PSO at 1-833-776-6884** or on the [PSO Outage Map](https://www.psoklahoma.com/outages/).\n3. **If only your house is out — or you have partial power, buzzing, sparking, or a burning smell — stop and call a licensed electrician.** That points to a problem inside your home's electrical system.\n4. **Keep the refrigerator and freezer closed.** A full freezer holds safe temperatures for about 48 hours; the fridge for about 4 hours.\n5. **Never run a generator indoors or in a garage.** Place it outside, at least 20 feet from any window, door, or vent, with the exhaust pointed away from the house.\n\nNeed help right now? [Contact M Electric LLC](/contact) for fast, local emergency electrical response in the Tulsa area.",
        jumpLinks: [
          { label: "Common hazards", toId: "common-hazards" },
          { label: "Who to call", toId: "step-3-who-to-call" },
          { label: "Generator safety", toId: "generator-safety" },
          { label: "FAQ", toId: "faq" },
        ],
      },

      {
        kind: "h2",
        text: "Why Power Outages Are So Common in the Tulsa Area",
        id: "why-tulsa",
      },
      {
        kind: "paragraph",
        body: "If you live in Tulsa, you don't need a meteorologist to tell you that storms come in fast and hit hard. Eastern Oklahoma sits squarely in one of the most active severe-weather corridors in the country, and the [National Weather Service Tulsa office](https://www.weather.gov/tsa/) tracks an unusually high number of severe thunderstorm warnings, tornado watches, ice storm advisories, and high-wind events every year.",
      },
      {
        kind: "bullets",
        lead: "A few outages most Tulsa homeowners remember:",
        bullets: [
          "The **December 2007 ice storm**, which knocked out power to hundreds of thousands of Oklahomans for days.",
          "The **June 2023 storm and derecho event**, which Public Service Company of Oklahoma (PSO) reported as its largest restoration effort since 2007, with around **204,000 customers** out at the peak and more than **700 broken poles** to replace.",
          "Frequent summer thunderstorm and straight-line wind events, plus winter ice loading on overhead lines.",
        ],
      },
      {
        kind: "paragraph",
        body: "The point isn't to alarm you — it's to make the case that every Tulsa homeowner should have a calm, practical plan for what to do when the lights go out. This guide walks through that plan step by step.",
      },

      {
        kind: "h2",
        text: "Step 1: The First Five Minutes — Stay Calm and Stay Safe",
        id: "step-1-first-five-minutes",
      },
      {
        kind: "paragraph",
        body: "When your power goes out, resist the urge to start flipping switches or pulling cords. Do these things first:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Look around.** Is anything sparking, smoking, or buzzing? Do you smell anything burning?",
          "**Check outside (from a window or porch).** Are streetlights on? Are neighbors' houses dark? Is there a tree on a power line?",
          "**Unplug sensitive electronics** — TVs, computers, gaming consoles, microwaves — to protect them from a power-restoration surge.",
          "**Leave one light switch on.** That way you'll know the moment power returns.",
          "**Don't open the fridge or freezer** unless you have to.",
        ],
      },
      {
        kind: "paragraph",
        body: "If anything seems off — buzzing panel, burning smell, sparks, melted outlet, or partial power in only some rooms — skip ahead to the [Common Hazards](#common-hazards) section. Those are signals to call a licensed electrician, not the utility.",
      },

      {
        kind: "h2",
        text: "Step 2: Figure Out Whether It's Your House or the Whole Neighborhood",
        id: "step-2-house-or-neighborhood",
      },
      {
        kind: "paragraph",
        body: "This single step decides almost everything else. There are two basic scenarios:",
      },
      {
        kind: "h3",
        text: "Scenario A: The whole neighborhood is dark",
      },
      {
        kind: "paragraph",
        body: "If streetlights are off, neighbors are dark, or you can hear sirens and chainsaws after a storm, the issue is on PSO's distribution network, not inside your home. You don't need an electrician — you need to **report the outage to PSO** so the affected circuit gets queued for repair.",
      },
      {
        kind: "h3",
        text: "Scenario B: Only your house is out (or only part of it)",
      },
      {
        kind: "paragraph",
        body: "If neighbors still have power but you don't, the problem is almost certainly between the utility's lines and your panel — your service drop, weather head, meter base, main breaker, or interior wiring. **Call a licensed electrician.** PSO won't service equipment past the meter; that's the homeowner's responsibility.",
      },
      {
        kind: "paragraph",
        body: "This is the single most common reason Tulsa homeowners call us after a storm. They assume the whole grid is down, wait hours for \"PSO\" to fix it, and only later realize their neighbors had power the entire time.",
      },
      {
        kind: "paragraph",
        body: "If your home is dark but the rest of the block isn't, our team can usually diagnose the cause same-day — see [Electrical Repair](/services/electrical-repair).",
      },
      {
        kind: "image",
        src: "photo-1635335874521-7987db781153",
        alt: "Suburban Tulsa street at night with most homes dark and one with lights on, illustrating how to tell whether a power outage is utility-side or inside your home",
        caption:
          "If you're the only dark house on the block, the issue is almost always inside your home.",
      },

      {
        kind: "h2",
        text: "Step 3: Who Do You Call — PSO, 911, or a Licensed Electrician?",
        id: "step-3-who-to-call",
      },
      {
        kind: "paragraph",
        body: "This is the question we get more than any other after a storm. Here's a clean way to think about it.",
      },
      {
        kind: "h3",
        text: "Call 911 if:",
      },
      {
        kind: "bullets",
        bullets: [
          "You see a **downed power line**, sparking line, or arcing transformer.",
          "A power line is **on a vehicle, fence, tree, or your house**.",
          "You smell smoke, see flames, or hear active arcing inside walls.",
          "Anyone has been shocked or is in contact with electrical equipment.",
          "You suspect carbon monoxide poisoning from a generator.",
        ],
      },
      {
        kind: "paragraph",
        body: "911 will dispatch fire/EMS and notify the utility. Don't try to handle these situations yourself.",
      },
      {
        kind: "h3",
        text: "Call PSO (Public Service Company of Oklahoma) if:",
      },
      {
        kind: "bullets",
        bullets: [
          "The whole neighborhood is dark.",
          "Streetlights are off.",
          "You see (from a safe distance) a downed line, fallen tree on a line, or damaged utility pole.",
          "You need an outage status update or estimated restoration time.",
        ],
      },
      {
        kind: "paragraph",
        body: "**PSO outage hotline:** 1-833-776-6884 · **PSO outage map and online reporting:** [psoklahoma.com/outages](https://www.psoklahoma.com/outages/)",
      },
      {
        kind: "paragraph",
        body: "PSO is responsible for everything from the substation to the meter. They are not responsible for anything from the meter into your home.",
      },
      {
        kind: "h3",
        text: "Call a licensed electrician (like M Electric LLC) if:",
      },
      {
        kind: "bullets",
        bullets: [
          "Your house is the only one without power.",
          "You have **partial power** — some rooms or outlets work, some don't.",
          "The electrical **panel is buzzing, hot to the touch, or scorched**.",
          "You smell **burning plastic, fish, or ozone** near outlets, the panel, or appliances.",
          "A **breaker won't reset** or trips immediately when reset.",
          "A power surge appears to have **damaged outlets, switches, or wiring**.",
          "You want a **post-storm safety inspection** before turning major systems back on.",
          "You're considering **whole-home surge protection**, a **panel upgrade**, or a **standby generator** before the next storm.",
        ],
      },
      {
        kind: "paragraph",
        body: "If you're not sure which call to make, start with us — we'll tell you straight if it's a PSO issue or a 911 issue. [Contact M Electric LLC](/contact).",
      },
      {
        kind: "embed",
        component: "PowerOutageDecisionChart",
        caption:
          "When to call PSO vs. 911 vs. a licensed electrician — at a glance.",
      },

      {
        kind: "h2",
        text: "Common Hazards After a Tulsa Storm",
        id: "common-hazards",
      },
      {
        kind: "paragraph",
        body: "These are the situations we see most often after Tulsa-area outages. Each one has a clear answer for what's safe, what's not, and when to step away.",
      },

      { kind: "h3", text: "Downed Power Lines" },
      {
        kind: "callout",
        variant: "warning",
        title: "The rule",
        body: "Treat every downed line as live. Always.",
      },
      {
        kind: "paragraph",
        body: "OSHA's general guidance is that no one should approach a downed line — workers and bystanders alike are advised to maintain a safe distance and assume the line is energized. For untrained homeowners, **stay at least 35 feet away** (a common utility-recommended buffer for the public), keep children and pets back, and **call 911 first, then PSO**.",
      },
      {
        kind: "paragraph",
        body: "Other lines — cable, internet, phone — can also be dangerous if they've fallen across an energized power line, so don't try to sort out which is which.",
      },
      {
        kind: "bullets",
        lead: "**Do not:**",
        bullets: [
          "Touch the line, or anything touching it (a fence, car, tree, puddle, or person).",
          "Drive over a downed line.",
          "Try to move it with a broom, branch, or rope. \"Non-conductive\" tools are not safe with line voltage.",
          "Step into standing water near a downed line — water and ground can carry current outward from the contact point.",
        ],
      },
      {
        kind: "paragraph",
        body: "If a line is on your car and you're inside, **stay inside** until help arrives, unless the vehicle is on fire. If you must exit, jump clear with both feet together, never touching the car and the ground at the same time, and shuffle away in small steps.",
      },
      {
        kind: "image",
        src: "photo-1758101755915-462eddc23f57",
        alt: "Damaged outdoor electrical equipment after a storm with caution tape, illustrating the importance of staying clear of downed lines",
        caption:
          "Treat every downed line as energized. Stay back at least 35 feet, call 911, then PSO.",
      },

      { kind: "h3", text: "Partial Power in Your House" },
      {
        kind: "paragraph",
        body: "Partial power — half the lights work, the AC is dead, the kitchen is dark but the bedrooms aren't — is one of the most misunderstood post-outage situations in Tulsa. It almost always means one \"leg\" of your 240-volt service is missing, often because of:",
      },
      {
        kind: "bullets",
        bullets: [
          "A damaged service drop or weather head from wind or a fallen branch.",
          "A loose or burned connection in the meter base.",
          "A failed main breaker.",
          "A damaged neutral, which is especially dangerous because it can cause voltage on 120V circuits to spike or sag, frying electronics and motors.",
        ],
      },
      {
        kind: "paragraph",
        body: "**Do not** keep using the circuits that still work. Lopsided voltage can damage refrigerators, HVAC compressors, well pumps, and electronics in minutes. Turn off your main breaker if you can do so safely, and call a licensed electrician. Our team handles partial-power calls regularly — see [Wiring Repair](/services/wiring-repair) and [Electrical Repair](/services/electrical-repair).",
      },

      { kind: "h3", text: "A Buzzing or Humming Electrical Panel" },
      {
        kind: "paragraph",
        body: "A faint hum from a transformer-fed device is normal. **A loud buzz, crackle, or hiss coming from your breaker panel is not.** It can indicate:",
      },
      {
        kind: "bullets",
        bullets: [
          "A loose connection arcing inside the panel.",
          "A failing breaker.",
          "Damage from a power surge during the storm.",
        ],
      },
      {
        kind: "paragraph",
        body: "If your panel is buzzing — especially if it's warm, discolored, or has visible scorching — **do not open it.** Keep people away, shut off the main breaker only if you can do so without touching the panel face, and call a licensed electrician immediately. A buzzing panel can be a precursor to an electrical fire.",
      },
      {
        kind: "paragraph",
        body: "This is exactly the kind of call where a [Panel Upgrade](/services/panel-upgrades) or replacement is often the right answer, especially if your panel is older than 25 years or is a known problem brand.",
      },

      {
        kind: "h3",
        text: "Burning Smell from Outlets, Switches, or the Panel",
      },
      {
        kind: "paragraph",
        body: "Insulation, plastic, and fish-like odors near electrical equipment all point to overheated wiring. If you smell anything like that:",
      },
      {
        kind: "ordered",
        items: [
          "Don't touch the device or outlet.",
          "Cut power to that circuit at the breaker, or shut off the main if you're not sure which circuit it is.",
          "Leave the area; ventilate the room.",
          "Call a licensed electrician. If you see smoke or scorching, call 911 first.",
        ],
      },
      {
        kind: "paragraph",
        body: "A burning smell after a storm usually traces back to a surge event or to moisture intrusion. Both are repairable, but neither is a DIY job.",
      },

      { kind: "h3", text: "Tripped Breakers That Won't Stay On" },
      {
        kind: "paragraph",
        body: "A breaker that trips once and resets cleanly is doing its job. A breaker that **trips immediately**, **trips repeatedly**, or **won't reset at all** is telling you there's a downstream problem — a short, a ground fault, a damaged appliance, or a damaged wire.",
      },
      {
        kind: "bullets",
        lead: "Safe rules of thumb:",
        bullets: [
          "You may reset a tripped breaker once. Push it firmly to OFF, then back to ON.",
          "If it trips again immediately, **leave it off** and call a licensed electrician.",
          "Never tape, wedge, or \"hold\" a breaker in the ON position. Ever.",
        ],
      },

      {
        kind: "h3",
        text: "Standing Water Near Outlets, Panels, or HVAC Equipment",
      },
      {
        kind: "paragraph",
        body: "Storm flooding is a fast-track to electrical danger. If you have standing water in a basement, garage, or crawl space and it's anywhere near outlets, the panel, the water heater, the furnace, or the AC condenser:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Do not enter the water.**",
          "**Do not touch any switches or outlets in the affected area.**",
          "Shut off power at the main breaker only if the panel is dry and accessible without standing in water.",
          "Call a licensed electrician before re-energizing anything that was wet.",
        ],
      },
      {
        kind: "paragraph",
        body: "Submerged outlets, breakers, and motors are not \"dry it out and try again\" equipment — they need professional inspection and, in most cases, replacement.",
      },

      { kind: "h3", text: "Lightning and Plugged-In Devices" },
      {
        kind: "paragraph",
        body: "During an active thunderstorm:",
      },
      {
        kind: "bullets",
        bullets: [
          "Don't use corded phones (cordless and cell are fine).",
          "Avoid touching anything plugged into the wall — desktops, gaming consoles, washers, dryers, ranges.",
          "Stay out of the shower or bath. Plumbing can carry a strike.",
          "If you can do it safely **before** the storm hits, unplug sensitive electronics. Don't unplug anything mid-storm.",
        ],
      },
      {
        kind: "paragraph",
        body: "After the storm, if you find dead outlets, dim lights, or \"everything's fine but the TV won't turn on\" — that's a strong sign of a surge that made it past the meter. A licensed electrician can confirm whether you took a hit and whether your wiring is still safe. If you find yourself losing electronics every few storms, [Whole-Home Surge Protection](/services/surge-protection) is one of the best investments a Tulsa homeowner can make.",
      },

      {
        kind: "h2",
        text: "Generator Safety During a Tulsa Outage",
        id: "generator-safety",
      },
      {
        kind: "paragraph",
        body: "A portable generator is a lifesaver during a long Tulsa outage — until it isn't. Carbon monoxide from generators kills dozens of Americans every year, and the U.S. Consumer Product Safety Commission (CPSC) has been clear about how to prevent it.",
      },
      {
        kind: "bullets",
        lead: "**The non-negotiables:**",
        bullets: [
          "**Run generators outdoors only.** Never in a garage, even with the door open. Never on a porch or under a carport. Never in a basement or crawl space.",
          "**Keep it at least 20 feet from the house**, with the exhaust pointed away from windows, doors, and vents.",
          "**Install battery-powered CO alarms** on every level of the home and outside sleeping areas, and replace batteries seasonally.",
          "**Do not refuel a hot generator.** Let it cool first.",
          "**Do not \"backfeed\" a generator into a wall outlet.** This is illegal, dangerous to PSO line crews, and a fire risk to your home.",
        ],
      },
      {
        kind: "paragraph",
        body: "If you want to power 240-volt loads (well pump, central AC, electric range, full panel), the right answer is a **professionally installed transfer switch or a permanently installed standby generator** — wired by a licensed electrician, in compliance with the National Electrical Code and PSO's interconnection rules.",
      },
      {
        kind: "paragraph",
        body: "We size, install, and maintain home standby systems for Tulsa homeowners. Learn more about [Generator Installation](/services/generator-installation), or [Contact us](/contact) to schedule a load-calculation visit before the next storm season.",
      },
      {
        kind: "image",
        src: "/job-gallery/generac-transfer-switch.png",
        alt: "Generac whole-home standby generator transfer switch wired beside a residential breaker panel — installed by M Electric in a Tulsa home",
        caption:
          "Real M Electric work: a Generac transfer switch installed alongside the panel for a Tulsa whole-home standby generator.",
      },

      {
        kind: "h2",
        text: "When the Power Comes Back On",
        id: "restoration",
      },
      {
        kind: "paragraph",
        body: "Restoration isn't always smooth. Surges and brief flickers when PSO re-energizes a circuit are normal, but they can damage anything that was still plugged in.",
      },
      {
        kind: "ordered",
        lead: "After power is restored:",
        items: [
          "**Wait a few minutes** before turning major appliances back on. Let the grid stabilize.",
          "**Reset your HVAC, microwave, garage door opener, and any GFCI outlets** (the test/reset buttons in bathrooms, kitchens, garages, and outside).",
          "**Walk the house.** Check every room for outlets that don't work, lights that are dim or flickering, or any new burning smell.",
          "**Inspect the panel.** Look for tripped breakers and reset them once. If anything trips again, leave it and call an electrician.",
          "**Check smoke and CO alarms.** Hardwired units may have lost their backup batteries during the outage.",
        ],
      },
      {
        kind: "paragraph",
        body: "If anything seems off — flickering lights, dim outlets, slow appliances, weird smells — schedule a post-storm inspection. We'll diagnose surge damage, loose connections, and compromised wiring before they become bigger problems. See [Electrical Repair](/services/electrical-repair).",
      },

      {
        kind: "h2",
        text: "Food Safety After a Tulsa Outage",
        id: "food-safety",
      },
      {
        kind: "paragraph",
        body: "This isn't electrical work, but it's the question every homeowner asks. The USDA and [FoodSafety.gov](https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage) guidelines are simple:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Refrigerator: about 4 hours.** After 4 hours without power, throw out perishable foods like meat, poultry, fish, eggs, dairy, and leftovers. Don't taste-test to \"see if it's ok.\"",
          "**Full freezer: about 48 hours.** Half-full: about 24 hours. Keep the door closed.",
          "**Refreezing is fine** if food still has ice crystals or is at 40°F (4°C) or below — quality may suffer, but it's safe.",
          "**When in doubt, throw it out.**",
        ],
      },
      {
        kind: "paragraph",
        body: "A simple appliance thermometer in the fridge and freezer takes the guesswork out of long outages.",
      },

      {
        kind: "h2",
        text: "Protect Your Home Before the Next Storm",
        id: "protect-home",
      },
      {
        kind: "paragraph",
        body: "You can't keep a tornado from hitting Green Country, but you can dramatically reduce how much an outage costs you.",
      },
      { kind: "h3", text: "Whole-Home Surge Protection" },
      {
        kind: "paragraph",
        body: "A surge protective device (SPD) installed at the panel clamps voltage spikes from lightning, PSO switching events, and large motor cycling — protecting HVAC, well pumps, refrigerators, and the dozens of small electronics that plug-in surge strips can't reach. See [Surge Protection](/services/surge-protection).",
      },
      { kind: "h3", text: "Panel Upgrades" },
      {
        kind: "paragraph",
        body: "If your panel is more than 25 years old, has known reliability issues (some legacy brands are widely recognized as unsafe by insurers), or simply doesn't have capacity for modern loads (EV charger, mini-splits, hot tub, induction range), an upgrade is the foundation everything else depends on. Learn more about [Panel Upgrades](/services/panel-upgrades).",
      },
      { kind: "h3", text: "Generator Installation" },
      {
        kind: "paragraph",
        body: "Standby generators detect an outage in seconds and start automatically. For Tulsa homeowners with medical equipment, well water, or simply a low tolerance for 100°F summer days without AC, this is the gold standard. See [Generator Installation](/services/generator-installation).",
      },
      { kind: "h3", text: "Wiring Repair and Inspections" },
      {
        kind: "paragraph",
        body: "Old aluminum branch wiring, undersized neutrals, and corroded service equipment all behave worse during storms. A periodic inspection catches the small issues before they become 2 a.m. emergencies. See [Wiring Repair](/services/wiring-repair).",
      },

      {
        kind: "h2",
        text: "Local Help — M Electric LLC Serves the Tulsa Area",
        id: "local-help",
      },
      {
        kind: "paragraph",
        body: "We're a licensed, insured Tulsa electrician, and we live and work in this weather right alongside you. After a storm, we prioritize emergency calls — especially partial power, buzzing panels, burning smells, and homes where only one house on the block is out.",
      },
      {
        kind: "image",
        src: "/marshall-morgan-m-electric-van.jpg",
        alt: "Marshall Morgan, owner of M Electric, standing beside the M Electric service van in Tulsa, Oklahoma",
        caption:
          "Marshall answers the emergency line personally. There's no call center.",
      },
      {
        kind: "paragraph",
        body: "Service area: Tulsa and the surrounding metro. See our full [Tulsa Service Area](/service-areas/tulsa) page.",
      },
      {
        kind: "paragraph",
        body: "[Contact M Electric LLC](/contact) for emergency electrical repair, post-storm troubleshooting, surge protection, panel inspections, and generator consultations.",
      },
    ],
    faqs: [
      {
        q: "Should I call PSO or an electrician after a power outage?",
        a: "If your whole neighborhood is dark, call PSO at 1-833-776-6884 or use the PSO outage map. If only your house is out, you have partial power, or you see signs of internal damage like a burning smell, buzzing panel, or scorched outlets, call a licensed electrician. PSO is responsible from the substation to your meter; everything past the meter is the homeowner's responsibility.",
      },
      {
        q: "How long can food stay safe in the fridge during a Tulsa power outage?",
        a: "Per FoodSafety.gov, a closed refrigerator keeps food safe for about 4 hours, and a full freezer for about 48 hours (24 hours if half-full). Keep the doors closed, and discard perishables that have been above 40°F for more than 2 hours.",
      },
      {
        q: "Why does my house have partial power after the storm?",
        a: "Partial power usually means one of the two 120-volt legs coming into your home has been lost, often from storm damage to the service drop, weather head, meter base, main breaker, or neutral. It can damage appliances quickly, so shut off the main breaker if it is safe to do so and call a licensed electrician.",
      },
      {
        q: "Is it safe to reset a breaker that keeps tripping after an outage?",
        a: "You can reset a breaker once. If it trips again immediately, leave it off and call a licensed electrician. A breaker that will not hold indicates a short, ground fault, or damaged wire downstream.",
      },
      {
        q: "How far should a portable generator be from my house?",
        a: "The U.S. Consumer Product Safety Commission recommends placing portable generators at least 20 feet from the home, with the exhaust pointed away from windows, doors, and vents. Never run a generator in a garage, basement, crawl space, or on a porch, even with doors open.",
      },
      {
        q: "What should I do if I see a downed power line in my Tulsa neighborhood?",
        a: "Stay far away (at least 35 feet), keep children and pets back, do not touch anything in contact with the line, and call 911 first, then PSO. Assume every line is energized, even if it is not sparking.",
      },
      {
        q: "Do I need surge protection if I already have a power strip?",
        a: "Plug-in power strips only protect what is plugged into them, and many lower-grade surge strips clamp at voltages too high to actually protect sensitive electronics. A whole-home surge protective device installed at the panel protects every circuit, including hard-wired equipment like HVAC and well pumps.",
      },
      {
        q: "How do I know if a power surge damaged my home's wiring?",
        a: "Watch for dead outlets after restoration, lights that flicker only on certain circuits, the smell of burned plastic, breakers that will not hold, or appliances that run hot or noisy. A licensed electrician can use thermal imaging and circuit testing to confirm and locate the damage.",
      },
    ],
    sources: [
      {
        label: "PSO Outage Reporting and Map",
        url: "https://www.psoklahoma.com/outages/",
      },
      {
        label: "PSO Customer Contact",
        url: "https://www.psoklahoma.com/contact/",
      },
      {
        label: "National Weather Service — Tulsa Forecast Office",
        url: "https://www.weather.gov/tsa/",
      },
      {
        label: "OSHA — Power Line Safety Standards",
        url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1408",
      },
      {
        label: "CPSC — Carbon Monoxide Information Center",
        url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center",
      },
      {
        label: "FoodSafety.gov — Food Safety During a Power Outage",
        url: "https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage",
      },
      {
        label: "USDA FSIS — Keep Your Food Safe During Emergencies",
        url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/keep-your-food-safe-during-emergencies",
      },
      {
        label: "City of Tulsa — Severe Weather Safety",
        url: "https://www.cityoftulsa.org/residents/public-safety/weather/",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "spring-storm-electrical-checklist-tulsa",
    title: "Spring Storm Electrical Checklist for Tulsa Homeowners",
    metaTitle: "Tulsa Spring Storm Electrical Checklist | M Electric",
    metaDescription:
      "Pre-storm checklist for Tulsa homeowners: surge protection, generators, GFCIs, panel checks, plus what to inspect after a thunderstorm or tornado.",
    excerpt:
      "Eastern Oklahoma sits in one of the most active severe-weather corridors in the country. A Tulsa-specific before/during/after checklist for surge protection, GFCIs, generators, panel inspections, and post-storm safety.",
    pillar: "code-safety",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    author: "marshall-morgan",
    heroImageId: "photo-1473341304170-971dccb5ac1e",
    heroImageAlt:
      "Power transmission lines silhouetted against a stormy spring sky over the Tulsa metro",
    wordCount: 2700,
    body: [
      {
        kind: "callout",
        variant: "quick-answer",
        title: "Quick Spring Storm Electrical Checklist (Tulsa)",
        body: "**Before the storm:**\n- Schedule a pre-storm electrical inspection\n- Install whole-home surge protection at the panel\n- Test every GFCI outlet (kitchen, bath, garage, exterior)\n- Test the sump pump and battery backup, if you have one\n- Visually inspect the weatherhead, meter, conduit, and panel from the ground\n- Trim limbs over the service drop and roof\n- Sign up for NWS Tulsa alerts and bookmark the [PSO Outage Map](https://www.psoklahoma.com/outages/)\n- Decide your generator plan now — not at 2 a.m.\n\n**During the storm:**\n- Don't touch anything plugged into a wall outlet\n- Don't shower, bathe, or wash dishes\n- Stay sheltered until 30 minutes after the last thunder\n- Don't run generators indoors, in a garage, or under a carport\n\n**After the storm:**\n- Stay clear of any downed line — call 911, then PSO\n- Walk the property and look at your weatherhead, meter, and panel from a safe distance\n- Check breakers, GFCIs, and outlets — but stop and call a licensed electrician at any sign of buzzing, scorching, or burning smells\n- Document everything for insurance\n\nNeed a pre-season inspection or post-storm repair? [Contact M Electric LLC](/contact) — same-day emergency response across the Tulsa metro.",
        jumpLinks: [
          { label: "Before the storm", toId: "before-the-storm" },
          { label: "During the storm", toId: "during-the-storm" },
          { label: "After the storm", toId: "after-the-storm" },
          { label: "Who to call", toId: "who-to-call" },
          { label: "FAQ", toId: "faq" },
        ],
      },

      {
        kind: "h2",
        text: "Why Tulsa Springs Demand a Real Storm Plan",
        id: "why-tulsa-springs",
      },
      {
        kind: "paragraph",
        body: "Spring in Tulsa is beautiful — and electrically punishing. Eastern Oklahoma sits in one of the most active severe-weather corridors in the country, and April, May, and June together make up the bulk of severe storm season. The [National Weather Service Tulsa office](https://www.weather.gov/tsa/) issues hundreds of severe thunderstorm warnings, tornado watches, and flash flood warnings every spring.",
      },
      {
        kind: "bullets",
        lead: "A few numbers worth knowing:",
        bullets: [
          "**May is the peak tornado month statewide**, with Oklahoma averaging roughly 24 tornadoes in May alone — more than any other month.",
          "**May is also Tulsa's wettest month**, averaging just under six inches of rainfall.",
          "**April 2025 was Tulsa's wettest April on record**, with nearly 11 inches of rain.",
          "The April 27–28, 2024 outbreak produced 8 tornadoes inside the NWS Tulsa forecast area; the May 6–7, 2024 event added another 5.",
        ],
      },
      {
        kind: "paragraph",
        body: "For a Tulsa homeowner, that translates to a recurring set of electrical risks every spring: lightning surges, wind-blown branches taking down service drops, hail bruising AC condensers, water in the panel from blown-in rain, and outages that can last anywhere from a flicker to several days.",
      },
      {
        kind: "paragraph",
        body: "This checklist is built around three simple windows of time: **before**, **during**, and **after** a Tulsa storm. Walk through each one and you'll be ahead of 90% of your neighbors when severe weather hits.",
      },

      {
        kind: "h2",
        text: "Before the Storm: Your Pre-Storm Electrical Checklist",
        id: "before-the-storm",
      },
      {
        kind: "paragraph",
        body: "The work you do *before* a thunderstorm is the highest-leverage electrical work you'll do all spring. None of it is glamorous; all of it pays off.",
      },

      { kind: "h3", text: "1) Schedule a Pre-Storm Electrical Inspection" },
      {
        kind: "paragraph",
        body: "A licensed Tulsa electrician can spot the problems homeowners miss: corroded service equipment, loose neutrals, panels that are warm to the touch, undersized breakers, missing bonding, and aging surge protection. We bundle this kind of pre-season check into our standard [Electrical Repair](/services/electrical-repair) service.",
      },
      {
        kind: "bullets",
        lead: "A 60- to 90-minute inspection in March or April typically includes:",
        bullets: [
          "Thermal imaging of the panel under load",
          "A visual inspection of the service entrance (mast, weatherhead, meter, conduit)",
          "Verification that grounding electrodes and bonding are intact",
          "Testing of every GFCI and AFCI breaker",
          "A surge protection assessment",
        ],
      },
      {
        kind: "paragraph",
        body: "If you're scheduling one storm-prep call this season, this is it. [Contact us](/contact) to book.",
      },
      {
        kind: "image",
        src: "/job-gallery/generac-transfer-switch.png",
        alt: "Open residential electrical panel alongside a Generac transfer switch — installed by M Electric in a Tulsa home",
        caption:
          "A pre-season look inside the panel catches the issues most likely to fail when severe weather hits.",
      },

      { kind: "h3", text: "2) Install Whole-Home Surge Protection" },
      {
        kind: "paragraph",
        body: "Plug-in power strips don't protect hard-wired equipment like your HVAC, well pump, electric range, oven, garage door opener, or dishwasher. They also do nothing for the dozens of microsurges your home absorbs every week from PSO grid switching and large motor cycling.",
      },
      {
        kind: "paragraph",
        body: "A panel-mounted **surge protective device (SPD)** clamps voltage spikes at the service entrance, before they reach the rest of the home. According to the [Electrical Safety Foundation International (ESFI)](https://www.esfi.org/what-are-surge-protective-devices/), SPDs are the first line of defense against home electrical surges, and Type 1 devices help protect against nearby lightning strikes. Worth knowing: no surge device can handle a direct lightning strike — even Type 1 hardware is built to absorb induced surges, not a bolt landing on your roof.",
      },
      {
        kind: "paragraph",
        body: "If you don't have a panel-level SPD, this is the highest-ROI electrical upgrade in Tulsa. See [Whole-Home Surge Protection](/services/surge-protection).",
      },

      {
        kind: "h3",
        text: "3) Test Your GFCIs (and Make Sure Outdoor Outlets Are Protected)",
      },
      {
        kind: "paragraph",
        body: "GFCI (ground-fault circuit interrupter) outlets are required by code in kitchens, bathrooms, garages, basements, crawl spaces, outdoor receptacles, and near pools and tubs. They're also one of the most overlooked items on a homeowner's spring punch list.",
      },
      {
        kind: "bullets",
        lead: "What to do:",
        bullets: [
          "Press **TEST** on each GFCI outlet — the **RESET** button should pop out and power should cut.",
          "Press **RESET** to restore power.",
          "If a GFCI won't trip, won't reset, or feels warm, replace it (or have us replace it).",
          "All exterior outlets should be GFCI-protected and inside a **weatherproof in-use cover**, not a flat flip-up cover. The in-use cover keeps the outlet sealed even when something is plugged in.",
        ],
      },
      {
        kind: "paragraph",
        body: "If your home is older than the early 2000s, it's worth verifying that every required location actually has a GFCI. We see a lot of Tulsa homes — especially ones built before 1996 — with bathrooms or garages still on standard outlets. That's an easy fix; it's also the kind of fix that matters most when wind-blown rain finds an outdoor outlet.",
      },

      { kind: "h3", text: "4) Test the Sump Pump and Battery Backup" },
      {
        kind: "paragraph",
        body: "If you have a basement, a finished crawl, or any low-lying drainage that depends on a sump pump, test it before storm season. Pour a bucket of water into the sump pit and watch the pump kick on, run, and shut off cleanly.",
      },
      {
        kind: "bullets",
        lead: "Two upgrades worth considering before a wet Tulsa spring:",
        bullets: [
          "A **battery-backup sump pump** that runs even when PSO is out.",
          "A **whole-home generator** sized to keep the sump and HVAC online during a multi-hour outage.",
        ],
      },
      {
        kind: "paragraph",
        body: "A dead sump pump during a heavy spring storm is one of the most common, most expensive flooding scenarios we see. See [Generator Installation](/services/generator-installation) and [Wiring Repair](/services/wiring-repair) if your sump circuit is old or unreliable.",
      },

      {
        kind: "h3",
        text: "5) Visually Inspect the Service Entrance — From the Ground",
      },
      {
        kind: "paragraph",
        body: "You don't need a ladder for this. Stand back and look up at:",
      },
      {
        kind: "bullets",
        bullets: [
          "**The weatherhead** (the curved fitting where overhead lines enter the conduit). It should be tight to the mast and angled down so water can't run into the conduit.",
          "**The mast** (the metal pipe carrying conductors down to the meter). It should be plumb and securely attached to the wall or roof.",
          "**The meter and meter base.** No scorching, no rust streaks, no cracked enclosure, no daylight visible inside.",
          "**The exterior conduit** running to the panel. No cracks, no detached straps, no exposed wires.",
        ],
      },
      {
        kind: "paragraph",
        body: "Anything that looks bent, pulled away from the house, scorched, or full of pests is a stop-and-call situation. The mast and weatherhead are technically the homeowner's responsibility past the point of attachment, even though PSO connects to them — and damage there is one of the most common reasons a Tulsa home loses power while neighbors keep theirs.",
      },

      { kind: "h3", text: "6) Inspect the Panel — Without Opening It" },
      {
        kind: "paragraph",
        body: "Open the door to your breaker panel (the outer cover, not the dead front behind it). Look for:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Rust streaks** down the inside of the door, which suggest water intrusion.",
          "**Discolored or scorched breaker faces.**",
          "**Breakers stuck in the middle position** (not fully ON or OFF).",
          "**A panel directory** that's still legible. If yours isn't, fix it before storm season — you'll thank yourself when you're trying to find the right breaker in a hurry.",
          "**A faint hum** from a 200A main is normal. **A loud buzz, crackle, or burning smell is not.**",
        ],
      },
      {
        kind: "paragraph",
        body: "Don't open the dead front. Don't pull breakers. Anything beyond what's listed above is a job for a [Panel Upgrade](/services/panel-upgrades) specialist.",
      },

      { kind: "h3", text: "7) Plan Your Generator — Now, Not at 2 a.m." },
      {
        kind: "paragraph",
        body: "Tulsa generator demand spikes after every major outage, and that's the worst time to make a thoughtful decision. Before spring storms hit, decide which of these you actually want:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Portable generator** with a manual transfer switch — covers a few essential circuits (fridge, sump, a window unit, a few lights).",
          "**Standby generator** wired to an automatic transfer switch — runs the whole panel or selected circuits, kicks on within seconds of an outage, fueled by natural gas or propane.",
          "**Battery backup (whole-home or partial)** — increasingly popular, especially when paired with future solar.",
        ],
      },
      {
        kind: "paragraph",
        body: "The right choice depends on your loads, fuel availability, and how long you're willing to be without power. Get a load calculation early so you have a real plan instead of a guess. See [Generator Installation](/services/generator-installation).",
      },

      { kind: "h3", text: "8) Trim Trees and Document Your Setup" },
      {
        kind: "paragraph",
        body: "Before peak season:",
      },
      {
        kind: "bullets",
        bullets: [
          "Trim or remove limbs hanging over the service drop, the meter, and the roof.",
          "Photograph your panel, meter, weatherhead, generator, sump pump, and any major electrical equipment. Date the photos. Store them in the cloud.",
        ],
      },
      {
        kind: "paragraph",
        body: "You'll be glad you did if you ever file an insurance claim.",
      },

      {
        kind: "h3",
        text: "9) Sign Up for Alerts and Bookmark the Right Pages",
      },
      {
        kind: "paragraph",
        body: "A few minutes spent here saves hours of guessing during a storm:",
      },
      {
        kind: "bullets",
        bullets: [
          "**NWS Tulsa** alerts via phone (Wireless Emergency Alerts are on by default), a NOAA Weather Radio, or an app of your choice.",
          "**PSO Outage Map** — bookmark on your phone: [psoklahoma.com/outages](https://www.psoklahoma.com/outages/). The PSO outage hotline is **1-833-776-6884**.",
          "**City of Tulsa** severe weather information at [cityoftulsa.org](https://www.cityoftulsa.org/residents/public-safety/weather/).",
          "**Ready.gov** preparedness checklists at [ready.gov/thunderstorms-lightning](https://www.ready.gov/thunderstorms-lightning).",
        ],
      },

      {
        kind: "h2",
        text: "During the Storm: What Not to Do",
        id: "during-the-storm",
      },
      {
        kind: "paragraph",
        body: "Once the storm is overhead, the job is simple — *don't make anything worse*.",
      },

      { kind: "h3", text: "Don't Touch Anything Plugged Into a Wall" },
      {
        kind: "paragraph",
        body: "Per [Ready.gov](https://www.ready.gov/thunderstorms-lightning), during a thunderstorm you should avoid using anything connected to an electrical outlet — computers, gaming consoles, washers, dryers, ranges. Lightning can travel through a building's wiring and seriously injure anyone in contact with a plugged-in device.",
      },

      { kind: "h3", text: "Don't Use Plumbing" },
      {
        kind: "paragraph",
        body: "Same idea, different path: lightning can travel through a building's plumbing. Skip the shower, bath, and dishes until the storm has fully passed.",
      },

      {
        kind: "h3",
        text: "Stay Sheltered Until 30 Minutes After the Last Thunder",
      },
      {
        kind: "paragraph",
        body: "This is the standard NWS guidance — it's the rule outdoor sports follow for a reason. If you can hear thunder, you're close enough to be struck.",
      },

      { kind: "h3", text: "Don't Run Generators Indoors or in a Garage" },
      {
        kind: "paragraph",
        body: "Carbon monoxide from portable generators kills people every spring storm season. The U.S. Consumer Product Safety Commission (CPSC) recommends operating portable generators **outside only, at least 20 feet from the home**, with the exhaust pointed away from windows, doors, and vents. Never on a porch. Never under a carport. Never in a garage, even with the door open. Don't refuel a hot generator.",
      },
      {
        kind: "paragraph",
        body: "If you're powering 240-volt loads (well pump, central AC, full panel), the right answer is a **professionally installed transfer switch or a permanently installed standby generator**. See [Generator Installation](/services/generator-installation).",
      },

      { kind: "h3", text: "Don't Try to Inspect Outdoor Equipment" },
      {
        kind: "paragraph",
        body: "Wet conditions, wind, hail, falling branches, and possibly downed lines make this a stay-inside-and-look-out-the-window situation. Whatever damage is happening will still be there tomorrow.",
      },

      { kind: "h3", text: "Don't Reset a Tripped Breaker More Than Once" },
      {
        kind: "paragraph",
        body: "A breaker that trips once and resets cleanly is doing its job. A breaker that **trips immediately**, **trips repeatedly**, or **won't reset at all** is telling you there's a downstream problem — a short, ground fault, damaged appliance, or damaged wire. Reset once, and if it trips again, leave it off and call a licensed electrician.",
      },

      {
        kind: "h2",
        text: "After the Storm: Your Post-Storm Electrical Inspection Checklist",
        id: "after-the-storm",
      },
      {
        kind: "paragraph",
        body: "This is where most of the avoidable damage gets done — and the most common cause is rushing.",
      },

      { kind: "h3", text: "1) Walk the Property Carefully (At a Distance)" },
      {
        kind: "paragraph",
        body: "Before touching anything, walk the perimeter and look for:",
      },
      {
        kind: "bullets",
        bullets: [
          "Branches on overhead lines or your service drop",
          "Standing water near outdoor outlets, the AC condenser, the meter, or generator",
          "A tilted or dislodged meter or mast",
          "Damaged outdoor lighting or hot tub equipment",
          "Visible scorch marks anywhere outside",
        ],
      },
      {
        kind: "paragraph",
        body: "If you see anything in contact with a power line — a fence, a tree, a vehicle — stay back and call 911.",
      },

      { kind: "h3", text: "2) Check for Downed Power Lines" },
      {
        kind: "paragraph",
        body: "OSHA's general guidance is to treat every downed line as energized. For homeowners, that means:",
      },
      {
        kind: "bullets",
        bullets: [
          "Stay at least **35 feet** away.",
          "Keep children and pets back.",
          "**Don't** touch a line, anything in contact with a line, or step into nearby standing water.",
          "**Call 911 first, then PSO.**",
        ],
      },
      {
        kind: "paragraph",
        body: "Other lines — cable, internet, phone — can become energized when they fall across a power line, so don't try to sort out which is which.",
      },

      { kind: "h3", text: "3) Inspect the Weatherhead, Mast, and Meter" },
      {
        kind: "paragraph",
        body: "From the ground, check whether anything has changed since your pre-season inspection:",
      },
      {
        kind: "bullets",
        bullets: [
          "Is the mast bent or pulled away from the house?",
          "Is the meter base scorched, cracked, or hanging loose?",
          "Is the weatherhead intact, or did wind/branches damage it?",
          "Is conduit cracked or pulled apart?",
        ],
      },
      {
        kind: "paragraph",
        body: "Damage here is a homeowner responsibility past the point of attachment, and PSO won't reconnect service until it's repaired. We handle weatherhead, mast, and meter base repair as part of our [Electrical Repair](/services/electrical-repair) and [Wiring Repair](/services/wiring-repair) services.",
      },

      { kind: "h3", text: "4) Look at the Panel" },
      {
        kind: "paragraph",
        body: "Open the panel door (not the dead front behind it) and check for:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Tripped breakers.** Reset each one once. If it trips again, leave it off.",
          "**Burning or fish-like smell.** Stop. Call an electrician.",
          "**Buzzing, crackling, or hissing.** Stop. Call an electrician.",
          "**Heat or discoloration.** Stop. Call an electrician.",
          "**Water on the inside of the door.** Stop. Call an electrician.",
        ],
      },
      {
        kind: "paragraph",
        body: "A buzzing or scorched panel can be a precursor to an electrical fire and is the most common reason for a same-day Tulsa service call after a storm. A [Panel Upgrade](/services/panel-upgrades) is often the right answer for older or damaged equipment.",
      },

      { kind: "h3", text: "5) Test Outlets, GFCIs, and Lighting Circuits" },
      {
        kind: "paragraph",
        body: "Walk the house with a phone charger or a basic outlet tester. You're looking for:",
      },
      {
        kind: "bullets",
        bullets: [
          "Outlets that don't work",
          "GFCIs that need to be reset",
          "Switches that buzz, feel warm, or smell like plastic",
          "Flickering or dim lights, especially on the same circuit",
          "Appliances that won't power on, run hot, or sound different than usual",
        ],
      },
      {
        kind: "paragraph",
        body: "Single dead outlets are sometimes a tripped GFCI somewhere upstream — push **RESET** on every GFCI in the house. Persistent flicker, warm switches, or dead circuits after that are surge or wiring damage and need a licensed electrician.",
      },

      { kind: "h3", text: "6) Check the Sump Pump" },
      {
        kind: "paragraph",
        body: "Listen for it cycling. Pour a test bucket if you're not sure. If the pit is filling with no pump activity — *especially during a heavy rain event* — get on the phone with an electrician immediately. We'll prioritize the call.",
      },

      { kind: "h3", text: "7) Watch for Surge Damage Symptoms" },
      {
        kind: "paragraph",
        body: "Surge damage isn't always obvious. Common signs over the days after a storm:",
      },
      {
        kind: "bullets",
        bullets: [
          "HVAC blower runs but the compressor doesn't kick on",
          "Garage door opener acts erratically",
          "Smart home devices, thermostats, or doorbells offline",
          "LED bulbs flickering or buzzing",
          "Microwaves, ranges, or laundry equipment with display issues",
          "Wi-Fi router or modem unresponsive",
        ],
      },
      {
        kind: "paragraph",
        body: "If you see two or more of these, you likely took a surge hit. A licensed electrician can confirm with circuit testing and (if needed) thermal imaging. This is also a good time to add a panel-level SPD if you haven't yet — see [Surge Protection](/services/surge-protection).",
      },

      { kind: "h3", text: "8) Document Everything for Insurance" },
      {
        kind: "paragraph",
        body: "Photograph any damage, save service receipts, and keep a log of what's not working. Carriers move faster when you hand them a clean file.",
      },

      {
        kind: "embed",
        component: "StormSafetyChecklist",
        caption: "The whole spring storm electrical playbook on one page.",
      },

      {
        kind: "h2",
        text: "Who to Call: PSO, 911, or a Licensed Electrician",
        id: "who-to-call",
      },
      {
        kind: "paragraph",
        body: "A clean rule of thumb you can hand to anyone in the household:",
      },

      { kind: "h3", text: "Call 911 if:" },
      {
        kind: "bullets",
        bullets: [
          "You see a downed, sparking, or arcing power line",
          "A line is on a vehicle, fence, tree, or your house",
          "You see smoke or flames inside walls",
          "Anyone has been shocked or is in contact with electrical equipment",
          "You suspect carbon monoxide poisoning from a generator",
        ],
      },

      { kind: "h3", text: "Call PSO (1-833-776-6884) if:" },
      {
        kind: "bullets",
        bullets: [
          "The whole neighborhood is dark",
          "Streetlights are off",
          "You see a downed line or damaged pole from a safe distance",
          "A tree is on a service line and the line isn't your property",
          "You need an outage status or estimated restoration time",
        ],
      },

      { kind: "h3", text: "Call a licensed electrician (M Electric LLC) if:" },
      {
        kind: "bullets",
        bullets: [
          "Only your house is out",
          "You have **partial power** (some rooms work, some don't)",
          "The panel is buzzing, hot, scorched, or wet",
          "You smell burning plastic, fish, or ozone near outlets, panel, or appliances",
          "A breaker won't stay reset",
          "Outdoor equipment (mast, weatherhead, meter, conduit) is damaged",
          "You suspect surge damage to wiring or hard-wired equipment",
          "You want a post-storm safety inspection before re-energizing major systems",
        ],
      },
      {
        kind: "paragraph",
        body: "If you're unsure, [start with us](/contact). We'll tell you straight if it's a PSO issue, a 911 issue, or ours to handle.",
      },

      {
        kind: "h2",
        text: "Local Help — M Electric LLC Serves the Tulsa Area",
        id: "local-help",
      },
      {
        kind: "paragraph",
        body: "We're a licensed, insured Tulsa electrician, and we live and work in this weather right alongside you. Spring storm season is when our pre-storm inspections, panel and surge upgrades, and emergency calls all peak — and we prioritize:",
      },
      {
        kind: "bullets",
        bullets: [
          "Same-day diagnosis when only one house on the block is out",
          "Buzzing, hot, or scorched panels",
          "Damaged service equipment (mast, weatherhead, meter, conduit)",
          "Sump pump circuits during heavy rain events",
          "Suspected surge damage and post-storm electrical inspections",
        ],
      },
      {
        kind: "image",
        src: "/marshall-morgan-m-electric-van.jpg",
        alt: "Marshall Morgan, owner of M Electric, standing beside the M Electric service van in Tulsa, Oklahoma",
        caption:
          "Marshall personally answers the emergency line during storm events.",
      },
      {
        kind: "paragraph",
        body: "Service area: Tulsa and the surrounding metro. See our full [Tulsa Service Area](/service-areas/tulsa) page.",
      },
      {
        kind: "paragraph",
        body: "[Contact M Electric LLC](/contact) for emergency electrical repair, post-storm troubleshooting, surge protection, panel inspections, and generator consultations.",
      },
    ],
    faqs: [
      {
        q: "When should I get a pre-storm electrical inspection in Tulsa?",
        a: "Late winter to early spring — ideally February through early April — before the busy April/May/June severe weather window. A 60 to 90 minute inspection of the panel, service entrance, GFCIs, and surge protection catches the issues most likely to fail when storms arrive.",
      },
      {
        q: "Is whole-home surge protection worth it for a Tulsa home?",
        a: "For most homes, yes. Plug-in surge strips do not protect hard-wired equipment like HVAC, well pumps, ranges, or water heaters, and they do not address the steady microsurges from utility switching and motor loads. A panel-level surge protective device clamps spikes at the service entrance and is one of the highest-value electrical upgrades a Tulsa homeowner can make.",
      },
      {
        q: "What should I unplug before a thunderstorm?",
        a: "Sensitive electronics like TVs, computers, gaming consoles, modems and routers, smart speakers, medical equipment, and anything with a microprocessor. Per Ready.gov, do this before the storm, not during. Once thunder is overhead, avoid touching anything plugged into a wall.",
      },
      {
        q: "Why is my house the only one without power after the storm?",
        a: "Almost always because something between the utility lines and your panel was damaged — a service drop, weatherhead, mast, meter base, main breaker, or neutral. PSO does not service equipment past the meter. If only your house is out, you need a licensed electrician, not the utility.",
      },
      {
        q: "How far should a portable generator be from my house?",
        a: "The U.S. Consumer Product Safety Commission recommends placing portable generators at least 20 feet from the home, with the exhaust pointed away from windows, doors, and vents. Never run a generator in a garage, basement, crawl space, or on a porch, even with doors open.",
      },
      {
        q: "Should I reset a breaker that tripped during the storm?",
        a: "You can reset it once. If it holds and the equipment on that circuit works normally, you are done. If it trips again immediately or will not reset, leave it off — that is the breaker telling you there is a short, ground fault, or damaged wire downstream. Call a licensed electrician.",
      },
      {
        q: "Can lightning damage my home's wiring even if it does not strike directly?",
        a: "Yes. A nearby strike can induce a surge that travels through power lines, cable, phone, and buried conduit, and the damage often shows up as failed appliances, flickering circuits, dead outlets, or burned-out smart home devices over the following days. A panel-level surge protective device significantly reduces this risk, but no SPD can stop a direct strike — which is what dedicated lightning protection systems are for.",
      },
      {
        q: "What does a post-storm electrical inspection actually check?",
        a: "A licensed electrician inspects the service entrance (mast, weatherhead, meter, conduit), opens the panel for thermal imaging and visual checks, tests every GFCI and AFCI, walks the home for dead outlets and warm switches, verifies grounding and bonding, and documents any surge or water damage for your insurance carrier.",
      },
    ],
    sources: [
      {
        label: "PSO Outage Reporting and Map",
        url: "https://www.psoklahoma.com/outages/",
      },
      {
        label: "National Weather Service — Tulsa Forecast Office",
        url: "https://www.weather.gov/tsa/",
      },
      {
        label: "NWS Tulsa Severe Weather Information",
        url: "https://www.weather.gov/tsa/severe",
      },
      {
        label: "Ready.gov — Thunderstorms & Lightning",
        url: "https://www.ready.gov/thunderstorms-lightning",
      },
      {
        label: "OSHA — Power Line Safety Standards",
        url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1408",
      },
      {
        label: "CPSC — Carbon Monoxide Information Center",
        url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center",
      },
      {
        label: "ESFI — What Are Surge Protective Devices",
        url: "https://www.esfi.org/what-are-surge-protective-devices/",
      },
      {
        label: "ESFI — Lightning Electrical Safety",
        url: "https://www.esfi.org/lightning-electrical-safety/",
      },
      {
        label: "ESFI — Lightning Protection: Preventing a Direct Strike",
        url: "https://www.esfi.org/lightning-protection-preventing-a-direct-strike/",
      },
      {
        label: "City of Tulsa — Severe Weather Safety",
        url: "https://www.cityoftulsa.org/residents/public-safety/weather/",
      },
    ],
    related: ["what-to-do-after-power-outage-tulsa"],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "is-whole-home-surge-protection-worth-it-tulsa",
    title: "Is Whole-Home Surge Protection Worth It in Tulsa?",
    metaTitle: "Is Whole-Home Surge Protection Worth It in Tulsa?",
    metaDescription:
      "Tulsa storms, outages, and appliance loads can cause damaging power surges. Learn when whole-home surge protection is worth it.",
    excerpt:
      "Spring storms, summer AC cycling, and PSO switching events create power surges every week — but most homeowners only protect what's plugged into a power strip. A Tulsa-specific guide to what whole-home surge protection actually does, what it doesn't, and when it's worth it.",
    pillar: "code-safety",
    datePublished: "2026-05-07",
    dateModified: "2026-05-07",
    author: "marshall-morgan",
    heroImageId: "/eaton-spd-panel-installed.jpg",
    heroImageAlt:
      "Eaton Type 2 surge protective device installed alongside a residential electrical panel — the topical visual for whole-home surge protection in a Tulsa home",
    wordCount: 2400,
    body: [
      {
        kind: "paragraph",
        body: "If you live in Tulsa, your home's electrical system takes more abuse than most. Spring thunderstorms and lightning, summer heat that runs your AC nonstop, occasional ice storms, and the unavoidable Public Service Company of Oklahoma (PSO) switching events that follow every outage — all of those create power surges. Some are dramatic. Most are small, quiet, and cumulative.",
      },
      {
        kind: "paragraph",
        body: "This guide explains exactly what whole-home surge protection does, what it doesn't do, when it's worth it for a Tulsa homeowner, and when you should call a licensed electrician to install one as part of a broader electrical safety upgrade.",
      },
      {
        kind: "callout",
        variant: "quick-answer",
        title: "Quick Answer: Is Whole-Home Surge Protection Worth It?",
        body: "**Yes — for many Tulsa homes, whole-home surge protection is worth considering.** It's especially valuable if your home has expensive appliances, modern HVAC equipment, smart devices, a home office, an EV charger, or a history of storm-related outages.\n\nImportant nuance: whole-home surge protection significantly reduces the risk of surge damage, but it does not make a home lightning-proof. The Electrical Safety Foundation International (ESFI) is clear that **no surge protective device can handle a direct lightning strike**, and whole-home protection should be installed by a qualified electrician.\n\nConcerned about storm-related surge damage? [M Electric](/contact) can inspect your panel and recommend the right [whole-home surge protection setup](/services/surge-protection) for your Tulsa home.",
        jumpLinks: [
          { label: "What is a power surge", toId: "what-is-a-surge" },
          { label: "Causes", toId: "causes" },
          { label: "What it does", toId: "what-it-does" },
          { label: "Is it worth it", toId: "worth-it" },
          { label: "FAQ", toId: "faq" },
        ],
      },

      {
        kind: "h2",
        text: "What Is a Power Surge?",
        id: "what-is-a-surge",
      },
      { kind: "h3", text: "A Power Surge Is a Sudden Spike in Voltage" },
      {
        kind: "paragraph",
        body: "In simple terms, a power surge is a brief increase in electrical voltage above the normal level your home is designed for. That spike can damage, degrade, or outright destroy electronics, appliances, HVAC equipment, garage door openers, smart devices, and almost anything else that's plugged in or hard-wired.",
      },
      {
        kind: "paragraph",
        body: "ESFI describes surges as unwanted voltage increases that can damage, degrade, or destroy electronic equipment. The damage isn't always instant — and that's part of what makes surge events sneaky.",
      },
      { kind: "h3", text: "Surges Aren't Always Dramatic" },
      {
        kind: "paragraph",
        body: "When most homeowners hear \"power surge,\" they picture lightning. In reality, most surges are small and repeated, not single catastrophic events. They may not blow up your TV the moment they happen, but each one shortens the life of microprocessors, control boards, and motor windings. Over months and years, that adds up to appliances and electronics that fail \"early\" without an obvious cause.",
      },
      { kind: "h3", text: "Common Signs of Surge-Related Problems" },
      {
        kind: "paragraph",
        body: "Some warning signs to watch for around your Tulsa home:",
      },
      {
        kind: "bullets",
        bullets: [
          "Lights that flicker or briefly dim, especially during storms or when AC kicks on",
          "Buzzing outlets, switches, or devices",
          "Electronics that randomly shut off, lock up, or reboot",
          "GFCI outlets or breakers that trip more often than they used to",
          "A burning smell near outlets or equipment",
          "Failed appliance control boards (range, dishwasher, washer, dryer)",
          "Routers, TVs, computers, or smart-home equipment that fail in the days after a storm",
        ],
      },
      {
        kind: "paragraph",
        body: "If you ever notice **smoke, a burning smell, arcing, or a hot panel/outlet,** stop using the affected circuit immediately and call a licensed electrician. See [Electrical Repair](/services/electrical-repair).",
      },

      {
        kind: "h2",
        text: "What Causes Power Surges in Tulsa Homes?",
        id: "causes",
      },
      { kind: "h3", text: "Lightning and Spring Storms" },
      {
        kind: "paragraph",
        body: "Tulsa's location in eastern Oklahoma puts it squarely in spring storm country. Lightning, high winds, hail, and wind-blown debris all create conditions where surges spike across PSO's distribution network. A nearby strike doesn't have to hit your house to send a damaging voltage spike through power, cable, phone, or even buried conduit. The [National Weather Service Tulsa office](https://www.weather.gov/tsa/) issues hundreds of severe thunderstorm and tornado warnings every spring — each one is a surge risk for your home.",
      },
      { kind: "h3", text: "Power Coming Back After an Outage" },
      {
        kind: "paragraph",
        body: "When PSO restores a circuit, voltage doesn't always return cleanly. Brief over- and under-voltage events during restoration are common, and they're hard on sensitive electronics. This is why we tell Tulsa homeowners to **unplug sensitive devices before turning them back on after an outage**, and to wait a few minutes after restoration before powering up major equipment.",
      },
      { kind: "h3", text: "Large Appliances Cycling On and Off" },
      {
        kind: "paragraph",
        body: "Here's the part most homeowners don't know: most surges don't come from outside the home — they come from inside it.",
      },
      {
        kind: "paragraph",
        body: "NEMA estimates that **60–80% of power surges originate inside a home or business**, often when large motorized appliances start and stop. Common culprits include:",
      },
      {
        kind: "bullets",
        bullets: [
          "Central air conditioners and heat pumps",
          "Refrigerators and freezers",
          "Washing machines and dryers",
          "Well pumps and sump pumps",
          "Power tools",
          "Other large motors",
        ],
      },
      {
        kind: "paragraph",
        body: "Each cycle creates small voltage transients on your home's wiring. Plug-in surge strips can't see them — they only protect what's plugged into them. A panel-level device, by contrast, sits right at the source.",
      },
      { kind: "h3", text: "Utility-Side Grid Events" },
      {
        kind: "paragraph",
        body: "Routine utility activity also produces surges: capacitor switching, transformer operations, downed-line restoration, neighborhood reconnects after storms. None of this is unusual or unsafe for the grid — but every event is a small ride on your wiring.",
      },

      {
        kind: "h2",
        text: "What Does Whole-Home Surge Protection Actually Do?",
        id: "what-it-does",
      },
      { kind: "h3", text: "It's Installed at or Near the Electrical Panel" },
      {
        kind: "paragraph",
        body: "A whole-home surge protective device (SPD) is hard-wired at the main electrical panel or service equipment by a licensed electrician. ESFI is clear that this is professional work — whole-home surge protection must be installed by a qualified electrician, not a homeowner.",
      },
      {
        kind: "h3",
        text: "It Diverts Excess Voltage Away From the Home's Electrical System",
      },
      {
        kind: "paragraph",
        body: "When a voltage spike comes through the service entrance, the SPD provides a low-resistance path that absorbs and redirects the excess energy, keeping it from reaching your wiring, outlets, and equipment. The technical term is \"clamping\" — the device clamps voltage at a safe level for milliseconds at a time.",
      },
      { kind: "h3", text: "It Protects More Than Plug-In Electronics" },
      {
        kind: "paragraph",
        body: "This is the single biggest reason whole-home surge protection is worth talking about. A power strip can only protect what's plugged into it. Most of the expensive, surge-vulnerable equipment in a modern home **isn't plugged into a wall outlet at all**:",
      },
      {
        kind: "bullets",
        bullets: [
          "HVAC system",
          "Refrigerator (in many newer kitchens, hard-wired or behind built-in panels)",
          "Ovens and ranges",
          "Dishwashers",
          "Built-in washer and dryer hookups",
          "Garage door openers",
          "Built-in lighting and smart switches",
          "Hardwired smoke and CO alarms",
          "Home office circuits with multiple devices",
          "EV charger circuits (depending on configuration)",
        ],
      },
      {
        kind: "paragraph",
        body: "ESFI specifically distinguishes point-of-use surge protection from whole-home surge protection, noting that whole-home protection helps protect the entire electrical system, including large appliances, outlets, and light switches. That's the part power strips simply can't reach.",
      },
      {
        kind: "paragraph",
        body: "Want this for your home? See [Whole-Home Surge Protection](/services/surge-protection).",
      },
      {
        kind: "embed",
        component: "SurgeProtectionCoverage",
        caption:
          "What's actually behind the panel — and why a power strip can't reach most of it.",
      },

      {
        kind: "h2",
        text: "Whole-Home Surge Protection vs. Power Strips",
        id: "vs-power-strips",
      },
      { kind: "h3", text: "Power Strips Are Not the Same as Surge Protectors" },
      {
        kind: "paragraph",
        body: "Walk into any hardware store and you'll see both products on the same shelf. Most homeowners use the terms interchangeably. They shouldn't. ESFI specifically notes that **power strips and surge protectors are not the same**. A basic power strip is just an extension cord with extra outlets — it offers no surge clamping at all.",
      },
      {
        kind: "h3",
        text: "Plug-In Surge Protectors Only Protect What's Plugged Into Them",
      },
      {
        kind: "paragraph",
        body: "Quality plug-in surge protectors are useful — for TVs, computers, routers, gaming consoles, and home office equipment. But by design, they protect only the devices physically plugged into them. They do nothing for hard-wired HVAC, kitchen appliances, garage door openers, smart switches, or your panel itself.",
      },
      { kind: "h3", text: "The Best Setup Is Layered Protection" },
      {
        kind: "paragraph",
        body: "ESFI recommends combining device types: a Type 1 or Type 2 SPD at the service or panel level, plus Type 3 (point-of-use) protection for sensitive electronics. In practical terms, that means:",
      },
      {
        kind: "bullets",
        bullets: [
          "**Whole-home surge protection at the panel** — first line of defense.",
          "**Quality point-of-use surge protectors** for TVs, computers, routers, and home office equipment.",
          "**Proper grounding and bonding** at the service.",
          "**An updated panel and safe wiring** to make all of the above effective.",
          "**Smart storm habits** — unplug sensitive electronics before lightning is overhead, not during.",
        ],
      },
      {
        kind: "paragraph",
        body: "If you're not sure your current power strips are actually protecting anything, [M Electric](/contact) can inspect your panel, grounding, and surge protection options. See [Whole-Home Surge Protection](/services/surge-protection).",
      },
      {
        kind: "image",
        src: "/eaton-chspt2ultra-spd.jpg",
        alt: "Eaton CHSPT2ULTRA Type 2 surge protective device — installs at or near the residential electrical panel",
        caption:
          "An Eaton CHSPT2ULTRA Type 2 SPD — the class of device that mounts to or alongside a residential panel.",
      },

      {
        kind: "h2",
        text: "What Whole-Home Surge Protection Does Not Do",
        id: "limitations",
      },
      {
        kind: "paragraph",
        body: "This section matters as much as the rest. Surge protection is a fantastic tool — but it isn't magic, and it isn't a substitute for the rest of a healthy electrical system.",
      },
      { kind: "h3", text: "It Does Not Make Your Home Lightning-Proof" },
      {
        kind: "paragraph",
        body: "Per ESFI, no surge protective device can handle a direct lightning strike. SPDs are engineered to absorb induced surges (from nearby strikes, utility events, or appliance cycling) — not the energy of a direct hit. Homes with very high lightning exposure may also benefit from a dedicated **lightning protection system** (the rooftop air terminals you sometimes see, often called \"lightning rods\"), which is different from a panel SPD and serves a different purpose.",
      },
      { kind: "h3", text: "It Does Not Fix Bad Wiring or an Overloaded Panel" },
      {
        kind: "paragraph",
        body: "If your home has outdated wiring, loose neutrals, undersized service, missing ground rods, or chronically overloaded circuits, a surge protector cannot compensate for those issues. Address the foundation first — see [Wiring Repair](/services/wiring-repair) and [Panel Upgrades](/services/panel-upgrades).",
      },
      {
        kind: "h3",
        text: "It Does Not Replace Generator Safety or Backup Power Planning",
      },
      {
        kind: "paragraph",
        body: "Surge protection and generators solve different problems. An SPD reduces damage during voltage events; a generator keeps you running through outages. Both have a place in a serious storm-prep plan. See [Generator Installation](/services/generator-installation).",
      },
      { kind: "h3", text: "It Does Not Last Forever" },
      {
        kind: "paragraph",
        body: "Every SPD has a finite \"absorption capacity.\" After enough surge events — or one big one — the device may need replacement. Most quality units have indicator lights or status LEDs that tell you when they've worn out. Ask your electrician how to read them, and check the device after every major Tulsa storm.",
      },

      {
        kind: "h2",
        text: "Is Whole-Home Surge Protection Worth It for Your Tulsa Home?",
        id: "worth-it",
      },
      {
        kind: "paragraph",
        body: "The honest answer: it depends on your home, your equipment, and your tolerance for surprise repair bills. Here are the situations where it's most clearly worth it.",
      },
      { kind: "h3", text: "You Have Expensive Electronics" },
      {
        kind: "paragraph",
        body: "Most modern households now have thousands of dollars of microprocessor-driven equipment connected to the same wiring as a 1995-era refrigerator:",
      },
      {
        kind: "bullets",
        bullets: [
          "Home office setup (computers, monitors, docks)",
          "Gaming systems and consoles",
          "High-end TVs and AV gear",
          "Wi-Fi routers and mesh systems",
          "Security cameras and smart locks",
          "Smart thermostats",
          "Smart appliances",
        ],
      },
      {
        kind: "paragraph",
        body: "Replacing any one of those typically costs more than installing a whole-home SPD.",
      },
      { kind: "h3", text: "You Have Modern HVAC Equipment" },
      {
        kind: "paragraph",
        body: "A modern variable-speed compressor or inverter-driven heat pump can have a control board that costs $400–$1,500 to replace, plus labor. HVAC equipment is one of the most surge-vulnerable hard-wired systems in a Tulsa home, especially during summer when it's running constantly.",
      },
      { kind: "h3", text: "You Have Frequent Outages or Flickering Lights" },
      {
        kind: "paragraph",
        body: "Recurrent flickers and trips aren't normal. They're often a sign of grid issues, wiring problems, or equipment that's near end-of-life. Surge protection is part of the answer, but the symptom itself usually deserves an inspection. Don't just bandage it.",
      },
      { kind: "h3", text: "You Live in an Older Tulsa Home" },
      {
        kind: "paragraph",
        body: "Older homes — especially those built before grounding requirements changed — may have ungrounded outlets, two-prong receptacles, aluminum branch wiring, or outdated panels. Surge protection in those homes works best when paired with a grounding upgrade, panel inspection, or wiring repair. See [Panel Upgrades](/services/panel-upgrades) and [Wiring Repair](/services/wiring-repair).",
      },
      { kind: "h3", text: "You're Planning an EV Charger or Generator Install" },
      {
        kind: "paragraph",
        body: "Both upgrades dramatically increase the value of having clean, well-protected power. If you're planning either one this year, fold surge protection and a panel review into the same project. See [Generator Installation](/services/generator-installation).",
      },

      {
        kind: "h2",
        text: "When Surge Protection May Not Be Enough by Itself",
        id: "not-enough",
      },
      {
        kind: "paragraph",
        body: "Sometimes a whole-home SPD is the right product, but it isn't the *whole* answer. Here are the situations where surge protection should be paired with other electrical work.",
      },
      { kind: "h3", text: "Your Panel Is Outdated or Overloaded" },
      {
        kind: "paragraph",
        body: "Common signs:",
      },
      {
        kind: "bullets",
        bullets: [
          "Breakers trip often",
          "Lights dim noticeably when appliances start",
          "Panel feels warm or has a faint burning smell",
          "Visible scorching, rust, or water staining inside the panel door",
          "No room for new circuits",
          "Older fuse box, or a panel from a brand widely flagged by insurers as unsafe",
        ],
      },
      {
        kind: "paragraph",
        body: "If any of those describe your panel, surge protection should be part of a [Panel Upgrade](/services/panel-upgrades), not a workaround.",
      },
      { kind: "h3", text: "Your Home Has Grounding Problems" },
      {
        kind: "paragraph",
        body: "Surge protection depends on a working grounding electrode system. If your ground rods are missing, corroded, undersized, or improperly bonded, the SPD has nowhere to send absorbed energy. A licensed electrician can verify grounding during the same visit they evaluate surge protection.",
      },
      { kind: "h3", text: "Your Outlets or Wiring Are Damaged" },
      {
        kind: "paragraph",
        body: "Warm, loose, dead, discolored, sparking, or scorched outlets aren't a \"live with it\" situation. They need [Electrical Repair](/services/electrical-repair) or [Wiring Repair](/services/wiring-repair) before any surge upgrade is meaningful.",
      },

      {
        kind: "h2",
        text: "What to Expect When an Electrician Installs Whole-Home Surge Protection",
        id: "what-to-expect",
      },
      {
        kind: "paragraph",
        body: "This is professional work — not a DIY project. Here's what a typical M Electric install looks like.",
      },
      { kind: "h3", text: "Step 1: Panel and Grounding Inspection" },
      {
        kind: "paragraph",
        body: "Before recommending a device, the electrician evaluates:",
      },
      {
        kind: "bullets",
        bullets: [
          "Panel age, brand, and condition",
          "Available space for the SPD (some panels need a sub-panel adapter or dedicated breaker space)",
          "Service type (overhead or underground), main breaker rating, and amperage",
          "Grounding electrode system and bonding",
          "Any existing safety issues that need to be resolved first",
        ],
      },
      { kind: "h3", text: "Step 2: Selecting the Right Surge Protection Device" },
      {
        kind: "paragraph",
        body: "The right device depends on your panel, electrical loads, exposure, and protection goals. Type 1 SPDs install on the line side of the main breaker (sometimes outside near the meter) and offer the strongest protection against externally generated surges including nearby lightning. Type 2 SPDs install on the load side, inside the main panel. Many homes do best with one of each, plus point-of-use Type 3 devices on sensitive electronics.",
      },
      { kind: "h3", text: "Step 3: Installation at the Panel" },
      {
        kind: "paragraph",
        body: "The electrician shuts off the main, hard-wires the SPD to a dedicated breaker (or to the line side, depending on type), torques connections to spec, and verifies grounding. This typically takes 30–60 minutes for the device itself, longer if other work is being done at the same time.",
      },
      { kind: "h3", text: "Step 4: Testing and Homeowner Walkthrough" },
      {
        kind: "paragraph",
        body: "Before leaving, the electrician should:",
      },
      {
        kind: "bullets",
        bullets: [
          "Confirm the device is energized and its status indicators are normal",
          "Walk you through the indicator lights and what to check after storms",
          "Document the install for warranty purposes",
          "Recommend a re-check schedule, typically annually and after any major storm",
        ],
      },
      {
        kind: "paragraph",
        body: "[Schedule a surge protection evaluation](/contact) with M Electric before the next Tulsa storm season.",
      },

      {
        kind: "h2",
        text: "How Much Does Whole-Home Surge Protection Cost in Tulsa?",
        id: "cost",
      },
      { kind: "h3", text: "Cost Depends on the Home and Panel" },
      {
        kind: "paragraph",
        body: "Pricing varies based on:",
      },
      {
        kind: "bullets",
        bullets: [
          "Panel type, brand, and condition",
          "Whether panel space is available (or whether a sub-panel/dedicated breaker is needed)",
          "Grounding condition",
          "Type of device (Type 1, Type 2, or both)",
          "Whether other work is being done at the same time (panel upgrade, EV charger, generator)",
          "Warranty tier",
        ],
      },
      {
        kind: "paragraph",
        body: "For an exact quote, [Contact M Electric](/contact) — we'll give you a flat number after the panel and grounding check.",
      },
      { kind: "h3", text: "Compare the Cost to Replacement" },
      {
        kind: "paragraph",
        body: "Surge protection is one of the few electrical upgrades that pays for itself the first time it does its job. Compare a typical whole-home SPD install to the cost of replacing what it protects:",
      },
      {
        kind: "bullets",
        bullets: [
          "HVAC control board: $400–$1,500 (plus labor and downtime)",
          "Refrigerator: $1,500–$4,000",
          "Washer or dryer: $700–$2,000",
          "Smart TV: $500–$3,000",
          "Home office desktop, monitors, dock: $1,000–$5,000",
          "Wi-Fi router, mesh system, security NVR: $300–$1,500",
          "Garage door opener: $300–$700",
          "Smart switches and home automation hubs: $500–$2,000",
        ],
      },
      {
        kind: "paragraph",
        body: "One surge event can easily total more than the device, the install, and several years of inspections combined.",
      },
      { kind: "h3", text: "Ask About Warranties and Equipment Ratings" },
      {
        kind: "paragraph",
        body: "Before saying yes to any product, ask:",
      },
      {
        kind: "bullets",
        bullets: [
          "What is the surge current rating (in kA)?",
          "What is the clamping voltage?",
          "What's the manufacturer warranty? Is there a connected-equipment warranty?",
          "How do I read the status indicator?",
          "After a major storm, what should I check?",
        ],
      },
      {
        kind: "paragraph",
        body: "A good Tulsa electrician will answer all of those without hesitation.",
      },

      {
        kind: "h2",
        text: "Bottom Line: Should Tulsa Homeowners Install Whole-Home Surge Protection?",
        id: "bottom-line",
      },
      {
        kind: "paragraph",
        body: "For many Tulsa homes, whole-home surge protection is a smart preventive upgrade — especially if you have expensive electronics, modern HVAC equipment, smart devices, a home office, or recurring storm-related outages. The cost is modest relative to what it protects, and the install takes a single appointment.",
      },
      {
        kind: "paragraph",
        body: "But it should be installed as part of a complete electrical safety approach: an updated panel, proper grounding and bonding, safe wiring, quality point-of-use surge protectors for sensitive electronics, and smart storm habits during severe weather.",
      },
      {
        kind: "image",
        src: "/marshall-morgan-m-electric-van.jpg",
        alt: "Marshall Morgan, owner of M Electric, standing beside the M Electric service van in Tulsa, Oklahoma",
        caption:
          "Local, licensed, and same-day for Tulsa-area homeowners.",
      },
      {
        kind: "paragraph",
        body: "Want to know whether whole-home surge protection makes sense for your home? [M Electric](/contact) can inspect your panel, check your grounding, and recommend the right setup for your [Tulsa property](/service-areas/tulsa).",
      },
    ],
    faqs: [
      {
        q: "Is whole-home surge protection worth it in Tulsa?",
        a: "Yes, it is worth considering for many Tulsa homes. Storms, outages, utility switching, and large appliances cycling can all create damaging surges, and whole-home protection covers hard-wired equipment that plug-in strips cannot reach. It is especially useful for homes with expensive electronics, HVAC equipment, smart devices, EV chargers, or home office setups.",
      },
      {
        q: "Does whole-home surge protection protect against lightning?",
        a: "It can significantly reduce damage from many surge events, including those induced by nearby lightning, but it cannot guarantee protection from a direct lightning strike. ESFI states that no surge protective device can handle a direct lightning strike.",
      },
      {
        q: "Do I still need plug-in surge protectors?",
        a: "Yes. ESFI recommends a layered approach: whole-home surge protection at the panel plus quality point-of-use surge protectors for sensitive electronics like computers, TVs, routers, and gaming systems.",
      },
      {
        q: "Are power strips the same as surge protectors?",
        a: "No. Many power strips are simply extension cords with extra outlets and provide no surge protection. ESFI specifically notes that power strips and surge protectors are not the same.",
      },
      {
        q: "Can I install a whole-home surge protector myself?",
        a: "No. Whole-home surge protection connects at or near the main electrical panel and must be installed by a qualified electrician. ESFI identifies whole-home surge protection as professional work.",
      },
      {
        q: "How do I know if my home needs surge protection?",
        a: "Consider it if you have frequent outages, flickering lights, expensive electronics, modern HVAC equipment, smart devices, an EV charger, or an older electrical panel. A licensed electrician can inspect your panel and grounding and recommend the right setup.",
      },
      {
        q: "Will surge protection stop breakers from tripping?",
        a: "No. Surge protection is not designed to fix overloaded circuits, bad wiring, or a failing panel. If breakers keep tripping, you need an electrical inspection — not just a surge protective device.",
      },
      {
        q: "How long does a whole-home surge protector last?",
        a: "It depends on the device and the number and size of surge events it absorbs. Many units have indicator lights that signal when they have worn out and need replacement. Ask your electrician how to monitor the device, especially after major Tulsa storms.",
      },
    ],
    sources: [
      {
        label: "ESFI — Surge Protective Devices",
        url: "https://www.esfi.org/surge-protective-devices/",
      },
      {
        label: "ESFI — Home Surge Protective Devices",
        url: "https://www.esfi.org/home-surge-protective-devices/",
      },
      {
        label: "ESFI — What Are Surge Protective Devices",
        url: "https://www.esfi.org/what-are-surge-protective-devices/",
      },
      {
        label: "ESFI — Lightning Electrical Safety",
        url: "https://www.esfi.org/lightning-electrical-safety/",
      },
      {
        label: "ESFI — Lightning Protection: Preventing a Direct Strike",
        url: "https://www.esfi.org/lightning-protection-preventing-a-direct-strike/",
      },
      {
        label:
          "Schneider Electric — Pros and Cons of Whole House Surge Protectors",
        url: "https://blog.se.com/sustainability/2022/04/08/what-are-the-pros-and-cons-of-whole-house-surge-protectors/",
      },
      {
        label: "PSO — Outage Reporting and Map",
        url: "https://www.psoklahoma.com/outages/",
      },
      {
        label: "National Weather Service — Tulsa Forecast Office",
        url: "https://www.weather.gov/tsa/",
      },
      {
        label: "Ready.gov — Thunderstorms & Lightning",
        url: "https://www.ready.gov/thunderstorms-lightning",
      },
    ],
    related: [
      "spring-storm-electrical-checklist-tulsa",
      "what-to-do-after-power-outage-tulsa",
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "signs-you-need-electrical-panel-upgrade-tulsa",
    title: "Signs Your Tulsa Home Needs an Electrical Panel Upgrade",
    metaTitle: "Signs You Need a Panel Upgrade in Tulsa | M Electric",
    metaDescription:
      "Breakers tripping, flickering lights, or adding new appliances? Learn the signs your Tulsa home may need an electrical panel upgrade.",
    excerpt:
      "Tulsa neighborhoods are full of homes built when 100-amp service was generous. Ten warning signs that your panel is on the way out, what 100A vs 200A really means, and what to expect during a panel upgrade.",
    pillar: "panel-load",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
    author: "marshall-morgan",
    heroImageId: "photo-1758101755915-462eddc23f57",
    heroImageAlt:
      "Electrician testing a residential breaker panel with a multimeter — the kind of inspection that answers most panel-upgrade questions",
    wordCount: 2900,
    body: [
      {
        kind: "paragraph",
        body: "Most Tulsa homeowners don't think about their electrical panel until something tells them to: a breaker that won't stay reset, lights that dim every time the AC kicks on, or a new EV charger, generator, or appliance that pushes the home past what the existing panel was built for.",
      },
      {
        kind: "paragraph",
        body: "That's especially common here. A lot of Tulsa neighborhoods are full of homes built when 100-amp service was generous, and many of those panels have been quietly carrying the extra load of remodels, additions, and modern equipment for decades. Eventually they catch up.",
      },
      {
        kind: "paragraph",
        body: "This guide walks through the ten clearest signs an electrical panel upgrade is on the horizon, what 100-amp vs. 200-amp service really means, and what to expect when a licensed electrician handles the work.",
      },
      {
        kind: "callout",
        variant: "quick-answer",
        title: "Quick Answer: When Does a Tulsa Home Need a Panel Upgrade?",
        body: "A Tulsa home may need an electrical panel upgrade if:\n\n- Breakers trip often (or won't stay reset)\n- Lights dim when appliances start\n- The panel feels warm, buzzes, crackles, or smells burned\n- The home still has a fuse box or older panel\n- There's no room for new circuits\n- You're adding a major load — EV charger, generator, hot tub, HVAC equipment, workshop, addition, or remodel\n- You're correcting unsafe wiring or bringing an older home up to modern needs\n\n**Important safety note:** Don't remove the panel cover or try to inspect anything inside it. If you see scorch marks, hear buzzing, smell burning, or feel heat at the panel, stop and call a licensed electrician.\n\nIf your panel is buzzing, hot, damaged, or breakers keep tripping, [schedule a panel inspection](/services/panel-upgrades) with M Electric.",
        jumpLinks: [
          { label: "10 warning signs", toId: "warning-signs" },
          { label: "100A vs 200A", toId: "amp-service" },
          { label: "What to expect", toId: "what-to-expect" },
          { label: "FAQ", toId: "faq" },
        ],
      },

      {
        kind: "embed",
        component: "PanelUpgradeWarningSigns",
        caption:
          "If you see two or more of these in your home, it's time for a panel inspection.",
      },

      {
        kind: "h2",
        text: "What Does an Electrical Panel Do?",
        id: "what-it-does",
      },
      {
        kind: "h3",
        text: "The Panel Is the Distribution Center for Your Home's Power",
      },
      {
        kind: "paragraph",
        body: "Your electrical panel takes the power coming in from PSO and distributes it across the circuits that feed every outlet, switch, and hard-wired appliance in the house. Each breaker is designed to protect a specific circuit by shutting off power when there's too much load, a short, a ground fault, or another unsafe condition. When the panel is working correctly, you barely notice it. When it isn't, you start to notice it everywhere.",
      },
      { kind: "h3", text: "A Panel Upgrade Is Not Just \"More Breakers\"" },
      {
        kind: "paragraph",
        body: "A real panel upgrade can involve any combination of:",
      },
      {
        kind: "bullets",
        bullets: [
          "Replacing the electrical panel itself (the box, breakers, and bus bars)",
          "Increasing service capacity (for example, going from 100-amp to 200-amp)",
          "Reworking circuits that were over-loaded or improperly combined",
          "Updating grounding and bonding to current code",
          "Coordinating permits and inspections with the local jurisdiction",
          "Coordinating with PSO if the service drop or meter base is involved",
          "Making physical room for modern equipment (surge protective devices, EV charger circuits, generator transfer switch)",
        ],
      },
      {
        kind: "paragraph",
        body: "That's why \"just swap the panel\" estimates from anyone other than a licensed electrician should be treated with caution.",
      },
      {
        kind: "h3",
        text: "Panel Upgrades Should Be Handled by Licensed Electricians",
      },
      {
        kind: "paragraph",
        body: "This is not a DIY project. Panel work involves service equipment, utility coordination, permits, inspection, and serious shock and fire risk. The work also has long-term implications for safety, insurance, and resale. See [Panel Upgrades](/services/panel-upgrades) for an overview of how M Electric handles this work in Tulsa.",
      },

      {
        kind: "h2",
        text: "Sign #1 — Your Breakers Keep Tripping",
        id: "warning-signs",
      },
      { kind: "h3", text: "Occasional Trips Can Happen — Repeated Trips Are Different" },
      {
        kind: "paragraph",
        body: "A breaker that trips once and resets cleanly is doing exactly what it's designed to do: respond to a temporary overload or fault. A breaker that **trips repeatedly, won't stay reset, or trips immediately when reset** is telling you something else is going on.",
      },
      { kind: "h3", text: "Common Causes of Repeated Breaker Trips" },
      {
        kind: "bullets",
        bullets: [
          "An overloaded circuit (too many devices on one breaker)",
          "A faulty appliance pulling current it shouldn't",
          "Damaged or aged wiring",
          "A breaker that's worn out and tripping below its rating",
          "Panel capacity issues — the home is asking for more than the service can deliver",
          "Moisture or storm damage inside the panel or on outdoor circuits",
        ],
      },
      { kind: "h3", text: "Don't Keep Resetting the Breaker" },
      {
        kind: "paragraph",
        body: "Repeatedly resetting the same breaker, especially one that trips immediately, can be dangerous if the underlying problem is still live. Reset once. If it trips again, leave it off and call a licensed electrician.",
      },
      {
        kind: "paragraph",
        body: "If a breaker keeps tripping after you reset it once, contact M Electric for [electrical troubleshooting](/services/electrical-repair).",
      },

      {
        kind: "h2",
        text: "Sign #2 — Lights Flicker or Dim When Appliances Turn On",
        id: "sign-2",
      },
      { kind: "h3", text: "Brief Dimming Can Be a Load Issue" },
      {
        kind: "paragraph",
        body: "A momentary dim when a high-draw motor starts isn't always a panel problem — most homes show some sag when an AC compressor or large motor kicks on. But if the dimming is **frequent, severe, or affects multiple rooms**, that's worth looking into.",
      },
      { kind: "h3", text: "Pay Attention When These Appliances Start" },
      {
        kind: "bullets",
        bullets: [
          "Central air conditioner or heat pump",
          "Furnace blower",
          "Refrigerator or freezer",
          "Microwave (especially older units)",
          "Washer and dryer",
          "Sump or well pump",
          "Power tools and shop equipment",
          "EV charger",
        ],
      },
      { kind: "h3", text: "Flickering in Multiple Rooms Is More Concerning" },
      {
        kind: "paragraph",
        body: "When flickering is isolated to one circuit, the issue is usually local — a loose neutral, a worn switch, or an aging fixture. When it's **happening throughout the house**, the cause may be the panel, the service drop, the main breaker, or even a utility-side issue. That deserves a real diagnosis. See [Wiring Repair](/services/wiring-repair) and [Panel Upgrades](/services/panel-upgrades).",
      },

      {
        kind: "h2",
        text: "Sign #3 — Your Panel Feels Warm, Buzzes, or Smells Burned",
        id: "sign-3",
      },
      { kind: "h3", text: "Your Panel Should Not Be Hot or Noisy" },
      {
        kind: "paragraph",
        body: "A faint hum from a 200-amp main is normal. **A loud buzz, crackle, pop, or noticeable heat** is not. Neither is a fishy or plastic-burning smell anywhere near the panel.",
      },
      {
        kind: "paragraph",
        body: "These symptoms typically point to one of: a loose connection arcing inside the panel, a failing breaker, water that's gotten into the enclosure, or surge damage from a recent storm. Any of those can develop into a serious fire risk.",
      },
      { kind: "h3", text: "Stop Using Affected Circuits" },
      {
        kind: "paragraph",
        body: "If you can identify which circuit is involved (a single warm switch, a buzzing outlet, or one zone of the house with strange behavior), shut it off at the breaker if you can do so safely. If the **panel itself** is the problem, leave it alone — don't open it, don't try to find which breaker.",
      },
      { kind: "h3", text: "Don't Open the Panel Cover" },
      {
        kind: "paragraph",
        body: "Homeowners should not remove the panel cover (the dead front behind the door) or touch anything inside the panel. The bus bars and breaker connections behind that cover are live, and the energy they carry is dangerous.",
      },
      {
        kind: "paragraph",
        body: "If your panel smells burned, feels hot, or makes crackling sounds, [contact M Electric](/contact) right away.",
      },

      {
        kind: "h2",
        text: "Sign #4 — You Have an Older Fuse Box or Outdated Panel",
        id: "sign-4",
      },
      { kind: "h3", text: "Fuse Boxes and Old Panels Were Not Designed for Today's Loads" },
      {
        kind: "paragraph",
        body: "Many Tulsa homes built before the 1970s started with fuse boxes; many built in the 1970s and 1980s have panels that haven't been touched since. Modern households put significantly more electrical demand on a service than those panels were originally engineered to deliver — central AC, heat pumps, induction ranges, multiple refrigerators, home offices, smart devices, EV chargers, and entertainment systems all pull current that wasn't on the table in 1972.",
      },
      { kind: "h3", text: "Some Older Panels Can Create Insurance or Resale Concerns" },
      {
        kind: "paragraph",
        body: "Without naming specific brands, certain panels manufactured decades ago have come under widespread scrutiny from home inspectors and insurance carriers due to documented reliability concerns. If your home is older and you've never had your panel formally evaluated, ask a licensed electrician to identify the panel make and model and tell you whether it's one of those.",
      },
      {
        kind: "paragraph",
        body: "This question routinely comes up during home inspections, insurance reviews, and remodel permitting, and finding the answer before a buyer or carrier finds it for you is almost always cheaper.",
      },
      { kind: "h3", text: "Older Tulsa Homes Should Be Inspected Before Major Upgrades" },
      {
        kind: "paragraph",
        body: "If your home is older — especially in mid-century neighborhoods or properties that have been remodeled by multiple owners — ask a licensed electrician to inspect the panel and a representative sample of branch circuits before you start any major project. See [Panel Upgrades](/services/panel-upgrades) and [Wiring Repair](/services/wiring-repair).",
      },

      {
        kind: "h2",
        text: "Sign #5 — You're Adding a Major New Electrical Load",
        id: "sign-5",
      },
      {
        kind: "paragraph",
        body: "This is the most common reason a homeowner with no obvious problems calls us about their panel: they're planning something new, and the project pushes the system past what it was sized for.",
      },
      { kind: "h3", text: "EV Chargers Often Require Panel Capacity Planning" },
      {
        kind: "paragraph",
        body: "Level 2 EV chargers typically need a dedicated 240-volt circuit (commonly 40–60 amps) and enough headroom on the service to support them without nuisance trips. A load calculation is the right way to find out whether your existing panel can absorb that addition or whether an upgrade should come first. See [Panel Upgrades](/services/panel-upgrades).",
      },
      { kind: "h3", text: "Generators Require Proper Transfer Equipment" },
      {
        kind: "paragraph",
        body: "A standby generator — or even a portable generator with an interlock or transfer switch — needs careful planning at the panel. Backfeeding a generator into a wall outlet is dangerous to PSO line crews and to the home, and \"just running an extension cord\" is not a permanent solution. See [Generator Installation](/services/generator-installation).",
      },
      { kind: "h3", text: "Remodels and Additions Can Outgrow the Existing Panel" },
      {
        kind: "paragraph",
        body: "Other common projects that push panel capacity:",
      },
      {
        kind: "bullets",
        bullets: [
          "Kitchen remodel with new induction range or double oven",
          "Bathroom remodel with heated floors or a tankless water heater",
          "Garage conversion to living space",
          "Home addition or finished basement",
          "Detached shop or workshop",
          "Outdoor kitchen",
          "Hot tub or spa",
          "Pool equipment",
          "Dedicated home office buildout",
          "Additional HVAC zone or mini-split system",
        ],
      },
      {
        kind: "paragraph",
        body: "Any of those can reveal a panel that's been quietly maxed out for years. An evaluation up front saves you from a half-finished project waiting on an electrician.",
      },
      {
        kind: "paragraph",
        body: "Planning an EV charger, generator, remodel, or new appliance? Have your panel evaluated first so the project is safe and properly sized. → [Contact M Electric](/contact).",
      },

      {
        kind: "h2",
        text: "Sign #6 — You Don't Have Enough Breaker Space",
        id: "sign-6",
      },
      { kind: "h3", text: "A Full Panel Limits Upgrades" },
      {
        kind: "paragraph",
        body: "Open up the panel door and look at the layout (don't open the dead front behind it). If every slot is filled, adding any new circuit becomes more involved than just snapping in another breaker.",
      },
      { kind: "h3", text: "Double-Tapped or Crowded Panels Need Professional Review" },
      {
        kind: "paragraph",
        body: "Sometimes a previous installer added wires to existing breakers in ways that weren't intended by the manufacturer (often called \"double-tapping\" in the trade), or the panel has been modified over time in ways that aren't quite right. We'll often spot this during a routine evaluation. The fix isn't always a full upgrade — but it always requires a licensed electrician, not a homeowner with a screwdriver.",
      },
      { kind: "h3", text: "Subpanel vs. Full Panel Upgrade" },
      {
        kind: "paragraph",
        body: "The right answer isn't always to replace the main panel. Sometimes a **subpanel** — fed from the main and serving a specific area like a garage, workshop, or addition — solves the problem at a fraction of the cost. Other times, the main service is genuinely too small and a full upgrade is the only path forward. A load calculation tells the story.",
      },

      {
        kind: "h2",
        text: "Sign #7 — Your Home Still Has Two-Prong Outlets or Ungrounded Circuits",
        id: "sign-7",
      },
      { kind: "h3", text: "Two-Prong Outlets Often Point to Older Wiring" },
      {
        kind: "paragraph",
        body: "Not every two-prong outlet means a panel upgrade is required. But it's a strong signal that the home's electrical system was installed before modern grounding requirements, and it's worth a real evaluation. The wiring behind those outlets may be original, the grounding system may not be what current code calls for, and certain protective devices (GFCI, AFCI, surge protection) work best on a properly grounded system.",
      },
      { kind: "h3", text: "Modern Appliances and Electronics Need Safer, Grounded Circuits" },
      {
        kind: "paragraph",
        body: "Home offices, sensitive electronics, modern appliances, and any kind of surge protection all depend on a properly functioning, grounded electrical system. Surge protection, in particular, has nowhere to send absorbed energy if the grounding electrode system isn't intact.",
      },
      { kind: "h3", text: "Panel Upgrades and Rewiring Sometimes Go Together" },
      {
        kind: "paragraph",
        body: "For older homes, the cleanest solution is often a coordinated project: panel work, grounding updates, targeted rewiring of problem circuits, and new circuits where needed. See [Wiring Repair](/services/wiring-repair).",
      },

      {
        kind: "h2",
        text: "Sign #8 — You're Relying on Extension Cords or Power Strips",
        id: "sign-8",
      },
      { kind: "h3", text: "Extension Cords Are Not a Permanent Wiring Solution" },
      {
        kind: "paragraph",
        body: "If a room doesn't have enough outlets and you've solved that with a permanent extension cord or a daisy-chained power strip, that's a usability and safety issue — not a layout preference. Cords aren't designed for permanent in-wall or under-rug use, and many fires start exactly there.",
      },
      { kind: "h3", text: "Overloaded Outlets Can Trip Breakers or Overheat" },
      {
        kind: "paragraph",
        body: "The two most common consequences of an overloaded outlet are nuisance breaker trips and slow-cooking damage to the outlet itself. Loose connections, scorched receptacle backs, and warm faceplates are all warning signs.",
      },
      { kind: "h3", text: "New Circuits May Reveal the Need for a Panel Upgrade" },
      {
        kind: "paragraph",
        body: "Adding outlets or dedicated appliance circuits is a normal job — but if your panel is already full or your service is undersized, that \"small\" project may turn into a panel evaluation. Better to find that out at the planning stage than mid-install. See [Electrical Repair](/services/electrical-repair).",
      },

      {
        kind: "h2",
        text: "Sign #9 — You Have Storm-Related Electrical Problems",
        id: "sign-9",
      },
      { kind: "h3", text: "Tulsa Storms Expose Weak Electrical Systems" },
      {
        kind: "paragraph",
        body: "Spring thunderstorms, ice storms, lightning, wind-blown rain, and the inevitable PSO outage cycle all stress your home's electrical system. A panel that was marginal before the storm often isn't marginal afterward — it's broken.",
      },
      { kind: "h3", text: "Warning Signs After a Storm" },
      {
        kind: "bullets",
        bullets: [
          "Breakers that trip after power is restored",
          "Partial power (some rooms or circuits work; others don't)",
          "Persistent flickering lights",
          "GFCIs that won't reset",
          "A burning smell anywhere near outlets, the panel, or appliances",
          "Buzzing or crackling at the panel",
          "Outdoor circuits that have stopped working",
        ],
      },
      {
        kind: "paragraph",
        body: "If you see any of those after a storm, schedule a post-storm electrical inspection before you re-energize major equipment. See [Electrical Repair](/services/electrical-repair).",
      },
      {
        kind: "image",
        src: "/job-gallery/service-entrance-complete.jpg",
        alt: "Completed exterior service entrance on a Tulsa home — meter, mast, and conduit installed by M Electric as part of a service upgrade",
        caption:
          "Real M Electric work: a finished exterior service entrance — meter, mast, and conduit are all part of a complete service upgrade.",
      },
      { kind: "h3", text: "Surge Protection May Be Part of the Solution" },
      {
        kind: "paragraph",
        body: "If your panel is in good shape but your home keeps absorbing surge damage, a panel-level surge protective device is the right next step. If the panel itself is the problem, surge protection should come *after* the panel upgrade, not before. See [Whole-Home Surge Protection](/services/surge-protection).",
      },

      {
        kind: "h2",
        text: "Sign #10 — You're Planning to Sell, Buy, or Remodel a Tulsa Home",
        id: "sign-10",
      },
      { kind: "h3", text: "Electrical Panels Often Come Up During Inspections" },
      {
        kind: "paragraph",
        body: "Home inspectors regularly flag outdated panels, double-tapped breakers, missing or illegible labeling, undersized service, and obvious capacity issues. A flagged panel can shrink the buyer pool, complicate financing, or turn into a last-minute price negotiation.",
      },
      { kind: "h3", text: "Buyers Want Confidence in the Electrical System" },
      {
        kind: "paragraph",
        body: "A documented panel upgrade — done by a licensed electrician, with permits and final inspection — removes friction during resale and gives buyers something concrete to feel good about.",
      },
      { kind: "h3", text: "Remodels Can Trigger Code and Permit Requirements" },
      {
        kind: "paragraph",
        body: "Major electrical work as part of a remodel often requires permits, inspections, and modern code compliance for the affected scope. A licensed electrician handles those requirements as part of the job — that's part of the value of using one.",
      },
      {
        kind: "paragraph",
        body: "If you're buying, selling, or remodeling in the Tulsa area, see our [Tulsa Service Area](/service-areas/tulsa) page or [contact us](/contact) for a panel evaluation.",
      },

      {
        kind: "h2",
        text: "100 Amp vs. 200 Amp Service: Do You Need More Capacity?",
        id: "amp-service",
      },
      { kind: "h3", text: "Many Older Homes Have 100-Amp Service" },
      {
        kind: "paragraph",
        body: "A 100-amp service can be enough for a smaller home with modest loads — gas heat, gas cooking, gas water heater, no central AC, no EV. As soon as the home moves toward all-electric heating and cooking, multiple HVAC zones, an EV charger, or any kind of shop or hot tub circuit, 100 amps gets crowded fast.",
      },
      { kind: "h3", text: "200-Amp Service Is Common for Modern Homes" },
      {
        kind: "paragraph",
        body: "Most modern Tulsa homes are built with 200-amp service for a reason: it gives real headroom for today's electrical needs without being so large that it's wasteful. That doesn't mean 200 amps is automatically the right answer for every home — but it's the most common upgrade target.",
      },
      { kind: "h3", text: "The Right Answer Depends on a Load Calculation" },
      {
        kind: "paragraph",
        body: "A licensed electrician runs a load calculation that considers:",
      },
      {
        kind: "bullets",
        bullets: [
          "Square footage and conditioned area",
          "HVAC equipment (central AC, heat pumps, electric strip heat, mini-splits)",
          "Major appliances (electric range, oven, dryer, water heater)",
          "EV charging (current and planned)",
          "Generator plans (and whether a transfer switch is involved)",
          "Hot tub, pool, shop, or detached structure circuits",
          "Remodel plans for the next several years",
          "Existing panel condition and breaker space",
          "Current service size",
        ],
      },
      {
        kind: "paragraph",
        body: "The output is a real number — not a guess — that tells you whether your service is adequate, marginal, or genuinely undersized.",
      },

      {
        kind: "h2",
        text: "What Happens During a Panel Upgrade?",
        id: "what-to-expect",
      },
      { kind: "h3", text: "Step 1: Inspection and Load Evaluation" },
      {
        kind: "paragraph",
        body: "We start by reviewing the existing panel, the service equipment, the grounding system, and your current and planned loads. Photos and measurements get documented as a baseline.",
      },
      { kind: "h3", text: "Step 2: Recommendation" },
      {
        kind: "paragraph",
        body: "Based on what we find, the recommendation may include any of: replacing the panel, upgrading the service, adding a subpanel, reworking specific circuits, adding surge protection, or coordinating wiring repair. A clear written quote follows.",
      },
      { kind: "h3", text: "Step 3: Permits and Utility Coordination" },
      {
        kind: "paragraph",
        body: "Panel upgrades typically require permits and inspections, and any work that affects the meter base or service drop requires PSO coordination. We handle those steps so you don't have to track them.",
      },
      { kind: "h3", text: "Step 4: Installation and Final Inspection" },
      {
        kind: "paragraph",
        body: "On install day, the electrician will coordinate the brief power shutoff, replace or rebuild the panel, terminate every circuit cleanly, label everything, test the system, and walk you through what's changed. Final inspection by the AHJ closes the project.",
      },
      {
        kind: "paragraph",
        body: "[Schedule a panel upgrade evaluation](/contact) with M Electric.",
      },

      {
        kind: "h2",
        text: "Should You Upgrade Your Panel Before Surge Protection, an EV Charger, or a Generator?",
        id: "upgrade-order",
      },
      {
        kind: "paragraph",
        body: "The honest answer is \"sometimes.\" Here's how to think about it.",
      },
      { kind: "h3", text: "Before Surge Protection" },
      {
        kind: "paragraph",
        body: "A surge protective device works best as part of a healthy electrical system with intact grounding and bonding. If your panel is outdated, damaged, or compromised, address that first — then add surge protection. See [Whole-Home Surge Protection](/services/surge-protection).",
      },
      { kind: "h3", text: "Before EV Charging" },
      {
        kind: "paragraph",
        body: "Level 2 EV chargers typically require a dedicated 240V circuit and meaningful capacity. If the panel is full or the service is undersized, the charger can't simply be added. A load calculation tells you whether the charger fits or whether the panel needs to come first.",
      },
      { kind: "h3", text: "Before Generator Installation" },
      {
        kind: "paragraph",
        body: "Standby generators require a transfer switch, panel coordination, and (often) circuit re-grouping to identify \"essential\" loads. If the panel is already at the edge of what it can handle, generator planning is the right time to upgrade. See [Generator Installation](/services/generator-installation).",
      },

      {
        kind: "h2",
        text: "Bottom Line: Do You Need an Electrical Panel Upgrade?",
        id: "bottom-line",
      },
      {
        kind: "paragraph",
        body: "A panel upgrade may be the right move if your home has repeated breaker trips, flickering lights, partial power, outdated equipment, no room for new circuits, or major upgrades planned in the next few years.",
      },
      {
        kind: "paragraph",
        body: "But the best first step is not guessing. It's having a licensed electrician inspect the panel, run a real load calculation, and walk you through your options — repair vs. replace, subpanel vs. service upgrade, do-now vs. do-later.",
      },
      {
        kind: "image",
        src: "/marshall-morgan-m-electric-van.jpg",
        alt: "Marshall Morgan, owner of M Electric, beside the M Electric service van — Tulsa-area panel upgrade and electrical service",
        caption:
          "Local, licensed, and same-day for Tulsa-area homeowners.",
      },
      {
        kind: "paragraph",
        body: "Not sure whether your Tulsa home needs a panel upgrade? [Contact M Electric](/contact) for a panel inspection and an honest recommendation.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need an electrical panel upgrade?",
        a: "You may need a panel upgrade if breakers trip often, lights flicker when appliances start, the panel feels warm or smells burned, you still have a fuse box or older panel, or you are adding major equipment like an EV charger, generator, hot tub, or new HVAC system. A licensed electrician can confirm with a panel inspection and load calculation.",
      },
      {
        q: "Is 100-amp service enough for a Tulsa home?",
        a: "It depends on the home. Smaller homes with gas heat, gas cooking, and modest loads can run fine on 100 amps. Most modern homes need more capacity because of HVAC systems, electric appliances, home offices, EV chargers, and remodels. A licensed electrician can run a load evaluation to give you a real answer.",
      },
      {
        q: "Should I upgrade to 200-amp service?",
        a: "A 200-amp upgrade often makes sense if your current panel is overloaded, outdated, full, or unable to support planned upgrades. It is the most common modern target, but the right answer depends on your home's load calculation.",
      },
      {
        q: "Why do my breakers keep tripping?",
        a: "Breakers can trip because of overloaded circuits, faulty appliances, damaged wiring, moisture inside the panel, worn breakers, or panel capacity limits. If the same breaker trips repeatedly, stop resetting it and call a licensed electrician.",
      },
      {
        q: "Can I replace my electrical panel myself?",
        a: "No. Electrical panel replacement is not a DIY project. It involves service equipment, permits, inspections, utility coordination, and serious shock and fire risk. Use a licensed electrician.",
      },
      {
        q: "Will a panel upgrade stop flickering lights?",
        a: "It may, if the flickering is caused by panel capacity or service issues. Flickering can also come from wiring problems, loose connections, large appliance loads, or utility-side issues. The first step is diagnosis, not assumption.",
      },
      {
        q: "Do I need a panel upgrade before installing an EV charger?",
        a: "Possibly. Many Level 2 EV chargers require a dedicated 240V circuit and enough available panel capacity. An electrician can run a load calculation and tell you whether your existing panel can safely support the charger, or whether the panel should come first.",
      },
      {
        q: "How long does a panel upgrade take?",
        a: "The timeline depends on the home, the scope, permit requirements, and whether utility coordination is needed. A straightforward panel replacement may take a single day, while a full service upgrade or a project paired with rewiring can run longer.",
      },
    ],
    sources: [
      {
        label: "PSO — Outage Reporting and Map",
        url: "https://www.psoklahoma.com/outages/",
      },
      {
        label: "National Weather Service — Tulsa Forecast Office",
        url: "https://www.weather.gov/tsa/",
      },
      {
        label: "ESFI — Surge Protective Devices",
        url: "https://www.esfi.org/surge-protective-devices/",
      },
      {
        label: "ESFI — Home Surge Protective Devices",
        url: "https://www.esfi.org/home-surge-protective-devices/",
      },
      {
        label: "Ready.gov — Thunderstorms & Lightning",
        url: "https://www.ready.gov/thunderstorms-lightning",
      },
    ],
    related: [
      "is-whole-home-surge-protection-worth-it-tulsa",
      "spring-storm-electrical-checklist-tulsa",
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "ac-breaker-trips-tulsa-summer-heat",
    title: "Why Your Breaker Trips When the AC Runs in Tulsa Summer Heat",
    metaTitle: "Why Your AC Breaker Trips in Tulsa Summer Heat",
    metaDescription:
      "AC breaker tripping during Tulsa summer heat? Learn what causes it, what homeowners can safely check, and when to call an electrician.",
    excerpt:
      "Tulsa summers expose every weak point in a home's electrical system — overloaded circuits, weak breakers, undersized panels, damaged wiring. Why AC breakers trip in summer heat, what to safely check yourself, and how to tell if you need an electrician, an HVAC company, or both.",
    pillar: "panel-load",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: "marshall-morgan",
    heroImageId: "photo-1758101755915-462eddc23f57",
    heroImageAlt:
      "Electrician diagnosing a residential electrical panel with a multimeter — the kind of inspection that answers most AC-breaker questions in Tulsa summer heat",
    wordCount: 2800,
    body: [
      {
        kind: "paragraph",
        body: "Tulsa summers don't ease into things. July and August routinely sit in the low-to-mid 90s, and Tulsa averages around 11 days per year above 100°F. When the AC has to fight that kind of heat for weeks at a time, the home's electrical system feels every minute of it — and that's usually when homeowners start noticing breakers tripping, lights dimming, outlets feeling warm, or the air conditioner shutting off without warning.",
      },
      {
        kind: "paragraph",
        body: "This guide explains why AC breakers trip during Tulsa summer heat, what you can safely check before calling, what you shouldn't try to fix yourself, and how to tell whether you need an electrician, an HVAC company, or both.",
      },
      {
        kind: "callout",
        variant: "quick-answer",
        title: "Quick Answer: Why Does My Breaker Trip When the AC Runs?",
        body: "An AC breaker may trip because:\n\n- The circuit is overloaded (the AC is sharing capacity with other big loads)\n- The air conditioner is drawing more current than it should\n- The breaker itself is weak or failing\n- Wiring or connections are damaged, loose, or undersized\n- The panel is outdated or undersized for modern loads\n- Something is overheating after weeks of heavy summer use\n\nIf the breaker trips once, it may be a temporary overload. **If it trips repeatedly, don't keep resetting it** — the breaker is doing its job by interrupting an unsafe condition. A tripping breaker isn't the problem itself; it's a warning sign that something needs diagnosis.\n\nIf your AC breaker keeps tripping in Tulsa heat, M Electric can inspect the circuit, panel, and wiring before the issue becomes a bigger safety problem. → [Electrical Repair](/services/electrical-repair).",
        jumpLinks: [
          { label: "Why summer is hard", toId: "summer-stress" },
          { label: "Warning signs", toId: "warning-signs" },
          { label: "Who to call", toId: "who-to-call" },
          { label: "FAQ", toId: "faq" },
        ],
      },

      {
        kind: "h2",
        text: "Why Tulsa Summer Heat Is Hard on Electrical Systems",
        id: "summer-stress",
      },
      { kind: "h3", text: "Air Conditioners Run Longer and Pull More Power" },
      {
        kind: "paragraph",
        body: "When outside temperatures climb into the 90s and 100s, your AC doesn't just run more often — it runs for longer continuous stretches. The longer the compressor runs, the more cumulative stress lands on the breaker, the circuit conductors, the wire terminations inside the panel, and the disconnect at the outdoor unit. Heat itself increases resistance in any loose or aging connection, which is why a circuit that \"always worked fine\" can start tripping in mid-July without anything obvious having changed.",
      },
      {
        kind: "h3",
        text: "High-Demand Hours Put Pressure on the Grid and Your Home",
      },
      {
        kind: "paragraph",
        body: "Public Service Company of Oklahoma (PSO) runs its [Power Hours](https://powerforwardwithpso.com/programs/power-hours/) demand-response program during summer peak events, and identifies the late-afternoon window — roughly 2 p.m. to 7 p.m. on non-holiday weekdays — as the high-demand period when grid stress is highest. The closer your home is to its own electrical capacity, the more noticeable that window becomes: the AC works hardest, the dishwasher and dryer are often running, and any weak point in your wiring or panel shows up first there.",
      },
      {
        kind: "paragraph",
        body: "PSO and the [U.S. Department of Energy](https://www.energy.gov/energysaver/thermostats) both recommend strategies homeowners can use to reduce summer load: running ceiling and portable fans to feel cooler at a higher thermostat setting, replacing dirty AC filters, and staggering large-appliance use away from peak hours. None of that fixes an electrical problem — but it helps stop a marginal system from getting pushed over the edge while you're scheduling repair.",
      },
      { kind: "h3", text: "Summer Storms Add Surge and Outage Stress" },
      {
        kind: "paragraph",
        body: "The [National Weather Service Tulsa office](https://www.weather.gov/tsa/) tracks regular summer thunderstorm activity that can bring lightning, hail, strong winds, and occasional tornadoes. Every storm cycle includes outages, voltage events, and PSO restoration that can stress already-marginal panel and circuit conditions. If your AC breaker started tripping after a recent storm, that's an important detail to share with your electrician.",
      },

      {
        kind: "h2",
        text: "Sign #1 — The AC Breaker Trips More Than Once",
        id: "warning-signs",
      },
      { kind: "h3", text: "One Trip May Be Temporary; Repeated Trips Need Attention" },
      {
        kind: "paragraph",
        body: "A single trip can happen during a brief overload, a momentary startup surge, or even a passing utility event. A breaker that trips **repeatedly** — especially on hot days, in the late afternoon, or whenever a specific combination of loads kicks on — is telling you there's a real problem behind it.",
      },
      { kind: "h3", text: "Don't Keep Resetting the Breaker" },
      {
        kind: "paragraph",
        body: "This is one of the most important rules in this article: **don't keep flipping the breaker back on**. Each reset re-energizes whatever fault or overload caused the trip in the first place. If the underlying cause is an overheating connection, a damaged conductor, or a worn breaker that no longer trips at its rated amperage, you're stacking risk every time you reset it.",
      },
      { kind: "h3", text: "What to Do Instead" },
      {
        kind: "paragraph",
        body: "Safe homeowner steps when the AC breaker trips:",
      },
      {
        kind: "bullets",
        bullets: [
          "Turn off the AC at the thermostat first",
          "Note the time the trip happened and the outdoor temperature",
          "Check whether other large appliances were running (dryer, oven, EV charger, dishwasher)",
          "From a safe distance, listen for any buzzing or unusual sounds from the panel",
          "Reset the breaker **once**",
          "If it trips again, leave it off and call a licensed electrician",
        ],
      },
      {
        kind: "paragraph",
        body: "If the same breaker keeps tripping, [schedule electrical troubleshooting with M Electric](/services/electrical-repair).",
      },

      {
        kind: "h2",
        text: "Sign #2 — Lights Dim When the AC Starts",
        id: "sign-2",
      },
      { kind: "h3", text: "Brief Dimming Can Happen; Frequent or Severe Dimming Is a Warning" },
      {
        kind: "paragraph",
        body: "A momentary dim when an AC compressor or other large motor starts isn't unusual. The home is asking for a brief surge of current, and you can see it in the lights. But if the dimming is **noticeable, prolonged, severe, or happening across multiple rooms**, that's a different conversation.",
      },
      { kind: "h3", text: "What Dimming May Point To" },
      {
        kind: "bullets",
        bullets: [
          "A high startup draw from a struggling or aging AC compressor",
          "A loose connection somewhere on the circuit or at the panel",
          "An aging or weak breaker",
          "An undersized branch circuit",
          "A panel capacity issue (the home is genuinely asking for more than it can deliver)",
          "A utility-side voltage issue",
          "Older or damaged wiring",
        ],
      },
      { kind: "h3", text: "When Dimming Becomes Urgent" },
      {
        kind: "paragraph",
        body: "Call a licensed electrician right away if dimming is paired with any of these:",
      },
      {
        kind: "bullets",
        bullets: [
          "A burning smell anywhere in the house",
          "A buzzing or crackling panel",
          "Breakers that keep tripping",
          "Warm outlets, switches, or faceplates",
          "Flickering that spans multiple rooms",
          "The AC shutting off unexpectedly during a run cycle",
          "Partial power (some circuits work, some don't)",
        ],
      },
      {
        kind: "paragraph",
        body: "See [Wiring Repair](/services/wiring-repair).",
      },

      {
        kind: "h2",
        text: "Sign #3 — The Electrical Panel Feels Warm, Buzzes, or Smells Hot",
        id: "sign-3",
      },
      { kind: "h3", text: "Your Panel Should Not Smell Burned" },
      {
        kind: "paragraph",
        body: "A faint hum from a 200-amp main is normal. **A loud buzz, crackling, popping, noticeable heat, or any kind of burning, fishy, or plastic-melting smell is not.** These are warning signs of arcing, loose connections, water intrusion, surge damage, or a failing breaker — and they should be treated seriously.",
      },
      { kind: "h3", text: "Do Not Remove the Panel Cover" },
      {
        kind: "paragraph",
        body: "Open the panel **door** if you need to check breaker labels. Do **not** remove the panel cover (the dead front behind the door) or try to inspect the wiring inside the panel. The bus bars and breaker connections behind that cover are live, and the energy they carry is dangerous.",
      },
      { kind: "h3", text: "Stop and Call an Electrician" },
      {
        kind: "paragraph",
        body: "Call a licensed electrician if the panel:",
      },
      {
        kind: "bullets",
        bullets: [
          "Buzzes loudly or steadily",
          "Crackles, pops, or hisses",
          "Smells burned",
          "Feels warm or hot to the touch",
          "Shows any discoloration, scorch marks, or rust",
          "Has breakers that won't stay reset",
        ],
      },
      {
        kind: "paragraph",
        body: "If your panel feels hot or smells burned, [contact M Electric right away](/contact).",
      },
      {
        kind: "image",
        src: "/eaton-spd-panel-installed.jpg",
        alt: "Residential electrical panel with a panel-mounted surge protective device — the kind of layered protection that helps a marginal system survive Tulsa summer load",
        caption:
          "Panel-level inspection is the first step in any AC breaker diagnosis.",
      },

      {
        kind: "h2",
        text: "Common Reasons an AC Breaker Trips in Summer",
        id: "common-reasons",
      },
      { kind: "h3", text: "The Circuit Is Overloaded" },
      {
        kind: "paragraph",
        body: "The AC may be sharing its branch circuit with other large devices (it shouldn't be), or your home's total electrical demand may be peaking at exactly the hottest part of the day. Stacking large appliances — dryer, oven, dishwasher, EV charger — onto already-stressed circuits or onto an undersized service is one of the most common causes of summer breaker trips.",
      },
      { kind: "h3", text: "The Air Conditioner Is Drawing Too Much Current" },
      {
        kind: "paragraph",
        body: "This may be an HVAC problem, not an electrical problem. A failing capacitor, a contactor on its way out, a compressor working too hard against low refrigerant, or a fan motor with worn bearings can all cause the AC to pull more amps than the circuit expects. An electrician can verify whether the **electrical** side is sound; an HVAC technician should evaluate the equipment itself. (More on that distinction below.)",
      },
      { kind: "h3", text: "The Breaker Is Worn or Failing" },
      {
        kind: "paragraph",
        body: "Breakers don't last forever. After enough trip events — or enough years of running near rated current — a breaker can become weak and trip at lower-than-rated load. Only a licensed electrician should diagnose and replace a breaker.",
      },
      { kind: "h3", text: "The Wiring or Connections Are Damaged" },
      {
        kind: "paragraph",
        body: "Heat, age, moisture, storm exposure, rodents, or original installation errors can all create issues at terminations, junction boxes, or in the conductor itself. Aluminum branch wiring in some 1960s–1970s Tulsa homes is particularly worth professional review.",
      },
      { kind: "h3", text: "The Panel Is Outdated or Undersized" },
      {
        kind: "paragraph",
        body: "Older panels — especially those still on 100-amp service — may simply not have the headroom for a modern home's combined HVAC, kitchen, laundry, home office, and (sometimes) EV-charging load. See [Panel Upgrades](/services/panel-upgrades).",
      },
      { kind: "h3", text: "There Was Storm or Surge Damage" },
      {
        kind: "paragraph",
        body: "If your AC breaker problems started after a thunderstorm, ice storm, or PSO outage and restoration, surge damage is on the suspect list. A licensed electrician can inspect the panel and circuit, and a panel-level surge protective device can help reduce future damage. See [Whole-Home Surge Protection](/services/surge-protection).",
      },

      {
        kind: "h2",
        text: "What Homeowners Can Safely Check Before Calling",
        id: "safe-checks",
      },
      {
        kind: "paragraph",
        body: "You don't need tools or training for any of this. These observations help an electrician (or HVAC tech) diagnose faster.",
      },
      { kind: "h3", text: "Check the Thermostat and Timing" },
      {
        kind: "paragraph",
        body: "Ask yourself:",
      },
      {
        kind: "bullets",
        bullets: [
          "Does the breaker trip *immediately* when the AC starts? (Often points to a compressor or contactor issue, or a failing breaker.)",
          "Does it trip after the system has been running for 10–20 minutes? (Often points to a heat-related issue — loose connection, weak breaker, or marginal capacity.)",
          "Does it only trip during the hottest part of the day?",
          "Does it happen when other big appliances are running?",
        ],
      },
      { kind: "h3", text: "Check Whether Other Large Appliances Were Running" },
      {
        kind: "paragraph",
        body: "Common offenders during summer peak hours:",
      },
      {
        kind: "bullets",
        bullets: [
          "Electric dryer",
          "Oven or range",
          "Dishwasher",
          "Washing machine",
          "Microwave",
          "EV charger",
          "Pool equipment",
          "Workshop tools",
        ],
      },
      {
        kind: "paragraph",
        body: "PSO's general summer-conservation guidance encourages shifting large-appliance use away from peak hours (the late-afternoon window) when possible. That's a load-management tip, not a fix — but during a heat wave, it can keep a marginal system from tripping while you wait for service.",
      },
      { kind: "h3", text: "Check the Air Filter and Outdoor Unit Airflow" },
      {
        kind: "paragraph",
        body: "This is HVAC-adjacent but useful:",
      },
      {
        kind: "bullets",
        bullets: [
          "A dirty AC filter makes the system work harder and pull more current.",
          "An outdoor condenser packed with grass clippings, cottonwood fuzz, or shrubbery makes the system work harder and pull more current.",
        ],
      },
      {
        kind: "paragraph",
        body: "Replacing a filter and clearing 2–3 feet of breathing room around the outdoor unit is safe, easy, and sometimes solves the problem. It does **not** replace electrical diagnosis when the breaker is still tripping after those changes.",
      },
      { kind: "h3", text: "Check for Obvious Danger Signs" },
      {
        kind: "paragraph",
        body: "Stop and call a licensed professional if you notice:",
      },
      {
        kind: "bullets",
        bullets: [
          "A burning smell anywhere",
          "A buzzing or crackling panel",
          "A warm or hot breaker",
          "Scorch marks on outlets, switches, or panel breakers",
          "A breaker that won't reset at all",
          "Water near the panel or any outdoor electrical equipment",
          "Damage to the AC disconnect box or whip outside",
          "Flickering lights across multiple rooms",
        ],
      },

      {
        kind: "h2",
        text: "What Homeowners Should Not Do",
        id: "do-not",
      },
      { kind: "h3", text: "Don't Keep Flipping the Breaker Back On" },
      {
        kind: "paragraph",
        body: "This one is worth repeating. Repeated resets can hide a real, dangerous problem.",
      },
      { kind: "h3", text: "Don't Replace the Breaker Yourself" },
      {
        kind: "paragraph",
        body: "Breaker replacement is panel work. It involves live bus bars and requires the right breaker make and model, properly torqued connections, and verification. It is not a DIY job.",
      },
      { kind: "h3", text: "Don't Use Extension Cords or Power Strips for AC Equipment" },
      {
        kind: "paragraph",
        body: "This is especially important for window units, portable AC units, and shop-area cooling. Cooling equipment pulls high current, and extension cords and power strips are not engineered for that kind of continuous load. They overheat, melt, and start fires. Cooling equipment should be plugged directly into a properly sized outlet.",
      },
      { kind: "h3", text: "Don't Ignore Burning Smells or Buzzing Sounds" },
      {
        kind: "paragraph",
        body: "These are not \"nuisance\" summer problems. They are warning signs that need professional eyes.",
      },

      {
        kind: "h2",
        text: "When to Call an Electrician vs. an HVAC Company",
        id: "who-to-call",
      },
      {
        kind: "paragraph",
        body: "This is the question every homeowner asks — and it's almost always why the issue takes longer than it should to fix.",
      },
      {
        kind: "embed",
        component: "AcBreakerCallChart",
        caption:
          "The fastest path to a fix usually starts with the right phone call.",
      },
      { kind: "h3", text: "Sometimes You Need Both" },
      {
        kind: "paragraph",
        body: "AC breaker problems sit right at the intersection of electrical and HVAC. The cleanest path is often: have an electrician confirm the **electrical** side is healthy (circuit, breaker, wiring, panel capacity, disconnect, grounding) — then if everything checks out there, the AC equipment itself is the next thing to look at. That order saves money. Replacing a $400 capacitor doesn't help if the real problem is a loose lug inside the panel.",
      },

      {
        kind: "h2",
        text: "Could Your Tulsa Home Need a Dedicated Circuit?",
        id: "dedicated-circuit",
      },
      { kind: "h3", text: "Central AC Should Be on the Correct Dedicated Circuit" },
      {
        kind: "paragraph",
        body: "A central air conditioning condenser is a hard-wired major appliance, and it should be on its own properly sized 240V circuit with the correct breaker, conductor size, and outdoor disconnect. If your system was added to an older home or installed during a remodel, it's worth verifying that the circuit was sized correctly for the equipment installed.",
      },
      { kind: "h3", text: "Window Units and Portable AC Units Can Overload Rooms" },
      {
        kind: "paragraph",
        body: "Bedrooms, garages, additions, shops, and rentals often run window or portable units on circuits that weren't designed for that load — sometimes shared with lighting, computers, or other electronics. The fix is usually a properly sized dedicated circuit, run by a licensed electrician.",
      },
      { kind: "h3", text: "Older Tulsa Homes May Not Have Enough Capacity" },
      {
        kind: "paragraph",
        body: "A lot of older Tulsa homes still have circuits that pre-date central AC, modern home offices, large appliances, and EV charging. The wiring may be in fine condition, but the **load** plan no longer reflects how the home is actually used. See [Wiring Repair](/services/wiring-repair).",
      },

      {
        kind: "h2",
        text: "Could Your Electrical Panel Be the Real Problem?",
        id: "panel-issue",
      },
      { kind: "h3", text: "Warning Signs of a Panel Capacity Issue" },
      {
        kind: "bullets",
        bullets: [
          "Breakers trip often, especially when the AC kicks on",
          "Lights dim noticeably when the AC starts",
          "The panel is full (no open slots)",
          "The panel feels warm to the touch",
          "The home still has an older fuse box",
          "There's no room for new dedicated circuits",
          "You're planning EV charging, a generator, or new HVAC equipment",
        ],
      },
      { kind: "h3", text: "100-Amp vs. 200-Amp Service" },
      {
        kind: "paragraph",
        body: "Not every home automatically needs 200 amps — a smaller home with gas heat, gas cooking, and modest loads can run fine on 100 amps. But many older Tulsa homes have grown into modern usage patterns the original service wasn't sized for. A licensed electrician can run a real load calculation that accounts for HVAC, appliances, EV charging, planned upgrades, and existing condition.",
      },
      { kind: "h3", text: "Panel Upgrade Evaluation" },
      {
        kind: "paragraph",
        body: "A panel evaluation looks at the panel itself, the service entrance equipment, grounding and bonding, available capacity, current and planned loads, and any safety concerns. The recommendation may be repair, partial rework, a subpanel, or a full upgrade. See [Panel Upgrades](/services/panel-upgrades).",
      },

      {
        kind: "h2",
        text: "How to Reduce Summer Electrical Stress",
        id: "reduce-stress",
      },
      { kind: "h3", text: "Use Fans to Reduce AC Runtime" },
      {
        kind: "paragraph",
        body: "Ceiling and portable fans don't cool a room — they make people feel cooler, which means you can hold the thermostat a degree or two higher without losing comfort. PSO's [summer savings tips](https://powerforwardwithpso.com/tips/) point to this as one of the easiest cost-saving habits.",
      },
      { kind: "h3", text: "Avoid Running Several Major Appliances During Peak Heat" },
      {
        kind: "paragraph",
        body: "Try to keep dryer, oven, dishwasher, EV charging, and shop equipment out of the late-afternoon window when the AC is already running hardest. This is grid-friendly *and* easier on a marginal panel or circuit.",
      },
      { kind: "h3", text: "Raise Thermostat Settings When Health Allows" },
      {
        kind: "paragraph",
        body: "Energy.gov recommends 78°F as a starting point for summer cooling when the home is occupied. PSO's Power Hours program adjusts enrolled thermostats up by no more than 4°F during a peak event for the same reason — a small change makes a meaningful difference.",
      },
      {
        kind: "paragraph",
        body: "(If you have small children, older adults, or anyone with health conditions in the home, prioritize their needs over any thermostat target.)",
      },
      { kind: "h3", text: "Schedule Electrical Issues Before Peak Summer Demand" },
      {
        kind: "paragraph",
        body: "The hottest week of the year is the worst week to discover your panel can't keep up. If you already see signs of stress — flickering, occasional trips, warm switches — get them addressed in May or early June.",
      },
      {
        kind: "paragraph",
        body: "If your electrical system is already showing stress, don't wait for the hottest week of the year. [Schedule an inspection with M Electric](/contact).",
      },

      {
        kind: "h2",
        text: "Bottom Line: A Tripping AC Breaker Is a Warning Sign",
        id: "bottom-line",
      },
      {
        kind: "paragraph",
        body: "If your AC breaker trips once on a 102°F afternoon, take note. If it trips again the next day, **don't keep resetting it**. Tulsa summer heat doesn't create electrical problems out of nothing — it exposes the ones that were already there: overloaded circuits, weak breakers, old panels, damaged wiring, and capacity limits the home has been quietly carrying.",
      },
      {
        kind: "paragraph",
        body: "The safest move is to have a licensed Tulsa electrician diagnose the electrical side before the issue turns into something larger or more expensive.",
      },
      {
        kind: "image",
        src: "/marshall-morgan-m-electric-van.jpg",
        alt: "Marshall Morgan, owner of M Electric, beside the M Electric service van in Tulsa, Oklahoma — local, licensed electrical repair and panel diagnosis",
        caption:
          "Local, licensed, and same-day for Tulsa-area homeowners.",
      },
      {
        kind: "paragraph",
        body: "M Electric can inspect your AC circuit, electrical panel, wiring, and breaker setup, and help you understand what's actually causing the issue — and what your safest next step is. → [Contact M Electric](/contact).",
      },
    ],
    faqs: [
      {
        q: "Why does my breaker trip when my AC turns on?",
        a: "Your breaker may trip because the AC is drawing too much current, the circuit is overloaded, the breaker is weak, the wiring is damaged, or the panel is outdated. A one-time trip can be a temporary overload; repeated trips mean something needs to be diagnosed by a licensed electrician.",
      },
      {
        q: "Is it safe to keep resetting my AC breaker?",
        a: "No. If the breaker keeps tripping, don't keep resetting it. The breaker is interrupting power to protect the circuit, and repeatedly re-energizing the same fault can be dangerous. Call a licensed electrician.",
      },
      {
        q: "Should I call an electrician or HVAC company for an AC breaker problem?",
        a: "Call an electrician if the breaker trips repeatedly, the panel buzzes, lights dim, outlets feel warm, or there are other electrical symptoms. Call an HVAC company if the issue appears to be with the AC compressor, fan, refrigerant, or cooling performance. Sometimes both are needed — start with the electrical side to confirm the circuit and panel are safe.",
      },
      {
        q: "Can Tulsa summer heat make electrical problems worse?",
        a: "Yes. During hot weather, air conditioners run longer, large appliances add demand, and older panels or marginal circuits may show problems that were less noticeable during cooler months. Heat also increases resistance in loose or aging connections, which is one of the reasons summer breaker trips are so common.",
      },
      {
        q: "Why do my lights dim when the AC starts?",
        a: "Lights may dim because the AC has a high startup draw, but frequent or severe dimming can also point to loose connections, undersized wiring, overloaded circuits, utility voltage issues, or panel capacity problems. A brief dim when the compressor kicks on is normal; dimming you can see across the house every cycle is not.",
      },
      {
        q: "Do I need a panel upgrade if my AC breaker trips?",
        a: "Not always. A panel upgrade may be needed if the panel is outdated, overloaded, full, damaged, or unable to support modern electrical loads. An electrician should inspect the system and run a load calculation before recommending an upgrade.",
      },
      {
        q: "Can a whole-home surge protector help with summer electrical problems?",
        a: "A surge protective device can help reduce damage from surges — especially during summer thunderstorms and outage cycles — but it will not fix overloaded circuits, bad wiring, failing breakers, or an undersized panel. It's part of a healthy electrical system, not a substitute for one.",
      },
      {
        q: "What should I do if my panel smells hot or buzzes?",
        a: "Stop using affected circuits if you can do so safely and call a licensed electrician. Do not remove the panel cover or try to inspect wiring yourself.",
      },
    ],
    sources: [
      {
        label: "Public Service Company of Oklahoma — Power Hours Program",
        url: "https://powerforwardwithpso.com/programs/power-hours/",
      },
      {
        label: "PSO — Stay Cool with 4 Tips to Get the Most Out of Your A/C",
        url: "https://powerforwardwithpso.com/tips/stay-cool-with-4-tips-to-get-the-most-out-of-your-a-c/",
      },
      {
        label: "PSO — Summertime Savings",
        url: "https://powerforwardwithpso.com/tips/summertime-savings/",
      },
      {
        label: "U.S. Department of Energy — Thermostats",
        url: "https://www.energy.gov/energysaver/thermostats",
      },
      {
        label: "National Weather Service Tulsa — Climatology",
        url: "https://www.weather.gov/tsa/climo_tulsacli",
      },
      {
        label: "National Weather Service Tulsa — Summer Seasonal Temperatures",
        url: "https://www.weather.gov/tsa/climo_tulsumstemp",
      },
      {
        label: "ESFI — Home Surge Protective Devices",
        url: "https://www.esfi.org/home-surge-protective-devices/",
      },
    ],
    related: [
      "signs-you-need-electrical-panel-upgrade-tulsa",
      "is-whole-home-surge-protection-worth-it-tulsa",
    ],
  },
];

export const postsBySlug = new Map(posts.map((p) => [p.slug, p]));

export function getPost(slug: string): PostContent | undefined {
  return postsBySlug.get(slug);
}
