import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { glossary, glossaryLetter, INTERPRETIVE_NOTE, searchGlossary } from "@/lib/glossary";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Trading Glossary — MUHPIPS" },
      {
        name: "description",
        content:
          "A searchable English and Swahili glossary of trading terms: pips, lots, spread, leverage, liquidity, BOS, FVG and more.",
      },
      { property: "og:title", content: "Trading Glossary — MUHPIPS" },
      {
        property: "og:description",
        content: "Trading terms explained simply in English and Swahili.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Glossary,
});

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Glossary() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const available = useMemo(() => new Set(glossary.map(glossaryLetter)), []);
  const results = useMemo(() => searchGlossary(glossary, query, letter), [query, letter]);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {t("Glossary", "Kamusi")}
      </p>
      <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
        {t("Trading terms, explained simply", "Maneno ya biashara, yameelezwa kwa urahisi")}
      </h1>
      <p className="mt-4 text-muted-foreground">
        {t(
          "Search a term or browse A–Z. Every entry has an English definition and a Swahili explanation.",
          "Tafuta neno au vinjari A–Z. Kila neno lina maana kwa Kiingereza na maelezo kwa Kiswahili.",
        )}
      </p>

      <label htmlFor="glossary-search" className="sr-only">
        {t("Search the glossary", "Tafuta kwenye kamusi")}
      </label>
      <input
        id="glossary-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("Search, e.g. spread, ukwasi, FVG", "Tafuta, mf. spread, ukwasi, FVG")}
        className="mt-8 w-full rounded-full border bg-card px-5 py-3 outline-none focus:border-primary"
      />

      <div
        className="mt-4 flex flex-wrap gap-1.5"
        role="group"
        aria-label={t("Filter by letter", "Chuja kwa herufi")}
      >
        <button
          type="button"
          onClick={() => setLetter(null)}
          aria-pressed={letter === null}
          className={`rounded-full border px-3 py-1 font-mono text-xs ${letter === null ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {t("All", "Zote")}
        </button>
        {LETTERS.map((l) => (
          <button
            key={l}
            type="button"
            disabled={!available.has(l)}
            onClick={() => setLetter(letter === l ? null : l)}
            aria-pressed={letter === l}
            className={`h-7 w-7 rounded-full border font-mono text-xs disabled:cursor-not-allowed disabled:opacity-30 ${letter === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {l}
          </button>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-muted-foreground" aria-live="polite">
        {results.length} {t(results.length === 1 ? "term" : "terms", "maneno")}
      </p>

      <div className="mt-3 divide-y rounded-2xl border bg-card">
        {results.length === 0 && (
          <p className="p-6 text-muted-foreground">
            {t("No terms match your search.", "Hakuna maneno yanayolingana na utafutaji wako.")}
          </p>
        )}
        {results.map((e) => (
          <article key={e.key} className="p-5">
            <h2 className="font-semibold">
              {e.en}
              {e.sw !== e.en && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">· {e.sw}</span>
              )}
            </h2>
            <p className="mt-2 text-sm">{e.defEn}</p>
            <p className="mt-1 text-sm text-muted-foreground">{e.defSw}</p>
            {e.interpretive && (
              <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
                {t(INTERPRETIVE_NOTE.en, INTERPRETIVE_NOTE.sw)}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
