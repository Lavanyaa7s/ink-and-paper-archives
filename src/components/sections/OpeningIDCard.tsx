"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { playShutterSound } from "@/utils/playShutterSound";

export function OpeningIDCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track scroll inside this intro viewport to lift the ID card up like flipping open a magazine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // As user scrolls down, ID card lifts upward off screen with a 3D tilt, revealing the portfolio book underneath
  const cardTranslateY = useTransform(smoothScroll, [0, 0.7], ["0%", "-140%"]);
  const cardRotateXScroll = useTransform(smoothScroll, [0, 0.7], [0, 45]);
  const cardOpacity = useTransform(smoothScroll, [0.5, 0.8], [1, 0]);
  const blackScreenOpacity = useTransform(smoothScroll, [0, 0.35], [1, 0]);
  const lanyardOpacity = useTransform(smoothScroll, [0, 0.25], [1, 0]);

  useEffect(() => {
    // Trigger opening sequence after a brief 400ms delay on load
    const timer = setTimeout(() => {
      setHasStarted(true);
      playShutterSound();
    }, 400);

    const handleKeyDown = () => {
      if (!hasStarted) {
        setHasStarted(true);
        playShutterSound();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasStarted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setMousePos({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[160vh] w-full bg-[#fafafa] selection:bg-black selection:text-white"
    >
      {/* Sticky Opening Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[1400px]">
        {/* Black screen backdrop that fades to pure white as visitor scrolls */}
        <motion.div
          className="absolute inset-0 bg-black z-0 pointer-events-none"
          style={{ opacity: blackScreenOpacity }}
        />

        {/* Lanyard Assembly */}
        <motion.div
          className="relative z-10 flex flex-col items-center -mb-4 pointer-events-none"
          style={{ opacity: lanyardOpacity }}
          initial={{ y: -300 }}
          animate={hasStarted ? { y: 0 } : { y: -300 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 14,
            mass: 1.2,
          }}
        >
          {/* Lanyard Top Attachment point */}
          <div className="w-[18px] h-8 bg-[#1f1f1f] border border-white/20 rounded-t-md shadow-lg" />
          {/* Lanyard Strap */}
          <div className="w-[24px] h-24 md:h-36 bg-gradient-to-b from-[#111111] via-[#222222] to-[#111111] border-x border-white/10 shadow-xl flex flex-col items-center justify-center overflow-hidden">
            <span className="text-[8px] font-[family-name:var(--font-bebas-neue)] tracking-[0.25em] text-white/40 -rotate-90 whitespace-nowrap">
              MAINZ MEDIA STUDIO · CREW ACCESS
            </span>
          </div>
          {/* Metal Clip Mechanism */}
          <div className="w-8 h-6 bg-gradient-to-b from-[#b0b0b0] to-[#707070] rounded-sm border border-black/30 shadow-md flex items-center justify-center">
            <div className="w-4 h-2 bg-[#222222] rounded-full" />
          </div>
        </motion.div>

        {/* Dropping 3D Photographer ID Card */}
        <motion.div
          className="relative z-20 cursor-grab active:cursor-grabbing"
          style={{
            y: cardTranslateY,
            rotateX: cardRotateXScroll,
            opacity: cardOpacity,
            transformOrigin: "50% -120px",
          }}
          initial={{ y: -600, rotateZ: 8 }}
          animate={
            hasStarted
              ? {
                  y: 0,
                  rotateZ: [8, -5, 3, -1.5, 0],
                }
              : { y: -600, rotateZ: 8 }
          }
          transition={{
            y: { type: "spring", stiffness: 100, damping: 16, mass: 1 },
            rotateZ: { duration: 2.8, ease: "easeOut" },
          }}
        >
          <motion.div
            className="id-card-glass id-card-hover relative w-[330px] sm:w-[380px] rounded-2xl p-7 text-[#111111] overflow-hidden border border-black/[0.12] transition-transform duration-200"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setIsHovered(true);
              playShutterSound();
            }}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: isHovered ? mousePos.y : 0,
              rotateY: isHovered ? mousePos.x : 0,
              scale: isHovered ? 1.03 : 1,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glass Shine Reflection Overlay */}
            <div className="id-card-shine absolute inset-0 rounded-2xl pointer-events-none z-30" />

            {/* Lanyard Hole Punch */}
            <div className="flex justify-center -mt-2 mb-5">
              <div className="w-12 h-3.5 rounded-full bg-[#fafafa] border border-black/[0.15] shadow-inner flex items-center justify-center">
                <div className="w-8 h-1 rounded-full bg-black/10" />
              </div>
            </div>

            {/* Credential Header */}
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 mb-5">
              <div>
                <span className="text-[9px] font-[family-name:var(--font-space-grotesk)] tracking-[0.3em] uppercase text-[#666666] block font-semibold">
                  Official Credential · 2025
                </span>
                <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide text-[#000000] mt-0.5">
                  MAINZ MEDIA
                </h2>
              </div>
              {/* Camera Icon */}
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            {/* Main Portrait Photo Centerpiece */}
            <div className="flex justify-center mb-5">
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden border-2 border-black/[0.1] shadow-md bg-[#f2f2f2]">
                <Image
                  src="/portfolio/photographer/maindhaa.png"
                  alt="Maindhaa — Lead Photographer"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-125 hover:filter-none transition-all duration-500"
                  sizes="160px"
                />
              </div>
            </div>

            {/* Photographer Identity Information */}
            <div className="text-center mb-5">
              <span className="text-[10px] font-[family-name:var(--font-space-grotesk)] tracking-[0.3em] uppercase text-[#666666] font-medium">
                Professional Photographer
              </span>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl tracking-wider text-[#000000] leading-none mt-1">
                MAINDHAA
              </h3>
              <div className="flex items-center justify-center gap-2 mt-1.5 text-xs font-[family-name:var(--font-space-grotesk)] text-[#111111]">
                <span className="font-semibold tracking-wider">MALAYSIA</span>
                <span>·</span>
                <span className="text-[#666666]">@mainz.media</span>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5 border-y border-black/[0.08] py-3 text-[11px] font-[family-name:var(--font-space-grotesk)]">
              <div>
                <span className="text-[8px] tracking-[0.25em] uppercase text-[#666666] block">
                  Member ID
                </span>
                <span className="font-mono font-bold text-[#111111] tracking-wider">
                  MM-2025-001
                </span>
              </div>
              <div className="text-right">
                <span className="text-[8px] tracking-[0.25em] uppercase text-[#666666] block">
                  Issue Date
                </span>
                <span className="font-mono font-bold text-[#111111] tracking-wider">
                  OCTOBER 2025
                </span>
              </div>
            </div>

            {/* QR Code & Barcode Row */}
            <div className="flex items-center justify-between pt-1">
              {/* QR Code */}
              <div className="w-14 h-14 bg-black p-1.5 rounded-md shadow-sm">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <rect x="0" y="0" width="30" height="30" rx="3" />
                  <rect x="70" y="0" width="30" height="30" rx="3" />
                  <rect x="0" y="70" width="30" height="30" rx="3" />
                  <rect x="7" y="7" width="16" height="16" fill="black" />
                  <rect x="77" y="7" width="16" height="16" fill="black" />
                  <rect x="7" y="77" width="16" height="16" fill="black" />
                  <rect x="35" y="5" width="8" height="8" />
                  <rect x="48" y="5" width="8" height="8" />
                  <rect x="58" y="15" width="8" height="8" />
                  <rect x="35" y="25" width="8" height="8" />
                  <rect x="50" y="35" width="8" height="8" />
                  <rect x="68" y="38" width="8" height="8" />
                  <rect x="85" y="38" width="8" height="8" />
                  <rect x="35" y="50" width="8" height="8" />
                  <rect x="55" y="55" width="8" height="8" />
                  <rect x="35" y="70" width="8" height="8" />
                  <rect x="52" y="72" width="8" height="8" />
                  <rect x="70" y="65" width="8" height="8" />
                  <rect x="85" y="80" width="12" height="12" />
                </svg>
              </div>

              {/* Realistic Barcode */}
              <div className="flex-1 ml-4 flex flex-col items-end">
                <div className="flex items-center gap-[1.5px] h-9 w-full justify-end opacity-85">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#000000] h-full"
                      style={{
                        width: `${Math.random() > 0.6 ? 3 : Math.random() > 0.3 ? 2 : 1}px`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[7px] font-mono tracking-[0.25em] text-[#666666] mt-1">
                  MAINZ MEDIA OFFICIAL CREDENTIAL
                </span>
              </div>
            </div>
          </motion.div>

          {/* ID Card Drop Shadow on White Floor */}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-black/[0.18] filter blur-xl rounded-full z-0 pointer-events-none"
            animate={{
              scale: isHovered ? 1.15 : 1,
              opacity: isHovered ? 0.28 : 0.18,
            }}
          />
        </motion.div>

        {/* Scroll Instruction Hint below card */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={hasStarted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-[9px] font-[family-name:var(--font-space-grotesk)] tracking-[0.35em] uppercase text-white md:text-[#666666] font-medium">
            Scroll To Flip Open Portfolio Book
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border border-white/50 md:border-black/30 flex justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-white md:bg-black"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
