type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

/**
 * LTWwAI / Lead The Way with AI mark.
 * An abstract trail ascending toward a peak — "leading the way."
 * Uses currentColor so it adapts to context.
 */
export default function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
      >
        {/* ascending trail */}
        <path
          d="M4 25 L12 14 L17 19 L26 6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* summit marker */}
        <circle cx="26" cy="6" r="2.6" fill="currentColor" />
        {/* base line */}
        <path
          d="M4 28 H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
      {withWordmark && (
        <span className="hidden font-display text-lg font-semibold tracking-tight xs:inline">
          Lead The Way<span className="text-terracotta-500"> with AI</span>
        </span>
      )}
    </span>
  );
}
