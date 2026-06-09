import Link from "next/link";
import { notices, school } from "@/lib/content";
import { CountUp } from "./CountUp";
import { Reveal, StaggerReveal } from "./Reveal";
import { Accordion } from "./Accordion";

const steps = [
  ["01", "Visit or call us", "Contact the school office to confirm seat availability and get the latest admission dates for your child's class.", school.phone, `tel:${school.phone}`],
  ["02", "Collect the form", "Collect the official admission form from the school office and ask the administration which documents are required for the relevant class.", "Digha, Patna", "/contact"],
  ["03", "Submit and confirm", "Submit the completed form with the requested documents. The school administration will advise you about the remaining steps.", school.email, `mailto:${school.email}`],
];

export function AdmissionsPage() {
  return <>
    <section className="admissions-content shell">
      <Reveal className="admission-alert" direction="none"><strong>Admissions are open for Academic Session 2026-27.</strong><span>Class XI applications are also available. Contact the school office for current details.</span></Reveal>
      <Reveal className="admission-heading"><p className="eyebrow">How to apply</p><h2>Three simple steps.</h2><p>Begin with the school office so you receive the latest information for your child&apos;s class.</p></Reveal>
      <StaggerReveal className="admission-steps">{steps.map(([number, title, copy, action, href]) => <article className="admission-step" key={number}>
        <b>{number}</b><h3>{title}</h3><p>{copy}</p><Link href={href}>{action} <span>→</span></Link>
      </article>)}</StaggerReveal>
    </section>

    {/* Admissions Info Accordions */}
    <section className="admission-accordions section shell">
      <Reveal className="section-heading">
        <p className="eyebrow">Details & policies</p>
        <h2>Admissions <em>Guidelines</em></h2>
      </Reveal>
      
      <div className="accordions-container">
        <Accordion title="Current Admissions Notices">
          <p>Admissions are currently open for the Academic Session 2026-2027. Registration forms for Class XI (Science and Arts streams) are also available at the school office. For precise timelines, examination schedules (if any), and age criteria, please contact the administration desk directly.</p>
        </Accordion>

        <Accordion title="How to Apply">
          <p>The application process is simple:</p>
          <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
            <li style={{ marginBottom: '8px' }}>Collect the official admission registration form from the school office at Digha Ghat, Patna.</li>
            <li style={{ marginBottom: '8px' }}>Fill out the details correctly and attach the necessary documents listed in the application package.</li>
            <li style={{ marginBottom: '8px' }}>Submit the completed form along with the registration fee to the school office. The administration will guide you through the next evaluation or interactive steps.</li>
          </ol>
        </Accordion>

        <Accordion title="Fee Structure">
          <p>Our school fees follow the approved guidelines of the school governing body. Due to variations by class and stream (secondary, senior secondary science, or arts), parents are advised to <strong>contact the school office directly</strong> to obtain the official, verified fee card for the current academic session.</p>
        </Accordion>

        <Accordion title="Documents Required">
          <p>Please prepare the following documents before visiting the admissions office for enrollment confirmation. Parents must <strong>confirm the exact document checklist with the school office</strong> during registration:</p>
          <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
            <li style={{ marginBottom: '6px' }}>Original and photocopy of the candidate's Birth Certificate</li>
            <li style={{ marginBottom: '6px' }}>Previous school's Transfer Certificate (TC) counter-signed by competent authorities</li>
            <li style={{ marginBottom: '6px' }}>Report card/Mark sheet of the last exam passed</li>
            <li style={{ marginBottom: '6px' }}>Recent passport-sized photographs of the child and parents</li>
            <li style={{ marginBottom: '6px' }}>Aadhar Card copy of the child and parents</li>
          </ul>
        </Accordion>

        <Accordion title="Frequently Asked Questions">
          <div className="faq-item" style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0 0 5px', color: 'var(--maroon)' }}>Q: Is Hartmann Girls' High School English or Hindi medium?</h4>
            <p style={{ margin: 0 }}>A: Hartmann Girls' High School follows the BSEB curriculum, with a focus on both English and Hindi language skills alongside standard subjects.</p>
          </div>
          <div className="faq-item" style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0 0 5px', color: 'var(--maroon)' }}>Q: What are the school timings?</h4>
            <p style={{ margin: 0 }}>A: General timings are from 8:00 AM to 2:00 PM, but these vary between summer and winter schedules. Please check current notifications.</p>
          </div>
          <div className="faq-item">
            <h4 style={{ margin: '0 0 5px', color: 'var(--maroon)' }}>Q: Are admissions open for boys?</h4>
            <p style={{ margin: 0 }}>A: No, Hartmann Girls' High School is a dedicated all-girls institution shaping Patna's daughters since 1959.</p>
          </div>
        </Accordion>
      </div>
    </section>

    <section className="admission-notices"><div className="shell"><p className="eyebrow">Current notices</p><h2>Admissions information.</h2><div className="content-grid">{notices.map((notice) => <article className="content-card" key={notice}><small>Admissions · 2026-27</small><h3>{notice}</h3><p>Please contact the school office for the official notice and current details.</p><Link href="/contact">Contact the office <span>→</span></Link></article>)}</div></div></section>
    <section className="admission-stats"><div className="shell"><div><CountUp end={95} suffix="%" /><span>Board Top Score 2025-26</span></div><div><CountUp end={67} suffix="+" /><span>Years of Excellence</span></div><div><strong>BSEB</strong><span>Bihar Board Affiliated</span></div></div></section>
    <section className="admission-contact shell"><p className="eyebrow">Speak with us</p><h2>Have questions about admissions?</h2><a href={`tel:${school.phone}`}>{school.phone}</a><a href={`mailto:${school.email}`}>{school.email}</a><p>{school.location}</p></section>
  </>;
}
