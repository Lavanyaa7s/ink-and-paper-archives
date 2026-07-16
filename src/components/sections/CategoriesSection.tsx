"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";

const categories = [
  {
    name: "Wedding",
    image: "/portfolio/events/event-03.jpg",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    name: "Portrait",
    image: "/portfolio/portrait/portrait-01.jpg",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Automotive",
    image: "/portfolio/automotive/auto-01.jpg",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Events",
    image: "/portfolio/events/event-01.jpg",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    name: "Pre-Wedding",
    image: "/portfolio/featured/featured-03.jpg",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Graduation",
    image: "/portfolio/events/event-05.jpg",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
];

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`${category.span} relative`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div
        className={`group relative ${category.aspect} w-full cursor-pointer overflow-hidden rounded-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
        </motion.div>

        {/* Dark Overlay */}
        <motion.div
          className="absolute inset-0 z-[1]"
          animate={{
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(0, 0, 0, 0.4)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
          <span className="text-editorial-heading text-white">
            {category.name}
          </span>

          {/* View Gallery — appears on hover */}
          <motion.span
            className="text-editorial-subheading mt-3 text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={
              isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            View Gallery
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export function CategoriesSection() {
  return (
    <section id="categories" className="section-pad-lg relative">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <FadeUp>
            <span className="text-editorial-subheading mb-4 block text-mainz-beige">
              Services
            </span>
          </FadeUp>
          <TextReveal
            text="WHAT WE CAPTURE"
            className="text-editorial-display"
            delay={0.1}
            type="char"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {categories.map((category, i) => (
            <CategoryCard key={category.name} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
