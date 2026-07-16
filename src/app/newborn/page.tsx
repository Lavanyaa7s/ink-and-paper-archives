"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

export default function NewbornPage() {
  return (
    <BookPage
      chapter="CHAPTER 04"
      chapterTitle="NEWBORN ARCHIVE"
      page="PAGE 16—18"
      prev={{ to: "/weddings", label: "WEDDINGS" }}
      next={{ to: "/commercial", label: "TURN PAGE TO COMMERCIAL" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Emotional Story Opening Spread */}
        <div className="min-h-[66vh] flex flex-col justify-center items-center text-center border-b border-foreground/20 pb-24 mb-28">
          <div className="label text-muted-foreground font-bold tracking-[0.28em]">
            VOLUME 04 · HEIRLOOM MONOGRAPH
          </div>
          <h1 className="mt-6 display text-[12vw] md:text-[8.5rem] leading-[0.82] font-bold text-foreground">
            THE FIRST DAYS
            <br />
            OF LIGHT
          </h1>
          <div className="mt-4 text-lg md:text-xl font-bold uppercase tracking-[0.24em] text-muted-foreground">
            SEVEN DAYS OLD · IN-HOME NATURAL LIGHT STUDY
          </div>

          <div className="mt-14 h-px w-24 bg-foreground" />

          {/* Story Sentence */}
          <blockquote className="mt-14 max-w-3xl text-2xl md:text-4xl font-light italic leading-relaxed text-foreground tracking-wide">
            &ldquo;He slept through the morning sun filtering across the linen crib. We never raised a flash or directed a pose; we simply followed the natural movement of the shadows.&rdquo;
          </blockquote>
          <div className="mt-6 label-ink font-bold tracking-[0.24em]">
            — CURATORIAL NOTE, HEIRLOOM PLATE 01
          </div>
        </div>

        {/* Spread Rhythm Sequence */}
        <div className="space-y-44 md:space-y-64">
          {/* 1. HUGE MASTER PLATE */}
          <section className="space-y-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src="/portfolio/events/event-05.jpg"
                alt="Plate 01 — Seven Days Old"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 01 / 10 — NATURAL LIGHT ON ORGANIC LINEN</span>
              <span>CANON R6 II · RF 50MM F/1.2 L · ISO 100</span>
            </div>
          </section>

          {/* 2. INTIMATE DETAIL */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden bg-muted border border-foreground/20 shadow-2xl">
                <Image
                  src="/portfolio/featured/featured-01.jpg"
                  alt="Plate 02 — Delicate Hand Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                PLATE 02 — INTIMATE HAND STUDY · F/1.4
              </div>
            </div>
            <div className="md:col-span-7 pl-0 md:pl-12">
              <div className="label text-muted-foreground font-bold tracking-[0.24em]">
                MONOGRAPH EXCERPT · SILENCE
              </div>
              <h2 className="mt-4 display text-4xl md:text-6xl font-bold text-foreground leading-[0.88]">
                COTTON &amp; WINDOW LIGHT
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Newborn documentation requires complete stillness. By working exclusively with window light and silent shutters, we preserve the organic serenity of the home without disrupting a single heartbeat.
              </p>
            </div>
          </section>
        </div>
      </div>
    </BookPage>
  );
}
