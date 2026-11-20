import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MUHPIPS" },
      { name: "description", content: "Get in touch with the MUHPIPS team by email." },
      { property: "og:title", content: "Contact — MUHPIPS" },
      {
        property: "og:description",
        content: "Questions or feedback about MUHPIPS? Send us an email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {t("Contact", "Wasiliana")}
      </p>
      <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
        {t("Get in touch", "Wasiliana nasi")}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        {t(
          "Questions, feedback or ideas for a lesson? Send us an email and we will reply as soon as we can.",
          "Una swali, maoni au wazo la somo? Tutumie barua pepe na tutajibu mapema iwezekanavyo.",
        )}
      </p>
      <div className="mt-8 rounded-2xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">{t("Email", "Barua pepe")}</p>
        <p className="mt-1 break-all font-mono">{CONTACT_EMAIL}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="bg-gold shadow-glow mt-5 inline-block rounded-full px-6 py-3 font-semibold text-primary-foreground"
        >
          {t("Send an email", "Tuma barua pepe")}
        </a>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        {t(
          "We cannot give personal financial advice, trade recommendations or signals.",
          "Hatuwezi kutoa ushauri binafsi wa kifedha, mapendekezo ya biashara wala ishara.",
        )}
      </p>
    </div>
  );
}
