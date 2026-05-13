import Link from "next/link";
import { getReader } from "@/lib/content";

const activityCards = [
  {
    href: "/music/ik-blues-band",
    tag: "MUSIC",
    title: "이인규블루스밴드",
    titleEn: "IK Blues Band",
    desc: "리더 / 보컬 & 기타 · 2019년~",
    accent: "border-blue-500/30 hover:border-blue-400/60",
    tagColor: "text-blue-400",
    icon: "🎸",
  },
  {
    href: "/music/boogie-monster",
    tag: "MUSIC",
    title: "최항석과부기몬스터",
    titleEn: "Choi Hang-Seok & Boogie Monster",
    desc: "기타리스트",
    accent: "border-purple-500/30 hover:border-purple-400/60",
    tagColor: "text-purple-400",
    icon: "🎵",
  },
  {
    href: "/music/solo",
    tag: "MUSIC",
    title: "솔로 활동",
    titleEn: "Solo Project",
    desc: "2019년 데뷔 · 정규 1집 발매",
    accent: "border-gold/30 hover:border-gold/60",
    tagColor: "text-gold",
    icon: "🎙",
  },
  {
    href: "/visual-arts",
    tag: "VISUAL ARTS",
    title: "시각예술",
    titleEn: "Photography & Film",
    desc: "사진 · 영상 작업",
    accent: "border-emerald-500/30 hover:border-emerald-400/60",
    tagColor: "text-emerald-400",
    icon: "📷",
  },
];

export default async function HomePage() {
  const reader = getReader();
  const artist = await reader.singletons.artist.read();
  const concertSlugs = await reader.collections.concerts.list();

  // 공연 이력 전체 로드 후 featured 필터
  const allConcerts = await Promise.all(
    concertSlugs.map((slug) => reader.collections.concerts.read(slug))
  );
  const featuredConcerts = allConcerts
    .filter((c) => c?.featuredPersonal)
    .slice(0, 5);

  if (!artist) return null;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gold/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="container-lg relative z-10 py-24">
          <p className="text-gold text-xs tracking-[0.4em] font-medium mb-6 animate-fade-up">
            OFFICIAL PORTFOLIO
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 animate-fade-up animate-fade-up-d1">
            {artist.nameKo}
          </h1>
          <p className="text-white/50 text-lg md:text-xl tracking-widest mb-2 animate-fade-up animate-fade-up-d2">
            {artist.nameEn}
          </p>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-xl leading-relaxed animate-fade-up animate-fade-up-d2">
            {artist.titleKo}
          </p>
          <div className="flex flex-wrap gap-2 mt-8 animate-fade-up animate-fade-up-d3">
            {artist.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="tag-gold text-xs">{h}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-10 animate-fade-up animate-fade-up-d4">
            <Link href="/music/ik-blues-band" className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3 rounded-lg transition-colors text-sm tracking-wide">
              포트폴리오 보기
            </Link>
            <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white/70 hover:text-white px-6 py-3 rounded-lg transition-colors text-sm tracking-wide">
              섭외 문의 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4대 활동 영역 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">활동 영역</h2>
          <p className="section-subtitle">4개의 독립적인 아티스트 프로젝트</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activityCards.map((card) => (
              <Link key={card.href} href={card.href} className={`card border-2 p-6 transition-all duration-300 group ${card.accent}`}>
                <div className="text-3xl mb-4">{card.icon}</div>
                <p className={`text-xs tracking-widest font-medium mb-2 ${card.tagColor}`}>{card.tag}</p>
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors leading-tight">{card.title}</h3>
                <p className="text-white/40 text-xs mb-3">{card.titleEn}</p>
                <p className="text-white/60 text-sm">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 아티스트 소개 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="gold-line" />
              <h2 className="section-title">About</h2>
              <div className="text-white/70 text-sm leading-loose space-y-4 mt-6">
                {artist.bioKo.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm text-white/40 tracking-widest mb-4">HIGHLIGHTS</h3>
              {artist.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 flex-shrink-0">◆</span>
                  <p className="text-white/70 text-sm leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 주요 공연 이력 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">주요 공연 이력</h2>
          <p className="section-subtitle">연간 100~200회 라이브 공연</p>
          <div className="card divide-y divide-surface-border">
            {featuredConcerts.map((c, i) =>
              c ? (
                <div key={i} className="concert-row px-6">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm">{c.venue}</span>
                      {c.category === "해외" && <span className="tag-gold">해외</span>}
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">{c.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="tag">{c.genre}</span>
                    <span className="text-white/50 text-sm">{c.dateDisplay}</span>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="text-center mt-8">
            <Link href="/music/ik-blues-band" className="text-gold hover:text-gold-light text-sm transition-colors">
              전체 공연 이력 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 수상 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">수상 및 주요 실적</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {artist.awards.map((a, i) => (
              <div key={i} className="card p-6">
                <p className="text-gold text-3xl font-bold mb-3">{a.year}</p>
                <p className="text-white font-semibold text-base mb-1">{a.title}</p>
                <p className="text-white/40 text-sm">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-black text-center">
        <div className="container-lg max-w-xl mx-auto">
          <p className="text-gold text-xs tracking-widest mb-4">BOOKING & INQUIRY</p>
          <h2 className="text-3xl font-bold mb-4">공연 섭외 문의</h2>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            페스티벌, 행사, 라이브 클럽, 콜라보레이션 제안 등<br />모든 문의를 환영합니다.
          </p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm tracking-wide">
            문의 페이지로 이동 →
          </Link>
        </div>
      </section>
    </>
  );
}
