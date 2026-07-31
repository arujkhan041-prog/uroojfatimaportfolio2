"use client";

import { useEffect, useState } from "react";

export function useRotatingText(items: string[], interval = 3500) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return { text: items[index], isAnimating };
}
