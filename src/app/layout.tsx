import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siteweb-primeactuaire.vercel.app"),
  title: {
    default: "PrimeActuaire — Gouvernance technique · Santé collective · Zone CIMA",
    template: "%s | PrimeActuaire",
  },
  description:
    "Plateforme d'aide à la décision et accompagnement expert pour les directions techniques et générales en assurance santé collective — zone CIMA.",
  keywords: [
    "actuaire",
    "santé collective",
    "CIMA",
    "tarification",
    "assurance",
    "Côte d'Ivoire",
    "provisions ENR",
    "ratio S/P",
    "gouvernance technique",
    "PrimeActuaire",
  ],
  authors: [{ name: "PrimeActuaire" }],
  creator: "PrimeActuaire",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "PrimeActuaire",
    title: "PrimeActuaire — Gouvernance technique · Santé collective · Zone CIMA",
    description:
      "Plateforme d'aide à la décision pour les directions techniques en assurance santé collective — zone CIMA.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PrimeActuaire" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeActuaire — Gouvernance technique · Santé collective",
    description:
      "Plateforme d'aide à la décision pour les DT et DG en assurance santé collective — zone CIMA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
