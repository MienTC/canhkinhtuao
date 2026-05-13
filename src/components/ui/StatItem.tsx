"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      const duration = 2000;
      let start = 0;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setDisplayValue(Math.floor(progress * numericValue));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};
