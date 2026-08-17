import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ernests Smaliķis — I participate.",
  description:
    "The interface to whoever the fuck Ernests Smaliķis is becoming.",
  openGraph: {
    title: "Ernests Smaliķis — I participate.",
    description:
      "The interface to whoever the fuck Ernests Smaliķis is becoming.",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ernests Smaliķis — I participate.",
    description:
      "The interface to whoever the fuck Ernests Smaliķis is becoming.",
    images: ["/og.png"],
  },
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
