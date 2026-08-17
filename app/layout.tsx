import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ernests Smaliķis — I participate.",
  description:
    "The interface to whoever the fuck Ernests Smaliķis is becoming.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
