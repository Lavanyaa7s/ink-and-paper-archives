"use client";

import { motion } from "motion/react";
import Image from "next/image";

const equipmentList = [
  { item: "Canon EOS R6 Mark II", role: "Primary Mirrorless Body", spec: "Full-Frame 24.2MP CMOS" },
  { item: "Canon RF 50mm f/1.8 STM", role: "Prime Editorial Lens", spec: "Ultra-Sharp Bokeh & Low Light" },
  { item: "DJI Mini 3 Pro", role: "Aerial & Drone Systems", spec: "4K/60fps HDR Cinematic Video" },
  { item: "Godox V1 Flash Speedlight", role: "Studio Lighting Kit", spec: "Round Head TTL High-Speed Sync" },
];

export function EditorialIntroduction() {
  return (
    <section id="introduction" className="magazine-spread min-h-screen w-full py-24 md:py-32 px-6 sm:px-12 lg:px-20 flex flex-col justify-between">
      {/* Top Registration Line */}
      <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
        <span className="text-magazine-label text-[#111111]">BOOK 01 · INTRODUCTION & BIOGRAPHY</span>
        <span className="text-magazine-label">PAGE 04 — 05</span>
      </div>

      {/* Split Editorial Layout */}
      <div className="max-w-7xl w-full mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Side — Portrait & Stats */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] w-full max-w-[380px] rounded-sm overflow-hidden border border-black/[0.12] shadow-xl bg-[#f2f2f2]"
          >
            <Image
              src="/portfolio/photographer/maindhaa.png"
              alt="Maindhaa — Lead Photographer"
              fill
              className="object-cover object-top filter grayscale hover:filter-none transition-all duration-700"
              sizes="(max-width: 768px) 380px, 420px"
              quality={95}
            />
          </motion.div>

          {/* Stats Grid */}
          <div className="w-full max-w-[380px] grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-black/[0.08]">
            <div>
              <span className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl text-[#111111] block leading-none">
                3+
              </span>
              <span className="text-magazine-label text-[#666666] mt-1 block">Years Exp.</span>
            </div>
            <div>
              <span className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl text-[#111111] block leading-none">
                200+
              </span>
              <span className="text-magazine-label text-[#666666] mt-1 block">Shoots Done</span>
            </div>
            <div>
              <span className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl text-[#111111] block leading-none">
                50+
              </span>
              <span className="text-magazine-label text-[#666666] mt-1 block">VIP Clients</span>
            </div>
          </div>
        </div>

        {/* Right Side — Biography & Equipment */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-magazine-label mb-3 block text-[#666666]">LEAD DIRECTOR & ARTIST</span>
            <h2 className="text-magazine-heading text-[#111111] leading-tight mb-6">
              MAINDHAA
            </h2>

            <div className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg text-[#333333] space-y-6 leading-relaxed font-light">
              <p>
                Based in <strong className="font-medium text-[#000000]">Malaysia</strong>, Mainz Media was founded with a singular artistic vision: to strip away artificial digital noise and capture the pure, raw emotion of human celebrations and mechanical excellence through cinematic storytelling.
              </p>
              <p>
                Every shoot is approached like creating an editorial coffee-table book spread. Whether standing beside a high-performance supercar on the asphalt of Sepang International Circuit or documenting the quiet, intimate glances of an eternal wedding vow, our composition relies on natural light balance, architectural symmetry, and timeless color grading.
              </p>
            </div>
          </div>

          {/* Equipment Showcase Table */}
          <div className="mt-12 pt-10 border-t border-black/[0.08]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide uppercase text-[#111111]">
                STUDIO EQUIPMENT & CAMERA GEAR
              </h3>
              <span className="text-magazine-label text-[#666666]">MASTER TOOLS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipmentList.map((eq, i) => (
                <motion.div
                  key={eq.item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-4 rounded border border-black/[0.08] bg-[#fafafa] hover:border-black/30 transition-all"
                >
                  <span className="text-magazine-label text-[#666666] block mb-1">
                    {eq.role}
                  </span>
                  <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm text-[#111111]">
                    {eq.item}
                  </h4>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#666666] mt-0.5">
                    {eq.spec}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Details & Social Connect Row */}
          <div className="mt-10 pt-8 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-xs font-[family-name:var(--font-space-grotesk)]">
              <div>
                <span className="text-magazine-label text-[#666666] block">Location</span>
                <span className="font-semibold text-[#111111]">Malaysia · Worldwide</span>
              </div>
              <div>
                <span className="text-magazine-label text-[#666666] block">Direct Contact</span>
                <span className="font-semibold text-[#111111]">+60 16-322 8337</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/60163228337"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magazine-outline py-2.5 px-6 text-[10px]"
              >
                <span>WhatsApp Studio</span>
              </a>
              <a
                href="https://www.instagram.com/mainz.media"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magazine py-2.5 px-6 text-[10px]"
              >
                <span>Follow @mainz.media ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Line */}
      <div className="flex items-center justify-between pt-8 border-t border-black/[0.08]">
        <span className="text-magazine-label">MAINZ MEDIA PHOTOGRAPHY STUDIO</span>
        <span className="text-magazine-label text-[#111111]">TURN PAGE TO CHAPTER 01 ↓</span>
      </div>
    </section>
  );
}
