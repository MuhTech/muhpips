import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const links = [
    { to: "/courses", label: t("Courses", "Kozi") },
    { to: "/tools", label: t("Tools", "Zana") },
    { to: "/pricing", label: t("Pricing", "Bei") },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
          MUH<span className="text-gold">PIPS</span>
        </Link>
        <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground" activeProps={{ className: "text-primary" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex rounded-full border p-1 font-mono text-xs">
          {(["en", "sw"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`rounded-full px-3 py-1 uppercase ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <nav className="flex justify-center gap-6 border-t py-2 text-sm text-muted-foreground sm:hidden">
        {links.map((l) => (
          <Link key={l.to} to={l.to} activeProps={{ className: "text-primary" }}>{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span className="font-display font-bold text-foreground">MUH<span className="text-gold">PIPS</span></span>
        <span>{t("Understand Trading. Master the Markets.", "Elewa Biashara. Tawala Masoko.")}</span>
        <span>{t("Education only — not financial advice.", "Elimu tu — si ushauri wa kifedha.")}</span>
      </div>
    </footer>
  );
}
