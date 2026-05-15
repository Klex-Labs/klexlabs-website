import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteFooter from "@/components/SiteFooter";

const accent = {
  hex: "#A66CFF",
  rgb: "166, 108, 255",
};

const navItems = [
  { label: "Studio", href: "/" },
  { label: "Noxa", href: "/noxa" },
  { label: "Reson", href: "/reson", active: true },
  { label: "Elixa", href: "/elixa" },
  { label: "About", href: "/#about" },
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Contact", href: "/#contact" },
];

const features = [
  {
    icon: "◎",
    title: "Compatibility first",
    text: "Matching looks beyond photos and vanity metrics.",
  },
  {
    icon: "☷",
    title: "Fewer, better choices",
    text: "Quality over quantity, with calmer discovery.",
  },
  {
    icon: "♡",
    title: "Built around values",
    text: "Shared values create stronger conversations.",
  },
  {
    icon: "✦",
    title: "Calmer than swipe culture",
    text: "No addictive loops. Just intentional design.",
  },
];

export default function ResonPage() {
  return (
    <main
      className="product-page reson-page"
      style={
        {
          "--accent": accent.hex,
          "--accent-rgb": accent.rgb,
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
              className={item.active ? "nav-link active reson-active" : "nav-link"}
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

      <section className="product-hero reson-hero">
        <div className="product-copy">
          <p className="product-kicker">Reson by Klex Studios</p>

          <h1>
            Real connection.
            <br />
            Real compatibility.
            <br />
            You would <span>choose differently.</span>
          </h1>

          <p className="product-lead">
            Reson is a modern dating app for people who want more than swipes
            and small talk. We focus on better signals, shared values, and real
            compatibility.
          </p>

          <div className="product-actions">
            <a href="#screens" className="product-primary">
              Explore Reson <span>↗</span>
            </a>

            <a href="#idea" className="product-secondary">
              Read the idea <span>□</span>
            </a>
          </div>

          <div className="product-micro-row reson-micro">
            <span>Privacy first</span>
            <span>No endless swiping</span>
            <span>Built for real relationships</span>
          </div>
        </div>

        <div className="app-coming-soon-visual placeholder-purple">
  <div className="app-coming-soon-card">
    <span className="app-status-pill">In Development</span>

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

    <h3>Pictures Coming Soon</h3>
    <p>
      Real app visuals will be added once Reson has honest product screenshots.
    </p>
  </div>
</div>
      </section>

      <section className="feature-strip reson-strip">
        {features.map((feature) => (
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
          <p className="product-kicker">The Reson experience</p>

          <h2>
            Designed for depth,
            <br />
            not dopamine.
          </h2>

          <p>
            Every part of Reson is built to help you go deeper with less
            friction and more intention.
          </p>

          <div id="screens" className="app-coming-soon-visual placeholder-purple">
  <div className="app-coming-soon-card">
    <span className="app-status-pill">In Development</span>

    <span className="app-placeholder-logo-wrap">
      <Image
        src="/logos/reson-logo.png"
        alt="Reson logo"
        width={120}
        height={120}
        className="app-placeholder-logo"
      />
    </span>

    <h3>Pictures Coming Soon</h3>
    <p>
      Screenshots will be shown here when the app UI is ready to present.
    </p>
  </div>
</div>
        </div>

        <div className="reson-manifest">
          <p className="product-kicker">Why Reson exists</p>

          <h2>
            Because real love
            <br />
            deserves real design.
          </h2>

          <p>
            Reson is built with care, ethics, and intention. Less noise, better
            signals, and relationships that can last.
          </p>

          <ul>
            <li>Independent and focused</li>
            <li>Privacy by design</li>
            <li>Quality over noise</li>
          </ul>

          <Link href="/#manifesto" className="product-secondary reson-manifest-link">
            Read our manifesto <span>↗</span>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}