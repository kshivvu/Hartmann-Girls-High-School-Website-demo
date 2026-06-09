"use client";

import Link from "next/link";
import { useState } from "react";

const panels = [
  {
    number: "01",
    label: "Spiritual & Character",
    href: "/about",
    kicker: "We cultivate",
    boldLines: ["character,", "integrity &", "moral grace"],
    footer: "inspired by divine faith",
    cta: "Our History",
    tone: "maroon",
  },
  {
    number: "02",
    label: "Academic Excellence",
    href: "/about",
    kicker: "We inspire",
    boldLines: ["intellect,", "curiosity &", "excellence"],
    footer: "shaping leaders since 1959",
    cta: "Our Vision",
    tone: "gold",
  },
  {
    number: "03",
    label: "Compassionate Service",
    href: "/contact",
    kicker: "We nurture",
    boldLines: ["empathy,", "service &", "community"],
    footer: "loving our neighbors",
    cta: "Join Us",
    tone: "deep",
  },
];

export function QuickAccessTriptych() {
  const [activeIndex, setActiveIndex] = useState(1);

  return <section className="quick shell">
    <div className="quick-triptych">
      {panels.map((panel, index) => {
        const active = activeIndex === index;
        return <Link
          href={panel.href}
          key={panel.label}
          className={`triptych-panel ${panel.tone} ${active ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onFocus={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        >
          <div className="triptych-overlay" />
          <div className="triptych-content">
            <p className="triptych-label">{panel.number} · {panel.label}</p>
            <div className="triptych-mark" aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="33" />
                <circle cx="50" cy="50" r="18" />
                <path d="M50 4v16M50 80v16M4 50h16M80 50h16" />
              </svg>
            </div>
            <div className="triptych-copy">
              <span>{panel.kicker}</span>
              <h2>{panel.boldLines.map((line) => <span key={line}>{line}</span>)}</h2>
              <em>{panel.footer}</em>
              <strong>{panel.cta}</strong>
            </div>
          </div>
        </Link>;
      })}
    </div>
    <div className="quick-links-band"><Link href="/about">Our History</Link><Link href="/academics">Academic Information</Link><Link href="/contact">Join Us</Link></div>
  </section>;
}
