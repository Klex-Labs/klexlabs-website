import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const navItems = [
  { label: "Studio", href: "/" },
  { label: "Noxa", href: "/noxa", active: true },
  { label: "Reson", href: "/reson" },
  { label: "Elixa", href: "/elixa" },
  { label: "About", href: "/#about" },
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Contact", href: "/#contact" },
];

const features = [
  {
    icon: "⌖",
    title: "Nearby events",
    text: "See what is happening around you in real time. From parties to pop-ups and more.",
  },
  {
    icon: "☷",
    title: "Group discovery",
    text: "Find groups that match your vibe and connect with people who want to do things.",
  },
  {
    icon: "♡",
    title: "Real-world connection",
    text: "Designed to move people closer — in person, not just in feeds.",
  },
  {
    icon: "▯",
    title: "Cleaner than feeds",
    text: "No endless scroll. Just timely updates on real things worth showing up for.",
  },
];

const principles = [
  {
    title: "For everyone",
    text: "Whether you are new in town or just looking for your people.",
  },
  {
    title: "Spontaneous",
    text: "Great moments do not always plan ahead. Noxa helps you catch them.",
  },
  {
    title: "Safe & respectful",
    text: "Community-first design with trust, privacy, and respect at the core.",
  },
  {
    title: "Local everywhere",
    text: "Built for real neighborhoods, not just big cities.",
  },
];

export default function NoxaPage() {
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
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Klex Studios home">
          <Image
            src="/logos/klex-logo.png"
            alt="Klex Studios"
            width={42}
            height={42}
            priority
            className="brand-logo"
          />
          <span>Klex Studios</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.active ? "nav-link active noxa-active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="language-switch" aria-label="Language">
          <button className="language-button active">EN</button>
          <button className="language-button">DE</button>
        </div>
      </header>

      <section className="noxa-hero">
        <div className="noxa-hero-copy">
          <div className="noxa-title-mark">
            <span className="noxa-logo-tile">
              <Image
                src="/logos/noxa-logo.png"
                alt=""
                width={32}
                height={32}
                className="noxa-logo"
              />
            </span>
            <span>noxa</span>
          </div>

          <h1>
            Meet people.
            <br />
            Find events.
            <br />
            <span>Discover real life.</span>
          </h1>

          <p className="noxa-lead">
            Noxa is your social-discovery app for events, parties, groups, and
            spontaneous experiences nearby. Leave endless feeds behind and step
            into what is happening around you.
          </p>

          <div className="noxa-actions">
            <a className="noxa-primary" href="#screens">
              Explore Noxa <span>↗</span>
            </a>
            <a className="noxa-secondary" href="#concept">
              View concept <span>▷</span>
            </a>
          </div>

          <div className="noxa-platforms" aria-label="Product status">
            <span>● In concepting phase</span>
            <span>● Honest visuals coming soon</span>
          </div>
        </div>

        <div className="app-coming-soon-visual placeholder-blue">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">In Concepting Phase</span>

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

            <h3>Pictures Coming Soon</h3>
            <p>
              Concept visuals will be shown once Noxa has honest product
              screens.
            </p>
          </div>
        </div>
      </section>

      <section className="noxa-feature-strip" aria-label="Noxa features">
        {features.map((feature) => (
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
        <div
          className="app-coming-soon-visual placeholder-blue"
          aria-label="Noxa app screenshots coming soon"
        >
          <div className="app-coming-soon-card">
            <span className="app-status-pill">In Concepting Phase</span>

            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/noxa-logo.png"
                alt="Noxa logo"
                width={120}
                height={120}
                className="app-placeholder-logo"
              />
            </span>

            <h3>Pictures Coming Soon</h3>
            <p>
              Screenshots will be added when the product concept is ready to
              show.
            </p>
          </div>
        </div>

        <div className="noxa-story" id="concept">
          <p className="noxa-kicker">Why Noxa exists</p>
          <h2>
            Real life is worth
            <br />
            discovering.
          </h2>
          <p>
            We built Noxa to help people break out of passive scrolling and into
            active living. To make it effortless to discover what is happening,
            find your people, and create unforgettable moments — together.
          </p>

          <div className="noxa-principles">
            {principles.map((principle) => (
              <article key={principle.title}>
                <span>✦</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}