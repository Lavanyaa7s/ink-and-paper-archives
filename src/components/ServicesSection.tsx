"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Weddings & Vows',
    description: 'Documenting your most sacred day with an editorial, fly-on-the-wall approach.',
    image: '/portfolio/events/event-03.jpg',
  },
  {
    title: 'Automotive',
    description: 'Precision rig lighting and dusk circuit documentation for high-performance machines.',
    image: '/portfolio/automotive/auto-01.jpg',
  },
  {
    title: 'Commercial',
    description: 'High-impact interior and architectural photography for luxury lookbooks.',
    image: '/portfolio/featured/featured-03.jpg',
  },
  {
    title: 'Fine Art Portraiture',
    description: 'Stylized, cinematic portraits designed to capture authentic emotional resonance.',
    image: '/portfolio/portrait/portrait-01.jpg',
  },
  {
    title: 'Corporate Events',
    description: 'Professional documentation for summits, product launches, and company milestones.',
    image: '/portfolio/events/event-06.jpg',
  },
  {
    title: 'Motorsports',
    description: 'Raw, aerodynamic aggression captured at the apex of the circuit.',
    image: '/portfolio/automotive/auto-04.jpg',
  },
  {
    title: 'Fashion & Editorial',
    description: 'Vanguard aesthetics engineered for international magazine spreads and campaigns.',
    image: '/portfolio/portrait/portrait-04.jpg',
  },
  {
    title: 'Lifestyle',
    description: 'Natural, organic storytelling that highlights the beauty of everyday moments.',
    image: '/portfolio/events/event-10.jpg',
  },
];

export default function ServicesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#FAFCBE] text-[#92000A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Master Disciplines</h2>
          <p className="opacity-80 max-w-2xl mx-auto font-medium text-lg">Specialized production suites tailored to your exact narrative needs.</p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              variants={fadeUp}
              className="bg-[#92000A] text-[#FAFCBE] rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_20px_50px_rgba(146,0,10,0.4)] hover:-translate-y-2 transition-all duration-300 border border-[#92000A]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden mb-6 border border-[#FAFCBE]/10">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-80 italic flex-grow leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
