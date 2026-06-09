import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { InnerPageHero } from "./InnerPageHero";

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <>
    <SiteHeader />
    <main>
      <InnerPageHero title={title} eyebrow={eyebrow} intro={intro} />
      {children}
    </main>
    <SiteFooter />
  </>;
}
