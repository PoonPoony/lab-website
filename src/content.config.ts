import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 콘텐츠 컬렉션 정의
 *
 * 한국어/영어 글은 각각 ko/ , en/ 폴더에 같은 파일명으로 저장합니다.
 *   예) src/content/news/ko/2026-신입생-모집.md
 *       src/content/news/en/2026-신입생-모집.md
 * 관리자 페이지(/admin)에서 글을 쓰면 이 규칙대로 자동 저장됩니다.
 */

// 연구 분야
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    keywords: z.array(z.string()).default([]),
  }),
});

// 구성원
const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['professor', 'postdoc', 'phd', 'ms', 'undergrad', 'alumni']),
    position: z.string().default(''),
    topic: z.string().default(''),
    email: z.string().default(''),
    photo: z.string().optional(),
    order: z.number().default(0),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
  }),
});

// 논문 / 실적 (영문 서지정보라 언어 구분 없이 하나로 관리)
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    // 연월은 'YYYY-MM' 형식으로 적습니다. (예: 2026-03)
    date: z.string().optional(), // 논문·특허 — 게재 연월
    start: z.string().optional(), // 과제 — 시작 연월
    end: z.string().optional(), // 과제 — 종료 연월
    year: z.number().optional(), // 예전에 연도만 넣은 항목 호환용
    type: z.enum(['intl-journal', 'intl-conf', 'domestic-conf', 'patent', 'project']),
    // 관리자 페이지에서 비워두면 빈 문자열로 저장되므로 함께 허용합니다.
    fund: z.union([z.enum(['gov', 'org']), z.literal('')]).optional(),
    doi: z.string().default(''),
    link: z.string().default(''),
  }),
});

// 공지사항
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['notice', 'award', 'event']).default('notice'),
    summary: z.string().default(''),
    thumbnail: z.string().optional(),
    pinned: z.boolean().default(false),
  }),
});

// 갤러리 — 사진 중심
const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().default(''),
    cover: z.string().optional(),
    photos: z.array(z.string()).default([]),
  }),
});

export const collections = { research, members, publications, news, gallery };
