import Image from "next/image";
import Link from "next/link";
import { nav, school } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <Image src="/images/crest.png" alt="" width={76} height={76} />
          <div><h3>{school.name}</h3><p>A Catholic institution of faith, discipline and academic excellence since 1959.</p></div>
        </div>
        <div><h4>Visit Us</h4><p>{school.location}</p><p><a href={`tel:${school.phone}`}>{school.phone}</a><br /><a href={`mailto:${school.email}`}>{school.email}</a></p></div>
        <div><h4>Explore</h4>{nav.slice(0, 5).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      </div>
      <div className="footer-bottom shell"><span>© {new Date().getFullYear()} {school.name}</span><span>Bihar Board Affiliated · Digha, Patna</span></div>
    </footer>
  );
}
