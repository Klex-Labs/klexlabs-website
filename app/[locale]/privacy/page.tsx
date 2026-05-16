import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import PrivacyContent from "@/components/PrivacyContent";
import { getDictionary, isLocale, Locale, routeFor } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = getDictionary(locale);

  return {
    title: t.legal.privacyTitle,
    alternates: {
      canonical: routeFor(locale, "privacy"),
      languages: { de: "/de/datenschutz", en: "/en/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale);

  return (
    <main className="legal-page">
      <section className="legal-shell">
        <Link href={routeFor(locale, "home")} className="legal-back">
          {t.legal.back}
        </Link>

        <p className="legal-kicker">{locale === "de" ? "Datenschutz" : "Privacy Policy"}</p>
        <h1>{t.legal.privacyTitle}</h1>

        <div className="legal-content">
          <PrivacyContent locale={locale} />
        </div>
      </section>

      <SiteFooter locale={locale} variant="legal" />
    </main>
  );
}
