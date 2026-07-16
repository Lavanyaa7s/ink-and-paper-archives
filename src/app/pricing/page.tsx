"use client";

import { BookPage } from "@/components/BookPage";

const commissions = [
  {
    discipline: "WEDDING COMMISSION",
    price: "RM 1,800",
    scope: "FULL DAY DOCUMENTARY COVERAGE · 10 TO 12 HOURS",
    details: "Includes two lead photographers, unscripted archival curation, custom online gallery, and heirloom print release.",
  },
  {
    discipline: "PORTRAIT SESSION",
    price: "RM 450",
    scope: "INTIMATE STUDIO OR NATURAL LIGHT STUDY · 2 HOURS",
    details: "Includes thorough pre-shoot consultation, wardrobe alignment, and 20 cured high-resolution archival plates.",
  },
  {
    discipline: "COMMERCIAL & BRAND",
    price: "RM 2,500",
    scope: "FULL DAY PRODUCTION · EDITORIAL LICENSING",
    details: "Designed for architectural interiors, lookbooks, and brand storytelling. Includes commercial usage and high-end color grading.",
  },
  {
    discipline: "AUTOMOTIVE SERIES",
    price: "RM 1,200",
    scope: "HALF DAY CIRCUIT OR DUSK LOCATION STUDY · 4 HOURS",
    details: "Precision twilight and rig lighting documentation. Includes 15 master plates developed specifically for large-format print.",
  },
  {
    discipline: "NEWBORN & HEIRLOOM",
    price: "RM 650",
    scope: "IN-HOME PURE NATURAL LIGHT SESSION · 3 HOURS",
    details: "A quiet, unhurried documentation of baby and parents in the organic comfort of home. Zero artificial flash or forced poses.",
  },
];

export default function PricingPage() {
  return (
    <BookPage
      chapter="CHAPTER 08"
      chapterTitle="PRIVATE COMMISSIONS"
      page="PAGE 26—27"
      prev={{ to: "/equipment", label: "TOOLS OF THE TRADE" }}
      next={{ to: "/booking", label: "BOOK YOUR SESSION" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Editorial Header */}
        <div className="mb-24">
          <div className="label text-muted-foreground font-bold tracking-[0.26em]">
            MONOGRAPH SPREAD · RATES &amp; RETENTION
          </div>
          <h1 className="mt-4 display text-[11vw] md:text-[8rem] leading-[0.84] font-bold text-foreground">
            PRIVATE
            <br />
            COMMISSIONS
          </h1>
          <div className="mt-10 h-px w-32 bg-foreground/30" />
          <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed font-normal">
            Every commission is approached not as a standard service booking, but as the creation of an enduring physical archive. Rates are structured for total transparency and uncompromising artistic attention.
          </p>
        </div>

        {/* Pure Magazine Editorial Table (No Cards!) */}
        <div className="divide-y divide-foreground/20 border-y border-foreground/20">
          {commissions.map((c) => (
            <div
              key={c.discipline}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              <div className="md:col-span-5">
                <h2 className="display text-4xl md:text-6xl font-bold tracking-tight text-foreground group-hover:underline">
                  {c.discipline}
                </h2>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {c.scope}
                </div>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                  {c.details}
                </p>
              </div>
              <div className="md:col-span-3 text-left md:text-right">
                <div className="display text-4xl md:text-6xl font-bold text-foreground">
                  {c.price}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  MALAYSIAN RINGGIT
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Footnote */}
        <div className="mt-20 border-t border-foreground/20 pt-10 flex flex-col md:flex-row justify-between gap-6 text-xs text-muted-foreground">
          <p className="max-w-lg leading-relaxed">
            * All commissions include full-resolution digital archival curation, colorist grading by Maindhaa, and personal print rights. Travel beyond Kuala Lumpur and Selangor is billed at exact logistical cost.
          </p>
          <div className="font-bold uppercase tracking-[0.24em] self-end">
            RETENTION ARCHIVE 2025 · MAINZ MEDIA
          </div>
        </div>
      </div>
    </BookPage>
  );
}
