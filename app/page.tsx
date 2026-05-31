import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CountUp } from "@/components/CountUp";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { facilities, gallery, notices, toppers } from "@/lib/content";

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero">
        <HeroCarousel />
        <div className="hero-shade"></div>
        <div className="hero-content shell">
          <p className="hero-kicker"><span></span> A legacy of learning since 1959</p>
          <h1>67 Years of<br /><em>Shaping Bihar&apos;s</em><br />Daughters</h1>
          <p className="hero-intro">A Catholic institution of faith, discipline, and academic excellence in Digha, Patna.</p>
          <div className="hero-actions"><Link className="button gold" href="/admissions">Apply for Admission <span>→</span></Link><Link className="button outline" href="/about">Our History</Link></div>
        </div>
        <div className="hero-bottom"><div className="shell"><span>Bihar Board Affiliated</span><span>Est. 1959</span><span>Catholic Institution</span><span>Digha, Patna</span></div></div>
      </section>

      <section className="stats">
        <div className="shell stats-grid">
          <div><CountUp end={95} suffix="%" /><span>2025-26 Top Score</span></div>
          <div><CountUp end={67} suffix="+" /><span>Years of Excellence</span></div>
          <div><CountUp end={1959} duration={1700} /><span>Established in Patna</span></div>
          <div><strong>BSEB</strong><span>Bihar Board Affiliated</span></div>
        </div>
      </section>

      <StaggerReveal className="quick shell">
        <Link href="/admissions" className="quick-card maroon"><small>01 · ADMISSIONS</small><h2>Begin her Hartmann journey.</h2><span>Apply for 2026-27 →</span></Link>
        <Link href="/results" className="quick-card ochre"><small>02 · RESULTS</small><h2>Excellence, year after year.</h2><span>Meet our toppers →</span></Link>
        <Link href="/news" className="quick-card charcoal"><small>03 · SCHOOL LIFE</small><h2>Stay close to campus.</h2><span>News & events →</span></Link>
        <div className="quick-links-band"><Link href="/news">Notices & Announcements</Link><Link href="/contact">Visit Us — Digha, Patna</Link><Link href="/academics">Academic Information</Link></div>
      </StaggerReveal>

      <section className="about-section">
        <div className="shell about-grid">
          <Reveal className="about-photo" direction="left"><Image src="/images/about-campus.jpg" alt="Hartmann Girls' High School community" fill sizes="(max-width: 800px) 100vw, 50vw" /></Reveal>
          <Reveal className="about-copy" direction="right" delay={120}>
            <p className="eyebrow">About Hartmann</p>
            <h2>Where faith meets <em>excellence.</em></h2>
            <p>Hartmann Girls&apos; High School is a Catholic institution established in 1959 by the Sisters of Notre Dame. For over six decades, it has nurtured generations of young women from Patna through values-based education, academic rigour, and a deep sense of community.</p>
            <Link className="text-link" href="/about">Discover our story <span>→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="why shell section">
        <Reveal className="section-heading"><p className="eyebrow">The Hartmann difference</p><h2>An education grounded<br />in <em>character.</em></h2></Reveal>
        <StaggerReveal className="why-grid">
          <article><b>01</b><strong>95% Top Score</strong><h3>Bihar Board Excellence</h3><p>Farahat Zabi scored 95% in Class X Bihar Board 2025-26.</p></article>
          <article><b>02</b><strong>67 Years of Faith</strong><h3>Built on Values</h3><p>Notre Dame Sisters have shaped generations of young women with character, discipline and compassion since 1959.</p></article>
          <article><b>03</b><strong>All-Girls Environment</strong><h3>A Space to Flourish</h3><p>Students develop confidence, leadership and academic focus in a nurturing community.</p></article>
          <article><b>04</b><strong>Dedicated Educators</strong><h3>Purposeful Teaching</h3><p>Faculty guide each student&apos;s growth under the leadership of Sr. Mary Vidhya, SND.</p></article>
        </StaggerReveal>
      </section>

      <section className="toppers section">
        <div className="shell">
          <Reveal className="split-heading"><div><p className="eyebrow">Our toppers</p><h2>Quiet effort.<br /><em>Remarkable results.</em></h2></div><Link className="text-link light" href="/results">View all achievements <span>→</span></Link></Reveal>
          <StaggerReveal className="topper-grid">{toppers.map((topper, index) => <article className={index === 0 ? "topper-card featured" : "topper-card"} key={`${topper.name}-${topper.year}`}>
            <Image src={topper.image} width={160} height={160} alt={topper.name} />
            <div><small>{topper.year} · {topper.detail}</small><h3>{topper.name}</h3><strong>{topper.score}</strong></div>
          </article>)}</StaggerReveal>
        </div>
      </section>

      <section className="principal">
        <div className="shell principal-grid">
          <Reveal className="principal-photo" direction="left"><Image src="/images/principal.jpg" alt="Sr. Mary Vidhya, SND" fill sizes="(max-width: 700px) 100vw, 38vw" /></Reveal>
          <Reveal direction="right" delay={120}><p className="eyebrow">From the principal&apos;s desk</p><h2>Formation of character,<br /><em>conscience and compassion.</em></h2><p className="principal-intro">Under the leadership of Sr. Mary Vidhya, SND, Hartmann continues its commitment to an education grounded in faith, discipline and service.</p><p className="signature">Sr. Mary Vidhya, SND <small>Principal, Hartmann Girls&apos; High School</small></p></Reveal>
        </div>
      </section>

      <section className="facilities shell section">
        <Reveal className="section-heading"><p className="eyebrow">School infrastructure</p><h2>Spaces that invite<br /><em>curiosity.</em></h2></Reveal>
        <StaggerReveal className="facility-grid">{facilities.map(([title, copy, number, image]) => <article key={title}><div className="facility-photo"><Image src={image} alt="" fill sizes="(max-width: 800px) 50vw, 33vw" /></div><div className="facility-copy"><span>{number}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</StaggerReveal>
        <p className="demo-note">Facility photographs are representative demo images pending school-provided photos.</p>
        <Link className="text-link" href="/facilities">Explore our facilities <span>→</span></Link>
      </section>

      <section className="notice-section">
        <div className="shell notice-grid"><Reveal direction="left"><p className="eyebrow">Notice board</p><h2>Latest from<br /><em>Hartmann.</em></h2><Link className="text-link" href="/news">All notices <span>→</span></Link></Reveal><StaggerReveal>{notices.map((notice, index) => <Link href="/admissions" key={notice} className="notice"><small>ADMISSIONS · 2026-27</small><h3>{notice}</h3><span>Read notice →</span><b>0{index + 1}</b></Link>)}</StaggerReveal></div>
      </section>

      <section className="gallery-section section shell">
        <Reveal className="split-heading"><div><p className="eyebrow">Life at Hartmann</p><h2>Moments from<br /><em>our community.</em></h2></div><Link className="text-link" href="/gallery">View all photographs <span>→</span></Link></Reveal>
        <GalleryLightbox images={gallery.slice(0, 6)} preview />
      </section>
    </main>
    <SiteFooter />
  </>;
}
