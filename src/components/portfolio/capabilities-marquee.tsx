"use client";

import { useReducedMotion } from "framer-motion";

const items = [
  "Motion Direction",
  "Art Direction",
  "3D Look Development",
  "Brand Motion Systems",
  "Campaign Visuals",
  "Experimental Film",
  "Visual Systems",
  "Lagos / Worldwide",
];

export function CapabilitiesMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const track = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#1e1e1e] py-4"
    >
      <div className={prefersReducedMotion ? "flex gap-12 px-8" : "marquee-track"}>
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-6 px-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[#3a3a3a]"
          >
            <span className="h-px w-4 bg-[#2a2a2a]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
