import Link from "next/link";
import { getDictionary, type Locale, routeFor } from "@/lib/i18n";

type SiteFooterProps = {
  locale?: Locale;
  variant?: "default" | "legal";
};

export default function SiteFooter({
  locale = "de",
  variant = "default",
}: SiteFooterProps) {
  const t = getDictionary(locale);

  return (
    <footer className={`site-footer${variant === "legal" ? " legal-footer" : ""}`}>
      <span>{t.footer.rights}</span>

      <div className="footer-links">
        <Link href={routeFor(locale, "impressum")}>{t.footer.imprint}</Link>
        <Link href={routeFor(locale, "privacy")}>{t.footer.privacy}</Link>
      </div>
    </footer>
  );
}