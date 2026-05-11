import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klex Labs",
  description:
    "Klex Labs is an independent app studio building Reson, Elixa and Noxa.",
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