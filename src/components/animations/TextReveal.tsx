"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: "word" | "char";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  type = "char",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const items = type === "word" ? text.split(" ") : text.split("");

  return (
    <motion.span ref={ref} className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {items.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {item === " " || (type === "word" && i < items.length - 1) ? (
              <>{item}&nbsp;</>
            ) : (
              item
            )}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
