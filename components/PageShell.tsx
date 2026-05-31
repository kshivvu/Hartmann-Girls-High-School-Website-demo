import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <>
    <SiteHeader />
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <Link href="/" className="text-link">Return home <span>→</span></Link>
        </div>
      </section>
      {children}
    </main>
    <SiteFooter />
  </>;
}
