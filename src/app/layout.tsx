import type { Metadata } from "next";
import { Inter, Bebas_Neue, Space_Grotesk, JetBrains_Mono, Bodoni_Moda, Shrikhand, Yeseva_One } from "next/font/google";
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

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shrikhand",
  display: "swap",
});

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva",
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
      className={`${inter.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${bodoni.variable} ${shrikhand.variable} ${yesevaOne.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
