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
    title: "Elixa",
    description: t.elixa.lead,
    alternates: {
      canonical: `/${locale}/elixa`,
      languages: { de: "/de/elixa", en: "/en/elixa" },
    },
  };
}

export default async function ElixaPage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale).elixa;

  return (
    <main
      className="site-shell elixa-shell"
      style={
        {
          "--elixa-accent": "#38F06F",
          "--elixa-accent-rgb": "56, 240, 111",
        } as CSSProperties
      }
    >
      <SiteHeader locale={locale} active="elixa" />

      <section className="elixa-hero">
        <div className="elixa-hero-copy">
          <p className="elixa-kicker">{t.kicker}</p>

          <h1>
            {t.titleA}
            <br />
            <span>{t.titleAccent}</span>
          </h1>

          <p className="elixa-lead">{t.lead}</p>

          <div className="elixa-actions">
            <a className="elixa-primary" href="#games">
              {t.primary} <span>↗</span>
            </a>
            <a className="elixa-secondary" href="#games">
              {t.secondary} <span>□</span>
            </a>
          </div>

          <div className="elixa-micro-row">
            {t.micro.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="app-coming-soon-visual placeholder-green">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">{t.placeholderStatus}</span>
            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/elixa-logo.png"
                alt="Elixa logo"
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

      <section className="elixa-feature-strip" aria-label="Elixa features">
        {t.features.map((feature) => (
          <article key={feature.title}>
            <span className="elixa-feature-icon">{feature.icon}</span>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="elixa-showcase" id="games">
        <div className="elixa-story">
          <p className="elixa-section-kicker">{t.storyKicker}</p>
          <h2>
            {t.storyTitleA}
            <br />
            {t.storyTitleB}
          </h2>
          <p>{t.storyText}</p>

          <a className="elixa-outline-button" href="#games">
            {t.storyLink} <span>↗</span>
          </a>
        </div>

        <div className="app-coming-soon-visual placeholder-green" aria-label="Elixa app screenshots coming soon">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">{t.placeholderStatus}</span>
            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/elixa-logo.png"
                alt="Elixa logo"
                width={120}
                height={120}
                className="app-placeholder-logo"
              />
            </span>
            <h3>{t.placeholderTitle}</h3>
            <p>{t.placeholderText2}</p>
          </div>
        </div>

        <div className="elixa-vibe">
          <p className="elixa-section-kicker">{t.vibeKicker}</p>
          <h2>
            {t.vibeTitleA}
            <br />
            {t.vibeTitleB}
          </h2>
          <p>{t.vibeText}</p>

          <ul>
            {t.vibePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
