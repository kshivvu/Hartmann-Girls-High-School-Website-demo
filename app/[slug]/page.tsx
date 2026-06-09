import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { AdmissionsPage } from "@/components/AdmissionsPage";
import { AboutPage } from "@/components/AboutPage";
import { AcademicsPage } from "@/components/AcademicsPage";
import { FacilitiesPage } from "@/components/FacilitiesPage";
import { ContactPage } from "@/components/ContactPage";
import { GalleryPage } from "@/components/GalleryPage";
import { notices, toppers } from "@/lib/content";

const pages = {
  about: { eyebrow: "About Hartmann", title: "A tradition of purpose.", intro: "Established in 1959 by the Sisters of Notre Dame, Hartmann Girls' High School has served generations of young women in Patna with an education rooted in faith, knowledge and service." },
  academics: { eyebrow: "Academics", title: "Learning with rigour.", intro: "Hartmann follows the Bihar School Examination Board curriculum and encourages disciplined study, curiosity and steady progress." },
  admissions: { eyebrow: "Admissions 2026-27", title: "Begin her journey.", intro: "Admissions information for the new academic session and Class XI is now available. Please contact the school office for the latest process, dates and required documents." },
  facilities: { eyebrow: "Our Facilities", title: "Room to discover.", intro: "Our campus supports learning beyond the textbook, with spaces designed for experiment, expression, reading and play." },
  results: { eyebrow: "Results & Achievements", title: "Effort that shines.", intro: "We celebrate the commitment of every Hartmann student and proudly recognize our listed Bihar Board toppers." },
  news: { eyebrow: "News & Events", title: "From our notice board.", intro: "Current admissions notices and important school information for parents and students." },
  gallery: { eyebrow: "School Gallery", title: "Life at Hartmann.", intro: "A glimpse into the assemblies, celebrations and shared moments that shape our school community." },
  contact: { eyebrow: "Contact Hartmann", title: "Visit our campus.", intro: "Speak with the school office or visit us in Digha, Patna. We will be glad to help with your questions." },
} as const;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();
  return <PageShell {...page}><PageBody slug={slug} /></PageShell>;
}

function PageBody({ slug }: { slug: string }) {
  if (slug === "about") return <AboutPage />;
  if (slug === "academics") return <AcademicsPage />;
  if (slug === "admissions") return <AdmissionsPage />;
  if (slug === "facilities") return <FacilitiesPage />;
  if (slug === "contact") return <ContactPage />;
  if (slug === "gallery") return <GalleryPage />;
  
  if (slug === "results") return <section className="content-section shell"><h2>Listed board toppers</h2><div className="content-grid">{toppers.map((student) => <article className="content-card" key={`${student.name}-${student.year}`}><Image src={student.image} width={110} height={110} alt={student.name} style={{ objectFit: "cover", borderRadius: "50%" }} /><h3>{student.name}</h3><p><b>{student.score}</b> · {student.detail} · {student.year}</p></article>)}</div></section>;
  if (slug === "news") return <section className="content-section shell"><h2>Current notices</h2><div className="content-grid">{notices.map((notice) => <article className="content-card" key={notice}><p className="eyebrow">Admissions · 2026-27</p><h3>{notice}</h3><p>Please contact the school office for the official notice and current details.</p></article>)}</div></section>;
  
  return notFound();
}
