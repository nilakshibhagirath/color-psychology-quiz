import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import FunnyAvatar from "@/components/FunnyAvatar";
import { computePersonality, PERSONALITIES } from "@/data/quiz";

export default function Results() {
  const [, navigate] = useLocation();
  const [revealed, setRevealed] = useState(false);
  const [personality, setPersonality] = useState(PERSONALITIES[0]);

  const avatarId = sessionStorage.getItem("avatarId") ?? "noodle";
  const avatarName = sessionStorage.getItem("avatarName") ?? "Player";

  useEffect(() => {
    const raw = sessionStorage.getItem("quizAnswers");
    if (!raw) {
      navigate("/");
      return;
    }
    const answers: string[] = JSON.parse(raw);
    const result = computePersonality(answers);
    setPersonality(result);
    setTimeout(() => setRevealed(true), 100);
  }, [navigate]);

  function handleRetry() {
    sessionStorage.removeItem("quizAnswers");
    navigate("/quiz");
  }

  function handleHome() {
    sessionStorage.removeItem("quizAnswers");
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 select-none">
      <div
        className={`w-full max-w-lg mx-auto flex flex-col items-center gap-6 transition-all duration-700 ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            Your result
          </span>
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl animate-pop-in shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${personality.color}33, ${personality.color}11)`,
              border: `2px solid ${personality.color}66`,
              boxShadow: `0 0 40px ${personality.color}40`,
            }}
          >
            {personality.emoji}
          </div>
          <h1
            className="text-4xl font-black text-center mt-2"
            style={{ color: personality.color }}
          >
            {personality.title}
          </h1>
        </div>

        <div
          className="w-full rounded-3xl p-6 flex flex-col gap-4"
          style={{
            background: `linear-gradient(135deg, ${personality.color}10, ${personality.color}05)`,
            border: `1px solid ${personality.color}30`,
          }}
        >
          <p className="text-foreground/90 text-center leading-relaxed">
            {personality.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {personality.traits.map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 rounded-full text-sm font-semibold"
                style={{
                  background: `${personality.color}20`,
                  color: personality.color,
                  border: `1px solid ${personality.color}40`,
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div
          className="w-full rounded-2xl p-4 flex items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
            <FunnyAvatar id={avatarId} size={48} />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{avatarName}</p>
            <p className="text-xs text-muted-foreground">is {personality.title}</p>
          </div>
          <div
            className="ml-auto text-2xl w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: `${personality.color}20` }}
          >
            {personality.emoji}
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <button
            onClick={handleRetry}
            className="flex-1 py-3 rounded-2xl font-semibold text-sm transition-all duration-150 hover:opacity-90 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Try Again
          </button>
          <button
            onClick={handleHome}
            className="flex-1 py-3 rounded-2xl font-bold text-sm transition-all duration-150 hover:opacity-90 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${personality.color}, ${personality.color}cc)`,
              color: "white",
              boxShadow: `0 4px 20px ${personality.color}50`,
            }}
          >
            Change Avatar
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {PERSONALITIES.map((p) => (
            <div
              key={p.type}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-center transition-all duration-200"
              style={{
                background: p.type === personality.type ? `${p.color}20` : "rgba(255,255,255,0.03)",
                border: p.type === personality.type ? `1px solid ${p.color}50` : "1px solid rgba(255,255,255,0.06)",
                opacity: p.type === personality.type ? 1 : 0.45,
              }}
            >
              <span className="text-lg">{p.emoji}</span>
              <span className="text-[10px] font-medium" style={{ color: p.type === personality.type ? p.color : "rgba(255,255,255,0.6)" }}>
                {p.title.replace("The ", "")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
