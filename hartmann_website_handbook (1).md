# Hartmann Girls' High School — Website Handbook
### For: DeshSeekho Co-founder
### Deadline: June 8th, 2026 (pitch is June 10th, 2026)
### Reference demo: hartmann-girls-high-school-website.vercel.app

---

## 1. The Goal

This website has ONE job: make a parent who Googles "girls school Patna" feel that Hartmann is one of the most trustworthy, established, and well-run schools in the area — before they have even visited.

The principal (Sr. Mary Vidhya, SND) needs to look at this and feel **proud**. It should feel recognizably Hartmann: rooted in its history, attentive to parents, and presented with quiet confidence.

---

## 2. Brand Identity

| Attribute | Value |
|---|---|
| School Name | Hartmann Girls' High School |
| Tagline | 67 Years of Shaping Bihar's Daughters |
| Established | 1959 |
| Affiliation | Bihar Board (BSEB) |
| Type | Catholic Missionary Institution |
| Location | Digha, Patna, Bihar — verify full address and PIN before launch |
| Principal | Sr. Mary Vidhya, SND |
| Founder | Sr. Mary Maris, SND |
| Phone | 0612-2567131 |
| Email | hartmannhighschool13@gmail.com |

### Color Palette
- **Primary:** Deep Maroon `#7B1C2E` (Catholic identity, authority, trust)
- **Secondary:** Ivory/Cream `#FAF6F0` (warmth, purity)
- **Accent:** Gold `#C9A84C` (achievement, prestige)
- **Text:** Dark Charcoal `#1A1A1A`
- **Muted:** Warm Gray `#6B6B6B`

### Typography
- **Display/Hero:** Playfair Display (serif — gravitas, tradition)
- **Body:** DM Sans or Nunito (clean, readable)
- **Stats/Numbers:** Playfair Display Bold

### Tone
Dignified. Warm. Proud. Not corporate. Not flashy. Think: a respected institution that doesn't need to shout.

### Design Principle
The website must **not look AI-generated**. It should feel like it was art-directed for this specific school after studying its history, campus, leadership, and families.

- Use real Hartmann photographs and real school information throughout.
- Prefer strong editorial composition over a stack of interchangeable cards.
- Use whitespace, alignment, and typography for polish. Do not decorate every empty area.
- Keep the palette disciplined: maroon, ivory, charcoal, and gold. Use teal only if a section genuinely needs contrast.
- Use simple line icons sparingly. Do not use emoji in the finished interface.
- Avoid generic education illustrations, abstract blobs, excessive rounded corners, floating badges, gradient-heavy sections, and decorative sparkle effects.
- Avoid repeating the same centered heading + paragraph + three-card-grid pattern in every section.
- Keep animations subtle and functional: small hover states and gentle image transitions only.
- Write in a natural institutional voice. Avoid inflated copy, generic superlatives, and phrases that could belong to any school.

---

## 3. Page Structure

### Pages to build:
1. **Home** (most important)
2. **About** (history, mission, vision, principal's message)
3. **Academics** (curriculum, results, promotions)
4. **Admissions** (process, notice, fee structure)
5. **Facilities** (labs, library, music, sports, etc.)
6. **Achievements / Toppers** (board results, photos)
7. **News & Events**
8. **Gallery**
9. **Contact**
10. **Student Portal** (button that links to existing Mindscan portal — don't build, just link)

### Pitch Build Priority
The homepage is the sales surface and should receive most of the design attention before June 8th. Supporting pages should feel complete and consistent, but they do not need elaborate custom layouts for the pitch.

1. Finish the homepage, shared navbar, footer, responsive behavior, and image optimization first.
2. Build polished About, Admissions, Results, Gallery, and Contact pages next.
3. Keep Academics, Facilities, and News & Events concise and useful; expand them after the pitch if needed.
4. Use a single content data layer for contact details, notices, topper records, and shared school facts so corrections are made once.

---

## 4. Home Page — Section by Section

### 4.1 Navbar
- Logo (use existing circular school crest from their site) + School Name
- "Est. 1959 · Patna, Bihar" subtext
- Nav links: Home | About | Academics | Admissions | Facilities | Results | News & Events | Gallery | Contact
- CTA button (top right): **"Apply for Admission →"** in Maroon/Gold
- Sticky on scroll

---

### 4.2 Hero Section ⭐ MOST IMPORTANT
**Full viewport height. No compromise.**

- Background: Dark maroon overlay on a school photo (use photos from their existing gallery — fetch from hartmanngirlsschoolpatna.org/Gallery/)
- Large serif headline:
  > **"67 Years of**
  > **Shaping Bihar's**
  > **Daughters"**
- Subheadline: *A Catholic institution of faith, discipline, and academic excellence — Digha, Patna since 1959*
- Two CTA buttons:
  - **"Apply for Admission →"** (filled, gold)
  - **"Our History"** (outlined, white)
- Bottom of hero: thin badge strip — `Bihar Board Affiliated · Est. 1959 · Catholic Institution · Digha, Patna`

**Design note:** Hero must feel like opening a prestigious school's annual report — not a SaaS landing page.

---

### 4.3 Stats Bar
Four stats in a horizontal band (maroon background, gold numbers):

| Stat | Value |
|---|---|
| Board Top Score | 95% (2025-26) |
| Years of Excellence | 67+ |
| Institution | Catholic |
| Affiliation | Bihar Board |

---

### 4.4 Quick Access Cards
Three large colored cards (keep from current demo, refine):
- **Admissions** — Apply for 2026-27 → `[Maroon]`
- **Results** — View our toppers → `[Gold]`
- **Events** — What's on → `[Ivory or Charcoal]`

Below cards, three text links:
- Notices & Announcements →
- Visit Us — Digha, Patna →
- Fee Structure →

---

### 4.5 About Strip
Two-column layout:
- **Left:** School photo (interior, classroom, or assembly)
- **Right:**
  - Label: `ABOUT HARTMANN`
  - Headline: *"Where Faith Meets Excellence"*
  - 3-line description: *Hartmann Girls' High School is a Catholic institution established in 1959 by the Sisters of Notre Dame. For over six decades, we have nurtured generations of young women from Patna with values-based education, academic rigour, and a deep sense of community.*
  - Button: **"Our Story →"**

---

### 4.6 Why Choose Us
Four cards with large numbers (01, 02, 03, 04):

| # | Icon | Stat | Title | Description |
|---|---|---|---|---|
| 01 | School building line icon | 95% Top Score | Bihar Board Excellence | Farahat Zabi achieved the highest listed Class X board score in 2025-26 |
| 02 | Cross line icon | 67 Years of Faith | Values-Based Education | A Catholic institution fostering moral character, discipline, and compassion |
| 03 | Students line icon | Confirm student count | All-Girls Environment | A safe, nurturing space designed for the holistic development of young women |
| 04 | Teacher line icon | Confirm teacher count | Experienced Faculty | Dedicated educators under the leadership of Sr. Mary Vidhya, SND |

---

### 4.7 Our Toppers ⭐ HIGH PRIORITY
This section closes deals with parents.

Display topper cards with photo, name, score, year:

| Photo | Name | Score | Year |
|---|---|---|---|
| /Toppers/4.jpeg | FARAHAT ZABI | 95% — Class X | 2025-26 |
| /Toppers/6.jpeg | SAKSHI KUMARI | 92.2% — Class XII | 2024-26 |
| /Toppers/5.jpeg | PRIYA BHARTI | 90.2% — Class XII | 2024-26 |
| /Toppers/3.jpg | Shaloni Kumari | 94% — Class X | 2024-25 |
| /Toppers/1.jpeg | SAKSHI KUMARI | 94.8% — Class X | 2023-24 |

Design: Dark card with gold accent border, photo circle, name bold, score in gold.

---

### 4.8 Principal's Message
- Photo: use /extra-images/principal.jpg
- Name: **Sr. Mary Vidhya, SND**
- Title: Principal, Hartmann Girls' High School
- Short quote (write something dignified):
  > *"At Hartmann, we believe education is not merely academic — it is the formation of character, conscience, and compassion. Every girl who walks through our doors carries with her the legacy of 67 years of faith and excellence."*
- Button: **"Read Full Message →"**

---

### 4.9 Facilities Grid
Six facility cards with a restrained line icon + photo:
- Science Lab
- Maths Lab
- Library
- Music Room
- Drawing Room
- Playground

Each card: facility photo (pull from their existing site), title, one-line description.

Design note: avoid six identical template cards. Use a varied editorial grid with one or two larger photographs so the section feels composed, not auto-generated.

---

### 4.10 News & Events
Latest 2-3 notices from their noticeboard:
- ADMISSION NOTICE FOR CLASS XI (2026-2027)
- ADMISSION NOTICE FOR NEW ACADEMIC SESSION 2026-2027

Style: clean card list with date, title, "Click Here →" link.

---

### 4.11 Gallery Preview
Masonry grid or 3x2 grid of school photos (pull from /Gallery/ on their site).
Button: **"View All Photos →"**

---

### 4.12 Footer
- School name + crest logo
- Address: use the verified full address and PIN
- Phone: 0612-2567131
- Email: hartmannhighschool13@gmail.com
- Quick links: About | Academics | Admissions | Gallery | Contact
- Facebook link (they have one: m.facebook.com/hartmannschool)
- Copyright: © 2026 Hartmann Girls' High School (generate the year dynamically)

---

## 5. Other Pages — Brief Notes

### About Page
- History section (est. 1959, Notre Dame Sisters, became higher secondary in 1967)
- Mission & Vision (pull from existing site, clean up language)
- Leadership section: Founder (Sr. Mary Maris), Archbishop Sebastian Kallupura, Fr. James George, Principal Sr. Mary Vidhya
- Use photos from /extra-images/

### Admissions Page
- Process steps (inquiry → form → documents → confirmation)
- Current notice: Admission open for Class XI 2026-27 and new session 2026-27
- Fee structure (if available)
- Contact form

### Results / Academics Page
- Topper photos grid (all years)
- Board affiliation info
- Promotion policy

### Facilities Page
- Full page for each facility with description + photos

### Contact Page
- Google Maps embed (already on their site)
- Address, phone, email
- Simple contact form

---

## 6. Technical Notes

- **Stack:** Next.js 15 (App Router) — keep consistent with current demo
- **Fonts:** Load via Google Fonts — Playfair Display + DM Sans
- **Images:** Use real images from hartmanngirlsschoolpatna.org (gallery, toppers, staff photos). For the pitch build, download and optimize the selected images when practical so the demo is not dependent on the old site's speed.
- **Student Portal button:** Link to existing Mindscan portal URL — don't build anything new
- **Mobile first:** Principal WILL open this on her phone. Test on 375px width.
- **Deploy:** Vercel — keep the existing vercel.app URL for demo
- **No placeholder content:** Every section must have real Hartmann data, not Lorem Ipsum
- **Content verification:** Mark any unverified statistic or contact detail in code/content data and remove it from the visible UI until confirmed.

---

## 7. What NOT to Do

- ❌ No purple gradients or generic SaaS feel
- ❌ No stock photos of random students
- ❌ No Lorem Ipsum anywhere
- ❌ No generic taglines like "Excellence in Education" (too bland)
- ❌ No emoji icons in the final UI
- ❌ No excessive rounded cards, pill-shaped labels, floating glass panels, or decorative gradients
- ❌ No wall of cards: vary the rhythm with photography, text, lists, and whitespace
- ❌ No invented claims, statistics, awards, testimonials, or principal quotes presented as factual
- ❌ Don't touch the Mindscan ERP — just link to it
- ❌ Don't over-engineer — this is a marketing site, not an app
- ❌ No animations that slow page load — keep it fast

---

## 8. Content Verification Before Launch

The existing public school site confirms the school history, current principal, facilities list, admissions notices, and listed topper results. Verify the following directly with the school before publishing:

- Full postal address and PIN code. The existing site and earlier brief use different versions.
- Student count and teacher count before displaying `2000+ Students` or `100+ Teachers`.
- Fee structure and whether it should be public.
- Exact Mindscan Student Portal URL.
- Whether the principal approves the drafted message or wants to provide her own words.
- Permission to reuse and re-host selected school photographs for the pitch and final site.

Use `95% Top Score`, not `95% pass rate`. The public site lists Farahat Zabi's Class X score as 95% for 2025-26; it does not establish an overall pass rate.

---

## 9. The Bar to Clear

Open DPS Gurugram: https://dpsgurugram.com/

That's the visual standard. Premium photography feel, confident typography, clear trust signals. We don't need to copy it — we need to match the *feeling* of institutional pride it gives.

When the principal opens our demo, she should feel: **"This is what Hartmann deserves."**

---

## 10. Delivery Checklist

- [ ] Hero section with real headline and maroon color scheme
- [ ] Stats bar with verified numbers only
- [ ] Toppers section with real photos and scores
- [ ] Principal's message with real photo
- [ ] Facilities grid with real photos
- [ ] Mobile responsive (test on 375px)
- [ ] Student Portal button linked
- [ ] Admissions notice updated (2026-27)
- [ ] No placeholder content anywhere
- [ ] No generic AI-generated visual patterns or copy
- [ ] Address, statistics, portal URL, and principal message verified
- [ ] Deployed on Vercel with shareable URL

**Target: Done by June 8th, 2026. Pitch is June 10th, 2026.**
