"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: GalleryImage[];
  layout?: "masonry" | "grid" | "filmstrip";
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function Gallery({
  images,
  layout = "grid",
  columns = 3,
  className = "",
}: GalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIdx(i), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-white/30 text-sm border border-surface-border rounded-lg">
        이미지 준비 중입니다.
      </div>
    );
  }

  const colClass: Record<number, string> = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <>
      {layout === "masonry" ? (
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-3 ${className}`}
          style={{ columnGap: "12px" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width ?? 600}
                height={img.height ?? 400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : layout === "filmstrip" ? (
        <div className={`flex gap-3 overflow-x-auto pb-2 scrollbar-hide ${className}`}>
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={`grid ${colClass[columns]} gap-3 ${className}`}>
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[3/2] overflow-hidden rounded-lg cursor-pointer group relative bg-surface"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 라이트박스 */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* 닫기 */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10"
            onClick={closeLightbox}
          >
            ×
          </button>
          {/* 이전 */}
          {images.length > 1 && (
            <button
              className="absolute left-4 text-white/70 hover:text-white text-3xl z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              ‹
            </button>
          )}
          {/* 이미지 */}
          <div
            className="relative max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt}
              width={images[lightboxIdx].width ?? 1200}
              height={images[lightboxIdx].height ?? 800}
              className="max-h-[85vh] w-auto object-contain rounded-lg"
            />
            {images[lightboxIdx].caption && (
              <p className="text-center text-white/60 text-sm mt-3">
                {images[lightboxIdx].caption}
              </p>
            )}
            <p className="text-center text-white/30 text-xs mt-1">
              {lightboxIdx + 1} / {images.length}
            </p>
          </div>
          {/* 다음 */}
          {images.length > 1 && (
            <button
              className="absolute right-4 text-white/70 hover:text-white text-3xl z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
