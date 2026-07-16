"use client";

import { FadeUp } from "@/components/animations/FadeUp";

const steps = [
  {
    number: 1,
    title: "Choose Package",
    description: "Browse our services and select what suits your vision.",
  },
  {
    number: 2,
    title: "Book Date",
    description: "Pick your preferred date and confirm the session.",
  },
  {
    number: 3,
    title: "Photoshoot Day",
    description: "Relax and enjoy — we handle the creative direction.",
  },
  {
    number: 4,
    title: "Professional Editing",
    description: "Every image is carefully color-graded and retouched.",
  },
  {
    number: 5,
    title: "Gallery Delivery",
    description: "Receive your polished gallery within 5–7 working days.",
  },
];

export function BookingProcessSection() {
  return (
    <section className="section-pad bg-mainz">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeUp>
          <p className="text-editorial-subheading mb-4 text-center text-mainz-muted">
            Simple Process
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-editorial-heading mb-16 text-center text-white md:mb-24">
            HOW IT WORKS
          </h2>
        </FadeUp>

        {/* Desktop Timeline (horizontal) */}
        <div className="hidden md:block">
          <div className="flex items-start">
            {steps.map((step, index) => (
              <FadeUp
                key={step.number}
                delay={0.15 + index * 0.1}
                className="flex flex-1 items-start"
              >
                {/* Step */}
                <div className="flex flex-1 flex-col items-center text-center">
                  {/* Number Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white transition-colors duration-300">
                    <span className="font-bebas text-xl text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-bebas text-lg tracking-wide text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[160px] text-xs leading-relaxed text-mainz-muted">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="mt-6 h-[2px] flex-1 bg-mainz-border" />
                )}
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (vertical) */}
        <div className="md:hidden">
          <div className="relative ml-6">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-mainz-border" />

            {steps.map((step, index) => (
              <FadeUp
                key={step.number}
                delay={0.1 + index * 0.08}
                className="relative pb-10 pl-10 last:pb-0"
              >
                {/* Number Circle */}
                <div className="absolute -left-[23px] top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-mainz">
                  <span className="font-bebas text-xl text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bebas text-lg tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mainz-muted">
                  {step.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
