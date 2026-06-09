"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 60);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/crest.png" alt="" width={58} height={58} priority />
          <span><b>{school.name}</b><small>Est. 1959 · Patna, Bihar</small></span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <i></i><i></i><i></i>
        </button>
        <nav className={open ? "main-nav open" : "main-nav"}>
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="nav-cta" href="/admissions">Apply for Admission <span>→</span></Link>
        </nav>
      </div>
    </header>
  );
}
