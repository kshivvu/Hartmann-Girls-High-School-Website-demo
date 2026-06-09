"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const dignitaries = [
  {
    name: "Archbishop Sebastian Kallupura",
    role: "Patron & President",
    image: "/images/hartmann-archbishop.jpg",
    bio: "Spiritual leader and President of the Governing Body, guiding the institution with strategic vision and value-oriented leadership.",
  },
  {
    name: "Rev. Fr. James George",
    role: "Vicar General & Secretary",
    image: "/images/hartmann-secretary.jpg",
    bio: "Oversees the administrative framework, school governance, infrastructure development, and overall institutional excellence.",
  },
  {
    name: "Sr. Mary Vidhya, SND",
    role: "Principal",
    image: "/images/hartmann-principal.jpg",
    bio: "Steers academic operations, curriculum enhancement, and character formation, cultivating an environment of growth and scientific curiosity.",
  },
  {
    name: "Sr. Mary Maris, SND",
    role: "Founder & First Principal",
    image: "/images/hartmann-founder.jpg",
    bio: "Visionary founder who established the school in 1959, laying the foundations of academic excellence and service that define HGHS.",
  },
];

export function PeopleSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setActiveIndex((prev) => (prev === 0 ? dignitaries.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === dignitaries.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => goTo("next"), 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused]);

  return (
    <section className="people-slider-section section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="shell">
        <Reveal className="section-heading text-center">
          <p className="eyebrow">Governing Council</p>
          <h2>School <em>Leadership</em></h2>
        </Reveal>

        {/* Slider viewport */}
        <div className="slider-viewport">
          {dignitaries.map((person, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index ===
              (activeIndex === 0 ? dignitaries.length - 1 : activeIndex - 1);

            let slideClass = "slide-hidden";
            if (isActive) {
              slideClass = "slide-active";
            } else if (isPrev) {
              slideClass = "slide-prev";
            } else {
              slideClass = "slide-next";
            }

            return (
              <div
                key={person.name}
                className={`slider-slide ${slideClass}`}
              >
                {/* Photo container */}
                <div className={`slide-photo-wrapper ${isActive ? "photo-active" : "photo-inactive"}`}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 800px) 100vw, 40vw"
                    priority={index === 0}
                  />
                  {!isActive && <div className="photo-dim-overlay" />}
                </div>

                {/* Content container */}
                <div className={`slide-content ${isActive ? "content-active" : "content-inactive"}`}>
                  <h3 className="slide-name">{person.name}</h3>
                  <div className="slide-role-badge">
                    <span>{person.role}</span>
                  </div>
                  <p className="slide-bio">{person.bio}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="slider-controls">
          <button
            onClick={() => goTo("prev")}
            className="slider-arrow prev"
            aria-label="Previous leadership member"
          >
            <svg viewBox="0 0 10 15" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 1L2 7.5L9 14" />
            </svg>
          </button>

          <div className="slider-dots">
            {dignitaries.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`slider-dot ${index === activeIndex ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo("next")}
            className="slider-arrow next"
            aria-label="Next leadership member"
          >
            <svg viewBox="0 0 10 15" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1L8 7.5L1 14" />
            </svg>
          </button>
        </div>

        <div className="text-center" style={{ marginTop: "40px" }}>
          <Link href="/about" className="text-link">Meet our complete council <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}
