"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function CoverAboutScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll through the combined Cover + About Me section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for buttery keyframe animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // ==========================================
  // KEYFRAME TRANSFORMATIONS: SPREAD 01 -> 02
  // ==========================================

  // Spread 01 (Cover Typography: PORT & FOLIO) fades out as we scroll down
  const coverOpacity = useTransform(smoothProgress, [0, 0.32], [1, 0]);
  const coverY = useTransform(smoothProgress, [0, 0.32], ["0%", "-35%"]);
  const coverScale = useTransform(smoothProgress, [0, 0.32], [1, 0.92]);

  // Spread 02 (About Me Content on Right) fades in and slides up
  const aboutOpacity = useTransform(smoothProgress, [0.22, 0.52], [0, 1]);
  const aboutY = useTransform(smoothProgress, [0.22, 0.52], ["45px", "0px"]);

  // HERO ("this person" Maindhaa Cutout) Keyframe Scroll Track:
  // Glides from center of PORTFOLIO (Spread 01) down into the About Me image box (Spread 02)
  const heroX = useTransform(
    smoothProgress,
    [0, 0.48],
    ["0%", isMobile ? "0%" : "-27%"]
  );
  
  const heroY = useTransform(
    smoothProgress,
    [0, 0.48],
    ["0%", isMobile ? "-15%" : "8%"]
  );

  const heroScale = useTransform(
    smoothProgress,
    [0, 0.48],
    [1, isMobile ? 0.88 : 0.92]
  );

  // As "this person" glides into the About Me section, the image box frame forms around him
  const boxBorder = useTransform(
    smoothProgress,
    [0.18, 0.48],
    ["rgba(17, 17, 17, 0)", "rgba(17, 17, 17, 0.2)"]
  );

  const boxBg = useTransform(
    smoothProgress,
    [0.18, 0.48],
    ["rgba(239, 239, 234, 0)", "rgba(239, 239, 234, 1)"]
  );

  const boxShadow = useTransform(
    smoothProgress,
    [0.18, 0.48],
    [
      "0 30px 45px rgba(0, 0, 0, 0.32)",
      "0 30px 60px -15px rgba(0, 0, 0, 0.18)",
    ]
  );

  // Caption below the image box fades in when "this person" lands inside
  const captionOpacity = useTransform(smoothProgress, [0.38, 0.55], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[220vh] md:min-h-[240vh] border-b border-[#111111]/15"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 py-12 md:px-16 md:py-20 max-w-7xl mx-auto select-none">
        
        {/* Top Header Label (Changes or stays persistent) */}
        <div className="flex justify-between items-start text-xs font-bold uppercase tracking-[0.26em] text-[#666666] z-30">
          <span>BOOK 01</span>
          <span>CURATED CINEMATIC ARCHIVES</span>
        </div>

        {/* ==========================================
            LAYER 1: SPREAD 01 COVER TYPOGRAPHY (PORT & FOLIO)
            ========================================== */}
        <motion.div
          style={{ opacity: coverOpacity, y: coverY, scale: coverScale }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-full max-w-7xl mx-auto px-2 pointer-events-none z-10"
        >
          {/* Left Wing: PORT */}
          <div className="text-right flex-1 min-w-0 pr-1 sm:pr-2 md:pr-4">
            <div className="display text-[18vw] md:text-[13rem] lg:text-[15rem] leading-[0.78] font-bold tracking-tight text-[#111111]">
              PORT
            </div>
            <div className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.32em] text-[#666666] mt-3 pr-1">
              CINEMATIC
            </div>
          </div>

          {/* Spacer for center cutout width */}
          <div className="flex-shrink-0 w-[64vw] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] -mx-8 sm:-mx-16 md:-mx-24 opacity-0 pointer-events-none" />

          {/* Right Wing: FOLIO */}
          <div className="text-left flex-1 min-w-0 pl-1 sm:pl-2 md:pl-4">
            <div className="display text-[18vw] md:text-[13rem] lg:text-[15rem] leading-[0.78] font-bold tracking-tight text-[#111111]">
              FOLIO
            </div>
            <div className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.32em] text-[#666666] mt-3 pl-1">
              PHOTOGRAPHER
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            LAYER 2: SPREAD 02 ABOUT ME CONTENT (Right Side + Image Caption Left)
            ========================================== */}
        <motion.div
          style={{ opacity: aboutOpacity, y: aboutY }}
          className="absolute inset-x-6 md:inset-x-16 top-1/2 -translate-y-1/2 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center pointer-events-auto z-20"
        >
          {/* Left Column Spacer where "this person" lands */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start justify-end pointer-events-none">
            <div className="w-[64vw] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] opacity-0" />
            <motion.div
              style={{ opacity: captionOpacity }}
              className="mt-6 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#666666]"
            >
              <span>FIG. 01 — THE ARTIST</span>
              <span>KUALA LUMPUR</span>
            </motion.div>
          </div>

          {/* Right Column: About Me Story & Minimal Statistics */}
          <div className="md:col-span-6 flex flex-col justify-center text-left max-h-[75vh] overflow-y-auto pr-2">
            <div className="text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
              INTRODUCTION · ABOUT ME
            </div>
            <h2 className="mt-3 display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[0.86]">
              PHILOSOPHY &amp;
              <br />
              STORYTELLING
            </h2>

            <div className="mt-6 h-px w-20 bg-[#111111]" />

            <blockquote className="mt-6 text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-[#111111] tracking-wide">
              &ldquo;We do not capture what you look like; we preserve the exact resonance of how the moment felt when the world stopped watching.&rdquo;
            </blockquote>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#666666] font-normal">
              Based in Malaysia, Mainz Media approaches photography not as a mechanical recording of events, but as the creation of an enduring physical archive. Through rain-soaked wedding vows and silent automotive garages at twilight, every shutter press is an exercise in intentional distillation.
            </p>

            {/* Statistics */}
            <div className="mt-8 pt-6 border-t border-[#111111]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111]">3+</div>
                <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">YEARS EXP.</div>
              </div>
              <div>
                <div className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111]">200+</div>
                <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">PROJECTS</div>
              </div>
              <div>
                <div className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111]">50+</div>
                <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">CLIENTS</div>
              </div>
              <div>
                <div className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111]">4</div>
                <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">COUNTRIES</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            LAYER 3: THE HERO ("this person" — Maindhaa Cutout)
            Glides smoothly from Cover center down into About Me image box on scroll
            ========================================== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <motion.div
            style={{
              x: heroX,
              y: heroY,
              scale: heroScale,
              borderColor: boxBorder,
              backgroundColor: boxBg,
              boxShadow: boxShadow,
            }}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-[64vw] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] -mx-8 sm:-mx-16 md:-mx-24 rounded-sm overflow-hidden border pointer-events-auto transition-transform duration-300"
          >
            <Image
              src="/portfolio/photographer/maindhaa.png"
              alt="Maindhaa — Lead Photographer Figure"
              fill
              className="object-contain grayscale contrast-110 transition-transform duration-700 hover:scale-105"
              priority
            />
          </motion.div>
        </div>

        {/* Bottom Footer Label */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.26em] text-[#666666] z-30">
          <span>MAINZ MEDIA</span>
          <span className="text-[#111111] font-bold">PHOTOGRAPHY COLLECTION 2025</span>
          <span>MALAYSIA</span>
        </div>
      </div>
    </div>
  );
}
