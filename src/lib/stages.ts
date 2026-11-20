export type Stage = {
  key: string;
  n: number;
  en: string;
  sw: string;
  levelEn: string;
  levelSw: string;
  timeEn: string;
  timeSw: string;
  topicsEn: string;
  topicsSw: string;
};

/** The four learning stages of the MUHPIPS curriculum. */
export const stages: readonly Stage[] = [
  {
    key: "foundations",
    n: 1,
    en: "Foundations",
    sw: "Misingi",
    levelEn: "Beginner",
    levelSw: "Mwanzo",
    timeEn: "1–2 weeks",
    timeSw: "Wiki 1–2",
    topicsEn: "What trading is, pips, lots, spread, leverage, sessions and demo trading.",
    topicsSw:
      "Biashara ni nini, pips, lots, spread, leverage, vipindi vya soko na biashara ya majaribio.",
  },
  {
    key: "technical",
    n: 2,
    en: "Technical Analysis",
    sw: "Uchambuzi wa Kiufundi",
    levelEn: "Beginner to intermediate",
    levelSw: "Mwanzo hadi kati",
    timeEn: "2–4 weeks",
    timeSw: "Wiki 2–4",
    topicsEn: "Candlesticks, trends, support and resistance, chart patterns and indicators.",
    topicsSw: "Mishumaa, mwenendo, msaada na upinzani, michoro ya chati na viashiria.",
  },
  {
    key: "smc",
    n: 3,
    en: "Price Action & Smart Money",
    sw: "Price Action na Smart Money",
    levelEn: "Intermediate",
    levelSw: "Kati",
    timeEn: "3–5 weeks",
    timeSw: "Wiki 3–5",
    topicsEn: "Market structure, BOS, CHoCH, liquidity, order blocks and fair value gaps.",
    topicsSw: "Muundo wa soko, BOS, CHoCH, ukwasi, order blocks na fair value gaps.",
  },
  {
    key: "pro",
    n: 4,
    en: "Professional Development",
    sw: "Ukuaji wa Kitaalamu",
    levelEn: "Advanced",
    levelSw: "Juu",
    timeEn: "Ongoing",
    timeSw: "Endelevu",
    topicsEn: "Risk management, expectancy, backtesting, journaling and a written trading plan.",
    topicsSw:
      "Usimamizi wa hatari, expectancy, backtesting, shajara ya biashara na mpango wa biashara ulioandikwa.",
  },
] as const;
