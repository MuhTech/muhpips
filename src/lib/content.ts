export const markets = [
  { key: "forex", en: "Forex", sw: "Forex", icon: "€$", den: "Currency pairs, pips, sessions and leverage.", dsw: "Jozi za sarafu, pips, vipindi na leverage." },
  { key: "gold", en: "Gold (XAUUSD)", sw: "Dhahabu (XAUUSD)", icon: "Au", den: "Trade the world's favourite safe haven.", dsw: "Biashara ya kimbilio salama maarufu duniani." },
  { key: "crypto", en: "Cryptocurrency", sw: "Sarafu za Kidijitali", icon: "₿", den: "Bitcoin, altcoins, volatility and custody.", dsw: "Bitcoin, altcoins, mabadiliko na usalama." },
  { key: "indices", en: "Indices", sw: "Fahirisi", icon: "NQ", den: "US30, NAS100, S&P 500 and how they move.", dsw: "US30, NAS100, S&P 500 na jinsi zinavyosonga." },
  { key: "stocks", en: "Stocks", sw: "Hisa", icon: "▲", den: "Company shares, earnings and valuation.", dsw: "Hisa za makampuni, mapato na thamani." },
  { key: "commodities", en: "Commodities", sw: "Bidhaa", icon: "⛽", den: "Oil, silver and agricultural markets.", dsw: "Mafuta, fedha na masoko ya kilimo." },
  { key: "pa", en: "Price Action", sw: "Mwenendo wa Bei", icon: "◧", den: "Candles, structure, support & resistance.", dsw: "Mishumaa, muundo, msaada na upinzani." },
  { key: "smc", en: "Smart Money Concepts", sw: "Dhana za Smart Money", icon: "◆", den: "Order blocks, liquidity and fair value gaps.", dsw: "Order blocks, ukwasi na fair value gaps." },
] as const;

export const levels = [
  { en: "Beginner", sw: "Mwanzo", lessons: 24, plan: "Free" },
  { en: "Intermediate", sw: "Kati", lessons: 32, plan: "Pro" },
  { en: "Professional", sw: "Kitaalamu", lessons: 28, plan: "Elite" },
] as const;
