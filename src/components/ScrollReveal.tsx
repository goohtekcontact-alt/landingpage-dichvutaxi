"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -35 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 35 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -35 }, visible: { opacity: 1, x: 0 } };
      default:
        return { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
