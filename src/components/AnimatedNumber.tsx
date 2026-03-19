"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(easeOut * value));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}
