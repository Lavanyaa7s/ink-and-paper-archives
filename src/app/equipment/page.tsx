"use client";

import { BookPage } from "@/components/BookPage";
import Image from "next/image";

const tools = [
  {
    category: "PRIMARY ARCHIVAL BODY",
    model: "CANON EOS R6 MARK II",
    spec: "24.2 MEGAPIXEL FULL-FRAME SENSOR",
    note: "Chosen for its uncompromising dynamic range and silent mechanical shutter accuracy in low-light environments.",
  },
  {
    category: "PRIME PORTRAIT DISTILLATION",
    model: "CANON RF 50MM F/1.2 L USM",
    spec: "ULTRA-WIDE APERTURE PRIME",
    note: "The signature Mainz Media focal length. Yields sculptural depth-of-field and organic, three-dimensional subject separation.",
  },
  {
    category: "DOCUMENTARY & EVENT HORIZON",
    model: "CANON RF 24–70MM F/2.8 L IS USM",
    spec: "CONSTANT APERTURE STANDARD ZOOM",
    note: "Essential for unscripted movement and rapid composition shifts during sacred wedding vows and architectural interiors.",
  },
  {
    category: "COMPRESSED CINEMATIC PERSPECTIVE",
    model: "CANON RF 70–200MM F/2.8 L IS USM",
    spec: "TELEPHOTO CINEMATIC OPTIC",
    note: "Employed from a distance to capture completely unguarded human interaction and dramatic automotive compression.",
  },
  {
    category: "AERIAL ARCHITECTURE & SCALE",
    model: "DJI MINI 3 PRO AERIAL PLATFORM",
    spec: "4K HDR · CAAM CERTIFIED PILOT",
    note: "Utilized for environmental context, expansive circuit geometry, and grand estate aerial documentation.",
  },
  {
    category: "SCULPTURAL FIELD LIGHTING",
    model: "GODOX V1 & PROFOTO ATELIER LIGHTING",
    spec: "MAGNETIC MODIFIERS & HIGH-SPEED SYNC",
    note: "Subtle supplemental illumination designed to mimic and shape natural window light without overpowering the emotion.",
  },
];

export default function EquipmentPage() {
  return (
    <BookPage
      chapter="CHAPTER 07"
      chapterTitle="INSTRUMENTS OF DISTILLATION"
      page="PAGE 24—25"
      prev={{ to: "/about", label: "ABOUT MAINDHAA" }}
      next={{ to: "/pricing", label: "PRIVATE COMMISSIONS" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-20">
          <div className="label text-muted-foreground font-bold tracking-[0.26em]">
            EXHIBITION SPREAD · ARCHIVAL HARDWARE
          </div>
          <h1 className="mt-4 display text-[11vw] md:text-[7.5rem] leading-[0.84] font-bold text-foreground">
            TOOLS OF
            <br />
            THE TRADE
          </h1>
          <div className="mt-10 h-px w-32 bg-foreground/30" />
          <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed font-normal">
            Every piece of hardware in the Mainz Media kit is selected with a single criterion: total reliability and optical perfection, ensuring the technology vanishes leaving only the photograph.
          </p>
        </div>

        {/* Museum-Grade Minimalist Table */}
        <div className="divide-y divide-foreground/20 border-y border-foreground/20">
          {tools.map((t, idx) => (
            <div
              key={t.model}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              <div className="md:col-span-3">
                <span className="label text-muted-foreground font-bold tracking-[0.24em] block">
                  0{idx + 1} / {t.category}
                </span>
              </div>
              <div className="md:col-span-5">
                <h2 className="display text-3xl md:text-5xl font-bold tracking-tight text-foreground group-hover:underline">
                  {t.model}
                </h2>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-foreground/70">
                  {t.spec}
                </div>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                  {t.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Archival Footnote */}
        <div className="mt-20 flex justify-between items-center text-xs uppercase font-bold tracking-[0.24em] text-muted-foreground">
          <span>SERVICED &amp; CALIBRATED ANNUALLY · MALAYSIA</span>
          <span>OPTICAL REGISTRATION 2025</span>
        </div>
      </div>
    </BookPage>
  );
}
