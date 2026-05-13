import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import VideoEmbed from "@/components/VideoEmbed";
import { artist } from "@/data/artist";
import { concerts } from "@/data/concerts";

export const metadata: Metadata = {
  title: "솔로 활동",
  description: "이인규 솔로 아티스트 포트폴리오 — 아티스트 바이오, 수상, 공연 이력, 미디어",
};

const soloConcerts = concerts.filter((c) => c.featuredPersonal);

// 솔로 활동 사진 — public/images/solo/ 에 파일 추가 후 src 수정
const galleryImages = [
  { src: "/images/placeholder.svg", alt: "이인규 솔로 어쿠스틱", caption: "솔로 어쿠스틱 세트" },
  { src: "/images/placeholder.svg", alt: "미국 블루스시티카페 준결승", caption: "Blues City Cafe, Memphis" },
  { src: "/images/placeholder.svg", alt: "이인규 일렉 독사진", caption: "" },
  { src: "/images/placeholder.svg", alt: "제주 공연", caption: "제주" },
];

// 유튜브 영상 — URL을 교체하세요
const videos: { url: string; title: string }[] = [
  // { url: "https://youtu.be/VIDEO_ID", title: "귀향 Live" },
];

const YOUTUBE_URL = "https://www.youtube.com/@인규는음악을몰라요";
const INSTAGRAM_URL = "https://www.instagram.com/mbns1625";

// 솔로 활동만의 고유 역할/이력
const soloRoles = [
  {
    org: "한국블루스소사이어티",
    role: "뮤지션 대표",
    period: "2025~현재",
    desc: "한국 블루스 씬의 뮤지션 대표로 활동",
  },
  {
    org: "광주MBC 정오의희망곡",
    role: "고정 출연",
    period: "4년 이상",
    desc: "라디오 고정 게스트 — 현재 진행 중",
  },
  {
    org: "마인드바디앤소울 (Mind Body & Soul)",
    role: "데뷔 프로젝트",
    period: "2019",
    desc: "솔로 데뷔 싱글 발매",
  },
];

export default function SoloPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-black to-black pointer-events-none" />
        <div className="container-lg relative z-10">
          <p className="text-gold text-xs tracking-[0.4em] font-medium mb-4">SOLO ARTIST</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">{artist.nameKo}</h1>
          <p className="text-white/50 text-xl tracking-wider mb-1">{artist.nameEn}</p>
          <p className="text-white/30 text-base tracking-wide">{artist.titleEn}</p>
          <div className="flex gap-3 mt-8 flex-wrap">
            <span className="tag-gold">IBC 2023 준결승 진출</span>
            <span className="tag">연간 100~200회 공연</span>
            <span className="tag">광주MBC 라디오 고정</span>
            <span className="tag">한국블루스소사이어티 대표</span>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="gold-line" />
              <h2 className="section-title">Artist Bio</h2>
              <div className="text-white/70 text-sm leading-loose space-y-4 mt-6">
                {artist.bioKo.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-6 pt-6 border-t border-surface-border">
                <p className="text-white/35 text-xs leading-loose italic">
                  {artist.bioEn.split("\n\n")[0]}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm text-white/40 tracking-widest mb-6">HIGHLIGHTS</h3>
              <div className="space-y-3">
                {artist.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0 text-xs">◆</span>
                    <p className="text-white/70 text-sm leading-snug">{h}</p>
                  </div>
                ))}
              </div>
              {/* 소셜 */}
              <div className="mt-8 flex gap-3">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm transition-colors"
                >
                  ▶ 유튜브
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 text-sm transition-colors"
                >
                  ◈ @mbns1625
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 수상 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">수상 및 주요 실적</h2>
          <p className="section-subtitle">Awards & Achievements</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artist.awards.map((a, i) => (
              <div key={i} className="card p-8">
                <p className="text-gold text-4xl font-bold mb-4">{a.year}</p>
                <p className="text-white font-semibold text-lg mb-2">{a.title}</p>
                <p className="text-white/40 text-sm">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 솔로 활동 이력 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">솔로 활동</h2>
          <p className="section-subtitle">Individual Projects & Roles</p>
          <div className="space-y-4">
            {soloRoles.map((r, i) => (
              <div key={i} className="card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{r.org}</p>
                  <p className="text-gold text-sm mt-0.5">{r.role}</p>
                  <p className="text-white/50 text-xs mt-1">{r.desc}</p>
                </div>
                <span className="tag whitespace-nowrap self-start sm:self-auto">{r.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 공연 이력 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">공연 이력</h2>
          <p className="section-subtitle">Performance History</p>
          <div className="card divide-y divide-surface-border">
            {soloConcerts.map((c) => (
              <div key={c.id} className="concert-row px-6">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white font-medium text-sm">{c.venue}</span>
                    {c.category === "해외" && (
                      <span className="tag-gold text-xs">해외</span>
                    )}
                  </div>
                  <p className="text-white/40 text-xs mt-0.5">{c.location}</p>
                  {c.note && <p className="text-white/30 text-xs mt-0.5">{c.note}</p>}
                </div>
                <div className="flex items-center gap-3">
                  <span className="tag">{c.genre}</span>
                  <span className="text-white/50 text-sm whitespace-nowrap">{c.dateDisplay}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 영상 ── */}
      {videos.length > 0 && (
        <section className="section bg-black">
          <div className="container-lg">
            <div className="gold-line" />
            <h2 className="section-title">영상</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((v, i) => (
                <VideoEmbed key={i} url={v.url} title={v.title} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 갤러리 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">갤러리</h2>
          <Gallery images={galleryImages} layout="masonry" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-black text-center">
        <div className="container-lg">
          <p className="text-white/50 text-sm mb-6">솔로 공연 섭외 및 문의</p>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            섭외 문의 & EPK 다운로드 →
          </Link>
        </div>
      </section>
    </>
  );
}
