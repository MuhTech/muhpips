import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — MUHPIPS Free, Pro & Elite" },
      { name: "description", content: "Start free. Upgrade to Pro or Elite for full courses, advanced strategies and Smart Money Concepts." },
      { property: "og:title", content: "Pricing — MUHPIPS" },
      { property: "og:description", content: "Free, Pro and Elite membership plans." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const { t } = useLang();
  const tiers = [
    { name: "Free", price: "$0", feats: [t("Forex & Gold basics", "Misingi ya Forex na Dhahabu"), t("Beginner quizzes", "Maswali ya mwanzo"), t("All calculators", "Vikokotoo vyote")] },
    { name: "Pro", price: "$9", hot: true, feats: [t("Everything in Free", "Kila kitu cha Free"), t("Crypto, Indices, Stocks, Commodities", "Crypto, Fahirisi, Hisa, Bidhaa"), t("Personal learning path", "Njia binafsi ya kujifunza"), t("Certificates", "Vyeti")] },
    { name: "Elite", price: "$29", feats: [t("Everything in Pro", "Kila kitu cha Pro"), t("Price Action & Smart Money Concepts", "Price Action na Smart Money"), t("Live chart breakdowns", "Uchambuzi wa chati moja kwa moja"), t("Priority support", "Msaada wa kipaumbele")] },
  ];
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-center text-4xl font-extrabold md:text-5xl">{t("Simple plans", "Mipango rahisi")}</h1>
      <p className="mt-3 text-center text-muted-foreground">{t("Start free. Upgrade when you're ready.", "Anza bure. Panda daraja ukiwa tayari.")}</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className={`flex flex-col rounded-2xl border bg-card p-7 ${tier.hot ? "border-primary shadow-glow" : ""}`}>
            <h2 className="text-xl font-bold">{tier.name}</h2>
            <p className="mt-4"><span className="font-display text-5xl font-extrabold">{tier.price}</span><span className="text-muted-foreground"> /{t("month", "mwezi")}</span></p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {tier.feats.map((f) => <li key={f} className="flex gap-2"><span className="text-bull">✓</span>{f}</li>)}
            </ul>
            <button className={`mt-8 rounded-full py-3 font-semibold ${tier.hot ? "bg-gold text-primary-foreground" : "border hover:bg-secondary"}`}>
              {tier.name === "Free" ? t("Start free", "Anza bure") : t("Choose", "Chagua") + " " + tier.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
