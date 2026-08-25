import { ui, defaultLang, site, type Lang, type UIKey } from './ui';

/** URL에서 현재 언어를 판별합니다. (/en/... → en, 그 외 → ko) */
export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

/** 번역 함수를 만듭니다. const t = useT(lang); t('nav.home') */
export function useT(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/** 현재 언어에 맞는 경로를 만듭니다. path('/members') → '/members/' 또는 '/en/members/' */
export function usePath(lang: Lang) {
  return function path(p: string): string {
    const clean = p === '/' ? '' : `/${p.replace(/^\/|\/$/g, '')}`;
    const base = lang === defaultLang ? '' : `/${lang}`;
    return `${base}${clean}/`.replace(/\/{2,}/g, '/');
  };
}

/** 사이트 기본 정보 */
export function useSite(lang: Lang) {
  return site[lang];
}

/** 현재 URL의 반대 언어 주소를 만듭니다. */
export function altLangUrl(url: URL, lang: Lang): string {
  const path = url.pathname;
  if (lang === 'en') {
    return path.replace(/^\/en/, '') || '/';
  }
  return `/en${path}`.replace(/\/{2,}/g, '/');
}

/**
 * 컬렉션 항목의 id에서 언어 폴더를 떼어냅니다.
 * 'ko/2026-notice' → { lang: 'ko', slug: '2026-notice' }
 */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [maybeLang, ...rest] = id.split('/');
  if (maybeLang === 'ko' || maybeLang === 'en') {
    return { lang: maybeLang, slug: rest.join('/') };
  }
  return { lang: defaultLang, slug: id };
}

/** 해당 언어의 항목만 골라냅니다. 번역이 없으면 한국어 글로 대체합니다. */
export function filterByLang<T extends { id: string }>(
  entries: T[],
  lang: Lang,
): (T & { slug: string })[] {
  const bySlug = new Map<string, T & { slug: string }>();
  const fallback = new Map<string, T & { slug: string }>();

  for (const entry of entries) {
    const { lang: entryLang, slug } = splitId(entry.id);
    const withSlug = { ...entry, slug };
    if (entryLang === lang) bySlug.set(slug, withSlug);
    else if (entryLang === defaultLang) fallback.set(slug, withSlug);
  }
  for (const [slug, entry] of fallback) {
    if (!bySlug.has(slug)) bySlug.set(slug, entry);
  }
  return [...bySlug.values()];
}

/** 날짜를 언어에 맞게 표시합니다. */
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: lang === 'ko' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export { type Lang };
