import type { Metadata } from "next";
import { Inter, Bebas_Neue, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-font",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mainz Media | Premium Cinematic Photography — Malaysia",
  description:
    "Capturing moments that last forever. Premium cinematic photography for weddings, portraits, automotive, events, pre-weddings, and graduations in Malaysia.",
  keywords: [
    "photography",
    "Malaysia",
    "wedding photography",
    "portrait",
    "automotive photography",
    "cinematic",
    "Mainz Media",
    "Maindhaa",
  ],
  openGraph: {
    title: "Mainz Media | Premium Cinematic Photography",
    description: "Capturing moments that last forever.",
    type: "website",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainz Media | Premium Cinematic Photography",
    description: "Capturing moments that last forever.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
