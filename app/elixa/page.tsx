import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const navItems = [
  { label: "Studio", href: "/" },
  { label: "Noxa", href: "/noxa" },
  { label: "Reson", href: "/reson" },
  { label: "Elixa", href: "/elixa", active: true },
  { label: "About", href: "/#about" },
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Contact", href: "/#contact" },
];

const features = [
  {
    icon: "♕",
    title: "Premium party games",
    text: "Curated games that are fun, social, and never boring.",
  },
  {
    icon: "ϟ",
    title: "Fast setup",
    text: "Create a party in seconds and get straight to playing.",
  },
  {
    icon: "▣",
    title: "Different game modes",
    text: "From classic to spicy to wild. Choose your vibe.",
  },
  {
    icon: "✦",
    title: "Dark premium design",
    text: "A slick, immersive experience built for night mode.",
  },
];

const vibePoints = [
  "No ads. Ever.",
  "Works offline",
  "Regular new games",
  "Made for friends",
];

export default function ElixaPage() {
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
              className={item.active ? "nav-link active elixa-active" : "nav-link"}
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

      <section className="elixa-hero">
        <div className="elixa-hero-copy">
          <p className="elixa-kicker">Elixa by Klex Studios</p>

          <h1>
            Party harder.
            <br />
            <span>Play together.</span>
          </h1>

          <p className="elixa-lead">
            Elixa is the modern drinking game app for unforgettable nights.
            Premium games, fast setup, and endless laughs — all in a sleek,
            dark experience.
          </p>

          <div className="elixa-actions">
            <a className="elixa-primary" href="#games">
              Explore Elixa <span>↗</span>
            </a>
            <a className="elixa-secondary" href="#games">
              See the games <span>□</span>
            </a>
          </div>

          <div className="elixa-micro-row">
            <span>In development</span>
            <span>Honest visuals coming soon</span>
            <span>Built by Klex Studios</span>
          </div>
        </div>

        <div className="app-coming-soon-visual placeholder-green">
          <div className="app-coming-soon-card">
            <span className="app-status-pill">In Development</span>

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

            <h3>Pictures Coming Soon</h3>
            <p>
              Real app screenshots will be added when Elixa is ready to show
              publicly.
            </p>
          </div>
        </div>
      </section>

      <section className="elixa-feature-strip" aria-label="Elixa features">
        {features.map((feature) => (
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
          <p className="elixa-section-kicker">Built for great nights</p>
          <h2>
            Designed for the way
            <br />
            you party.
          </h2>
          <p>
            Elixa brings your favorite drinking games to life with a fast,
            beautiful, and distraction-free experience. More laughs. Less
            hassle.
          </p>

          <a className="elixa-outline-button" href="#games">
            Explore all games <span>↗</span>
          </a>
        </div>

        <div
          className="app-coming-soon-visual placeholder-green"
          aria-label="Elixa app screenshots coming soon"
        >
          <div className="app-coming-soon-card">
            <span className="app-status-pill">In Development</span>

            <span className="app-placeholder-logo-wrap">
              <Image
                src="/logos/elixa-logo.png"
                alt="Elixa logo"
                width={120}
                height={120}
                className="app-placeholder-logo"
              />
            </span>

            <h3>Pictures Coming Soon</h3>
            <p>
              Screenshots will be added here once the real app UI is ready.
            </p>
          </div>
        </div>

        <div className="elixa-vibe">
          <p className="elixa-section-kicker">The Elixa vibe</p>
          <h2>
            More energy.
            <br />
            Better nights.
          </h2>
          <p>
            Elixa is built for real connections and unforgettable moments. No
            ads. No clutter. Just you, your friends, and great games.
          </p>

          <ul>
            {vibePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}