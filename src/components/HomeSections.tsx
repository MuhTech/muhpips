import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { levels } from "@/lib/content";
import { stages } from "@/lib/stages";
import { PipQuiz } from "@/components/PipQuiz";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function ChooseLevel() {
  const { t } = useLang();
  const blurbs = [
    [
      t(
        "Start from zero. Learn what trading is and how markets work.",
        "Anza kutoka sifuri. Jifunze biashara ni nini na jinsi masoko yanavyofanya kazi.",
      ),
      t("Foundations", "Misingi"),
    ],
    [
      t(
        "Read charts and understand price action and Smart Money ideas.",
        "Soma chati na uelewe price action na mawazo ya Smart Money.",
      ),
      t("Technical analysis · Price Action & SMC", "Uchambuzi wa kiufundi · Price Action na SMC"),
    ],
    [
      t(
        "Build a measurable process with risk, testing and journaling.",
        "Jenga mfumo unaopimika kwa usimamizi wa hatari, majaribio na shajara.",
      ),
      t("Strategy · Risk · Backtesting", "Mkakati · Hatari · Backtesting"),
    ],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        title={t("Choose your level", "Chagua kiwango chako")}
        sub={t(
          "Not sure where you fit? Begin with Beginner. It is free.",
          "Huna uhakika unaangukia wapi? Anza na Mwanzo. Ni bure.",
        )}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {levels.map((l, i) => (
          <Link
            key={l.en}
            to="/courses"
            className="group rounded-2xl border bg-card p-6 transition hover:border-primary/50"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className={`h-1.5 w-8 rounded-full ${d <= i ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold">{t(l.en, l.sw)}</h3>
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs ${l.plan === "Free" ? "bg-accent text-accent-foreground" : l.plan === "Pro" ? "bg-secondary" : "bg-gold text-primary-foreground"}`}
              >
                {l.plan === "Free" ? t("Free", "Bure") : l.plan}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{blurbs[i]![0]}</p>
            <p className="mt-3 font-mono text-xs text-primary">{blurbs[i]![1]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function LearningPaths() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        title={t("Four stages, one clear path", "Hatua nne, njia moja wazi")}
        sub={t(
          "Each stage builds on the last, so you never learn ten things at once.",
          "Kila hatua inajengwa juu ya iliyotangulia, kwa hiyo hujifunzi mambo kumi kwa wakati mmoja.",
        )}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s) => (
          <div key={s.key} className="rounded-xl border bg-card p-5">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-primary">
                {t("Stage", "Hatua")} {s.n}
              </span>
              <span className="text-muted-foreground">{t(s.timeEn, s.timeSw)}</span>
            </div>
            <h3 className="mt-3 font-semibold">{t(s.en, s.sw)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(s.topicsEn, s.topicsSw)}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {t(
          "Study times are a rough guide for self-paced learning.",
          "Muda wa kujifunza ni makadirio tu kwa kujifunza kwa kasi yako.",
        )}
      </p>
    </section>
  );
}

export function FiveMinuteLesson() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        eyebrow={t("Learn in 5 minutes", "Jifunze kwa dakika 5")}
        title={t("What is a pip?", "Pip ni nini?")}
        sub={t(
          "Here is how every MUHPIPS lesson works: a simple idea, an example, then a quick check.",
          "Hivi ndivyo kila somo la MUHPIPS linavyofanya kazi: wazo rahisi, mfano, kisha jaribio fupi.",
        )}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5 rounded-2xl border bg-card p-6">
          {[
            [
              t("1. Simple explanation", "1. Maelezo rahisi"),
              t(
                "A pip is the standard unit for measuring price movement in a currency pair. If EURUSD moves from 1.0850 to 1.0860, that is 10 pips.",
                "Pip ni kipimo cha kawaida cha mwendo wa bei katika jozi ya sarafu. EURUSD ikisonga kutoka 1.0850 hadi 1.0860, hiyo ni pips 10.",
              ),
            ],
            [
              t("2. Why it matters", "2. Kwa nini ni muhimu"),
              t(
                "Traders measure price movement, stop-loss distance and results in pips.",
                "Wafanyabiashara hupima mwendo wa bei, umbali wa stop loss na matokeo kwa pips.",
              ),
            ],
            [
              t("3. Practical example", "3. Mfano halisi"),
              t(
                "Buy at 1.0850 and close at 1.0870: 1.0870 − 1.0850 = 0.0020, which is +20 pips for a BUY.",
                "Nunua kwa 1.0850 na funga kwa 1.0870: 1.0870 − 1.0850 = 0.0020, ambayo ni +pips 20 kwa BUY.",
              ),
            ],
            [
              t("4. Remember", "4. Kumbuka"),
              t(
                "Most pairs use the fourth decimal place for a pip. JPY pairs use the second.",
                "Jozi nyingi hutumia tarakimu ya nne kwa pip. Jozi za JPY hutumia ya pili.",
              ),
            ],
          ].map(([h, p]) => (
            <div key={h}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">{h}</h3>
              <p className="mt-1 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
            {t("5. Test your understanding", "5. Jipime")}
          </h3>
          <div className="mt-3">
            <PipQuiz />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ToolsTeaser() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border bg-card p-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            {t("Free trading tools", "Zana za biashara bila malipo")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t(
              "Work out your position size and pip value before you place a trade. More tools are on the way.",
              "Kokotoa ukubwa wa nafasi na thamani ya pip kabla ya kufanya biashara. Zana zaidi zinakuja.",
            )}
          </p>
        </div>
        <Link
          to="/tools"
          className="bg-gold shadow-glow shrink-0 rounded-full px-6 py-3 font-semibold text-primary-foreground"
        >
          {t("Open the tools", "Fungua zana")}
        </Link>
      </div>
    </section>
  );
}

export function WhyMuhpips() {
  const { t } = useLang();
  const points = [
    [
      t("One concept at a time", "Dhana moja kwa wakati"),
      t("Each lesson teaches a single idea.", "Kila somo linafundisha wazo moja."),
    ],
    [
      t("Visual examples", "Mifano ya picha"),
      t(
        "See it on a chart before reading the theory.",
        "Iangalie kwenye chati kabla ya kusoma nadharia.",
      ),
    ],
    [
      t("Theory tied to the market", "Nadharia iliyounganishwa na soko"),
      t(
        "Ideas are linked to real market situations.",
        "Mawazo yameunganishwa na hali halisi za soko.",
      ),
    ],
    [
      t("Practice before progress", "Mazoezi kabla ya kuendelea"),
      t("Apply each idea with examples and tools.", "Tumia kila wazo kwa mifano na zana."),
    ],
    [
      t("Test before moving on", "Jipime kabla ya kuendelea"),
      t("Short quizzes check you understood.", "Maswali mafupi yanakagua uelewa wako."),
    ],
    [
      t("Realistic about risk", "Uhalisia kuhusu hatari"),
      t("We never promise profits or shortcuts.", "Hatuahidi faida wala njia za mkato."),
    ],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle title={t("Why learn with MUHPIPS?", "Kwa nini ujifunze na MUHPIPS?")} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map(([h, p], i) => (
          <div key={i} className="border-l-2 border-primary pl-5">
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold">{h}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlansSummary() {
  const { t } = useLang();
  const plans = [
    {
      name: "Free",
      price: "$0",
      text: t(
        "Beginner lessons in every market, quizzes and calculators.",
        "Masomo ya mwanzo katika kila soko, maswali na vikokotoo.",
      ),
    },
    {
      name: "Pro",
      price: "$9",
      hot: true,
      text: t("Adds Intermediate lessons and certificates.", "Huongeza masomo ya Kati na vyeti."),
    },
    {
      name: "Elite",
      price: "$29",
      text: t(
        "Adds Professional lessons and priority support.",
        "Huongeza masomo ya Kitaalamu na msaada wa kipaumbele.",
      ),
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        title={t("Free to start. Upgrade when you are ready.", "Anza bure. Boresha ukiwa tayari.")}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border bg-card p-6 ${p.hot ? "border-primary shadow-glow" : ""}`}
          >
            <h3 className="font-bold">{p.name}</h3>
            <p className="mt-2">
              <span className="font-display text-4xl font-extrabold">{p.price}</span>
              <span className="text-muted-foreground"> /{t("month", "mwezi")}</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/pricing"
          className="rounded-full border px-6 py-3 font-semibold hover:bg-secondary"
        >
          {t("Compare plans", "Linganisha mipango")}
        </Link>
      </div>
    </section>
  );
}

export function HomeFaq() {
  const { t } = useLang();
  const faqs = [
    [
      t("Do I need any experience?", "Je, ninahitaji uzoefu wowote?"),
      t(
        "No. The Beginner path starts from the very basics, including what trading is.",
        "Hapana. Njia ya Mwanzo inaanza kutoka misingi kabisa, ikiwemo biashara ni nini.",
      ),
    ],
    [
      t("Is MUHPIPS really free to start?", "Je, MUHPIPS ni bure kuanza kweli?"),
      t(
        "Yes. Beginner lessons, quizzes and the calculators are free. Paid plans add Intermediate and Professional content.",
        "Ndiyo. Masomo ya Mwanzo, maswali na vikokotoo ni bure. Mipango ya kulipia inaongeza maudhui ya Kati na Kitaalamu.",
      ),
    ],
    [
      t("Is trading easy?", "Je, biashara ni rahisi?"),
      t(
        "The ideas can be explained simply, and we do that. Trading itself is still hard. It needs practice, discipline and risk control, and many people lose money.",
        "Mawazo yanaweza kuelezwa kwa urahisi, na hilo ndilo tunalofanya. Biashara yenyewe bado ni ngumu. Inahitaji mazoezi, nidhamu na udhibiti wa hatari, na watu wengi hupoteza pesa.",
      ),
    ],
    [
      t("Can I become profitable quickly?", "Je, naweza kupata faida haraka?"),
      t(
        "We cannot promise that, and nobody honestly can. Skills take time to build and profits are never guaranteed. Use a demo account first.",
        "Hatuwezi kuahidi hilo, na hakuna anayeweza kwa uaminifu. Ujuzi huchukua muda kujengwa na faida haihakikishwi kamwe. Anza na akaunti ya majaribio.",
      ),
    ],
    [
      t("Which markets are covered?", "Masoko gani yanafundishwa?"),
      t(
        "Forex, Gold (XAUUSD), Crypto, Indices, Stocks and Commodities, plus Price Action and Smart Money Concepts.",
        "Forex, Dhahabu (XAUUSD), Crypto, Fahirisi, Hisa na Bidhaa, pamoja na Price Action na Dhana za Smart Money.",
      ),
    ],
    [
      t("Is this financial advice?", "Je, huu ni ushauri wa kifedha?"),
      t(
        "No. MUHPIPS is education only. We do not give financial advice, recommendations or trading signals. Trading carries a substantial risk of loss.",
        "Hapana. MUHPIPS ni elimu tu. Hatutoi ushauri wa kifedha, mapendekezo wala ishara za biashara. Biashara ina hatari kubwa ya hasara.",
      ),
    ],
  ];
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <SectionTitle title={t("Frequently asked questions", "Maswali yanayoulizwa mara kwa mara")} />
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map(([q, a], i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
