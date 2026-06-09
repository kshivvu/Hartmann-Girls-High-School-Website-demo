"use client";

import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";
import { Reveal } from "./Reveal";

const categories = ["All", "Campus", "Events", "Celebrations", "Activities", "Toppers"];

const galleryItems = [
  { src: "/images/gallery/assembly.jpg", category: "Campus", title: "Morning Assembly" },
  { src: "/images/gallery/event-1.jpg", category: "Events", title: "Sports Day Event" },
  { src: "/images/gallery/event-2.jpg", category: "Celebrations", title: "Independence Day Celebration" },
  { src: "/images/gallery/event-3.jpg", category: "Activities", title: "Science Exhibition Activity" },
  { src: "/images/gallery/event-4.jpg", category: "Events", title: "Annual Day Function" },
  { src: "/images/gallery/event-5.jpg", category: "Celebrations", title: "Teachers Day Celebration" },
  { src: "/images/gallery/event-6.jpg", category: "Activities", title: "Debate Competition" },
  { src: "/images/gallery/event-7.jpg", category: "Campus", title: "Main Campus Building" },
  { src: "/images/toppers/farahat.jpeg", category: "Toppers", title: "Farahat Zabi - 95% Class X" },
  { src: "/images/toppers/sakshi-xii.jpeg", category: "Toppers", title: "Sakshi Kumari - 92.2% Class XII" },
  { src: "/images/toppers/priya.jpeg", category: "Toppers", title: "Priya Bharti - 90.2% Class XII" },
  { src: "/images/toppers/shaloni.jpg", category: "Toppers", title: "Shaloni Kumari - 94% Class X" },
  { src: "/images/toppers/sakshi-x.jpeg", category: "Toppers", title: "Sakshi Kumari - 94.8% Class X" },
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const imagesList = filteredItems.map(item => item.src);

  return (
    <>
      {/* Category Tabs Section */}
      <section className="gallery-tabs-section">
        <div className="shell">
          <div className="gallery-tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`gallery-tab-btn ${selectedCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Display Section */}
      <section className="gallery-grid-section section shell" key={selectedCategory}>
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-muted">
            No items found in this category.
          </div>
        ) : (
          <div className="gallery-fade-in">
            <GalleryLightbox images={imagesList} />
          </div>
        )}
      </section>
    </>
  );
}
