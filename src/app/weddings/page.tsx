"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

export default function WeddingsPage() {
  return (
    <BookPage
      chapter="CHAPTER 03"
      chapterTitle="WEDDINGS"
      page="PAGE 12—15"
      prev={{ to: "/portraits", label: "PORTRAITS" }}
      next={{ to: "/newborn", label: "TURN PAGE TO NEWBORN" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Emotional Story Opening Spread */}
        <div className="min-h-[70vh] flex flex-col justify-center items-center text-center border-b border-foreground/20 pb-24 mb-28">
          <div className="label text-muted-foreground font-bold tracking-[0.28em]">
            VOLUME 03 · MONOGRAPH ARCHIVE
          </div>
          <h1 className="mt-6 display text-[14vw] md:text-[9.5rem] leading-[0.8] font-bold text-foreground">
            FARID &amp; AISYAH
          </h1>
          <div className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-[0.24em] text-muted-foreground">
            10 FEBRUARY 2025 · KUALA LUMPUR, MALAYSIA
          </div>

          <div className="mt-14 h-px w-24 bg-foreground" />

          {/* The Emotional Story Sentence */}
          <blockquote className="mt-14 max-w-3xl text-2xl md:text-4xl font-light italic leading-relaxed text-foreground tracking-wide">
            &ldquo;The rain started over the glass atrium exactly when Farid placed the ring on Aisyah&apos;s finger. Nobody moved. Nobody ran for cover. We just let the storm amplify the silence.&rdquo;
          </blockquote>
          <div className="mt-6 label-ink font-bold tracking-[0.24em]">
            — CURATORIAL NOTE, CEREMONY PLATE 01
          </div>
        </div>

        {/* Spread Rhythm Sequence */}
        <div className="space-y-44 md:space-y-64">
          {/* 1. HUGE MASTER PLATE */}
          <section className="space-y-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src="/portfolio/events/event-03.jpg"
                alt="Plate 01 — The Glass Atrium"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 01 / 24 — THE CEREMONY SILENCE</span>
              <span>CANON R6 II · RF 50MM F/1.2 L · ISO 400</span>
            </div>
          </section>

          {/* 2. INTIMATE DETAIL & EMOTION */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-muted border border-foreground/20 shadow-2xl">
                <Image
                  src="/portfolio/events/event-01.jpg"
                  alt="Plate 02 — The Vows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                PLATE 02 — UNGUARDED MOMENT · F/1.2
              </div>
            </div>
            <div className="md:col-span-7 pl-0 md:pl-12">
              <div className="label text-muted-foreground font-bold tracking-[0.24em]">
                MONOGRAPH EXCERPT · TIME &amp; LIGHT
              </div>
              <h2 className="mt-4 display text-4xl md:text-6xl font-bold text-foreground leading-[0.88]">
                BEYOND THE ARTIFICIAL POSE
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                When two families unite under sudden rain, the tension dissolves into something far greater than celebration—it becomes pure, distilled gratitude. We never direct tears or orchestrate laughter; our cameras simply wait for truth to occur naturally.
              </p>
            </div>
          </section>

          {/* 3. WIDE CINEMATIC SPREAD */}
          <section className="space-y-6">
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_45px_90px_-25px_rgba(0,0,0,0.25)]">
              <Image
                src="/portfolio/events/event-04.jpg"
                alt="Plate 03 — The Reception Horizon"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 03 / 24 — EVENING AT THE GRAND ATELIER</span>
              <span>CANON R6 II · RF 24–70MM F/2.8 L</span>
            </div>
          </section>
        </div>
      </div>
    </BookPage>
  );
}
