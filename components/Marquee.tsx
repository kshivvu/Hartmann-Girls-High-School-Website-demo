const text = "Admissions open for Academic Session 2026-27  ·  Class XI applications now available  ·  Contact: 0612-2567131  ·  hartmannhighschool13@gmail.com  ·  ";

export function Marquee() {
  return <div className="marquee" aria-label={text}>
    <div className="marquee-inner" aria-hidden="true">
      <span>{text}</span><span>{text}</span><span>{text}</span>
    </div>
  </div>;
}
