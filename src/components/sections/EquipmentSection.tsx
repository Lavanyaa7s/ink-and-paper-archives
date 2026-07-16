"use client";

import { FadeUp } from "@/components/animations/FadeUp";

const equipment = [
  {
    icon: "📷",
    name: "Canon EOS R6 Mark II",
    category: "Camera",
    specs: "Full Frame Mirrorless",
  },
  {
    icon: "🔭",
    name: "RF 50mm f/1.8 STM",
    category: "Lens",
    specs: "Prime Portrait Lens",
  },
  {
    icon: "🛸",
    name: "DJI Mini 3 Pro",
    category: "Drone",
    specs: "4K Aerial",
  },
  {
    icon: "💡",
    name: "Godox V1",
    category: "Lighting",
    specs: "Portable Flash",
  },
  {
    icon: "🎥",
    name: "DJI RS 3 Mini",
    category: "Stabilizer",
    specs: "3-Axis Gimbal",
  },
];

export function EquipmentSection() {
  return (
    <section className="section-pad bg-mainz">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeUp>
          <p className="text-editorial-subheading mb-4 text-mainz-muted">
            Professional Tools
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-editorial-heading mb-14 text-white md:mb-20">
            OUR GEAR
          </h2>
        </FadeUp>

        {/* Equipment Cards — horizontal scroll on mobile, row on desktop */}
        <FadeUp delay={0.2}>
          <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 scrollbar-none md:mx-0 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
            {equipment.map((item, index) => (
              <FadeUp key={item.name} delay={0.15 + index * 0.07}>
                <div className="min-w-[220px] rounded-xl border border-mainz-border bg-mainz-card p-6 transition-all duration-500 hover:border-mainz-border-hover md:min-w-0">
                  {/* Icon */}
                  <span className="mb-4 block text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>

                  {/* Category */}
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mainz-beige">
                    {item.category}
                  </p>

                  {/* Name */}
                  <h3 className="mt-1 font-bebas text-lg tracking-wide text-white">
                    {item.name}
                  </h3>

                  {/* Specs */}
                  <p className="mt-2 text-xs leading-relaxed text-mainz-muted">
                    {item.specs}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
