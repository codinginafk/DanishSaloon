"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SectionReveal({
  children,
  delay = 0,
  y = 24
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ end, suffix = "", duration = 1.6 }: { end: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const controls = { start: 0 };
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
