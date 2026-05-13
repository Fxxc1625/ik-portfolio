import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { getReader } from "@/lib/content";

export const metadata: Metadata = {
  title: "이인규블루스밴드",
  description: "이인규블루스밴드 공식 포트폴리오 — 소개, 음반, 공연 이력, 갤러리",
};

const galleryImages = [
  { src: "/images/placeholder.svg", alt: "라이브클럽 천년동안도 공연", caption: "라이브클럽 천년동안도" },
  { src: "/images/placeholder.svg", alt: "서울블루스페스티벌", caption: "서울블루스페스티벌" },
  { src: "/images/placeholder.svg", alt: "미국 버디가이레전드 클럽 공연", caption: "Buddy Guy's Legends, Chicago" },
  { src: "/images/placeholder.svg", alt: "대구 시카고 라이브홀", caption: "대구 시카고 라이브홀" },
  { src: "/images/placeholder.svg", alt: "전주 송천다복음악회", caption: "전주 송천다복음악회" },
  { src: "/images/placeholder.svg", alt: "Blues Alive 2026", caption: "Blues Alive 2026" },
];

export default async function IKBluesBandPage() {
  const reader = getReader();
  const [artist, ikBand, setlist, concertSlugs] = await Promise.all([
    reader.singletons.artist.read(),
    reader.singletons.ikBand.read(),
    reader.singletons.setlist.read(),
    reader.collections.concerts.list(),
  ]);
  const allConcerts = await Promise.all(concertSlugs.map(s => reader.collections.concerts.read(s)));
  const bandConcerts = allConcerts.filter(c => c?.featuredBand);

  if (!artist || !ikBand || !setlist) return null;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black pointer-events-none" />
        <div className="container-lg relative z-10">
          <p className="text-blue-400 text-xs tracking-[0.4em] font-medium mb-4">MUSIC PROJECT 01</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">이인규블루스밴드</h1>
          <p className="text-white/40 text-lg tracking-wider">IK Blues Band · {ikBand.since}년~</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <span className="tag-gold">보컬 & 기타 / Leader</span>
            <span className="tag">정규 1집 발매</span>
            <span className="tag">IBC 2023 준결승</span>
          </div>
        </div>
      </section>

      {/* ── 소개 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="gold-line" />
              <h2 className="section-title">About</h2>
              <p className="text-white/70 text-sm leading-loose mt-6">{ikBand.descKo}</p>
              <p className="text-white/40 text-sm leading-loose mt-4 italic">{ikBand.descEn}</p>
            </div>
            <div>
              <h3 className="text-sm text-white/40 tracking-widest mb-6">ARTIST</h3>
              <div className="card p-6">
                <p className="text-white font-bold text-lg">{artist.nameKo}</p>
                <p className="text-white/50 text-sm mt-0.5">{artist.nameEn}</p>
                <p className="text-gold text-sm mt-3">보컬 & 기타 · Leader</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">{artist.bioKo.split("\n\n")[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 음반 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">음반</h2>
          <p className="section-subtitle">Discography</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ikBand.discography.map((album) => (
              <div key={album.title} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gold text-sm font-medium">{album.type}</p>
                    <h3 className="text-white text-xl font-bold mt-1">{album.title}</h3>
                    <p className="text-white/40 text-sm">{album.year}</p>
                  </div>
                  <span className="tag">{album.tracks.length}곡</span>
                </div>
                <p className="text-white/60 text-sm mb-4">{album.descKo}</p>
                <div className="border-t border-surface-border pt-4">
                  <p className="text-white/30 text-xs mb-2 tracking-wider">TRACKLIST</p>
                  <div className="space-y-1">
                    {album.tracks.map((t, i) => (
                      <p key={i} className="text-white/60 text-sm">
                        <span className="text-white/20 mr-2 text-xs">{String(i + 1).padStart(2, "0")}</span>
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 셋리스트 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">셋리스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm text-white/40 tracking-widest mb-4">ORIGINAL SONGS</h3>
              <div className="space-y-2">
                {setlist.originalSongs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-surface-border/50 last:border-0">
                    <div className="flex items-center gap-2">
                      {s.isTitle && <span className="text-gold text-xs">★</span>}
                      <span className="text-white/80 text-sm">{s.title}</span>
                    </div>
                    <span className="text-white/30 text-xs">{s.album}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-white/40 tracking-widest mb-4">COVER SONGS</h3>
              <div className="space-y-2">
                {setlist.coverSongs.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-surface-border/50 last:border-0">
                    <span className="text-white/80 text-sm">{s.title}</span>
                    <span className="text-white/30 text-xs">{s.artist}</span>
                  </div>
                ))}
              </div>
            </div>
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
            {bandConcerts.map((c, i) =>
              c ? (
                <div key={i} className="concert-row px-6">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm">{c.venue}</span>
                      {c.category === "해외" && <span className="tag-gold text-xs">해외</span>}
                      {c.note && <span className="text-white/30 text-xs hidden md:inline">— {c.note}</span>}
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">{c.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="tag">{c.genre}</span>
                    <span className="text-white/50 text-sm whitespace-nowrap">{c.dateDisplay}</span>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* ── 갤러리 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">갤러리</h2>
          <Gallery images={galleryImages} layout="masonry" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-surface/30 text-center">
        <div className="container-lg">
          <p className="text-white/50 text-sm mb-4">섭외 및 공연 문의</p>
          <Link href="/contact" className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded-lg transition-colors text-sm">
            Contact & EPK →
          </Link>
        </div>
      </section>
    </>
  );
}
