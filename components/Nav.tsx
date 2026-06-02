"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="text-fg transition-colors hover:text-terracotta-500"
          aria-label="Lead The Way with AI — home"
        >
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-fg/75 transition-colors hover:bg-surface hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-sand-300/30 text-fg/75 transition-colors hover:border-terracotta-500/60 hover:text-terracotta-500"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5">
              {open ? (
                <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-5 py-3 sm:px-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-fg/80 transition-colors hover:bg-surface hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
