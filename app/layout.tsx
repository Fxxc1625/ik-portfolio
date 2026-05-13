import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "이인규 | Lee In-Kyu — Blues Guitarist · Visual Artist",
    template: "%s | 이인규",
  },
  description:
    "한국 대표 블루스 아티스트 이인규의 공식 포트폴리오. 이인규블루스밴드, 최항석과부기몬스터, 솔로 활동, 시각예술 작업을 소개합니다.",
  keywords: ["이인규", "블루스", "기타리스트", "IK Blues Band", "blues guitarist", "Korea blues"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "이인규 포트폴리오",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <footer className="border-t border-surface-border mt-24">
          <div className="container-lg py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white/80 font-medium text-sm">이인규 / Lee In-Kyu</p>
              <p className="text-white/40 text-xs mt-1">Blues Guitarist · Vocalist · Visual Artist</p>
            </div>
            <div className="text-center text-white/30 text-xs space-y-1.5">
              <p>
                <a href="mailto:mail@mbns.co.kr" className="hover:text-gold transition-colors">
                  mail@mbns.co.kr
                </a>
                {" · "}
                <a href="tel:01066963301" className="hover:text-gold transition-colors">
                  010-6696-3301
                </a>
              </p>
              <p>
                <a
                  href="https://www.youtube.com/@인규는음악을몰라요"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  ▶ 유튜브
                </a>
                {" · "}
                <a
                  href="https://www.instagram.com/mbns1625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  ◈ @mbns1625
                </a>
              </p>
              <p className="text-white/20">© {new Date().getFullYear()} Lee In-Kyu. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
