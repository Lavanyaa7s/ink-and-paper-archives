"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Image from "next/image";

export function PortfolioCoverSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mainz via-[#0c0c0c] to-mainz" />

      {/* Main composition container */}
      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* The layered composition */}
        <div className="relative flex items-center justify-center" style={{ height: "clamp(500px, 80vh, 900px)" }}>

          {/* Back text layer - PORT */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none select-none"
            style={{ y: textY }}
            animate={{ x: mousePos.x * -5, y: mousePos.y * -3 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="font-[family-name:var(--font-bebas-neue)] text-[clamp(5rem,20vw,18rem)] leading-[0.85] tracking-[-0.02em] text-white/[0.06] whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              PORTFOLIO
            </motion.h2>
          </motion.div>

          {/* Portrait image layer */}
          <motion.div
            className="relative z-[2] w-[clamp(260px,40vw,480px)] h-[clamp(340px,55vh,640px)]"
            style={{ scale: imageScale, y: imageY }}
            animate={{ x: mousePos.x * 8, y: mousePos.y * 5 }}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-full overflow-hidden rounded-sm"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
            >
              <Image
                src="/portfolio/photographer/maindhaa.png"
                alt="Maindhaa — Photographer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 70vw, 40vw"
                quality={90}
              />
              {/* Subtle gradient at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
            </motion.div>
          </motion.div>

          {/* Front text layer - PORTFOLIO (overlapping image) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none select-none"
            style={{ y: textY }}
            animate={{ x: mousePos.x * -10, y: mousePos.y * -6 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main visible text with mix-blend-mode for see-through effect */}
              <motion.h2
                className="font-[family-name:var(--font-bebas-neue)] text-[clamp(5rem,20vw,18rem)] leading-[0.85] tracking-[-0.02em] text-white whitespace-nowrap"
                style={{ mixBlendMode: "difference" }}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                PORTFOLIO
              </motion.h2>
            </div>
          </motion.div>

          {/* Editorial metadata — left */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-[5] hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)] -rotate-90 origin-left translate-x-4">
                Selected Works
              </span>
            </div>
          </motion.div>

          {/* Editorial metadata — right */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-[5] hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)] rotate-90 origin-right -translate-x-4 block">
              EST. 2023
            </span>
          </motion.div>

          {/* Bottom editorial line */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-mainz-muted font-[family-name:var(--font-space-grotesk)]">
              Mainz Media — Cinematic Photography
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
