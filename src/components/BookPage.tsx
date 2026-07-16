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
        initial={{ opacity: 0, rotateY: -6, transformPerspective: 1600 }}
        animate={{ opacity: ready ? 1 : 0, rotateY: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen bg-background text-foreground overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Registration corner marks for $200 coffee-table book */}
        <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 pt-6 md:px-16 md:pt-12">
          <div className="label-ink pointer-events-auto font-medium tracking-[0.24em]">
            <Link href="/" className="text-foreground font-bold hover:opacity-75 transition-opacity block cursor-pointer">
              BOOK 01 — MAINZ MEDIA ARCHIVES
            </Link>
            <div className="mt-1 text-muted-foreground">KUALA LUMPUR / MALAYSIA</div>
          </div>
          <div className="label-ink pointer-events-auto text-right font-medium tracking-[0.24em]">
            <div className="text-foreground font-bold">{chapter}</div>
            <div className="mt-1 text-muted-foreground">{chapterTitle}</div>
          </div>
        </header>

        {/* Content Area with generous print margins */}
        <main className="relative z-10 px-6 pt-32 pb-44 md:px-20 md:pt-40 md:pb-52">
          {children}
        </main>

        {/* Bottom Navigation / Page Footer */}
        <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-6 pb-6 md:px-16 md:pb-12">
          <div className="label-ink pointer-events-auto font-bold tracking-[0.24em] text-foreground">
            {page}
          </div>
          <div className="flex gap-10">
            {prev && (
              <Link
                href={prev.to}
                className="label-ink pointer-events-auto font-bold tracking-[0.24em] text-foreground transition-colors hover:text-muted-foreground cursor-pointer"
              >
                ← {prev.label}
              </Link>
            )}
            {next && (
              <Link
                href={next.to}
                className="label-ink pointer-events-auto font-bold tracking-[0.24em] text-foreground transition-colors hover:text-muted-foreground cursor-pointer"
              >
                {next.label} →
              </Link>
            )}
          </div>
        </footer>

        {/* Thick paper edge crease shadow on left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-12 bg-gradient-to-r from-black/[0.05] via-black/[0.02] to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
}
