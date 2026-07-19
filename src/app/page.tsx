"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to receive our final photographs?",
      answer: "We typically deliver the full digital gallery within 4 to 6 weeks. A sneak peek gallery of 20-30 highlights will be provided within 48 hours of your event.",
    },
    {
      question: "Do you travel for out-of-state or international commissions?",
      answer: "Yes, we frequently travel for destination weddings and commercial shoots. Travel fees are calculated based on location and accommodation requirements.",
    },
    {
      question: "What is your booking process and deposit requirement?",
      answer: "To secure your date, we require a signed contract and a 50% non-refundable retainer. The remaining balance is due 14 days before the event.",
    },
    {
      question: "Do you provide videography services as well?",
      answer: "We specialize exclusively in still photography to maintain our high standard of quality. However, we have a trusted network of cinematographers we frequently work alongside.",
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#92000A] text-[#FAFCBE] font-sans selection:bg-[#FAFCBE] selection:text-[#92000A]">
      
      {/* 1. SIMPLE HEADER (Transparent, No Bar) */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-extrabold text-xl tracking-tight uppercase">
            MAINZ MEDIA
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="#services" className="hover:opacity-70 transition-opacity">Services</Link>
            <Link href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</Link>
            <Link href="#faq" className="hover:opacity-70 transition-opacity">FAQ</Link>
          </div>
          <Link 
            href="/booking" 
            className="bg-[#FAFCBE] text-[#92000A] px-6 py-2 rounded-md font-bold text-sm hover:bg-white transition-colors shadow-lg"
          >
            BOOK NOW
          </Link>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION (Exactly matching the user's uploaded image) */}
        <section className="relative w-full h-[85vh] min-h-[600px] bg-[#92000A] text-[#FAFCBE] overflow-hidden flex flex-col justify-between pt-8 md:pt-12">
          


          {/* Massive Typography Background */}
          <div className="absolute top-[45%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none px-2">
            <div className="relative inline-block">
              <h1 className="font-[family-name:var(--font-bodoni)] uppercase text-[14vw] md:text-[11vw] leading-none tracking-tight pr-4 md:pr-10">
                MAINZ MEDIA
              </h1>
              <div className="absolute -bottom-[15%] md:-bottom-[20%] right-[5%] md:right-[10%] text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-great-vibes)] tracking-wide -rotate-2">
                Maindha
              </div>
            </div>
          </div>

          {/* Foreground Portrait Cutout */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] max-w-[650px] h-[65%] md:h-[75%] z-10 pointer-events-none">
            <Image 
              src="/portfolio/photographer/portraitMaindha.png" 
              alt="Maindha Portrait" 
              fill 
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </section>

        {/* 3. SOCIAL PROOF (Champagne Background) */}
        <section className="bg-[#FAFCBE] text-[#92000A] py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-6">
              Trusted by 50+ High-Net-Worth Clients & Brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              <div className="flex items-center gap-2">
                <div className="flex text-[#92000A] text-xl">★★★★★</div>
                <span className="font-bold">5.0 / 5.0</span>
              </div>
              <div className="text-lg font-bold uppercase tracking-wider">Vogue MY</div>
              <div className="text-lg font-bold uppercase tracking-wider">Speedhunters</div>
              <div className="text-lg font-bold uppercase tracking-wider">Tatler</div>
            </div>
          </div>
        </section>

        {/* 4. BENEFITS & ADVANTAGES (Sangria Background) */}
        <section className="py-24 px-6 bg-[#92000A] text-[#FAFCBE]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Mainz Media?</h2>
              <p className="opacity-90 max-w-2xl mx-auto">We don't just take pictures; we engineer physical memories that appreciate in emotional value over time.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Heirloom Quality",
                  desc: "Every plate is developed with strict color science to ensure your images look as striking in 50 years as they do today."
                },
                {
                  title: "Unobtrusive Approach",
                  desc: "We blend into the background, capturing raw, unscripted moments without forcing awkward or artificial poses."
                },
                {
                  title: "Lightning Delivery",
                  desc: "Receive a curated sneak peek gallery within 48 hours, so you can share your monumental moments immediately."
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-[#FAFCBE]/10 p-8 rounded-xl border border-[#FAFCBE]/20 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FAFCBE] text-[#92000A] flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="opacity-80 leading-relaxed text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PRODUCT SERVICE OR FEATURES (Champagne Background) */}
        <section id="services" className="py-24 px-6 bg-[#FAFCBE] text-[#92000A]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Master Disciplines</h2>
              <p className="opacity-80 max-w-2xl mx-auto">Specialized production suites tailored to your exact narrative needs.</p>
            </div>

            {/* Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#92000A]/20 order-2 md:order-1 shadow-xl">
                <Image src="/portfolio/events/event-03.jpg" alt="Weddings" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Weddings & Sacred Vows</h3>
                <p className="opacity-80 mb-6 leading-relaxed">
                  We document your most sacred day with an editorial, fly-on-the-wall approach. From rain-soaked vows to the final dance, we preserve the authentic resonance of your celebration.
                </p>
                <ul className="space-y-3 opacity-90 font-medium">
                  <li className="flex items-center gap-2">✓ Full Day Coverage</li>
                  <li className="flex items-center gap-2">✓ Heirloom Print Albums</li>
                  <li className="flex items-center gap-2">✓ High-Res Digital Archive</li>
                </ul>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-1">
                <h3 className="text-3xl font-bold mb-4">Automotive Engineering</h3>
                <p className="opacity-80 mb-6 leading-relaxed">
                  Precision rig lighting, dusk circuit documentation, and dynamic panning shots. We capture the raw aerodynamic aggression and engineering beauty of high-performance machines.
                </p>
                <ul className="space-y-3 opacity-90 font-medium">
                  <li className="flex items-center gap-2">✓ Twilight & Night Sessions</li>
                  <li className="flex items-center gap-2">✓ Rig & Motion Blur Plates</li>
                  <li className="flex items-center gap-2">✓ Private Garage Documentation</li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#92000A]/20 order-2 shadow-xl">
                <Image src="/portfolio/automotive/auto-01.jpg" alt="Automotive" fill className="object-cover" />
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#92000A]/20 order-2 md:order-1 shadow-xl">
                <Image src="/portfolio/featured/featured-03.jpg" alt="Commercial" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Commercial Architecture</h3>
                <p className="opacity-80 mb-6 leading-relaxed">
                  Elevate your brand with high-impact interior and architectural photography. Engineered for luxury lookbooks, hotel portfolios, and international marketing campaigns.
                </p>
                <ul className="space-y-3 opacity-90 font-medium">
                  <li className="flex items-center gap-2">✓ Tilt-Shift Perspective Control</li>
                  <li className="flex items-center gap-2">✓ Advanced Composite Lighting</li>
                  <li className="flex items-center gap-2">✓ Commercial Usage Licensing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS (Sangria Background) */}
        <section id="testimonials" className="py-24 px-6 bg-[#92000A] text-[#FAFCBE]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Client Experiences</h2>
              <p className="opacity-90 max-w-2xl mx-auto">Don't just take our word for it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Mainz Media completely blew us away. They managed to capture moments we didn't even realize happened. The final gallery felt like a cinematic movie of our wedding day.",
                  name: "Sarah & Daniel",
                  tag: "Wedding Clients"
                },
                {
                  quote: "The automotive shoot was incredible. They understood exactly how to light the curves of the car at dusk. The motion shots are currently hanging in my office.",
                  name: "Ahmad R.",
                  tag: "Automotive Collector"
                },
                {
                  quote: "Professional, punctual, and highly creative. They elevated our brand's visual identity overnight with their architectural shots. Highly recommended for commercial work.",
                  name: "Elena W.",
                  tag: "Creative Director"
                }
              ].map((test, i) => (
                <div key={i} className="bg-[#FAFCBE] text-[#92000A] p-8 rounded-xl flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-2xl mb-4 text-[#92000A]">★★★★★</div>
                    <p className="text-sm font-medium leading-relaxed italic mb-8">"{test.quote}"</p>
                  </div>
                  <div>
                    <p className="font-bold">{test.name}</p>
                    <p className="text-xs opacity-70">{test.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. OBJECTION HANDLING (FAQS) (Champagne Background) */}
        <section id="faq" className="py-24 px-6 bg-[#FAFCBE] text-[#92000A]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="opacity-80">Everything you need to know before booking.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-[#92000A]/30 rounded-lg overflow-hidden bg-transparent">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-[#92000A]/5 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl font-light">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm opacity-80 leading-relaxed border-t border-[#92000A]/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ADDITIONAL CALL-TO-ACTION (Sangria Background) */}
        <section className="py-32 px-6 bg-[#92000A] text-[#FAFCBE]">
          <div className="max-w-4xl mx-auto text-center bg-[#FAFCBE] text-[#92000A] rounded-2xl p-12 md:p-20 shadow-2xl border border-[#FAFCBE]/20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to immortalize your legacy?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">
              Our calendar for 2025/2026 is filling up fast. Reach out today to secure your date and discuss your vision.
            </p>
            <Link 
              href="/booking" 
              className="bg-[#92000A] text-[#FAFCBE] px-10 py-5 rounded-md font-bold text-lg hover:bg-black hover:text-[#FAFCBE] transition-colors inline-block shadow-lg"
            >
              BOOK YOUR SESSION NOW
            </Link>
          </div>
        </section>
      </main>

      {/* 9. SIMPLE FOOTER (Champagne Background for visual closure) */}
      <footer className="border-t border-[#92000A]/10 py-12 px-6 bg-[#FAFCBE] text-[#92000A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-extrabold text-xl tracking-tight uppercase">
            MAINZ MEDIA
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium opacity-80">
            <a href="mailto:maindha@gmail.com" className="hover:opacity-100 transition-opacity">maindha@gmail.com</a>
            <a href="tel:+60163228337" className="hover:opacity-100 transition-opacity">+60 16-322 8337</a>
            <span>Kuala Lumpur, Malaysia</span>
          </div>

          <div className="text-xs font-bold opacity-70">
            © {new Date().getFullYear()} Mainz Media. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
