"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  // Phases: 'dark' (spotlight) -> 'card' (ID dropped) -> 'lifting' (card flips open) -> 'opened' (warm white book)
  const [phase, setPhase] = useState<"dark" | "card" | "lifting" | "opened">("dark");
  const [flipped, setFlipped] = useState(false);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("card"), 450);
    return () => clearTimeout(t1);
  }, []);

  // Trigger lift on wheel scroll down during ID card phase
  useEffect(() => {
    if (phase !== "card") return;
    const trigger = () => {
      setPhase("lifting");
      setTimeout(() => setPhase("opened"), 1300);
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 6) trigger();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [phase]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!wrapRef.current || phase !== "card") return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setMx(x);
    setMy(y);
  };

  const chapters = [
    { n: "01", title: "AUTOMOTIVE", to: "/automotive", img: "/portfolio/automotive/auto-03.jpg", desc: "Machines captured through symmetry, motion and engineered beauty." },
    { n: "02", title: "PORTRAITS", to: "/portraits", img: "/portfolio/portrait/portrait-04.jpg", desc: "Natural light. Authentic expressions." },
    { n: "03", title: "WEDDINGS", to: "/weddings", img: "/portfolio/events/event-03.jpg", desc: "Real emotions. Real moments. Nothing staged." },
    { n: "04", title: "EVENTS & NEWBORN", to: "/newborn", img: "/portfolio/events/event-05.jpg", desc: "The first days of light. Handled with cotton and silence." },
    { n: "05", title: "COMMERCIAL", to: "/commercial", img: "/portfolio/featured/featured-12.jpg", desc: "Selected brand and architectural monographs." },
  ];

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      className={`relative min-h-screen w-full transition-colors duration-1000 ${
        phase === "opened" || phase === "lifting"
          ? "bg-[#FAFAF7] text-[#111111]"
          : "bg-[#0A0A0A] text-[#FAFAF7] overflow-hidden"
      }`}
    >
      {/* PHASE 1: ID CARD DROP ON PURE DARK BACKGROUND */}
      <AnimatePresence>
        {phase !== "opened" && (
          <motion.div
            key="card-stage"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-[#0A0A0A]"
          >
            {/* Soft subtle studio lighting */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(250,250,247,0.08), rgba(0,0,0,0) 65%)",
              }}
            />

            {/* Lanyard cord */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: phase === "dark" ? 0 : 1 }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
              style={{ transformOrigin: "top" }}
              className="mt-0 h-[40vh] md:h-[42vh] w-[2px] bg-[#666666]"
            />

            {/* Swinging Official Photographer ID Card */}
            <motion.div
              className="absolute left-1/2 top-[40vh] md:top-[42vh] -translate-x-1/2"
              initial={{ y: -700, rotate: 0, opacity: 0 }}
              animate={
                phase === "dark"
                  ? { y: -700, opacity: 0 }
                  : phase === "lifting"
                  ? { y: -900, rotateX: 110, opacity: 0 }
                  : {
                      y: 0,
                      opacity: 1,
                      rotate: [0, -5, 3.5, -2, 1, 0],
                    }
              }
              transition={
                phase === "lifting"
                  ? { duration: 1.2, ease: [0.7, 0, 0.3, 1] }
                  : {
                      y: { type: "spring", stiffness: 60, damping: 13, mass: 1.2 },
                      opacity: { duration: 0.3 },
                      rotate: { duration: 2.2, times: [0, 0.2, 0.45, 0.7, 0.88, 1], ease: "easeOut", delay: 0.5 },
                    }
              }
              style={{ transformOrigin: "top center" }}
            >
              <motion.div
                onClick={() => setFlipped((f) => !f)}
                className="cursor-pointer"
                style={{ perspective: 1400 }}
                animate={{
                  rotateX: phase === "lifting" ? 90 : my * -6,
                  rotateY: (flipped ? 180 : 0) + mx * 8,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 14 }}
              >
                <div
                  className="relative h-[440px] w-[280px] rounded-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front: Official Photographer ID Card */}
                  <div
                    className="absolute inset-0 bg-[#FAFAF7] text-[#111111] border border-[#111111]/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.85),0_1px_0_rgba(255,255,255,0.8)_inset] flex flex-col justify-between p-6"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Top Punch Hole */}
                    <div className="mx-auto mt-1 h-2.5 w-16 rounded-full bg-[#111111]/90" />

                    {/* Official Header */}
                    <div className="mt-2 text-center border-b border-[#111111]/15 pb-3">
                      <div className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#111111]">
                        OFFICIAL PHOTOGRAPHER
                      </div>
                      <div className="mt-0.5 text-[11px] font-bold tracking-[0.2em] text-[#666666]">
                        MAINZ MEDIA · MALAYSIA
                      </div>
                    </div>

                    {/* Photographer Photo */}
                    <div className="relative aspect-square w-full my-3 overflow-hidden border border-[#111111]/15 bg-[#EFEFEA]">
                      <Image
                        src="/portfolio/photographer/maindhaa.png"
                        alt="Maindhaa — Lead Photographer"
                        fill
                        className="object-cover grayscale contrast-110"
                        priority
                      />
                    </div>

                    {/* Metadata & QR Code */}
                    <div className="grid grid-cols-2 gap-3 items-center border-t border-[#111111]/15 pt-3">
                      <div className="text-[9px] uppercase tracking-[0.18em] text-[#666666] leading-relaxed">
                        <div><strong className="text-[#111111]">ISSUE DATE:</strong> 2025</div>
                        <div><strong className="text-[#111111]">INSTAGRAM:</strong> @mainz.media</div>
                      </div>
                      {/* Minimal QR Graphic */}
                      <div className="flex justify-end">
                        <div
                          className="h-12 w-12 border border-[#111111]/20 p-1"
                          style={{
                            backgroundImage:
                              "conic-gradient(from 0deg at 50% 50%, #111111 0 25%, #FAFAF7 0 50%, #111111 0 75%, #FAFAF7 0)",
                            backgroundSize: "6px 6px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Back: Scan & Authenticity Check */}
                  <div
                    className="absolute inset-0 bg-[#111111] text-[#FAFAF7] border border-[#FAFAF7]/20 flex flex-col items-center justify-center p-6 text-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div className="mx-auto mt-1 h-2.5 w-16 rounded-full bg-[#FAFAF7]/80" />
                    <div className="my-auto flex flex-col items-center gap-4">
                      <div
                        className="h-28 w-28 bg-[#FAFAF7]"
                        style={{
                          backgroundImage:
                            "conic-gradient(from 0deg at 50% 50%, #111111 0 25%, #FAFAF7 0 50%, #111111 0 75%, #FAFAF7 0)",
                          backgroundSize: "12px 12px",
                        }}
                      />
                      <div className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#666666]">
                        SCAN TO VERIFY CREDENTIAL
                        <br />
                        @MAINZMEDIA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ground floor shadow */}
                <div
                  aria-hidden
                  className="mx-auto mt-6 h-4 w-44 rounded-full bg-black/60 blur-xl"
                />
              </motion.div>
            </motion.div>

            {/* Bottom Instruction Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "card" ? 1 : 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              onClick={() => {
                setPhase("lifting");
                setTimeout(() => setPhase("opened"), 1300);
              }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center cursor-pointer group"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#666666] transition-colors group-hover:text-[#FAFAF7]">
                SCROLL TO OPEN PORTFOLIO ↓
              </div>
              <div className="mt-1 text-[9px] tracking-[0.2em] text-[#666666]/60">
                OR TAP HERE TO FLIP COVER
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2: OPENED PHYSICAL COFFEE-TABLE MONOGRAPH ON WARM WHITE (#FAFAF7) */}
      {phase === "opened" && (
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6 py-20 md:px-16 md:py-28 max-w-7xl mx-auto space-y-48 md:space-y-64"
        >
          {/* SPREAD 01: PORTFOLIO COVER (Inspired by editorial design, huge whitespace, center portrait focus) */}
          <section className="min-h-[85vh] flex flex-col justify-between text-center border-b border-[#111111]/15 pb-24">
            <div className="flex justify-between items-start text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
              <span>BOOK 01</span>
              <span>CURATED CINEMATIC ARCHIVES</span>
            </div>

            <div className="my-12">
              <h1 className="display text-[15vw] md:text-[10.5rem] leading-[0.82] font-bold tracking-tight text-[#111111]">
                PORTFOLIO
              </h1>

              {/* Center Portrait Focus */}
              <div className="mt-10 relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border border-[#111111]/15 bg-[#EFEFEA] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.18)]">
                <Image
                  src="/portfolio/photographer/maindhaa.png"
                  alt="Maindhaa — Lead Photographer Cover Plate"
                  fill
                  className="object-cover grayscale contrast-110"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
              <span>MAINZ MEDIA</span>
              <span className="text-[#111111] font-bold">PHOTOGRAPHY COLLECTION 2025</span>
              <span>MALAYSIA</span>
            </div>
          </section>

          {/* SPREAD 02: EDITORIAL INTRODUCTION (Large portrait left, beautiful story right, minimal stats perfectly aligned) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center border-b border-[#111111]/15 pb-32">
            {/* Left Column: Large Portrait */}
            <div className="md:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#111111]/15 bg-[#EFEFEA] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
                <Image
                  src="/portfolio/portrait/portrait-04.jpg"
                  alt="Maindhaa Portrait Study"
                  fill
                  className="object-cover grayscale contrast-110"
                />
              </div>
              <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-[0.24em] text-[#666666]">
                <span>FIG. 01 — THE ARTIST IN SILENCE</span>
                <span>EST. 2023 · KUALA LUMPUR</span>
              </div>
            </div>

            {/* Right Column: Beautiful Story + Philosophy + Minimal Stats */}
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

              {/* Perfectly Aligned Minimal Statistics (No Camera Specs Here!) */}
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

          {/* SPREAD 03: CHAPTER INDEX (Full-page editorial layout, clean typography dominates, no card UI, no boxed sections) */}
          <section className="min-h-[80vh] border-b border-[#111111]/15 pb-32">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
                  SPREAD 03 · THE COLLECTION INDEX
                </div>
                <h2 className="mt-4 display text-[11vw] md:text-[8rem] leading-[0.82] font-bold text-[#111111]">
                  CHAPTERS
                </h2>
              </div>
              <p className="max-w-xs text-xs font-bold uppercase tracking-[0.22em] text-[#666666] mt-4 md:mt-0">
                SELECT A CHAPTER BELOW TO TURN DIRECTLY TO THE PRINT SPREAD →
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {/* Clean Typography List */}
              <div className="md:col-span-8 divide-y divide-[#111111]/15 border-y border-[#111111]/15">
                {chapters.map((c, i) => (
                  <Link
                    key={c.n}
                    href={c.to}
                    onMouseEnter={() => setActiveChapter(i)}
                    className="group py-8 md:py-12 flex items-baseline justify-between transition-all hover:pl-6 cursor-pointer block"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="text-sm font-bold tracking-[0.24em] text-[#666666] group-hover:text-[#111111]">
                        {c.n}
                      </span>
                      <span className="display text-5xl md:text-7xl font-bold tracking-tight text-[#111111] group-hover:underline">
                        {c.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-[#666666] group-hover:text-[#111111]">
                      <span className="hidden sm:inline">{c.desc}</span>
                      <span className="text-base font-bold">Explore →</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Floating Exhibition Preview Plate */}
              <div className="md:col-span-4 sticky top-32 hidden md:block">
                {activeChapter !== null ? (
                  <motion.div
                    key={activeChapter}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-[3/4] w-full overflow-hidden border border-[#111111]/15 bg-[#EFEFEA] shadow-2xl"
                  >
                    <Image
                      src={chapters[activeChapter].img}
                      alt={chapters[activeChapter].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-[#FAFAF7]/95 px-4 py-3 border border-[#111111]/10 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#111111]">
                        {chapters[activeChapter].title} SPREAD
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-[#666666] mt-0.5">
                        TURN PAGE TO VIEW GALLERY →
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="aspect-[3/4] w-full border border-dashed border-[#111111]/20 flex flex-col items-center justify-center p-8 text-center text-[#666666]">
                    <div className="text-xs font-bold uppercase tracking-[0.24em]">
                      CURATORIAL PREVIEW
                    </div>
                    <p className="mt-2 text-xs leading-relaxed">
                      Hover over any chapter on the left to preview its master archival plate.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* SPREAD 04: COMMISSION & BOOKING FOOTER JUMP */}
          <section className="pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
                SPREAD 04 · PRIVATE COMMISSIONS &amp; INQUIRY
              </div>
              <h3 className="mt-4 display text-5xl md:text-6xl font-bold text-[#111111]">
                LET&apos;S CREATE SOMETHING TIMELESS.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-4 border border-[#111111] px-8 py-5 text-xs font-bold uppercase tracking-[0.24em] text-[#111111] transition-all hover:bg-[#111111] hover:text-[#FAFAF7] cursor-pointer"
              >
                <span>COMMISSION SHEET</span>
                <span>→</span>
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-4 bg-[#111111] px-8 py-5 text-xs font-bold uppercase tracking-[0.24em] text-[#FAFAF7] transition-all hover:bg-[#666666] cursor-pointer"
              >
                <span>BOOK YOUR SESSION</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        </motion.main>
      )}
    </div>
  );
}
