"use client";

import Link from "next/link";
import Image from "next/image";
import VisualDiaryGallery from "@/components/VisualDiaryGallery";
import ServicesSection from "@/components/ServicesSection";
import InstagramFeed from "@/components/InstagramFeed";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, -12]);
  const portraitScale = useTransform(scrollY, [0, 800], [1, 1.04]);
  const textY = useTransform(scrollY, [0, 800], [0, -40]);

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
    <div className="min-h-screen bg-[#5A2132] text-[#EFE9E9] font-sans selection:bg-[#EFE9E9] selection:text-[#5A2132]">
      
      {/* 1. SIMPLE HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-8 md:py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }}>
            <Link href="/" className="relative w-[170px] md:w-[210px] h-[48px] md:h-[60px] block transition-transform hover:scale-105 ml-3 md:ml-4">
              <Image src="/logo.png" alt="Mainz Media Logo" fill className="object-contain object-left" priority />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex items-center gap-14 font-medium text-sm"
          >
            <Link href="#services" className="hover:opacity-70 transition-opacity">Services</Link>
            <Link href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</Link>
            <Link href="#faq" className="hover:opacity-70 transition-opacity">FAQ</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.0 }}>
            <Link 
              href="#booking" 
              className="bg-[#EFE9E9] text-[#5A2132] px-6 py-2.5 rounded-xl font-bold text-sm inline-block shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:-translate-y-[3px] hover:scale-[1.04] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              BOOK NOW
            </Link>
          </motion.div>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative w-full h-screen min-h-[600px] bg-[#5A2132] text-[#EFE9E9] overflow-hidden flex flex-col justify-between pt-8 md:pt-12 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]">
          
          {/* Abstract Radial Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#92000A]/30 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#3A1122]/50 rounded-full blur-[120px] mix-blend-multiply" />
          </div>

          {/* Cinematic Noise Texture */}
          <div 
            className="absolute inset-[-10%] animate-grain pointer-events-none opacity-[0.04] mix-blend-overlay z-0" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
          />


          {/* Massive Typography Background */}
          <div className="absolute top-[25%] md:top-[35%] lg:top-[30%] left-1/2 -translate-x-1/2 -ml-[15px] -translate-y-1/2 w-full text-center z-10 pointer-events-none px-2">
            <div className="relative inline-block">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                style={{ y: textY }}
                className="font-[family-name:var(--font-yeseva)] uppercase text-[22vw] md:text-[11vw] lg:text-[10vw] leading-none md:leading-none tracking-tight whitespace-nowrap flex flex-col md:inline-block relative z-10 text-white/90"
              >
                <span>MAINZ</span> <span>MEDIA</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute -bottom-[65px] md:-bottom-12 left-1/2 -translate-x-1/2 w-[90vw] md:w-max text-center font-sans text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.25em] leading-relaxed md:leading-normal uppercase text-[#EFE9E9]/80 font-bold z-10"
              >
                Cinematic Videography & Photography for Brands and Businesses
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-[15%] md:-bottom-[12%] lg:-bottom-[18%] right-[-2%] md:right-[5%] lg:right-[8%] text-4xl md:text-2xl lg:text-4xl font-[family-name:var(--font-shrikhand)] tracking-wide z-10 hidden md:block opacity-80"
              >
                Maindha
              </motion.div>
            </div>
          </div>

          {/* Foreground Signature (Mobile Only) */}
          <div className="absolute top-[25%] md:top-[35%] lg:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-[60] pointer-events-none px-2 md:hidden">
            <div className="relative inline-block">
              {/* Invisible placeholder to match dimensions */}
              <h1 className="font-[family-name:var(--font-yeseva)] uppercase text-[22vw] leading-none tracking-tight whitespace-nowrap flex flex-col opacity-0">
                <span>MAINZ</span> <span>MEDIA</span>
              </h1>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-[family-name:var(--font-shrikhand)] tracking-wide text-[#EFE9E9]"
              >
                Maindha
              </motion.div>
            </div>
          </div>

          {/* Intertwined Text Mask (Desktop Only) */}
          <div className="absolute top-[25%] md:top-[35%] lg:top-[30%] left-1/2 -translate-x-1/2 -ml-[15px] -translate-y-1/2 w-full text-center z-[60] pointer-events-none px-2 hidden md:block">
            <div className="relative inline-block" style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 88% 100%)' }}>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                style={{ y: textY }}
                className="font-[family-name:var(--font-yeseva)] uppercase text-[22vw] md:text-[11vw] lg:text-[10vw] leading-none md:leading-none tracking-tight whitespace-nowrap flex flex-col md:inline-block relative z-10"
              >
                <span>MAINZ</span> <span>MEDIA</span>
              </motion.h1>
            </div>
          </div>

          {/* Foreground Portrait Cutout */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            style={{ scale: portraitScale, y: portraitY }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] sm:w-[95%] md:w-[75%] lg:w-[58%] max-w-[900px] h-[80%] md:h-[85%] lg:h-[90%] z-50 pointer-events-none flex flex-col justify-end"
          >
            {/* Subtle Spotlight behind portrait */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#EFE9E9] opacity-10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none -z-10" />
            {/* Deep Dark Core Shadow behind portrait */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[250px] md:w-[400px] h-[300px] md:h-[500px] bg-black opacity-30 blur-[60px] rounded-[100%] pointer-events-none -z-20" />
            
            <div className="relative w-full h-full">
              {/* Floor Shadow for grounding */}
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[70%] h-[40px] bg-black/60 blur-[20px] rounded-[100%] pointer-events-none -z-10" />
              
              <Image 
                src="/portfolio/photographer/portraitMaindha.png" 
                alt="Maindha Portrait" 
                fill 
                className="object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] drop-shadow-[0_0_8px_rgba(239,233,233,0.3)] z-50"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* 3. SOCIAL PROOF (Champagne Background) */}
        <section className="bg-[#EFE9E9] text-[#5A2132] py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-6">
              Trusted by 50+ High-Net-Worth Clients & Brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              <div className="flex items-center gap-2">
                <div className="flex text-[#5A2132] text-xl">★★★★★</div>
                <span className="font-bold">5.0 / 5.0</span>
              </div>
              <div className="text-lg font-bold uppercase tracking-wider">Vogue MY</div>
              <div className="text-lg font-bold uppercase tracking-wider">Speedhunters</div>
              <div className="text-lg font-bold uppercase tracking-wider">Tatler</div>
            </div>
          </div>
        </section>

        {/* 4. BENEFITS & ADVANTAGES (Sangria Background) */}
        <section className="py-24 px-6 bg-[#5A2132] text-[#EFE9E9]">
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
                  className="bg-[#EFE9E9]/10 p-8 rounded-xl border border-[#EFE9E9]/20 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EFE9E9] text-[#5A2132] flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="opacity-80 leading-relaxed text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
        {/* 4.5 PACKAGES & INVESTMENT (Champagne Background) */}
        <section id="packages" className="py-24 px-6 bg-[#EFE9E9] text-[#5A2132]">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Investment & Packages</h2>
              <p className="opacity-80 max-w-2xl mx-auto font-medium text-lg">Transparent pricing for premium documentation.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Package 1 */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-[#5A2132] text-[#EFE9E9] p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">Portrait & Lifestyle</h3>
                  <div className="text-4xl font-[family-name:var(--font-yeseva)] mb-8">RM 800<span className="text-sm font-sans opacity-70"> / session</span></div>
                  <ul className="space-y-4 opacity-90 mb-10 font-medium">
                    <li className="flex items-center gap-3">✓ 2-Hour Location Shoot</li>
                    <li className="flex items-center gap-3">✓ 20 Retouched High-Res Images</li>
                    <li className="flex items-center gap-3">✓ Private Online Gallery</li>
                    <li className="flex items-center gap-3">✓ Creative Direction</li>
                  </ul>
                </div>
                <button className="w-full py-4 bg-[#EFE9E9] text-[#5A2132] font-extrabold uppercase tracking-widest rounded-lg hover:bg-white transition-colors">Book Session</button>
              </motion.div>

              {/* Package 2 */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-[#5A2132] text-[#EFE9E9] p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl scale-100 md:scale-105 border-4 border-[#5A2132] relative hover:-translate-y-2 transition-transform duration-300 z-10"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#EFE9E9] text-[#5A2132] px-6 py-1.5 text-sm font-black uppercase tracking-widest rounded-full whitespace-nowrap shadow-xl">Most Popular</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Wedding & Sacred Vows</h3>
                  <div className="text-4xl font-[family-name:var(--font-yeseva)] mb-8">RM 4,500<span className="text-sm font-sans opacity-70"> / day</span></div>
                  <ul className="space-y-4 opacity-90 mb-10 font-medium">
                    <li className="flex items-center gap-3">✓ 10-Hour Full Coverage</li>
                    <li className="flex items-center gap-3">✓ 2 Lead Photographers</li>
                    <li className="flex items-center gap-3">✓ 500+ Curated Digital Archives</li>
                    <li className="flex items-center gap-3">✓ Premium Layflat Heirloom Album</li>
                  </ul>
                </div>
                <button className="w-full py-4 bg-[#EFE9E9] text-[#5A2132] font-extrabold uppercase tracking-widest rounded-lg hover:bg-white transition-colors">Book Wedding</button>
              </motion.div>

              {/* Package 3 */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-[#5A2132] text-[#EFE9E9] p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">Commercial & Auto</h3>
                  <div className="text-4xl font-[family-name:var(--font-yeseva)] mb-8">RM 2,500<span className="text-sm font-sans opacity-70"> / project</span></div>
                  <ul className="space-y-4 opacity-90 mb-10 font-medium">
                    <li className="flex items-center gap-3">✓ Half-Day Production (4 Hours)</li>
                    <li className="flex items-center gap-3">✓ Advanced Composite Lighting</li>
                    <li className="flex items-center gap-3">✓ Full Commercial Licensing</li>
                    <li className="flex items-center gap-3">✓ Rush 48-Hour Delivery</li>
                  </ul>
                </div>
                <button className="w-full py-4 border-2 border-[#EFE9E9] text-[#EFE9E9] font-extrabold uppercase tracking-widest rounded-lg hover:bg-[#EFE9E9] hover:text-[#5A2132] transition-colors">Inquire Now</button>
              </motion.div>
            </div>
          </div>
        </section>

        
        {/* 5. VISUAL DIARY GALLERY (Sangria Background) */}
        <VisualDiaryGallery />

        {/* 5.5 SERVICES (Champagne Background) */}
        <ServicesSection />

        {/* 6. TESTIMONIALS (Sangria Background) */}
        <section id="testimonials" className="py-24 px-6 bg-[#5A2132] text-[#EFE9E9]">
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
                <div key={i} className="bg-[#5A2132] text-[#EFE9E9] p-8 rounded-xl flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-2xl mb-4 text-[#EFE9E9]">★★★★★</div>
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
        <section id="faq" className="py-24 px-6 bg-[#EFE9E9] text-[#5A2132]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="opacity-80">Everything you need to know before booking.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-[#EFE9E9]/30 rounded-lg overflow-hidden bg-transparent">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-[#EFE9E9]/5 transition-colors"
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
                        <div className="px-6 pb-5 pt-1 text-sm opacity-80 leading-relaxed border-t border-[#EFE9E9]/10">
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
        <section id="booking" className="py-32 px-6 bg-[#5A2132] text-[#EFE9E9]">
          <div className="max-w-4xl mx-auto text-center bg-[#5A2132] text-[#EFE9E9] rounded-2xl p-12 md:p-20 shadow-2xl border border-[#5A2132]/20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to immortalize your legacy?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">
              Our calendar for 2025/2026 is filling up fast. Reach out today to secure your date and discuss your vision.
            </p>
            <a 
              href="mailto:maindha@gmail.com" 
              className="bg-[#EFE9E9] text-[#5A2132] px-10 py-5 rounded-md font-bold text-lg hover:bg-black hover:text-[#EFE9E9] transition-colors inline-block shadow-lg"
            >
              BOOK YOUR SESSION NOW
            </a>
          </div>
        </section>
        
        {/* 9. INSTAGRAM FEED */}
        <InstagramFeed />
      </main>

      {/* 9. SIMPLE FOOTER (Champagne Background for visual closure) */}
      <footer className="border-t border-[#EFE9E9]/10 py-12 px-6 bg-[#5A2132] text-[#EFE9E9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-extrabold text-xl tracking-tight uppercase">
            MAINZ MEDIA
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium opacity-80">
            <a href="mailto:maindha@gmail.com" className="hover:opacity-100 transition-opacity">maindha@gmail.com</a>
            <a href="tel:+60163228337" className="hover:opacity-100 transition-opacity">+60 16-322 8337</a>
            <a href="https://www.instagram.com/mainz.media?igsh=cmF5amE3aHN2cGhw" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
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
