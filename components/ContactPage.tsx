"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { school } from "@/lib/content";

const grades = [
  "Class K.G.",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI (Arts)",
  "Class XI (Science)",
  "Class XII (Arts)",
  "Class XII (Science)",
];

const sources = [
  "School Website",
  "Family / Friends Referral",
  "Google Search",
  "School Event",
  "Social Media",
  "Others",
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    source: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !formData.childName ||
      !formData.parentName ||
      !formData.email ||
      !formData.phone ||
      !formData.grade ||
      !formData.source ||
      !formData.consent
    ) {
      setError("Please fill in all required fields and accept the consent checkbox.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        childName: "",
        parentName: "",
        email: "",
        phone: "",
        grade: "",
        source: "",
        consent: false,
      });
    }, 1200);
  };

  return (
    <>
      <section className="contact-main section shell">
        <div className="contact-grid-top">
          <Reveal className="contact-info-panel" direction="left">
            <div className="contact-heading">
              <p className="eyebrow">Quick Connection</p>
              <h2>Reach Our Desk</h2>
            </div>

            <div className="contact-cards-stack">
              {/* Address Card */}
              <div className="contact-card-item">
                <h3>Campus Location</h3>
                <p>{school.address}</p>
                <p className="tentative-note">(Follows current public site. Confirm before visiting.)</p>
              </div>

              {/* Call & Email Grid */}
              <div className="contact-card-subgrid">
                <div className="contact-card-item">
                  <h3>Phone Inquiries</h3>
                  <p><a href={`tel:${school.phone}`} className="contact-link">{school.phone}</a></p>
                </div>
                <div className="contact-card-item">
                  <h3>Email Support</h3>
                  <p><a href={`mailto:${school.email}`} className="contact-link">{school.email}</a></p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="contact-card-item">
                <h3>Office Working Hours</h3>
                <p>Monday to Saturday: 8:00 AM — 2:00 PM</p>
                <p className="tentative-note">(Hours vary between summer and winter schedules. Confirm with school office.)</p>
              </div>
            </div>
          </Reveal>

          {/* Maps Card */}
          <Reveal className="contact-map-panel" direction="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14387.482841408682!2d85.1014146!3d25.6424162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca6ec8095f27b47e!2sHartmann%20Girls&#39;%20High%20School!5e0!3m2!1sen!2sin!4v1664460433527!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", borderRadius: "16px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hartmann Girls' High School Map"
            />
          </Reveal>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="contact-enquiry-section section">
        <div className="shell">
          <div className="enquiry-card-wrapper">
            <div className="enquiry-header text-center">
              <p className="eyebrow">Admissions Intake</p>
              <h2>Admission Enquiry Form</h2>
              <p className="enquiry-desc">
                Welcome to our Admissions Office. Please submit your details below and a school counselor will connect with you.
              </p>
            </div>

            {submitted ? (
              <div className="enquiry-success-message">
                <span className="success-icon">✓</span>
                <h3>Enquiry Submitted Successfully</h3>
                <p>
                  Thank you for your interest in Hartmann Girls&apos; High School. We have registered your inquiry, and our team will get in touch with you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="enquiry-reset-btn"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                {error && (
                  <div className="enquiry-error-banner">
                    {error}
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="childName">
                      Child&apos;s Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder="Enter full name of the child"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="parentName">
                      Father&apos;s / Mother&apos;s Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent or guardian name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@domain.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="required-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="grade">
                      Enquiry Class <span className="required-star">*</span>
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Target Class *</option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="source">
                      Where did you hear about us? <span className="required-star">*</span>
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Referral Source *</option>
                      {sources.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-consent-box">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="consent">
                    I agree to receive communications and registration updates from the admissions desk regarding this enquiry. <span className="required-star">*</span>
                  </label>
                </div>

                <div className="form-submit-wrapper">
                  <button type="submit" className={`button gold ${isSubmitting ? "submitting" : ""}`} disabled={isSubmitting}>
                    {isSubmitting ? <>Submitting Inquiry <span className="btn-spinner" /></> : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
