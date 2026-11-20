import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { pipValue, lotSize } from "@/lib/calc";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Trading Calculators — MUHPIPS" },
      { name: "description", content: "Free position size and pip value calculators for Forex and Gold traders." },
      { property: "og:title", content: "Trading Calculators — MUHPIPS" },
      { property: "og:description", content: "Position size and pip value calculators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tools,
});

function Field({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full rounded-lg border bg-input/30 px-3 py-2 font-mono outline-none focus:border-primary" />
    </label>
  );
}

function Tools() {
  const { t } = useLang();
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(1);
  const [sl, setSl] = useState(20);
  const [lots, setLots] = useState(0.1);
  const lot = lotSize(balance, risk, sl);
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-4xl font-extrabold md:text-5xl">{t("Trading tools", "Zana za biashara")}</h1>
      <p className="mt-3 text-muted-foreground">{t("Based on standard USD-quoted pairs (e.g. EURUSD).", "Kwa jozi za kawaida zinazonukuliwa kwa USD (mf. EURUSD).")}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-bold">{t("Position size", "Ukubwa wa nafasi")}</h2>
          <div className="mt-5 grid gap-4">
            <Field label={t("Account balance ($)", "Salio la akaunti ($)")} value={balance} onChange={setBalance} />
            <Field label={t("Risk (%)", "Hatari (%)")} value={risk} onChange={setRisk} />
            <Field label={t("Stop loss (pips)", "Stop loss (pips)")} value={sl} onChange={setSl} />
          </div>
          <div className="mt-6 rounded-xl bg-muted p-4">
            <p className="text-sm text-muted-foreground">{t("Lot size", "Ukubwa wa loti")}</p>
            <p className="font-mono text-3xl text-primary">{lot.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">{t("Risk amount", "Kiasi cha hatari")}: ${((balance * risk) / 100).toFixed(2)}</p>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-bold">{t("Pip value", "Thamani ya pip")}</h2>
          <div className="mt-5"><Field label={t("Lots", "Loti")} value={lots} onChange={setLots} /></div>
          <div className="mt-6 rounded-xl bg-muted p-4">
            <p className="text-sm text-muted-foreground">{t("Value per pip", "Thamani kwa pip")}</p>
            <p className="font-mono text-3xl text-primary">${pipValue(lots).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
