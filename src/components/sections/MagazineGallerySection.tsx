"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  location: string;
  lens: string;
  iso: string;
  aperture: string;
  shutter: string;
}

const automotivePhotos: PhotoItem[] = [
  { id: "a1", src: "/portfolio/automotive/auto-03.jpg", title: "Sepang GT-3 Performance", category: "Automotive", location: "Sepang Circuit", lens: "RF 70-200mm f/2.8L", iso: "100", aperture: "f/2.8", shutter: "1/1600s" },
  { id: "a2", src: "/portfolio/automotive/auto-04.jpg", title: "Midnight Carbon Fiber", category: "Automotive", location: "Putrajaya", lens: "RF 50mm f/1.8 STM", iso: "800", aperture: "f/1.8", shutter: "1/125s" },
  { id: "a3", src: "/portfolio/automotive/auto-01.jpg", title: "Apex Corner Exit", category: "Automotive", location: "Sepang Track", lens: "RF 70-200mm f/2.8L", iso: "200", aperture: "f/4.0", shutter: "1/2000s" },
  { id: "a4", src: "/portfolio/automotive/auto-06.jpg", title: "Sculptured Metal Reflection", category: "Automotive", location: "Kuala Lumpur", lens: "RF 24-70mm f/2.8L", iso: "160", aperture: "f/2.8", shutter: "1/500s" },
];

const portraitPhotos: PhotoItem[] = [
  { id: "p1", src: "/portfolio/portrait/portrait-04.jpg", title: "Intimate Character Light", category: "Portrait", location: "Kuala Lumpur Studio", lens: "RF 85mm f/1.2L", iso: "100", aperture: "f/1.4", shutter: "1/400s" },
  { id: "p2", src: "/portfolio/featured/featured-12.jpg", title: "Golden Hour Silhouette", category: "Portrait", location: "Penang Island", lens: "RF 50mm f/1.8 STM", iso: "100", aperture: "f/2.0", shutter: "1/1000s" },
  { id: "p3", src: "/portfolio/portrait/portrait-01.jpg", title: "Editorial Vogue Study", category: "Portrait", location: "Shah Alam", lens: "RF 85mm f/1.2L", iso: "200", aperture: "f/1.8", shutter: "1/320s" },
  { id: "p4", src: "/portfolio/portrait/portrait-07.jpg", title: "Atmospheric Studio Contrast", category: "Portrait", location: "Petaling Jaya", lens: "RF 50mm f/1.8 STM", iso: "100", aperture: "f/2.2", shutter: "1/640s" },
];

const weddingPhotos: PhotoItem[] = [
  { id: "w1", src: "/portfolio/events/event-03.jpg", title: "Eternal Vows at Sunset", category: "Wedding", location: "Langkawi Resort", lens: "RF 28-70mm f/2L", iso: "160", aperture: "f/2.0", shutter: "1/1250s" },
  { id: "w2", src: "/portfolio/featured/featured-01.jpg", title: "The Grand Reception Vow", category: "Wedding", location: "Kuala Lumpur City", lens: "RF 50mm f/1.8 STM", iso: "400", aperture: "f/1.8", shutter: "1/250s" },
  { id: "w3", src: "/portfolio/featured/featured-07.jpg", title: "Bridal Elegance & Lace", category: "Wedding", location: "George Town", lens: "RF 85mm f/1.2L", iso: "100", aperture: "f/1.4", shutter: "1/800s" },
];

const eventPhotos: PhotoItem[] = [
  { id: "e1", src: "/portfolio/events/event-01.jpg", title: "Graduation Honor & Pride", category: "Events", location: "Cyberjaya University", lens: "RF 50mm f/1.8 STM", iso: "200", aperture: "f/2.0", shutter: "1/640s" },
  { id: "e2", src: "/portfolio/events/event-05.jpg", title: "Milestone Celebration Joy", category: "Events", location: "Putrajaya Lake", lens: "RF 24-70mm f/2.8L", iso: "100", aperture: "f/3.2", shutter: "1/1000s" },
  { id: "e3", src: "/portfolio/featured/featured-03.jpg", title: "Pre-Wedding Coastal Walk", category: "Pre-Wedding", location: "Port Dickson", lens: "RF 85mm f/1.2L", iso: "100", aperture: "f/1.6", shutter: "1/1600s" },
  { id: "e4", src: "/portfolio/featured/featured-09.jpg", title: "Highland Tea Plantation Romance", category: "Pre-Wedding", location: "Cameron Highlands", lens: "RF 50mm f/1.8 STM", iso: "100", aperture: "f/2.0", shutter: "1/1250s" },
];

function PhotoCard({ photo, aspect = "aspect-[4/5]" }: { photo: PhotoItem; aspect?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full ${aspect} rounded-sm overflow-hidden border border-black/[0.1] bg-[#f2f2f2] group cursor-pointer shadow-md`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        fill
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={95}
      />

      {/* Light Reflection Glare Sweep on Hover */}
      <div className="absolute inset-0 id-card-shine pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Camera Settings & Title Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 camera-overlay p-6 flex flex-col justify-between text-white z-20"
          >
            {/* Top Registration Badge */}
            <div className="flex items-center justify-between text-[9px] font-[family-name:var(--font-space-grotesk)] tracking-[0.25em] uppercase">
              <span className="bg-white/20 px-2.5 py-1 rounded backdrop-blur-md">
                {photo.category}
              </span>
              <span className="text-white/80">{photo.location}</span>
            </div>

            {/* Bottom Title & Camera Settings Grid */}
            <div>
              <h4 className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-3xl tracking-wide uppercase leading-tight mb-3 text-white">
                {photo.title}
              </h4>

              {/* Camera Settings Bar */}
              <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/20 text-[9px] font-[family-name:var(--font-space-grotesk)] tracking-wider">
                <div>
                  <span className="text-white/50 block text-[7px] uppercase">Lens</span>
                  <span className="font-mono font-medium truncate block">{photo.lens.split(" ")[1] || photo.lens}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[7px] uppercase">Aperture</span>
                  <span className="font-mono font-medium">{photo.aperture}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[7px] uppercase">Shutter</span>
                  <span className="font-mono font-medium">{photo.shutter}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[7px] uppercase">ISO</span>
                  <span className="font-mono font-medium">{photo.iso}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MagazineGallerySection() {
  return (
    <div className="w-full">
      {/* CHAPTER 01: AUTOMOTIVE SERIES — Asymmetric Large Featured Magazine Layout */}
      <section id="gallery-automotive" className="magazine-spread py-24 md:py-32 px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <span className="text-magazine-label text-[#666666] block mb-2">CHAPTER 01</span>
            <h2 className="text-magazine-heading text-[#111111] leading-none">
              AUTOMOTIVE SERIES
            </h2>
          </div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] max-w-md">
            Sculptured carbon fiber, glowing brake discs, and aerodynamic symmetry documented across Sepang International Circuit and midnight urban highways.
          </p>
        </div>

        {/* Layout 1: Asymmetric Magazine Grid (1 large hero left, 2 stacked right) */}
        <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <PhotoCard photo={automotivePhotos[0]} aspect="aspect-[16/11]" />
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <PhotoCard photo={automotivePhotos[1]} aspect="aspect-[16/10]" />
            <PhotoCard photo={automotivePhotos[2]} aspect="aspect-[16/10]" />
          </div>
        </div>
      </section>

      {/* CHAPTER 02: PORTRAIT ARCHIVES — Vertical Editorial Storytelling Layout */}
      <section id="gallery-portraits" className="magazine-spread py-24 md:py-32 px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <span className="text-magazine-label text-[#666666] block mb-2">CHAPTER 02</span>
            <h2 className="text-magazine-heading text-[#111111] leading-none">
              EDITORIAL PORTRAITS
            </h2>
          </div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] max-w-md">
            Raw emotion and intimate lighting balance. We strip away artificial filters to capture the genuine character and vulnerability of each subject.
          </p>
        </div>

        {/* Layout 2: Vertical Storytelling Grid (4 balanced vertical portraits with staggered alignment) */}
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="lg:-translate-y-6">
            <PhotoCard photo={portraitPhotos[0]} aspect="aspect-[3/4]" />
          </div>
          <div className="lg:translate-y-6">
            <PhotoCard photo={portraitPhotos[1]} aspect="aspect-[3/4]" />
          </div>
          <div className="lg:-translate-y-6">
            <PhotoCard photo={portraitPhotos[2]} aspect="aspect-[3/4]" />
          </div>
          <div className="lg:translate-y-6">
            <PhotoCard photo={portraitPhotos[3]} aspect="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* CHAPTER 03: WEDDINGS & VOWS — Large Cinematic Spread & Masonry */}
      <section id="gallery-weddings" className="magazine-spread py-24 md:py-32 px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <span className="text-magazine-label text-[#666666] block mb-2">CHAPTER 03</span>
            <h2 className="text-magazine-heading text-[#111111] leading-none">
              WEDDINGS & VOWS
            </h2>
          </div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] max-w-md">
            Eternal celebrations captured with editorial elegance. From intimate morning preparations to grand reception toasts under crystal chandeliers.
          </p>
        </div>

        {/* Layout 3: 1 Full-Width Cinematic Master Spread + 2 Side-by-Side Detail Shots */}
        <div className="my-12 space-y-8">
          <PhotoCard photo={weddingPhotos[0]} aspect="aspect-[21/9]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhotoCard photo={weddingPhotos[1]} aspect="aspect-[16/10]" />
            <PhotoCard photo={weddingPhotos[2]} aspect="aspect-[16/10]" />
          </div>
        </div>
      </section>

      {/* CHAPTER 04: EVENTS & PRE-WEDDING — Horizontal Film Strip Layout */}
      <section id="gallery-events" className="magazine-spread py-24 md:py-32 px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <span className="text-magazine-label text-[#666666] block mb-2">CHAPTER 04</span>
            <h2 className="text-magazine-heading text-[#111111] leading-none">
              EVENTS & MILESTONES
            </h2>
          </div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] max-w-md">
            Graduation honors, pre-wedding coastal journeys, and high-energy cultural events documented with split-second mechanical shutter timing.
          </p>
        </div>

        {/* Layout 4: Film Strip Gallery (4 side-by-side frames resembling 35mm film negatives) */}
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} aspect="aspect-[4/5]" />
          ))}
        </div>
      </section>
    </div>
  );
}
