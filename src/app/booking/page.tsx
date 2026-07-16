"use client";

import { useState } from "react";
import { BookPage } from "@/components/BookPage";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <BookPage
      chapter="CHAPTER 09"
      chapterTitle="SESSION REQUEST"
      page="PAGE 28—29"
      prev={{ to: "/pricing", label: "PRIVATE COMMISSIONS" }}
      next={{ to: "/end", label: "BACK COVER" }}
    >
      <div className="mx-auto max-w-4xl py-12 md:py-20">
        {/* Editorial Header */}
        <div className="mb-24">
          <div className="label text-muted-foreground font-bold tracking-[0.28em]">
            VOLUME 09 · INITIATE ARCHIVAL INQUIRY
          </div>
          <h1 className="mt-6 display text-[13vw] md:text-[9rem] leading-[0.8] font-bold text-foreground">
            BOOK YOUR
            <br />
            SESSION
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-light text-foreground leading-relaxed">
            Leave your details below. We will personally review your request and contact you within 48 hours.
          </p>
          <div className="mt-12 h-px w-32 bg-foreground/30" />
        </div>

        {submitted ? (
          <div className="mt-20 border-y border-foreground py-20 text-center">
            <div className="label text-muted-foreground font-bold tracking-[0.28em]">
              STATUS · REGISTRATION RECEIVED
            </div>
            <div className="mt-6 display text-5xl md:text-7xl font-bold text-foreground">
              THANK YOU.
            </div>
            <p className="mt-6 max-w-md mx-auto text-base text-muted-foreground leading-relaxed">
              Maindhaa has received your inquiry. A curated proposal and availability window will be sent to your email and WhatsApp shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-16 md:space-y-24"
          >
            {/* Minimalist Line 1: Name */}
            <div>
              <label htmlFor="name" className="label text-muted-foreground font-bold tracking-[0.26em] block">
                01 / YOUR NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Farid &amp; Aisyah or Muhammad"
                className="mt-4 w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-4 text-2xl md:text-4xl font-light text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-foreground transition-colors"
              />
            </div>

            {/* Minimalist Line 2: Contact Details */}
            <div>
              <label htmlFor="contact" className="label text-muted-foreground font-bold tracking-[0.26em] block">
                02 / EMAIL OR WHATSAPP NUMBER
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="e.g. maindha@gmail.com or +60 16-322 8337"
                className="mt-4 w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-4 text-2xl md:text-4xl font-light text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-foreground transition-colors"
              />
            </div>

            {/* Minimalist Line 3: Discipline */}
            <div>
              <label htmlFor="discipline" className="label text-muted-foreground font-bold tracking-[0.26em] block">
                03 / WHAT ARE WE CAPTURING?
              </label>
              <input
                id="discipline"
                name="discipline"
                type="text"
                required
                placeholder="e.g. Wedding on 10 Feb 2026, Portrait Study, or Automotive Series"
                className="mt-4 w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-4 text-2xl md:text-4xl font-light text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-foreground transition-colors"
              />
            </div>

            {/* Action */}
            <div className="pt-8 flex items-center justify-between border-t border-foreground/15">
              <span className="text-xs uppercase font-bold tracking-[0.24em] text-muted-foreground">
                DIRECT TO MAINDHAA · MALAYSIA STUDIO
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-6 bg-foreground text-background px-10 py-5 text-sm font-bold uppercase tracking-[0.24em] transition-all hover:bg-muted-foreground hover:scale-[1.02] cursor-pointer"
              >
                <span>REQUEST COMMISSION</span>
                <span>→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </BookPage>
  );
}
