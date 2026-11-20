import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { stages } from "@/lib/stages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MUHPIPS — Trading education made simple" },
      {
        name: "description",
        content:
          "MUHPIPS teaches trading in simple steps, in English and Swahili, with realistic expectations about risk.",
      },
      { property: "og:title", content: "About MUHPIPS" },
      {
        property: "og:description",
        content: "Clear, structured and honest trading education for beginners to professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  const principles = [
    [
      t("Explain things simply", "Eleza kwa urahisi"),
      t(
        "Complicated ideas are broken into plain language.",
        "Mawazo magumu yanavunjwa kuwa lugha rahisi.",
      ),
    ],
    [
      t("One concept at a time", "Dhana moja kwa wakati"),
      t(
        "Each lesson teaches a single idea so nothing gets buried.",
        "Kila somo linafundisha wazo moja ili lisipotee.",
      ),
    ],
    [
      t("Show, don't just tell", "Onyesha, usiseme tu"),
      t(
        "Visual examples come before long explanations.",
        "Mifano ya picha inatangulia maelezo marefu.",
      ),
    ],
    [
      t("Connect theory to the market", "Unganisha nadharia na soko"),
      t(
        "Ideas are tied to real market situations.",
        "Mawazo yanaunganishwa na hali halisi za soko.",
      ),
    ],
    [
      t("Practise, then test", "Fanya mazoezi, kisha jipime"),
      t(
        "Quizzes check your understanding before you move on.",
        "Maswali yanapima uelewa wako kabla ya kuendelea.",
      ),
    ],
    [
      t("Honest about risk", "Mkweli kuhusu hatari"),
      t(
        "We teach realistic expectations about profit and loss.",
        "Tunafundisha matarajio halisi kuhusu faida na hasara.",
      ),
    ],
  ];
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {t("About", "Kuhusu")}
      </p>
      <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
        {t(
          "Trading can be learned, step by step.",
          "Biashara inaweza kujifunzwa, hatua kwa hatua.",
        )}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        {t(
          "MUHPIPS exists to make financial markets easier to understand. We want a complete beginner and an experienced trader to both find clear, practical lessons in English and Swahili.",
          "MUHPIPS ipo ili kurahisisha uelewa wa masoko ya fedha. Tunataka anayeanza kabisa na mfanyabiashara mwenye uzoefu wapate masomo wazi na ya vitendo kwa Kiingereza na Kiswahili.",
        )}
      </p>
      <p className="mt-4 text-muted-foreground">
        {t(
          "Trading is learnable, but it is not a shortcut to profit. Most of the skill is understanding the market, managing risk and staying disciplined. We promise clarity, structure and practice. We do not promise profits.",
          "Biashara inaweza kujifunzwa, lakini si njia ya mkato ya kupata faida. Ujuzi mwingi ni kuelewa soko, kusimamia hatari na kuwa na nidhamu. Tunaahidi uwazi, mpangilio na mazoezi. Hatuahidi faida.",
        )}
      </p>

      <h2 className="mt-14 text-2xl font-bold">{t("How we teach", "Jinsi tunavyofundisha")}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {principles.map(([h, p], i) => (
          <div key={i} className="rounded-xl border bg-card p-5">
            <span className="font-mono text-xs text-primary">0{i + 1}</span>
            <h3 className="mt-2 font-semibold">{h}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-bold">
        {t("The four learning stages", "Hatua nne za kujifunza")}
      </h2>
      <ol className="mt-6 space-y-3">
        {stages.map((s) => (
          <li key={s.key} className="rounded-xl border bg-card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                <span className="mr-2 font-mono text-primary">
                  {t("Stage", "Hatua")} {s.n}
                </span>
                {t(s.en, s.sw)}
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                {t(s.levelEn, s.levelSw)} · {t(s.timeEn, s.timeSw)}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t(s.topicsEn, s.topicsSw)}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-xl border border-primary/40 bg-accent p-5 text-sm text-accent-foreground">
        {t(
          "Smart Money and Price Action terms are taught as ways of reading charts. Traders disagree about them, so we explain the definitions, other views and the limits.",
          "Maneno ya Smart Money na Price Action yanafundishwa kama njia za kusoma chati. Wafanyabiashara hutofautiana kuyahusu, kwa hiyo tunaeleza maana, mitazamo mingine na mipaka yake.",
        )}
      </div>
      <div className="mt-8">
        <Link
          to="/courses"
          className="bg-gold shadow-glow inline-block rounded-full px-6 py-3 font-semibold text-primary-foreground"
        >
          {t("Start learning free", "Anza kujifunza bure")}
        </Link>
      </div>
    </div>
  );
}
