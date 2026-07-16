"use client";

import { motion } from "motion/react";

const chapters = [
  { number: "01", title: "Automotive Series", subtitle: "Sepang Circuit & High Performance Machines", href: "#gallery-automotive" },
  { number: "02", title: "Editorial Portraits", subtitle: "Intimate Character Studies & Studio Light", href: "#gallery-portraits" },
  { number: "03", title: "Weddings & Vows", subtitle: "Timeless Celebrations & Authentic Emotion", href: "#gallery-weddings" },
  { number: "04", title: "Events & Milestones", subtitle: "Pre-Wedding, Graduations & Live Coverage", href: "#gallery-events" },
  { number: "05", title: "Commercial Archives", subtitle: "Brand Campaigns & Architectural Spaces", href: "#gallery-commercial" },
];

export function ContentsSpread() {
  const scrollToChapter = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contents" className="magazine-spread min-h-screen w-full py-24 md:py-32 px-6 sm:px-12 lg:px-20 flex flex-col justify-between">
      {/* Top Editorial Bar */}
      <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
        <span className="text-magazine-label text-[#111111]">BOOK 01 · TABLE OF CONTENTS</span>
        <span className="text-magazine-label">PAGE 02 — 03</span>
      </div>

      {/* Main Contents Grid */}
      <div className="max-w-6xl w-full mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Title Column */}
        <div className="lg:col-span-4">
          <span className="text-magazine-label mb-3 block text-[#666666]">CHAPTER INDEX</span>
          <h2 className="text-magazine-heading text-[#111111] leading-none mb-4">
            CONTENTS
          </h2>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] leading-relaxed max-w-sm">
            Each chapter represents a dedicated visual discipline within Mainz Media. Select a chapter or scroll to turn pages naturally.
          </p>
        </div>

        {/* Right Chapters List */}
        <div className="lg:col-span-8 flex flex-col divide-y divide-black/[0.08]">
          {chapters.map((ch, idx) => (
            <motion.div
              key={ch.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer"
              onClick={() => scrollToChapter(ch.href)}
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="text-magazine-number text-[#dadada] group-hover:text-[#000000] transition-colors duration-300">
                  {ch.number}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-4xl text-[#111111] tracking-wide uppercase group-hover:translate-x-2 transition-transform duration-300">
                    {ch.title}
                  </h3>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm text-[#666666] mt-0.5">
                    {ch.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="text-magazine-label text-[#666666] group-hover:text-[#000000] transition-colors">
                  EXPLORE SPREAD
                </span>
                <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-xs group-hover:bg-black group-hover:text-white transition-all">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Editorial Line */}
      <div className="flex items-center justify-between pt-8 border-t border-black/[0.08]">
        <span className="text-magazine-label">MAINZ MEDIA PHOTOGRAPHY BOOK</span>
        <span className="text-magazine-label text-[#111111]">SCROLL TO CHAPTER 01 ↓</span>
      </div>
    </section>
  );
}
