"use client";

import { useCallback } from "react";
import { FadeUp } from "@/components/animations/FadeUp";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function FooterSection() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="bg-mainz px-6 pb-8 pt-20 md:px-12 md:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* Brand */}
        <FadeUp>
          <p className="text-center font-bebas text-2xl tracking-wider text-white">
            MAINZ MEDIA
          </p>
        </FadeUp>

        {/* Navigation */}
        <FadeUp delay={0.1}>
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-mainz-muted transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </FadeUp>

        {/* Instagram */}
        <FadeUp delay={0.15}>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.instagram.com/mainz.media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mainz-muted transition-colors duration-300 hover:text-white"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </FadeUp>

        {/* Divider */}
        <div className="my-8 h-px bg-mainz-border" />

        {/* Bottom Row */}
        <FadeUp delay={0.2}>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-mainz-muted">
              © 2025 Mainz Media. All rights reserved.
            </p>
            <p className="text-xs text-mainz-muted">
              Crafted with passion in Malaysia
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-mainz-border text-mainz-muted transition-all duration-300 hover:border-white hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
