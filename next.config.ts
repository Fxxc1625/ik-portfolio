import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Vercel 빌드 환경인지 여부를 클라이언트 번들에 정적 주입.
  // VERCEL 환경변수는 Vercel 빌드 시 자동으로 설정되는 시스템 변수.
  // → keystatic.config.tsx 에서 NEXT_PUBLIC_IS_VERCEL 로 스토리지 모드 결정
  env: {
    NEXT_PUBLIC_IS_VERCEL: process.env.VERCEL ? "1" : "",
  },
};

export default nextConfig;
