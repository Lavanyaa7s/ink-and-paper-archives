"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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

  return (
    <section id="gallery" className="py-24 px-6 bg-[#92000A] text-[#FAFCBE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-2">GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">My Visual Diary</h2>
          <p className="opacity-80 max-w-2xl mx-auto font-medium text-lg">See the world through my lens: adventures in photos and videos.</p>
        </div>

        {/* Pills Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#FAFCBE] text-[#92000A] border-[#FAFCBE]'
                  : 'bg-transparent text-[#FAFCBE] border-[#FAFCBE]/30 hover:border-[#FAFCBE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Swiper */}
        <div className="w-full relative py-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full h-full"
            key={activeCategory} // Force re-render on category change to center slides properly
          >
            {filteredImages.map((img, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/10] relative rounded-2xl overflow-hidden shadow-2xl mx-auto border border-[#FAFCBE]/10">
                  <Image src={img.src} alt={img.category} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* Swiper Pagination Styling */
        .swiper-pagination-bullet {
          background: #FAFCBE !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: #FAFCBE !important;
        }
      `}</style>
    </section>
  );
}
