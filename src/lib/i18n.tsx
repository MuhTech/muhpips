import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "sw";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (en: string, sw: string) => (lang === "en" ? en : sw);
  return { lang, setLang, t };
}
