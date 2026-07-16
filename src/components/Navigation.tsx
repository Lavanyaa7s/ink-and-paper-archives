"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/animations/MagneticButton";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#060606]/85 backdrop-blur-xl border-b border-white/[0.06] py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Studio Badge */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex flex-col items-start text-left"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl tracking-[-0.03em] font-light uppercase text-white group-hover:text-mainz-beige transition-colors duration-300">
                MAINZ MEDIA
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)] font-medium">
                Cinematic · Malaysia
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10 bg-white/[0.03] border border-white/[0.06] rounded-full px-8 py-3 backdrop-blur-md">
            {navLinks.map((link) => (
              <MagneticButton key={link.href} strength={0.15}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-[11px] font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase font-medium text-mainz-secondary hover:text-white transition-colors duration-300 py-1"
                >
                  {link.label}
                </button>
              </MagneticButton>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-5">
            <MagneticButton className="hidden md:inline-flex" strength={0.2}>
              <button
                onClick={() => scrollToSection("#contact")}
                className="relative overflow-hidden group border border-mainz-beige/40 bg-mainz-beige/[0.03] rounded-full px-7 py-3 text-[11px] font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase font-medium text-mainz-beige hover:text-[#060606] transition-colors duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Inquire Now</span>
                  <span className="text-xs">↗</span>
                </span>
                <span className="absolute inset-0 bg-mainz-beige scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              </button>
            </MagneticButton>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-[1.5px] bg-white origin-center"
                animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-white origin-center"
                animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#060606] flex flex-col justify-between px-8 py-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-2 mt-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-mainz-muted mb-4 font-[family-name:var(--font-space-grotesk)]">
                Navigation
              </span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-light tracking-[-0.02em] text-white hover:text-mainz-beige transition-colors py-2 block text-left"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col gap-6">
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full text-center bg-mainz-beige text-[#060606] font-[family-name:var(--font-space-grotesk)] text-xs font-medium tracking-[0.2em] uppercase rounded-full py-4"
              >
                Book Private Session ↗
              </button>

              <div className="flex justify-between items-center text-xs text-mainz-muted">
                <span>+60 16-322 8337</span>
                <span>@mainz.media</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
