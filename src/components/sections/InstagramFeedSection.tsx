"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/FadeUp";

const feedImages = [
  "/portfolio/featured/featured-01.jpg",
  "/portfolio/events/event-03.jpg",
  "/portfolio/automotive/auto-02.jpg",
  "/portfolio/featured/featured-05.jpg",
  "/portfolio/events/event-07.jpg",
  "/portfolio/featured/featured-09.jpg",
  "/portfolio/automotive/auto-05.jpg",
  "/portfolio/events/event-12.jpg",
];

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramFeedSection() {
  return (
    <section className="section-pad bg-mainz">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <FadeUp>
            <p className="text-editorial-subheading mb-4 text-mainz-muted">
              Instagram
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-editorial-heading text-white">
              FOLLOW THE JOURNEY
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-3 font-space text-lg text-mainz-muted">
              @mainz.media
            </p>
          </FadeUp>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {feedImages.map((src, index) => (
            <FadeUp key={src} delay={0.1 + index * 0.05}>
              <a
                href="https://www.instagram.com/mainz.media"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/50">
                  <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <InstagramIcon className="mx-auto mb-2 h-7 w-7 text-white" />
                    <span className="text-xs font-medium tracking-wider text-white">
                      View Post
                    </span>
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        {/* Follow Button */}
        <FadeUp delay={0.3}>
          <div className="mt-14 text-center">
            <a
              href="https://www.instagram.com/mainz.media"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow @mainz.media
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
