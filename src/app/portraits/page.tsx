"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

export default function PortraitsPage() {
  return (
    <BookPage
      chapter="CHAPTER 02"
      chapterTitle="PORTRAITS"
      page="PAGE 08—11"
      prev={{ to: "/automotive", label: "AUTOMOTIVE" }}
      next={{ to: "/weddings", label: "TURN PAGE TO WEDDINGS" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Emotional Story Opening Spread */}
        <div className="min-h-[68vh] flex flex-col justify-center items-center text-center border-b border-foreground/20 pb-24 mb-28">
          <div className="label text-muted-foreground font-bold tracking-[0.28em]">
            VOLUME 02 · MONOGRAPH ARCHIVE
          </div>
          <h1 className="mt-6 display text-[13vw] md:text-[9rem] leading-[0.82] font-bold text-foreground">
            THE SILENT
            <br />
            MONOLOGUE
          </h1>
          <div className="mt-4 text-lg md:text-xl font-bold uppercase tracking-[0.24em] text-muted-foreground">
            STUDIO &amp; FIELD STUDIES · MALAYSIA 2024—2025
          </div>

          <div className="mt-14 h-px w-24 bg-foreground" />

          {/* Story Sentence */}
          <blockquote className="mt-14 max-w-3xl text-2xl md:text-4xl font-light italic leading-relaxed text-foreground tracking-wide">
            &ldquo;It usually takes twenty minutes before the subject forgets they are in front of a lens. Plate 01 was captured during that exact breath between a laugh and a sigh—when the armor dropped.&rdquo;
          </blockquote>
          <div className="mt-6 label-ink font-bold tracking-[0.24em]">
            — MAINDHAA, PORTRAIT FIELD NOTES
          </div>
        </div>

        {/* Spread Rhythm Sequence */}
        <div className="space-y-44 md:space-y-64">
          {/* 1. HUGE MASTER PLATE */}
          <section className="space-y-6">
            <div className="relative aspect-[3/4] md:aspect-[16/10] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src="/portfolio/portrait/portrait-04.jpg"
                alt="Plate 01 — The Unguarded Breath"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 01 / 15 — NATURAL LIGHT STUDY AT ELITE ATELIER</span>
              <span>CANON R6 II · RF 50MM F/1.2 L · F/1.4</span>
            </div>
          </section>

          {/* 2. INTIMATE DETAIL & EMOTION */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 pr-0 md:pr-10">
              <div className="label text-muted-foreground font-bold tracking-[0.24em]">
                CURATORIAL STUDY · DISTILLATION
              </div>
              <h2 className="mt-4 display text-4xl md:text-6xl font-bold text-foreground leading-[0.88]">
                STRIPPING AWAY THE NOISE
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                We reject heavy retouching, artificial flash modifiers, and rigid posing guides. True portraiture requires quiet patience—allowing the natural geometry of facial expression to emerge in soft window light.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col items-end">
              <div className="relative aspect-[4/5] w-72 md:w-96 overflow-hidden bg-muted border border-foreground/20 shadow-2xl">
                <Image
                  src="/portfolio/portrait/portrait-01.jpg"
                  alt="Plate 02 — Intimate Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
              <div className="mt-4 w-72 md:w-96 text-right text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                PLATE 02 — MONOCHROME STUDY · ISO 100
              </div>
            </div>
          </section>
        </div>
      </div>
    </BookPage>
  );
}
