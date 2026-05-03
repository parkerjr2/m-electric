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
  | { kind: "embed"; component: "PowerOutageDecisionChart"; caption?: string }
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
];

export const postsBySlug = new Map(posts.map((p) => [p.slug, p]));

export function getPost(slug: string): PostContent | undefined {
  return postsBySlug.get(slug);
}
