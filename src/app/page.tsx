"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

interface StudioPlate {
  id: string;
  title: string;
  category: "automotive" | "weddings" | "portraits" | "commercial";
  location: string;
  year: string;
  src: string;
  specs: string;
  desc: string;
}

const masterPlates: StudioPlate[] = [
  {
    id: "auto-plate-01",
    title: "TWILIGHT CIRCUIT SYMMETRY",
    category: "automotive",
    location: "SEPANG INTERNATIONAL CIRCUIT, MY",
    year: "2024",
    src: "/portfolio/automotive/automotive-01.jpg",
    specs: "35MM ANAMORPHIC · f/1.4 · 1/2000s · ISO 100",
    desc: "High-speed circuit documentation capturing the raw aerodynamic curves and dusk reflections of high-performance engineering under floodlights.",
  },
  {
    id: "wedding-plate-01",
    title: "RAIN-SOAKED SACRED VOWS",
    category: "weddings",
    location: "PENANG HERITAGE HALL, MY",
    year: "2024",
    src: "/portfolio/wedding/wedding-01.jpg",
    specs: "50MM LEICA M · f/1.2 · 1/1000s · ISO 160",
    desc: "Unscripted documentary coverage of a rain-drenched ceremony where every teardrop, vow, and familial embrace is preserved with heirloom celluloid warmth.",
  },
  {
    id: "portrait-plate-01",
    title: "MONOCHROME CHARACTER STUDY",
    category: "portraits",
    location: "KUALA LUMPUR STUDIO, MY",
    year: "2024",
    src: "/portfolio/portrait/portrait-01.jpg",
    specs: "85MM CINEMA PRIME · f/1.8 · 1/500s · ISO 200",
    desc: "A quiet, unhurried studio study where natural side-lighting sculpts authentic character with zero forced posing or flash.",
  },
  {
    id: "commercial-plate-01",
    title: "ARCHITECTURAL MINIMALISM",
    category: "commercial",
    location: "BUKIT BINTANG LUXURY SUITE, MY",
    year: "2024",
    src: "/portfolio/commercial/commercial-01.jpg",
    specs: "24MM TILT-SHIFT · f/8.0 · 1/125s · ISO 100",
    desc: "Bespoke interior architecture emphasizing clean geometric shadow lines, bespoke stone textures, and luxury lookbook storytelling.",
  },
  {
    id: "auto-plate-02",
    title: "MIDNIGHT WORKSHOP CHRONICLES",
    category: "automotive",
    location: "PETALING JAYA GARAGE, MY",
    year: "2024",
    src: "/portfolio/automotive/automotive-02.jpg",
    specs: "50MM PRIME · f/1.4 · 1/500s · ISO 400",
    desc: "Intimate late-night restoration documentation capturing welding sparks and mechanical craftsmanship at 2 AM.",
  },
  {
    id: "portrait-plate-02",
    title: "THE SILENT OBSERVER",
    category: "portraits",
    location: "BANGSAR SOUTH STUDIO, MY",
    year: "2024",
    src: "/portfolio/portrait/portrait-02.jpg",
    specs: "105MM TELEPHOTO · f/2.0 · 1/800s · ISO 100",
    desc: "Atmospheric shadow play isolating the quietest emotional resonance between spoken words.",
  },
];

const bentoDisciplines = [
  {
    title: "AUTOMOTIVE SERIES",
    subtitle: "MACHINE & CIRCUIT ENGINEERING",
    desc: "Precision twilight rig lighting, circuit speed motion plates, and bespoke automotive documentation engineered for international brand monographs.",
    slug: "/automotive",
    img: "/portfolio/automotive/automotive-01.jpg",
    span: "col-span-12 lg:col-span-8 row-span-2",
  },
  {
    title: "WEDDINGS & SACRED VOWS",
    subtitle: "HEIRLOOM DOCUMENTARY",
    desc: "Unobtrusive documentary coverage preserving raw tears, rain-soaked vows, and unscripted pure joy.",
    slug: "/weddings",
    img: "/portfolio/wedding/wedding-01.jpg",
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    title: "EDITORIAL PORTRAITURE",
    subtitle: "CHARACTER & LIGHT",
    desc: "Monochrome character studies and natural light studio mastery stripped of artificial modifiers.",
    slug: "/portraits",
    img: "/portfolio/portrait/portrait-01.jpg",
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    title: "COMMERCIAL & BRAND SUITE",
    subtitle: "ARCHITECTURE & LOOKBOOKS",
    desc: "High-impact luxury interior architecture, hotel lookbooks, and brand narratives for global campaigns.",
    slug: "/commercial",
    img: "/portfolio/commercial/commercial-01.jpg",
    span: "col-span-12 lg:col-span-8",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPlate, setSelectedPlate] = useState<StudioPlate | null>(null);

  const filteredPlates =
    activeFilter === "all"
      ? masterPlates
      : masterPlates.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F3F4F6] selection:bg-amber-400 selection:text-black font-sans overflow-x-hidden">
      
      {/* =========================================================================
          AMBIENT OBSIDIAN & GOLD RADIAL STUDIO LIGHTING (Atmosphere Engine)
          ========================================================================= */}
      <div className="pointer-events-none fixed top-0 left-1/4 w-[800px] h-[800px] bg-amber-500/[0.05] rounded-full blur-[160px] -z-10" />
      <div className="pointer-events-none fixed top-1/3 right-10 w-[700px] h-[700px] bg-rose-600/[0.04] rounded-full blur-[180px] -z-10" />
      <div className="pointer-events-none fixed bottom-10 left-1/3 w-[900px] h-[900px] bg-amber-500/[0.03] rounded-full blur-[200px] -z-10" />

      {/* =========================================================================
          FLOATING GLASS STUDIO NAVIGATION PILL (Sticky Top Header)
          ========================================================================= */}
      <header className="sticky top-6 inset-x-0 z-50 px-6 md:px-12 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-neutral-900/85 backdrop-blur-2xl border border-white/12 rounded-full px-6 py-3.5 md:px-8 max-w-5xl w-full flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Link href="/" className="group flex items-center gap-3.5 cursor-pointer">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)] animate-pulse" />
            <span className="text-base sm:text-lg font-extrabold tracking-tight uppercase text-white group-hover:text-amber-400 transition-colors">
              MAINZ MEDIA
            </span>
            <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-[0.2em] text-amber-300/80 uppercase">
              STUDIO PRODUCTION SUITE
            </span>
          </Link>

          <div className="flex items-center gap-6 md:gap-8 font-mono text-xs font-bold uppercase tracking-widest">
            <Link href="#showroom" className="text-gray-300 hover:text-amber-400 transition-colors hidden sm:inline">
              ✦ SHOWROOM
            </Link>
            <Link href="#bento" className="text-gray-300 hover:text-amber-400 transition-colors hidden md:inline">
              ✦ DISCIPLINES
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-amber-400 transition-colors">
              RATES
            </Link>
            <Link
              href="/booking"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            >
              BOOK SUITE →
            </Link>
          </div>
        </nav>
      </header>

      {/* =========================================================================
          HERO STAGE: THE OBSIDIAN & GOLD CINEMA SUITE (No more split monograph text!)
          ========================================================================= */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-white/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Titanium/Gold Typography & Studio CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono tracking-[0.24em] uppercase w-fit mb-6 shadow-sm">
              <span>✦ EST. 2023 · KUALA LUMPUR · PRODUCTION ARCHIVES</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-extrabold tracking-tight bg-gradient-to-br from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent leading-[0.85]">
              CINEMATIC EMOTION.
              <br />
              IMMORTALIZED IN LIGHT.
            </h1>

            <p className="mt-8 text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-xl">
              Malaysia’s premier production studio for unscripted weddings, automotive engineering, and intimate editorial portraiture. We distill fleeting human seconds into timeless physical masterpieces.
            </p>

            {/* High-Impact Glass/Gold Studio CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-extrabold text-xs uppercase tracking-[0.24em] px-8 py-5 rounded-full shadow-[0_10px_35px_rgba(251,191,36,0.35)] hover:scale-105 transition-transform"
              >
                <span>✦ EXPLORE RATE CARD (FROM RM 450)</span>
                <span>→</span>
              </Link>
              <Link
                href="#showroom"
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-xs uppercase tracking-[0.24em] px-8 py-5 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <span>VIEW MASTER SHOWROOM</span>
                <span>↓</span>
              </Link>
            </div>

            {/* Live Studio Telemetry Bar */}
            <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">01 /</span>
                <span>4+ YEARS STUDIO MASTERY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">02 /</span>
                <span>200+ CURATED COMMISSIONS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">03 /</span>
                <span>100% RAW EMULSION PURITY</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Glass Master Pedestal (`portrait-04.jpg` + Maindhaa Overlay) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-transparent p-3 shadow-[0_40px_100px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/portfolio/portrait/portrait-04.jpg"
                  alt="Maindhaa — Lead Director of Photography"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Top Gold Corner Tag */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  ✦ DIRECTOR OF PHOTOGRAPHY
                </div>

                {/* Bottom Interactive Pedestal Info */}
                <div className="absolute bottom-4 inset-x-4 bg-neutral-900/90 backdrop-blur-xl border border-white/15 rounded-xl p-4 text-left">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <span>MAINDHAA — LEAD ARTIST</span>
                    <span className="text-amber-400">85MM f/1.4</span>
                  </div>
                  <div className="mt-1 text-sm font-bold text-white uppercase tracking-wider font-sans">
                    FIG. 01 — THE ARTIST IN SILENCE
                  </div>
                  <div className="mt-2 text-[10px] text-gray-300 font-mono tracking-wide">
                    Kuala Lumpur Studio · Available for Private Commissions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE CURATED SHOWROOM (Glassmorphic Filterable Grid & Lightbox)
          ========================================================================= */}
      <section id="showroom" className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 font-mono text-xs uppercase tracking-[0.24em] mb-4">
              <span>✦ CURATED EXHIBITION SUITE</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white">
              THE MASTER
              <br />
              SHOWROOM.
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mt-8 md:mt-0 font-mono text-xs font-bold uppercase tracking-widest">
            {[
              { id: "all", label: "✦ ALL REELS" },
              { id: "automotive", label: "AUTOMOTIVE" },
              { id: "weddings", label: "WEDDINGS" },
              { id: "portraits", label: "PORTRAITS" },
              { id: "commercial", label: "COMMERCIAL" },
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setActiveFilter(pill.id)}
                className={`px-5 py-2.5 rounded-full transition-all cursor-pointer border ${
                  activeFilter === pill.id
                    ? "bg-amber-400 text-black border-amber-400 font-extrabold shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                    : "bg-neutral-900/80 text-gray-300 border-white/12 hover:border-amber-400/60 hover:text-white"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Showroom Grid (`Rounded Glass Cards`) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredPlates.map((plate, index) => {
              const isWide = index === 0 || index === 3 || index === 4;
              const spanClass = isWide ? "md:col-span-7" : "md:col-span-5";
              const aspectClass = isWide ? "aspect-[16/10]" : "aspect-[4/5]";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                  key={plate.id}
                  onClick={() => setSelectedPlate(plate)}
                  className={`${spanClass} rounded-2xl border border-white/12 bg-neutral-900/60 backdrop-blur-xl overflow-hidden shadow-2xl group cursor-pointer flex flex-col justify-between p-3 transition-all hover:border-amber-400/50`}
                >
                  <div className={`relative ${aspectClass} w-full rounded-xl overflow-hidden bg-black`}>
                    <Image
                      src={plate.src}
                      alt={plate.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Top Specs Pill */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/15 text-white font-mono text-[9px] px-3 py-1 rounded-full uppercase tracking-widest">
                      {plate.specs}
                    </div>

                    {/* Center Inspect Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform">
                        ✦ INSPECT MASTER PLATE
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Info */}
                  <div className="pt-4 px-2 pb-2 flex justify-between items-baseline">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-sans group-hover:text-amber-400 transition-colors">
                        {plate.title}
                      </h3>
                      <div className="mt-0.5 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        {plate.category.toUpperCase()} SERIES · {plate.location}
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-400">
                      [{plate.year}]
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =========================================================================
          SECTION 3: THE FOUR ARCHITECTURAL DISCIPLINES (Apple Pro Bento Grid)
          ========================================================================= */}
      <section id="bento" className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 font-mono text-xs uppercase tracking-[0.24em] mb-4">
              <span>✦ CORE PRODUCTION PILLARS</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white">
              ARCHITECTURAL
              <br />
              DISCIPLINES.
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-md text-sm text-gray-400 leading-relaxed font-normal">
            Every photograph is engineered as a physical cinema plate. Select any architectural discipline below to explore dedicated monographs.
          </p>
        </div>

        {/* Luxury Glass Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[340px]">
          {bentoDisciplines.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={`${item.span} rounded-3xl border border-white/15 bg-neutral-900/80 backdrop-blur-2xl relative overflow-hidden group p-8 sm:p-10 flex flex-col justify-end transition-all hover:border-amber-400/60 shadow-2xl cursor-pointer`}
            >
              {/* Background Plate with smooth scale & overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-45 group-hover:opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              </div>

              {/* Bento Content */}
              <div className="relative z-10 flex flex-col justify-end">
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-amber-400 mb-2">
                  ✦ {item.subtitle}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg font-normal">
                  {item.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-white/15 flex justify-between items-center font-mono text-xs font-bold uppercase tracking-widest text-white">
                  <span>EXPLORE {item.title}</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-amber-400 group-hover:text-black transition-all flex items-center justify-center font-bold">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE GLASS COMMISSION CONSOLE (Commanding Booking Finale)
          ========================================================================= */}
      <section className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-black p-10 sm:p-16 md:p-24 text-center relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
          {/* Ambient Gold Console Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.08] rounded-full blur-[140px]" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono text-xs uppercase tracking-[0.24em] mb-8">
            <span>✦ 2025/2026 PRIVATE COMMISSIONS NOW OPEN</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-[0.88] max-w-4xl mx-auto">
            READY TO IMMORTALIZE
            <br />
            YOUR LEGACY?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Whether for a sacred wedding celebration, architectural brand lookbook, or twilight automotive session, rates are structured with total transparency and zero hidden modifiers.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-extrabold text-xs uppercase tracking-[0.24em] shadow-[0_10px_35px_rgba(251,191,36,0.35)] hover:scale-105 transition-transform"
            >
              ✦ VIEW COMMISSION RATES (FROM RM 450)
            </Link>
            <Link
              href="/booking"
              className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-xs uppercase tracking-[0.24em] hover:bg-white hover:text-black transition-all"
            >
              LAUNCH BOOKING CONSOLE →
            </Link>
          </div>

          {/* Direct Luxury Contacts Block */}
          <div className="mt-16 pt-10 border-t border-white/15 flex flex-wrap justify-center gap-x-12 gap-y-4 font-mono text-xs uppercase tracking-widest text-gray-400">
            <span>✦ WHATSAPP: +60 16-322 8337</span>
            <span>✦ INSTAGRAM: @MAINZ.MEDIA</span>
            <span>✦ EMAIL: MAINDHA@GMAIL.COM</span>
          </div>
        </div>

        {/* Studio Bottom Rule */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-[0.24em] text-gray-500">
          <span>MAINZ MEDIA — KUALA LUMPUR, MALAYSIA</span>
          <span>THE OBSIDIAN &amp; GOLD MASTER PRODUCTION SUITE 2025</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </section>

      {/* =========================================================================
          FULL-SCREEN OPTICAL TELEMETRY LIGHTBOX (Museum Inspection Console)
          ========================================================================= */}
      <AnimatePresence>
        {selectedPlate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlate(null)}
            className="fixed inset-0 z-50 bg-black/94 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 md:p-14 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] bg-neutral-900 border border-white/20 flex flex-col overflow-hidden shadow-2xl cursor-default rounded-3xl"
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/15 bg-black/60 font-mono text-xs uppercase tracking-widest">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold">
                  <span>✦ ARCHIVAL MASTER PLATE</span>
                  <span className="text-gray-400">| {selectedPlate.category.toUpperCase()} SERIES</span>
                </div>
                <button
                  onClick={() => setSelectedPlate(null)}
                  className="text-gray-400 hover:text-white font-bold transition-colors cursor-pointer"
                >
                  [ CLOSE VIEWFINDER × ]
                </button>
              </div>

              {/* Photograph Display */}
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedPlate.src}
                  alt={selectedPlate.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Specs & Description Footer */}
              <div className="p-6 bg-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-white/15 text-xs">
                <div className="md:col-span-6">
                  <div className="text-amber-400 font-mono text-[10px] font-bold uppercase tracking-widest">PLATE TITLE &amp; LOCATION</div>
                  <div className="mt-1 text-lg font-bold text-white tracking-wide">{selectedPlate.title}</div>
                  <div className="text-gray-400 mt-1">{selectedPlate.location} · {selectedPlate.year}</div>
                  <p className="mt-3 text-gray-300 text-xs leading-relaxed font-normal">{selectedPlate.desc}</p>
                </div>
                <div className="md:col-span-3 font-mono">
                  <div className="text-amber-400 text-[10px] font-bold uppercase tracking-widest">EXPOSURE SPECS</div>
                  <div className="mt-2 text-white font-bold">{selectedPlate.specs}</div>
                </div>
                <div className="md:col-span-3 flex items-center justify-end">
                  <Link
                    href={`/booking?plate=${selectedPlate.id}`}
                    onClick={() => setSelectedPlate(null)}
                    className="w-full text-center bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-4 font-mono font-extrabold uppercase tracking-widest hover:scale-105 transition-transform rounded-xl shadow-lg"
                  >
                    INQUIRE THIS STYLE →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
