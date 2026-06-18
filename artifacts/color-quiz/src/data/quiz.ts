export type AvatarId = string;

export interface Avatar {
  id: AvatarId;
  name: string;
  emoji: string;
  bg: string;
  description: string;
}

export const AVATARS: Avatar[] = [
  { id: "noodle", name: "Noodle", emoji: "🍜", bg: "from-orange-400 to-yellow-500", description: "Always hungry" },
  { id: "zap", name: "Zapster", emoji: "⚡", bg: "from-yellow-400 to-amber-500", description: "Electrically weird" },
  { id: "wobbly", name: "Wobbly", emoji: "🫠", bg: "from-purple-400 to-pink-500", description: "Slightly melting" },
  { id: "blorp", name: "Blorp", emoji: "👾", bg: "from-green-400 to-teal-500", description: "From the internet" },
  { id: "fizz", name: "Fizz", emoji: "🫧", bg: "from-cyan-400 to-blue-500", description: "Full of bubbles" },
  { id: "crunch", name: "Crunchmaster", emoji: "🥨", bg: "from-amber-400 to-orange-600", description: "Suspiciously crunchy" },
  { id: "glob", name: "Globsworth", emoji: "🔮", bg: "from-violet-400 to-purple-600", description: "Mystically confused" },
  { id: "bonk", name: "Sir Bonks-a-lot", emoji: "🔔", bg: "from-red-400 to-rose-500", description: "Rings constantly" },
];

export interface ColorOption {
  color: string;
  label: string;
  hex: string;
}

export interface Question {
  id: number;
  question: string;
  context: string;
  options: ColorOption[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "You get 10 minutes of uninterrupted silence. Which color fills your mind?",
    context: "Close your eyes and let a color appear…",
    options: [
      { color: "bg-sky-400", label: "Sky Blue", hex: "#38bdf8" },
      { color: "bg-emerald-500", label: "Forest Green", hex: "#10b981" },
      { color: "bg-violet-500", label: "Deep Violet", hex: "#8b5cf6" },
      { color: "bg-orange-400", label: "Warm Orange", hex: "#fb923c" },
      { color: "bg-rose-400", label: "Soft Pink", hex: "#fb7185" },
      { color: "bg-slate-400", label: "Cool Gray", hex: "#94a3b8" },
    ],
  },
  {
    id: 2,
    question: "Someone gives you a gift. Which ribbon makes you most excited?",
    context: "The color of the ribbon tells a lot…",
    options: [
      { color: "bg-yellow-400", label: "Sunny Yellow", hex: "#facc15" },
      { color: "bg-red-500", label: "Bold Red", hex: "#ef4444" },
      { color: "bg-teal-400", label: "Ocean Teal", hex: "#2dd4bf" },
      { color: "bg-fuchsia-500", label: "Electric Pink", hex: "#d946ef" },
      { color: "bg-indigo-500", label: "Royal Indigo", hex: "#6366f1" },
      { color: "bg-lime-400", label: "Acid Lime", hex: "#a3e635" },
    ],
  },
  {
    id: 3,
    question: "Your dream bedroom wall — what color do you paint it?",
    context: "This is your sanctuary, your space…",
    options: [
      { color: "bg-amber-300", label: "Warm Cream", hex: "#fcd34d" },
      { color: "bg-blue-600", label: "Deep Navy", hex: "#2563eb" },
      { color: "bg-green-300", label: "Sage Green", hex: "#86efac" },
      { color: "bg-purple-700", label: "Dark Plum", hex: "#7e22ce" },
      { color: "bg-pink-200", label: "Blush Rose", hex: "#fbcfe8" },
      { color: "bg-zinc-700", label: "Charcoal", hex: "#3f3f46" },
    ],
  },
  {
    id: 4,
    question: "You discover a secret door. The door is painted which color?",
    context: "Trust your first instinct here…",
    options: [
      { color: "bg-red-700", label: "Deep Crimson", hex: "#b91c1c" },
      { color: "bg-cyan-400", label: "Electric Cyan", hex: "#22d3ee" },
      { color: "bg-yellow-600", label: "Golden Brown", hex: "#ca8a04" },
      { color: "bg-emerald-700", label: "Dark Emerald", hex: "#047857" },
      { color: "bg-violet-400", label: "Lavender", hex: "#a78bfa" },
      { color: "bg-orange-600", label: "Burnt Orange", hex: "#ea580c" },
    ],
  },
  {
    id: 5,
    question: "It's storming outside. Which color feels like comfort right now?",
    context: "You're warm, safe, and cozy inside…",
    options: [
      { color: "bg-amber-500", label: "Fireplace Gold", hex: "#f59e0b" },
      { color: "bg-blue-300", label: "Soft Denim", hex: "#93c5fd" },
      { color: "bg-red-400", label: "Cozy Red", hex: "#f87171" },
      { color: "bg-teal-600", label: "Deep Teal", hex: "#0d9488" },
      { color: "bg-purple-300", label: "Lilac Dream", hex: "#c4b5fd" },
      { color: "bg-stone-400", label: "Warm Stone", hex: "#a8a29e" },
    ],
  },
  {
    id: 6,
    question: "You're creating a piece of art. What color do you use first?",
    context: "The very first brushstroke says everything…",
    options: [
      { color: "bg-black", label: "Pure Black", hex: "#000000" },
      { color: "bg-white border border-white/20", label: "Pure White", hex: "#ffffff" },
      { color: "bg-blue-500", label: "Ocean Blue", hex: "#3b82f6" },
      { color: "bg-yellow-300", label: "Bright Yellow", hex: "#fde047" },
      { color: "bg-rose-500", label: "Vivid Rose", hex: "#f43f5e" },
      { color: "bg-green-500", label: "Fresh Green", hex: "#22c55e" },
    ],
  },
];

export interface PersonalityResult {
  type: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  color: string;
  gradient: string;
}

export const PERSONALITIES: PersonalityResult[] = [
  {
    type: "dreamer",
    emoji: "🌙",
    title: "The Dreamer",
    description: "You live in a world of imagination and deep feeling. Blues and purples draw you in — you're introspective, creative, and find beauty in quiet moments.",
    traits: ["Creative", "Empathetic", "Thoughtful", "Imaginative"],
    color: "#8b5cf6",
    gradient: "from-violet-500 to-blue-600",
  },
  {
    type: "spark",
    emoji: "⚡",
    title: "The Spark",
    description: "You are energy in human form. Yellows and oranges light up your world — bold, spontaneous, and contagiously enthusiastic about everything.",
    traits: ["Energetic", "Spontaneous", "Optimistic", "Bold"],
    color: "#f59e0b",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    type: "sage",
    emoji: "🌿",
    title: "The Sage",
    description: "You're grounded and wise. Greens and earthy tones resonate with you — a natural peacemaker who brings calm and clarity wherever you go.",
    traits: ["Grounded", "Wise", "Peaceful", "Reliable"],
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    type: "flame",
    emoji: "🔥",
    title: "The Flame",
    description: "Passionate and unstoppable. Reds and crimson dominate your palette — you're driven, intense, and leave a lasting impression on everyone you meet.",
    traits: ["Passionate", "Driven", "Intense", "Magnetic"],
    color: "#ef4444",
    gradient: "from-red-500 to-rose-600",
  },
  {
    type: "mystic",
    emoji: "🔮",
    title: "The Mystic",
    description: "You see what others miss. Dark and deep colors call to you — a curious, independent spirit who lives on the edge of imagination and reality.",
    traits: ["Mysterious", "Independent", "Intuitive", "Deep"],
    color: "#7c3aed",
    gradient: "from-purple-700 to-indigo-800",
  },
  {
    type: "breeze",
    emoji: "🌊",
    title: "The Breeze",
    description: "Light, adaptable, and refreshing. Cool teals and cyans speak your language — you're free-spirited, open-minded, and bring freshness to every room.",
    traits: ["Flexible", "Open-minded", "Refreshing", "Free"],
    color: "#06b6d4",
    gradient: "from-cyan-400 to-sky-500",
  },
];

export function computePersonality(answers: string[]): PersonalityResult {
  const colorMap: Record<string, string> = {
    "#38bdf8": "dreamer", "#2563eb": "dreamer", "#6366f1": "dreamer", "#3b82f6": "dreamer", "#93c5fd": "dreamer",
    "#8b5cf6": "dreamer", "#a78bfa": "dreamer", "#c4b5fd": "dreamer", "#7e22ce": "mystic",
    "#d946ef": "mystic", "#7c3aed": "mystic",
    "#facc15": "spark", "#fde047": "spark", "#fb923c": "spark", "#f59e0b": "spark", "#fcd34d": "spark",
    "#a3e635": "spark", "#ca8a04": "spark",
    "#ef4444": "flame", "#f43f5e": "flame", "#b91c1c": "flame", "#f87171": "flame", "#e11d48": "flame",
    "#fb7185": "dreamer", "#fbcfe8": "dreamer",
    "#10b981": "sage", "#86efac": "sage", "#047857": "sage", "#22c55e": "sage", "#2dd4bf": "breeze",
    "#0d9488": "breeze", "#22d3ee": "breeze", "#38bdf8": "breeze",
    "#06b6d4": "breeze", "#0284c7": "breeze",
    "#94a3b8": "mystic", "#3f3f46": "mystic", "#a8a29e": "sage", "#000000": "mystic",
    "#ffffff": "breeze", "#ea580c": "flame",
  };

  const counts: Record<string, number> = {
    dreamer: 0, spark: 0, sage: 0, flame: 0, mystic: 0, breeze: 0,
  };

  for (const hex of answers) {
    const type = colorMap[hex];
    if (type) counts[type]++;
  }

  const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return PERSONALITIES.find((p) => p.type === winner) ?? PERSONALITIES[0];
}
