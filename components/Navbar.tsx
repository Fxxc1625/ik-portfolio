"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Music",
    href: "/music",
    children: [
      { label: "이인규블루스밴드", href: "/music/ik-blues-band" },
      { label: "최항석과부기몬스터", href: "/music/boogie-monster" },
      { label: "솔로 활동", href: "/music/solo" },
    ],
  },
  { label: "Visual Arts", href: "/visual-arts" },
  { label: "Contact & EPK", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-surface-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-gold font-serif text-lg tracking-widest font-bold">
            IK
          </span>
          <span className="text-white/70 text-sm tracking-wider group-hover:text-white transition-colors">
            LEE IN-KYU
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <button
                  className={`px-4 py-2 text-sm tracking-wide rounded transition-colors ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="ml-1 text-xs opacity-50">▾</span>
                </button>
                {/* 드롭다운 */}
                <ul className="absolute top-full left-0 mt-1 w-48 bg-surface rounded-lg border border-surface-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === child.href
                            ? "text-gold bg-gold/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm tracking-wide rounded transition-colors ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-surface-border px-4 py-2 pb-4">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full text-left px-2 py-3 text-white/60 text-sm flex justify-between items-center"
                  onClick={() => setMusicOpen(!musicOpen)}
                >
                  {item.label}
                  <span className={`transition-transform ${musicOpen ? "rotate-180" : ""}`}>▾</span>
                </button>
                {musicOpen && (
                  <div className="pl-4 border-l border-surface-border ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2.5 text-sm text-white/60 hover:text-gold transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-2 py-3 text-sm transition-colors ${
                  isActive(item.href) ? "text-gold" : "text-white/60 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
