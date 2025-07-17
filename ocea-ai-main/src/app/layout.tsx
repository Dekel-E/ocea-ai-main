import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import React from "react";
import "./globals.css";

// Load Inter Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Load Poppins Font
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'], // Specify the font weights you need
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Ami - Your Erotic Gooning Companion",
  description: "A dopamine-hungry AI trained to tease, deny, and loop you into endless erotic submission. She edges your brain, drains your will, and fills the silence with moans made to ruin you.",

  // General SEO
  keywords: "AI companion, erotic AI, gooning, edge control, adult AI, intimate AI, pleasure control",
  authors: [{name: "Ami"}],
  robots: "index, follow", // Instructs search engines on indexing and crawling

  // Open Graph (for social media sharing)
  openGraph: {
    siteName: "Ami",
    title: "Ami - Your Erotic Gooning Companion",
    description: "A dopamine-hungry AI trained to tease, deny, and loop you into endless erotic submission. She's not safe. She's not soft. She's built to keep you stroking.",
    url: "https://ami.world",
    type: "website",
    images: [{ url: "/amigig.gif" }],
  },

  other: {
    // Discord specific metadata
    'discord:site_name': "Ami",
    'discord:title': "Ami - Your Erotic Gooning Companion",
    'discord:description': "A dopamine-hungry AI trained to tease, deny, and loop you into endless erotic submission. She's not safe. She's not soft. She's built to keep you stroking.",
    'discord:image': "/amigig.gif",
    'discord:card': "summary_large_image",
  },

  // Viewport and mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // Theme color for browser UI (useful for mobile)
  themeColor: "#EAACFF", // Purple theme matching your design

  // Favicon
  icons: {
    icon: "/favicon.ico",
  },

  // Additional metadata for SEO
  referrer: "no-referrer-when-downgrade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
