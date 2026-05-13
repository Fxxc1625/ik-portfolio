"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "booking",
    project: "all",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 서비스 연동 시 여기에 API 호출 추가
    const mailtoBody = encodeURIComponent(
      `이름: ${form.name}\n이메일: ${form.email}\n문의 목적: ${form.purpose}\n관련 프로젝트: ${form.project}\n\n${form.message}`
    );
    window.location.href = `mailto:mail@mbns.co.kr?subject=[포트폴리오 문의] ${form.name}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✉️</div>
        <p className="text-white text-lg font-medium mb-2">메일 앱이 열렸습니다</p>
        <p className="text-white/50 text-sm mb-6">
          메일이 정상적으로 전송되지 않았다면 아래 이메일로 직접 연락해 주세요.
        </p>
        <a
          href="mailto:mail@mbns.co.kr"
          className="text-gold hover:underline text-sm"
        >
          mail@mbns.co.kr
        </a>
        <br />
        <button
          className="mt-6 text-white/40 text-sm hover:text-white/70 underline"
          onClick={() => setSubmitted(false)}
        >
          다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-1.5">이름 / Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-1.5">이메일 / Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-white/60 mb-1.5">문의 목적</label>
          <select
            value={form.purpose}
            onChange={(e) => setForm({ ...form, purpose: e.target.value })}
            className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
          >
            <option value="booking">공연 섭외</option>
            <option value="festival">페스티벌 참가 제안</option>
            <option value="collaboration">콜라보레이션</option>
            <option value="press">언론/미디어</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-1.5">관련 프로젝트</label>
          <select
            value={form.project}
            onChange={(e) => setForm({ ...form, project: e.target.value })}
            className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
          >
            <option value="all">전체 / 상관없음</option>
            <option value="ik-blues-band">이인규블루스밴드</option>
            <option value="boogie-monster">최항석과부기몬스터</option>
            <option value="solo">솔로</option>
            <option value="visual-arts">시각예술 (사진/영상)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-1.5">메시지 *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
          placeholder="공연 날짜, 장소, 규모, 요청 사항 등을 알려주세요."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 rounded-lg transition-colors text-sm tracking-wide"
      >
        문의 보내기 →
      </button>
    </form>
  );
}
