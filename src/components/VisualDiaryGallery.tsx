"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const galleryImages = [
  { src: '/portfolio/events/event-03.jpg', category: 'Weddings' },
  { src: '/portfolio/automotive/auto-01.jpg', category: 'Automotive' },
  { src: '/portfolio/featured/featured-03.jpg', category: 'Commercial' },
  { src: '/portfolio/portrait/portrait-01.jpg', category: 'Portraits' },
  { src: '/portfolio/events/event-06.jpg', category: 'Weddings' },
  { src: '/portfolio/automotive/auto-04.jpg', category: 'Automotive' },
  { src: '/portfolio/portrait/portrait-04.jpg', category: 'Portraits' },
  { src: '/portfolio/events/event-10.jpg', category: 'Weddings' },
  { src: '/portfolio/automotive/auto-06.jpg', category: 'Automotive' },
];

const categories = ['All', 'Weddings', 'Automotive', 'Commercial', 'Portraits'];

export default function VisualDiaryGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-[#92000A] text-[#FAFCBE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold tracking-widest uppercase opacity-70 mb-4">GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">My Visual Diary</h2>
          <p className="opacity-80 max-w-md mx-auto font-medium text-lg leading-relaxed">
            See the world through my lens: <br/>adventures in photos and videos
          </p>
        </motion.div>

        {/* Pills Navigation */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex flex-wrap justify-center items-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#FAFCBE] text-[#92000A] border-[#FAFCBE]'
                  : 'bg-transparent text-[#FAFCBE] border-[#FAFCBE]/40 hover:border-[#FAFCBE]'
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="px-6 py-2 rounded-full text-sm font-bold border border-[#FAFCBE]/40 text-[#FAFCBE] hover:bg-[#FAFCBE]/10 flex items-center gap-2 transition-colors">
            View More <span>→</span>
          </button>
        </motion.div>

        {/* 3D Swiper */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
          className="w-full relative py-4"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            modules={[EffectCoverflow, Navigation]}
            className="w-full h-full !pb-8"
            key={activeCategory} // Force re-render on category change to center slides properly
          >
            {filteredImages.map((img, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[480px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mx-auto border border-[#FAFCBE]/10">
                  <Image src={img.src} alt={img.category} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="gallery-prev w-12 h-12 rounded-full border border-[#FAFCBE]/40 flex items-center justify-center text-[#FAFCBE] hover:bg-[#FAFCBE]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="gallery-next w-12 h-12 rounded-full border border-[#FAFCBE]/40 flex items-center justify-center text-[#FAFCBE] hover:bg-[#FAFCBE]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
