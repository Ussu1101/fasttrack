import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "h-9 w-auto", showTagline = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 group transition-opacity hover:opacity-95" aria-label="FastTrack Home">
      <svg
        className={className}
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="logoTitle"
      >
        <title id="logoTitle">FastTrack - Circadian Precision Intermittent Fasting</title>
        {/* FastTrack Logomark: Intersecting circadian arcs */}
        <g transform="translate(4, 4)">
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="#0F4C47"
            strokeWidth="2.5"
            strokeDasharray="64 24"
            strokeLinecap="round"
          />
          <circle
            cx="16"
            cy="16"
            r="9"
            stroke="#38A169"
            strokeWidth="2"
            strokeDasharray="38 18"
            strokeLinecap="round"
          />
          <path
            d="M16 8L16 16L21 16"
            stroke="#0F4C47"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="21" cy="16" r="2" fill="#F59E0B" />
        </g>
        {/* Wordmark */}
        <text
          x="46"
          y="26"
          fontFamily="var(--font-plus-jakarta), system-ui, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-0.5px"
          fill="#131B2E"
        >
          Fast<tspan fill="#0F4C47">Track</tspan>
        </text>
      </svg>
      {showTagline && (
        <span className="hidden sm:inline-block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider pl-2 border-l border-outline-variant">
          Circadian Rhythm
        </span>
      )}
    </Link>
  );
}
