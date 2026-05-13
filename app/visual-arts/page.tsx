import type { Metadata } from "next";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";
import CategoryGallery, { type CategorizedPhoto } from "@/components/CategoryGallery";

export const metadata: Metadata = {
  title: "Visual Arts",
  description: "이인규의 사진 및 영상 작업 포트폴리오 — 인물사진, 공연사진, 풍경스냅",
};

// ── 사진 데이터 ──────────────────────────────────────────────────────────────
// category: "portrait" (인물사진) | "performance" (공연사진) | "landscape" (풍경스냅)
// src: public/images/visual-arts/ 에 파일을 추가하고 경로를 입력하세요.
// 예) src: "/images/visual-arts/photo01.jpg"
const allPhotos: CategorizedPhoto[] = [
  // 인물사진
  { src: "/images/placeholder.svg", alt: "이인규 포트레이트", caption: "", category: "portrait" },
  { src: "/images/placeholder.svg", alt: "이인규 일렉 독사진", caption: "", category: "portrait" },
  { src: "/images/placeholder.svg", alt: "아티스트 프로필", caption: "", category: "portrait" },
  // 공연사진
  { src: "/images/placeholder.svg", alt: "라이브클럽 천년동안도 공연", caption: "천년동안도 강남", category: "performance" },
  { src: "/images/placeholder.svg", alt: "서울블루스페스티벌", caption: "서울블루스페스티벌", category: "performance" },
  { src: "/images/placeholder.svg", alt: "미국 버디가이레전드 클럽 공연", caption: "Buddy Guy's Legends, Chicago", category: "performance" },
  { src: "/images/placeholder.svg", alt: "대구 시카고 라이브홀", caption: "대구 시카고 라이브홀", category: "performance" },
  { src: "/images/placeholder.svg", alt: "전주 송천다복음악회", caption: "전주 송천다복음악회", category: "performance" },
  { src: "/images/placeholder.svg", alt: "Blues Alive 2026", caption: "Blues Alive 2026", category: "performance" },
  // 풍경스냅
  { src: "/images/placeholder.svg", alt: "풍경 스냅 1", caption: "", category: "landscape" },
  { src: "/images/placeholder.svg", alt: "풍경 스냅 2", caption: "", category: "landscape" },
  { src: "/images/placeholder.svg", alt: "풍경 스냅 3", caption: "", category: "landscape" },
];

// ── 영상 데이터 — YouTube/Vimeo URL을 추가하세요 ───────────────────────────
const videos: { url: string; title: string; desc?: string }[] = [
  // { url: "https://youtu.be/...", title: "작품명", desc: "설명" },
];

const YOUTUBE_URL = "https://www.youtube.com/@인규는음악을몰라요";
const INSTAGRAM_URL = "https://www.instagram.com/mbns1625";

export default function VisualArtsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-black to-black pointer-events-none" />
        <div className="container-lg relative z-10">
          <p className="text-emerald-400 text-xs tracking-[0.4em] font-medium mb-4">VISUAL ARTS</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">사진 & 영상</h1>
          <p className="text-white/40 text-lg tracking-wider">Photography & Filmmaking</p>
          <p className="text-white/60 text-sm mt-6 max-w-lg leading-loose">
            음악 무대 밖에서 이인규는 카메라를 통해 또 다른 예술적 시선을 기록합니다.
            라이브 현장의 에너지, 일상의 정경, 블루스가 흐르는 공간들.
          </p>
          {/* 소셜 링크 */}
          <div className="flex gap-3 mt-8">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-red-500/40 hover:border-red-400 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <span>▶</span> 유튜브
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-pink-500/40 hover:border-pink-400 text-pink-400 hover:text-pink-300 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <span>◈</span> 인스타그램
            </a>
          </div>
        </div>
      </section>

      {/* ── 카테고리 갤러리 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">사진 포트폴리오</h2>
          <p className="text-white/40 text-xs mb-8">
            사진 파일을 <code className="text-white/25">public/images/visual-arts/</code>에 추가한 뒤
            이 페이지의 <code className="text-white/25">allPhotos</code> 배열에 경로를 입력하세요.
          </p>
          <CategoryGallery photos={allPhotos} />
        </div>
      </section>

      {/* ── 영상 작업 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">영상 작업</h2>
          <p className="section-subtitle">Video Works</p>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((v, i) => (
                <div key={i}>
                  <VideoEmbed url={v.url} title={v.title} />
                  <p className="text-white/80 text-sm font-medium mt-3">{v.title}</p>
                  {v.desc && <p className="text-white/40 text-xs mt-1">{v.desc}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="card p-12 text-center text-white/30">
              <p className="text-4xl mb-4">🎬</p>
              <p className="text-sm">영상 작업물을 준비 중입니다.</p>
              <p className="text-xs mt-2">
                <code>app/visual-arts/page.tsx</code>의 <code>videos</code> 배열에 YouTube URL을 추가하세요.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── 소셜 채널 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">소셜 채널</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {/* YouTube */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 border-2 border-red-900/30 hover:border-red-500/50 transition-all group"
            >
              <span className="text-red-500 text-3xl flex-shrink-0">▶</span>
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors">
                  인규는음악을몰라요
                </p>
                <p className="text-white/40 text-xs mt-0.5">YouTube 채널</p>
              </div>
            </a>
            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 border-2 border-pink-900/30 hover:border-pink-500/50 transition-all group"
            >
              <span className="text-pink-500 text-3xl flex-shrink-0">◈</span>
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-pink-400 transition-colors">
                  @mbns1625
                </p>
                <p className="text-white/40 text-xs mt-0.5">Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-surface/30 text-center">
        <div className="container-lg">
          <p className="text-white/50 text-sm mb-4">작업 의뢰 및 문의</p>
          <Link href="/contact" className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded-lg transition-colors text-sm">
            Contact →
          </Link>
        </div>
      </section>
    </>
  );
}
