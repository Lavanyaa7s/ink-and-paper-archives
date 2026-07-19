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
    <div className="min-h-screen bg-[#1A1A00] text-[#FFFFCC] font-sans selection:bg-[#FFFFCC] selection:text-[#1A1A00]">
      
      {/* 1. SIMPLE & STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full bg-[#1A1A00]/95 backdrop-blur-md border-b border-[#FFFFCC]/10 px-6 py-4">
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
            className="bg-[#FFFFCC] text-[#1A1A00] px-6 py-2 rounded-md font-bold text-sm hover:bg-white transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      </header>

      <main>
        {/* 2. VALUE PROPOSITION & MAIN OFFER (Hero) */}
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col items-start"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Cinematic Emotion, Immortalized in Light.
              </h1>
              <p className="text-lg opacity-80 mb-8 max-w-lg leading-relaxed">
                Malaysia’s premier photography studio for unscripted weddings, architectural commerce, and high-performance automotive. We transform fleeting seconds into enduring visual legacies.
              </p>
              <Link 
                href="/pricing" 
                className="bg-[#FFFFCC] text-[#1A1A00] px-8 py-4 rounded-md font-bold text-lg hover:bg-white transition-colors w-full sm:w-auto text-center shadow-lg"
              >
                VIEW PORTFOLIO & RATES
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden border border-[#FFFFCC]/20 shadow-2xl"
            >
              <Image 
                src="/portfolio/wedding/wedding-01.jpg" 
                alt="Mainz Media Photography" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 3. SOCIAL PROOF */}
        <section className="bg-[#FFFFCC]/5 border-y border-[#FFFFCC]/10 py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <p className="text-sm font-bold tracking-widest uppercase opacity-60 mb-6">
              Trusted by 50+ High-Net-Worth Clients & Brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
              {/* Star Rating Representation */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFFFCC] text-xl">★★★★★</div>
                <span className="font-bold">5.0 / 5.0</span>
              </div>
              <div className="text-lg font-bold uppercase tracking-wider">Vogue MY</div>
              <div className="text-lg font-bold uppercase tracking-wider">Speedhunters</div>
              <div className="text-lg font-bold uppercase tracking-wider">Tatler</div>
            </div>
          </div>
        </section>

        {/* 4. BENEFITS & ADVANTAGES */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Mainz Media?</h2>
            <p className="opacity-80 max-w-2xl mx-auto">We don't just take pictures; we engineer physical memories that appreciate in emotional value over time.</p>
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
                className="bg-[#FFFFCC]/5 p-8 rounded-xl border border-[#FFFFCC]/10 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFFFCC] text-[#1A1A00] flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="opacity-70 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. PRODUCT SERVICE OR FEATURES (Alternating Blocks) */}
        <section id="services" className="py-24 px-6 bg-[#FFFFCC]/5 border-y border-[#FFFFCC]/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Master Disciplines</h2>
              <p className="opacity-80 max-w-2xl mx-auto">Specialized production suites tailored to your exact narrative needs.</p>
            </div>

            {/* Block 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FFFFCC]/20 order-2 md:order-1">
                <Image src="/portfolio/wedding/wedding-01.jpg" alt="Weddings" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Weddings & Sacred Vows</h3>
                <p className="opacity-80 mb-6 leading-relaxed">
                  We document your most sacred day with an editorial, fly-on-the-wall approach. From rain-soaked vows to the final dance, we preserve the authentic resonance of your celebration.
                </p>
                <ul className="space-y-3 opacity-90 mb-8">
                  <li className="flex items-center gap-2">✓ Full Day Coverage</li>
                  <li className="flex items-center gap-2">✓ Heirloom Print Albums</li>
                  <li className="flex items-center gap-2">✓ High-Res Digital Archive</li>
                </ul>
              </div>
            </div>

            {/* Block 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-1">
                <h3 className="text-3xl font-bold mb-4">Automotive Engineering</h3>
                <p className="opacity-80 mb-6 leading-relaxed">
                  Precision rig lighting, dusk circuit documentation, and dynamic panning shots. We capture the raw aerodynamic aggression and engineering beauty of high-performance machines.
                </p>
                <ul className="space-y-3 opacity-90 mb-8">
                  <li className="flex items-center gap-2">✓ Twilight & Night Sessions</li>
                  <li className="flex items-center gap-2">✓ Rig & Motion Blur Plates</li>
                  <li className="flex items-center gap-2">✓ Private Garage Documentation</li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FFFFCC]/20 order-2">
                <Image src="/portfolio/automotive/automotive-01.jpg" alt="Automotive" fill className="object-cover" />
              </div>
            </div>

            {/* Block 3: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FFFFCC]/20 order-2 md:order-1">
                <Image src="/portfolio/commercial/commercial-01.jpg" alt="Commercial" fill className="object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Commercial Architecture</h3>
                <p className="opacity-80 mb-6 leading-relaxed">
                  Elevate your brand with high-impact interior and architectural photography. Engineered for luxury lookbooks, hotel portfolios, and international marketing campaigns.
                </p>
                <ul className="space-y-3 opacity-90 mb-8">
                  <li className="flex items-center gap-2">✓ Tilt-Shift Perspective Control</li>
                  <li className="flex items-center gap-2">✓ Advanced Composite Lighting</li>
                  <li className="flex items-center gap-2">✓ Commercial Usage Licensing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Experiences</h2>
            <p className="opacity-80 max-w-2xl mx-auto">Don't just take our word for it.</p>
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
              <div key={i} className="bg-[#FFFFCC] text-[#1A1A00] p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-4">★★★★★</div>
                  <p className="text-sm font-medium leading-relaxed italic mb-8">"{test.quote}"</p>
                </div>
                <div>
                  <p className="font-bold">{test.name}</p>
                  <p className="text-xs opacity-70">{test.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. OBJECTION HANDLING (FAQS) */}
        <section id="faq" className="py-24 px-6 bg-[#FFFFCC]/5 border-y border-[#FFFFCC]/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="opacity-80">Everything you need to know before booking.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-[#FFFFCC]/20 rounded-lg overflow-hidden bg-[#1A1A00]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-[#FFFFCC]/5 transition-colors"
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
                        <div className="px-6 pb-5 pt-1 text-sm opacity-80 leading-relaxed border-t border-[#FFFFCC]/10">
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

        {/* 8. ADDITIONAL CALL-TO-ACTION */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center bg-[#FFFFCC] text-[#1A1A00] rounded-2xl p-12 md:p-20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to immortalize your legacy?
            </h2>
            <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
              Our calendar for 2025/2026 is filling up fast. Reach out today to secure your date and discuss your vision.
            </p>
            <Link 
              href="/booking" 
              className="bg-[#1A1A00] text-[#FFFFCC] px-10 py-5 rounded-md font-bold text-lg hover:bg-black transition-colors inline-block shadow-lg"
            >
              BOOK YOUR SESSION NOW
            </Link>
          </div>
        </section>
      </main>

      {/* 9. SIMPLE FOOTER */}
      <footer className="border-t border-[#FFFFCC]/10 py-12 px-6 bg-[#1A1A00]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-extrabold text-xl tracking-tight uppercase">
            MAINZ MEDIA
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm opacity-80">
            <a href="mailto:maindha@gmail.com" className="hover:opacity-100 transition-opacity">maindha@gmail.com</a>
            <a href="tel:+60163228337" className="hover:opacity-100 transition-opacity">+60 16-322 8337</a>
            <span>Kuala Lumpur, Malaysia</span>
          </div>

          <div className="text-xs opacity-60">
            © {new Date().getFullYear()} Mainz Media. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
