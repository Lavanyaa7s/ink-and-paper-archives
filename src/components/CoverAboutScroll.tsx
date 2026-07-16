"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function CoverAboutScroll() {
  const coverRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  // Parallax tracking for Spread 01 (Cover)
  const { scrollYProgress: coverScroll } = useScroll({
    target: coverRef,
    offset: ["start start", "end start"],
  });

  const smoothCoverScroll = useSpring(coverScroll, {
    stiffness: 110,
    damping: 24,
  });

  // As Cover scrolls up, Maindhaa cutout ("this person") glides down (+160px) and fades smoothly
  const coverHeroY = useTransform(smoothCoverScroll, [0, 1], ["0px", "160px"]);
  const coverHeroScale = useTransform(smoothCoverScroll, [0, 1], [1, 0.94]);
  const coverHeroOpacity = useTransform(smoothCoverScroll, [0.65, 1], [1, 0]);
  const coverTextY = useTransform(smoothCoverScroll, [0, 1], ["0px", "-80px"]);
  const coverTextOpacity = useTransform(smoothCoverScroll, [0.5, 0.9], [1, 0]);

  // Parallax tracking for Spread 02 (About Me)
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "center center"],
  });

  const smoothAboutScroll = useSpring(aboutScroll, {
    stiffness: 110,
    damping: 24,
  });

  // As About Me scrolls naturally into view, "this person" inside the image box glides down (-120px to 0px) settling into place
  const aboutBoxY = useTransform(smoothAboutScroll, [0, 1], ["60px", "0px"]);
  const aboutBoxOpacity = useTransform(smoothAboutScroll, [0.1, 0.6], [0, 1]);
  const aboutHeroY = useTransform(smoothAboutScroll, [0, 1], ["-120px", "0px"]);
  const aboutHeroScale = useTransform(smoothAboutScroll, [0, 1], [1.12, 1]);

  return (
    <div className="w-full">
      {/* ==========================================
          SPREAD 01: PORTFOLIO COVER (Exact 3D Cutout Overlap matching input_file_1.png)
          Zero scroll hijacking, 100% natural mouse wheel momentum!
          ========================================== */}
      <section
        ref={coverRef}
        className="min-h-[86vh] flex flex-col justify-between text-center border-b border-[#111111]/15 pb-24 relative overflow-visible select-none"
      >
        <div className="flex justify-between items-start text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
          <span>BOOK 01</span>
          <span>CURATED CINEMATIC ARCHIVES</span>
        </div>

        {/* Iconic 3D Cutout Overlap: PORT + Free-Standing Silhouette + FOLIO */}
        <div className="my-12 md:my-16 flex items-center justify-center relative w-full max-w-7xl mx-auto px-2">
          {/* Left Wing: PORT */}
          <motion.div
            style={{ y: coverTextY, opacity: coverTextOpacity }}
            className="z-10 text-right flex-1 min-w-0 pr-1 sm:pr-2 md:pr-4"
          >
            <div className="display text-[18vw] md:text-[13rem] lg:text-[15rem] leading-[0.78] font-bold tracking-tight text-[#111111]">
              PORT
            </div>
            <div className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.32em] text-[#666666] mt-3 pr-1">
              CINEMATIC
            </div>
          </motion.div>

          {/* Center 3D Cutout Silhouette: Maindhaa ("this person") — NO BACKGROUND BOX, NO BORDER! */}
          <motion.div
            style={{ y: coverHeroY, scale: coverHeroScale, opacity: coverHeroOpacity }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 relative flex-shrink-0 w-[64vw] max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] -mx-8 sm:-mx-16 md:-mx-24 drop-shadow-[0_30px_45px_rgba(0,0,0,0.32)] pointer-events-auto"
          >
            <Image
              src="/portfolio/photographer/maindhaa.png"
              alt="Maindhaa — Lead Photographer Cutout Silhouette"
              fill
              className="object-contain grayscale contrast-110 transition-transform duration-700 hover:scale-105"
              priority
            />
          </motion.div>

          {/* Right Wing: FOLIO */}
          <motion.div
            style={{ y: coverTextY, opacity: coverTextOpacity }}
            className="z-10 text-left flex-1 min-w-0 pl-1 sm:pl-2 md:pl-4"
          >
            <div className="display text-[18vw] md:text-[13rem] lg:text-[15rem] leading-[0.78] font-bold tracking-tight text-[#111111]">
              FOLIO
            </div>
            <div className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.32em] text-[#666666] mt-3 pl-1">
              PHOTOGRAPHER
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
          <span>MAINZ MEDIA</span>
          <span className="text-[#111111] font-bold">PHOTOGRAPHY COLLECTION 2025</span>
          <span>MALAYSIA</span>
        </div>
      </section>

      {/* ==========================================
          SPREAD 02: EDITORIAL INTRODUCTION / ABOUT ME
          "This person" glides down into the exact image box on the left as you scroll naturally!
          ========================================== */}
      <section
        ref={aboutRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center border-b border-[#111111]/15 py-24 md:py-32"
      >
        {/* Left Column: Image Box where "this person" settles */}
        <motion.div
          style={{ y: aboutBoxY, opacity: aboutBoxOpacity }}
          className="md:col-span-6"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#111111]/15 bg-[#EFEFEA] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
            {/* Parallax keyframe entry for "this person" inside the About Me box */}
            <motion.div
              style={{ y: aboutHeroY, scale: aboutHeroScale }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/portfolio/photographer/maindhaa.png"
                alt="Maindhaa — Lead Photographer About Me Portrait"
                fill
                className="object-cover object-top grayscale contrast-110 transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-[0.24em] text-[#666666]">
            <span>FIG. 01 — THE ARTIST IN SILENCE</span>
            <span>EST. 2023 · KUALA LUMPUR</span>
          </div>
        </motion.div>

        {/* Right Column: Beautiful Editorial Story + Philosophy + Minimal Stats */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
            INTRODUCTION · SPREAD 02
          </div>
          <h2 className="mt-4 display text-5xl md:text-7xl font-bold text-[#111111] leading-[0.86]">
            PHILOSOPHY &amp;
            <br />
            STORYTELLING
          </h2>

          <div className="mt-8 h-px w-24 bg-[#111111]" />

          <blockquote className="mt-8 text-2xl md:text-3xl font-light italic leading-relaxed text-[#111111] tracking-wide">
            &ldquo;We do not capture what you look like; we preserve the exact resonance of how the moment felt when the world stopped watching.&rdquo;
          </blockquote>

          <p className="mt-6 text-base leading-relaxed text-[#666666] font-normal">
            Based in Malaysia, Mainz Media approaches photography not as a mechanical recording of events, but as the creation of an enduring physical archive. Through rain-soaked wedding vows and silent automotive garages at twilight, every shutter press is an exercise in intentional distillation.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#666666] font-normal">
            We strip away artificial poses, aggressive modifiers, and visual noise until only raw, timeless human emotion remains on the paper spread.
          </p>

          {/* Perfectly Aligned Minimal Statistics */}
          <div className="mt-14 pt-8 border-t border-[#111111]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="display text-4xl md:text-5xl font-bold text-[#111111]">3+</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">YEARS EXP.</div>
            </div>
            <div>
              <div className="display text-4xl md:text-5xl font-bold text-[#111111]">200+</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">PROJECTS</div>
            </div>
            <div>
              <div className="display text-4xl md:text-5xl font-bold text-[#111111]">50+</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">CLIENTS</div>
            </div>
            <div>
              <div className="display text-4xl md:text-5xl font-bold text-[#111111]">4</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#666666]">COUNTRIES</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
