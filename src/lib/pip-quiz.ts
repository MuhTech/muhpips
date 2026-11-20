/** Pips moved between two prices of a standard (non-JPY) pair: 4th decimal = 1 pip. */
export const pipsMoved = (from: number, to: number) =>
  Math.round(Math.abs(to - from) * 10000 * 100) / 100;

export const PIP_QUIZ = {
  from: 1.1,
  to: 1.1025,
  options: [15, 25, 250] as const,
  correct: 25,
};
