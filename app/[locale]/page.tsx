import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getDictionary, isLocale, Locale, routeFor } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  const t = getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const locale = await getLocale(params);
  const t = getDictionary(locale);

  return (
    <main
      className="site-shell home-shell"
      style={
        {
          "--studio-green": "#38F06F",
          "--studio-blue": "#3B6DFF",
          "--studio-purple": "#A66CFF",
        } as CSSProperties
      }
    >
      <SiteHeader locale={locale} active="home" />

      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="hero-kicker">{t.home.kicker}</p>

          <h1 className="hero-title">
  {t.home.titleA}
  <br />
  <span className="klex-gradient-text">{t.home.titleB}</span>
</h1>

          <p className="hero-lead">{t.home.lead}</p>

          <div className="hero-actions">
            <a href="#apps" className="hero-primary">
              {t.home.primary} <span>↗</span>
            </a>
            <a href="#manifesto" className="hero-secondary">
              {t.home.secondary} <span>□</span>
            </a>
          </div>

          <div className="home-purpose-row">
            <span>{t.home.purposeKicker}</span>
            <div>
              <b>◎</b> {t.home.purpose1}
            </div>
            <div>
              <b>▣</b> {t.home.purpose2}
            </div>
            <div>
              <b>◇</b> {t.home.purpose3}
            </div>
          </div>
        </div>

        <div className="home-hero-visual" aria-hidden="true">
          <Image
            src="/images/studio-eco-system.png"
            alt=""
            width={1672}
            height={941}
            priority
            className="home-hero-image"
          />
        </div>
      </section>

      <section className="home-panel" id="apps">
        <div className="home-apps-row">
          <div className="home-panel-intro">
            <p className="section-kicker">{t.home.appsKicker}</p>
            <h2>
              {t.home.appsTitleA}
              <br />
              {t.home.appsTitleB}
            </h2>
            <p>{t.home.appsLead}</p>
          </div>

          {t.home.apps.map((app) => {
            const pageKey = app.name.toLowerCase() as "noxa" | "reson" | "elixa";

            return (
              <Link
                key={app.name}
                href={routeFor(locale, pageKey)}
                className="home-product-card"
                style={{ "--app-accent": app.color } as CSSProperties}
              >
                <span className="home-product-logo">
                  <Image src={app.logo} alt="" width={54} height={54} />
                </span>

                <div>
                  <h3>{app.name}</h3>
                  <span>{app.status}</span>
                  <p>{app.title}</p>
                </div>

                <b>↗</b>
              </Link>
            );
          })}
        </div>

        <div className="home-principles-row" id="manifesto">
          <div className="home-panel-intro">
            <p className="section-kicker">{t.home.manifestoKicker}</p>
            <h2>
              {t.home.manifestoTitleA}
              <br />
              {t.home.manifestoTitleB}
            </h2>
          </div>

          {t.home.principles.map((principle) => (
            <article key={principle.title}>
              <span>✦</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">{t.home.contactKicker}</p>
        <h2>{t.home.contactTitle}</h2>
        <p>{t.home.contactLead}</p>

        <a href="mailto:info.klexstudios@gmail.com" className="hero-primary">
          info.klexstudios@gmail.com <span>↗</span>
        </a>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
