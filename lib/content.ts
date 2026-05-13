/**
 * Keystatic JSON 파일을 읽어 타입-세이프하게 반환하는 헬퍼.
 * 로컬: content/*.json 파일을 직접 읽음
 * 프로덕션: Keystatic GitHub 모드가 파일을 업데이트 → Vercel 재빌드
 */
import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";

// 서버 전용 reader (App Router Server Component에서만 사용)
export function getReader() {
  return createReader(process.cwd(), config);
}

export type ArtistData = Awaited<
  ReturnType<ReturnType<typeof getReader>["singletons"]["artist"]["read"]>
>;

export type Concert = Awaited<
  ReturnType<
    ReturnType<typeof getReader>["collections"]["concerts"]["read"]
  >
>;

export type GalleryItem = Awaited<
  ReturnType<
    ReturnType<typeof getReader>["collections"]["gallery"]["read"]
  >
>;
