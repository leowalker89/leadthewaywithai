import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing & Talks",
  description:
    "Leo Walker co-hosts the Coding Agents Lunch & Learn series with the MLOps Community, and writes on AI, NLP, and agent workflows.",
};

const topics = ["Clinical AI", "NLP", "Agent workflows", "Military → startup"];

export default function Talks() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <header className="max-w-prose">
        <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
          Writing &amp; talks
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Ideas worth sharing
        </h1>
        <p className="mt-5 font-sans text-lg leading-relaxed text-fg/75">
          Notes and talks on AI, NLP, and the road from the military to building
          software. More landing here over time.
        </p>
      </header>

      {/* Writing — coming soon placeholder */}
      <div className="mt-14 rounded-2xl border border-dashed border-line bg-surface/60 p-8 sm:p-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sage-500">
          Notes &amp; essays
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg">
          Coming soon
        </h2>
        <p className="mt-3 max-w-prose font-sans text-base leading-relaxed text-fg/70">
          Writing is in progress. Likely topics:
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {topics.map((topic) => (
            <li
              key={topic}
              className="rounded-full border border-sage-500/40 bg-sage-500/10 px-3.5 py-1.5 text-sm font-medium text-sage-500"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Talk series */}
      <div className="mt-16 max-w-prose">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slateblue-500/40 bg-slateblue-500/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-slateblue-500">
          MLOps Community · Co-host
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          Coding Agents Lunch &amp; Learn
        </h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-fg/75">
          A recurring series with the{" "}
          <a
            href="https://home.mlops.community/home/events"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-terracotta-500 underline decoration-terracotta-400/40 underline-offset-2 transition-colors hover:decoration-terracotta-500"
          >
            MLOps Community
          </a>{" "}
          on building effectively with coding agents.
        </p>
        <div className="mt-8">
          <a
            href="https://home.mlops.community/home/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-terracotta-500/60 hover:text-terracotta-500"
          >
            See MLOps Community events
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <path
                d="M6 14 14 6m0 0H7m7 0v7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
