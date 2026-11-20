export type GlossaryEntry = {
  key: string;
  /** English term */
  en: string;
  /** Swahili label for the term (often the same trading term) */
  sw: string;
  defEn: string;
  defSw: string;
  /** True for Smart Money / Price Action ideas that traders interpret differently. */
  interpretive?: boolean;
};

export const glossary: readonly GlossaryEntry[] = [
  {
    key: "ask",
    en: "Ask price",
    sw: "Bei ya kuuza (Ask)",
    defEn: "The price at which you can buy. It is always slightly higher than the bid price.",
    defSw: "Bei ambayo unaweza kununua. Huwa juu kidogo kuliko bei ya bid.",
  },
  {
    key: "backtesting",
    en: "Backtesting",
    sw: "Backtesting (Kujaribu kwa data ya zamani)",
    defEn:
      "Testing a trading idea on past price data to see how it would have performed. Past results do not guarantee future results.",
    defSw:
      "Kujaribu mbinu ya biashara kwa kutumia data ya bei ya zamani ili kuona ingefanyaje. Matokeo ya zamani hayahakikishi matokeo ya baadaye.",
  },
  {
    key: "base-currency",
    en: "Base currency",
    sw: "Sarafu ya msingi",
    defEn:
      "The first currency in a pair. In EURUSD the base currency is EUR, and the price shows how much USD one EUR costs.",
    defSw:
      "Sarafu ya kwanza katika jozi. Katika EURUSD sarafu ya msingi ni EUR, na bei inaonyesha EUR moja inagharimu USD ngapi.",
  },
  {
    key: "bid",
    en: "Bid price",
    sw: "Bei ya kununua (Bid)",
    defEn: "The price at which you can sell. It is always slightly lower than the ask price.",
    defSw: "Bei ambayo unaweza kuuza. Huwa chini kidogo kuliko bei ya ask.",
  },
  {
    key: "bos",
    en: "Break of Structure (BOS)",
    sw: "Kuvunjika kwa Muundo (BOS)",
    defEn:
      "When price closes beyond a previous swing high or swing low in the direction of the trend, which some traders read as the trend continuing.",
    defSw:
      "Bei inapofunga zaidi ya kilele au kina cha awali kuelekea upande wa mwenendo, jambo ambalo baadhi ya wafanyabiashara huliona kama mwenendo unaendelea.",
    interpretive: true,
  },
  {
    key: "breakout",
    en: "Breakout",
    sw: "Breakout (Kuvuka kiwango)",
    defEn:
      "When price moves through a support or resistance level. A breakout can continue or it can fail.",
    defSw: "Bei inapovuka kiwango cha msaada au upinzani. Breakout inaweza kuendelea au kushindwa.",
  },
  {
    key: "broker",
    en: "Broker",
    sw: "Dalali (Broker)",
    defEn:
      "A company that gives you access to the market so you can place trades. Check that a broker is properly regulated before depositing money.",
    defSw:
      "Kampuni inayokupa ufikiaji wa soko ili uweze kufanya biashara. Hakikisha dalali amesajiliwa na kudhibitiwa ipasavyo kabla ya kuweka pesa.",
  },
  {
    key: "candlestick",
    en: "Candlestick",
    sw: "Mshumaa (Candlestick)",
    defEn: "A chart shape that shows the open, high, low and close of price for one time period.",
    defSw:
      "Umbo kwenye chati linaloonyesha bei ya kufungua, ya juu, ya chini na ya kufunga katika kipindi kimoja cha muda.",
  },
  {
    key: "choch",
    en: "Change of Character (CHoCH)",
    sw: "Mabadiliko ya Tabia ya Bei (CHoCH)",
    defEn:
      "The first break of structure against the current trend, which some traders treat as an early sign that the trend may be changing.",
    defSw:
      "Kuvunjika kwa kwanza kwa muundo kinyume na mwenendo wa sasa, ambako baadhi ya wafanyabiashara hukuchukulia kama ishara ya mapema kwamba mwenendo unaweza kubadilika.",
    interpretive: true,
  },
  {
    key: "commission",
    en: "Commission",
    sw: "Kamisheni",
    defEn:
      "A fee some brokers charge for opening and closing a trade, often added on top of the spread.",
    defSw:
      "Ada ambayo baadhi ya madalali hutoza kwa kufungua na kufunga biashara, mara nyingi huongezwa juu ya spread.",
  },
  {
    key: "commodity",
    en: "Commodity",
    sw: "Bidhaa (Commodity)",
    defEn:
      "A raw material traded on markets, such as oil, natural gas, gold, silver or agricultural products like coffee and wheat.",
    defSw:
      "Malighafi inayouzwa sokoni, kama mafuta, gesi asilia, dhahabu, fedha au mazao ya kilimo kama kahawa na ngano.",
  },
  {
    key: "demo-account",
    en: "Demo account",
    sw: "Akaunti ya majaribio (Demo)",
    defEn:
      "A practice account with virtual money. It lets you learn the platform and test ideas without risking real funds.",
    defSw:
      "Akaunti ya mazoezi yenye pesa za kufikirika. Inakuwezesha kujifunza jukwaa na kujaribu mawazo bila kuhatarisha pesa halisi.",
  },
  {
    key: "drawdown",
    en: "Drawdown",
    sw: "Drawdown (Kushuka kwa akaunti)",
    defEn:
      "The drop in your account from its highest value to a later low. It shows how painful a losing streak has been.",
    defSw:
      "Kushuka kwa thamani ya akaunti yako kutoka kilele chake cha juu hadi kiwango cha chini kilichofuata. Kunaonyesha ukubwa wa mfululizo wa hasara.",
  },
  {
    key: "equal-highs-lows",
    en: "Equal highs and lows",
    sw: "Vilele na vina vilivyolingana",
    defEn:
      "Two or more swing highs (or lows) at nearly the same price. Some traders believe stop orders gather around them.",
    defSw:
      "Vilele viwili au zaidi (au vina) vilivyo karibu na bei ileile. Baadhi ya wafanyabiashara wanaamini maagizo ya stop hukusanyika karibu navyo.",
    interpretive: true,
  },
  {
    key: "equilibrium",
    en: "Equilibrium",
    sw: "Usawa (Equilibrium)",
    defEn:
      "The 50% midpoint of a price range. Traders use it to split a range into a premium half and a discount half.",
    defSw:
      "Nusu (50%) ya kiwango cha bei. Wafanyabiashara huitumia kugawa kiwango hicho katika nusu ya premium na nusu ya discount.",
    interpretive: true,
  },
  {
    key: "exotic-pairs",
    en: "Exotic pairs",
    sw: "Jozi za exotic",
    defEn:
      "A major currency paired with the currency of a smaller or emerging economy, such as USD/ZAR. They often have wider spreads.",
    defSw:
      "Sarafu kuu iliyounganishwa na sarafu ya uchumi mdogo au unaoibukia, kama USD/ZAR. Mara nyingi huwa na spread pana zaidi.",
  },
  {
    key: "expectancy",
    en: "Expectancy",
    sw: "Expectancy (Matarajio ya wastani)",
    defEn:
      "The average amount you can expect to win or lose per trade over many trades: (win rate × average win) − (loss rate × average loss).",
    defSw:
      "Kiasi cha wastani unachotarajia kushinda au kupoteza kwa kila biashara kwa biashara nyingi: (asilimia ya ushindi × wastani wa ushindi) − (asilimia ya hasara × wastani wa hasara).",
  },
  {
    key: "fakeout",
    en: "Fakeout",
    sw: "Fakeout (Kuvuka kwa uongo)",
    defEn:
      "A breakout that quickly reverses back into the old range, trapping traders who entered too early.",
    defSw:
      "Breakout inayorudi haraka ndani ya kiwango cha awali, na kuwanasa wafanyabiashara walioingia mapema mno.",
  },
  {
    key: "fvg",
    en: "Fair Value Gap (FVG)",
    sw: "Pengo la Thamani ya Haki (FVG)",
    defEn:
      "A three-candle pattern where the wicks of the first and third candles do not overlap, leaving a gap. Some traders watch it as an area price may return to.",
    defSw:
      "Muundo wa mishumaa mitatu ambapo vivuli vya mshumaa wa kwanza na wa tatu havikutani, na kuacha pengo. Baadhi ya wafanyabiashara huliangalia kama eneo ambalo bei inaweza kurudi.",
    interpretive: true,
  },
  {
    key: "higher-high-higher-low",
    en: "Higher high / higher low",
    sw: "Kilele cha juu / kina cha juu",
    defEn: "A pattern of rising peaks and rising dips. It describes an uptrend.",
    defSw: "Mpangilio wa vilele vinavyopanda na vina vinavyopanda. Unaonyesha mwenendo wa kupanda.",
  },
  {
    key: "imbalance",
    en: "Imbalance",
    sw: "Kutokuwa na usawa (Imbalance)",
    defEn:
      "A stretch where price moved quickly in one direction with little back-and-forth trading. A fair value gap is one example.",
    defSw:
      "Sehemu ambapo bei ilisonga haraka upande mmoja bila biashara nyingi za kurudi na kwenda. Fair value gap ni mfano mmoja.",
    interpretive: true,
  },
  {
    key: "inducement",
    en: "Inducement",
    sw: "Inducement (Mtego wa kuvutia)",
    defEn:
      "A minor move that looks like a good entry but is thought by some traders to lure others in before price goes the other way.",
    defSw:
      "Mwendo mdogo unaoonekana kama nafasi nzuri ya kuingia, lakini baadhi ya wafanyabiashara wanadhani huwavuta wengine kabla bei haijaenda upande mwingine.",
    interpretive: true,
  },
  {
    key: "index",
    en: "Index",
    sw: "Fahirisi (Index)",
    defEn:
      "A number that tracks a group of stocks, such as the S&P 500 or the US30. Traders can speculate on an index price with CFDs.",
    defSw:
      "Namba inayofuatilia kundi la hisa, kama S&P 500 au US30. Wafanyabiashara wanaweza kubashiri bei ya fahirisi kupitia CFD.",
  },
  {
    key: "journal",
    en: "Trading journal",
    sw: "Shajara ya biashara (Journal)",
    defEn:
      "A record of every trade with the reason for it, the result and what you learned. It helps you find habits to fix.",
    defSw:
      "Kumbukumbu ya kila biashara pamoja na sababu yake, matokeo na ulichojifunza. Inakusaidia kugundua tabia za kurekebisha.",
  },
  {
    key: "leverage",
    en: "Leverage",
    sw: "Leverage (Mkopo wa nguvu)",
    defEn:
      "Borrowed buying power from your broker that lets you control a larger position than your deposit. It magnifies both profits and losses.",
    defSw:
      "Nguvu ya ununuzi unayokopeshwa na dalali inayokuwezesha kuendesha nafasi kubwa kuliko amana yako. Huongeza faida na hasara kwa pamoja.",
  },
  {
    key: "liquidity",
    en: "Liquidity",
    sw: "Ukwasi (Liquidity)",
    defEn:
      "How easily an asset can be bought or sold without moving its price much. In price action teaching it also refers to areas where many orders may be resting.",
    defSw:
      "Urahisi wa kununua au kuuza mali bila kusogeza bei sana. Katika mafundisho ya price action pia inamaanisha maeneo ambapo maagizo mengi yanaweza kuwa yamesubiri.",
    interpretive: true,
  },
  {
    key: "liquidity-sweep",
    en: "Liquidity sweep",
    sw: "Kufagia ukwasi (Liquidity sweep)",
    defEn:
      "A quick move past an obvious high or low that then reverses. Some traders think it grabs resting orders before the real move.",
    defSw:
      "Mwendo wa haraka kupita kilele au kina kinachoonekana wazi kisha kurudi nyuma. Baadhi ya wafanyabiashara wanadhani unachukua maagizo yaliyosubiri kabla ya mwendo halisi.",
    interpretive: true,
  },
  {
    key: "lot",
    en: "Lot",
    sw: "Lot",
    defEn:
      "The size of a trade. One standard lot is 100,000 units of the base currency, a mini lot is 10,000 and a micro lot is 1,000.",
    defSw:
      "Ukubwa wa biashara. Lot moja ya kawaida ni vitengo 100,000 vya sarafu ya msingi, mini lot ni 10,000 na micro lot ni 1,000.",
  },
  {
    key: "lower-high-lower-low",
    en: "Lower high / lower low",
    sw: "Kilele cha chini / kina cha chini",
    defEn: "A pattern of falling peaks and falling dips. It describes a downtrend.",
    defSw: "Mpangilio wa vilele vinavyoshuka na vina vinavyoshuka. Unaonyesha mwenendo wa kushuka.",
  },
  {
    key: "major-pairs",
    en: "Major pairs",
    sw: "Jozi kuu (Majors)",
    defEn:
      "The most traded currency pairs, all including the US dollar, such as EURUSD, GBPUSD and USDJPY. They usually have the tightest spreads.",
    defSw:
      "Jozi za sarafu zinazofanyiwa biashara zaidi, zote zikihusisha dola ya Marekani, kama EURUSD, GBPUSD na USDJPY. Kwa kawaida zina spread ndogo zaidi.",
  },
  {
    key: "margin",
    en: "Margin",
    sw: "Margin (Dhamana)",
    defEn:
      "The part of your account the broker sets aside to keep a leveraged trade open. If your losses grow too large you may face a margin call or forced closure.",
    defSw:
      "Sehemu ya akaunti yako ambayo dalali huiweka kando ili kuweka wazi biashara yenye leverage. Hasara ikikua sana unaweza kupata margin call au biashara kufungwa kwa lazima.",
  },
  {
    key: "market-structure",
    en: "Market structure",
    sw: "Muundo wa soko (Market structure)",
    defEn:
      "The pattern of swing highs and swing lows that shows whether price is trending up, trending down or moving sideways.",
    defSw:
      "Mpangilio wa vilele na vina vya bei unaoonyesha kama bei inapanda, inashuka au inasonga pembeni.",
  },
  {
    key: "minor-pairs",
    en: "Minor pairs",
    sw: "Jozi ndogo (Minors)",
    defEn:
      "Currency pairs that do not include the US dollar, such as EURGBP or EURJPY. Also called cross pairs.",
    defSw:
      "Jozi za sarafu zisizohusisha dola ya Marekani, kama EURGBP au EURJPY. Pia huitwa cross pairs.",
  },
  {
    key: "moving-average",
    en: "Moving average",
    sw: "Wastani unaosogea (Moving average)",
    defEn:
      "An indicator that smooths price by averaging the last N periods. It helps show the general direction of a trend.",
    defSw:
      "Kiashiria kinacholainisha bei kwa kuchukua wastani wa vipindi N vya mwisho. Husaidia kuonyesha mwelekeo wa jumla wa mwenendo.",
  },
  {
    key: "order-block",
    en: "Order block",
    sw: "Order block",
    defEn:
      "The last opposite candle before a strong move. Some traders mark it as an area where price may react when it returns.",
    defSw:
      "Mshumaa wa mwisho wa upande kinyume kabla ya mwendo mkali. Baadhi ya wafanyabiashara huuweka alama kama eneo ambalo bei inaweza kuitikia ikirudi.",
    interpretive: true,
  },
  {
    key: "pip",
    en: "Pip",
    sw: "Pip",
    defEn:
      "A standard unit for measuring price movement in a currency pair. For most pairs one pip is the fourth decimal place (0.0001); for JPY pairs it is the second (0.01).",
    defSw:
      "Kipimo cha kawaida cha mwendo wa bei katika jozi ya sarafu. Kwa jozi nyingi pip moja ni tarakimu ya nne baada ya nukta (0.0001); kwa jozi za JPY ni ya pili (0.01).",
  },
  {
    key: "premium-discount",
    en: "Premium and discount",
    sw: "Premium na Discount",
    defEn:
      "The upper half of a range is called premium (relatively expensive) and the lower half discount (relatively cheap), measured from the equilibrium.",
    defSw:
      "Nusu ya juu ya kiwango huitwa premium (ghali kiasi) na nusu ya chini huitwa discount (rahisi kiasi), ikipimwa kutoka kwenye equilibrium.",
    interpretive: true,
  },
  {
    key: "quote-currency",
    en: "Quote currency",
    sw: "Sarafu ya kupimia (Quote)",
    defEn:
      "The second currency in a pair. In EURUSD it is USD, and profit and loss are counted in it.",
    defSw:
      "Sarafu ya pili katika jozi. Katika EURUSD ni USD, na faida na hasara huhesabiwa kwa sarafu hiyo.",
  },
  {
    key: "resistance",
    en: "Resistance",
    sw: "Upinzani (Resistance)",
    defEn:
      "A price area where rising price has often stalled or turned down because sellers appeared.",
    defSw:
      "Eneo la bei ambapo bei inayopanda mara nyingi imekwama au kushuka kwa sababu wauzaji walijitokeza.",
  },
  {
    key: "risk-reward",
    en: "Risk-to-reward ratio",
    sw: "Uwiano wa hatari na faida",
    defEn:
      "How much you aim to gain compared with how much you risk. Risking 10 pips to target 30 pips is a 1:3 ratio.",
    defSw:
      "Kiasi unacholenga kupata ukilinganisha na unachohatarisha. Kuhatarisha pips 10 kulenga pips 30 ni uwiano wa 1:3.",
  },
  {
    key: "rsi",
    en: "Relative Strength Index (RSI)",
    sw: "Kiashiria cha Nguvu (RSI)",
    defEn:
      "A momentum indicator from 0 to 100. Readings above 70 are often called overbought and below 30 oversold, but price can stay there for long.",
    defSw:
      "Kiashiria cha kasi ya bei kutoka 0 hadi 100. Usomaji juu ya 70 mara nyingi huitwa overbought na chini ya 30 oversold, lakini bei inaweza kukaa huko kwa muda mrefu.",
  },
  {
    key: "session",
    en: "Trading session",
    sw: "Kipindi cha biashara (Session)",
    defEn:
      "A part of the day when a major financial centre is open, such as Sydney, Tokyo, London or New York. Activity and volatility change between sessions.",
    defSw:
      "Sehemu ya siku ambapo kituo kikuu cha fedha kiko wazi, kama Sydney, Tokyo, London au New York. Shughuli na mabadiliko ya bei hutofautiana kati ya vipindi.",
  },
  {
    key: "slippage",
    en: "Slippage",
    sw: "Slippage (Tofauti ya bei ya utekelezaji)",
    defEn:
      "The difference between the price you expected and the price your order was actually filled at, most common during fast markets or news.",
    defSw:
      "Tofauti kati ya bei uliyotarajia na bei ambayo agizo lako lilitekelezwa, hutokea zaidi wakati wa soko la kasi au habari.",
  },
  {
    key: "spread",
    en: "Spread",
    sw: "Spread (Tofauti ya bei)",
    defEn:
      "The difference between the bid and ask price. It is a cost you pay every time you open a trade.",
    defSw: "Tofauti kati ya bei ya bid na ask. Ni gharama unayolipa kila unapofungua biashara.",
  },
  {
    key: "stop-loss",
    en: "Stop loss",
    sw: "Stop loss (Kikomo cha hasara)",
    defEn:
      "An order that closes your trade automatically at a set price to limit the loss. In fast markets it may be filled at a worse price.",
    defSw:
      "Agizo linalofunga biashara yako kiotomatiki kwa bei uliyoweka ili kudhibiti hasara. Katika soko la kasi linaweza kutekelezwa kwa bei mbaya zaidi.",
  },
  {
    key: "support",
    en: "Support",
    sw: "Msaada (Support)",
    defEn: "A price area where falling price has often stalled or bounced because buyers appeared.",
    defSw:
      "Eneo la bei ambapo bei inayoshuka mara nyingi imekwama au kurudi juu kwa sababu wanunuzi walijitokeza.",
  },
  {
    key: "take-profit",
    en: "Take profit",
    sw: "Take profit (Kikomo cha faida)",
    defEn: "An order that closes your trade automatically when price reaches your profit target.",
    defSw: "Agizo linalofunga biashara yako kiotomatiki bei inapofikia lengo lako la faida.",
  },
  {
    key: "timeframe",
    en: "Timeframe",
    sw: "Kipindi cha chati (Timeframe)",
    defEn:
      "The time each candle represents, such as M15, H1, H4 or D1. Shorter timeframes show more noise.",
    defSw:
      "Muda ambao kila mshumaa unawakilisha, kama M15, H1, H4 au D1. Vipindi vifupi vinaonyesha kelele zaidi.",
  },
  {
    key: "trend",
    en: "Trend",
    sw: "Mwenendo (Trend)",
    defEn: "The general direction of price over time: up, down or sideways.",
    defSw: "Mwelekeo wa jumla wa bei kwa muda: juu, chini au pembeni.",
  },
  {
    key: "xauusd",
    en: "XAUUSD",
    sw: "XAUUSD (Dhahabu)",
    defEn:
      "The symbol for gold priced in US dollars. XAU is the code for one troy ounce of gold. It can move sharply around news.",
    defSw:
      "Alama ya dhahabu inayopimwa kwa dola za Marekani. XAU ni msimbo wa aunsi moja ya dhahabu. Inaweza kusonga kwa kasi wakati wa habari.",
  },
] as const;

export const INTERPRETIVE_NOTE = {
  en: "Traders interpret this idea in different ways. It is a way of reading charts, not proof of institutional activity or a guaranteed outcome.",
  sw: "Wafanyabiashara hufasiri wazo hili kwa njia tofauti. Ni njia ya kusoma chati, si uthibitisho wa shughuli za taasisi kubwa wala matokeo yaliyohakikishwa.",
} as const;

const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

/** First letter (A-Z) of the English term, used for the A-Z filter. */
export const glossaryLetter = (entry: GlossaryEntry) => entry.en.charAt(0).toUpperCase();

/**
 * Filter glossary entries by a free-text query (matches term and definition in both
 * languages) and an optional starting letter. Results are sorted A-Z by English term.
 */
export function searchGlossary(
  entries: readonly GlossaryEntry[],
  query = "",
  letter?: string | null,
): GlossaryEntry[] {
  const q = normalize(query);
  return entries
    .filter((e) => (letter ? glossaryLetter(e) === letter.toUpperCase() : true))
    .filter(
      (e) =>
        q === "" || [e.en, e.sw, e.defEn, e.defSw].some((field) => normalize(field).includes(q)),
    )
    .slice()
    .sort((a, b) => a.en.localeCompare(b.en));
}
