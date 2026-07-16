"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";

const portfolioItems = [
  { src: "/portfolio/featured/featured-01.jpg", category: "Wedding", location: "Kuala Lumpur" },
  { src: "/portfolio/portrait/portrait-02.jpg", category: "Portrait", location: "Penang" },
  { src: "/portfolio/automotive/auto-02.jpg", category: "Automotive", location: "Sepang" },
  { src: "/portfolio/events/event-02.jpg", category: "Events", location: "Shah Alam" },
  { src: "/portfolio/featured/featured-04.jpg", category: "Pre-Wedding", location: "Langkawi" },
  { src: "/portfolio/portrait/portrait-03.jpg", category: "Portrait", location: "Kuala Lumpur" },
  { src: "/portfolio/featured/featured-06.jpg", category: "Wedding", location: "Melaka" },
  { src: "/portfolio/automotive/auto-04.jpg", category: "Automotive", location: "Putrajaya" },
  { src: "/portfolio/events/event-04.jpg", category: "Graduation", location: "Cyberjaya" },
  { src: "/portfolio/featured/featured-07.jpg", category: "Wedding", location: "Johor Bahru" },
  { src: "/portfolio/portrait/portrait-05.jpg", category: "Portrait", location: "George Town" },
  { src: "/portfolio/featured/featured-09.jpg", category: "Pre-Wedding", location: "Cameron Highlands" },
  { src: "/portfolio/automotive/auto-06.jpg", category: "Automotive", location: "Kuala Lumpur" },
  { src: "/portfolio/events/event-06.jpg", category: "Events", location: "Petaling Jaya" },
];

const aspectRatios = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[4/3]",
];

function PortfolioItem({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ratio = aspectRatios[index % aspectRatios.length];

  return (
    <FadeUp delay={index * 0.05} className="mb-4 break-inside-avoid md:mb-5">
      <div
        className={`group relative ${ratio} w-full cursor-pointer overflow-hidden rounded-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={item.src}
            alt={`${item.category} photography — ${item.location}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-[1]"
          animate={{
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0.35)"
              : "rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.span
          className="absolute left-4 top-4 z-[2] rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm"
          initial={{ opacity: 0, y: -8 }}
          animate={
            isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {item.category}
        </motion.span>

        <motion.span
          className="absolute bottom-4 left-4 z-[2] font-space text-sm text-white/80"
          initial={{ opacity: 0, y: 8 }}
          animate={
            isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
          }
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
        >
          {item.location}
        </motion.span>
      </div>
    </FadeUp>
  );
}

export function FeaturedPortfolioSection() {
  return (
    <section id="portfolio" className="section-pad-lg relative">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 text-center md:mb-20">
          <FadeUp>
            <span className="text-editorial-subheading mb-4 block text-mainz-beige">
              Portfolio
            </span>
          </FadeUp>
          <TextReveal
            text="SELECTED WORKS"
            className="text-editorial-display"
            delay={0.1}
            type="char"
          />
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 md:gap-5">
          {portfolioItems.map((item, i) => (
            <PortfolioItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
