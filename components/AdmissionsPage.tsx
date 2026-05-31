import Link from "next/link";
import { notices, school } from "@/lib/content";

const steps = [
  ["01", "Visit or call us", "Contact the school office to confirm seat availability and get the latest admission dates for your child's class.", school.phone, `tel:${school.phone}`],
  ["02", "Collect the form", "Collect the official admission form from the school office and ask the administration which documents are required for the relevant class.", "Digha, Patna", "/contact"],
  ["03", "Submit and confirm", "Submit the completed form with the requested documents. The school administration will advise you about the remaining steps.", school.email, `mailto:${school.email}`],
];

export function AdmissionsPage() {
  return <>
    <section className="admissions-content shell">
      <div className="admission-alert"><strong>Admissions are open for Academic Session 2026-27.</strong><span>Class XI applications are also available. Contact the school office for current details.</span></div>
      <div className="admission-heading"><p className="eyebrow">How to apply</p><h2>Three simple steps.</h2><p>Begin with the school office so you receive the latest information for your child&apos;s class.</p></div>
      <div className="admission-steps">{steps.map(([number, title, copy, action, href]) => <article className="admission-step" key={number}>
        <b>{number}</b><h3>{title}</h3><p>{copy}</p><Link href={href}>{action} <span>→</span></Link>
      </article>)}</div>
    </section>
    <section className="admission-notices"><div className="shell"><p className="eyebrow">Current notices</p><h2>Admissions information.</h2><div className="content-grid">{notices.map((notice) => <article className="content-card" key={notice}><small>Admissions · 2026-27</small><h3>{notice}</h3><p>Please contact the school office for the official notice and current details.</p><Link href="/contact">Contact the office <span>→</span></Link></article>)}</div></div></section>
    <section className="admission-stats"><div className="shell"><div><strong>95%</strong><span>Board Top Score 2025-26</span></div><div><strong>67+</strong><span>Years of Excellence</span></div><div><strong>BSEB</strong><span>Bihar Board Affiliated</span></div></div></section>
    <section className="admission-contact shell"><p className="eyebrow">Speak with us</p><h2>Have questions about admissions?</h2><a href={`tel:${school.phone}`}>{school.phone}</a><a href={`mailto:${school.email}`}>{school.email}</a><p>{school.location}</p></section>
  </>;
}
