import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klex Studios — Apps for real-world connection",
  description:
    "Klex Studios is an independent digital studio building apps for dating, parties, events and real-world connection.",
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