import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { PIP_QUIZ, pipsMoved } from "@/lib/pip-quiz";

export function PipQuiz() {
  const { t } = useLang();
  const [picked, setPicked] = useState<number | null>(null);
  const answer = pipsMoved(PIP_QUIZ.from, PIP_QUIZ.to);
  const done = picked !== null;
  const right = picked === answer;

  return (
    <div>
      <p className="font-semibold">
        {t(
          `EURUSD moves from ${PIP_QUIZ.from.toFixed(4)} to ${PIP_QUIZ.to.toFixed(4)}. How many pips is that?`,
          `EURUSD inasonga kutoka ${PIP_QUIZ.from.toFixed(4)} hadi ${PIP_QUIZ.to.toFixed(4)}. Hiyo ni pips ngapi?`,
        )}
      </p>
      <div
        className="mt-4 grid gap-2 sm:grid-cols-3"
        role="group"
        aria-label={t("Answer options", "Chaguo za jibu")}
      >
        {PIP_QUIZ.options.map((o) => {
          const isPicked = picked === o;
          const isAnswer = o === answer;
          const state = !done
            ? "hover:bg-secondary"
            : isAnswer
              ? "border-bull text-bull"
              : isPicked
                ? "border-bear text-bear"
                : "opacity-60";
          return (
            <button
              key={o}
              type="button"
              disabled={done}
              onClick={() => setPicked(o)}
              className={`rounded-xl border px-4 py-3 font-mono ${state}`}
            >
              {o} {t("pips", "pips")}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="mt-4 min-h-12 text-sm">
        {done && (
          <p className={right ? "text-bull" : "text-bear"}>
            {right
              ? t("Correct! The price moved 25 pips.", "Sahihi! Bei imesonga pips 25.")
              : t(
                  "Not quite. 1.1025 − 1.1000 = 0.0025, and one pip is 0.0001, so the answer is 25 pips.",
                  "Si sahihi. 1.1025 − 1.1000 = 0.0025, na pip moja ni 0.0001, kwa hiyo jibu ni pips 25.",
                )}
          </p>
        )}
      </div>
      {done && (
        <button
          type="button"
          onClick={() => setPicked(null)}
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          {t("Try again", "Jaribu tena")}
        </button>
      )}
    </div>
  );
}
