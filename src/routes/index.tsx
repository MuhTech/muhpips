import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { markets } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUHPIPS — Understand Trading. Master the Markets." },
      { name: "description", content: "Learn Forex, Gold, Crypto, Price Action and Smart Money Concepts in English and Swahili with short lessons, quizzes and calculators." },
      { property: "og:title", content: "MUHPIPS — Understand Trading. Master the Markets." },
      { property: "og:description", content: "Bilingual trading education made simple, practical and accessible." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const candles = [
  [40, 70, 50, 62], [55, 80, 60, 75], [50, 78, 72, 58], [45, 66, 58, 50], [48, 90, 52, 85],
  [70, 98, 84, 94], [80, 102, 92, 88], [76, 110, 90, 105], [95, 125, 104, 120], [100, 128, 118, 108],
];

function Chart() {
  return (
    <svg viewBox="0 0 300 160" className="h-full w-full">
      {candles.map(([lo, hi, o, c], i) => {
        const up = c! > o!;
        const x = 20 + i * 27;
        const y = (v: number) => 150 - v;
        return (
          <g key={i} className={up ? "text-bull" : "text-bear"}>
            <line x1={x} x2={x} y1={y(hi!)} y2={y(lo!)} stroke="currentColor" strokeWidth="1.5" />
            <rect x={x - 6} width="12" y={y(Math.max(o!, c!))} height={Math.abs(c! - o!) || 2} fill="currentColor" rx="1.5" />
          </g>
        );
      })}
    </svg>
  );
}

function Index() {
  const { t } = useLang();
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {t("Trading education made simple", "Elimu ya biashara kwa urahisi")}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] md:text-6xl">
              {t("Understand Trading.", "Elewa Biashara.")}<br />
              <span className="text-gold">{t("Master the Markets.", "Tawala Masoko.")}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              {t(
                "Short, visual lessons, real chart examples, quizzes and calculators — in English and Swahili.",
                "Masomo mafupi yenye picha, mifano halisi ya chati, maswali na vikokotoo — kwa Kiingereza na Kiswahili.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="bg-gold shadow-glow rounded-full px-6 py-3 font-semibold text-primary-foreground">
                {t("Start learning free", "Anza kujifunza bure")}
              </Link>
              <Link to="/pricing" className="rounded-full border px-6 py-3 font-semibold hover:bg-secondary">
                {t("See plans", "Angalia mipango")}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-glow">
            <div className="flex items-center justify-between font-mono text-xs">
              <span>XAUUSD · H1</span>
              <span className="text-bull">+1.24%</span>
            </div>
            <div className="h-56"><Chart /></div>
            <div className="rounded-lg bg-muted p-3 text-sm">
              <span className="text-primary">{t("Lesson 4:", "Somo 4:")}</span>{" "}
              {t("Spot the break of structure after liquidity is taken.", "Tambua kuvunjika kwa muundo baada ya ukwasi kuchukuliwa.")}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">{t("Every market, one place", "Kila soko, mahali pamoja")}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <div key={m.key} className="rounded-xl border bg-card p-5 transition hover:border-primary/50">
              <div className="font-mono text-lg text-primary">{m.icon}</div>
              <h3 className="mt-3 font-semibold">{t(m.en, m.sw)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(m.den, m.dsw)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {[
          [t("Bite-sized lessons", "Masomo mafupi"), t("5–10 minute lessons with clear visuals.", "Masomo ya dakika 5–10 yenye picha wazi.")],
          [t("Quizzes & practice", "Maswali na mazoezi"), t("Test yourself after every module.", "Jipime baada ya kila moduli.")],
          [t("Your learning path", "Njia yako ya kujifunza"), t("From beginner to pro, at your pace.", "Kutoka mwanzo hadi mtaalamu, kwa kasi yako.")],
        ].map(([h, p], i) => (
          <div key={i} className="border-l-2 border-primary pl-5">
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <h3 className="mt-2 text-xl font-bold">{h}</h3>
            <p className="mt-2 text-muted-foreground">{p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
