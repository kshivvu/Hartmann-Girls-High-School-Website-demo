import Image from "next/image";
import { Reveal } from "./Reveal";
import { facilities } from "@/lib/content";

export function FacilitiesPage() {
  return (
    <>
      {/* Intro section */}
      <section className="facilities-intro section shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Campus Environment</p>
          <h2>Spaces that invite <em>curiosity.</em></h2>
        </Reveal>
        <Reveal className="facilities-lead">
          <p>
            Our campus is designed to support learning beyond the textbook. From well-equipped laboratories to creative arts studios and open playgrounds, Hartmann provides spaces that allow students to experiment, express, and discover their potentials.
          </p>
        </Reveal>
      </section>

      {/* Alternating facilities list */}
      <section className="facilities-list-section">
        <div className="shell">
          <div className="facilities-alternating">
            {facilities.map(([title, desc, num, img], index) => (
              <Reveal 
                key={title} 
                className={`facility-row ${index % 2 === 0 ? "row-normal" : "row-reverse"}`}
              >
                <div className="facility-row-image">
                  <div className="img-container">
                    <Image 
                      src={img} 
                      alt={title} 
                      fill 
                      sizes="(max-width: 800px) 100vw, 50vw" 
                      priority={index < 2}
                    />
                  </div>
                </div>
                <div className="facility-row-copy">
                  <span className="facility-number">{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom disclaimer note */}
      <section className="facilities-disclaimer section shell text-center">
        <p className="demo-note">
          Please note: The facility photographs shown here are representative demo images pending verified school-provided photographs.
        </p>
      </section>
    </>
  );
}
