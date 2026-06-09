import Image from "next/image";
import { Reveal, StaggerReveal } from "./Reveal";

const leadershipMembers = [
  {
    name: "Most Rev. Archbishop Sebastian Kallupura",
    role: "Patron & President",
    image: "/images/hartmann-archbishop.jpg",
    bio: "Spiritual leader and President of the Governing Body, guiding the institution with strategic vision and value-oriented leadership.",
  },
  {
    name: "Rev. Fr. James George",
    role: "Vicar General & Secretary",
    image: "/images/hartmann-secretary.jpg",
    bio: "Oversees the administrative framework, school governance, infrastructure development, and overall institutional excellence.",
  },
  {
    name: "Sr. Mary Vidhya, SND",
    role: "Principal",
    image: "/images/hartmann-principal.jpg",
    bio: "Steers academic operations, curriculum enhancement, and character formation, cultivating an environment of growth and scientific curiosity.",
  },
  {
    name: "Sr. Mary Maris, SND",
    role: "Founder & First Principal",
    image: "/images/hartmann-founder.jpg",
    bio: "Visionary founder who established the school in 1959, laying the foundations of academic excellence and service that define HGHS.",
  },
];

const timelineEvents = [
  { year: "1959", title: "School Foundation", desc: "Established by the Sisters of Notre Dame, starting a legacy of dedicated values-based education in Patna." },
  { year: "1967", title: "Higher Secondary Status", desc: "Recognized as a higher secondary school, expanding facilities to support advanced education for young women." },
  { year: "2009", title: "Golden Jubilee", desc: "Celebrated 50 years of shaping character, discipline, and outstanding academic achievements in Bihar." },
  { year: "Present", title: "Continued Legacy", desc: "Continuing our commitment to holistic excellence under modern leadership, fostering faith, conscience, and compassion." },
];

export function AboutPage() {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="about-mv section shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Our Core values</p>
          <h2>Mission & <em>Vision</em></h2>
        </Reveal>
        <StaggerReveal className="mv-grid">
          <article className="mv-card">
            <div className="mv-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To foster an environment where academic rigour, moral values, and social service grow together. We aim to nurture young women to become confident, responsible citizens who serve society with character and integrity.</p>
          </article>
          <article className="mv-card">
            <div className="mv-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3>Our Vision</h3>
            <p>To empower young minds with the courage, wisdom, and capacity to lead lives of purpose. We envision a community where learning inspires active contribution, personal discipline, and deep empathy for all.</p>
          </article>
        </StaggerReveal>
      </section>

      {/* History Timeline */}
      <section className="about-history section">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">A journey of dedication</p>
            <h2>Our Historical <em>Timeline</em></h2>
          </Reveal>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <Reveal key={event.year} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-badge">{event.year}</div>
                <div className="timeline-panel">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="about-leadership section shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Governing council</p>
          <h2>School <em>Leadership</em></h2>
        </Reveal>
        <StaggerReveal className="leadership-grid">
          {leadershipMembers.map((member) => (
            <article className="leadership-card" key={member.name}>
              <div className="leadership-photo-wrapper">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 800px) 50vw, 25vw" />
              </div>
              <div className="leadership-info">
                <h3>{member.name}</h3>
                <small className="leadership-role">{member.role}</small>
                <p className="leadership-bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </section>

      {/* Principal Desk */}
      <section className="about-principal-desk section">
        <div className="shell principal-desk-grid">
          <Reveal className="principal-desk-photo" direction="left">
            <Image src="/images/principal.jpg" alt="Sr. Mary Vidhya, SND" fill sizes="(max-width: 700px) 100vw, 38vw" />
          </Reveal>
          <Reveal direction="right" delay={120} className="principal-desk-copy">
            <p className="eyebrow">From the principal&apos;s desk</p>
            <h2>Formation of character,<br /><em>conscience and compassion.</em></h2>
            <p className="principal-intro">Under the leadership of Sr. Mary Vidhya, SND, Hartmann continues its commitment to an education grounded in faith, discipline and service.</p>
            <p className="principal-body">
              For over six decades, Hartmann Girls&apos; High School has stood as a beacon of academic rigor and character development. Guided by the vision of the Sisters of Notre Dame, we strive to give our students more than just textbook knowledge. We believe in providing an education that molds their conscience, builds strong moral character, and instills a spirit of compassionate service. 
            </p>
            <p className="principal-body">
              We encourage our girls to explore their curiosity, seek truth, and approach their studies with sincerity and discipline. Together, we work to make HGHS a nurturing space where every student can discover her talents and prepare to make meaningful contributions to the world.
            </p>
            <div className="signature-block">
              <span className="signature-name">Sr. Mary Vidhya, SND</span>
              <span className="signature-title">Principal, Hartmann Girls&apos; High School</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
