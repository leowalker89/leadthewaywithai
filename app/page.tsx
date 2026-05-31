import Link from "next/link";

const proofPoints = [
  "75th Ranger Regiment",
  "MS Data Science · DU",
  "NLP since 2016",
  "KaiCare.ai",
  "MLOps Community",
];

const timeline = [
  {
    era: "Regiment",
    title: "75th Ranger Regiment",
    body: "Standards, ownership, calm under load.",
  },
  {
    era: "Data & NLP",
    title: "Analytics → early NLP",
    body: "Followed the signal into language models before they were fashionable.",
  },
  {
    era: "Graduate study",
    title: "MS, Data Science — DU",
    body: "Telling a real result from a comfortable one.",
  },
  {
    era: "Now",
    title: "Clinical AI · KaiCare.ai",
    body: "Practical AI systems where correctness and trust matter.",
  },
];

const work = [
  {
    title: "Agentic workflows",
    body: "Agent skills, tools, and MCP integrations built to hold up in production.",
    tags: ["Agents", "MCP", "Tooling"],
  },
  {
    title: "LLM systems",
    body: "Composition, evaluation, and observability for reliable LLM apps.",
    tags: ["LLMs", "Evals", "Python"],
  },
  {
    title: "Clinical AI · KaiCare.ai",
    body: "Remote patient monitoring and care management.",
    tags: ["Healthcare", "RPM/CCM", "Production"],
  },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden">
        <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage-500/40 bg-sage-500/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-sage-500">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500" />
            AI engineer · Operator · Builder
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            I build AI systems that turn{" "}
            <span className="text-terracotta-500">complexity into momentum</span>.
          </h1>
          <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-fg/80 sm:text-xl">
            AI engineer with a Ranger&apos;s instinct for execution and a data
            scientist&apos;s eye for signal — currently building clinical AI at
            KaiCare.ai.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta-500 px-6 py-3.5 text-sm font-semibold text-charcoal-base shadow-sm transition-colors hover:bg-terracotta-600"
            >
              See my work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#story"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-terracotta-500/60 hover:text-terracotta-500"
            >
              Read my story
            </Link>
          </div>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block h-16 w-full text-surface sm:h-24"
        >
          <path
            d="M0 120 L0 80 L180 40 L360 75 L540 25 L720 70 L900 35 L1080 65 L1200 30 L1200 120 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* Proof bar */}
      <section aria-label="Background and credibility" className="bg-surface">
        <div className="mx-auto max-w-content px-5 py-10 sm:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center sm:gap-x-10">
            {proofPoints.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-x-6 sm:gap-x-10"
              >
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-terracotta-500/70 sm:inline-block"
                  />
                )}
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Story — compact arc */}
      <section
        id="story"
        aria-labelledby="story-heading"
        className="scroll-mt-20"
      >
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
            The through-line
          </p>
          <h2
            id="story-heading"
            className="mt-3 max-w-prose font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Precision, pattern recognition, practical systems.
          </h2>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((step) => (
              <li
                key={step.title}
                className="reveal rounded-xl border border-line bg-surface/60 p-6"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-terracotta-500">
                  {step.era}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-fg/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work / projects */}
      <section aria-labelledby="work-heading" className="bg-surface/60">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-prose">
              <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
                Selected work
              </p>
              <h2
                id="work-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
              >
                What I build
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-500 transition-colors hover:text-terracotta-600"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {work.map((item) => (
              <article
                key={item.title}
                className="reveal flex flex-col rounded-xl border border-line bg-bg p-7 transition-all hover:-translate-y-0.5 hover:border-terracotta-500/40 hover:shadow-lg hover:shadow-black/5"
              >
                <h3 className="font-display text-lg font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-base leading-relaxed text-fg/75">
                  {item.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Writing / ideas — teaser */}
      <section aria-labelledby="writing-heading">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-prose">
              <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
                Writing &amp; ideas
              </p>
              <h2
                id="writing-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
              >
                Thinking out loud
              </h2>
              <p className="mt-4 max-w-prose font-sans text-lg leading-relaxed text-fg/75">
                Notes on AI, NLP, and agent workflows — more landing here over
                time.
              </p>
            </div>
            <Link
              href="/talks"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-500 transition-colors hover:text-terracotta-600"
            >
              Writing &amp; talks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section aria-labelledby="contact-heading" className="bg-surface">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-heading"
              className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              Working on something hard?
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-fg/75">
              If practical AI could move the needle, I&apos;d like to hear about
              it.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 rounded-lg bg-terracotta-500 px-7 py-3.5 text-sm font-semibold text-charcoal-base shadow-sm transition-colors hover:bg-terracotta-600"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
