"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";

const stats = [
  { number: "3+", label: "Years" },
  { number: "200+", label: "Shoots" },
  { number: "50+", label: "Clients" },
];

export function IntroductionSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-pad-lg relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 xl:gap-28">
          {/* Left — Portrait Image */}
          <motion.div
            className="relative w-full overflow-hidden rounded-lg lg:w-[40%]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <motion.div
                className="absolute inset-0"
                style={{ y: imageY }}
              >
                <Image
                  src="/portfolio/featured/featured-01.jpg"
                  alt="Photography by Maindhaa"
                  fill
                  className="object-cover scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="flex w-full flex-col justify-center lg:w-[60%]">
            <FadeUp delay={0.2}>
              <span className="text-editorial-subheading mb-6 block text-mainz-beige">
                About the Artist
              </span>
            </FadeUp>

            <div className="mb-8">
              <TextReveal
                text="MAINDHAA"
                className="text-editorial-display"
                delay={0.3}
                type="char"
              />
            </div>

            <FadeUp delay={0.5}>
              <p className="text-editorial-body mb-6 max-w-xl">
                A passionate Malaysian photographer specializing in cinematic
                photography that transforms fleeting moments into timeless
                narratives. With an eye for light, emotion, and the spaces
                in between, every frame is crafted to tell a story that
                resonates long after the shutter closes.
              </p>
            </FadeUp>

            <FadeUp delay={0.6}>
              <p className="text-editorial-body mb-12 max-w-xl">
                From intimate portraits to grand celebrations, Mainz Media
                brings a distinctive editorial approach — blending natural
                authenticity with cinematic composition to create images
                that feel both elevated and deeply personal.
              </p>
            </FadeUp>

            {/* Stats Row */}
            <FadeUp delay={0.7}>
              <div className="mb-12 flex gap-12 border-t border-b border-mainz-border py-8 md:gap-16">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <span className="block font-bebas text-4xl tracking-tight text-white md:text-5xl">
                      {stat.number}
                    </span>
                    <span className="text-editorial-subheading mt-1 block text-mainz-muted">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Location & Social */}
            <FadeUp delay={0.8}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
                <div>
                  <span className="text-editorial-subheading mb-1 block text-mainz-muted">
                    Based in
                  </span>
                  <span className="font-space text-lg text-white">
                    Malaysia
                  </span>
                </div>

                <div className="h-8 w-px bg-mainz-border hidden sm:block" />

                <div>
                  <span className="text-editorial-subheading mb-1 block text-mainz-muted">
                    Instagram
                  </span>
                  <a
                    href="https://instagram.com/mainz.media"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-space text-lg text-white transition-colors duration-300 hover:text-mainz-beige"
                  >
                    @mainz.media
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
