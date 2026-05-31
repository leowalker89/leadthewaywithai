# Design Guide — Lead The Way with AI

This document captures the intended direction for Leo Walker's personal site. It
is a living styling and content guide for future iterations — not a finished
spec, and not a description of the current skeleton. The current site leads with
healthcare positioning; this guide steers the next evolution toward something
broader and more human.

> **One-line intent:** an authoritative, modern, human personal site about Leo
> Walker the person — AI engineer and leader — built for credibility and
> visibility, not pure lead generation.

---

## 1. Who this site is about

Leo Walker is the subject, not a job title or a single domain. The site should
read as a person with range and a through-line:

- AI engineer and technical leader
- 75th Ranger Regiment background — **context** for how he thinks and operates,
  not the present identity
- Data science (MS, University of Denver)
- NLP/AI practitioner since 2016
- Healthcare / startup work (KaiCare.ai) — **important, but not the whole story**
- Builder, teacher, and writer

Healthcare is where Leo is *right now*. It should be present and credible, but it
should not dominate the hero or define the entire site.

---

## 2. Goals and principles

**Goal:** an authoritative, modern, human personal site — not a digital resume.
Optimize for credibility and visibility over lead generation.

Key principles to apply on every change:

- **Earth tones are the default brand atmosphere.** Colorado / Western earth
  tones — warm cream, sand, sage, olive, slate blue, charcoal, clay, and a
  terracotta/coral accent — are a primary design constraint, not a suggestion.
  Both light and dark modes must read as warm and grounded. Never drift toward a
  generic dark-tech or cyberpunk look. When a choice is ambiguous, pick the
  warmer, earthier option.
- **Lead with WHY/purpose, not credentials.** Open with what Leo builds and why
  it matters, then earn the right to list proof.
- **One primary CTA per page.** Don't dilute with competing asks.
- **Authority first, personality second.** Establish credibility, then let the
  human come through.
- **Mobile-first.** Design the small screen, then scale up.
- **Lead with now, contextualize the past.** The Ranger and data-science chapters
  explain *how* Leo operates today; they are not the headline.
- **Keep it honest.** Specifics and real outcomes over hype.
- **Active content cadence.** The site should look maintained — writing and notes
  that update over time.

---

## 3. Inspiration → actionable patterns

Treat the following as principles to apply, not sites to copy. Each is filtered
through the earth-tone constraint — borrow the *structure and feel* of these
references, but render it in warm, grounded Western tones rather than their
native palettes.

- **Purpose-first minimalism** — clear mission, calm navigation, an emotional or
  quotable hook near the top, and a thought-leadership content backbone, set on
  warm cream/sand rather than stark white.
- **Content-first credibility** — let work and writing carry weight; use social
  proof and validation; tell stories per section; favor candid, personal
  photography over stock.
- **Elegant intellectual restraint** — tasteful serif moments and a timeless,
  restrained feel; here "neutral" means warm earth neutrals (cream, sand,
  charcoal), never cool gray.
- **Warm technical trust** — the most load-bearing reference: warm neutrals
  signaling collaboration and clarity, a terracotta/coral accent, slate blue and
  olive as secondary accents, technical elegance without coldness. This is the
  warm-grounded direction the whole palette extends.
- **Builder confidence** — technical but approachable; high-contrast
  developer/product energy is welcome, but contrast comes from charcoal-on-cream
  and clay accents, not neon or pure black.
- **Systematic hierarchy** — one primary color, one accent, consistent usage, and
  an 8-point spacing system applied everywhere.

---

## 4. Color systems

**Earth tones first.** The palette is built from a Colorado / Western earth-tone
family — warm cream, sand, sage, olive, slate blue, charcoal, clay, and a
terracotta/coral accent. Both modes draw from this same family; the difference is
which earth tones sit in the background versus the foreground. Neither mode should
ever read as a generic dark-tech or sterile-white template.

Shared earth-tone family:

| Token       | Hex       | Notes                                  |
| ----------- | --------- | -------------------------------------- |
| Cream       | `#F0EEE6` | Warm off-white — primary light surface |
| Sand        | `#E4DBC8` | Warmer paper tone for elevated cards   |
| Sage        | `#788C5D` | Muted green secondary accent           |
| Olive       | `#4A5C3A` | Deeper green for emphasis              |
| Slate blue  | `#6A8CAE` | Calm blue secondary accent             |
| Charcoal    | `#23211C` | Warm near-black (brown-leaning, not blue) |
| Clay        | `#A8755A` | Earthy brown-orange, mid-tone bridge   |
| Terracotta  | `#D97757` | Primary accent — shared across modes   |

**Recommendation:** ship dark as the primary theme with a light-mode toggle.
Both palettes below are subsets of the family above — keep them warm.

### Option A — Warm Earth Dark (recommended primary)

A dark mode that feels like dusk over high desert, not a terminal. Backgrounds are
warm charcoal/brown rather than cool blue-black, so the terracotta accent reads as
firelight rather than neon.

| Role               | Hex       | Earth note                      |
| ------------------ | --------- | ------------------------------- |
| Background (base)  | `#1A1815` | Warm charcoal (brown undertone) |
| Surface / elevated | `#262320` | Lifted warm brown-charcoal      |
| Text (primary)     | `#F0EEE6` | Cream                           |
| Accent (primary)   | `#D97757` | Terracotta                      |
| Secondary accent   | `#6A8CAE` | Slate blue (muted, not bright)  |
| Tertiary accent    | `#9DAE7B` | Lightened sage for dark contrast|
| Muted / caption    | `#B0AEA5` | Warm taupe                      |

> Avoid cool blue-blacks like `#0F1117`/`#1A1F2E` — they tip the mode toward
> cyberpunk. Keep base values brown-warm.

### Option B — Warm Editorial Light

Warm and editorial — like quality paper stock — for a thought-leadership / speaking
emphasis. The companion light mode. Background is cream/sand, never pure white, so
the page feels grounded and printed rather than clinical.

| Role               | Hex       | Earth note                      |
| ------------------ | --------- | ------------------------------- |
| Background (base)  | `#F0EEE6` | Cream                           |
| Surface / elevated | `#E4DBC8` | Sand                            |
| Text (primary)     | `#23211C` | Warm charcoal                   |
| Primary            | `#4A5C3A` | Olive (grounded, not navy)      |
| Accent             | `#D97757` | Terracotta                      |
| Secondary accent   | `#6A8CAE` | Slate blue                      |
| Muted / caption    | `#8A8475` | Warm gray-taupe                 |

> Avoid sterile whites like `#FAFAF7` and cool grays like `#9B9B9B` — warm every
> neutral toward sand/taupe.

The terracotta `#D97757` is the single shared accent across both modes — use it as
the one consistent highlight color, supported by sage/olive and slate blue.

---

## 5. Typography

- **Headings:** Poppins or Inter.
- **Body:** Lora or Source Serif 4 (a serif body adds the intellectual-practitioner
  feel).
- **Mono:** Geist Mono or JetBrains Mono — sparingly, for code and technical tags.

Desktop scale:

| Element  | Size / treatment                          |
| -------- | ----------------------------------------- |
| H1       | 64–80px                                   |
| H2       | 40–48px                                   |
| H3       | 24–28px                                   |
| Body     | 18px / 1.7 line-height                    |
| Caption  | 14px, uppercase, generous letter-spacing  |

---

## 6. Layout blueprint (home page)

1. **Hero** — who Leo is *right now*. Present identity, not a job title. Possible
   directions:
   - "I build AI systems that turn complexity into momentum."
   - "AI engineer. Ranger-shaped operator. Builder of practical systems."

   CTAs: **See my work** (primary) and **Read my story** (secondary). Aim for a
   professional candid photo here eventually.
2. **Proof bar** — 75th Ranger Regiment · MS Data Science, University of Denver ·
   NLP/AI since 2016 · KaiCare.ai · MLOps Community.
3. **Story timeline** — Ranger Regiment → data analytics / NLP exploration → MS
   Data Science → AI engineering & healthcare tech → KaiCare.ai and RPM/CCM
   clinical AI systems. Tell **learned operating principles**, not resume bullets.
4. **Work / projects** — three featured projects on the home page linking to a
   full projects page. Include tech tags and outcomes where available.
5. **Thought leadership** — writing/notes on clinical AI, NLP, agent workflows,
   military-to-startup leadership, and the data-science career evolution.
6. **About** — who Leo is today, the origin story, what he cares about, and human
   interests (mountain biking, cooking, football).
7. **Contact** — one explicit CTA to connect; GitHub / LinkedIn / newsletter where
   available.

---

## 7. Layout micro-decisions

- 8-point spacing grid throughout.
- Desktop section padding 100–120px; mobile 60px.
- Max content width 1200px; prose column 720px.
- Subtle scroll fade-ins and a gentle card-lift on hover; avoid heavy parallax.
- Candid photography over stock imagery.
- Sticky nav, max five items: **Home · About · Work · Writing · Contact**.

---

## 8. Voice

Direct, with earned confidence. Avoid grandiose AI hype.

Use the tension in the story as a strength:

- **Precision** from the military.
- **Pattern recognition** from data science.
- **Practical systems** from AI engineering.

Reach for specifics and real outcomes wherever they exist.

---

## 9. Skill Seed: Personal Site Design Reviewer

A future Agent Skill should review site changes against this guide. Checklist:

- **Purpose-first hero** — does the page lead with WHY, not a credential dump?
- **Human / technical balance** — is the person visible alongside the engineering?
- **Earth tones first** — does the page read as warm/grounded Western earth tones
  in both modes? Backgrounds warm (charcoal-brown / cream-sand), never cool
  blue-black or sterile white. Reject generic dark-tech or cyberpunk drift.
- **Color adherence** — single accent (`#D97757`), one primary, consistent usage;
  matches Option A or B and stays within the shared earth-tone family.
- **Typography adherence** — heading/body/mono roles and the desktop scale above.
- **Narrative arc** — does the story move now → context (Ranger, data science) →
  practical AI, with operating principles rather than resume bullets?
- **Healthcare not over-indexed** — present and credible, but not dominating the
  hero or the whole site.
- **No resume-only copy** — sections tell stories and outcomes, not just lists.
- **No generic AI aesthetic** — warm, human, specific, and earth-toned; not cold,
  neon, or templated.
- **One primary CTA per page** and mobile-first layout intact.
