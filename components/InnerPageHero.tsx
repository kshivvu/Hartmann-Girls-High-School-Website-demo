import Link from "next/link";

interface InnerPageHeroProps {
  title: string;
  eyebrow: string;
  intro?: string;
}

export function InnerPageHero({ title, eyebrow, intro }: InnerPageHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-accents">
        <div className="accent-circle accent-1"></div>
        <div className="accent-circle accent-2"></div>
      </div>
      <div className="shell inner-hero-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">{eyebrow || title}</span>
        </nav>
        <h1>{title}</h1>
        {intro && <p className="inner-hero-intro">{intro}</p>}
      </div>
    </section>
  );
}
