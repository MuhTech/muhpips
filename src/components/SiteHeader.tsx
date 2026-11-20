import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/courses", label: t("Courses", "Kozi") },
    { to: "/tools", label: t("Tools", "Zana") },
    { to: "/pricing", label: t("Pricing", "Bei") },
    { to: "/glossary", label: t("Glossary", "Kamusi") },
    { to: "/about", label: t("About", "Kuhusu") },
    { to: "/contact", label: t("Contact", "Wasiliana") },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Link
          to="/"
          className="font-display text-xl font-extrabold tracking-tight"
          onClick={() => setOpen(false)}
        >
          MUH<span className="text-gold">PIPS</span>
        </Link>
        <nav
          className="hidden gap-6 text-sm text-muted-foreground md:flex"
          aria-label={t("Main", "Kuu")}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border p-1 font-mono text-xs">
            {(["en", "sw"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 uppercase ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground hover:text-foreground md:hidden"
            aria-label={open ? t("Close menu", "Funga menyu") : t("Open menu", "Fungua menyu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="grid gap-1 border-t px-5 py-3 text-sm md:hidden"
          aria-label={t("Mobile", "Simu")}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  const links = [
    { to: "/", label: t("Home", "Mwanzo") },
    { to: "/courses", label: t("Courses", "Kozi") },
    { to: "/tools", label: t("Tools", "Zana") },
    { to: "/pricing", label: t("Pricing", "Bei") },
    { to: "/glossary", label: t("Glossary", "Kamusi") },
    { to: "/about", label: t("About", "Kuhusu") },
    { to: "/contact", label: t("Contact", "Wasiliana") },
  ] as const;
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <span className="font-display text-lg font-bold text-foreground">
              MUH<span className="text-gold">PIPS</span>
            </span>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {t("Understand Trading. Master the Markets.", "Elewa Biashara. Tawala Masoko.")}
            </p>
          </div>
          <nav
            aria-label={t("Footer", "Chini")}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 rounded-xl border bg-card p-4 text-xs leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">
            {t("Risk disclaimer", "Tahadhari ya hatari")}
          </p>
          <p className="mt-1">
            {t(
              "Trading Forex, Gold, Crypto, Indices, Stocks and Commodities carries a substantial risk of loss, including the loss of the entire amount you commit. Leverage can amplify losses as well as gains. MUHPIPS is for education only. It does not provide financial advice, investment recommendations or trading signals, and it does not promise profits.",
              "Kufanya biashara ya Forex, Dhahabu, Crypto, Fahirisi, Hisa na Bidhaa kuna hatari kubwa ya hasara, ikiwemo kupoteza kiasi chote ulichoweka. Leverage inaweza kuongeza hasara kama inavyoongeza faida. MUHPIPS ni kwa ajili ya elimu tu. Haitoi ushauri wa kifedha, mapendekezo ya uwekezaji wala ishara za biashara, na haiahidi faida.",
            )}
          </p>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} MUHPIPS.{" "}
          {t("All rights reserved.", "Haki zote zimehifadhiwa.")}
        </p>
      </div>
    </footer>
  );
}
