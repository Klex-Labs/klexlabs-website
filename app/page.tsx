"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

type AppId = "noxa" | "reson" | "elixa";
type ViewId = "studio" | AppId | "about" | "contact";
type Lang = "en" | "de";

type StudioApp = {
  id: AppId;
  name: string;
  status: {
    en: string;
    de: string;
  };
  accent: string;
  accentRgb: string;
  logo: string;
  label: {
    en: string;
    de: string;
  };
  short: {
    en: string;
    de: string;
  };
  expanded: {
    en: string;
    de: string;
  };
  purpose: {
    en: string;
    de: string;
  };
  principle: {
    en: string;
    de: string;
  };
  index: string;
};

const copy = {
  en: {
    nav: {
      studio: "Studio",
      about: "About",
      contact: "Contact",
    },
    heroEyebrow: "Independent digital studio",
    heroTitle: "Software for people who still want the real world.",
    heroSubline:
      "Klex Studios builds apps for dating, parties, events and social moments — designed to move people closer, not deeper into feeds.",
    exploreApps: "Explore Apps",
    manifesto: "Studio Manifesto",
    positionEyebrow: "The position",
    positionTitle:
      "Most social apps optimize for attention. Klex Studios optimizes for the moment after the screen.",
    positionText:
      "The products are built around one principle: technology should create better conditions for people to meet, talk, laugh, date and experience something together.",
    productSystem: "Product system",
    productTitle: "Three apps. One direction.",
    open: "Open",
    principle: "Principle",
    purpose: "Purpose",
    aboutEyebrow: "About",
    aboutTitle: "A small studio with a clear bias toward real life.",
    aboutText1:
      "Klex Studios is an independent digital studio building social products with a simple constraint: the best outcome should not be more time in the app.",
    aboutText2:
      "The goal is to design software that creates better openings for people — to meet, talk, date, celebrate, discover and remember.",
    principles: [
      {
        title: "Question the default",
        text: "Social software does not have to be built around endless feeds, ranking loops and shallow engagement.",
      },
      {
        title: "Design for the human moment",
        text: "Every product should eventually point away from passive scrolling and toward real interaction.",
      },
      {
        title: "Stay visually honest",
        text: "Clear symbols, clear status, clear intent. No fake maturity, no inflated product theater.",
      },
    ],
    contactEyebrow: "Contact",
    contactTitle: "Less scrolling. More living.",
    contactText:
      "Klex Studios is building a small ecosystem of apps for dating, parties, events and real-world connection.",
    contactButton: "Contact",
    footer: "Less scrolling. More living.",
    privacy: "Privacy",
  },
  de: {
    nav: {
      studio: "Studio",
      about: "Über uns",
      contact: "Kontakt",
    },
    heroEyebrow: "Unabhängiges Digitalstudio",
    heroTitle: "Software für Menschen, die noch echte Momente wollen.",
    heroSubline:
      "Klex Studios entwickelt Apps für Dating, Partys, Events und soziale Begegnungen — gebaut, um Menschen näher zusammenzubringen, nicht tiefer in Feeds zu ziehen.",
    exploreApps: "Apps ansehen",
    manifesto: "Studio Manifest",
    positionEyebrow: "Die Haltung",
    positionTitle:
      "Die meisten Social Apps optimieren Aufmerksamkeit. Klex Studios optimiert den Moment nach dem Bildschirm.",
    positionText:
      "Alle Produkte folgen einem Prinzip: Technologie soll bessere Bedingungen schaffen, damit Menschen sich treffen, reden, lachen, daten und echte Dinge gemeinsam erleben.",
    productSystem: "Produktsystem",
    productTitle: "Drei Apps. Eine Richtung.",
    open: "Öffne",
    principle: "Prinzip",
    purpose: "Zweck",
    aboutEyebrow: "Über uns",
    aboutTitle: "Ein kleines Studio mit klarer Richtung: echtes Leben.",
    aboutText1:
      "Klex Studios ist ein unabhängiges Digitalstudio für soziale Produkte mit einer einfachen Grenze: Das beste Ergebnis ist nicht mehr Zeit in der App.",
    aboutText2:
      "Ziel ist Software, die bessere Einstiege schafft — um Menschen zu treffen, zu reden, zu daten, zu feiern, zu entdecken und sich an Momente zu erinnern.",
    principles: [
      {
        title: "Den Standard hinterfragen",
        text: "Soziale Software muss nicht aus endlosen Feeds, Ranking-Loops und flacher Aufmerksamkeit bestehen.",
      },
      {
        title: "Für echte Momente designen",
        text: "Jedes Produkt soll irgendwann weg vom passiven Scrollen und hin zu echter Interaktion führen.",
      },
      {
        title: "Visuell ehrlich bleiben",
        text: "Klare Symbole, klarer Status, klare Absicht. Kein künstliches Reifewirken, kein aufgeblasenes Produkt-Theater.",
      },
    ],
    contactEyebrow: "Kontakt",
    contactTitle: "Weniger Scrollen. Mehr Leben.",
    contactText:
      "Klex Studios baut ein kleines App-Ökosystem für Dating, Partys, Events und echte soziale Verbindung.",
    contactButton: "Kontakt",
    footer: "Weniger Scrollen. Mehr Leben.",
    privacy: "Datenschutz",
  },
};

const apps: StudioApp[] = [
  {
    id: "noxa",
    name: "Noxa",
    status: {
      en: "Concept",
      de: "Konzept",
    },
    accent: "#3B82F6",
    accentRgb: "59, 130, 246",
    logo: "/logos/noxa-logo.png",
    label: {
      en: "Social Discovery",
      de: "Social Discovery",
    },
    short: {
      en: "Find events, groups and real-world moments around you.",
      de: "Finde Events, Gruppen und echte Momente in deiner Nähe.",
    },
    expanded: {
      en: "Noxa is built for social discovery outside the feed: communities, events, places and shared experiences that actually happen in the real world.",
      de: "Noxa ist für Social Discovery außerhalb des Feeds gebaut: Communities, Events, Orte und gemeinsame Erlebnisse, die wirklich stattfinden.",
    },
    purpose: {
      en: "Help people discover what is happening nearby and step into social moments instead of endlessly scrolling past them.",
      de: "Menschen sollen entdecken, was in ihrer Nähe passiert, und echte soziale Momente betreten, statt endlos daran vorbeizuscrollen.",
    },
    principle: {
      en: "Less feed. More places.",
      de: "Weniger Feed. Mehr Orte.",
    },
    index: "01",
  },
  {
    id: "reson",
    name: "Reson",
    status: {
      en: "Development",
      de: "In Entwicklung",
    },
    accent: "#A78BFA",
    accentRgb: "167, 139, 250",
    logo: "/logos/reson-logo.png",
    label: {
      en: "Dating",
      de: "Dating",
    },
    short: {
      en: "A calmer dating app built around intention and compatibility.",
      de: "Eine ruhigere Dating-App für Intention und Kompatibilität.",
    },
    expanded: {
      en: "Reson questions dopamine-driven swipe culture and focuses on intention, compatibility, values and honest connection.",
      de: "Reson hinterfragt dopamin-getriebene Swipe-Kultur und setzt auf Intention, Kompatibilität, Werte und ehrliche Verbindung.",
    },
    purpose: {
      en: "Create better conditions for people to choose differently, talk more honestly and meet with clearer intent.",
      de: "Bessere Bedingungen schaffen, damit Menschen anders wählen, ehrlicher reden und sich mit klarerer Absicht treffen.",
    },
    principle: {
      en: "Less swiping. More intention.",
      de: "Weniger Swipen. Mehr Absicht.",
    },
    index: "02",
  },
  {
    id: "elixa",
    name: "Elixa",
    status: {
      en: "Development",
      de: "In Entwicklung",
    },
    accent: "#38F06F",
    accentRgb: "56, 240, 111",
    logo: "/logos/elixa-logo.png",
    label: {
      en: "Party Game",
      de: "Party Game",
    },
    short: {
      en: "A party game for conversations, chaos and memorable nights.",
      de: "Ein Partyspiel für Gespräche, Chaos und erinnerbare Nächte.",
    },
    expanded: {
      en: "Elixa turns phones into a trigger for group moments: questions, laughter, chaos and stories people remember later.",
      de: "Elixa macht Smartphones zum Auslöser für Gruppenmomente: Fragen, Lachen, Chaos und Geschichten, an die man sich später erinnert.",
    },
    purpose: {
      en: "Make parties more social by giving groups a simple way to start conversations, break silence and create shared memories.",
      de: "Partys sozialer machen, indem Gruppen leichter Gespräche starten, Stille brechen und gemeinsame Erinnerungen schaffen.",
    },
    principle: {
      en: "Less silence. More stories.",
      de: "Weniger Stille. Mehr Stories.",
    },
    index: "03",
  },
];

export default function Home() {
  const [activeView, setActiveView] = useState<ViewId>("studio");
  const [lang, setLang] = useState<Lang>("en");

  const activeApp = useMemo(
    () => apps.find((app) => app.id === activeView),
    [activeView],
  );

  const accent = activeApp?.accent ?? "#ffffff";
  const accentRgb = activeApp?.accentRgb ?? "255, 255, 255";
  const t = copy[lang];

  const navItems: { id: ViewId; label: string; accent?: string }[] = [
    { id: "studio", label: t.nav.studio, accent: "#ffffff" },
    { id: "noxa", label: "Noxa", accent: "#3B82F6" },
    { id: "reson", label: "Reson", accent: "#A78BFA" },
    { id: "elixa", label: "Elixa", accent: "#38F06F" },
    { id: "about", label: t.nav.about, accent: "#ffffff" },
    { id: "contact", label: t.nav.contact, accent: "#ffffff" },
  ];

  return (
    <main
      className="site-shell"
      style={
        {
          "--accent": accent,
          "--accent-rgb": accentRgb,
        } as CSSProperties
      }
    >
      <header className="site-header">
        <button
          className="brand"
          onClick={() => setActiveView("studio")}
          aria-label="Open Klex Studios overview"
        >
          <Image
            src="/logos/klex-logo.png"
            alt="Klex Studios Logo"
            width={42}
            height={42}
            priority
            className="brand-logo"
          />
          <span>Klex Studios</span>
        </button>

        <div className="header-controls">
          <nav className="nav-tabs" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={
                  activeView === item.id ? "nav-tab active" : "nav-tab"
                }
                style={
                  {
                    "--nav-accent": item.accent ?? "#ffffff",
                  } as CSSProperties
                }
                onClick={() => setActiveView(item.id)}
                aria-current={activeView === item.id ? "page" : undefined}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="language-switch" aria-label="Language selection">
            <button
              className={lang === "en" ? "language-button active" : "language-button"}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              className={lang === "de" ? "language-button active" : "language-button"}
              onClick={() => setLang("de")}
              aria-pressed={lang === "de"}
            >
              DE
            </button>
          </div>
        </div>
      </header>

      <section className="content-frame">
        {activeView === "studio" && (
          <StudioOverview onSelectView={setActiveView} lang={lang} />
        )}

        {activeApp && <AppDetail app={activeApp} lang={lang} />}

        {activeView === "about" && <AboutSection lang={lang} />}

        {activeView === "contact" && <ContactSection lang={lang} />}
      </section>

      <footer className="footer">
        <div>
          <span>© 2026 Klex Studios.</span>
          <strong> {t.footer}</strong>
        </div>

        <nav className="footer-links" aria-label="Legal links">
          <a href="/impressum">Impressum</a>
          <a href="/privacy">{t.privacy}</a>
        </nav>
      </footer>
    </main>
  );
}

function StudioOverview({
  onSelectView,
  lang,
}: {
  onSelectView: (view: ViewId) => void;
  lang: Lang;
}) {
  const t = copy[lang];

  return (
    <div className="view enter">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>

          <h1>{t.heroTitle}</h1>

          <p className="hero-subline">{t.heroSubline}</p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => onSelectView("noxa")}
            >
              {t.exploreApps}
            </button>

            <button
              className="secondary-button"
              onClick={() => onSelectView("about")}
            >
              {t.manifesto}
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="logo-stage">
            <div className="logo-stage-grid" />
            <Image
              src="/logos/klex-logo.png"
              alt=""
              width={280}
              height={280}
              priority
              className="hero-logo"
            />
            <div className="corner-mark corner-blue" />
            <div className="corner-mark corner-purple" />
            <div className="corner-mark corner-green" />
          </div>
        </div>
      </section>

      <section className="statement-panel">
        <div>
          <p className="eyebrow">{t.positionEyebrow}</p>
          <h2>{t.positionTitle}</h2>
        </div>

        <p>{t.positionText}</p>
      </section>

      <section className="ecosystem">
        <div className="section-heading">
          <p className="eyebrow">{t.productSystem}</p>
          <h2>{t.productTitle}</h2>
        </div>

        <div className="app-showcase">
          {apps.map((app) => (
            <button
              key={app.id}
              className="app-card"
              style={
                {
                  "--card-accent": app.accent,
                  "--card-accent-rgb": app.accentRgb,
                } as CSSProperties
              }
              onClick={() => onSelectView(app.id)}
            >
              <span className="app-index">{app.index}</span>

              <div className="app-card-header">
                <Image
                  src={app.logo}
                  alt={`${app.name} Logo`}
                  width={58}
                  height={58}
                  className="app-logo"
                />

                <span>{app.status[lang]}</span>
              </div>

              <div className="app-card-body">
                <p className="app-label">{app.label[lang]}</p>
                <h3>{app.name}</h3>
                <p>{app.short[lang]}</p>
              </div>

              <span className="card-link">
                {t.open} {app.name}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function AppDetail({ app, lang }: { app: StudioApp; lang: Lang }) {
  const t = copy[lang];

  return (
    <div className="view enter">
      <section className="app-detail">
        <div className="app-detail-copy">
          <p className="eyebrow">{app.label[lang]}</p>

          <div className="title-row">
            <div className="app-title-lockup">
              <Image
                src={app.logo}
                alt={`${app.name} Logo`}
                width={86}
                height={86}
                priority
                className="detail-logo"
              />
              <h1>{app.name}</h1>
            </div>

            <span className="status-pill">{app.status[lang]}</span>
          </div>

          <p className="hero-subline">{app.short[lang]}</p>

          <div className="detail-grid">
            <div className="detail-block">
              <span>{t.principle}</span>
              <h2>{app.principle[lang]}</h2>
              <p>{app.expanded[lang]}</p>
            </div>

            <div className="detail-block muted-block">
              <span>{t.purpose}</span>
              <p>{app.purpose[lang]}</p>
            </div>
          </div>
        </div>

        <div className="product-stage" aria-hidden="true">
          <div className="product-card">
            <div className="product-card-top">
              <span>{app.index}</span>
              <span>{app.status[lang]}</span>
            </div>

            <Image
              src={app.logo}
              alt=""
              width={130}
              height={130}
              className="product-logo"
            />

            <div className="product-preview">
              <span className="preview-kicker">{app.name}</span>
              <h2>{app.principle[lang]}</h2>

              <div className="preview-lines">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="product-corner" />
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutSection({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div className="view enter">
      <section className="about-grid">
        <div>
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h1>{t.aboutTitle}</h1>
        </div>

        <div className="about-copy">
          <p>{t.aboutText1}</p>
          <p>{t.aboutText2}</p>
        </div>
      </section>

      <section className="principles">
        {t.principles.map((principle, index) => (
          <div key={principle.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

function ContactSection({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div className="view enter">
      <section className="contact-panel">
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h1>{t.contactTitle}</h1>

        <p>{t.contactText}</p>

        <div className="contact-actions">
          <a className="primary-button" href="mailto:info.klexstudios@gmail.com">
            {t.contactButton}
          </a>

          <a className="secondary-button" href="https://klexstudios.com">
            klexstudios.com
          </a>
        </div>
      </section>
    </div>
  );
}