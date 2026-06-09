"use client";

import Script from "next/script";

export function SocialFeed() {
  return (
    <section className="social-feed-section section" style={{ background: '#fcf9f5', padding: '80px 0', borderTop: '1px solid var(--line)' }}>
      <div className="shell">
        <h2 className="text-center" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--deep)', marginBottom: '40px' }}>
          Stay Connected with Hartmann
        </h2>

        {/* Elfsight Instagram Feed Widget */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-3787e910-15d1-475e-b8be-f45c1019c231" data-elfsight-app-lazy></div>
        
      </div>
    </section>
  );
}
