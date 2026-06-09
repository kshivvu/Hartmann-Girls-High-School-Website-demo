import Link from "next/link";
import { Reveal, StaggerReveal } from "./Reveal";

export function AcademicsPage() {
  return (
    <>
      <section className="academics-intro section shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Academic Programs</p>
          <h2>A disciplined <em>foundation.</em></h2>
        </Reveal>
        <Reveal className="academics-lead">
          <p>
            Our academic programme is shaped by Bihar Board requirements and strengthened by practical learning, attentive teaching and opportunities for creative expression. We prepare young women to succeed academically and grow as responsible leaders.
          </p>
        </Reveal>
      </section>

      {/* Program Details */}
      <section className="academics-programs section">
        <div className="shell academics-programs-grid">
          <Reveal className="program-card">
            <h3>Bihar Board Affiliation</h3>
            <p>
              Hartmann Girls&apos; High School is affiliated with the Bihar School Examination Board (BSEB). We deliver a robust secondary and higher secondary curriculum designed to meet State Board guidelines while emphasizing deep conceptual understanding.
            </p>
            <ul className="program-bullets">
              <li>Primary to Secondary Curriculum (Class I - X)</li>
              <li>Higher Secondary Courses (Class XI - XII Science and Arts)</li>
              <li>Focus on State Board Examination Excellence</li>
            </ul>
          </Reveal>

          <Reveal className="program-card" delay={100}>
            <h3>Curriculum Overview</h3>
            <p>
              Our curriculum blends theoretical study with practical application, encouraging critical thinking, regular assessments, and conceptual clarity. Subjects are taught with care to foster both logical reasoning and values-based character formation.
            </p>
            <ul className="program-bullets">
              <li>Science & Mathematics practical workshops</li>
              <li>Language studies in English, Hindi, and Sanskrit</li>
              <li>Social Sciences and value education modules</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Promotion and Examination Policy */}
      <section className="academics-policy section shell">
        <div className="policy-block">
          <Reveal className="section-heading">
            <p className="eyebrow">Evaluation & Policies</p>
            <h2>Examinations & <em>Promotion</em></h2>
          </Reveal>
          <Reveal className="policy-text">
            <p>
              We conduct regular internal assessments, mid-term examinations, and final promotional evaluations to trace each student&apos;s progress throughout the year. Attendance, assignments, and test scores all play a key role in school promotions.
            </p>
            <blockquote>
              <strong>Please Note:</strong> Exact criteria for promotion, minimum attendance thresholds, and specific exam regulations follow Bihar Board rules. Parents should contact the school office directly for the latest academic calendar and student handbook.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Holistic Development */}
      <section className="academics-holistic section">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Beyond the classroom</p>
            <h2>Holistic <em>Empowerment</em></h2>
          </Reveal>
          <StaggerReveal className="holistic-grid">
            <article className="holistic-item">
              <h4>Values & Leadership</h4>
              <p>Character building is at the center of the Hartmann experience. Daily assemblies, value education, and community activities nurture leadership qualities.</p>
            </article>
            <article className="holistic-item">
              <h4>Arts & Drawing</h4>
              <p>Students express their creativity in drawing classes and design workshops under the guidance of skilled art educators.</p>
            </article>
            <article className="holistic-item">
              <h4>Music & Performing Arts</h4>
              <p>From vocal training to traditional and modern instruments, our music rooms provide a welcoming environment for musical discovery.</p>
            </article>
            <article className="holistic-item">
              <h4>Physical Culture</h4>
              <p>Regular sports, games, and band activities promote physical wellness, teamwork, and healthy competition among students.</p>
            </article>
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="academics-cta section shell">
        <Reveal className="cta-panel">
          <h2>Have questions about our curriculum?</h2>
          <p>Connect with the school office to learn more about the syllabus, academic calendar, or program details.</p>
          <Link href="/contact" className="button gold">Contact Academic Desk <span>→</span></Link>
        </Reveal>
      </section>
    </>
  );
}
