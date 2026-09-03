// 논문·과제 카테고리 정의 — 여기만 고치면 탭·주소·라벨이 모두 따라갑니다.

// 「논문」 페이지의 하위탭
export const PUB_CATEGORIES = [
  { key: 'intl-journal', slug: 'international-journal', labelKey: 'pubs.intl-journal' },
  { key: 'intl-conf', slug: 'international-conference', labelKey: 'pubs.intl-conf' },
  { key: 'domestic-conf', slug: 'domestic-conference', labelKey: 'pubs.domestic-conf' },
  { key: 'patent', slug: 'patent', labelKey: 'pubs.patent' },
] as const;

// 「과제」는 별도 메뉴 · 별도 주소(/projects/)를 씁니다.
export const PROJECT_KEY = 'project';

export type PubKey = (typeof PUB_CATEGORIES)[number]['key'] | typeof PROJECT_KEY;

// 메인 화면에 탭으로 보여줄 카테고리
export const HOME_PUB_KEYS = ['intl-journal', 'intl-conf', 'domestic-conf'] as const;

export const catByKey = (key: string) => PUB_CATEGORIES.find((c) => c.key === key);

/** 그 카테고리의 목록 주소 */
export function listHref(key: string, path: (p: string) => string) {
  if (key === PROJECT_KEY) return path('/projects');
  if (key === 'intl-journal') return path('/publications');
  return `${path('/publications')}${catByKey(key)!.slug}/`;
}

/** 그 카테고리 글의 상세 주소 앞부분 */
export function detailBase(key: string, path: (p: string) => string) {
  if (key === PROJECT_KEY) return path('/projects');
  return `${path('/publications')}${catByKey(key)!.slug}/`;
}
