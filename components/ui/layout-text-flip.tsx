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
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: -40, filter: "blur(5px)" }}
          animate={{
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{ y: 50, filter: "blur(5px)", opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className={cn("inline-block whitespace-nowrap")}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};
