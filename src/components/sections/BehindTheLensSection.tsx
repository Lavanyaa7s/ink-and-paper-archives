"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";

const milestones = [
  {
    year: "2023",
    title: "Discovered Photography Passion",
    description:
      "What started as a hobby of capturing everyday moments quickly became an obsession with light, composition, and the art of storytelling through images.",
  },
  {
    year: "2024",
    title: "First Professional Shoot",
    description:
      "Booked the first paid engagement — a wedding in Kuala Lumpur. The experience confirmed that this craft was not just a passion, but a calling.",
  },
  {
    year: "2025",
    title: "Mainz Media Established",
    description:
      "Formally launched Mainz Media as a professional photography brand, offering cinematic coverage for weddings, events, portraits, and automotive.",
  },
];

const equipment = [
  "Canon EOS R6",
  "RF 50mm f/1.8",
  "DJI Mini 3",
  "Godox V1",
];

function TimelineDot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative z-[2] h-3 w-3 rounded-full border-2 border-white bg-mainz-card"
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}

export function BehindTheLensSection() {
  return (
    <section className="relative bg-mainz-card">
      <div className="section-pad-lg mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <FadeUp>
            <span className="text-editorial-subheading mb-4 block text-mainz-beige">
              The Journey
            </span>
          </FadeUp>
          <TextReveal
            text="BEHIND THE LENS"
            className="text-editorial-display"
            delay={0.1}
            type="char"
          />
        </div>

        {/* Big Editorial Quote */}
        <FadeUp delay={0.3}>
          <blockquote className="mx-auto mb-24 max-w-4xl text-center md:mb-32">
            <p className="text-editorial-display leading-[1.1] text-white">
              &ldquo;Every click is a conversation between light and
              emotion.&rdquo;
            </p>
            <span className="mt-6 block font-space text-sm tracking-wider text-mainz-muted uppercase">
              — Maindhaa
            </span>
          </blockquote>
        </FadeUp>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-mainz-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-20">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0;

              return (
                <FadeUp key={i} delay={i * 0.15}>
                  <div className="relative flex items-start gap-8 md:gap-0">
                    {/* Desktop: Alternating layout */}
                    {/* Left Content (for even items on desktop) */}
                    <div
                      className={`hidden md:flex md:w-1/2 ${
                        isEven
                          ? "justify-end pr-12"
                          : "order-3 justify-start pl-12"
                      }`}
                    >
                      <div className={`max-w-xs ${isEven ? "text-right" : "text-left"}`}>
                        <span className="mb-2 block font-bebas text-3xl tracking-tight text-mainz-beige">
                          {milestone.year}
                        </span>
                        <h3 className="mb-3 font-space text-lg font-semibold text-white">
                          {milestone.title}
                        </h3>
                        <p className="font-space text-sm leading-relaxed text-mainz-muted">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-4 z-[2] flex items-center justify-center md:relative md:left-auto md:order-2 md:flex md:w-0 md:justify-center">
                      <TimelineDot />
                    </div>

                    {/* Right spacer (for even) / Content (for odd) */}
                    <div
                      className={`hidden md:block md:w-1/2 ${
                        isEven ? "order-3" : ""
                      }`}
                    />

                    {/* Mobile Content */}
                    <div className="ml-4 pl-6 md:hidden">
                      <span className="mb-2 block font-bebas text-3xl tracking-tight text-mainz-beige">
                        {milestone.year}
                      </span>
                      <h3 className="mb-3 font-space text-lg font-semibold text-white">
                        {milestone.title}
                      </h3>
                      <p className="font-space text-sm leading-relaxed text-mainz-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* Equipment List */}
        <FadeUp delay={0.5}>
          <div className="mt-24 border-t border-mainz-border pt-12 md:mt-32">
            <span className="text-editorial-subheading mb-8 block text-center text-mainz-muted">
              Equipment
            </span>
            <div className="flex flex-wrap items-center justify-center gap-0">
              {equipment.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="px-5 py-2 font-space text-sm text-mainz-secondary md:px-8 md:text-base">
                    {item}
                  </span>
                  {i < equipment.length - 1 && (
                    <div className="h-4 w-px bg-mainz-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
