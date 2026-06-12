import * as React from "react";

type IllustrationProps = { className?: string };

export function SkinFadeIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="sf-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
        <linearGradient id="sf-shine" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Head */}
      <ellipse cx="100" cy="100" rx="62" ry="72" fill="url(#sf-fade)" stroke="#222" />
      {/* Hair top texture */}
      <path
        d="M50 80c5-22 28-32 50-32s45 10 50 32c-12-10-30-14-50-14s-38 4-50 14z"
        fill="#0a0a0a"
      />
      {/* Fade lines */}
      <path d="M40 130c20-6 40-8 60-8s40 2 60 8" stroke="#10b981" strokeOpacity="0.45" strokeWidth="1" fill="none" />
      <path d="M45 145c20-4 38-6 55-6s35 2 55 6" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <path d="M50 160c20-3 35-4 50-4s30 1 50 4" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" fill="none" />
      {/* Highlight */}
      <ellipse cx="78" cy="78" rx="14" ry="22" fill="url(#sf-shine)" opacity="0.5" />
    </svg>
  );
}

export function TaperFadeIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="tf-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="62" ry="72" fill="url(#tf-fade)" stroke="#222" />
      <path
        d="M50 80c5-20 28-30 50-30s45 10 50 30c-12-8-30-12-50-12s-38 4-50 12z"
        fill="#0a0a0a"
      />
      <path d="M48 135c18-5 36-7 52-7s34 2 52 7" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1" fill="none" />
      <path d="M55 152c16-3 30-4 45-4s29 1 45 4" stroke="#10b981" strokeOpacity="0.25" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function BuzzCutIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="bc-fade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <pattern id="bc-dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="#10b981" fillOpacity="0.5" />
        </pattern>
      </defs>
      <ellipse cx="100" cy="100" rx="62" ry="72" fill="url(#bc-fade)" stroke="#222" />
      <ellipse cx="100" cy="80" rx="58" ry="38" fill="url(#bc-dots)" opacity="0.5" />
    </svg>
  );
}

export function CrewCutIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="cc-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1d1d1d" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="62" ry="72" fill="url(#cc-fade)" stroke="#222" />
      <path
        d="M48 78c4-18 28-26 52-26s48 8 52 26c-14-6-30-9-52-9s-38 3-52 9z"
        fill="#0a0a0a"
      />
      <path
        d="M50 100c14-3 32-4 50-4s36 1 50 4"
        stroke="#10b981"
        strokeOpacity="0.35"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export function TexturedCropIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="tc-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="62" ry="72" fill="url(#tc-fade)" stroke="#222" />
      {/* Textured fringe */}
      <path
        d="M48 78c2-6 6-10 10-12c-2 4-3 8-3 12zm10-14c3-2 6-3 9-3c-2 3-3 7-3 11zm12-3c4-1 8-1 12 0c-1 4-2 8-2 12zm16 0c4 0 8 1 11 3c-1 4-2 8-2 12zm15 5c3 2 6 5 8 9c-3 1-6 4-9 8zm10 12c2 4 3 8 3 13c-4-1-9 0-13 2z"
        fill="#0a0a0a"
      />
      <path d="M48 100c18-3 36-4 52-4s34 1 52 4" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function BeardStylingIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="bs-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="92" rx="60" ry="70" fill="url(#bs-fade)" stroke="#222" />
      {/* Beard */}
      <path
        d="M55 130c10 25 30 38 45 38s35-13 45-38c-6 4-14 6-22 6c-12 0-18-4-23-8c-5 4-11 8-23 8c-8 0-16-2-22-6z"
        fill="#0a0a0a"
      />
      {/* Mustache */}
      <path
        d="M70 118c8 4 14 4 18 0c4 4 10 4 18 0c-2 6-8 9-14 9c-2 0-3-1-4-2c-1 1-2 2-4 2c-6 0-12-3-14-9z"
        fill="#0a0a0a"
      />
      <path d="M50 140c16 18 35 30 50 30s34-12 50-30" stroke="#10b981" strokeOpacity="0.35" strokeWidth="1" fill="none" />
    </svg>
  );
}

export const haircutIllustrations = {
  "skin-fade": SkinFadeIllustration,
  "taper-fade": TaperFadeIllustration,
  "buzz-cut": BuzzCutIllustration,
  "crew-cut": CrewCutIllustration,
  "textured-crop": TexturedCropIllustration,
  "beard-styling": BeardStylingIllustration
} as const;
