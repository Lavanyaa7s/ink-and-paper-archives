"use client";

import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import Image from "next/image";

const chapters = [
  {
    n: "01",
    title: "AUTOMOTIVE",
    subtitle: "The Machines Collection",
    desc: "A study of stillness and steel. Twelve plates photographed at dusk across Malaysia's racing circuits.",
    to: "/automotive",
    img: "/portfolio/automotive/auto-03.jpg",
    plate: "PLATE 01 / 12 — SEPANG CIRCUIT",
  },
  {
    n: "02",
    title: "PORTRAITS",
    subtitle: "The Silent Monologue",
    desc: "One face. One frame. Distilling the exact breath when artificial posture dissolves and raw truth emerges.",
    to: "/portraits",
    img: "/portfolio/portrait/portrait-04.jpg",
    plate: "PLATE 01 / 15 — NATURAL LIGHT STUDY",
  },
  {
    n: "03",
    title: "WEDDINGS",
    subtitle: "Sacred Unguarded Moments",
    desc: "Farid & Aisyah. A quiet morning under rain-soaked glass. Every unscripted, unrepeated second preserved forever.",
    to: "/weddings",
    img: "/portfolio/events/event-03.jpg",
    plate: "PLATE 01 / 24 — KUALA LUMPUR ATELIER",
  },
  {
    n: "04",
    title: "NEWBORN",
    subtitle: "The First Days of Light",
    desc: "Seven days old. Handled with organic cotton, silent shutters, and gentle window shadows.",
    to: "/newborn",
    img: "/portfolio/events/event-05.jpg",
    plate: "PLATE 01 / 10 — IN-HOME HEIRLOOM",
  },
  {
    n: "05",
    title: "COMMERCIAL",
    subtitle: "Heirloom & Atelier",
    desc: "Product, editorial, and architectural campaigns. Held to a single, uncompromising art-book standard.",
    to: "/commercial",
    img: "/portfolio/featured/featured-12.jpg",
    plate: "PLATE 01 / 18 — BRAND ARCHIVE",
  },
];

export default function ContentsPage() {
  return (
    <BookPage
      chapter="CHAPTER 00"
      chapterTitle="TABLE OF CONTENTS"
      page="PAGE 02—03"
      next={{ to: "/automotive", label: "TURN PAGE TO AUTOMOTIVE" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <div className="label text-muted-foreground font-medium tracking-[0.26em]">
            EXHIBITION OVERVIEW · CURATED SPREADS
          </div>
          <h1 className="mt-4 display text-[12vw] leading-[0.82] md:text-[8.5rem] font-bold text-foreground">
            THE MASTER
            <br />
            COLLECTION
          </h1>
          <div className="mt-10 h-px w-32 bg-foreground/30" />
          <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
            This is not a website menu. This is a printed coffee-table monograph.
            Scroll downward through each curated volume below to explore the spreads, or turn the page directly to begin.
          </p>
        </div>

        {/* 5 Giant Editorial Spreads Stacked Sequentially */}
        <div className="space-y-40 md:space-y-56">
          {chapters.map((c) => (
            <div
              key={c.n}
              className="group border-t border-foreground/20 pt-16 md:pt-24 grid grid-cols-12 gap-8 md:gap-16 items-start"
            >
              <div className="col-span-12 md:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="label text-muted-foreground font-bold tracking-[0.24em]">
                    VOLUME {c.n} · CHAPTER SPREAD
                  </div>
                  <h2 className="mt-4 display text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[0.86]">
                    {c.title}
                  </h2>
                  <div className="mt-4 text-xl md:text-2xl font-light tracking-wide text-foreground/80 italic">
                    {c.subtitle}
                  </div>
                  <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-sm">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-12 md:mt-24">
                  <Link
                    href={c.to}
                    className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-all hover:bg-muted-foreground hover:scale-[1.02] cursor-pointer"
                  >
                    <span>OPEN VOLUME {c.n}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <Link href={c.to} className="block group/img cursor-pointer">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)]">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    <span>{c.plate}</span>
                    <span className="text-foreground font-bold group-hover/img:underline">
                      VIEW SPREAD →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Index Jump Footer */}
        <div className="mt-48 border-t border-foreground/30 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Link href="/about" className="label-ink font-bold hover:text-muted-foreground text-sm cursor-pointer">
            → VOLUME 06 · ABOUT MAINDHAA
          </Link>
          <Link href="/equipment" className="label-ink font-bold hover:text-muted-foreground text-sm cursor-pointer">
            → VOLUME 07 · TOOLS OF THE TRADE
          </Link>
          <Link href="/pricing" className="label-ink font-bold hover:text-muted-foreground text-sm cursor-pointer">
            → VOLUME 08 · PRIVATE COMMISSIONS
          </Link>
          <Link href="/booking" className="label-ink font-bold hover:text-muted-foreground text-sm cursor-pointer">
            → VOLUME 09 · SESSION REQUEST
          </Link>
        </div>
      </div>
    </BookPage>
  );
}
