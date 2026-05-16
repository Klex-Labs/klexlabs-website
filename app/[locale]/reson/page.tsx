import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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
    title: "Reson",
    description: t.reson.lead,
    alternates: {
      canonical: `/${locale}/reson`,
      languages: { de: "/de/reson", en: "/en/reson" },
    },
  };
}

export default async function ResonPage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).reson;

  return (
    <main
      className="product-page reson-page"
      style={
        {
          "--accent": "#A66CFF",
          "--accent-rgb": "166, 108, 255",
        } as CSSProperties
      }
    >
      <SiteHeader locale={locale} active="reson" />

      <section className="product-hero reson-hero">
        <div className="product-copy">
          <p className="product-kicker">{t.kicker}</p>

          <h1>
            {t.titleA}
            <br />
            {t.titleB}
            <br />
            {t.titleC} <span>{t.titleAccent}</span>
          </h1>

          <p className="product-lead">{t.lead}</p>

          <div className="product-actions">
            <a href="#screens" className="product-primary">
              {t.primary} <span>↗</span>
            </a>
            <a href="#idea" className="product-secondary">
              {t.secondary} <span>□</span>
            </a>
          </div>

          <div className="product-micro-row reson-micro">
            {t.micro.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="app-coming-soon-visual placeholder-purple">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">{t.placeholderStatus}</span>
            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/reson-logo.png"
                alt="Reson logo"
                width={120}
                height={120}
                className="app-placeholder-logo"
                priority
              />
            </span>
            <h3>{t.placeholderTitle}</h3>
            <p>{t.placeholderText}</p>
          </div>
        </div>
      </section>

      <section className="feature-strip reson-strip">
        {t.features.map((feature) => (
          <article key={feature.title}>
            <span>{feature.icon}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="idea" className="reson-lower">
        <div className="reson-experience">
          <p className="product-kicker">{t.experienceKicker}</p>

          <h2>
            {t.experienceTitleA}
            <br />
            {t.experienceTitleB}
          </h2>

          <p>{t.experienceText}</p>

          <div id="screens" className="app-coming-soon-visual placeholder-purple">
            <div className="app-coming-soon-card">
              <span className="app-status-pill">{t.placeholderStatus}</span>
              <span className="app-placeholder-logo-wrap">
                <Image
                  src="/logos/reson-logo.png"
                  alt="Reson logo"
                  width={120}
                  height={120}
                  className="app-placeholder-logo"
                />
              </span>
              <h3>{t.placeholderTitle}</h3>
              <p>{t.placeholderText2}</p>
            </div>
          </div>
        </div>

        <div className="reson-manifest">
          <p className="product-kicker">{t.manifestKicker}</p>

          <h2>
            {t.manifestTitleA}
            <br />
            {t.manifestTitleB}
          </h2>

          <p>{t.manifestText}</p>

          <ul>
            {t.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link href={`${routeFor(locale, "home")}#manifesto`} className="product-secondary reson-manifest-link">
            {t.manifestLink} <span>↗</span>
          </Link>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
