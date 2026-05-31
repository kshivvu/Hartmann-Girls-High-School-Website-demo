# Hartmann Girls' High School — Fix Instructions for Codex
### Apply all changes below to the existing Next.js 15 App Router codebase

---

## 0. FONTS — Change globally

Remove current fonts. Install and use:
- **Display/Headings:** `Cormorant Garamond` (weights: 400, 500, 600, 700, italic)
- **Body/UI:** `Plus Jakarta Sans` (weights: 400, 500, 600)

In `layout.tsx` or `globals.css`, import from Google Fonts:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap
```

Apply:
- All `h1`, `h2`, `h3`, section headings, hero text → `Cormorant Garamond`
- All body text, nav, buttons, labels, captions → `Plus Jakarta Sans`

---

## 1. MARQUEE — Add at very top of every page

Add a thin marquee strip **above the navbar** in the root layout.

**Specs:**
- Background: `#7B1C2E` (maroon)
- Text color: `#C9A84C` (gold)
- Font: Plus Jakarta Sans, 13px, tracking-wide
- Height: 36px
- Content (auto-scrolling, looping):
  `📢 Admissions Open for Academic Session 2026–27  ·  Class XI Applications Now Available  ·  Contact: 0612-2567131  ·  hartmannhighschool13@gmail.com  ·  `

**Implementation:**
```jsx
// Marquee using CSS animation
<div style={{ background: '#7B1C2E', color: '#C9A84C', height: 36, overflow: 'hidden' }}>
  <div className="marquee-inner">
    {text repeated 3x for seamless loop}
  </div>
</div>
```
CSS:
```css
.marquee-inner {
  display: flex;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
```

---

## 2. HERO — Replace static background with auto-playing carousel

Replace the current static hero background image with an auto-playing crossfade carousel.

**Images to use (from Hartmann's own site):**
```
https://hartmanngirlsschoolpatna.org/Banner/1.jpg
https://hartmanngirlsschoolpatna.org/Banner/2.jpg
https://hartmanngirlsschoolpatna.org/Banner/3.jpg
https://hartmanngirlsschoolpatna.org/Banner/4.jpg
https://hartmanngirlsschoolpatna.org/Banner/5.jpg
```

**Specs:**
- Transition: crossfade (opacity), NOT slide
- Interval: 4500ms
- Each image: `object-fit: cover`, full viewport height
- Dark maroon overlay: `rgba(60, 10, 20, 0.62)` on top of each image
- All existing hero text and buttons stay exactly as they are, layered above overlay
- Add small dot indicators at bottom center of hero (5 dots, active dot = gold, inactive = white/40%)
- No arrows/controls needed

---

## 3. BUTTONS — Round and animate all buttons globally

Apply to ALL buttons across the entire site:

```css
border-radius: 6px; /* slightly rounded, not pill */
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

On hover:
```css
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(0,0,0,0.15);
```

Primary buttons (maroon filled): on hover, darken background by 8%
Outlined buttons: on hover, fill with maroon at 10% opacity

---

## 4. CARDS — Round corners and soften globally

Apply to ALL card components across the site:

```css
border-radius: 12px;
border: 1px solid rgba(0,0,0,0.07); /* replace hard borders */
box-shadow: 0 2px 12px rgba(0,0,0,0.06);
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

On hover:
```css
transform: translateY(-3px);
box-shadow: 0 8px 24px rgba(0,0,0,0.10);
```

Remove any hard `border` lines that feel rigid. Prefer `box-shadow` for depth.

---

## 5. "AN EDUCATION GROUNDED IN CHARACTER" SECTION — Replace card content

Find the 4-card "Why Choose Us" / "Hartmann Difference" section.

Replace card content with:

**Card 01:**
- Eyebrow: `95% TOP SCORE`
- Headline: `Bihar Board Excellence`
- Body: `Farahat Zabi scored 95% in Class X Bihar Board 2025–26 — among the highest results in Patna district.`

**Card 02:**
- Eyebrow: `67 YEARS OF FAITH`
- Headline: `Built on Values`
- Body: `Notre Dame Sisters have shaped generations of young women with character, discipline and compassion since 1959.`

**Card 03:**
- Eyebrow: `ALL-GIRLS ENVIRONMENT`
- Headline: `A Space to Flourish`
- Body: `Free from distraction, our students develop confidence, leadership and academic focus in a nurturing community.`

**Card 04:**
- Eyebrow: `100+ EDUCATORS`
- Headline: `Purposeful Teaching`
- Body: `Experienced faculty committed to each student's individual growth, under the leadership of Sr. Mary Vidhya, SND.`

---

## 6. TOPPERS SECTION — Enhance

Current topper cards are good but need refinement:

- Increase score font size to `3rem`, weight 700, color `#C9A84C`
- Add `Class X` or `Class XII` label clearly above the score
- Add thin gold border on card hover: `border: 1px solid #C9A84C`
- Add card hover lift (same as global card hover above)
- Section headline: increase to larger size, make it more impactful
- Add a subtle maroon background texture or keep solid — but ensure contrast is strong

---

## 7. FACILITIES SECTION — Add photos

Replace text-only facility cards with photo + text cards.

**Layout:** Photo takes top 55% of card, text takes bottom 45%.

**Stock image URLs (Unsplash — free to use):**

| Facility | Image URL |
|---|---|
| Science Lab | `https://images.unsplash.com/photo-1532094349884-543559c5b7e4?w=800&q=80` |
| Maths Lab | `https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80` |
| Library | `https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80` |
| Music Room | `https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&q=80` |
| Drawing Room | `https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80` |
| Playground | `https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80` |

**Card specs:**
- `border-radius: 12px`
- `overflow: hidden`
- Image: `object-fit: cover`, height `200px`
- On image hover: scale to `1.04` with `transition: 0.3s ease`
- Text section: white background, padding `20px`
- Facility number (01, 02...) in gold, small, above title

---

## 8. GALLERY SECTION — Add hover animations

Keep masonry or grid layout. Add:

**On each image:**
```css
overflow: hidden;
border-radius: 8px;
cursor: pointer;
```

**Image hover effect:**
```css
img {
  transition: transform 0.4s ease;
}
.gallery-item:hover img {
  transform: scale(1.05);
}
```

**Maroon overlay on hover:**
```css
.gallery-item::after {
  content: 'View →';
  position: absolute;
  inset: 0;
  background: rgba(123, 28, 46, 0.55);
  color: #C9A84C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.gallery-item:hover::after {
  opacity: 1;
}
```

Add fade-in on scroll using Intersection Observer or CSS `animation-play-state`.

---

## 9. ADMISSIONS PAGE — Full rebuild

Replace the current sparse admissions page with this complete structure:

### 9.1 Hero (keep existing)
"Begin her journey." headline — keep as is. Good.

### 9.2 Alert Banner (below hero)
```jsx
<div className="admission-alert">
  🎓 Admissions are now open for the Academic Session 2026–27. 
  Class XI applications also available. Contact the school office for details.
</div>
```
Style: Gold background `#C9A84C`, dark maroon text, padding `16px 24px`, `border-radius: 8px`, margin below hero.

### 9.3 How to Apply — 3 Step Process
Replace vague current cards with specific, actionable steps:

**Step 01 — Enquire**
- Icon: 📞
- Title: `Visit or Call Us`
- Body: `Contact the school office to confirm seat availability and get the latest admission dates for your child's class.`
- Action: `📞 0612-2567131` (clickable tel link)

**Step 02 — Apply**
- Icon: 📋
- Title: `Collect & Fill the Form`
- Body: `Collect the official admission form from the school office. Required documents: Birth Certificate, Previous Class Marksheet, Transfer Certificate, 2 Passport Photos.`
- Action: `📍 State Bank Colony, Digha, Patna`

**Step 03 — Confirm**
- Icon: ✅
- Title: `Submit & Confirm`
- Body: `Submit the completed form with all documents. Fee payment and final confirmation as advised by the school administration.`
- Action: `✉ hartmannhighschool13@gmail.com`

Step cards: large numbered circle (maroon, gold number), connected by a subtle dotted line on desktop.

### 9.4 Current Notices
Two notice cards:

**Notice 1:**
- Badge: `ADMISSIONS · 2026-27`
- Title: `Admission Notice for Class XI (2026–2027)`
- Date: `Academic Session 2026-27`
- CTA: `READ NOTICE →` (links to original notice URL)

**Notice 2:**
- Badge: `ADMISSIONS · 2026-27`
- Title: `Admission Notice for New Academic Session 2026–2027`
- CTA: `READ NOTICE →`

### 9.5 Quick Stats Strip
3 stats in a maroon band:
- `95%` — Board Top Score 2025-26
- `67+` — Years of Excellence
- `2000+` — Current Students

### 9.6 Contact CTA
Full-width section, ivory background:
```
Have questions about admissions?

📞  0612-2567131
✉   hartmannhighschool13@gmail.com
📍  State Bank Colony, Digha, Patna, Bihar 800010

Office Hours: Monday–Saturday, 9:00 AM – 3:00 PM
```
Large, clean, centered. No form needed — just contact info.

---

## 10. ABOUT SECTION HOMEPAGE — Fix founder photo

In the "Where faith meets excellence" section, the current image shows Sr. Mary Maris with a caption overlay ("Died on 05.05.2009") which is inappropriate for a homepage marketing section.

Replace with one of these from their gallery:
```
https://hartmanngirlsschoolpatna.org/Gallery/265.jpg
```
Or any recent school/classroom photo from their gallery folder.

---

## GLOBAL NOTES

- Do NOT change the color palette (maroon `#7B1C2E`, gold `#C9A84C`, ivory `#FAF6F0`)
- Do NOT change any existing copy that is working well
- Do NOT break mobile responsiveness — test all changes at 375px width
- Keep Vercel deployment working — no new dependencies that break build
- All Unsplash image URLs are free to use with no attribution required for demos

---

## PRIORITY ORDER

1. Fonts (affects everything)
2. Marquee (quick win, visible immediately)
3. Hero carousel (biggest visual impact)
4. Admissions page rebuild (most content-weak page)
5. Button + card global fixes (polish)
6. Facilities photos
7. Card content copy
8. Gallery hover effects
9. Toppers enhancement
