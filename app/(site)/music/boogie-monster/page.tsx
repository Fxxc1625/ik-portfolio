import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { boogieMonster, artist } from "@/data/artist";
import { concerts } from "@/data/concerts";

export const metadata: Metadata = {
  title: "최항석과부기몬스터",
  description: "최항석과부기몬스터 — 이인규 기타리스트 활동 소개",
};

const galleryImages = [
  { src: "/images/placeholder.svg", alt: "최항석과부기몬스터 공연", caption: "공연" },
  { src: "/images/placeholder.svg", alt: "공연 사진 2", caption: "" },
  { src: "/images/placeholder.svg", alt: "공연 사진 3", caption: "" },
];

export default function BoogieMonsterPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-black pointer-events-none" />
        <div className="container-lg relative z-10">
          <p className="text-purple-400 text-xs tracking-[0.4em] font-medium mb-4">MUSIC PROJECT 02</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">최항석과부기몬스터</h1>
          <p className="text-white/40 text-lg tracking-wider">Choi Hang-Seok &amp; Boogie Monster</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <span className="tag-gold">기타리스트</span>
            <span className="tag">블루스 / R&amp;B</span>
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
              <p className="text-white/70 text-sm leading-loose mt-6">{boogieMonster.descKo}</p>
              <p className="text-white/40 text-sm leading-loose mt-4 italic">{boogieMonster.descEn}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm text-white/40 tracking-widest mb-6">MEMBER (이인규)</h3>
              <div className="card p-6">
                <p className="text-white font-bold text-lg">{artist.nameKo}</p>
                <p className="text-white/50 text-sm mt-0.5">{artist.nameEn}</p>
                <p className="text-purple-400 text-sm mt-3">기타리스트</p>
                <p className="text-white/50 text-xs mt-4 leading-relaxed">
                  이인규블루스밴드 리더로서 쌓은 깊은 블루스 연주 경험을 최항석과부기몬스터에서도 발휘하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 갤러리 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">갤러리</h2>
          <Gallery images={galleryImages} layout="grid" columns={3} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 text-center">
        <div className="container-lg">
          <p className="text-white/50 text-sm mb-4">이인규 전체 활동 보기</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/music/ik-blues-band" className="border border-surface-border hover:border-gold/40 text-white/60 hover:text-gold px-6 py-2.5 rounded-lg transition-colors text-sm">
              이인규블루스밴드 →
            </Link>
            <Link href="/contact" className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
              섭외 문의 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
