"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function PortfolioCoverBook() {
  return (
    <section
      id="portfolio"
      className="magazine-spread min-h-screen w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Editorial Print Registration / Page Number */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3">
        <span className="text-magazine-label text-[#111111]">BOOK 01</span>
        <span className="w-8 h-px bg-black/20" />
        <span className="text-magazine-label">THE MASTER COLLECTION</span>
      </div>

      <div className="absolute top-8 right-8 md:top-12 md:right-12">
        <span className="text-magazine-label text-[#111111]">EST. 2023 · MALAYSIA</span>
      </div>

      {/* Main Centered Book Cover Layout */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center my-auto z-10">
        {/* Top Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-magazine-label mb-6 tracking-[0.35em]"
        >
          CURATED CINEMATIC ARCHIVES
        </motion.p>

        {/* Huge Centered Typography - PORTFOLIO */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-magazine-hero text-[#000000] leading-none tracking-tight"
        >
          PORTFOLIO
        </motion.h1>

        {/* Center Main Photographer Portrait with Editorial Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-8 md:my-12 w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[430px] rounded-sm overflow-hidden shadow-2xl border border-black/[0.12] bg-[#f2f2f2] group"
        >
          <Image
            src="/portfolio/photographer/maindhaa.png"
            alt="Maindhaa — Photographer & Director"
            fill
            priority
            className="object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-1000"
            sizes="(max-width: 768px) 280px, 320px"
            quality={95}
          />
          {/* Subtle frame border overlay */}
          <div className="absolute inset-2 border border-white/20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-center z-10 bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded text-[9px] font-[family-name:var(--font-space-grotesk)] tracking-[0.25em] uppercase text-black font-semibold">
            LEAD PHOTOGRAPHER · MAINDHAA
          </div>
        </motion.div>

        {/* MAINZ MEDIA Title & Year Collection */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-magazine-display text-[#111111] leading-none tracking-wide mt-2"
        >
          MAINZ MEDIA
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm md:text-base tracking-[0.2em] uppercase text-[#111111] font-medium">
            Photography Collection 2025
          </p>
          <span className="text-magazine-label text-[#666666]">
            MALAYSIA · WORLDWIDE
          </span>
        </motion.div>
      </div>

      {/* Bottom Spread Page Turning Indicator */}
      <div className="absolute bottom-8 left-0 right-0 px-8 md:px-12 flex items-center justify-between">
        <span className="text-magazine-label text-[#111111]">PAGE 01</span>
        <span className="text-magazine-label">TURN PAGE TO DISCOVER CONTENTS ↓</span>
      </div>
    </section>
  );
}
