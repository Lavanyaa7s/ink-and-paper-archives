"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";

interface ArchivalPlate {
  id: string;
  title: string;
  category: "automotive" | "portraits" | "weddings" | "commercial";
  location: string;
  year: string;
  src: string;
  specs: string;
  desc: string;
}

const masterPlates: ArchivalPlate[] = [
  {
    id: "auto-plate-01",
    title: "TWILIGHT CIRCUIT SYMMETRY",
    category: "automotive",
    location: "SEPANG INTERNATIONAL CIRCUIT, MY",
    year: "2024",
    src: "/portfolio/automotive/automotive-01.jpg",
    specs: "35MM ANAMORPHIC · f/1.4 · 1/2000s · ISO 100",
    desc: "Precision twilight documentation capturing the raw aerodynamic curves and dusk reflections of high-performance engineering under circuit floodlights.",
  },
  {
    id: "portrait-plate-01",
    title: "MONOCHROME CHARACTER STUDY",
    category: "portraits",
    location: "KUALA LUMPUR STUDIO, MY",
    year: "2024",
    src: "/portfolio/portrait/portrait-01.jpg",
    specs: "85MM CINEMA PRIME · f/1.8 · 1/500s · ISO 200",
    desc: "A quiet, unscripted studio study where natural side-lighting sculpts the subject's authentic expression with zero forced posing or artificial flash.",
  },
  {
    id: "wedding-plate-01",
    title: "RAIN-SOAKED SACRED VOWS",
    category: "weddings",
    location: "PENANG HERITAGE HALL, MY",
    year: "2024",
    src: "/portfolio/wedding/wedding-01.jpg",
    specs: "50MM LEICA M · f/1.2 · 1/1000s · ISO 160",
    desc: "Pure documentary coverage of a rain-drenched ceremony in George Town, where every teardrop and embrace is preserved with heirloom silver-halide warmth.",
  },
  {
    id: "commercial-plate-01",
    title: "ARCHITECTURAL MINIMALISM",
    category: "commercial",
    location: "BUKIT BINTANG LUXURY SUITE, MY",
    year: "2024",
    src: "/portfolio/commercial/commercial-01.jpg",
    specs: "24MM TILT-SHIFT · f/8.0 · 1/125s · ISO 100",
    desc: "High-end commercial interior study emphasizing geometric shadow lines, bespoke textures, and architectural grandeur for international brand lookbooks.",
  },
  {
    id: "auto-plate-02",
    title: "MIDNIGHT GARAGE CHRONICLES",
    category: "automotive",
    location: "PETALING JAYA WORKSHOP, MY",
    year: "2024",
    src: "/portfolio/automotive/automotive-02.jpg",
    specs: "50MM PRIME · f/1.4 · 1/500s · ISO 400",
    desc: "An intimate documentation of mechanical restoration at 2 AM, capturing the glow of welding sparks and precision metalcraft.",
  },
  {
    id: "portrait-plate-02",
    title: "THE SILENT OBSERVER",
    category: "portraits",
    location: "BANGSAR SOUTH STUDIO, MY",
    year: "2024",
    src: "/portfolio/portrait/portrait-02.jpg",
    specs: "105MM TELEPHOTO · f/2.0 · 1/800s · ISO 100",
    desc: "Deep atmospheric shadow play isolating the quietest moment between spoken words.",
  },
];

const disciplinesAccordion = [
  {
    num: "01",
    title: "AUTOMOTIVE SERIES",
    subtitle: "MACHINE & CIRCUIT",
    desc: "High-speed circuit documentation, precision rig lighting, & twilight machine portraits developed for large-format print monographs.",
    slug: "/automotive",
    img: "/portfolio/automotive/automotive-01.jpg",
    specs: "35MM ANAMORPHIC · f/1.4",
  },
  {
    num: "02",
    title: "EDITORIAL PORTRAITS",
    subtitle: "CHARACTER & LIGHT",
    desc: "Intimate character studies & natural light monochrome plates stripped of artificial flash and forced posing.",
    slug: "/portraits",
    img: "/portfolio/portrait/portrait-01.jpg",
    specs: "85MM CINEMA PRIME · f/1.8",
  },
  {
    num: "03",
    title: "WEDDING MONOGRAPH",
    subtitle: "UNSCRIPTED DOCUMENTARY",
    desc: "Unobtrusive documentary coverage of rain-soaked vows, quiet tears, & pure celebration preserved with timeless heirloom resonance.",
    slug: "/weddings",
    img: "/portfolio/wedding/wedding-01.jpg",
    specs: "50MM LEICA M · f/1.2",
  },
  {
    num: "04",
    title: "NEWBORN & FAMILIAL",
    subtitle: "HEIRLOOM MILESTONES",
    desc: "Quiet, unhurried documentation of baby and parents in the organic comfort of home. Pure natural light and heartfelt warmth.",
    slug: "/newborn",
    img: "/portfolio/newborn/newborn-01.jpg",
    specs: "35MM PRIME · f/2.0",
  },
  {
    num: "05",
    title: "COMMERCIAL & BRAND",
    subtitle: "ARCHITECTURE & STORY",
    desc: "Bespoke architectural interiors, luxury fashion lookbooks, and high-impact brand narratives engineered for international campaigns.",
    slug: "/commercial",
    img: "/portfolio/commercial/commercial-01.jpg",
    specs: "24MM TILT-SHIFT · f/8.0",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"archival" | "darkroom">("archival");
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPlate, setSelectedPlate] = useState<ArchivalPlate | null>(null);
  const [hoveredWordImg, setHoveredWordImg] = useState<string | null>(null);

  // Interactive 3D Parallax Mouse Tracking on the Cover Spread
  const coverContainerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const tiltX = useTransform(springY, [-300, 300], [8, -8]);
  const tiltY = useTransform(springX, [-300, 300], [-8, 8]);
  const parallaxLeft = useTransform(springX, [-300, 300], [-25, 25]);
  const parallaxRight = useTransform(springX, [-300, 300], [25, -25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!coverContainerRef.current) return;
    const rect = coverContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const filteredPlates =
    activeFilter === "all"
      ? masterPlates
      : masterPlates.filter((p) => p.category === activeFilter);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-700 select-none font-sans overflow-x-hidden ${
        theme === "archival"
          ? "bg-[#FAFAF7] text-[#111111] selection:bg-[#111111] selection:text-[#FAFAF7]"
          : "bg-[#0B0B0B] text-[#FAFAF7] selection:bg-[#FAFAF7] selection:text-[#0B0B0B]"
      }`}
    >
      {/* =========================================================================
          ATMOSPHERE & NAVIGATION COMMAND BAR (Sticky Luxury Top Header)
          ========================================================================= */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-700 px-6 py-4 md:px-16 ${
          theme === "archival"
            ? "bg-[#FAFAF7]/90 border-[#111111]/12"
            : "bg-[#0B0B0B]/90 border-[#FAFAF7]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-4 cursor-pointer">
            <span className="display text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:opacity-75 transition-opacity">
              MAINZ MEDIA
            </span>
            <span className="hidden sm:inline-block h-3 w-px bg-current opacity-20" />
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.24em] opacity-60">
              KUALA LUMPUR · ARCHIVAL MONOGRAPH
            </span>
          </Link>

          <div className="flex items-center gap-6 sm:gap-8 text-xs font-bold uppercase tracking-[0.22em]">
            {/* Theme Toggle Button (`Archival White` vs `Darkroom Black`) */}
            <button
              onClick={() => setTheme(theme === "archival" ? "darkroom" : "archival")}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-current/20 hover:border-current transition-all text-[10px] cursor-pointer"
              title="Toggle Day/Night Darkroom Atmosphere"
            >
              <span className={`h-2 w-2 rounded-full ${theme === "archival" ? "bg-amber-500" : "bg-rose-500 animate-pulse"}`} />
              <span className="hidden sm:inline">{theme === "archival" ? "STUDIO DAY" : "CELLULOID NIGHT"}</span>
            </button>

            <Link href="#philosophy" className="opacity-70 hover:opacity-100 transition-opacity hidden md:inline">
              PHILOSOPHY
            </Link>
            <Link href="#exhibition" className="opacity-70 hover:opacity-100 transition-opacity hidden sm:inline">
              COLLECTION
            </Link>
            <Link href="/pricing" className="opacity-70 hover:opacity-100 transition-opacity">
              COMMISSIONS
            </Link>
            <Link
              href="/booking"
              className={`px-5 py-2.5 transition-all text-[11px] font-bold tracking-widest ${
                theme === "archival"
                  ? "bg-[#111111] text-[#FAFAF7] hover:bg-[#444444]"
                  : "bg-[#FAFAF7] text-[#111111] hover:bg-[#CCCCCC]"
              }`}
            >
              BOOK SESSION →
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SPREAD 01: THE 3D PARALLAX MONOGRAPH COVER (PORT / Silhouette / FOLIO)
          Interactive Depth + Free-Standing Cutout Overlap (input_file_1.png)
          ========================================================================= */}
      <section
        ref={coverContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="min-h-[88vh] flex flex-col justify-between pt-12 pb-20 px-6 md:px-16 max-w-7xl mx-auto border-b border-current/15 relative overflow-visible"
      >
        {/* Top Archival Metadata Slate */}
        <div className="flex justify-between items-start text-xs font-bold uppercase tracking-[0.26em] opacity-60">
          <span>VOLUME 01 — CURATED MASTER PLATES</span>
          <span>EST. 2023 · MALAYSIA</span>
        </div>

        {/* 3D Interactive Cover Grid (`PORT` + `Cutout Figure` + `FOLIO`) */}
        <motion.div
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          className="my-10 md:my-16 flex items-center justify-center relative w-full perspective-[1200px]"
        >
          {/* Left Wing: PORT (`Parallax Shift Left`) */}
          <motion.div
            style={{ x: parallaxLeft }}
            className="z-10 text-right flex-1 min-w-0 pr-1 sm:pr-2 md:pr-4"
          >
            <h1 className="display text-[18vw] md:text-[13rem] lg:text-[16rem] leading-[0.76] font-bold tracking-tight">
              PORT
            </h1>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] opacity-60 mt-3 pr-1">
              CINEMATIC
            </div>
          </motion.div>

          {/* Center Cutout Silhouette (`Maindhaa` — 3D Lifted `z-20`) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="z-20 relative flex-shrink-0 w-[64vw] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] -mx-8 sm:-mx-16 md:-mx-24 drop-shadow-[0_45px_70px_rgba(0,0,0,0.32)] pointer-events-auto group"
          >
            {/* Museum registration marks framing the cutout */}
            <div className="absolute -top-3 -left-3 z-30 font-mono text-xs opacity-40">+</div>
            <div className="absolute -top-3 -right-3 z-30 font-mono text-xs opacity-40">+</div>
            <div className="absolute -bottom-3 -left-3 z-30 font-mono text-xs opacity-40">+</div>
            <div className="absolute -bottom-3 -right-3 z-30 font-mono text-xs opacity-40">+</div>

            <Image
              src="/portfolio/photographer/maindhaa.png"
              alt="Maindhaa — Lead Photographer Cutout Silhouette"
              fill
              className="object-contain grayscale contrast-110 transition-transform duration-700"
              priority
            />

            {/* Interactive Badge on Hover */}
            <div className="absolute -bottom-6 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] bg-current text-background rounded-full shadow-lg">
                LEAD DIRECTOR · KUALA LUMPUR
              </span>
            </div>
          </motion.div>

          {/* Right Wing: FOLIO (`Parallax Shift Right`) */}
          <motion.div
            style={{ x: parallaxRight }}
            className="z-10 text-left flex-1 min-w-0 pl-1 sm:pl-2 md:pl-4"
          >
            <h1 className="display text-[18vw] md:text-[13rem] lg:text-[16rem] leading-[0.76] font-bold tracking-tight">
              FOLIO
            </h1>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] opacity-60 mt-3 pl-1">
              PHOTOGRAPHER
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Ticker & Scroll Prompt */}
        <div className="pt-6 border-t border-current/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.26em]">
          <span className="opacity-60">MAINZ MEDIA — ALL MASTER PLATES DEVELOPED WITHOUT ARTIFICIAL MODIFIERS</span>
          <span className="animate-bounce font-extrabold text-rose-500">↓ SCROLL TO ENTER ARCHIVE ↓</span>
        </div>
      </section>

      {/* =========================================================================
          SPREAD 02: THE INTERACTIVE PHILOSOPHY CURTAIN (Hover-Activated Snapshots)
          ========================================================================= */}
      <section id="philosophy" className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-current/15 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Left Column: Master Portrait Plate with Smooth Curtain Wipe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative group"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-current/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.22)]">
              <Image
                src="/portfolio/portrait/portrait-04.jpg"
                alt="Maindhaa Artist Study"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-[0.24em] opacity-70">
              <span>FIG. 01 — THE ARTIST IN SILENCE</span>
              <span>85MM f/1.8</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Statement with Floating Snapshot Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 flex flex-col justify-center text-left pl-0 md:pl-8 relative"
          >
            <div className="text-xs font-bold uppercase tracking-[0.26em] opacity-60">
              SPREAD 02 · INTENTIONAL DISTILLATION
            </div>

            <h2 className="mt-4 display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.86]">
              PRESERVING THE EXACT
              <br />
              RESONANCE OF THE MOMENT.
            </h2>

            <div className="mt-8 h-px w-24 bg-current opacity-30" />

            {/* Interactive Quote (Hover highlighted terms to trigger floating plate) */}
            <blockquote className="mt-8 text-2xl sm:text-3xl font-light italic leading-relaxed tracking-wide">
              &ldquo;We do not capture what you look like; we preserve the exact{" "}
              <span
                onMouseEnter={() => setHoveredWordImg("/portfolio/wedding/wedding-01.jpg")}
                onMouseLeave={() => setHoveredWordImg(null)}
                className="underline decoration-rose-500 underline-offset-8 font-normal not-italic cursor-pointer transition-colors hover:text-rose-500"
              >
                resonance
              </span>{" "}
              of how the moment felt when the world stopped watching.&rdquo;
            </blockquote>

            <p className="mt-6 text-sm sm:text-base leading-relaxed opacity-75 font-normal">
              Based in Malaysia, Mainz Media approaches photography not as a mechanical recording of events, but as the creation of an enduring physical archive. Through{" "}
              <span
                onMouseEnter={() => setHoveredWordImg("/portfolio/wedding/wedding-01.jpg")}
                onMouseLeave={() => setHoveredWordImg(null)}
                className="font-semibold underline decoration-current/40 underline-offset-4 cursor-pointer hover:opacity-100"
              >
                rain-soaked wedding vows
              </span>{" "}
              and{" "}
              <span
                onMouseEnter={() => setHoveredWordImg("/portfolio/automotive/automotive-01.jpg")}
                onMouseLeave={() => setHoveredWordImg(null)}
                className="font-semibold underline decoration-current/40 underline-offset-4 cursor-pointer hover:opacity-100"
              >
                silent automotive garages at twilight
              </span>
              , every shutter press is an exercise in intentional distillation.
            </p>

            {/* Floating Snapshot Tooltip */}
            <AnimatePresence>
              {hoveredWordImg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 top-1/3 z-40 w-48 sm:w-60 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-2 border-background pointer-events-none hidden sm:block"
                >
                  <Image src={hoveredWordImg} alt="Visual Resonance Preview" fill className="object-cover" />
                  <div className="absolute bottom-1 right-1 bg-black/80 text-white font-mono text-[8px] px-1.5 py-0.5 uppercase tracking-widest">
                    ARCHIVAL PREVIEW
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Archival Metrics Grid */}
            <div className="mt-12 pt-8 border-t border-current/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <div className="display text-4xl sm:text-5xl font-bold">3+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] opacity-60">YEARS EXP.</div>
              </div>
              <div>
                <div className="display text-4xl sm:text-5xl font-bold">200+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] opacity-60">COMMISSIONS</div>
              </div>
              <div>
                <div className="display text-4xl sm:text-5xl font-bold">50+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] opacity-60">CLIENTS</div>
              </div>
              <div>
                <div className="display text-4xl sm:text-5xl font-bold">4</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] opacity-60">COUNTRIES</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SPREAD 03: THE INTERACTIVE EXHIBITION ACCORDION (Horizontal Expand Cards)
          Transforming standard tables into an RM 12,000+ Awwwards Showcase
          ========================================================================= */}
      <section id="exhibition" className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-current/15">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.26em] opacity-60">
              SPREAD 03 · THE MASTER EXHIBITION DECK
            </div>
            <h2 className="mt-4 display text-6xl md:text-8xl font-bold">
              CURATED
              <br />
              DISCIPLINES
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-md text-sm leading-relaxed opacity-70 font-normal">
            Click or hover over any monolithic exhibition column to expand the master plate, inspect lens telemetry, and explore dedicated galleries.
          </p>
        </div>

        {/* Horizontal Expandable Accordion Deck (`Desktop` & `Responsive Stack`) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[620px] w-full">
          {disciplinesAccordion.map((disc, idx) => {
            const isActive = activeAccordion === idx;
            return (
              <motion.div
                key={disc.slug}
                onClick={() => setActiveAccordion(idx)}
                onMouseEnter={() => setActiveAccordion(idx)}
                className={`group relative overflow-hidden rounded-[2px] border border-current/20 cursor-pointer transition-all duration-700 flex flex-col justify-between p-6 sm:p-8 ${
                  isActive
                    ? "lg:flex-[3_3_0%] min-h-[460px] lg:min-h-full"
                    : "lg:flex-[1_1_0%] min-h-[140px] lg:min-h-full hover:border-current"
                }`}
              >
                {/* Background Master Plate */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={disc.img}
                    alt={disc.title}
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      isActive ? "grayscale-0 scale-100 opacity-90" : "grayscale contrast-125 scale-110 opacity-35"
                    }`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                      : "bg-black/75 hover:bg-black/60"
                  }`} />
                </div>

                {/* Top Registration Info */}
                <div className="relative z-10 flex justify-between items-start text-white font-mono text-xs uppercase tracking-[0.22em]">
                  <span className="text-rose-500 font-extrabold display text-2xl">{disc.num}</span>
                  <span className="opacity-80 text-[10px]">{disc.specs}</span>
                </div>

                {/* Bottom Expanded / Collapsed Content */}
                <div className="relative z-10 text-white mt-auto">
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-rose-400">
                    {disc.subtitle}
                  </div>
                  <h3 className="display text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                    {disc.title}
                  </h3>

                  {/* Expanded Narrative & CTA */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg font-normal">
                          {disc.desc}
                        </p>
                        <div className="mt-6">
                          <Link
                            href={disc.slug}
                            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] hover:bg-rose-600 hover:text-white transition-all rounded-[1px]"
                          >
                            <span>EXPLORE {disc.title}</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SPREAD 04: FILTERABLE MASTER GALLERY (Interactive Lightbox System)
          ========================================================================= */}
      <section className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-current/15">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.26em] opacity-60">
              SPREAD 04 · INTERACTIVE MASTER ARCHIVE
            </div>
            <h2 className="mt-4 display text-6xl md:text-8xl font-bold">
              SELECTED
              <br />
              PLATES
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-6 md:mt-0 font-mono text-xs font-bold uppercase tracking-[0.2em]">
            {[
              { id: "all", label: "ALL PLATES" },
              { id: "automotive", label: "AUTOMOTIVE" },
              { id: "portraits", label: "PORTRAITURE" },
              { id: "weddings", label: "WEDDINGS" },
              { id: "commercial", label: "COMMERCIAL" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 border rounded-full transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-current text-background border-current font-extrabold shadow-md"
                    : "border-current/20 opacity-70 hover:opacity-100 hover:border-current"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Filtered Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
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
                  className={`${spanClass} flex flex-col group cursor-pointer`}
                >
                  <div className={`relative ${aspectClass} w-full overflow-hidden border border-current/15 shadow-lg group-hover:shadow-2xl transition-all rounded-[2px]`}>
                    
                    {/* Corner marks */}
                    <div className="absolute top-3 left-3 z-30 font-mono text-xs opacity-40">+</div>
                    <div className="absolute top-3 right-3 z-30 font-mono text-xs opacity-40">+</div>
                    <div className="absolute bottom-3 left-3 z-30 font-mono text-xs opacity-40">+</div>
                    <div className="absolute bottom-3 right-3 z-30 font-mono text-xs opacity-40">+</div>

                    <Image
                      src={plate.src}
                      alt={plate.title}
                      fill
                      className="object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] transition-all duration-300 shadow-2xl rounded-full transform translate-y-2 group-hover:translate-y-0">
                        INSPECT MASTER PLATE +
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-baseline text-xs font-bold uppercase tracking-[0.24em]">
                    <span>{plate.title}</span>
                    <span className="opacity-60 text-[10px]">{plate.year}</span>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-60 mt-1">
                    {plate.category.toUpperCase()} · {plate.specs}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =========================================================================
          SPREAD 05: MAGNETIC COMMISSION FINALE (Interactive Command Center)
          ========================================================================= */}
      <section className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="text-xs font-bold uppercase tracking-[0.26em] opacity-60">
              SPREAD 05 · PRIVATE COMMISSIONS &amp; PRODUCTION
            </div>
            <h2 className="mt-4 display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.82]">
              LET&apos;S CREATE
              <br />
              SOMETHING
              <br />
              TIMELESS.
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.24em] opacity-70">
              <span>WHATSAPP (+60 16-322 8337)</span>
              <span>INSTAGRAM (@MAINZ.MEDIA)</span>
              <span>EMAIL (MAINDHA@GMAIL.COM)</span>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6 md:items-end justify-end">
            <Link
              href="/pricing"
              className="w-full sm:w-auto md:w-full inline-flex items-center justify-between border border-current px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] transition-all hover:bg-current hover:text-background cursor-pointer rounded-[2px]"
            >
              <span>VIEW COMMISSION RATES</span>
              <span>→</span>
            </Link>
            <Link
              href="/booking"
              className={`w-full sm:w-auto md:w-full inline-flex items-center justify-between px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] transition-all cursor-pointer rounded-[2px] ${
                theme === "archival"
                  ? "bg-[#111111] text-[#FAFAF7] hover:bg-rose-600"
                  : "bg-[#FAFAF7] text-[#111111] hover:bg-rose-500 hover:text-white"
              }`}
            >
              <span>BOOK YOUR SESSION</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Architectural Bottom Rule */}
        <div className="mt-24 pt-12 border-t border-current/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.26em] opacity-60">
          <span>MAINZ MEDIA — MALAYSIA</span>
          <span>CURATED ARCHITECTURAL PHOTOGRAPHY 2025</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE OPTICAL LIGHTBOX OVERLAY (Museum Telemetry & Inspection)
          ========================================================================= */}
      <AnimatePresence>
        {selectedPlate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlate(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 md:p-14 cursor-zoom-out text-white"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] bg-[#111111] border border-white/20 flex flex-col overflow-hidden shadow-2xl cursor-default rounded-[2px]"
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/15 bg-black/60">
                <div className="text-xs font-bold uppercase tracking-[0.24em]">
                  ARCHIVAL PLATE · {selectedPlate.category.toUpperCase()} SERIES
                </div>
                <button
                  onClick={() => setSelectedPlate(null)}
                  className="text-xs font-bold uppercase tracking-[0.24em] text-rose-500 hover:text-white transition-colors cursor-pointer"
                >
                  [ CLOSE VIEWFINDER × ]
                </button>
              </div>

              {/* High-Resolution Photograph Display */}
              <div className="relative aspect-[16/10] w-full bg-black">
                {/* Optical registration marks */}
                <div className="absolute top-4 left-4 z-30 font-mono text-sm text-white/60">+</div>
                <div className="absolute top-4 right-4 z-30 font-mono text-sm text-white/60">+</div>
                <div className="absolute bottom-4 left-4 z-30 font-mono text-sm text-white/60">+</div>
                <div className="absolute bottom-4 right-4 z-30 font-mono text-sm text-white/60">+</div>

                <Image
                  src={selectedPlate.src}
                  alt={selectedPlate.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Comprehensive Exposure & Story Footer */}
              <div className="p-6 bg-[#161616] grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-white/15 text-xs">
                <div className="md:col-span-5">
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.24em]">PLATE TITLE</div>
                  <div className="mt-1 text-base font-bold display tracking-wide">{selectedPlate.title}</div>
                  <div className="text-gray-400 mt-1 uppercase tracking-wider">{selectedPlate.location} · {selectedPlate.year}</div>
                </div>
                <div className="md:col-span-4">
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.24em]">EXPOSURE &amp; LENS SPECS</div>
                  <div className="mt-1 font-mono text-rose-400 font-bold">{selectedPlate.specs}</div>
                </div>
                <div className="md:col-span-3 flex items-center justify-end">
                  <Link
                    href={`/booking?plate=${selectedPlate.id}`}
                    onClick={() => setSelectedPlate(null)}
                    className="w-full text-center bg-white text-black px-5 py-3 font-bold uppercase tracking-[0.2em] hover:bg-rose-600 hover:text-white transition-colors rounded-[1px]"
                  >
                    INQUIRE SIMILAR →
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
