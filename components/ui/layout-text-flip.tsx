"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  words,
  duration = 1500,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === words.length - 1) {
            if (interval) clearInterval(interval);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, duration);
    }, 500);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [words.length, duration]);

  return (
    <motion.span
      layout
      className={cn("relative w-fit overflow-hidden", className)}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{
            rotateX: 0,
            opacity: 1,
          }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn("inline-block whitespace-nowrap")}
          style={{ transformOrigin: "center" }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};
