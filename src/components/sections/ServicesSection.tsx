"use client";

import { FadeUp } from "@/components/animations/FadeUp";

const services = [
  {
    icon: "💍",
    name: "Wedding Photography",
    description:
      "Timeless moments captured with cinematic elegance. From ceremony to reception, every detail preserved.",
    price: "From RM 1,500",
  },
  {
    icon: "📸",
    name: "Portrait Sessions",
    description:
      "Personal portraits that reveal character. Studio or outdoor, crafted to tell your story.",
    price: "From RM 300",
  },
  {
    icon: "🎉",
    name: "Event Coverage",
    description:
      "Corporate events, parties, and gatherings documented with precision and artistry.",
    price: "From RM 800",
  },
  {
    icon: "🏎️",
    name: "Automotive Shoots",
    description:
      "Your machine, captured in its best light. Dynamic angles and dramatic compositions.",
    price: "From RM 500",
  },
  {
    icon: "🏢",
    name: "Commercial",
    description:
      "Brand imagery that elevates your business. Products, spaces, and campaigns shot to perfection.",
    price: "From RM 2,000",
  },
  {
    icon: "🎓",
    name: "Graduation",
    description:
      "Celebrate your milestone with stunning graduation portraits you'll treasure forever.",
    price: "From RM 250",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-mainz">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeUp>
          <p className="text-editorial-subheading mb-4 text-mainz-muted">
            What We Offer
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-editorial-heading mb-16 text-white md:mb-20">
            SERVICES
          </h2>
        </FadeUp>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeUp key={service.name} delay={0.1 + index * 0.08}>
              <div className="card-glow group rounded-xl border border-mainz-border bg-mainz-card p-8 transition-all duration-500 hover:border-mainz-border-hover">
                {/* Icon */}
                <span className="mb-5 block text-3xl" aria-hidden="true">
                  {service.icon}
                </span>

                {/* Service Name */}
                <h3 className="font-bebas text-2xl tracking-wide text-white">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-mainz-secondary">
                  {service.description}
                </p>

                {/* Price */}
                <p className="mt-4 font-medium text-mainz-beige">
                  {service.price}
                </p>

                {/* Learn More */}
                <button className="mt-6 inline-flex items-center gap-1 text-sm text-mainz-muted transition-colors duration-300 hover:text-white">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
