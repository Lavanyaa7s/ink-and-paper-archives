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
        initial={{ opacity: 0, rotateY: -4, transformPerspective: 1600 }}
        animate={{ opacity: ready ? 1 : 0, rotateY: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen bg-[#FAFAF7] text-[#111111] overflow-hidden select-none font-sans"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Archival Museum Registration Header (Clean, High-End RM 1200+ Monograph) */}
        <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 pt-6 md:px-16 md:pt-12 text-xs">
          <div className="pointer-events-auto font-medium tracking-[0.24em]">
            <Link
              href="/"
              className="text-[#111111] font-bold hover:opacity-75 transition-opacity block cursor-pointer display text-base sm:text-lg"
            >
              MAINZ MEDIA — ARCHIVES
            </Link>
            <div className="mt-1 text-[#666666] text-[10px] tracking-widest uppercase font-semibold">
              KUALA LUMPUR / MALAYSIA · EST. 2023
            </div>
          </div>
          <div className="pointer-events-auto text-right font-medium tracking-[0.24em] uppercase text-xs">
            <div className="text-[#111111] font-bold display text-base sm:text-lg">{chapter}</div>
            <div className="mt-1 text-[#666666] text-[10px] uppercase tracking-widest">{chapterTitle}</div>
          </div>
        </header>

        {/* Content Area with generous print margins */}
        <main className="relative z-10 px-6 pt-32 pb-44 md:px-20 md:pt-40 md:pb-52 max-w-7xl mx-auto">
          {children}
        </main>

        {/* Bottom Editorial Turn Navigation */}
        <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-6 pb-6 md:px-16 md:pb-12 text-xs font-bold uppercase tracking-[0.24em]">
          <div className="pointer-events-auto text-[#111111] font-bold">
            {page}
          </div>
          <div className="flex gap-10">
            {prev && (
              <Link
                href={prev.to}
                className="pointer-events-auto text-[#111111] transition-colors hover:text-[#666666] cursor-pointer"
              >
                ← {prev.label}
              </Link>
            )}
            {next && (
              <Link
                href={next.to}
                className="pointer-events-auto text-[#111111] transition-colors hover:text-[#666666] cursor-pointer"
              >
                {next.label} →
              </Link>
            )}
          </div>
        </footer>

        {/* Subtle physical paper edge shadow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-12 bg-gradient-to-r from-black/[0.04] via-black/[0.01] to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
}
