"use client";
import React, { useState } from "react";
import { technologies } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function TechStack() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="space-y-6 mt-12">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-gray-600 dark:text-gray-500 uppercase tracking-widest">
          Technical Arsenal
        </span>
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500 rounded transition-all duration-300"
          aria-label={isRevealed ? "Hide tech stack" : "Show tech stack"}
        >
          {isRevealed ? "Hide" : "Show"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isRevealed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isRevealed && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 text-center"
            >
              <span className="text-sm font-mono text-neutral-900 dark:text-neutral-100">
                {tech}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}