/** USD-quoted pair: 1 standard lot = $10 per pip. */
export const pipValue = (lots: number) => lots * 10;
export const lotSize = (balance: number, riskPct: number, slPips: number) =>
  slPips > 0 ? (balance * riskPct) / 100 / (slPips * 10) : 0;
