import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { nav, school } from "@/lib/content";

const tentativeAddress = school.addressVerified ? school.address : `${school.address} (Confirm before visiting)`;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        {/* Column 1: Brand & Map */}
        <Reveal className="footer-brand-section" direction="up">
          <div className="footer-brand">
            <Image src="/images/crest.png" alt="Hartmann Girls' High School Crest" width={64} height={64} />
            <div>
              <h3>{school.name}</h3>
              <p className="brand-tagline">A Catholic institution of faith, discipline and academic excellence since 1959.</p>
            </div>
          </div>
          <div className="footer-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14387.482841408682!2d85.1014146!3d25.6424162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca6ec8095f27b47e!2sHartmann%20Girls&#39;%20High%20School!5e0!3m2!1sen!2sin!4v1664460433527!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hartmann School Location"
            />
          </div>
        </Reveal>

        {/* Column 2: Quick Links */}
        <Reveal className="footer-links-section" direction="up" delay={80}>
          <h4>Explore</h4>
          <div className="footer-links-grid">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="footer-link">
                {label}
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Column 3: Contact & CTA */}
        <Reveal className="footer-contact-section" direction="up" delay={160}>
          <h4>Admissions Desk</h4>
          <div className="footer-cta-wrapper">
            <Link href="/admissions" className="button gold btn-sm">
              Admissions Desk
            </Link>
          </div>
          
          <div className="footer-contact-details">
            <p className="contact-item">
              <strong>Phone:</strong> <a href={`tel:${school.phone}`}>{school.phone}</a>
            </p>
            <p className="contact-item">
              <strong>Email:</strong> <a href={`mailto:${school.email}`} className="break-word">{school.email}</a>
            </p>
            <p className="contact-item">
              <strong>Address:</strong> {tentativeAddress}
            </p>
          </div>

          <div className="footer-social-wrapper">
            <a 
              href="https://www.facebook.com/hartmannschool/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn facebook"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              <span>Connect on Facebook</span>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} {school.name} | All Rights Reserved</span>
        <span>Bihar Board Affiliated · Digha, Patna</span>
      </div>
    </footer>
  );
}
