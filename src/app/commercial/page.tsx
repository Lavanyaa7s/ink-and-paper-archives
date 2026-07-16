"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

export default function CommercialPage() {
  return (
    <BookPage
      chapter="CHAPTER 05"
      chapterTitle="COMMERCIAL ARCHIVE"
      page="PAGE 19—21"
      prev={{ to: "/newborn", label: "NEWBORN" }}
      next={{ to: "/about", label: "ABOUT MAINDHAA" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Emotional Story Opening Spread */}
        <div className="min-h-[66vh] flex flex-col justify-center items-center text-center border-b border-foreground/20 pb-24 mb-28">
          <div className="label text-muted-foreground font-bold tracking-[0.28em]">
            VOLUME 05 · COMMERCIAL &amp; BRAND MONOGRAPH
          </div>
          <h1 className="mt-6 display text-[12vw] md:text-[8.5rem] leading-[0.82] font-bold text-foreground">
            HEIRLOOM &amp;
            <br />
            ATELIER
          </h1>
          <div className="mt-4 text-lg md:text-xl font-bold uppercase tracking-[0.24em] text-muted-foreground">
            SELECTED BRAND CAMPAIGNS · MALAYSIA 2024—2025
          </div>

          <div className="mt-14 h-px w-24 bg-foreground" />

          {/* Story Sentence */}
          <blockquote className="mt-14 max-w-3xl text-2xl md:text-4xl font-light italic leading-relaxed text-foreground tracking-wide">
            &ldquo;When Musa Coffee commissioned our studio, their directive was simple: do not show us what the coffee looks like in a cup. Show us the weight of the morning silence before the city wakes up.&rdquo;
          </blockquote>
          <div className="mt-6 label-ink font-bold tracking-[0.24em]">
            — BRAND CAMPAIGN NOTEBOOK, PLATE 01
          </div>
        </div>

        {/* Spread Rhythm Sequence */}
        <div className="space-y-44 md:space-y-64">
          {/* 1. HUGE MASTER PLATE */}
          <section className="space-y-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src="/portfolio/featured/featured-12.jpg"
                alt="Plate 01 — Heirloom & Atelier"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-foreground/20 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-foreground">PLATE 01 / 18 — STILL LIFE &amp; TEXTURE ARCHIVE</span>
              <span>CANON R6 II · RF 50MM F/1.2 L · F/2.8</span>
            </div>
          </section>

          {/* 2. RHYTHMIC CLIENT EXHIBITION LIST & DETAIL */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 pr-0 md:pr-10">
              <div className="label text-muted-foreground font-bold tracking-[0.24em]">
                CURATED COMMISSIONERS
              </div>
              <h2 className="mt-4 display text-4xl md:text-6xl font-bold text-foreground leading-[0.88]">
                ONE UNCOMPROMISING STANDARD
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Whether documenting architectural interiors, bespoke horology, or editorial fashion campaigns, we treat commercial commissions with the exact same fine-art reverence as our private portraiture.
              </p>
              <ul className="mt-10 space-y-4 text-sm font-bold uppercase tracking-[0.22em] divide-y divide-foreground/15">
                <li className="pt-4 flex justify-between">
                  <span className="text-foreground">HEIRLOOM ATELIER</span>
                  <span className="text-muted-foreground">ARCHITECTURAL CAMPAIGN 2024</span>
                </li>
                <li className="pt-4 flex justify-between">
                  <span className="text-foreground">MUSA COFFEE CO.</span>
                  <span className="text-muted-foreground">EDITORIAL STILL LIFE 2025</span>
                </li>
                <li className="pt-4 flex justify-between">
                  <span className="text-foreground">RUMAH STUDIO &amp; DESIGN</span>
                  <span className="text-muted-foreground">INTERIOR MONOGRAPH 2025</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-6 flex flex-col items-end">
              <div className="relative aspect-[4/5] w-72 md:w-96 overflow-hidden bg-muted border border-foreground/20 shadow-2xl">
                <Image
                  src="/portfolio/featured/featured-05.jpg"
                  alt="Plate 02 — Product Study"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
              <div className="mt-4 w-72 md:w-96 text-right text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                PLATE 02 — MATERIALS &amp; LIGHT · F/4.0
              </div>
            </div>
          </section>
        </div>
      </div>
    </BookPage>
  );
}
