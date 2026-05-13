'use client';
import { makePage } from "@keystatic/next/ui/app";
import config from "../../../keystatic.config";

const KeystaticPage = makePage(config);

export default function Page() {
  return (
    <>
      <KeystaticPage />
      {/* 홈페이지 바로가기 플로팅 버튼 */}
      <a
        href="https://ik-portfolio-lime.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          background: "#C9A84C",
          color: "#000",
          padding: "10px 18px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "13px",
          fontWeight: "700",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          letterSpacing: "0.02em",
        }}
      >
        🌐 홈페이지 바로가기
      </a>
    </>
  );
}
