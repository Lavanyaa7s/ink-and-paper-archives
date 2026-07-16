"use client";

import Link from "next/link";

export default function EndPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#FAFAF7]">
      <div className="pointer-events-none absolute inset-8 border border-[#FAFAF7]/20 md:inset-16" />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="label font-bold tracking-[0.26em]" style={{ color: "#666666" }}>
          BACK COVER · END OF BOOK 01
        </div>

        <h1 className="mt-10 display text-[14vw] leading-[0.82] md:text-[8rem] text-[#FAFAF7]">
          LET&apos;S CREATE
          <br />
          SOMETHING
          <br />
          TIMELESS.
        </h1>

        <p className="mt-12 max-w-md text-base leading-relaxed font-light" style={{ color: "#666666" }}>
          Thank You.
          <br />
          Mainz Media Photography Collection 2025.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-10 label-ink tracking-[0.24em]" style={{ color: "#FAFAF7" }}>
          <a href="https://wa.me/60163228337" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
            WHATSAPP (+60 16-322 8337)
          </a>
          <a href="https://www.instagram.com/mainz.media" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
            INSTAGRAM (@MAINZ.MEDIA)
          </a>
          <a href="mailto:maindha@gmail.com" className="hover:opacity-60 transition-opacity">
            EMAIL (MAINDHA@GMAIL.COM)
          </a>
        </div>

        <div className="mt-20 label font-bold tracking-[0.26em]" style={{ color: "#666666" }}>
          MALAYSIA · EST. 2023
        </div>

        <Link href="/" className="mt-14 label-ink tracking-[0.24em] hover:opacity-60 transition-opacity" style={{ color: "#FAFAF7" }}>
          ← RETURN TO COVER
        </Link>
      </div>
    </div>
  );
}
