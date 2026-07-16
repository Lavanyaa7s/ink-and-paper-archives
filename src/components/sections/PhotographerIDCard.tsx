"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { FadeUp } from "@/components/animations/FadeUp";

export function PhotographerIDCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
    setShinePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section ref={containerRef} className="section-pad-lg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="text-editorial-subheading text-mainz-beige mb-4">The Photographer</p>
          <h2 className="text-editorial-heading">BEHIND THE CAMERA</h2>
        </FadeUp>

        <div className="flex justify-center" style={{ perspective: "1200px" }}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Lanyard */}
            <div className="flex flex-col items-center mb-0 relative z-10">
              {/* Clip */}
              <div className="w-8 h-3 bg-zinc-600 rounded-t-sm" />
              {/* Strap */}
              <div className="w-[2px] h-16 md:h-24 bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800" />
            </div>

            {/* Card */}
            <motion.div
              className="relative w-[300px] md:w-[340px] rounded-2xl overflow-hidden cursor-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
                scale: isHovered ? 1.02 : 1,
                y: isHovered ? -5 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.5,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Background */}
              <div className="bg-mainz-card border border-mainz-border p-6 md:p-8 relative">
                {/* Shine overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 rounded-2xl"
                  style={{
                    opacity: isHovered ? 0.12 : 0,
                    background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                  }}
                />

                {/* Card hole for lanyard */}
                <div className="flex justify-center -mt-2 mb-4">
                  <div className="w-6 h-3 rounded-full bg-mainz border border-mainz-border" />
                </div>

                {/* Top label */}
                <div className="text-center mb-5">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)]">
                    Media Access Pass
                  </p>
                  <p className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider mt-1">
                    MAINZ MEDIA
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-mainz-border mb-5" />

                {/* Photo */}
                <div className="flex justify-center mb-5">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 border-mainz-border">
                    <Image
                      src="/portfolio/photographer/maindhaa.png"
                      alt="Maindhaa"
                      fill
                      className="object-cover object-top"
                      sizes="120px"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center mb-5">
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl md:text-3xl tracking-wider">
                    MAINDHAA
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-mainz-beige font-[family-name:var(--font-space-grotesk)] mt-1">
                    Photographer
                  </p>
                </div>

                {/* Info Row */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-mainz/50 rounded-lg p-2.5 text-center border border-mainz-border">
                    <p className="text-[8px] tracking-[0.2em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)]">
                      Access
                    </p>
                    <p className="text-xs font-medium mt-0.5">All Areas</p>
                  </div>
                  <div className="bg-mainz/50 rounded-lg p-2.5 text-center border border-mainz-border">
                    <p className="text-[8px] tracking-[0.2em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)]">
                      Role
                    </p>
                    <p className="text-xs font-medium mt-0.5 flex items-center justify-center gap-1">
                      <span>📷</span> Lead
                    </p>
                  </div>
                </div>

                {/* QR Code placeholder */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white rounded-lg p-1.5">
                    {/* Simple QR-like pattern */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="0" y="0" width="30" height="30" fill="black" rx="2" />
                      <rect x="70" y="0" width="30" height="30" fill="black" rx="2" />
                      <rect x="0" y="70" width="30" height="30" fill="black" rx="2" />
                      <rect x="8" y="8" width="14" height="14" fill="white" rx="1" />
                      <rect x="78" y="8" width="14" height="14" fill="white" rx="1" />
                      <rect x="8" y="78" width="14" height="14" fill="white" rx="1" />
                      <rect x="12" y="12" width="6" height="6" fill="black" />
                      <rect x="82" y="12" width="6" height="6" fill="black" />
                      <rect x="12" y="82" width="6" height="6" fill="black" />
                      <rect x="35" y="0" width="5" height="5" fill="black" />
                      <rect x="45" y="0" width="5" height="5" fill="black" />
                      <rect x="55" y="0" width="5" height="5" fill="black" />
                      <rect x="35" y="10" width="5" height="5" fill="black" />
                      <rect x="50" y="10" width="5" height="5" fill="black" />
                      <rect x="35" y="20" width="5" height="5" fill="black" />
                      <rect x="45" y="20" width="5" height="5" fill="black" />
                      <rect x="60" y="20" width="5" height="5" fill="black" />
                      <rect x="0" y="35" width="5" height="5" fill="black" />
                      <rect x="10" y="35" width="5" height="5" fill="black" />
                      <rect x="25" y="35" width="5" height="5" fill="black" />
                      <rect x="35" y="35" width="5" height="5" fill="black" />
                      <rect x="50" y="35" width="5" height="5" fill="black" />
                      <rect x="65" y="35" width="5" height="5" fill="black" />
                      <rect x="80" y="35" width="5" height="5" fill="black" />
                      <rect x="95" y="35" width="5" height="5" fill="black" />
                      <rect x="0" y="45" width="5" height="5" fill="black" />
                      <rect x="15" y="45" width="5" height="5" fill="black" />
                      <rect x="30" y="45" width="5" height="5" fill="black" />
                      <rect x="45" y="45" width="5" height="5" fill="black" />
                      <rect x="55" y="45" width="5" height="5" fill="black" />
                      <rect x="70" y="45" width="5" height="5" fill="black" />
                      <rect x="85" y="45" width="5" height="5" fill="black" />
                      <rect x="0" y="55" width="5" height="5" fill="black" />
                      <rect x="20" y="55" width="5" height="5" fill="black" />
                      <rect x="35" y="55" width="5" height="5" fill="black" />
                      <rect x="50" y="55" width="5" height="5" fill="black" />
                      <rect x="60" y="55" width="5" height="5" fill="black" />
                      <rect x="75" y="55" width="5" height="5" fill="black" />
                      <rect x="90" y="55" width="5" height="5" fill="black" />
                      <rect x="35" y="65" width="5" height="5" fill="black" />
                      <rect x="50" y="65" width="5" height="5" fill="black" />
                      <rect x="60" y="65" width="5" height="5" fill="black" />
                      <rect x="75" y="70" width="5" height="5" fill="black" />
                      <rect x="85" y="70" width="5" height="5" fill="black" />
                      <rect x="95" y="70" width="5" height="5" fill="black" />
                      <rect x="70" y="80" width="5" height="5" fill="black" />
                      <rect x="85" y="80" width="5" height="5" fill="black" />
                      <rect x="70" y="90" width="5" height="5" fill="black" />
                      <rect x="80" y="90" width="5" height="5" fill="black" />
                      <rect x="95" y="90" width="5" height="5" fill="black" />
                    </svg>
                  </div>
                </div>

                {/* Barcode */}
                <div className="flex justify-center gap-[1px] mb-3 opacity-40">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white h-6"
                      style={{
                        width: `${Math.random() > 0.5 ? 2 : 1}px`,
                      }}
                    />
                  ))}
                </div>

                {/* Card Number */}
                <p className="text-center text-[8px] tracking-[0.3em] text-mainz-muted font-[family-name:var(--font-space-grotesk)]">
                  MM-2025-001 · MALAYSIA
                </p>
              </div>
            </motion.div>

            {/* Card shadow */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-white/[0.02] blur-2xl rounded-full z-0"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.6 : 0.3,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
