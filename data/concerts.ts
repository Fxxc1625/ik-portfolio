export interface Concert {
  id: string;
  venue: string;
  location: string;
  type: "single" | "series" | "annual" | "festival";
  dateDisplay: string;
  role: string[];
  roleDetail?: string;
  audience?: string;
  category: "국내" | "해외";
  genre: string;
  note?: string;
  references?: { type: string; label: string; url?: string; path?: string }[];
  featuredBand?: boolean;
  featuredPersonal?: boolean;
}

export const concerts: Concert[] = [
  {
    id: "chunnyeon_gangnam",
    venue: "천년동안도 강남",
    location: "서울특별시 서초구",
    type: "series",
    dateDisplay: "2023~2024",
    role: ["performer", "organizer"],
    roleDetail: "블루스 공연 기획·섭외·진행 전담 (1년간)",
    audience: "60+",
    category: "국내",
    genre: "공연",
    featuredBand: true,
    featuredPersonal: true,
    note: "정기 블루스 공연 시리즈 기획 및 운영",
  },
  {
    id: "seoul_blues_festival",
    venue: "서울블루스페스티벌",
    location: "서울",
    type: "festival",
    dateDisplay: "2020~현재 (매년)",
    role: ["performer", "emcee"],
    roleDetail: "매년 참가, 사회자 역임",
    audience: "500+",
    category: "국내",
    genre: "페스티벌",
    featuredBand: true,
    featuredPersonal: true,
    note: "2020년 이후 한 해도 빠지지 않고 참가",
  },
  {
    id: "gunsan_blues_festival",
    venue: "군산 수제맥주&블루스페스티벌",
    location: "군산",
    type: "festival",
    dateDisplay: "2022~2025",
    role: ["performer"],
    audience: "300+",
    category: "국내",
    genre: "페스티벌",
    featuredBand: true,
    featuredPersonal: true,
  },
  {
    id: "jumf",
    venue: "전주 얼티밋뮤직페스티벌 (JUMF)",
    location: "전주",
    type: "festival",
    dateDisplay: "2023~2024",
    role: ["performer"],
    category: "국내",
    genre: "페스티벌",
    featuredBand: true,
    featuredPersonal: true,
  },
  {
    id: "ibc_2023",
    venue: "International Blues Challenge",
    location: "Memphis, TN, USA",
    type: "festival",
    dateDisplay: "2023",
    role: ["performer"],
    category: "해외",
    genre: "대회",
    featuredPersonal: true,
    note: "준결승 진출 — 전 세계 200여 팀 경쟁",
  },
  {
    id: "buddy_guy_legends",
    venue: "Buddy Guy's Legends",
    location: "Chicago, IL, USA",
    type: "single",
    dateDisplay: "2023",
    role: ["performer"],
    category: "해외",
    genre: "공연",
    featuredPersonal: true,
  },
  {
    id: "blues_city_cafe",
    venue: "Blues City Cafe",
    location: "Memphis, TN, USA",
    type: "single",
    dateDisplay: "2023",
    role: ["performer"],
    category: "해외",
    genre: "공연",
    featuredPersonal: true,
  },
  {
    id: "wando_expo_2026",
    venue: "2026Pre완도국제해조류박람회",
    location: "완도군",
    type: "annual",
    dateDisplay: "2026-05",
    role: ["performer"],
    roleDetail: "메인스테이지 축하공연",
    category: "국내",
    genre: "행사",
    featuredPersonal: true,
  },
];
