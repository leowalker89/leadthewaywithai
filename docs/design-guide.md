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

Treat the following as principles to apply, not sites to copy.

- **Purpose-first minimalism** — clear mission, calm navigation, an emotional or
  quotable hook near the top, and a thought-leadership content backbone.
- **Content-first credibility** — let work and writing carry weight; use social
  proof and validation; tell stories per section; favor candid, personal
  photography over stock.
- **Elegant intellectual restraint** — tasteful serif moments, neutral and
  timeless palette, the feel of a practitioner who reads and thinks.
- **Warm technical trust** — warm neutrals signaling collaboration and clarity, a
  coral/orange accent, muted blue and olive as secondary accents, technical
  elegance without coldness.
- **Builder confidence** — technical but approachable, high-contrast
  developer/product energy where it fits.
- **Systematic hierarchy** — one primary color, one accent, consistent usage, and
  an 8-point spacing system applied everywhere.

---

## 4. Color systems

Two coherent palettes. **Recommendation:** ship dark as the primary AI/tech theme
with a light-mode toggle.

### Option A — Dark Clarity (recommended primary)

| Role               | Hex       |
| ------------------ | --------- |
| Background (base)  | `#0F1117` |
| Surface / elevated | `#1A1F2E` |
| Text (primary)     | `#F0EEE6` |
| Accent (primary)   | `#D97757` |
| Secondary accent   | `#6A9BCC` |
| Tertiary accent    | `#788C5D` |
| Muted / caption    | `#B0AEA5` |

### Option B — Light Leader

Good for a thought-leadership / speaking emphasis. Consider as the light-mode
companion to Option A.

| Role               | Hex       |
| ------------------ | --------- |
| Background (base)  | `#FAFAF7` |
| Surface / elevated | `#F2EFE4` |
| Text (primary)     | `#1C1C1E` |
| Primary            | `#1B3A6B` |
| Accent             | `#D97757` |
| Secondary accent   | `#4A5C3A` |
| Muted / caption    | `#9B9B9B` |

The coral/terracotta `#D97757` is the shared accent across both modes — use it as
the single consistent highlight color.

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
- **Color adherence** — single accent (`#D97757`), one primary, consistent usage;
  matches Option A or B.
- **Typography adherence** — heading/body/mono roles and the desktop scale above.
- **Narrative arc** — does the story move now → context (Ranger, data science) →
  practical AI, with operating principles rather than resume bullets?
- **Healthcare not over-indexed** — present and credible, but not dominating the
  hero or the whole site.
- **No resume-only copy** — sections tell stories and outcomes, not just lists.
- **No generic AI aesthetic** — warm, human, specific; not cold or templated.
- **One primary CTA per page** and mobile-first layout intact.
