"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "de" | "en";

const labels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

function getTargetPath(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "de" || segments[0] === "en") {
    segments[0] = targetLocale;
    return "/" + segments.join("/");
  }

  return "/" + targetLocale + (pathname === "/" ? "" : pathname);
}

function getCurrentLocale(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];

  if (first === "de" || first === "en") {
    return first;
  }

  return "en";
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);

  const otherLocale: Locale = currentLocale === "en" ? "de" : "en";

  return (
    <div className="language-switcher">
      <button className="language-trigger" type="button" aria-label="Change language">
        <span className="language-globe">◎</span>
        <span className="language-label">{labels[currentLocale]}</span>
        <span className="language-short">{currentLocale.toUpperCase()}</span>
        <span className="language-chevron">⌄</span>
      </button>

      <div className="language-menu">
        {(["de", "en"] as Locale[]).map((locale) => {
          const active = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={getTargetPath(pathname, locale)}
              className={`language-option ${active ? "is-active" : ""}`}
            >
              <span className="language-option-icon">◎</span>
              <span>{labels[locale]}</span>
              {active && <span className="language-check">✓</span>}
            </Link>
          );
        })}
      </div>

      <Link className="language-mobile-direct" href={getTargetPath(pathname, otherLocale)}>
        <span className="language-globe">◎</span>
        <span>{currentLocale.toUpperCase()}</span>
      </Link>
    </div>
  );
}