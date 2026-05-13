"use client";

import { useState } from "react";
import Gallery, { type GalleryImage } from "@/components/Gallery";

export interface CategorizedPhoto extends GalleryImage {
  category: "portrait" | "performance" | "landscape";
}

const CATEGORY_LABELS: Record<string, string> = {
  all: "전체",
  portrait: "인물사진",
  performance: "공연사진",
  landscape: "풍경스냅",
};

interface CategoryGalleryProps {
  photos: CategorizedPhoto[];
}

export default function CategoryGallery({ photos }: CategoryGalleryProps) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? photos : photos.filter((p) => p.category === active);

  // 카테고리별 사진 수
  const counts = {
    all: photos.length,
    portrait: photos.filter((p) => p.category === "portrait").length,
    performance: photos.filter((p) => p.category === "performance").length,
    landscape: photos.filter((p) => p.category === "landscape").length,
  };

  return (
    <div>
      {/* 카테고리 탭 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
              active === key
                ? "bg-gold text-black font-semibold"
                : "border border-surface-border text-white/50 hover:text-white hover:border-white/30"
            }`}
          >
            {label}
            <span
              className={`ml-1.5 text-xs ${
                active === key ? "text-black/60" : "text-white/25"
              }`}
            >
              {counts[key as keyof typeof counts]}
            </span>
          </button>
        ))}
      </div>

      {/* 갤러리 */}
      {filtered.length > 0 ? (
        <Gallery images={filtered} layout="masonry" />
      ) : (
        <div className="card p-12 text-center text-white/30">
          <p className="text-sm">이 카테고리에 사진이 없습니다.</p>
          <p className="text-xs mt-2">
            <code>app/visual-arts/page.tsx</code>의 <code>allPhotos</code> 배열에서
            category를 지정해 사진을 추가하세요.
          </p>
        </div>
      )}
    </div>
  );
}
