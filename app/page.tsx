import Link from "next/link";

const proofPoints = [
  "75th Ranger Regiment",
  "MS Data Science · University of Denver",
  "Early NLP builder, since 2016",
  "KaiCare.ai",
  "MLOps Community",
];

const timeline = [
  {
    era: "The Regiment",
    title: "75th Ranger Regiment",
    body: "Where I learned that standards are not negotiable and that a plan only matters if it survives contact. Precision, ownership, and calm under load — the operating habits everything since has been built on.",
  },
  {
    era: "Data & NLP",
    title: "Analytics and early NLP",
    body: "I followed the data — into energy and venture capital — and got hooked on language models before they were fashionable. The lesson: the hard part is rarely the model, it's framing the right question and trusting the signal.",
  },
  {
    era: "Graduate study",
    title: "MS, Data Science — University of Denver",
    body: "Formalized the pattern recognition. Statistics, ML, and the discipline to tell a real result from a comfortable one. I came out caring less about novelty and more about systems that hold up.",
  },
  {
    era: "AI engineering",
    title: "Building practical AI systems",
    body: "Agents, LLM composition, evaluation, and the unglamorous plumbing that makes them dependable. Good AI engineering is mostly judgment about what to automate, what to verify, and what to leave to a human.",
  },
  {
    era: "Now",
    title: "Clinical AI at KaiCare.ai",
    body: "Remote patient monitoring and care-management systems where the stakes are real. It's the current proving ground for the same principle: turn messy complexity into something a team can actually move on.",
  },
];

const work = [
  {
    title: "Agentic workflows",
    body: "Agent skills, tools, and MCP integrations that hold up in production — not demos. Built around clear contracts and verifiable steps.",
    tags: ["Agents", "MCP", "Tooling"],
  },
  {
    title: "LLM systems",
    body: "Composition, evaluation, and observability for language-model applications that stay reliable under real load.",
    tags: ["LLMs", "Evals", "Python"],
  },
  {
    title: "Clinical AI · KaiCare.ai",
    body: "Remote patient monitoring and care management — AI applied to the messy realities of care delivery, where correctness and trust matter most.",
    tags: ["Healthcare", "RPM/CCM", "Production"],
  },
];

const writing = [
  {
    kind: "Notes",
    title: "What reliable agent workflows actually require",
    blurb:
      "Contracts, verification, and the boring scaffolding that separates a demo from a system you'd trust on call.",
  },
  {
    kind: "Series",
    title: "Coding Agents Lunch & Learn — MLOps Community",
    blurb:
      "An ongoing series on building effectively with coding agents: tooling, workflows, and what holds up in practice.",
    href: "/talks",
  },
  {
    kind: "Essay",
    title: "From the Regiment to the repo",
    blurb:
      "How military operating principles — standards, ownership, after-action honesty — translate to leading engineering work.",
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
            I&apos;m Leo Walker — an AI engineer with a Ranger&apos;s instinct for
            execution and a data scientist&apos;s eye for signal. I&apos;ve been building
            with NLP since 2016. Today I turn hard, ambiguous problems into
            practical systems teams can actually move on — currently in clinical
            AI at KaiCare.ai.
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

      {/* Story timeline */}
      <section
        id="story"
        aria-labelledby="story-heading"
        className="scroll-mt-20"
      >
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-prose">
            <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
              The through-line
            </p>
            <h2
              id="story-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              Precision from the military. Pattern recognition from data.
              Practical systems from AI.
            </h2>
            <p className="mt-5 font-sans text-lg leading-relaxed text-fg/75">
              Different chapters, one habit: take something complex and make it
              move. Here&apos;s the arc — and what each part taught me about doing
              the work.
            </p>
          </div>

          <ol className="mt-14 space-y-0">
            {timeline.map((step) => (
              <li
                key={step.title}
                className="reveal grid gap-x-8 gap-y-2 border-l-2 border-line pb-10 pl-6 last:pb-0 sm:grid-cols-[10rem_1fr] sm:pl-8"
              >
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-terracotta-500 bg-bg sm:-left-[2.15rem]"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-500">
                    {step.era}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-fg/75">
                    {step.body}
                  </p>
                </div>
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

      {/* Thought leadership / writing */}
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
                Notes on clinical AI, NLP, agent workflows, and the long road
                from the military to building software. Active ideas — more
                landing here over time.
              </p>
            </div>
            <Link
              href="/talks"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-500 transition-colors hover:text-terracotta-600"
            >
              Talks &amp; series
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {writing.map((post) => {
              const inner = (
                <>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sage-500">
                    {post.kind}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-fg">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-base leading-relaxed text-fg/75">
                    {post.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted">
                    {post.href ? "Read more" : "Coming soon"}
                  </span>
                </>
              );
              return post.href ? (
                <Link
                  key={post.title}
                  href={post.href}
                  className="reveal flex flex-col rounded-xl border border-line bg-surface/60 p-7 transition-all hover:-translate-y-0.5 hover:border-terracotta-500/40"
                >
                  {inner}
                </Link>
              ) : (
                <article
                  key={post.title}
                  className="reveal flex flex-col rounded-xl border border-line bg-surface/60 p-7"
                >
                  {inner}
                </article>
              );
            })}
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
              If you&apos;re building something where practical AI could move the
              needle — or you just want to compare notes — I&apos;d like to hear
              about it.
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
