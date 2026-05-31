"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ end, suffix = "", duration = 1400 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * end));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, end]);

  return <strong ref={ref}>{count}{suffix}</strong>;
}
