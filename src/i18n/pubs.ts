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
export const HOME_PUB_KEYS = ['intl-journal', 'intl-conf', 'domestic-conf', PROJECT_KEY] as const;

/** 그 카테고리의 이름표 키 */
export const labelKeyOf = (key: string) =>
  key === PROJECT_KEY ? 'projects.title' : catByKey(key)!.labelKey;

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

/* ---------- 연월 처리 ---------- */

type Ym = { y: number; m: number };

const parseYm = (v?: string): Ym | null => {
  const m = /^(\d{4})-(\d{1,2})/.exec((v ?? '').trim());
  return m ? { y: Number(m[1]), m: Number(m[2]) } : null;
};

type PubData = { date?: string; start?: string; end?: string; year?: number };

/** 목록을 묶고 정렬할 때 쓰는 연도 */
export const pubYear = (d: PubData): number =>
  parseYm(d.date)?.y ?? parseYm(d.start)?.y ?? d.year ?? 0;

/** 같은 해 안에서 정렬할 때 쓰는 월 */
export const pubMonth = (d: PubData): number =>
  parseYm(d.date)?.m ?? parseYm(d.start)?.m ?? 0;

/** 화면에 보여줄 연월 문구 */
export function pubDateLabel(d: PubData, lang: 'ko' | 'en'): string {
  const one = (v?: string) => {
    const t = parseYm(v);
    if (!t) return '';
    if (lang === 'ko') return `${t.y}년 ${t.m}월`;
    const name = new Date(Date.UTC(t.y, t.m - 1, 1)).toLocaleString('en-US', {
      month: 'short',
      timeZone: 'UTC',
    });
    return `${name} ${t.y}`;
  };

  if (d.start || d.end) {
    const a = one(d.start);
    const b = one(d.end);
    if (a && b) return `${a} – ${b}`;
    return a || b;
  }
  return one(d.date);
}
