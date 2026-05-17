import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locale, PageKey, routeFor } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

type SiteHeaderProps = {
  locale: Locale;
  active: PageKey;
};

const activeClassByPage: Partial<Record<PageKey, string>> = {
  noxa: "noxa-active",
  reson: "reson-active",
  elixa: "elixa-active",
};

export default function SiteHeader({ locale, active }: SiteHeaderProps) {
  const t = getDictionary(locale);

  const navItems = [
    { key: "home" as const, label: t.nav.studio, href: routeFor(locale, "home") },
    { key: "noxa" as const, label: t.nav.noxa, href: routeFor(locale, "noxa") },
    { key: "reson" as const, label: t.nav.reson, href: routeFor(locale, "reson") },
    { key: "elixa" as const, label: t.nav.elixa, href: routeFor(locale, "elixa") },
    { key: "about" as const, label: t.nav.about, href: `${routeFor(locale, "home")}#about` },
    { key: "manifesto" as const, label: t.nav.manifesto, href: `${routeFor(locale, "home")}#manifesto` },
    { key: "contact" as const, label: t.nav.contact, href: `${routeFor(locale, "home")}#contact` },
  ];

  return (
    <header className="site-header">
      <Link className="brand" href={routeFor(locale, "home")} aria-label="Klex Studios home">
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
        {navItems.map((item) => {
          const isActive = item.key === active;
          const accentClass = isActive ? activeClassByPage[item.key] ?? "" : "";

          return (
            <Link
              key={item.key}
              href={item.href}
              className={isActive ? `nav-link active ${accentClass}`.trim() : "nav-link"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
