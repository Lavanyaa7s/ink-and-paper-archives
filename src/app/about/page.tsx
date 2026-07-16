"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

export default function AboutPage() {
  return (
    <BookPage
      chapter="CHAPTER 06"
      chapterTitle="VOGUE SPREAD · THE ARTIST"
      page="PAGE 22—23"
      prev={{ to: "/commercial", label: "COMMERCIAL" }}
      next={{ to: "/equipment", label: "TOOLS OF THE TRADE" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Pure 2-Page Vogue Coffee-Table Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center min-h-[78vh]">
          {/* Left Page: Huge Gallery Portrait */}
          <div className="col-span-1 md:col-span-6 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted border border-foreground/15 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.25)]">
              <Image
                src="/portfolio/photographer/maindhaa.png"
                alt="Maindhaa — Lead Photographer"
                fill
                className="object-cover grayscale contrast-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground font-medium">
              <span>PLATE 01 · SELF-PORTRAIT AT DUSK</span>
              <span>MALAYSIA · EST. 2023</span>
            </div>
          </div>

          {/* Right Page: One Beautiful Story */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center py-6 md:pl-8">
            <div className="label text-muted-foreground font-bold tracking-[0.26em]">
              MONOGRAPH NO. 01 — THE PHILOSOPHY
            </div>
            <h1 className="mt-6 display text-[14vw] md:text-[8rem] leading-[0.82] font-bold tracking-tight text-foreground">
              MAINDHAA
            </h1>

            <div className="mt-10 h-px w-24 bg-foreground" />

            <blockquote className="mt-10 text-2xl md:text-3xl font-light italic leading-relaxed text-foreground tracking-wide">
              &ldquo;I do not photograph people as they appear. I photograph people as they feel when the world stops watching.&rdquo;
            </blockquote>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground font-normal">
              Born and based in Malaysia, Maindhaa established Mainz Media with a singular, uncompromising belief: a photograph should not be a static record of where you stood, but a timeless testament to what you felt.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground font-normal">
              Over the past three years—through silent automotive garages at twilight and rain-soaked wedding aisles in Kuala Lumpur—every shutter press has been an exercise in distillation. We strip away the noise, the artificial posture, and the unnecessary light until only the pure, raw emotion remains on paper.
            </p>

            <div className="mt-14 pt-8 border-t border-foreground/20 flex items-center justify-between text-xs font-bold uppercase tracking-[0.22em] text-foreground">
              <span>LEAD COMMISSIONER · MAINZ MEDIA</span>
              <span>PAGE 23 / 30</span>
            </div>
          </div>
        </div>
      </div>
    </BookPage>
  );
}
