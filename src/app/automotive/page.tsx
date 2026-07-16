"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

export default function AutomotivePage() {
  return (
    <BookPage
      chapter="CHAPTER 01"
      chapterTitle="AUTOMOTIVE SERIES"
      page="PAGE 04—07"
      prev={{ to: "/contents", label: "TABLE OF CONTENTS" }}
      next={{ to: "/portraits", label: "TURN PAGE TO PORTRAITS" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Title Block */}
        <div className="mb-24">
          <div className="label text-muted-foreground font-bold tracking-[0.26em]">
            VOLUME 01 · THE MACHINES COLLECTION
          </div>
          <h1 className="mt-4 display text-[13vw] md:text-[8.5rem] leading-[0.82] font-bold text-foreground">
            AUTOMOTIVE
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
            A study of stillness and steel. Twelve plates photographed at twilight across Malaysia&apos;s racing circuits and architectural garages.
          </p>
        </div>

        {/* Spread Rhythm Sequence: Every spread surprises the reader */}
        <div className="space-y-44 md:space-y-64">
          {/* 1. HUGE PHOTO (Full-Width Master Plate) */}
          <section className="space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src="/portfolio/automotive/auto-03.jpg"
                alt="Plate 01 — Circuit Twilight"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 01 / 12 — TWILIGHT AT SEPANG CIRCUIT</span>
              <span>CANON R6 II · RF 70–200MM F/2.8 L · 1/1600S</span>
            </div>
          </section>

          {/* 2. TINY INTIMATE DETAIL (Small Right-Aligned Plate with Vast Whitespace) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 pr-8">
              <div className="label text-muted-foreground font-bold tracking-[0.24em]">
                CURATORIAL NOTE · PLATE 02
              </div>
              <h2 className="mt-4 display text-4xl md:text-6xl font-bold text-foreground leading-[0.88]">
                THE GEOMETRY OF EXHAUST &amp; STEEL
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-sm">
                By moving within twelve inches of the carbon diffuser, the automobile ceases to be a vehicle and transforms into pure industrial sculpture.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col items-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-muted border border-foreground/20 shadow-2xl">
                <Image
                  src="/portfolio/automotive/auto-04.jpg"
                  alt="Plate 02 — Carbon Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
              <div className="mt-4 w-64 md:w-80 text-right text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                PLATE 02 — INTIMATE DETAIL · F/1.8
              </div>
            </div>
          </section>

          {/* 3. MEDIUM VERTICAL (Center-Left Composition) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-6 md:col-start-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.22)]">
                <Image
                  src="/portfolio/automotive/auto-01.jpg"
                  alt="Plate 03 — The Cockpit Silence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="text-foreground">PLATE 03 — COCKPIT INTERIOR</span>
                <span>ISO 100 · F/2.8</span>
              </div>
            </div>
            <div className="md:col-span-4 pb-8">
              <div className="label font-bold tracking-[0.24em]">EXHIBITION DATA</div>
              <dl className="mt-6 space-y-4 text-xs font-medium uppercase tracking-[0.2em] divide-y divide-foreground/15">
                <div className="pt-4 flex justify-between">
                  <dt className="text-muted-foreground">LOCATION</dt>
                  <dd className="text-foreground font-bold">SEPANG CIRCUIT PITLANE</dd>
                </div>
                <div className="pt-4 flex justify-between">
                  <dt className="text-muted-foreground">AMBIENT LIGHT</dt>
                  <dd className="text-foreground font-bold">DUSK — 18:44 MYT</dd>
                </div>
                <div className="pt-4 flex justify-between">
                  <dt className="text-muted-foreground">COMMISSION</dt>
                  <dd className="text-foreground font-bold">PRIVATE COLLECTOR</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* 4. EDITORIAL QUOTE SPREAD (Pure Typography & Emotion) */}
          <section className="py-16 md:py-24 border-y-2 border-foreground text-center max-w-4xl mx-auto px-4">
            <div className="label text-muted-foreground font-bold tracking-[0.26em]">
              FIELD NOTE — MONOGRAPH EXCERPT
            </div>
            <blockquote className="mt-8 display text-4xl md:text-7xl font-bold tracking-tight leading-[0.92] text-foreground">
              &ldquo;THERE IS MORE CHARACTER IN A CAR STANDING STILL THAN IN ONE MOVING. LIGHT DOES THE DRIVING.&rdquo;
            </blockquote>
            <div className="mt-8 label-ink font-bold tracking-[0.24em]">
              — MAINDHAA, AUTOMOTIVE SERIES NOTEBOOK 2024
            </div>
          </section>

          {/* 5. WIDE LANDSCAPE PANORAMIC SPREAD */}
          <section className="space-y-6">
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_45px_90px_-25px_rgba(0,0,0,0.25)]">
              <Image
                src="/portfolio/featured/featured-03.jpg"
                alt="Plate 04 — Steel and Shadow"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 04 / 12 — STEEL AND SHADOW · KUALA LUMPUR</span>
              <span>CANON R6 II · RF 24–70MM F/2.8 L</span>
            </div>
          </section>
        </div>
      </div>
    </BookPage>
  );
}
