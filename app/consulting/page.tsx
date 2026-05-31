import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "AI engineering consulting, workshops, and advisory — with a focus on healthcare AI, LLM systems, agent workflows, and clinical technology.",
};

const services = [
  {
    title: "Engineering consulting",
    body: "Hands-on help designing, building, and shipping AI systems — from prototypes to production. Architecture reviews, implementation, and getting unstuck.",
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
  "Healthcare AI",
  "LLM systems",
  "Agent workflows",
  "Clinical tech",
];

export default function Consulting() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          What I Do
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
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
            className="rounded-xl border border-sand-200 bg-bone p-7"
          >
            <h2 className="font-display text-xl font-semibold text-ink">
              {service.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {service.body}
            </p>
          </div>
        ))}
      </div>

      {/* Focus areas */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
          Focus areas
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-sage-400/40 bg-sage-400/10 px-4 py-2 text-sm font-medium text-sage-700"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Soft CTA */}
      <div className="mt-20 rounded-2xl border border-sand-200 bg-sand-100 p-8 sm:p-12">
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
          If you&apos;re working on something where practical AI could help, I&apos;d be
          glad to hear about it. The best first step is a short conversation.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:hello@leadthewaywithai.com"
            className="inline-flex items-center gap-2.5 rounded-lg bg-terracotta-500 px-6 py-3.5 text-sm font-semibold text-bone transition-colors hover:bg-terracotta-600"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="m3 6 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Email me
          </a>
          <a
            href="https://calendly.com/leadthewaywithai/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300 bg-bone px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-slate-400 hover:bg-sand-50"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3 8h14M7 2.5v3M13 2.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Book an intro call
          </a>
        </div>
        <p className="mt-5 text-xs text-slate-400">
          Contact details are placeholders for now.
        </p>
      </div>
    </section>
  );
}
