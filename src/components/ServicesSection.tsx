"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#FAFCBE] text-[#92000A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Master Disciplines</h2>
          <p className="opacity-80 max-w-2xl mx-auto font-medium text-lg">Specialized production suites tailored to your exact narrative needs.</p>
        </motion.div>

        {/* Block 1 */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#92000A]/20 order-2 md:order-1 shadow-xl">
            <Image src="/portfolio/events/event-03.jpg" alt="Weddings" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-4">Weddings & Sacred Vows</h3>
            <p className="opacity-80 mb-6 leading-relaxed">
              We document your most sacred day with an editorial, fly-on-the-wall approach. From rain-soaked vows to the final dance, we preserve the authentic resonance of your celebration.
            </p>
            <ul className="space-y-3 opacity-90 font-medium">
              <li className="flex items-center gap-2">✓ Full Day Coverage</li>
              <li className="flex items-center gap-2">✓ Heirloom Print Albums</li>
              <li className="flex items-center gap-2">✓ High-Res Digital Archive</li>
            </ul>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="order-1">
            <h3 className="text-3xl font-bold mb-4">Automotive Engineering</h3>
            <p className="opacity-80 mb-6 leading-relaxed">
              Precision rig lighting, dusk circuit documentation, and dynamic panning shots. We capture the raw aerodynamic aggression and engineering beauty of high-performance machines.
            </p>
            <ul className="space-y-3 opacity-90 font-medium">
              <li className="flex items-center gap-2">✓ Twilight & Night Sessions</li>
              <li className="flex items-center gap-2">✓ Rig & Motion Blur Plates</li>
              <li className="flex items-center gap-2">✓ Private Garage Documentation</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#92000A]/20 order-2 shadow-xl">
            <Image src="/portfolio/automotive/auto-01.jpg" alt="Automotive" fill className="object-cover" />
          </div>
        </motion.div>

        {/* Block 3 */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#92000A]/20 order-2 md:order-1 shadow-xl">
            <Image src="/portfolio/featured/featured-03.jpg" alt="Commercial" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-4">Commercial Architecture</h3>
            <p className="opacity-80 mb-6 leading-relaxed">
              Elevate your brand with high-impact interior and architectural photography. Engineered for luxury lookbooks, hotel portfolios, and international marketing campaigns.
            </p>
            <ul className="space-y-3 opacity-90 font-medium">
              <li className="flex items-center gap-2">✓ Tilt-Shift Perspective Control</li>
              <li className="flex items-center gap-2">✓ Advanced Composite Lighting</li>
              <li className="flex items-center gap-2">✓ Commercial Usage Licensing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
