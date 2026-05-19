"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroHeadlineProps = {
  name: string;
};

export function HeroHeadline({ name }: HeroHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();

  const words = name.split(" ");

  return (
    <h1 className="font-display font-semibold leading-[0.86] tracking-tight" aria-label={name}>
      {words.map((word, wi) => (
        <span key={wi} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={prefersReducedMotion ? false : { y: "108%", skewY: 2 }}
            animate={
              prefersReducedMotion ? undefined : { y: "0%", skewY: 0 }
            }
            transition={{
              duration: 1.1,
              delay: 0.1 + wi * 0.13,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
