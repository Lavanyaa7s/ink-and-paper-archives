"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { MagneticButton } from "@/components/animations/MagneticButton";

const showcaseSlides = [
  {
    id: "01",
    src: "/portfolio/automotive/auto-03.jpg",
    category: "Automotive Series",
    title: "SEPANG HIGH PERFORMANCE",
    subtitle: "The Chronicles of Speed & Precision Engineering",
    location: "Sepang International Circuit",
    year: "2025",
  },
  {
    id: "02",
    src: "/portfolio/events/event-03.jpg",
    category: "Wedding & Celebrations",
    title: "ETERNAL VOWS",
    subtitle: "Timeless Moments Captured with Cinematic Depth",
    location: "Kuala Lumpur",
    year: "2025",
  },
  {
    id: "03",
    src: "/portfolio/featured/featured-12.jpg",
    category: "Editorial Portraiture",
    title: "LIGHT & SHADOW",
    subtitle: "Intimate Character Studies & Editorial Excellence",
    location: "Penang Studio",
    year: "2025",
  },
  {
    id: "04",
    src: "/portfolio/portrait/portrait-04.jpg",
    category: "Fine Art Sessions",
    title: "THE ART OF EMOTION",
    subtitle: "Handcrafted Visual Narratives for Private Clients",
    location: "Shah Alam",
    year: "2025",
  },
  {
    id: "05",
    src: "/portfolio/automotive/auto-04.jpg",
    category: "Automotive Series",
    title: "AUTOMOTIVE SYMPHONY",
    subtitle: "Sculptured Metal Meets Dramatic Atmospheric Lighting",
    location: "Putrajaya",
    year: "2025",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(nextSlide, 6500);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  const slide = showcaseSlides[currentSlide];

  const scrollToPortfolio = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#060606] pt-24 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* Background ambient blur of current slide */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.src + "-ambient"}
          className="absolute inset-0 z-0 opacity-20 pointer-events-none filter blur-[120px] scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={slide.src}
            alt="ambient"
            fill
            className="object-cover"
            sizes="100vw"
            quality={40}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] vignette pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto flex-1 flex flex-col justify-between my-auto py-4 md:py-8">
        {/* Top Header Row within Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-editorial-subheading text-mainz-beige mb-2"
            >
              Maindhaa Photography Studio · Malaysia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white max-w-2xl leading-[1.1]"
            >
              Capturing moments that last forever with cinematic depth & editorial storytelling.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 self-start md:self-end"
          >
            <MagneticButton strength={0.2}>
              <button
                onClick={scrollToPortfolio}
                className="border border-white/20 bg-white/[0.03] hover:bg-white hover:text-[#060606] transition-all duration-300 rounded-full px-6 py-3 text-[11px] font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase"
              >
                Explore Gallery
              </button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <button
                onClick={scrollToContact}
                className="bg-mainz-beige text-[#060606] hover:bg-white transition-all duration-300 rounded-full px-6 py-3 text-[11px] font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase font-medium"
              >
                Book Session ↗
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Center Showcase Slide Stage */}
        <div
          className="relative w-full flex-1 min-h-[420px] md:min-h-[540px] lg:min-h-[620px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d0d] shadow-2xl group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="absolute inset-0 w-full h-full"
              initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.05 }}
              animate={{ clipPath: "inset(0 0% 0 0)", scale: 1 }}
              exit={{ clipPath: "inset(0 0% 0 100%)", scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1440px) 100vw, 1440px"
                quality={95}
              />
              {/* Elegant dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-transparent opacity-80" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-info"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-mainz-beige/20 text-mainz-beige border border-mainz-beige/30 font-[family-name:var(--font-space-grotesk)]">
                    {slide.category}
                  </span>
                  <span className="text-xs text-white/50 font-[family-name:var(--font-space-grotesk)]">
                    {slide.location} · {slide.year}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-white uppercase mt-2">
                  {slide.title}
                </h2>
                <p className="text-mainz-secondary text-sm md:text-base font-light mt-1 max-w-lg">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-4 self-end">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-all flex items-center justify-center text-lg"
                aria-label="Previous slide"
              >
                ←
              </button>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-xs font-[family-name:var(--font-space-grotesk)] tracking-[0.2em]">
                <span className="text-mainz-beige font-medium">{slide.id}</span>
                <span className="text-white/40"> / 0{showcaseSlides.length}</span>
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-all flex items-center justify-center text-lg"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip / Indicators */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {showcaseSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs tracking-wider whitespace-nowrap font-[family-name:var(--font-space-grotesk)] ${
                  currentSlide === idx
                    ? "border-mainz-beige bg-mainz-beige/10 text-white font-medium"
                    : "border-white/[0.06] text-mainz-muted hover:text-white hover:border-white/20"
                }`}
              >
                <span className="text-[10px] text-mainz-beige opacity-80">{s.id}</span>
                <span>{s.category.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[11px] text-mainz-muted tracking-[0.2em] uppercase font-[family-name:var(--font-space-grotesk)]">
            <span>Scroll Down to Discover</span>
            <div className="w-12 h-px bg-mainz-beige/40 relative overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 w-1/2 bg-mainz-beige"
                animate={{ left: ["-50%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
