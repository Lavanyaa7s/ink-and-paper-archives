"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";

const eventTypes = [
  "Wedding",
  "Portrait",
  "Events",
  "Automotive",
  "Graduation",
  "Other",
];

const inputClasses =
  "w-full border-b border-mainz-border bg-transparent py-3 text-white placeholder:text-mainz-muted focus:border-white focus:outline-none transition-colors duration-300 font-space text-sm";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}. I'd like to book a ${formData.eventType || "photography"} session${formData.date ? ` on ${formData.date}` : ""}. ${formData.message}`;
    window.open(
      `https://wa.me/60163228337?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="section-pad-lg bg-mainz">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <FadeUp>
          <p className="text-editorial-subheading mb-4 text-mainz-muted">
            Get In Touch
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-editorial-heading mb-16 max-w-4xl text-white md:mb-20">
            LET&apos;S CREATE SOMETHING BEAUTIFUL
          </h2>
        </FadeUp>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Form */}
          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`${inputClasses} cursor-pointer appearance-none`}
                >
                  <option value="" disabled className="bg-mainz-card text-mainz-muted">
                    Event Type
                  </option>
                  {eventTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-mainz-card text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`${inputClasses} cursor-pointer`}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-mainz-secondary"
              >
                Send Message
              </button>
            </form>
          </FadeUp>

          {/* Right: Contact Info */}
          <FadeUp delay={0.3}>
            <div className="space-y-10">
              {/* Email */}
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-mainz-muted">
                  Email
                </p>
                <a
                  href="mailto:maindha@gmail.com"
                  className="font-space text-lg text-white transition-colors duration-300 hover:text-mainz-beige"
                >
                  maindha@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-mainz-muted">
                  WhatsApp
                </p>
                <p className="mb-3 font-space text-lg text-white">
                  +60 16-322 8337
                </p>
                <a
                  href="https://wa.me/60163228337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Instagram */}
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-mainz-muted">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/mainz.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space text-lg text-white transition-colors duration-300 hover:text-mainz-beige"
                >
                  @mainz.media
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-mainz-muted">
                  Location
                </p>
                <p className="font-space text-lg text-white">Malaysia</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
