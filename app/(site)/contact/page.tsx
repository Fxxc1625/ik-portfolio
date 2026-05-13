import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { artist } from "@/data/artist";

export const metadata: Metadata = {
  title: "Contact & EPK",
  description: "이인규 섭외 문의 및 EPK(Electronic Press Kit) 다운로드",
};

const epkItems = [
  {
    label: "이인규블루스밴드 EPK (한국어)",
    desc: "밴드 소개, 셋리스트, 기술 라이더 포함",
    file: "/epk/ik-blues-band-epk-ko.pdf",
    available: false,
  },
  {
    label: "이인규 개인 포트폴리오 (한국어)",
    desc: "솔로 바이오, 음반, 수상 이력",
    file: "/epk/solo-portfolio-ko.pdf",
    available: false,
  },
  {
    label: "IK Blues Band EPK (English)",
    desc: "Band bio, setlist, tech rider",
    file: "/epk/ik-blues-band-epk-en.pdf",
    available: false,
  },
];

const contactInfo = [
  { label: "이메일", value: artist.contact.email, href: `mailto:${artist.contact.email}` },
  { label: "전화", value: artist.contact.tel, href: `tel:${artist.contact.tel.replace(/-/g, "")}` },
  { label: "인스타그램", value: artist.contact.instagram, href: `https://instagram.com/${artist.contact.instagram.replace("@", "")}` },
  { label: "유튜브", value: artist.contact.youtube, href: `https://www.youtube.com/@${encodeURIComponent(artist.contact.youtube)}` },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="container-lg">
          <p className="text-gold text-xs tracking-[0.4em] font-medium mb-4">CONTACT & EPK</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">문의하기</h1>
          <p className="text-white/50 text-base max-w-lg leading-loose">
            공연 섭외, 페스티벌 참가 제안, 콜라보레이션, 언론 문의 등<br />
            모든 문의를 환영합니다.
          </p>
        </div>
      </section>

      {/* ── 문의 폼 + 연락처 ── */}
      <section className="section bg-black">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 왼쪽: 폼 */}
            <div className="lg:col-span-2">
              <div className="gold-line" />
              <h2 className="section-title mb-8">문의 폼</h2>
              <ContactForm />
            </div>

            {/* 오른쪽: 연락처 */}
            <div>
              <h3 className="text-sm text-white/40 tracking-widest mb-6">CONTACT INFO</h3>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="card p-4">
                    <p className="text-white/40 text-xs mb-1">{c.label}</p>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white hover:text-gold transition-colors text-sm font-medium"
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* 활동 프로젝트 */}
              <div className="mt-8">
                <h3 className="text-sm text-white/40 tracking-widest mb-4">PROJECTS</h3>
                <div className="space-y-2 text-sm text-white/60">
                  <p>🎸 이인규블루스밴드</p>
                  <p>🎵 최항석과부기몬스터</p>
                  <p>🎙 솔로 활동</p>
                  <p>📷 시각예술 (사진/영상)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EPK 다운로드 ── */}
      <section className="section bg-surface/30">
        <div className="container-lg">
          <div className="gold-line" />
          <h2 className="section-title">EPK 다운로드</h2>
          <p className="section-subtitle">Electronic Press Kit — 섭외 담당자용 자료</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {epkItems.map((item, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-2xl">📄</p>
                  {!item.available && (
                    <span className="tag text-xs">준비 중</span>
                  )}
                </div>
                <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                <p className="text-white/40 text-xs mb-4 leading-snug">{item.desc}</p>
                {item.available ? (
                  <a
                    href={item.file}
                    download
                    className="inline-block w-full text-center bg-gold hover:bg-gold-light text-black text-xs font-semibold py-2 rounded-lg transition-colors"
                  >
                    다운로드 ↓
                  </a>
                ) : (
                  <p className="text-white/20 text-xs text-center py-2">
                    곧 업로드 예정입니다
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 card p-6 text-sm text-white/50 leading-loose">
            <p className="font-medium text-white/70 mb-2">📌 EPK 준비 방법</p>
            <p>
              PDF 파일을 <code className="text-white/40 text-xs">public/epk/</code> 폴더에 추가하고,{" "}
              <code className="text-white/40 text-xs">app/contact/page.tsx</code>의{" "}
              <code className="text-white/40 text-xs">epkItems</code> 배열에서{" "}
              <code className="text-white/40 text-xs">available: true</code>로 변경하면 다운로드 버튼이 활성화됩니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
