"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function GalleryLightbox({ images, preview = false }: { images: string[]; preview?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [active]);

  return <>
    <div className={preview ? "gallery-preview" : "full-gallery"}>
      {images.map((src, index) => <button className={`gallery-item gallery-${index + 1}`} key={src} onClick={() => setActive(src)}>
        <Image src={src} alt="Hartmann school event" fill sizes={preview ? "(max-width: 700px) 50vw, 33vw" : "(max-width: 800px) 50vw, 25vw"} />
      </button>)}
    </div>
    <div className={`lightbox-overlay ${active ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Gallery photograph" onClick={() => setActive(null)} aria-hidden={!active}>
      <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close photograph">×</button>
      {active && <Image key={active} src={active} alt="Hartmann school event" fill sizes="90vw" onClick={(event) => event.stopPropagation()} />}
    </div>
  </>;
}
