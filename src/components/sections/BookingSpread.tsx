"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function BookingSpread() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "Wedding Photography",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="magazine-spread min-h-screen w-full py-24 md:py-32 px-6 sm:px-12 lg:px-20 flex flex-col justify-between bg-[#ffffff]">
      {/* Top Registration Line */}
      <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
        <span className="text-magazine-label text-[#111111]">BOOK 01 · PRIVATE COMMISSION & BOOKING</span>
        <span className="text-magazine-label">PAGE 08 — BACK COVER</span>
      </div>

      <div className="max-w-6xl w-full mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column — Huge Typography & Direct Buttons */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-magazine-label text-[#666666] block mb-3">RESERVE YOUR DATE</span>
            <h2 className="text-magazine-heading text-[#111111] leading-none mb-6">
              BOOK YOUR SESSION
            </h2>
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base text-[#666666] leading-relaxed font-light mb-8">
              Whether reserving dates for a multi-day destination wedding celebration or booking private track access for an automotive photoshoot, we ensure complete dedication to every commission.
            </p>
          </div>

          {/* Instant Connect Buttons */}
          <div className="space-y-4 pt-6 border-t border-black/[0.08]">
            <span className="text-magazine-label text-[#111111] block mb-2">DIRECT CLIENT CHANNELS</span>
            
            <a
              href="https://wa.me/60163228337"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-magazine justify-between py-4 px-8 text-sm group"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">💬</span>
                <span>WhatsApp Studio (+60 16-322 8337)</span>
              </span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href="https://www.instagram.com/mainz.media"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-magazine-outline justify-between py-4 px-8 text-sm group"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">📸</span>
                <span>Instagram Portfolio (@mainz.media)</span>
              </span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column — Simple Clean Editorial Form */}
        <div className="lg:col-span-7 bg-[#fafafa] p-8 sm:p-12 border border-black/[0.08] rounded-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 text-center"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-4xl text-[#111111] uppercase tracking-wide">
                INQUIRY RECEIVED
              </h3>
              <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#666666] max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong className="text-black font-semibold">{formData.name || "Client"}</strong>. Maindhaa and the Mainz Media studio team will review your preferred date (`{formData.date || "2025"}`) and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 btn-magazine-outline py-2.5 px-6 text-xs"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-magazine-label text-[#111111] block mb-2">FULL NAME *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aisyah & Farid"
                    className="w-full bg-white border border-black/[0.15] px-4 py-3 rounded-sm text-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-magazine-label text-[#111111] block mb-2">EMAIL ADDRESS *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@example.com"
                    className="w-full bg-white border border-black/[0.15] px-4 py-3 rounded-sm text-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-magazine-label text-[#111111] block mb-2">COMMISSION TYPE *</label>
                  <select
                    value={formData.package}
                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    className="w-full bg-white border border-black/[0.15] px-4 py-3 rounded-sm text-sm focus:border-black focus:outline-none transition-colors"
                  >
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Automotive & Track Series">Automotive & Track Series</option>
                    <option value="Editorial & Portrait Sessions">Editorial & Portrait Sessions</option>
                    <option value="Events & Live Coverage">Events & Live Coverage</option>
                    <option value="Graduation Milestones">Graduation Milestones</option>
                    <option value="Commercial & Architectural">Commercial & Architectural</option>
                    <option value="Cinematic Drone Aerials">Cinematic Drone Aerials</option>
                  </select>
                </div>
                <div>
                  <label className="text-magazine-label text-[#111111] block mb-2">PREFERRED DATE *</label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-black/[0.15] px-4 py-3 rounded-sm text-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-magazine-label text-[#111111] block mb-2">PROJECT DETAILS & LOCATION</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the event venue, specific automotive models, or creative portrait ideas..."
                  className="w-full bg-white border border-black/[0.15] px-4 py-3 rounded-sm text-sm focus:border-black focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-magazine py-4 text-xs tracking-[0.25em]"
              >
                <span>SEND OFFICIAL COMMISSION REQUEST →</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* MINIMAL PRINT FOOTER SPREAD */}
      <footer className="pt-12 mt-12 border-t border-black/[0.12]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 pb-8">
          <div>
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-wider uppercase text-[#111111]">
              MAINZ MEDIA
            </h3>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#666666] mt-1">
              Capturing moments that last forever with cinematic depth & editorial storytelling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-[family-name:var(--font-space-grotesk)] text-[#111111]">
            <a href="https://www.instagram.com/mainz.media" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
            <span>·</span>
            <a href="https://wa.me/60163228337" target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp (+60 16-322 8337)
            </a>
            <span>·</span>
            <a href="mailto:maindha@gmail.com" className="hover:underline">
              Email (maindha@gmail.com)
            </a>
            <span>·</span>
            <span>Malaysia · Worldwide</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-black/[0.06] text-[10px] text-[#666666] font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase">
          <span>© 2025 Mainz Media Photography. All rights reserved.</span>
          <span>Designed & Engineered as a Luxury Printed Book Experience</span>
        </div>
      </footer>
    </section>
  );
}
