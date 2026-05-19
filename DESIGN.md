# EbubeRPG Portfolio Design

## Strategy

EbubeRPG is a personal studio portfolio built around five strong case studies. The site should feel premium, polished, intentional, and quietly creative. It borrows the confidence of studio work indexes, but it should still feel like a focused portfolio for hiring Ebube.

Primary mode: editorial gallery. The interface should be restrained enough for recruiters to scan quickly, but media-led enough for motion and art direction work to feel alive.

## Visual System

- Canvas: dark-first neutral surfaces with a clean light mode fallback.
- Accent: lime is the sharp action and marker color; purple is the secondary atmospheric detail.
- Type: Geist for body and interface text; Space Grotesk for display headings.
- Shape: tight radii, precise borders, and subtle surface changes. Avoid soft card-heavy layouts.
- Motion: use restrained Framer Motion reveals and a recurring reel-strip motif. Honor reduced-motion preferences.

## Page Architecture

- Home: work-first intro, immediate access to five case-study slots, concise credibility, direct contact CTA.
- Work: curated editorial index, not a generic grid. Five case studies only, ordered intentionally.
- Project detail: consistent shell with project-specific media rhythm.
- About: concise credibility, capabilities, working style, resume entry point.
- Contact: email-first conversion with social and CV links when ready.
- Notes: future route exists, but it should stay out of primary navigation until real writing exists.

## Case Study Anatomy

Each case study should answer four questions:

1. Context: what was the project and why did it matter?
2. Role: what did Ebube own or contribute?
3. Craft: what creative or production decisions made the work strong?
4. Impact: what did the work achieve or enable?

Each project can include title, year, category, client, role summary, tools, cover media, media blocks, credits, external links, and impact notes.

## Acceptance Criteria

- The site feels curated around five strong projects, even before final content lands.
- No empty planned section appears in primary navigation.
- The design system uses named tokens instead of scattered colors.
- Motion is subtle, useful, and reduced-motion safe.
- Media modules work without final media assets.
- Pages are readable and polished on desktop and mobile.
- `npm run lint` and `npm run build` pass before handoff.
