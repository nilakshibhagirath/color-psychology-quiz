import React from "react";

type AvatarId = "noodle" | "zap" | "wobbly" | "blorp" | "fizz" | "crunch" | "glob" | "bonk";

interface Props {
  id: AvatarId | string;
  size?: number;
}

const avatarSvgs: Record<string, (size: number) => React.ReactElement> = {
  noodle: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#FFA94D" />
      <ellipse cx="30" cy="35" rx="6" ry="7" fill="white" />
      <ellipse cx="50" cy="35" rx="6" ry="7" fill="white" />
      <circle cx="30" cy="36" r="3.5" fill="#1a1a2e" />
      <circle cx="50" cy="36" r="3.5" fill="#1a1a2e" />
      <circle cx="31" cy="35" r="1.2" fill="white" />
      <circle cx="51" cy="35" r="1.2" fill="white" />
      <ellipse cx="40" cy="55" rx="10" ry="5" fill="#FF6B35" />
      <path d="M30 55 Q40 62 50 55" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
      <ellipse cx="22" cy="20" rx="4" ry="6" fill="#FF6B35" transform="rotate(-20 22 20)" />
      <ellipse cx="40" cy="16" rx="4" ry="5" fill="#FF6B35" />
      <ellipse cx="58" cy="20" rx="4" ry="6" fill="#FF6B35" transform="rotate(20 58 20)" />
      <circle cx="22" cy="38" r="3" fill="#FF8C5A" opacity="0.7" />
      <circle cx="58" cy="38" r="3" fill="#FF8C5A" opacity="0.7" />
    </svg>
  ),
  zap: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#FBBF24" />
      <ellipse cx="30" cy="34" rx="7" ry="8" fill="white" />
      <ellipse cx="50" cy="34" rx="7" ry="8" fill="white" />
      <ellipse cx="30" cy="35" rx="4" ry="5" fill="#1a1a2e" />
      <ellipse cx="50" cy="35" rx="4" ry="5" fill="#1a1a2e" />
      <circle cx="28" cy="33" r="1.5" fill="white" />
      <circle cx="48" cy="33" r="1.5" fill="white" />
      <path d="M33 52 Q40 58 47 52" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M28 18 L35 28 L28 26 L38 38" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M52 18 L45 28 L52 26 L42 38" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M24 25 Q40 15 56 25" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M24 25 Q40 15 56 25" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  ),
  wobbly: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="44" rx="34" ry="36" fill="#C084FC" />
      <circle cx="40" cy="36" r="30" fill="#C084FC" />
      <ellipse cx="29" cy="33" rx="6" ry="7" fill="white" />
      <ellipse cx="51" cy="35" rx="6" ry="7" fill="white" />
      <circle cx="29" cy="34" r="3" fill="#1a1a2e" />
      <circle cx="51" cy="36" r="3.5" fill="#1a1a2e" />
      <circle cx="28" cy="33" r="1" fill="white" />
      <circle cx="50" cy="35" r="1.2" fill="white" />
      <path d="M30 52 Q35 57 40 54 Q45 51 50 54" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="40" cy="13" rx="12" ry="8" fill="#A855F7" />
      <ellipse cx="25" cy="18" rx="5" ry="9" fill="#A855F7" transform="rotate(-15 25 18)" />
      <ellipse cx="55" cy="18" rx="5" ry="9" fill="#A855F7" transform="rotate(15 55 18)" />
    </svg>
  ),
  blorp: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <rect x="4" y="4" width="72" height="72" rx="12" fill="#34D399" />
      <rect x="14" y="28" width="14" height="18" rx="3" fill="#1a1a2e" />
      <rect x="16" y="30" width="10" height="14" rx="2" fill="#00FF88" opacity="0.8" />
      <rect x="52" y="28" width="14" height="18" rx="3" fill="#1a1a2e" />
      <rect x="54" y="30" width="10" height="14" rx="2" fill="#00FF88" opacity="0.8" />
      <rect x="18" y="48" width="44" height="10" rx="5" fill="#1a1a2e" />
      <rect x="23" y="51" width="6" height="4" rx="2" fill="#34D399" />
      <rect x="33" y="51" width="6" height="4" rx="2" fill="#34D399" />
      <rect x="43" y="51" width="6" height="4" rx="2" fill="#34D399" />
      <rect x="53" y="51" width="6" height="4" rx="2" fill="#34D399" />
      <circle cx="28" cy="17" r="5" fill="#1a1a2e" />
      <circle cx="40" cy="14" r="5" fill="#1a1a2e" />
      <circle cx="52" cy="17" r="5" fill="#1a1a2e" />
      <circle cx="29" cy="16" r="2" fill="#00FF88" />
      <circle cx="41" cy="13" r="2" fill="#00FF88" />
      <circle cx="53" cy="16" r="2" fill="#00FF88" />
    </svg>
  ),
  fizz: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#22D3EE" />
      <circle cx="40" cy="40" r="38" fill="url(#fizz-grad)" />
      <defs>
        <radialGradient id="fizz-grad" cx="40%" cy="30%">
          <stop stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#0891B2" />
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="36" rx="7" ry="8" fill="white" />
      <ellipse cx="50" cy="36" rx="7" ry="8" fill="white" />
      <circle cx="30" cy="37" r="4" fill="#164E63" />
      <circle cx="50" cy="37" r="4" fill="#164E63" />
      <circle cx="28" cy="35" r="1.5" fill="white" />
      <circle cx="48" cy="35" r="1.5" fill="white" />
      <path d="M32 53 Q40 60 48 53" stroke="#164E63" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="22" r="3" fill="white" opacity="0.7" />
      <circle cx="60" cy="20" r="2" fill="white" opacity="0.7" />
      <circle cx="15" cy="35" r="2" fill="white" opacity="0.5" />
      <circle cx="65" cy="38" r="2.5" fill="white" opacity="0.5" />
      <circle cx="30" cy="12" r="2.5" fill="white" opacity="0.6" />
      <circle cx="52" cy="14" r="1.5" fill="white" opacity="0.6" />
      <circle cx="40" cy="10" r="3" fill="white" opacity="0.5" />
    </svg>
  ),
  crunch: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#D97706" />
      <path d="M10 40 Q40 8 70 40 Q40 72 10 40Z" fill="#B45309" />
      <circle cx="40" cy="40" r="28" fill="#FBBF24" />
      <ellipse cx="30" cy="36" rx="6" ry="7" fill="white" />
      <ellipse cx="50" cy="36" rx="6" ry="7" fill="white" />
      <circle cx="30" cy="37" r="3.5" fill="#78350F" />
      <circle cx="50" cy="37" r="3.5" fill="#78350F" />
      <circle cx="29" cy="36" r="1.2" fill="white" />
      <circle cx="49" cy="36" r="1.2" fill="white" />
      <rect x="28" y="50" width="24" height="8" rx="4" fill="#78350F" />
      <rect x="30" y="52" width="4" height="4" rx="1" fill="#FBBF24" />
      <rect x="36" y="52" width="4" height="4" rx="1" fill="#FBBF24" />
      <rect x="42" y="52" width="4" height="4" rx="1" fill="#FBBF24" />
      <path d="M22 24 Q30 18 40 22 Q50 18 58 24" stroke="#92400E" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  ),
  glob: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#7C3AED" />
      <circle cx="40" cy="40" r="38" fill="url(#glob-grad)" />
      <defs>
        <radialGradient id="glob-grad">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#4C1D95" />
        </radialGradient>
      </defs>
      <ellipse cx="28" cy="34" rx="8" ry="9" fill="white" />
      <ellipse cx="52" cy="34" rx="8" ry="9" fill="white" />
      <circle cx="28" cy="35" r="5" fill="#2D1B69" />
      <circle cx="52" cy="35" r="5" fill="#2D1B69" />
      <circle cx="26" cy="33" r="2" fill="white" />
      <circle cx="50" cy="33" r="2" fill="white" />
      <circle cx="34" cy="53" r="8" fill="#6D28D9" />
      <path d="M26 53 Q40 62 54 53" fill="#6D28D9" />
      <path d="M30 55 Q40 63 50 55" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M20 16 Q30 10 40 14" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 14 Q50 10 60 16" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="12" r="3" fill="#C4B5FD" />
      <circle cx="20" cy="16" r="2.5" fill="#C4B5FD" />
      <circle cx="60" cy="16" r="2.5" fill="#C4B5FD" />
    </svg>
  ),
  bonk: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#F87171" />
      <ellipse cx="40" cy="42" rx="26" ry="24" fill="#FCA5A5" />
      <ellipse cx="30" cy="38" rx="7" ry="8" fill="white" />
      <ellipse cx="50" cy="38" rx="7" ry="8" fill="white" />
      <circle cx="30" cy="39" r="4.5" fill="#7F1D1D" />
      <circle cx="50" cy="39" r="4.5" fill="#7F1D1D" />
      <circle cx="28" cy="37" r="1.8" fill="white" />
      <circle cx="48" cy="37" r="1.8" fill="white" />
      <path d="M32 56 Q40 62 48 56" stroke="#7F1D1D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M22 14 L18 22 L26 20 L22 28" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 10 L36 20 L44 18" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 14 L62 22 L54 20 L58 28" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 35 C14 35 10 38 12 42 C14 46 20 44 20 44" fill="#FECACA" stroke="#FCA5A5" />
      <path d="M60 35 C66 35 70 38 68 42 C66 46 60 44 60 44" fill="#FECACA" stroke="#FCA5A5" />
    </svg>
  ),
};

export default function FunnyAvatar({ id, size = 80 }: Props) {
  const render = avatarSvgs[id];
  if (!render) return <span style={{ fontSize: size * 0.7 }}>🙂</span>;
  return render(size);
}
