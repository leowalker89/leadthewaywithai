import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-sand-200/70 bg-sand-50">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Practical AI systems for healthcare and beyond — built by Leo
              Walker, AI Engineer at KaiCare.ai.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Explore
            </span>
            <Link href="/projects" className="text-slate-600 transition-colors hover:text-terracotta-500">
              Projects
            </Link>
            <Link href="/consulting" className="text-slate-600 transition-colors hover:text-terracotta-500">
              Consulting
            </Link>
            <Link href="/talks" className="text-slate-600 transition-colors hover:text-terracotta-500">
              Talks
            </Link>
            <a
              href="https://github.com/leowalker89"
              className="text-slate-600 transition-colors hover:text-terracotta-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-slate-400">
          © {year} Lead The Way with AI. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
