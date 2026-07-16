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
        {/* Director's Optical Viewfinder & Screenplay Registration header */}
        <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 pt-6 md:px-16 md:pt-12 font-mono text-xs">
          <div className="pointer-events-auto font-medium tracking-[0.22em] text-[#111111]">
            <Link href="/" className="group flex items-center gap-3.5 font-bold hover:opacity-75 transition-opacity cursor-pointer">
              <span className="flex items-center gap-2 px-2 py-0.5 bg-[#111111] text-[#FAFAF7] rounded-[2px] text-[10px]">
                <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse inline-block" />
                <span>REC</span>
              </span>
              <span>[ CAMERA ROLL 01 • MAINZ ARCHIVES ]</span>
            </Link>
            <div className="mt-2 text-[#666666] text-[11px] tracking-widest pl-1">INT. KUALA LUMPUR / MALAYSIA — 35MM ANAMORPHIC</div>
          </div>
          <div className="pointer-events-auto text-right font-medium tracking-[0.24em] uppercase">
            <div className="text-rose-600 font-bold">{chapter}</div>
            <div className="mt-1 text-[#111111] font-semibold">{chapterTitle}</div>
          </div>
        </header>

        {/* Content Area with generous print margins */}
        <main className="relative z-10 px-6 pt-32 pb-44 md:px-20 md:pt-40 md:pb-52">
          {children}
        </main>

        {/* Bottom Screenplay Action Navigation */}
        <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-6 pb-6 md:px-16 md:pb-12 font-mono text-xs font-bold uppercase tracking-[0.24em]">
          <div className="pointer-events-auto text-[#111111]">
            <span>[ SCRIPT {page} ]</span>
          </div>
          <div className="flex gap-10">
            {prev && (
              <Link
                href={prev.to}
                className="pointer-events-auto text-[#111111] transition-colors hover:text-rose-600 cursor-pointer"
              >
                ← [ CUT TO: {prev.label} ]
              </Link>
            )}
            {next && (
              <Link
                href={next.to}
                className="pointer-events-auto text-[#111111] transition-colors hover:text-rose-600 cursor-pointer"
              >
                [ CUT TO: {next.label} ] →
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
