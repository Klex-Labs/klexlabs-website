import Link from "next/link";

type SiteFooterProps = {
  variant?: "default" | "legal";
};

export default function SiteFooter({ variant = "default" }: SiteFooterProps) {
  return (
    <footer className={`site-footer ${variant === "legal" ? "legal-footer" : ""}`}>
      <span>© 2026 Klex Studios. All rights reserved.</span>

      <div className="footer-links">
        <Link href="/impressum">Impressum</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}