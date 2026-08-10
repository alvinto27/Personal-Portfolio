"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

export function SystemCalibration() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.from("[data-calibration-entry]", {
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.08,
        y: 8,
        ease: "power2.out",
      });

      gsap.fromTo(
        "[data-calibration-line]",
        { scaleX: 0 },
        { duration: 1.1, ease: "power3.inOut", scaleX: 1 },
      );
    },
    { scope },
  );

  return (
    <div className="mt-10 max-w-xl" ref={scope} aria-hidden="true">
      <div className="flex items-center justify-between font-mono text-[0.625rem] tracking-[0.14em] text-muted">
        <span data-calibration-entry>CALIBRATION</span>
        <span data-calibration-entry className="text-holographic-cyan">100.00%</span>
      </div>
      <div className="mt-2 h-px bg-line">
        <div
          className="h-px origin-left bg-holographic-cyan shadow-signal"
          data-calibration-line
        />
      </div>
    </div>
  );
}
