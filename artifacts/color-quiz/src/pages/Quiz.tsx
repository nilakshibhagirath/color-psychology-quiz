import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import FunnyAvatar from "@/components/FunnyAvatar";
import { QUESTIONS } from "@/data/quiz";

const QUESTION_TIME = 30;

export default function Quiz() {
  const [, navigate] = useLocation();

  const avatarId = sessionStorage.getItem("avatarId") ?? "noodle";
  const avatarName = sessionStorage.getItem("avatarName") ?? "Player";

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [animating, setAnimating] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionRef = useRef(false);

  const question = QUESTIONS[qIndex];

  const goNext = useCallback(
    (chosenHex: string | null) => {
      if (transitionRef.current) return;
      transitionRef.current = true;

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      const newAnswers = [...answers, chosenHex ?? ""];

      setAnimating(true);
      setVisible(false);

      setTimeout(() => {
        const nextIndex = qIndex + 1;
        if (nextIndex >= QUESTIONS.length) {
          sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
          navigate("/results");
          return;
        }
        setAnswers(newAnswers);
        setQIndex(nextIndex);
        setSelected(null);
        setTimeLeft(QUESTION_TIME);
        setAnimating(false);
        setVisible(true);
        transitionRef.current = false;
      }, 320);
    },
    [qIndex, answers, navigate]
  );

  useEffect(() => {
    transitionRef.current = false;
    setVisible(true);
  }, [qIndex]);

  useEffect(() => {
    if (animating) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          goNext(selected);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [qIndex, animating, goNext, selected]);

  function handleSelect(hex: string) {
    if (selected || transitionRef.current) return;
    setSelected(hex);
    setTimeout(() => goNext(hex), 500);
  }

  const progress = (qIndex / QUESTIONS.length) * 100;
  const timerPct = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft > 15 ? "#10b981" : timeLeft > 8 ? "#f59e0b" : "#ef4444";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 select-none">
      <div className="w-full max-w-xl mx-auto flex flex-col gap-6">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
              <FunnyAvatar id={avatarId} size={36} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{avatarName}</span>
          </div>
          <span className="text-sm font-semibold text-muted-foreground">
            {qIndex + 1} / {QUESTIONS.length}
          </span>
        </div>

        <div className="w-full rounded-full overflow-hidden" style={{ height: 6, background: "rgba(255,255,255,0.08)" }}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div
          className={`flex flex-col gap-6 transition-all duration-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}
        >
          <div
            className="rounded-3xl p-6 flex flex-col gap-3"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                Question {qIndex + 1}
              </span>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: timerColor + "33", color: timerColor }}
                >
                  {timeLeft}
                </div>
                <div
                  className="h-1.5 w-20 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${timerPct}%`,
                      background: timerColor,
                      transition: "width 1s linear, background 0.5s ease",
                    }}
                  />
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground leading-snug">
              {question.question}
            </h2>
            <p className="text-sm text-muted-foreground italic">{question.context}</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {question.options.map((opt) => {
              const isSelected = selected === opt.hex;
              return (
                <button
                  key={opt.hex}
                  onClick={() => handleSelect(opt.hex)}
                  disabled={!!selected || animating}
                  className={`option-card flex flex-col items-center gap-3 p-4 rounded-2xl ${
                    isSelected ? "selected" : ""
                  } ${selected && !isSelected ? "disabled" : ""}`}
                  style={{
                    background: isSelected
                      ? "rgba(139, 92, 246, 0.12)"
                      : "rgba(255,255,255,0.04)",
                    border: isSelected
                      ? "2px solid #8b5cf6"
                      : "1px solid rgba(255,255,255,0.09)",
                    cursor: selected ? "default" : "pointer",
                  }}
                >
                  <div
                    className="color-swatch w-14 h-14 rounded-2xl shadow-lg"
                    style={{
                      backgroundColor: opt.hex,
                      boxShadow: isSelected ? `0 0 16px ${opt.hex}80` : `0 4px 16px ${opt.hex}40`,
                      transform: isSelected ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  />
                  <span className="text-xs font-medium text-foreground/80 text-center leading-tight">
                    {opt.label}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-bold" style={{ color: "#8b5cf6" }}>
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-2">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === qIndex ? 20 : 8,
                height: 8,
                background:
                  i < qIndex
                    ? "linear-gradient(135deg, #8b5cf6, #06b6d4)"
                    : i === qIndex
                    ? "linear-gradient(135deg, #8b5cf6, #06b6d4)"
                    : "rgba(255,255,255,0.15)",
                opacity: i === qIndex ? 1 : i < qIndex ? 0.7 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
