import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klex Studios",
  description:
    "Klex Studios builds digital products for real social moments, dating, events, parties, and connection.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}