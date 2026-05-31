import type { Metadata } from "next";
import RepoCard from "@/components/RepoCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Leo Walker — agent skills, LLM composition patterns, NLP tooling, and the practical AI systems behind them.",
};

const repos = [
  {
    name: "lead-the-way-with-ai",
    url: "https://github.com/leowalker89/lead-the-way-with-ai",
    description:
      "Research, agent skills & tools for building effective AI workflows.",
  },
  {
    name: "first-principles-thinking-skills",
    url: "https://github.com/leowalker89/first-principles-thinking-skills",
    description:
      "Chained agent skills for structured first-principles thinking (Cursor, Claude Code, Codex CLI).",
  },
  {
    name: "todo-agent",
    url: "https://github.com/leowalker89/todo-agent",
    description: "AI Engineer 101: a simple to-do agent.",
  },
  {
    name: "llm-composition-patterns",
    url: "https://github.com/leowalker89/llm-composition-patterns",
    description: "LLM composition patterns in Python.",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <header className="max-w-prose">
        <p className="text-sm font-medium uppercase tracking-wider text-sage-500">
          Work
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          What I&apos;ve built
        </h1>
        <p className="mt-5 font-sans text-lg leading-relaxed text-fg/75">
          Open-source agent skills, LLM composition patterns, and the building
          blocks behind practical AI systems.
        </p>
      </header>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {repos.map((repo) => (
          <RepoCard key={repo.name} {...repo} />
        ))}
      </div>
    </section>
  );
}
