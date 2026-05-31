import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "Leo Walker co-hosts the Coding Agents Lunch & Learn series with the MLOps Community — practical, hands-on sessions on building with coding agents.",
};

const sessions = [1, 2, 3, 4, 5, 6, 7, 8, 13];

export default function Talks() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <header className="max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-bone px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600">
          MLOps Community · Co-host
        </p>
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Coding Agents Lunch &amp; Learn
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
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
      </header>

      <h2 className="mt-16 font-display text-2xl font-medium tracking-tight text-ink">
        Sessions
      </h2>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((n) => (
          <li
            key={n}
            className="flex flex-col rounded-xl border border-sand-200 bg-bone p-6"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sage-700">
              Session {n}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              Coding Agents Lunch &amp; Learn
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              Recording link coming soon.
            </p>
            <span
              aria-hidden="true"
              className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-sand-100 px-2.5 py-1 text-xs font-medium text-slate-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
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
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-bone px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-slate-400 hover:bg-sand-50"
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
