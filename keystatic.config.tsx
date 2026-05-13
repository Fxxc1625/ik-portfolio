import { config, fields, collection, singleton } from "@keystatic/core";

// GitHub App slug가 설정되면 github 모드, 없으면 local 모드
const storage = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
  ? ({
      kind: "github" as const,
      repo: { owner: "Fxxc1625", name: "ik-portfolio" },
    })
  : ({ kind: "local" as const });

export default config({
  storage,

  ui: {
    brand: { name: "이인규 포트폴리오 관리자" },
    navigation: {
      아티스트: ["artist", "ikBand", "boogieMonster", "setlist"],
      공연: ["concerts"],
      갤러리: ["gallery"],
    },
  },

  singletons: {
    // ── 아티스트 정보 ──────────────────────────────────────────────
    artist: singleton({
      label: "아티스트 정보",
      path: "content/artist",
      format: { data: "json" },
      schema: {
        nameKo: fields.text({ label: "이름 (한글)" }),
        nameEn: fields.text({ label: "이름 (영문)" }),
        titleKo: fields.text({ label: "직함 (한글)" }),
        titleEn: fields.text({ label: "직함 (영문)" }),
        taglineKo: fields.text({ label: "태그라인 (한글)" }),
        taglineEn: fields.text({ label: "태그라인 (영문)" }),
        bioKo: fields.text({ label: "바이오 (한글)", multiline: true }),
        bioEn: fields.text({ label: "바이오 (영문)", multiline: true }),
        highlights: fields.array(fields.text({ label: "항목" }), {
          label: "하이라이트",
          itemLabel: (p) => p.value ?? "",
        }),
        contact: fields.object(
          {
            tel: fields.text({ label: "전화번호" }),
            email: fields.text({ label: "이메일" }),
            instagram: fields.text({ label: "인스타그램 핸들 (@포함)" }),
            youtube: fields.text({ label: "유튜브 채널명" }),
          },
          { label: "연락처" }
        ),
        awards: fields.array(
          fields.object({
            year: fields.integer({ label: "연도" }),
            title: fields.text({ label: "수상명" }),
            org: fields.text({ label: "수여 기관" }),
          }),
          { label: "수상 이력", itemLabel: (p) => p.fields.title.value ?? "" }
        ),
      },
    }),

    // ── 이인규블루스밴드 ────────────────────────────────────────────
    ikBand: singleton({
      label: "이인규블루스밴드",
      path: "content/ik-blues-band",
      format: { data: "json" },
      schema: {
        since: fields.integer({ label: "결성연도" }),
        descKo: fields.text({ label: "소개 (한글)", multiline: true }),
        descEn: fields.text({ label: "소개 (영문)", multiline: true }),
        discography: fields.array(
          fields.object({
            title: fields.text({ label: "앨범명" }),
            year: fields.integer({ label: "발매연도" }),
            type: fields.text({ label: "종류 (EP / 정규앨범 / 싱글)" }),
            descKo: fields.text({ label: "설명 (한글)", multiline: true }),
            descEn: fields.text({ label: "설명 (영문)", multiline: true }),
            tracks: fields.array(
              fields.text({ label: "트랙명" }),
              { label: "트랙리스트", itemLabel: (p) => p.value ?? "" }
            ),
          }),
          { label: "음반", itemLabel: (p) => p.fields.title.value ?? "" }
        ),
      },
    }),

    // ── 최항석과부기몬스터 ──────────────────────────────────────────
    boogieMonster: singleton({
      label: "최항석과부기몬스터",
      path: "content/boogie-monster",
      format: { data: "json" },
      schema: {
        descKo: fields.text({ label: "소개 (한글)", multiline: true }),
        descEn: fields.text({ label: "소개 (영문)", multiline: true }),
        ikRole: fields.text({ label: "이인규 역할" }),
      },
    }),

    // ── 셋리스트 ────────────────────────────────────────────────────
    setlist: singleton({
      label: "셋리스트",
      path: "content/setlist",
      format: { data: "json" },
      schema: {
        originalSongs: fields.array(
          fields.object({
            title: fields.text({ label: "곡명" }),
            isTitle: fields.checkbox({ label: "타이틀곡", defaultValue: false }),
            album: fields.text({ label: "앨범" }),
          }),
          {
            label: "오리지널 곡",
            itemLabel: (p) => p.fields.title.value ?? "",
          }
        ),
        coverSongs: fields.array(
          fields.object({
            title: fields.text({ label: "곡명" }),
            artist: fields.text({ label: "원곡 아티스트" }),
          }),
          { label: "커버 곡", itemLabel: (p) => p.fields.title.value ?? "" }
        ),
      },
    }),
  },

  collections: {
    // ── 공연 이력 ────────────────────────────────────────────────────
    concerts: collection({
      label: "공연 이력",
      slugField: "venue",
      path: "content/concerts/*",
      format: { data: "json" },
      schema: {
        venue: fields.slug({ name: { label: "공연장 / 행사명" } }),
        location: fields.text({ label: "위치" }),
        type: fields.select({
          label: "유형",
          options: [
            { label: "단독 공연", value: "single" },
            { label: "정기 공연", value: "series" },
            { label: "행사", value: "annual" },
            { label: "페스티벌", value: "festival" },
          ],
          defaultValue: "single",
        }),
        dateDisplay: fields.text({ label: "날짜 표시 (예: 2023~현재)" }),
        dateStart: fields.text({ label: "시작 날짜" }),
        dateEnd: fields.text({ label: "종료 날짜" }),
        role: fields.multiselect({
          label: "역할",
          options: [
            { label: "연주", value: "performer" },
            { label: "기획·운영", value: "organizer" },
            { label: "사회", value: "emcee" },
            { label: "기획", value: "planner" },
          ],
        }),
        roleDetail: fields.text({ label: "역할 상세 설명" }),
        audience: fields.text({ label: "관객 수 (예: 500+)" }),
        category: fields.select({
          label: "국내 / 해외",
          options: [
            { label: "국내", value: "국내" },
            { label: "해외", value: "해외" },
          ],
          defaultValue: "국내",
        }),
        genre: fields.select({
          label: "분류",
          options: [
            { label: "공연", value: "공연" },
            { label: "행사", value: "행사" },
            { label: "콘서트", value: "콘서트" },
            { label: "페스티벌", value: "페스티벌" },
            { label: "대회", value: "대회" },
          ],
          defaultValue: "공연",
        }),
        note: fields.text({ label: "메모", multiline: true }),
        featuredBand: fields.checkbox({
          label: "밴드 포트폴리오에 표시",
          defaultValue: false,
        }),
        featuredPersonal: fields.checkbox({
          label: "개인 포트폴리오에 표시",
          defaultValue: false,
        }),
      },
    }),

    // ── 갤러리 ──────────────────────────────────────────────────────
    gallery: collection({
      label: "갤러리 사진",
      slugField: "title",
      path: "content/gallery/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "사진 제목" } }),
        category: fields.select({
          label: "카테고리",
          options: [
            { label: "인물사진", value: "portrait" },
            { label: "공연사진", value: "performance" },
            { label: "풍경스냅", value: "landscape" },
          ],
          defaultValue: "performance",
        }),
        image: fields.image({
          label: "이미지 파일",
          directory: "public/images/gallery",
          publicPath: "/images/gallery/",
          validation: { isRequired: true },
        }),
        caption: fields.text({ label: "캡션 (선택)" }),
        section: fields.select({
          label: "표시 위치",
          options: [
            { label: "시각예술 페이지", value: "visual-arts" },
            { label: "이인규블루스밴드", value: "ik-blues-band" },
            { label: "솔로 활동", value: "solo" },
            { label: "전체 (공통)", value: "all" },
          ],
          defaultValue: "all",
        }),
      },
    }),
  },
});
