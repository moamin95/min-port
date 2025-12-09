"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * AnimatedGridBackground
 * * A dark blue gradient background with a grid pattern and
 * glowing "beams" that trace the grid lines randomly.
 */
interface AnimatedGridBackgroundProps {
  className?: string;
}

export default function AnimatedGridBackground({ className }: AnimatedGridBackgroundProps) {
  return (
    <div className={cn("relative w-full h-screen overflow-hidden bg-slate-950", className)}>
      {/* 1. The Deep Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0B1120] to-black" />
      
      {/* 2. The Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div 
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundSize: "4rem 4rem",
            // We use a mask to fade the grid out at the edges for a subtle look
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
            // Blue theme grid
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          }}
        />
      </div>

      {/* 3. The Tracing Beams */}
      {/* We render multiple beams that start at random times/locations */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <GridBeam duration={3} delay={0} />
        <GridBeam duration={4} delay={2} />
        <GridBeam duration={5} delay={4} />
        <GridBeam duration={3} delay={6} />
        <GridBeam duration={6} delay={1} color="#60a5fa" /> {/* Lighter Blue */}
      </div>
    </div>
  );
}

/**
 * GridBeam
 * * An individual animated beam that follows a generated path.
 */
interface GridBeamProps {
  duration?: number;
  delay?: number;
  color?: string;
}

function GridBeam({ duration = 5, delay = 0, color = "#3b82f6" }: GridBeamProps) {
  const containerRef = useRef<SVGSVGElement>(null);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [path, setPath] = useState("");

  // Grid settings matching the CSS background-size (4rem = 64px)
  const gridSize = 64;

  useEffect(() => {
    // Calculate container dimensions to ensure path stays within bounds
    const updateDimensions = () => {
      if (containerRef.current) {
        setSvgDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate a new random path whenever dimensions change
  useEffect(() => {
    if (svgDimensions.width === 0 || svgDimensions.height === 0) return;
    setPath(generateRandomPath(svgDimensions.width, svgDimensions.height, gridSize));
  }, [svgDimensions]);

  return (
    <svg
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      {path && (
        <motion.path
          d={path}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0, 1, 1, 0], // Fade in, stay visible, fade out
            pathOffset: [0, 0.2, 0.8, 1] // Creates a "comet" effect moving along the line
          }} 
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: Math.random() * 5 + 2 // Random wait before restarting
          }}
          // Add a glow effect using drop-shadow
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      )}
      
      {/* Optional: Add a second path for a trailing fade effect */}
      {path && (
         <motion.path
         d={path}
         stroke={color}
         strokeWidth="4"
         strokeOpacity="0.2"
         strokeLinecap="square"
         fill="none"
         initial={{ pathLength: 0, opacity: 0 }}
         animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
         transition={{
           duration: duration,
           delay: delay,
           repeat: Infinity,
           ease: "easeInOut",
           repeatDelay: Math.random() * 5 + 2
         }}
       />
      )}
    </svg>
  );
}

/**
 * Path Generation Logic
 * Creates a "Snake" like path on a grid
 */
function generateRandomPath(width: number, height: number, step: number): string {
  const maxX = Math.floor(width / step);
  const maxY = Math.floor(height / step);

  // Start at a random point on the edges or middle
  let currentX = Math.floor(Math.random() * maxX);
  let currentY = Math.floor(Math.random() * maxY);

  // Construct SVG path string
  let path = `M ${currentX * step} ${currentY * step}`;

  // Length of the "snake"
  const segments = Math.floor(Math.random() * 5) + 5; // 5 to 10 moves

  for (let i = 0; i < segments; i++) {
    // 0: up, 1: right, 2: down, 3: left
    const direction = Math.floor(Math.random() * 4);

    switch (direction) {
      case 0: // Up
        if (currentY > 0) currentY--;
        break;
      case 1: // Right
        if (currentX < maxX) currentX++;
        break;
      case 2: // Down
        if (currentY < maxY) currentY++;
        break;
      case 3: // Left
        if (currentX > 0) currentX--;
        break;
    }

    path += ` L ${currentX * step} ${currentY * step}`;
  }

  return path;
}