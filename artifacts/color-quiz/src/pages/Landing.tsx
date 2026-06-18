import { useState } from "react";
import { useLocation } from "wouter";
import FunnyAvatar from "@/components/FunnyAvatar";
import { AVATARS } from "@/data/quiz";

export default function Landing() {
  const [, navigate] = useLocation();
  const [chosen, setChosen] = useState<string | null>(null);

  function handleStart() {
    if (!chosen) return;
    sessionStorage.setItem("avatarId", chosen);
    sessionStorage.setItem("avatarName", AVATARS.find((a) => a.id === chosen)?.name ?? chosen);
    navigate("/quiz");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 select-none">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8">

        <div className="flex flex-col items-center gap-3 animate-fade-in-up">
          <div className="relative mb-2">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "conic-gradient(from 0deg, #f59e0b, #8b5cf6, #06b6d4, #f43f5e, #f59e0b)" }}
            >
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-2xl">
                🎨
              </div>
            </div>
            <div
              className="absolute inset-0 rounded-full animate-rainbow-spin"
              style={{
                background: "conic-gradient(from 0deg, #f59e0b, #8b5cf6, #06b6d4, #f43f5e, #f59e0b)",
                filter: "blur(6px)",
                opacity: 0.35,
                zIndex: -1,
              }}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-center tracking-tight">
            <span className="gradient-text">Color Psychology Quiz</span>
          </h1>
          <p className="text-muted-foreground text-center text-base md:text-lg max-w-md leading-relaxed">
            Pick colors, discover your personality. 6 vivid questions — see what your choices reveal about you.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 w-full"
          style={{ animationDelay: "0.1s" }}
        >
          {[
            { icon: "⏱️", label: "30s per question" },
            { icon: "🧠", label: "Personality reveal" },
            { icon: "🏆", label: "Instant result" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl text-sm text-muted-foreground"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Pick your avatar to begin
          </p>
          <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
            {AVATARS.map((av) => (
              <button
                key={av.id}
                onClick={() => setChosen(av.id)}
                className={`avatar-card flex flex-col items-center gap-2 p-3 rounded-2xl ${chosen === av.id ? "chosen" : ""}`}
                style={{
                  background: chosen === av.id ? "rgba(139, 92, 246, 0.15)" : "rgba(255,255,255,0.04)",
                  border: chosen === av.id ? "2px solid #8b5cf6" : "1px solid rgba(255,255,255,0.08)",
                }}
                title={`${av.name} — ${av.description}`}
              >
                <FunnyAvatar id={av.id} size={56} />
                <span className="text-xs font-medium text-foreground/80 text-center leading-tight">
                  {av.name}
                </span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight hidden sm:block">
                  {av.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={!chosen}
          className="mt-2 px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: chosen
              ? "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)"
              : "rgba(255,255,255,0.07)",
            color: "white",
            boxShadow: chosen ? "0 8px 32px rgba(139, 92, 246, 0.4)" : "none",
            transform: chosen ? "scale(1)" : "scale(0.98)",
          }}
        >
          {chosen ? `Start as ${AVATARS.find((a) => a.id === chosen)?.name} ✨` : "Choose an avatar first"}
        </button>
      </div>
    </div>
  );
}
