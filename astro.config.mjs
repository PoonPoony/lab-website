// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ 배포 후 실제 주소로 바꿔주세요 (예: 'https://emdl.your-univ.ac.kr')
const SITE = 'https://example.pages.dev';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: {
      prefixDefaultLocale: false, // 한국어 = /, 영어 = /en/
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko-KR', en: 'en' },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
