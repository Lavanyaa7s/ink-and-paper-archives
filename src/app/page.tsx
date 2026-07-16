"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

interface ArchivalPlate {
  id: string;
  title: string;
  discipline: string;
  location: string;
  year: string;
  src: string;
  specs: string;
  timecode: string;
}

const highlightPlates: ArchivalPlate[] = [
  {
    id: "auto-plate-01",
    title: "TWILIGHT CIRCUIT SYMMETRY",
    discipline: "AUTOMOTIVE SERIES",
    location: "SEPANG INTERNATIONAL CIRCUIT, MY",
    year: "2024",
    src: "/portfolio/automotive/automotive-01.jpg",
    specs: "35MM ANAMORPHIC · f/1.4 · 1/2000s · ISO 100",
    timecode: "00:14:23:18",
  },
  {
    id: "portrait-plate-01",
    title: "MONOCHROME CHARACTER STUDY",
    discipline: "EDITORIAL PORTRAITS",
    location: "KUALA LUMPUR STUDIO, MY",
    year: "2024",
    src: "/portfolio/portrait/portrait-01.jpg",
    specs: "85MM CINEMA PRIME · f/1.8 · 1/500s · ISO 200",
    timecode: "00:42:15:04",
  },
  {
    id: "wedding-plate-01",
    title: "RAIN-SOAKED SACRED VOWS",
    discipline: "WEDDING MONOGRAPH",
    location: "PENANG HERITAGE HALL, MY",
    year: "2024",
    src: "/portfolio/wedding/wedding-01.jpg",
    specs: "50MM LEICA M · f/1.2 · 1/1000s · ISO 160",
    timecode: "01:12:08:22",
  },
  {
    id: "commercial-plate-01",
    title: "ARCHITECTURAL MINIMALISM",
    discipline: "COMMERCIAL & BRAND",
    location: "BUKIT BINTANG LUXURY SUITE, MY",
    year: "2024",
    src: "/portfolio/commercial/commercial-01.jpg",
    specs: "24MM TILT-SHIFT · f/8.0 · 1/125s · ISO 100",
    timecode: "01:45:50:11",
  },
];

const disciplines = [
  {
    num: "01",
    title: "AUTOMOTIVE SERIES",
    desc: "High-speed circuit documentation & twilight machine portraits.",
    slug: "/automotive",
    img: "/portfolio/automotive/automotive-01.jpg",
    lens: "35MM ANAMORPHIC · f/1.4",
  },
  {
    num: "02",
    title: "EDITORIAL PORTRAITS",
    desc: "Intimate character studies & natural light monochrome plates.",
    slug: "/portraits",
    img: "/portfolio/portrait/portrait-01.jpg",
    lens: "85MM CINEMA PRIME · f/1.8",
  },
  {
    num: "03",
    title: "WEDDING MONOGRAPH",
    desc: "Unscripted documentary coverage of rain-soaked vows & pure joy.",
    slug: "/weddings",
    img: "/portfolio/wedding/wedding-01.jpg",
    lens: "50MM LEICA M · f/1.2",
  },
  {
    num: "04",
    title: "EVENTS & NEWBORN",
    desc: "Organic in-home documentation & unhurried familial milestones.",
    slug: "/newborn",
    img: "/portfolio/newborn/newborn-01.jpg",
    lens: "35MM PRIME · f/2.0",
  },
  {
    num: "05",
    title: "COMMERCIAL & BRAND",
    desc: "Architectural interiors, luxury lookbooks, & brand narratives.",
    slug: "/commercial",
    img: "/portfolio/commercial/commercial-01.jpg",
    lens: "24MM TILT-SHIFT · f/8.0",
  },
];

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [selectedPlate, setSelectedPlate] = useState<ArchivalPlate | null>(null);
  const [timecode, setTimecode] = useState("00:00:00:00");

  // Live SMPTE Timecode Counter effect for authentic cinema camera HUD
  useEffect(() => {
    let seconds = 0;
    const interval = setInterval(() => {
      seconds++;
      const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
      const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      const frames = Math.floor(Math.random() * 24).toString().padStart(2, "0");
      setTimecode(`${hrs}:${mins}:${secs}:${frames}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAF7] text-[#111111] selection:bg-[#111111] selection:text-[#FAFAF7] font-sans">
      
      {/* =========================================================================
          DIRECTOR'S VIEWFINDER TOP HUD (Live SMPTE Timecode & Optical Telemetry)
          ========================================================================= */}
      <header className="sticky top-0 z-40 w-full bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#111111]/15 px-6 py-4 md:px-16 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: REC Status & Live Timecode */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] text-[#111111]">
              <span className="flex items-center gap-2 px-2.5 py-1 bg-[#111111] text-[#FAFAF7] rounded-[2px] text-[10px]">
                <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse inline-block" />
                <span>REC</span>
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#111111]">
                [{timecode}]
              </span>
            </Link>
            <span className="hidden lg:inline-block h-3 w-px bg-[#111111]/20" />
            <span className="hidden lg:inline-block hud-text">
              MAINZ MEDIA · 35MM ANAMORPHIC
            </span>
          </div>

          {/* Center: Director Slate Label */}
          <div className="hidden xl:block font-mono text-[11px] font-semibold tracking-[0.28em] uppercase text-[#666666]">
            SCENE SLATE: MASTER MONOGRAPH 2025
          </div>

          {/* Right: Screenplay Navigation HUD */}
          <nav className="flex items-center gap-6 md:gap-8 font-mono text-xs font-bold uppercase tracking-[0.22em]">
            <Link href="#about" className="text-[#666666] hover:text-[#111111] transition-colors hidden md:inline">
              [ ACT I: SCRIPT ]
            </Link>
            <Link href="#disciplines" className="text-[#666666] hover:text-[#111111] transition-colors hidden sm:inline">
              [ ACT II: COLLECTION ]
            </Link>
            <Link href="/pricing" className="text-[#111111] hover:opacity-75 transition-opacity">
              [ COMMISSIONS ]
            </Link>
            <Link
              href="/booking"
              className="bg-[#111111] text-[#FAFAF7] px-4 py-2 hover:bg-rose-600 transition-colors rounded-[2px] font-mono text-[11px] tracking-widest"
            >
              BOOK CUT →
            </Link>
          </nav>
        </div>
      </header>

      {/* =========================================================================
          SCENE 01: THE MONOGRAPH COVER (EXT. KUALA LUMPUR — GOLDEN HOUR [00:00:00:00])
          Optical Viewfinder Framing + Free-Standing Cutout Silhouette
          ========================================================================= */}
      <section className="min-h-[88vh] flex flex-col justify-between pt-8 pb-16 px-6 md:px-16 max-w-7xl mx-auto border-b border-[#111111]/15 select-none relative overflow-visible">
        
        {/* Screenplay Scene Heading (Slugline) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#111111]/10 pb-4">
          <div className="slugline text-left flex items-center gap-3">
            <span className="text-rose-600 font-bold">SCENE 01</span>
            <span>—</span>
            <span>INT. MAINZ STUDIO / KUALA LUMPUR — GOLDEN HOUR [00:00:00:00]</span>
          </div>
          <div className="hud-text text-right">
            [ + ] 2.39:1 CINEMASCOPE SAFE AREA [ + ]
          </div>
        </div>

        {/* Iconic Viewfinder Grid: PORT + Silhouette + FOLIO */}
        <div className="my-10 md:my-14 flex items-center justify-center relative w-full">
          {/* Left Wing: PORT */}
          <div className="z-10 text-right flex-1 min-w-0 pr-1 sm:pr-2 md:pr-4">
            <h1 className="display text-[18vw] md:text-[13rem] lg:text-[16rem] leading-[0.76] font-bold tracking-tight text-[#111111]">
              PORT
            </h1>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] text-[#666666] mt-3 pr-1">
              [ ROLL 01 • CINEMATIC ]
            </div>
          </div>

          {/* Center Cutout Silhouette with Optical Crosshairs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="z-20 relative flex-shrink-0 w-[64vw] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] -mx-8 sm:-mx-16 md:-mx-24 drop-shadow-[0_35px_50px_rgba(0,0,0,0.28)] pointer-events-auto group"
          >
            {/* Viewfinder Target HUD over Silhouette */}
            <div className="absolute top-2 left-2 z-30 font-mono text-[9px] text-[#111111]/60 tracking-widest hidden sm:block">
              + FOCUS: LOCKED
            </div>
            <div className="absolute bottom-2 right-2 z-30 font-mono text-[9px] text-[#111111]/60 tracking-widest hidden sm:block">
              ⊕ 85MM f/1.4 +
            </div>

            <Image
              src="/portfolio/photographer/maindhaa.png"
              alt="Maindhaa — Lead Cinematographer & Photographer Cutout Silhouette"
              fill
              className="object-contain grayscale contrast-110 transition-transform duration-700 hover:scale-105"
              priority
            />
          </motion.div>

          {/* Right Wing: FOLIO */}
          <div className="z-10 text-left flex-1 min-w-0 pl-1 sm:pl-2 md:pl-4">
            <h1 className="display text-[18vw] md:text-[13rem] lg:text-[16rem] leading-[0.76] font-bold tracking-tight text-[#111111]">
              FOLIO
            </h1>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.32em] text-[#666666] mt-3 pl-1">
              [ LEAD DIRECTOR • MY ]
            </div>
          </div>
        </div>

        {/* Bottom Viewfinder Telemetry Bar */}
        <div className="pt-4 border-t border-[#111111]/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#666666]">
          <span>CAM A · SENSOR R-3D · SHUTTER 180°</span>
          <span className="text-[#111111] font-bold">[ ALL FRAMES DEVELOPED WITHOUT ARTIFICIAL MODIFIERS ]</span>
          <span className="text-rose-600 animate-bounce">↓ SCROLL TO CUT TO SCENE 02 ↓</span>
        </div>
      </section>

      {/* =========================================================================
          SCENE 02: THE DIRECTOR'S SCREENPLAY (INT. THE DARKROOM — NIGHT [00:14:23:08])
          Authentic Screenplay Dialogue & Camera Exposure HUD
          ========================================================================= */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-[#111111]/15">
        
        {/* Screenplay Scene Slugline */}
        <div className="slugline border-b border-[#111111]/15 pb-4 mb-16 flex flex-col sm:flex-row justify-between items-baseline gap-2">
          <span>SCENE 02 — INT. THE DARKROOM / EDITORIAL SUITE — NIGHT [00:14:23:08]</span>
          <span className="hud-text text-[#666666]">DIRECTOR OF PHOTOGRAPHY STATEMENT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Master Photographic Plate with Camera Viewfinder Crosshairs */}
          <div className="md:col-span-5 relative">
            {/* Viewfinder Registration Corners */}
            <div className="absolute -top-3 -left-3 z-30 font-mono text-sm text-[#111111]">+</div>
            <div className="absolute -top-3 -right-3 z-30 font-mono text-sm text-[#111111]">+</div>
            <div className="absolute -bottom-3 -left-3 z-30 font-mono text-sm text-[#111111]">+</div>
            <div className="absolute -bottom-3 -right-3 z-30 font-mono text-sm text-[#111111]">+</div>

            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#111111]/20 bg-[#EFEFEA] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)] group">
              <Image
                src="/portfolio/portrait/portrait-04.jpg"
                alt="Maindhaa Director Study"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-[#111111]/80 backdrop-blur-xs text-[#FAFAF7] font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-[2px]">
                REC • PLATE #01
              </div>
            </div>

            <div className="mt-5 font-mono text-xs font-semibold tracking-[0.2em] text-[#111111] flex justify-between border-t border-[#111111]/10 pt-3">
              <span>FIG. 01 — THE DIRECTOR IN SILENCE</span>
              <span className="text-[#666666]">85MM · f/1.8</span>
            </div>
          </div>

          {/* Right Column: Authentic Script / Screenplay Formatting */}
          <div className="md:col-span-7 flex flex-col justify-center text-left pl-0 md:pl-8">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-rose-600">
              [ CAMERA DIRECTIVES — MASTER MONOLOGUE ]
            </div>
            
            <h2 className="mt-4 display text-5xl sm:text-6xl md:text-7xl font-bold text-[#111111] leading-[0.86]">
              PRESERVING THE EXACT
              <br />
              RESONANCE OF THE MOMENT.
            </h2>

            <div className="mt-8 h-px w-32 bg-[#111111]" />

            {/* Script Dialogue Format */}
            <div className="mt-10 font-mono bg-[#EFEFEA]/60 p-6 sm:p-8 border-l-2 border-[#111111]">
              <div className="text-xs font-bold uppercase tracking-widest text-[#666666] mb-2">
                DIRECTOR&apos;S VOICE (V.O.)
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-mono leading-relaxed text-[#111111] italic">
                &ldquo;We do not capture what you look like; we preserve the exact resonance of how the moment felt when the world stopped watching.&rdquo;
              </blockquote>
            </div>

            {/* Screenplay Action Lines */}
            <div className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#666666]">
              [ SCENE ACTION — INTENTIONAL DISTILLATION ]
            </div>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#111111] font-normal">
              Based in Malaysia, Mainz Media approaches photography not as a mechanical recording of events, but as the creation of an enduring physical celluloid archive. Through rain-soaked wedding vows and silent automotive garages at twilight, every shutter press is an exercise in intentional distillation.
            </p>

            <div className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#666666]">
              [ CUT TO CLOSE-UP — EMULSION PURITY ]
            </div>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#111111] font-normal">
              We strip away artificial poses, aggressive modifiers, and visual noise until only raw, timeless human emotion remains exposed across the master spread.
            </p>

            {/* Telemetry Technical Specs */}
            <div className="mt-12 pt-8 border-t border-[#111111]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left font-mono">
              <div>
                <div className="display text-4xl sm:text-5xl font-bold text-[#111111]">3+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">YEARS EXP.</div>
              </div>
              <div>
                <div className="display text-4xl sm:text-5xl font-bold text-[#111111]">200+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">COMMISSIONS</div>
              </div>
              <div>
                <div className="display text-4xl sm:text-5xl font-bold text-[#111111]">50+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">CLIENTS</div>
              </div>
              <div>
                <div className="display text-4xl sm:text-5xl font-bold text-[#111111]">4</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">COUNTRIES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCENE 03: ACT I — CURATED ARCHIVAL DISCIPLINES (EXT. LOCATION ARCHIVES [00:32:15:18])
          Interactive Screenplay Catalog with Camera Telemetry Preview HUD
          ========================================================================= */}
      <section id="disciplines" className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-[#111111]/15">
        
        {/* Screenplay Scene Slugline */}
        <div className="slugline border-b border-[#111111]/15 pb-4 mb-16 flex flex-col sm:flex-row justify-between items-baseline gap-2">
          <span>SCENE 03 — EXT. CURATED LOCATION ARCHIVES — DAY / NIGHT [00:32:15:18]</span>
          <span className="hud-text text-[#666666]">ACT I · THE MASTER SERIES</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-rose-600">
              [ ACT I — FIVE CINEMATIC DISCIPLINES ]
            </div>
            <h2 className="mt-4 display text-6xl md:text-8xl font-bold text-[#111111]">
              CURATED
              <br />
              DISCIPLINES
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-md text-sm text-[#666666] leading-relaxed font-normal">
            Every photograph is developed as an original cinema master plate. Select a discipline below to inspect optical framing, aperture specs, and archival galleries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Screenplay Discipline Table */}
          <div className="md:col-span-8 divide-y divide-[#111111]/20 border-y border-[#111111]/20 font-mono">
            {disciplines.map((item, idx) => (
              <div
                key={item.slug}
                onMouseEnter={() => setActiveChapter(idx)}
                onMouseLeave={() => setActiveChapter(null)}
                className="group py-10 md:py-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors hover:bg-[#111111]/[0.03]"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="display text-2xl md:text-4xl text-rose-600 font-bold transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] group-hover:translate-x-3 transition-transform duration-500 font-sans">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-[#666666] font-normal tracking-wide font-sans">
                      {item.desc}
                    </p>
                    <div className="mt-2 font-mono text-[10px] text-[#111111] uppercase tracking-widest">
                      LENS SPEC: {item.lens}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end sm:self-center">
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-3 border border-[#111111] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#111111] transition-all hover:bg-[#111111] hover:text-[#FAFAF7] cursor-pointer rounded-[2px]"
                  >
                    <span>[ EXPLORE CUT ]</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Sticky Camera Telemetry Viewfinder Plate Preview */}
          <div className="md:col-span-4 sticky top-32 hidden md:block">
            {activeChapter !== null ? (
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] w-full overflow-hidden border border-[#111111]/20 bg-[#EFEFEA] shadow-2xl"
              >
                {/* Viewfinder Crosshairs */}
                <div className="absolute top-3 left-3 z-30 font-mono text-xs text-[#FAFAF7]">+</div>
                <div className="absolute top-3 right-3 z-30 font-mono text-xs text-[#FAFAF7]">+</div>
                <div className="absolute bottom-12 left-3 z-30 font-mono text-xs text-[#FAFAF7]">+</div>
                <div className="absolute bottom-12 right-3 z-30 font-mono text-xs text-[#FAFAF7]">+</div>

                <Image
                  src={disciplines[activeChapter].img}
                  alt={disciplines[activeChapter].title}
                  fill
                  className="object-cover"
                />
                
                {/* Top Viewfinder REC Tag */}
                <div className="absolute top-3 left-8 z-30 bg-rose-600 text-[#FAFAF7] font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[1px] animate-pulse">
                  REC • ACTIVE SCENE
                </div>

                {/* Bottom Camera Telemetry HUD */}
                <div className="absolute bottom-0 inset-x-0 bg-[#111111]/90 backdrop-blur-xs px-4 py-3 border-t border-[#111111]/20 text-center font-mono">
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#FAFAF7]">
                    {disciplines[activeChapter].title} SPREAD
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-[#A3A39D] mt-0.5">
                    {disciplines[activeChapter].lens} · CLICK TO TURN PAGE →
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="aspect-[3/4] w-full border border-dashed border-[#111111]/30 flex flex-col items-center justify-center p-8 text-center text-[#666666] font-mono">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#111111]">
                  [ OPTICAL VIEWFINDER STANDBY ]
                </div>
                <p className="mt-3 text-xs leading-relaxed font-sans">
                  Hover over any discipline on the left to activate active camera framing telemetry.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCENE 04: ACT II — SELECTED MASTER PLATES (INT. EXHIBITION HALL [01:15:42:04])
          Camera HUD Masonry Grid with Full-Screen Optical Viewfinder Lightbox
          ========================================================================= */}
      <section className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto border-b border-[#111111]/15">
        
        {/* Screenplay Scene Slugline */}
        <div className="slugline border-b border-[#111111]/15 pb-4 mb-16 flex flex-col sm:flex-row justify-between items-baseline gap-2">
          <span>SCENE 04 — INT. MASTER EXHIBITION HALL — ARCHIVAL VIEWING [01:15:42:04]</span>
          <span className="hud-text text-[#666666]">ACT II · SIGNATURE PLATES</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-rose-600">
              [ ACT II — MASTER CUT ARCHIVE ]
            </div>
            <h2 className="mt-4 display text-6xl md:text-8xl font-bold text-[#111111]">
              SELECTED
              <br />
              PLATES
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-md text-sm text-[#666666] leading-relaxed font-normal">
            A curated selection of signature plates across automotive, portraiture, weddings, and commercial architecture. Click any plate to launch full-screen optical exposure telemetry.
          </p>
        </div>

        {/* Viewfinder Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {highlightPlates.map((plate, index) => {
            const isWide = index === 0 || index === 3;
            const spanClass = isWide ? "md:col-span-7" : "md:col-span-5";
            const aspectClass = isWide ? "aspect-[16/10]" : "aspect-[4/5]";

            return (
              <div
                key={plate.id}
                onClick={() => setSelectedPlate(plate)}
                className={`${spanClass} flex flex-col group cursor-pointer`}
              >
                <div className={`relative ${aspectClass} w-full overflow-hidden border border-[#111111]/20 bg-[#EFEFEA] shadow-lg group-hover:shadow-2xl transition-shadow`}>
                  
                  {/* Viewfinder Registration Corners */}
                  <div className="absolute top-2 left-2 z-30 font-mono text-xs text-[#FAFAF7]/80">+</div>
                  <div className="absolute top-2 right-2 z-30 font-mono text-xs text-[#FAFAF7]/80">+</div>
                  <div className="absolute bottom-2 left-2 z-30 font-mono text-xs text-[#FAFAF7]/80">+</div>
                  <div className="absolute bottom-2 right-2 z-30 font-mono text-xs text-[#FAFAF7]/80">+</div>

                  {/* Top Timecode HUD */}
                  <div className="absolute top-3 left-6 z-30 bg-[#111111]/80 backdrop-blur-xs text-[#FAFAF7] font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-[1px]">
                    REC • [{plate.timecode}]
                  </div>

                  <Image
                    src={plate.src}
                    alt={plate.title}
                    fill
                    className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-[#111111] text-[#FAFAF7] px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] transition-opacity duration-300 shadow-xl rounded-[2px] border border-[#FAFAF7]/20">
                      [ INSPECT TELEMETRY + ]
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-baseline font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#111111]">
                  <span>{plate.title}</span>
                  <span className="text-rose-600 text-[10px]">[{plate.year}]</span>
                </div>
                <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666] mt-1">
                  {plate.discipline} · {plate.specs}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SCENE 05: ACT III — PRIVATE COMMISSIONS & BOOKING (EXT. FINAL CUT [02:00:00:00])
          Commanding Screenplay Finale & Inquiry Slate
          ========================================================================= */}
      <section className="py-24 md:py-36 px-6 md:px-16 max-w-7xl mx-auto">
        
        {/* Screenplay Scene Slugline */}
        <div className="slugline border-b border-[#111111]/15 pb-4 mb-16 flex flex-col sm:flex-row justify-between items-baseline gap-2">
          <span>SCENE 05 — EXT. FINAL CUT / PRODUCTION INQUIRY — MASTER SATELLITE [02:00:00:00]</span>
          <span className="hud-text text-[#666666]">ACT III · PRODUCTION COMMISSIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-rose-600">
              [ ACT III — FINAL PRODUCTION CUT ]
            </div>
            <h2 className="mt-4 display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#111111] leading-[0.82]">
              LET&apos;S CREATE
              <br />
              SOMETHING
              <br />
              TIMELESS.
            </h2>
            <div className="mt-8 font-mono bg-[#EFEFEA]/60 p-5 border-l-2 border-rose-600 text-xs font-bold uppercase tracking-[0.22em] text-[#111111] flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3">
              <span>[ WHATSAPP: +60 16-322 8337 ]</span>
              <span>[ INSTAGRAM: @MAINZ.MEDIA ]</span>
              <span>[ EMAIL: MAINDHA@GMAIL.COM ]</span>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6 md:items-end justify-end font-mono">
            <Link
              href="/pricing"
              className="w-full sm:w-auto md:w-full inline-flex items-center justify-between border border-[#111111] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[#111111] transition-all hover:bg-[#111111] hover:text-[#FAFAF7] cursor-pointer rounded-[2px]"
            >
              <span>[ VIEW COMMISSION SHEET ]</span>
              <span>→</span>
            </Link>
            <Link
              href="/booking"
              className="w-full sm:w-auto md:w-full inline-flex items-center justify-between bg-[#111111] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[#FAFAF7] transition-all hover:bg-rose-600 cursor-pointer rounded-[2px]"
            >
              <span>[ BOOK YOUR SESSION ]</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Screenplay End-of-Script Sign-Off */}
        <div className="mt-24 pt-12 border-t border-[#111111]/15 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
          <span>[ END OF SCRIPT — MAINZ MEDIA ARCHIVES 2025 ]</span>
          <span className="text-[#111111] font-bold">ALL MASTER PLATES DEVELOPED IN KUALA LUMPUR, MY</span>
          <span>[ REC • ALL RIGHTS RESERVED ]</span>
        </div>
      </section>

      {/* =========================================================================
          FULL-SCREEN OPTICAL VIEWFINDER LIGHTBOX (AnimatePresence Telemetry HUD)
          ========================================================================= */}
      <AnimatePresence>
        {selectedPlate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlate(null)}
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 md:p-14 cursor-zoom-out font-mono"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#FAFAF7] border border-[#FAFAF7]/30 flex flex-col overflow-hidden shadow-2xl cursor-default rounded-[2px]"
            >
              {/* Director Viewfinder Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#111111]/20 bg-[#111111] text-[#FAFAF7]">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em]">
                  <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse inline-block" />
                  <span>OPTICAL TELEMETRY • [{selectedPlate.timecode}]</span>
                  <span className="text-rose-600 hidden sm:inline">| {selectedPlate.discipline}</span>
                </div>
                <button
                  onClick={() => setSelectedPlate(null)}
                  className="text-xs font-bold uppercase tracking-[0.24em] text-[#FAFAF7] hover:text-rose-600 transition-colors cursor-pointer"
                >
                  [ CLOSE VIEWFINDER × ]
                </button>
              </div>

              {/* High-Res Plate with Viewfinder Safe-Area Markers */}
              <div className="relative aspect-[16/10] w-full bg-[#000000]">
                {/* Viewfinder Crosshairs */}
                <div className="absolute top-4 left-4 z-30 text-[#FAFAF7]/70 text-sm font-mono">+</div>
                <div className="absolute top-4 right-4 z-30 text-[#FAFAF7]/70 text-sm font-mono">+</div>
                <div className="absolute bottom-4 left-4 z-30 text-[#FAFAF7]/70 text-sm font-mono">+</div>
                <div className="absolute bottom-4 right-4 z-30 text-[#FAFAF7]/70 text-sm font-mono">+</div>
                <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
                  <div className="w-12 h-12 border border-[#FAFAF7]/20 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-rose-600/80 rounded-full" />
                  </div>
                </div>

                <Image
                  src={selectedPlate.src}
                  alt={selectedPlate.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Camera Telemetry Specs Footer */}
              <div className="p-6 bg-[#FAFAF7] grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#111111]/20 text-xs font-bold uppercase tracking-[0.22em] text-[#111111]">
                <div>
                  <div className="text-[#666666] text-[10px]">SCENE SLATE / TITLE</div>
                  <div className="mt-1 text-sm font-bold display">{selectedPlate.title}</div>
                </div>
                <div>
                  <div className="text-[#666666] text-[10px]">LOCATION &amp; TIMECODE</div>
                  <div className="mt-1">{selectedPlate.location} · [{selectedPlate.year}]</div>
                </div>
                <div>
                  <div className="text-[#666666] text-[10px]">CAMERA &amp; EXPOSURE DATA</div>
                  <div className="mt-1 text-rose-600 font-semibold">{selectedPlate.specs}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
