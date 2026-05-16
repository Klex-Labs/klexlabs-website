import Image from "next/image";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getDictionary, isLocale, Locale } from "@/lib/i18n";

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
    title: "Noxa",
    description: t.noxa.lead,
    alternates: {
      canonical: `/${locale}/noxa`,
      languages: { de: "/de/noxa", en: "/en/noxa" },
    },
  };
}

export default async function NoxaPage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).noxa;

  return (
    <main
      className="site-shell noxa-shell"
      style={
        {
          "--noxa-accent": "#3b6dff",
          "--noxa-accent-rgb": "59, 109, 255",
        } as CSSProperties
      }
    >
      <SiteHeader locale={locale} active="noxa" />

      <section className="noxa-hero">
        <div className="noxa-hero-copy">
          <p className="noxa-kicker">{t.kicker}</p>
          <h1>
            {t.titleA}
            <br />
            {t.titleB}
            <br />   <span>{t.titleAccentA}</span>
            <br />
            <span>{t.titleAccentB}</span>
          </h1>
          <p className="noxa-lead">{t.lead}</p>

          <div className="noxa-actions">
            <a className="noxa-primary" href="#screens">
              {t.primary} <span>↗</span>
            </a>
            <a className="noxa-secondary" href="#concept">
              {t.secondary} <span>▷</span>
            </a>
          </div>

          <div className="noxa-platforms" aria-label="Product status">
            <span>{t.status1}</span>
            <span>{t.status2}</span>
          </div>
        </div>

        <div className="app-coming-soon-visual placeholder-blue">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">{t.placeholderStatus}</span>
            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/noxa-logo.png"
                alt="Noxa logo"
                width={120}
                height={120}
                priority
                className="app-placeholder-logo"
              />
            </span>
            <h3>{t.placeholderTitle}</h3>
            <p>{t.placeholderText}</p>
          </div>
        </div>
      </section>

      <section className="noxa-feature-strip" aria-label="Noxa features">
        {t.features.map((feature) => (
          <article key={feature.title}>
            <span className="noxa-feature-icon">{feature.icon}</span>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="noxa-showcase" id="screens">
        <div className="app-coming-soon-visual placeholder-blue" aria-label="Noxa app screenshots coming soon">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">{t.placeholderStatus}</span>
            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/noxa-logo.png"
                alt="Noxa logo"
                width={120}
                height={120}
                className="app-placeholder-logo"
              />
            </span>
            <h3>{t.placeholderTitle}</h3>
            <p>{t.placeholderText2}</p>
          </div>
        </div>

        <div className="noxa-story" id="concept">
          <p className="noxa-kicker">{t.storyKicker}</p>
          <h2>
            {t.storyTitleA}
            <br />
            {t.storyTitleB}
          </h2>
          <p>{t.storyText}</p>

          <div className="noxa-principles">
            {t.principles.map((principle) => (
              <article key={principle.title}>
                <span>✦</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
