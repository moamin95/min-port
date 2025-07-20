"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Safety check for empty words array
    if (!words || words.length === 0) {
      return;
    }

    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText !== currentWord) {
      // Typing forward
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, 75);
    } else if (!isDeleting && currentText === currentWord) {
      // Finished typing word, wait then start deleting (unless it's the last word)
      if (currentWordIndex === words.length - 1) {
        // Stay on the last word
        return;
      }
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && currentText !== "") {
      // Deleting backward
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, 50);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  // Safety check for empty words array
  if (!words || words.length === 0) {
    return <span className={className}>Loading...</span>;
  }

  return (
    <span className={className}>
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  );
}