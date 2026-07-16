"use client";

import Link from "next/link";

export default function EndPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#FAF9F6]">
      <div className="pointer-events-none absolute inset-8 border border-[#FAF9F6]/20 md:inset-16" />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="label" style={{ color: "#787878" }}>END OF BOOK 01</div>
        <h1 className="mt-10 display text-[16vw] leading-[0.85] md:text-[9rem]">
          MAINZ
          <br />MEDIA
        </h1>
        <p className="mt-14 max-w-md text-sm leading-relaxed" style={{ color: "#787878" }}>
          Capturing stories<br />one frame<br />at a time.
        </p>
        <div className="mt-16 flex gap-10 label-ink" style={{ color: "#FAF9F6" }}>
          <a href="https://www.instagram.com/mainz.media" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">INSTAGRAM</a>
          <a href="https://wa.me/60163228337" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">WHATSAPP</a>
          <a href="mailto:maindha@gmail.com" className="hover:opacity-60">EMAIL</a>
        </div>
        <div className="mt-24 label" style={{ color: "#787878" }}>
          MALAYSIA · EST. 2023
        </div>
        <Link href="/" className="mt-16 label-ink hover:opacity-60" style={{ color: "#FAF9F6" }}>
          ← RETURN TO COVER
        </Link>
      </div>
    </div>
  );
}
