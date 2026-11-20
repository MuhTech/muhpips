import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — MUHPIPS Free, Pro & Elite" },
      { name: "description", content: "All MUHPIPS courses are free. Upgrade to Pro or Elite for certificates, live chart breakdowns and priority support." },
      { property: "og:title", content: "Pricing — MUHPIPS" },
      { property: "og:description", content: "Every course is free. Pro and Elite add certificates, live sessions and support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const { t } = useLang();
  const tiers = [
    { name: "Free", price: "$0", feats: [t("All 8 courses, all levels", "Kozi zote 8, viwango vyote"), t("Beginner to Professional paths", "Njia kutoka mwanzo hadi kitaalamu"), t("Quizzes & learning paths", "Maswali na njia za kujifunza"), t("All calculators", "Vikokotoo vyote")] },
    { name: "Pro", price: "$9", hot: true, feats: [t("Everything in Free", "Kila kitu cha Free"), t("Certificates", "Vyeti"), t("Personal learning path", "Njia binafsi ya kujifunza"), t("Progress reviews", "Ukaguzi wa maendeleo")] },
    { name: "Elite", price: "$29", feats: [t("Everything in Pro", "Kila kitu cha Pro"), t("Live chart breakdowns", "Uchambuzi wa chati moja kwa moja"), t("1-on-1 mentorship", "Ushauri wa moja kwa moja"), t("Priority support", "Msaada wa kipaumbele")] },
  ];
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-center text-4xl font-extrabold md:text-5xl">{t("All courses are free", "Kozi zote ni bure")}</h1>
      <p className="mt-3 text-center text-muted-foreground">{t("Pro and Elite add extras on top — upgrade only if you want them.", "Pro na Elite vinaongeza vipaumbele zaidi — panda daraja ukitaka tu.")}</p>
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
