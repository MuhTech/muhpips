import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { levels, markets } from "@/lib/content";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — MUHPIPS" },
      { name: "description", content: "Structured trading courses for beginners to professionals: Forex, Gold, Crypto, Indices, Price Action and SMC." },
      { property: "og:title", content: "Courses — MUHPIPS" },
      { property: "og:description", content: "Structured, bilingual trading courses from beginner to pro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Courses,
});

function Courses() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-4xl font-extrabold md:text-5xl">{t("Learning paths", "Njia za kujifunza")}</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        {t("Pick your level and follow a clear, step-by-step path.", "Chagua kiwango chako na ufuate njia wazi hatua kwa hatua.")}
      </p>
      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
        <span className="text-bull">✓</span>
        {t("Beginner lessons are free in every market", "Masomo ya mwanzo ni bure katika kila soko")}
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {levels.map((l, i) => (
          <div key={l.en} className="rounded-2xl border bg-card p-6">
            <div className="flex gap-1">{[0, 1, 2].map((d) => <span key={d} className={`h-1.5 w-8 rounded-full ${d <= i ? "bg-primary" : "bg-muted"}`} />)}</div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">{t(l.en, l.sw)}</h2>
              <span className={`rounded-full px-3 py-1 font-mono text-xs ${l.plan === "Free" ? "bg-accent text-accent-foreground" : l.plan === "Pro" ? "bg-secondary" : "bg-gold text-primary-foreground"}`}>
                {l.plan === "Free" ? t("Free", "Bure") : l.plan}
              </span>
            </div>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{l.lessons} {t("lessons", "masomo")}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {l.plan === "Free" ? t("Open to everyone", "Wote wanaruhusiwa") : `${t("Requires", "Inahitaji")} ${l.plan}`}
            </p>
          </div>
        ))}
      </div>
      <h2 className="mt-16 text-2xl font-bold">{t("Courses", "Kozi")}</h2>
      <div className="mt-6 divide-y rounded-2xl border bg-card">
        {markets.map((m) => (
          <div key={m.key} className="flex items-center gap-5 p-5">
            <span className="w-10 font-mono text-primary">{m.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold">{t(m.en, m.sw)}</h3>
              <p className="text-sm text-muted-foreground">{t(m.den, m.dsw)}</p>
            </div>
            <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
              {t("Free to start", "Bure kuanza")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
