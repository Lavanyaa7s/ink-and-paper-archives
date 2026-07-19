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
        className="relative min-h-screen bg-[#1A1A00] text-[#FFFFCC] overflow-hidden select-none font-sans selection:bg-[#FFFFCC] selection:text-[#1A1A00]"
      >
        {/* Simple & Sticky Header Equivalent for Subpages */}
        <header className="sticky top-0 z-50 w-full bg-[#1A1A00]/95 backdrop-blur-md border-b border-[#FFFFCC]/10 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-extrabold text-xl tracking-tight uppercase flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span>←</span>
              <span>MAINZ MEDIA</span>
            </Link>

            <div className="hidden md:flex items-center gap-4 text-sm font-bold opacity-80 uppercase tracking-widest">
              <span>{chapter}</span>
              <span>—</span>
              <span>{chapterTitle}</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="relative z-10 px-6 pt-16 pb-32 md:px-20 md:pt-24 md:pb-44 max-w-6xl mx-auto">
          {children}
        </main>

        {/* Simple Footer Navigation for Subpages */}
        <footer className="fixed bottom-0 inset-x-0 z-50 border-t border-[#FFFFCC]/10 bg-[#1A1A00]/95 backdrop-blur-md px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between font-bold text-sm uppercase tracking-widest">
            <div className="opacity-80">
              {page}
            </div>
            <div className="flex items-center gap-6 md:gap-10">
              {prev && (
                <Link
                  href={prev.to}
                  className="hover:opacity-60 transition-opacity flex items-center gap-2"
                >
                  <span>←</span>
                  <span>{prev.label}</span>
                </Link>
              )}
              {next && (
                <Link
                  href={next.to}
                  className="hover:opacity-60 transition-opacity flex items-center gap-2"
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
