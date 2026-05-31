import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consulting",
  description:
    "Work with Leo Walker — AI engineering, workshops, and advisory across LLM systems, agent workflows, NLP, and clinical AI.",
};

const services = [
  {
    title: "Engineering",
    body: "Hands-on help designing, building, and shipping AI systems — from prototype to production. Architecture reviews, implementation, and getting unstuck.",
  },
  {
    title: "Workshops",
    body: "Practical, code-forward sessions for teams getting serious about LLMs, agentic workflows, and the tooling around them.",
  },
  {
    title: "Advisory",
    body: "Ongoing guidance for teams navigating AI strategy, evaluation, and the realities of putting models into production.",
  },
];

const focusAreas = [
  "LLM systems",
  "Agent workflows",
  "NLP",
  "Evaluation & reliability",
  "Clinical AI",
];

export default function Consulting() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <header className="max-w-prose">
        <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
          Contact &amp; consulting
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Let&apos;s build something that works
        </h1>
        <p className="mt-5 font-sans text-lg leading-relaxed text-fg/75">
          I work with teams building real AI systems. The goal is always the
          same: practical, reliable software — not hype. Most engagements blend
          engineering, teaching, and advisory.
        </p>
      </header>

      {/* Services */}
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-line bg-surface/60 p-7"
          >
            <h2 className="font-display text-xl font-semibold text-fg">
              {service.title}
            </h2>
            <p className="mt-3 font-sans text-base leading-relaxed text-fg/75">
              {service.body}
            </p>
          </div>
        ))}
      </div>

      {/* Focus areas */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
          Focus areas
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-sage-500/40 bg-sage-500/10 px-4 py-2 text-sm font-medium text-sage-500"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Primary CTA */}
      <div className="mt-20 rounded-2xl border border-line bg-surface p-8 sm:p-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
          Start a conversation
        </h2>
        <p className="mt-4 max-w-prose font-sans text-lg leading-relaxed text-fg/75">
          If you&apos;re working on something where practical AI could help, I&apos;d be
          glad to hear about it. The best first step is a short conversation.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:hello@leadthewaywithai.com"
            className="inline-flex items-center gap-2.5 rounded-lg bg-terracotta-500 px-6 py-3.5 text-sm font-semibold text-charcoal-base transition-colors hover:bg-terracotta-600"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="m3 6 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/leowalker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-terracotta-500/60 hover:text-terracotta-500"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
              <path d="M4.98 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.5 8.25h3v8.25h-3V8.25Zm5 0h2.87v1.13h.04c.4-.72 1.38-1.48 2.84-1.48 3.04 0 3.6 1.9 3.6 4.38v4.22h-3v-3.74c0-.9-.02-2.05-1.27-2.05-1.27 0-1.46.97-1.46 1.98v3.81h-3V8.25Z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
        <p className="mt-5 text-xs text-muted">
          Contact details are placeholders for now.
        </p>
      </div>
    </section>
  );
}
