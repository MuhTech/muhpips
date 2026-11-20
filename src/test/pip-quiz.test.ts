import { describe, expect, it } from "vitest";

import { PIP_QUIZ, pipsMoved } from "@/lib/pip-quiz";

describe("Pip quiz", () => {
  it("computes the lesson example: 1.0850 to 1.0870 is 20 pips", () => {
    expect(pipsMoved(1.085, 1.087)).toBe(20);
  });

  it("makes 25 the correct answer to 1.1000 → 1.1025", () => {
    expect(pipsMoved(PIP_QUIZ.from, PIP_QUIZ.to)).toBe(25);
    expect(PIP_QUIZ.options).toContain(PIP_QUIZ.correct);
    expect(PIP_QUIZ.correct).toBe(25);
  });

  it("ignores direction", () => {
    expect(pipsMoved(1.1025, 1.1)).toBe(25);
  });
});
