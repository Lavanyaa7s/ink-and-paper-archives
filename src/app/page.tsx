"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CoverAboutScroll } from "@/components/CoverAboutScroll";

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
          className="relative z-10 w-full"
        >
          {/* SPREADS 01 & 02: SYNCHRONIZED KEYFRAME SCROLL TRACK (Cover -> About Me) */}
          <CoverAboutScroll />

          {/* REMAINING SPREADS (Spread 03 onward) */}
          <div className="px-6 py-20 md:px-16 md:py-28 max-w-7xl mx-auto space-y-48 md:space-y-64">
            {/* SPREAD 03: CHAPTER INDEX (Full-page editorial layout, clean typography dominates, no card UI, no boxed sections) */}
            <section className="min-h-[80vh] border-b border-[#111111]/15 pb-32">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.26em] text-[#666666]">
                    SPREAD 03 · INDEX &amp; GALLERIES
                  </div>
                  <h2 className="mt-4 display text-6xl md:text-8xl font-bold text-[#111111]">
                    CURATED
                    <br />
                    DISCIPLINES
                  </h2>
                </div>
                <p className="mt-6 md:mt-0 max-w-md text-sm text-[#666666] leading-relaxed font-normal">
                  Every photograph is an original master plate. Explore our five core editorial disciplines below, organized chronologically by archival volume.
                </p>
              </div>

              {/* Minimalist Interactive Exhibition List */}
              <div className="divide-y divide-[#111111]/20 border-y border-[#111111]/20">
                {[
                  {
                    num: "01",
                    title: "AUTOMOTIVE SERIES",
                    desc: "High-speed circuit documentation & twilight machine portraits.",
                    slug: "/automotive",
                    img: "/portfolio/automotive/automotive-01.jpg",
                  },
                  {
                    num: "02",
                    title: "EDITORIAL PORTRAITS",
                    desc: "Intimate character studies & natural light monochrome plates.",
                    slug: "/portraits",
                    img: "/portfolio/portrait/portrait-01.jpg",
                  },
                  {
                    num: "03",
                    title: "WEDDING MONOGRAPH",
                    desc: "Unscripted documentary coverage of rain-soaked vows & pure joy.",
                    slug: "/weddings",
                    img: "/portfolio/wedding/wedding-01.jpg",
                  },
                  {
                    num: "04",
                    title: "EVENTS & NEWBORN",
                    desc: "Organic in-home documentation & unhurried familial milestones.",
                    slug: "/newborn",
                    img: "/portfolio/newborn/newborn-01.jpg",
                  },
                  {
                    num: "05",
                    title: "COMMERCIAL & BRAND",
                    desc: "Architectural interiors, luxury lookbooks, & brand narratives.",
                    slug: "/commercial",
                    img: "/portfolio/commercial/commercial-01.jpg",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.slug}
                    onMouseEnter={() => setActiveChapter(idx)}
                    onMouseLeave={() => setActiveChapter(null)}
                    className="group py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors hover:bg-[#111111]/[0.02]"
                  >
                    <div className="flex items-baseline gap-8 md:gap-16">
                      <span className="display text-2xl md:text-4xl text-[#666666] group-hover:text-[#111111] font-bold transition-colors">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="display text-4xl md:text-6xl font-bold tracking-tight text-[#111111] group-hover:translate-x-3 transition-transform duration-500">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-[#666666] font-normal tracking-wide">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-center">
                      <Link
                        href={item.slug}
                        className="inline-flex items-center gap-3 border border-[#111111]/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-[#111111] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-[#FAFAF7] cursor-pointer"
                      >
                        <span>EXPLORE GALLERY</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
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
        </div>
        </motion.main>
      )}
    </div>
  );
}
