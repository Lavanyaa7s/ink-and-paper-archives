"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // Phases: 'dark' -> 'card' -> 'lifting' -> 'cover'
  const [phase, setPhase] = useState<"dark" | "card" | "lifting" | "cover">("dark");
  const [flipped, setFlipped] = useState(false);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("card"), 450);
    return () => clearTimeout(t1);
  }, []);

  // Trigger lift on scroll or click
  useEffect(() => {
    if (phase !== "card") return;
    const trigger = () => {
      setPhase("lifting");
      setTimeout(() => setPhase("cover"), 1400);
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 4) trigger();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [phase]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setMx(x);
    setMy(y);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#FAF9F6]"
    >
      {/* Soft spotlight */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "dark" ? 0 : phase === "cover" ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(250,249,246,0.10), rgba(0,0,0,0) 60%)",
        }}
      />

      {/* Background fades to paper */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "lifting" || phase === "cover" ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#FAF9F6]"
      />

      {/* Lanyard + ID Card stage */}
      <AnimatePresence>
        {phase !== "cover" && (
          <motion.div
            key="card-stage"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-start justify-center"
          >
            {/* Lanyard cord */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: phase === "dark" ? 0 : 1 }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
              style={{ transformOrigin: "top" }}
              className="mt-0 h-[46vh] w-[2px] bg-[#787878]"
            />

            {/* Card with swing */}
            <motion.div
              className="absolute left-1/2 top-[46vh] -translate-x-1/2"
              initial={{ y: -600, rotate: 0, opacity: 0 }}
              animate={
                phase === "dark"
                  ? { y: -600, opacity: 0 }
                  : phase === "lifting"
                  ? { y: -700, opacity: 0, rotate: 0 }
                  : {
                      y: 0,
                      opacity: 1,
                      rotate: [0, -6, 4, -2, 1, 0],
                    }
              }
              transition={
                phase === "lifting"
                  ? { duration: 1.2, ease: [0.7, 0, 0.3, 1] }
                  : {
                      y: { type: "spring", stiffness: 60, damping: 12, mass: 1.2 },
                      opacity: { duration: 0.3 },
                      rotate: { duration: 2.4, times: [0, 0.2, 0.45, 0.7, 0.88, 1], ease: "easeOut", delay: 0.6 },
                    }
              }
              style={{ transformOrigin: "top center" }}
            >
              <motion.div
                onClick={() => setFlipped((f) => !f)}
                className="cursor-pointer"
                style={{ perspective: 1400 }}
                animate={{
                  rotateX: my * -6,
                  rotateY: (flipped ? 180 : 0) + mx * 8,
                }}
                transition={{ type: "spring", stiffness: 80, damping: 14 }}
              >
                <div
                  className="relative h-[360px] w-[240px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-[#FAF9F6] text-[#0D0D0D] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_2px_0_rgba(255,255,255,0.06)_inset]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* punch hole */}
                    <div className="mx-auto mt-3 h-2 w-14 rounded-full bg-[#0D0D0D]/80" />
                    <div className="flex h-full flex-col justify-between p-5 pt-4">
                      <div className="flex justify-between text-[9px] tracking-[0.22em]">
                        <span>MAINZ / MEDIA</span>
                        <span>N° 001</span>
                      </div>
                      <div>
                        <div className="display text-[44px] leading-[0.85]">MAINZ</div>
                        <div className="display text-[44px] leading-[0.85]">MEDIA</div>
                        <div className="mt-4 h-px w-10 bg-[#0D0D0D]" />
                        <div className="mt-3 text-[10px] tracking-[0.22em] text-[#787878]">
                          PHOTOGRAPHY
                          <br />
                          COLLECTION
                        </div>
                      </div>
                      <div className="flex justify-between text-[9px] tracking-[0.22em] text-[#787878]">
                        <span>MALAYSIA</span>
                        <span>EST. 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-[#0D0D0D] text-[#FAF9F6]"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div className="mx-auto mt-3 h-2 w-14 rounded-full bg-[#FAF9F6]/70" />
                    <div className="flex h-full flex-col items-center justify-center gap-4 p-5">
                      <div
                        className="h-32 w-32 bg-[#FAF9F6]"
                        style={{
                          backgroundImage:
                            "conic-gradient(from 0deg at 50% 50%, #0D0D0D 0 25%, #FAF9F6 0 50%, #0D0D0D 0 75%, #FAF9F6 0)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                      <div className="text-center text-[10px] tracking-[0.22em] text-[#787878]">
                        SCAN
                        <br />
                        @MAINZMEDIA
                      </div>
                    </div>
                  </div>
                </div>
                {/* soft ground shadow */}
                <div
                  aria-hidden
                  className="mx-auto mt-4 h-4 w-40 rounded-full bg-black/40 blur-xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction */}
      <AnimatePresence>
        {phase === "card" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
          >
            <div className="label" style={{ color: "#787878" }}>
              {flipped ? "TAP TO FLIP BACK" : "TAP CARD TO FLIP · SCROLL TO ENTER"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Cover slides up */}
      <AnimatePresence>
        {(phase === "lifting" || phase === "cover") && (
          <motion.div
            key="cover"
            initial={{ y: "100%" }}
            animate={{ y: phase === "cover" ? 0 : "20%" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-30"
          >
            <BookCover onOpen={() => router.push("/contents")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BookCover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#0D0D0D] text-[#FAF9F6]">
      {/* hairline frame */}
      <div className="pointer-events-none absolute inset-8 border border-[#FAF9F6]/25 md:inset-16" />

      <div className="relative flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center">
        <div className="label" style={{ color: "#787878" }}>
          BOOK 01
        </div>
        <h1 className="mt-8 display text-[16vw] leading-[0.85] md:text-[9rem]">
          THE MASTER
          <br />
          COLLECTION
        </h1>

        <div className="mt-16 h-px w-24 bg-[#FAF9F6]/40" />

        <div className="mt-16 label" style={{ color: "#787878" }}>
          MAINZ MEDIA
        </div>
        <div className="mt-3 label" style={{ color: "#787878" }}>
          PHOTOGRAPHY COLLECTION
        </div>

        <div className="mt-24 flex w-full items-end justify-between text-[10px] tracking-[0.22em] text-[#787878]">
          <span>EST. 2023</span>
          <button
            onClick={onOpen}
            className="label-ink transition-colors hover:opacity-60 cursor-pointer"
            style={{ color: "#FAF9F6" }}
          >
            OPEN THE BOOK →
          </button>
          <span>MALAYSIA</span>
        </div>
      </div>
    </div>
  );
}
