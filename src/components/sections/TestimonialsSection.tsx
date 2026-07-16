"use client";

import { motion } from "motion/react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";

const testimonials = [
  {
    quote:
      "Maindhaa captured our wedding day so beautifully — every photo felt like a scene from a film. We keep discovering new favourites every time we look through the gallery.",
    name: "Aisyah & Farid",
    event: "Wedding",
    stars: 5,
  },
  {
    quote:
      "The attention to detail is incredible. From the pre-shoot consultation to the final edits, every step felt professional and personal. The portraits exceeded every expectation.",
    name: "Priya Nair",
    event: "Portrait Session",
    stars: 5,
  },
  {
    quote:
      "We hired Mainz Media for our corporate gala and the photos were outstanding. The way he captured the energy of the room, the candid moments — it was exactly what we needed.",
    name: "Ahmad Razak",
    event: "Corporate Event",
    stars: 5,
  },
  {
    quote:
      "I wanted graduation photos that didn't look generic, and Maindhaa delivered beyond anything I imagined. The cinematic style made my photos stand out from everyone else's.",
    name: "Mei Ling Tan",
    event: "Graduation",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-pad-lg relative">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center md:mb-20">
          <FadeUp>
            <span className="text-editorial-subheading mb-4 block text-mainz-beige">
              Testimonials
            </span>
          </FadeUp>
          <TextReveal
            text="KIND WORDS"
            className="text-editorial-display"
            delay={0.1}
            type="char"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((testimonial, i) => {
            const rotation = i % 2 === 0 ? -1 : 1;

            return (
              <FadeUp key={i} delay={i * 0.12}>
                <motion.div
                  className="rounded-xl border border-mainz-border bg-mainz-card p-8 md:p-10"
                  style={{ rotate: `${rotation}deg` }}
                  whileHover={{ rotate: 0, scale: 1.01 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="mb-6 flex gap-1 text-mainz-beige">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <span key={j} className="text-sm">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mb-8 font-space text-base leading-relaxed text-mainz-secondary italic md:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div>
                    <span className="block font-space text-sm font-semibold text-white">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block font-space text-xs tracking-wider text-mainz-muted uppercase">
                      {testimonial.event}
                    </span>
                  </div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
