import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F2A45",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://coolidgecornerstone.org"),
  title: {
    default: "Coolidge Cornerstone | AA Group — Brookline, MA",
    template: "%s | Coolidge Cornerstone",
  },
  description:
    "Coolidge Cornerstone is a welcoming Alcoholics Anonymous meeting group in Brookline, Massachusetts. We meet every Friday from 6:30–7:30 PM. All are welcome.",
  keywords: [
    "Alcoholics Anonymous",
    "AA meeting",
    "Brookline MA",
    "Massachusetts AA",
    "recovery support group",
    "Coolidge Cornerstone",
    "sober community",
  ],
  authors: [{ name: "Coolidge Cornerstone Group" }],
  creator: "Coolidge Cornerstone Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Coolidge Cornerstone — AA Meeting in Brookline, MA",
    description:
      "A welcoming Alcoholics Anonymous group meeting every Friday at 6:30–7:30 PM in Brookline, MA. You're not alone — you're always welcome here.",
    type: "website",
    locale: "en_US",
    siteName: "Coolidge Cornerstone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coolidge Cornerstone — AA Meeting in Brookline, MA",
    description:
      "A welcoming AA group meeting every Friday at 6:30–7:30 PM in Brookline, MA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
