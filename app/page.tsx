import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden">
        <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage-400/40 bg-sage-400/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-sage-700">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500" />
            AI Engineer · KaiCare.ai
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Helping clinics move faster with AI
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Engineer by foundation. Ranger by training. Sharpened by data
            science across energy and venture capital. Now building AI that
            moves healthcare forward.
          </p>
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-terracotta-500 px-6 py-3.5 text-sm font-semibold text-bone shadow-sm transition-colors hover:bg-terracotta-600"
            >
              See My Work
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M4 10h12m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* decorative ridge line */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block h-16 w-full text-sand-100 sm:h-24"
        >
          <path
            d="M0 120 L0 80 L180 40 L360 75 L540 25 L720 70 L900 35 L1080 65 L1200 30 L1200 120 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* Short bio */}
      <section
        aria-labelledby="bio-heading"
        className="bg-sand-100"
      >
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
            <div>
              <h2
                id="bio-heading"
                className="font-display text-2xl font-medium tracking-tight text-ink"
              >
                About Leo
              </h2>
              <p className="mt-4 text-sm font-medium uppercase tracking-wider text-sage-700">
                Engineering · Healthcare AI · Teaching
              </p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Leo Walker is an AI engineer and partner at KaiCare.ai, building
                remote patient monitoring and clinical care management systems.
                His foundation is engineering, sharpened by service in the 75th
                Ranger Regiment, advanced analytics work in energy and venture
                capital, and a Master&apos;s in Data Science from the University of
                Denver.
              </p>
              <p>
                He now applies that range to healthcare AI — from LLM-powered
                workflows to production RPM platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section
        aria-labelledby="focus-heading"
        className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24"
      >
        <h2
          id="focus-heading"
          className="font-display text-2xl font-medium tracking-tight text-ink"
        >
          What I work on
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-sand-200 bg-sand-200 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Agentic workflows",
              body: "Agent skills, tools, and MCP integrations that make AI systems genuinely useful in production.",
            },
            {
              title: "LLM systems",
              body: "Composition patterns, evaluation, and observability for language-model applications that hold up under real load.",
            },
            {
              title: "Healthcare AI",
              body: "Remote patient monitoring and clinical care management — AI applied to the messy realities of care delivery.",
            },
            {
              title: "Data pipelines",
              body: "Reliable ingestion, transformation, and analytics foundations that AI products depend on.",
            },
            {
              title: "Product workflows",
              body: "Turning model capabilities into workflows clinicians and teams actually adopt.",
            },
            {
              title: "Teaching & writing",
              body: "Sharing what works — practical AI engineering for the people building the next wave of systems.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-bone p-7">
              <h3 className="font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
