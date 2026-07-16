"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const servicesList = [
  {
    id: "s1",
    title: "Wedding Photography",
    price: "From RM 1,800",
    duration: "Full Day (10–12 Hours)",
    deliverables: "400+ Color Graded Editorial Photos, Online Private Gallery, Luxury Hardcover Album, USB Box set.",
    badge: "Most Requested",
  },
  {
    id: "s2",
    title: "Automotive & Track Series",
    price: "From RM 650",
    duration: "3–4 Hours Session",
    deliverables: "35+ High-Resolution Rolling & Static Shots, Sepang or Urban Highway location, Rig/Strobe Lighting.",
    badge: "Specialized",
  },
  {
    id: "s3",
    title: "Editorial & Portrait Sessions",
    price: "From RM 450",
    duration: "2 Hours Session",
    deliverables: "25+ Retouched Magazine Quality Portraits, Natural Light or Studio Setup, Multiple Outfit Changes.",
    badge: "Personal",
  },
  {
    id: "s4",
    title: "Events & Live Coverage",
    price: "From RM 850",
    duration: "Half Day (4–6 Hours)",
    deliverables: "150+ Candid & Stage Highlights, Fast 48-Hour Turnaround for Press & Social Media.",
    badge: "Corporate",
  },
  {
    id: "s5",
    title: "Graduation Milestones",
    price: "From RM 350",
    duration: "1.5 Hours Session",
    deliverables: "20+ Edited Campus & Family Portraits, Digital Download Link, Solo & Group Formations.",
    badge: "Academic",
  },
  {
    id: "s6",
    title: "Commercial & Architectural",
    price: "From RM 2,500",
    duration: "Multi-Day or Full Day",
    deliverables: "Full Commercial Usage Rights, Interior/Exterior Spatial Lighting, High-Resolution TIFF & RAW delivery.",
    badge: "Enterprise",
  },
  {
    id: "s7",
    title: "Cinematic Drone Aerials",
    price: "From RM 500",
    duration: "Add-On or Standalone",
    deliverables: "4K/60fps HDR Aerial Footage & Top-Down Architectural Stills by FAA/CAAM Certified Pilot.",
    badge: "4K Aerial",
  },
];

export function ServicesPricingSpread() {
  const [expandedId, setExpandedId] = useState<string | null>("s1");

  return (
    <section id="services" className="magazine-spread min-h-screen w-full py-24 md:py-32 px-6 sm:px-12 lg:px-20 flex flex-col justify-between">
      {/* Top Editorial Line */}
      <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
        <span className="text-magazine-label text-[#111111]">BOOK 01 · SERVICES & COMMISSION RATES</span>
        <span className="text-magazine-label">PAGE 06 — 07</span>
      </div>

      <div className="max-w-7xl w-full mx-auto my-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-8 border-b border-black/[0.08]">
          <div>
            <span className="text-magazine-label text-[#666666] block mb-2">COMMISSIONS & PACKAGES</span>
            <h2 className="text-magazine-heading text-[#111111] leading-none">
              SERVICES
            </h2>
          </div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] max-w-md">
            Hover or tap each card to expand detailed package inclusions and investment structures. Custom multi-day itinerary options are available upon inquiry.
          </p>
        </div>

        {/* Expandable Minimalist Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((srv) => {
            const isExpanded = expandedId === srv.id;
            return (
              <motion.div
                key={srv.id}
                layout
                onClick={() => setExpandedId(isExpanded ? null : srv.id)}
                onMouseEnter={() => setExpandedId(srv.id)}
                className={`p-6 sm:p-8 rounded-sm border cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                  isExpanded
                    ? "bg-[#000000] text-white border-[#000000] shadow-2xl scale-[1.02]"
                    : "bg-[#ffffff] text-[#111111] border-black/[0.12] hover:border-black/30 shadow-sm"
                }`}
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between mb-4 text-[10px] font-[family-name:var(--font-space-grotesk)] tracking-[0.2em] uppercase">
                    <span
                      className={`px-2.5 py-1 rounded ${
                        isExpanded
                          ? "bg-white/20 text-white"
                          : "bg-black/[0.06] text-[#666666]"
                      }`}
                    >
                      {srv.badge}
                    </span>
                    <span className={isExpanded ? "text-white/70" : "text-[#666666]"}>
                      {srv.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl tracking-wide uppercase leading-tight ${
                      isExpanded ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {srv.title}
                  </h3>

                  {/* Expanded Deliverables Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-white/20"
                      >
                        <span className="text-[9px] tracking-[0.25em] uppercase text-white/50 block mb-1">
                          Package Deliverables
                        </span>
                        <p className="text-xs sm:text-sm font-[family-name:var(--font-space-grotesk)] text-white/90 leading-relaxed font-light">
                          {srv.deliverables}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Price & Action Row */}
                <div className="mt-8 pt-6 border-t border-current/10 flex items-center justify-between">
                  <div>
                    <span className={`text-[8px] tracking-[0.25em] uppercase block ${isExpanded ? "text-white/50" : "text-[#666666]"}`}>
                      Investment
                    </span>
                    <span className={`font-[family-name:var(--font-space-grotesk)] font-bold text-lg sm:text-xl ${isExpanded ? "text-white" : "text-[#111111]"}`}>
                      {srv.price}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    onClick={(e) => {
                      e.stopPropagation();
                      const el = document.querySelector("#booking");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-medium transition-all ${
                      isExpanded
                        ? "bg-white text-black hover:bg-[#dadada]"
                        : "bg-black text-white hover:bg-[#333333]"
                    }`}
                  >
                    Select →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Editorial Line */}
      <div className="flex items-center justify-between pt-8 border-t border-black/[0.08]">
        <span className="text-magazine-label">MAINZ MEDIA PHOTOGRAPHY COMMISSIONS</span>
        <span className="text-magazine-label text-[#111111]">TURN PAGE TO BOOK SESSION ↓</span>
      </div>
    </section>
  );
}
