"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
  chapter: string;
  chapterTitle: string;
  page: string;
  next?: { to: string; label: string };
  prev?: { to: string; label: string };
  children: ReactNode;
};

export function BookPage({ chapter, chapterTitle, page, next, prev, children }: Props) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: ready ? 1 : 0, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen bg-[#08080A] text-[#F3F4F6] overflow-hidden select-none font-sans"
      >
        {/* Subtle Ambient Studio Glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 w-[600px] h-[600px] bg-rose-600/[0.04] rounded-full blur-[160px]" />

        {/* Floating Glassmorphic Studio Navigation Header */}
        <header className="fixed top-6 inset-x-6 md:inset-x-12 z-50 pointer-events-none">
          <div className="max-w-7xl mx-auto pointer-events-auto bg-neutral-900/80 backdrop-blur-2xl border border-white/12 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
            <Link
              href="/"
              className="group flex items-center gap-3.5 font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-pulse" />
              <span className="text-base sm:text-lg tracking-wide uppercase font-sans font-bold">MAINZ MEDIA</span>
              <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-amber-300/80">
                STUDIO PRODUCTION SUITE
              </span>
            </Link>

            <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
              <div className="hidden md:flex items-center gap-2 text-gray-400">
                <span className="text-amber-400 font-bold">{chapter}</span>
                <span>—</span>
                <span className="text-white">{chapterTitle}</span>
              </div>
              <Link
                href="/"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-white text-[11px] font-bold transition-all"
              >
                ← RETURN TO SUITE
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="relative z-10 px-6 pt-36 pb-44 md:px-20 md:pt-44 md:pb-52 max-w-7xl mx-auto">
          {children}
        </main>

        {/* Floating Glass Footer Navigation */}
        <footer className="fixed bottom-6 inset-x-6 md:inset-x-12 z-50 pointer-events-none">
          <div className="max-w-7xl mx-auto pointer-events-auto bg-neutral-900/80 backdrop-blur-2xl border border-white/12 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl font-mono text-xs font-bold uppercase tracking-widest">
            <div className="text-amber-400/90 font-bold">
              <span>✦ {page}</span>
            </div>
            <div className="flex items-center gap-6 md:gap-10">
              {prev && (
                <Link
                  href={prev.to}
                  className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span>←</span>
                  <span>{prev.label}</span>
                </Link>
              )}
              {next && (
                <Link
                  href={next.to}
                  className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span>{next.label}</span>
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
