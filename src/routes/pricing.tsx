import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — MUHPIPS Free, Pro & Elite" },
      { name: "description", content: "Beginner trading lessons are free in every market. Pro unlocks Intermediate lessons, Elite unlocks Professional." },
      { property: "og:title", content: "Pricing — MUHPIPS" },
      { property: "og:description", content: "Beginner lessons free. Pro unlocks Intermediate, Elite unlocks Professional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const { t } = useLang();
  const tiers = [
    { name: "Free", price: "$0", feats: [t("Beginner lessons in all 8 markets", "Masomo ya mwanzo katika masoko 8"), t("Quizzes & learning paths", "Maswali na njia za kujifunza"), t("All calculators", "Vikokotoo vyote")] },
    { name: "Pro", price: "$9", hot: true, feats: [t("Everything in Free", "Kila kitu cha Free"), t("Intermediate lessons in all 8 markets", "Masomo ya Kati katika masoko 8"), t("Certificates", "Vyeti"), t("Personal learning path", "Njia binafsi ya kujifunza")] },
    { name: "Elite", price: "$29", feats: [t("Everything in Pro", "Kila kitu cha Pro"), t("Professional lessons in all 8 markets", "Masomo ya Kitaalamu katika masoko 8"), t("Live chart breakdowns", "Uchambuzi wa chati moja kwa moja"), t("Priority support", "Msaada wa kipaumbele")] },
  ];
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-center text-4xl font-extrabold md:text-5xl">{t("Beginner lessons are free", "Masomo ya mwanzo ni bure")}</h1>
      <p className="mt-3 text-center text-muted-foreground">{t("Pro unlocks Intermediate. Elite unlocks Professional.", "Pro hufungua Kati. Elite hufungua Kitaalamu.")}</p>
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
