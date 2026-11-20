import { describe, expect, it } from "vitest";

import { glossary, glossaryLetter, searchGlossary } from "@/lib/glossary";

describe("Glossary data", () => {
  it("has at least 40 terms with unique keys and both languages", () => {
    expect(glossary.length).toBeGreaterThanOrEqual(40);
    expect(new Set(glossary.map((e) => e.key)).size).toBe(glossary.length);
    for (const e of glossary) {
      expect(e.en.length).toBeGreaterThan(0);
      expect(e.defEn.length).toBeGreaterThan(10);
      expect(e.defSw.length).toBeGreaterThan(10);
    }
  });

  it("keeps the pip definition accurate", () => {
    const pip = glossary.find((e) => e.key === "pip");
    expect(pip?.defEn).toContain("0.0001");
    expect(pip?.defEn).toContain("0.01");
  });

  it("flags Smart Money terms as interpretive", () => {
    for (const key of ["bos", "choch", "order-block", "fvg", "liquidity-sweep", "inducement"]) {
      expect(glossary.find((e) => e.key === key)?.interpretive).toBe(true);
    }
    expect(glossary.find((e) => e.key === "pip")?.interpretive).toBeFalsy();
  });
});

describe("searchGlossary", () => {
  it("returns every term, sorted A-Z, for an empty query", () => {
    const all = searchGlossary(glossary);
    expect(all).toHaveLength(glossary.length);
    expect(all.map((e) => e.en)).toEqual(
      [...all.map((e) => e.en)].sort((a, b) => a.localeCompare(b)),
    );
  });

  it("matches the English term case-insensitively", () => {
    const keys = searchGlossary(glossary, "SPREAD").map((e) => e.key);
    expect(keys).toContain("spread");
  });

  it("matches Swahili text", () => {
    const keys = searchGlossary(glossary, "ukwasi").map((e) => e.key);
    expect(keys).toContain("liquidity");
    expect(keys).toContain("liquidity-sweep");
  });

  it("matches inside definitions", () => {
    const keys = searchGlossary(glossary, "100,000 units").map((e) => e.key);
    expect(keys).toEqual(["lot"]);
  });

  it("filters by starting letter", () => {
    const results = searchGlossary(glossary, "", "B");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((e) => glossaryLetter(e) === "B")).toBe(true);
  });

  it("combines query and letter, and returns nothing for no match", () => {
    expect(searchGlossary(glossary, "pip", "P").map((e) => e.key)).toContain("pip");
    expect(searchGlossary(glossary, "pip", "Z")).toHaveLength(0);
    expect(searchGlossary(glossary, "zzzzqqq")).toHaveLength(0);
  });
});
