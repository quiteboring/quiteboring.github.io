import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const regular = Space_Grotesk({
  variable: "--font-regular",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "quiteboring | Portfolio",
  description: "quiteboring - High school student who enjoys programming and open source projects.",

  openGraph: {
    title: "quiteboring | Portfolio",
    description: "quiteboring - High school student who enjoys programming and open source projects.",
    url: "https://quiteboring.dev",
    siteName: "quiteboring.dev",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <title>quiteboring | Portfolio</title>
      <body className={`${regular.variable} ${mono.variable} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
