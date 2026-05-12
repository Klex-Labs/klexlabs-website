"use client";

import { useMemo, useState } from "react";

type AppId = "noxa" | "reson" | "elixa";
type ViewId = "studio" | AppId | "about" | "contact";

type StudioApp = {
  id: AppId;
  name: string;
  status: string;
  accent: string;
  accentRgb: string;
  label: string;
  short: string;
  expanded: string;
  purpose: string;
  principle: string;
};

const apps: StudioApp[] = [
  {
    id: "noxa",
    name: "Noxa",
    status: "Concept",
    accent: "#3B82F6",
    accentRgb: "59, 130, 246",
    label: "Social Discovery",
    short:
      "A social discovery app for communities, events and real-world experiences.",
    expanded:
      "Find groups, places and moments around you — not to scroll through life, but to step into it.",
    purpose:
      "Noxa helps people discover what is happening nearby and connect with communities, events and shared experiences in the real world.",
    principle: "Less feed. More places.",
  },
  {
    id: "reson",
    name: "Reson",
    status: "Development",
    accent: "#A78BFA",
    accentRgb: "167, 139, 250",
    label: "Dating",
    short: "A dating app designed against dopamine-driven swipe culture.",
    expanded:
      "Built around intention, compatibility and honest connection — not endless swiping, shallow ranking or attention games.",
    purpose:
      "Reson questions the current dating-app model and explores a calmer, more intentional way to meet people.",
    principle: "Less swiping. More intention.",
  },
  {
    id: "elixa",
    name: "Elixa",
    status: "Development",
    accent: "#38F06F",
    accentRgb: "56, 240, 111",
    label: "Party Game",
    short: "A party game app for conversations, chaos and memorable nights.",
    expanded:
      "Built for groups, questions, laughs and the kind of moments people still talk about later.",
    purpose:
      "Elixa turns phones into a starting point for real conversations and shared party moments, not another screen people disappear into.",
    principle: "Less silence. More stories.",
  },
];

const navItems: { id: ViewId; label: string }[] = [
  { id: "studio", label: "Klex Studios" },
  { id: "noxa", label: "Noxa" },
  { id: "reson", label: "Reson" },
  { id: "elixa", label: "Elixa" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeView, setActiveView] = useState<ViewId>("studio");

  const activeApp = useMemo(
    () => apps.find((app) => app.id === activeView),
    [activeView],
  );

  const accent = activeApp?.accent ?? "#ffffff";
  const accentRgb = activeApp?.accentRgb ?? "255, 255, 255";

  return (
    <main
      className="site-shell"
      style={
        {
          "--accent": accent,
          "--accent-rgb": accentRgb,
        } as React.CSSProperties
      }
    >
      <header className="site-header">
        <button
          className="brand"
          onClick={() => setActiveView("studio")}
          aria-label="Open Klex Studios overview"
        >
          <span className="brand-mark" />
          <span>Klex Studios</span>
        </button>

        <nav className="nav-tabs" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeView === item.id ? "nav-tab active" : "nav-tab"}
              onClick={() => setActiveView(item.id)}
              aria-current={activeView === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <section className="content-frame">
        {activeView === "studio" && (
          <StudioOverview onSelectView={setActiveView} />
        )}

        {activeApp && <AppDetail app={activeApp} />}

        {activeView === "about" && <AboutSection />}

        {activeView === "contact" && <ContactSection />}
      </section>

      <footer className="footer">
        <div>
          <span>© 2026 Klex Studios. All rights reserved.</span>
          <strong> Less scrolling. More living.</strong>
        </div>

        <nav className="footer-links" aria-label="Legal links">
          <a href="/impressum">Impressum</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </footer>
    </main>
  );
}

function StudioOverview({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <div className="view enter">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Independent product studio</p>

          <h1>Technology should bring people closer, not keep them scrolling.</h1>

          <p className="hero-subline">
            Klex Studios is an independent product studio building apps for
            real-world connection.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => onSelectView("noxa")}
            >
              Explore the Apps
            </button>

            <button
              className="secondary-button"
              onClick={() => onSelectView("about")}
            >
              About the Studio
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="paint-orb orb-blue" />
          <div className="paint-orb orb-purple" />
          <div className="paint-orb orb-green" />

          <div className="studio-card">
            <div className="studio-card-top">
              <span>Klex Studios</span>
              <span>2026</span>
            </div>

            <div className="paint-flow">
              <span />
              <span />
              <span />
            </div>

            <p>Dating. Parties. Events. Real-world connection.</p>
          </div>
        </div>
      </section>

      <section className="statement-panel">
        <p className="eyebrow">The point</p>

        <h2>Most social apps compete for attention. We build for connection.</h2>

        <p>
          Current social apps often optimize for time, attention and
          monetization. Klex Studios starts from a different question: what
          would social software look like if the goal was not to keep people
          scrolling, but to help them actually meet, talk, laugh and connect?
        </p>
      </section>

      <section className="ecosystem">
        <div className="section-heading">
          <p className="eyebrow">Product ecosystem</p>
          <h2>Three apps. One idea.</h2>
          <p>
            Social technology should lead to real moments — not another
            engagement loop.
          </p>
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
                } as React.CSSProperties
              }
              onClick={() => onSelectView(app.id)}
            >
              <div className="app-card-header">
                <span className="app-dot" />
                <span>{app.status}</span>
              </div>

              <h3>{app.name}</h3>
              <p className="app-label">{app.label}</p>
              <p>{app.short}</p>

              <span className="card-link">Open {app.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function AppDetail({ app }: { app: StudioApp }) {
  return (
    <div className="view enter">
      <section className="app-detail">
        <div className="app-detail-copy">
          <p className="eyebrow">{app.label}</p>

          <div className="title-row">
            <h1>{app.name}</h1>
            <span className="status-pill">{app.status}</span>
          </div>

          <p className="hero-subline">{app.short}</p>

          <div className="detail-block">
            <h2>{app.principle}</h2>
            <p>{app.expanded}</p>
          </div>

          <div className="detail-block muted-block">
            <h3>Purpose</h3>
            <p>{app.purpose}</p>
          </div>
        </div>

        <div className="phone-stage" aria-hidden="true">
          <div className="phone-mockup">
            <div className="phone-top" />

            <div className="phone-screen">
              <span className="phone-kicker">{app.status}</span>
              <h2>{app.name}</h2>
              <p>{app.principle}</p>

              <div className="phone-lines">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="view enter">
      <section className="about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h1>Built as an independent studio with a clear point of view.</h1>
        </div>

        <div className="about-copy">
          <p>
            Klex Studios is an independent product studio built to rethink how
            social apps are designed — from dating to parties to real-world
            discovery.
          </p>

          <p>
            The studio started with a simple belief: social apps should create
            better conditions for people, not better engagement metrics for
            companies.
          </p>

          <p>
            The goal is not more time in the app. The goal is better moments
            because of it.
          </p>
        </div>
      </section>

      <section className="principles">
        <div>
          <span>01</span>
          <h3>Question the default</h3>
          <p>
            Dating, parties and social discovery should not feel like corporate
            engagement machines.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Design for the human moment</h3>
          <p>
            Every product should eventually lead away from passive scrolling and
            toward real interaction.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Stay honest</h3>
          <p>
            Status, purpose and direction are shown clearly. No fake maturity,
            no empty product theater.
          </p>
        </div>
      </section>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="view enter">
      <section className="contact-panel">
        <p className="eyebrow">Contact</p>
        <h1>Less scrolling. More living.</h1>

        <p>
          Klex Studios is building a small ecosystem of apps for dating, parties,
          events and real-world connection.
        </p>

        <div className="contact-actions">
          <a className="primary-button" href="mailto:hello@klexstudios.com">
            Contact
          </a>

          <a className="secondary-button" href="https://klexstudios.com">
            klexstudios.com
          </a>
        </div>
      </section>
    </div>
  );
}