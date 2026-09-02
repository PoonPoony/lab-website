// 논문·실적 카테고리 정의 — 여기만 고치면 탭·주소·라벨이 모두 따라갑니다.
export const PUB_CATEGORIES = [
  { key: 'intl-journal', slug: 'international-journal', labelKey: 'pubs.intl-journal' },
  { key: 'intl-conf', slug: 'international-conference', labelKey: 'pubs.intl-conf' },
  { key: 'domestic-conf', slug: 'domestic-conference', labelKey: 'pubs.domestic-conf' },
  { key: 'patent', slug: 'patent', labelKey: 'pubs.patent' },
  { key: 'project', slug: 'project', labelKey: 'pubs.project' },
] as const;

export type PubKey = (typeof PUB_CATEGORIES)[number]['key'];

// 메인 화면에 탭으로 보여줄 카테고리
export const HOME_PUB_KEYS: PubKey[] = ['intl-journal', 'intl-conf', 'domestic-conf'];

export const catBySlug = (slug: string) => PUB_CATEGORIES.find((c) => c.slug === slug);
export const catByKey = (key: string) => PUB_CATEGORIES.find((c) => c.key === key);
