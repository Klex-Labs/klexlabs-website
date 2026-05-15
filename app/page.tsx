import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const navItems = [
  { label: "Studio", href: "/", active: true },
  { label: "Noxa", href: "/noxa" },
  { label: "Reson", href: "/reson" },
  { label: "Elixa", href: "/elixa" },
  { label: "About", href: "#about" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Contact", href: "#contact" },
];

const apps = [
  {
    name: "Noxa",
    href: "/noxa",
    status: "In concepting phase",
    color: "#3B6DFF",
    logo: "/logos/noxa-logo.png",
    eyebrow: "Social discovery",
    title: "Discover what is happening around you.",
    text: "A social-discovery concept for nearby events, groups, parties, and spontaneous real-world moments.",
  },
  {
    name: "Reson",
    href: "/reson",
    status: "In development",
    color: "#A66CFF",
    logo: "/logos/reson-logo.png",
    eyebrow: "Dating with intent",
    title: "Choose people by more than pictures.",
    text: "A dating app in development, focused on compatibility, shared values, and more intentional conversations.",
  },
  {
    name: "Elixa",
    href: "/elixa",
    status: "In development",
    color: "#38F06F",
    logo: "/logos/elixa-logo.png",
    eyebrow: "Party games",
    title: "Turn nights into shared moments.",
    text: "A party game app in development with fast setup, clean design, and games built for real groups.",
  },
];

const principles = [
  {
    title: "Real life first",
    text: "Our products are designed to support real moments, not replace them.",
  },
  {
    title: "Less passive scrolling",
    text: "We build against empty engagement loops and design for action, presence, and intent.",
  },
  {
    title: "Honest by design",
    text: "Clear status, no fake traction, no fake screenshots, no pretending the product is further than it is.",
  },
  {
    title: "Human connection",
    text: "Dating, parties, events, and communities all share one goal: helping people connect better.",
  },
];

export default function HomePage() {
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
              className={item.active ? "nav-link active" : "nav-link"}
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

      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="hero-kicker">Independent digital product studio</p>

          <h1>
            We build software
            <br />
            for real life.
          </h1>

          <p className="hero-lead">
            Klex Studios creates thoughtful apps for dating, parties, events and
            social moments — designed to bring people closer, not deeper into
            feeds.
          </p>

          <div className="hero-actions">
  <a href="#apps" className="hero-primary">
    Explore the ecosystem <span>↗</span>
  </a>
  <a href="#manifesto" className="hero-secondary">
    Read the manifesto <span>□</span>
  </a>
</div>

          <div className="home-purpose-row">
  <span>Built with intent</span>
  <div>
    <b>◎</b> Real-world connection
  </div>
  <div>
    <b>▣</b> Less scrolling
  </div>
  <div>
    <b>◇</b> More living
  </div>
</div>
        </div>

        <div className="home-hero-visual" aria-hidden="true">
          <Image
            src="/images/studio-ecosystem.png"
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
            <p className="section-kicker">Our apps</p>
            <h2>
              Different products.
              <br />
              One mission.
            </h2>
            <p>
              Each app targets a different social moment - meeting, dating, playing, 
              going out - but they all point back to real life.
            </p>
          </div>

          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
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
          ))}
        </div>

        <div className="home-principles-row" id="manifesto">
          <div className="home-panel-intro">
            <p className="section-kicker">Our manifesto</p>
            <h2>
              Principles over
              <br />
              everything.
            </h2>
          </div>

          {principles.map((principle) => (
            <article key={principle.title}>
              <span>✦</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">Contact</p>
        <h2>Building quietly. Shipping intentionally.</h2>
        <p>
          Klex Studios is currently developing its first product ecosystem
          across social discovery, dating, and party experiences.
        </p>

        <a href="mailto:info.klexstudios@gmail.com" className="hero-primary">
          info.klexstudios@gmail.com <span>↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <span>© 2026 Klex Studios. All rights reserved.</span>
        <div className="footer-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}