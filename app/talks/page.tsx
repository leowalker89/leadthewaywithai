import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing & Talks",
  description:
    "Leo Walker co-hosts the Coding Agents Lunch & Learn series with the MLOps Community, and writes on clinical AI, NLP, agent workflows, and military-to-startup leadership.",
};

const notes = [
  {
    kind: "Notes",
    title: "What reliable agent workflows actually require",
    blurb:
      "Contracts, verification, and the boring scaffolding that separates a demo from a system you'd trust on call.",
  },
  {
    kind: "Essay",
    title: "From the Regiment to the repo",
    blurb:
      "How military operating principles — standards, ownership, after-action honesty — translate to leading engineering work.",
  },
  {
    kind: "Notes",
    title: "NLP, before and after the LLM era",
    blurb:
      "A decade of language work, and what stayed true once the models got good: framing beats raw horsepower.",
  },
];

const sessions = [1, 2, 3, 4, 5, 6, 7, 8, 13];

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
          Notes and talks on clinical AI, NLP, agent workflows, and the road
          from the military to building software. Active ideas — more landing
          here over time.
        </p>
      </header>

      {/* Writing / notes */}
      <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight text-fg">
        Notes &amp; essays
      </h2>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <li
            key={note.title}
            className="flex flex-col rounded-xl border border-line bg-surface/60 p-6"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sage-500">
              {note.kind}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-fg">
              {note.title}
            </h3>
            <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-fg/70">
              {note.blurb}
            </p>
            <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted">
              Coming soon
            </span>
          </li>
        ))}
      </ul>

      {/* Talk series */}
      <div className="mt-20 max-w-prose">
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
          </a>
          , exploring how to build effectively with coding agents — tooling,
          workflows, and what actually works in practice.
        </p>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((n) => (
          <li
            key={n}
            className="flex flex-col rounded-xl border border-line bg-surface/60 p-6"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sage-500">
              Session {n}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-fg">
              Coding Agents Lunch &amp; Learn
            </h3>
            <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-fg/70">
              Recording link coming soon.
            </p>
            <span
              aria-hidden="true"
              className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500/60" />
              Recording TBD
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-16">
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
    </section>
  );
}
