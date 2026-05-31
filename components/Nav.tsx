import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/consulting", label: "Consulting" },
  { href: "/talks", label: "Talks" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-bone/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="text-ink transition-colors hover:text-terracotta-500"
          aria-label="Lead The Way with AI — home"
        >
          <Logo />
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sand-100 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
