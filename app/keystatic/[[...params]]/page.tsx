'use client';
import { makePage } from "@keystatic/next/ui/app";
import config from "../../../keystatic.config";

const KeystaticPage = makePage(config);

export default function Page() {
  return (
    <>
      <KeystaticPage />
      {/* 홈페이지 바로가기 플로팅 버튼
          — Keystatic 저장 버튼(우하단)과 겹치지 않도록 좌하단에 배치 */}
      <a
        href="https://ik-portfolio-lime.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 9999,
          background: "#C9A84C",
          color: "#000",
          padding: "8px 14px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "12px",
          fontWeight: "700",
          boxShadow: "0 4px 16px rgba(0,0,0,0.30)",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          letterSpacing: "0.02em",
          opacity: 0.9,
        }}
      >
        🌐 홈페이지
      </a>
    </>
  );
}
