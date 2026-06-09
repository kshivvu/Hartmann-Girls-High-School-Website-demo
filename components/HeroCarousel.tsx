"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/images/hero/1.jpg", "/images/hero/2.jpg", "/images/hero/3.jpg"];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), 4500);
    return () => window.clearInterval(timer);
  }, [active, paused]);

  return <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="hero-slides">
      {images.map((src, index) => <Image key={src} src={src} alt="" fill priority={index === 0} className={active === index ? "hero-image active" : "hero-image"} sizes="100vw" />)}
    </div>
    <div className="hero-dots" aria-label="Campus photographs">
      {images.map((src, index) => <button key={src} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show photograph ${index + 1}`} />)}
    </div>
  </div>;
}
