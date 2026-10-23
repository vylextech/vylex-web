# AI Design & Engineering Standards: Anti-AI Fluff & Real-World Grounding

This repository enforces strict design and content rules to eliminate generic AI tropes, fake embellishments, and template repetition across all websites and interfaces.

---

## 1. Strictly Prohibited AI Clichés & Fluff

### 🚫 No Blinking / Pulsing Dots
- **Never** add pulsing status dots (`animate-pulse`, `ping`) next to text to simulate "online", "24/7 dispatch", "live status", or "available now".
- Do not fabricate operational claims (e.g. labeling a civil/residential construction company as "24/7 Emergency Dispatch" unless explicitly requested by the business owner).

### 🚫 No Floating Pill Badges Above Headings
- **Never** slap generic floating pill badges with sparkles (`✨`), star emojis (`⭐`), or dot bullets above every `<h1>` or `<h2>` (e.g. `[● NHBRC & CIDB Registered • 100% SETA Compliant]`).
- Clean, confident typography with real structure beats cookie-cutter AI decoration every time.

### 🚫 No Artificial Top-Bar Ribbons
- Avoid cluttered utility header strips stuffed with every acronym, phone number, accreditation tag, and WhatsApp link stacked together.
- Integrate contact details, accreditations, and messaging links **naturally** within the navigation, hero, about section, and footer where humans actually look.

### 🚫 No Hallucinated / Exaggerated Labels
- **Never** call a standard local landline "Toll Free" (e.g. Johannesburg `010` is a local geographic area code, not a toll-free `0800` line).
- Do not invent artificial corporate jargon (e.g. "WhatsApp Quick Desk", "Synergistic Solutions", "Next-Gen AI Construction"). Use plain, human South African commercial terms (e.g. "WhatsApp Us", "Office", "Direct Line").

### 🚫 No Generic Icon Boxes When Real Logos Exist
- **Never** use generic FontAwesome icons (like a house shield or building check in a blue square) to represent statutory bodies when real official logos are available.
- Always use the actual logos for statutory and industry bodies (e.g. **CIDB** - `images/cibd.png`, **NHBRC** - `images/nhbrc.png`).

---

## 2. Core UI & UX Principles

### ✅ Grounded in the Real Industry
- Match the visual language to the actual trade:
  - Construction & engineering must feel structural, solid, verified, and established — not like a Silicon Valley SaaS startup.
  - Highlight real human leadership (e.g. Mr. Kennedy Williams), real project locations (Chris Hani Baragwanath Hospital, Merafong City Municipality, Soweto, Turffontein, Haddon), and verified registrations.

### ✅ Viewport & Layout Integrity
- Hero sections must fit standard screen viewports without cutting off buttons or key text.
- Calculate exact header/nav heights dynamically (`min-height: calc(100vh - var(--nav-total-height))`) so that CTA buttons never clip past the fold.
- Use natural flexbox alignment (`justify-center`) rather than brittle `absolute bottom-0` pinning.

### ✅ Creative Variety Over AI Boilerplate
- Break away from the uniform AI layout schema:
  - Avoid identical 3-card feature columns with colored icon circles.
  - Avoid over-promising hero subheadings filled with buzzword word salad.
  - Build bespoke, intentional, content-driven layouts that respect South African web users on both desktop and mobile networks.

---

## 3. Pre-Commit Checklist for AI Agents
Before finishing or proposing any UI changes:
1. [ ] Are there any pulsing green/colored dots? (Remove them)
2. [ ] Are there generic floating pill badges above titles? (Remove them)
3. [ ] Are phone numbers accurately labeled without "Toll Free" falsehoods?
4. [ ] Are real accreditation logos (`nhbrc.png`, `cibd.png`) used instead of placeholder icons?
5. [ ] Is the navigation clean, human, and clutter-free?
6. [ ] Does the hero section fit cleanly in the initial viewport on desktop, tablet, and mobile?
