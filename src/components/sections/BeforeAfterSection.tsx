"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";

export function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="section-pad-lg relative">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center md:mb-20">
          <FadeUp>
            <span className="text-editorial-subheading mb-4 block text-mainz-beige">
              Post-Production
            </span>
          </FadeUp>
          <TextReveal
            text="THE EDIT"
            className="text-editorial-display"
            delay={0.1}
            type="char"
          />
          <FadeUp delay={0.3}>
            <p className="text-editorial-body mx-auto mt-6 max-w-lg">
              Drag the slider to see how raw moments are transformed into
              cinematic frames through careful color grading and editing.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.4}>
          <div
            ref={containerRef}
            className="comparison-slider relative aspect-[16/10] w-full overflow-hidden rounded-xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* After Image (bottom layer — full color) */}
            <div className="absolute inset-0">
              <Image
                src="/portfolio/featured/featured-05.jpg"
                alt="After editing"
                fill
                className="pointer-events-none object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={90}
                priority
              />
            </div>

            {/* Before Image (top layer — desaturated, clipped) */}
            <div
              className="before-image"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src="/portfolio/featured/featured-05.jpg"
                alt="Before editing"
                fill
                className="pointer-events-none object-cover"
                style={{
                  filter:
                    "grayscale(100%) brightness(0.7) contrast(0.8)",
                }}
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={90}
              />
            </div>

            {/* Labels */}
            <motion.span
              className="absolute left-6 top-6 z-[5] rounded-full bg-black/50 px-4 py-1.5 font-space text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm"
              animate={{
                opacity: sliderPosition > 15 ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              Before
            </motion.span>
            <motion.span
              className="absolute right-6 top-6 z-[5] rounded-full bg-black/50 px-4 py-1.5 font-space text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm"
              animate={{
                opacity: sliderPosition < 85 ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              After
            </motion.span>

            {/* Divider Line */}
            <div
              className="divider z-[10]"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="divider-handle">
                <span className="flex items-center gap-1 text-sm font-medium text-black select-none">
                  <span className="text-xs">◂</span>
                  <span className="text-xs">▸</span>
                </span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
