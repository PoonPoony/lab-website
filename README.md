# 연구실 홈페이지

한국어 / 영어를 함께 지원하는 연구실 소개 홈페이지입니다.
서버 없이 정적 사이트로 동작하며, 웹 관리자 페이지(`/admin`)에서 글을 쓰고 수정할 수 있습니다.

---

## 1. 먼저 고쳐야 할 5곳

| 파일 | 고칠 내용 |
|---|---|
| `src/i18n/ui.ts` 맨 위 `site` | 연구실 이름, 학과, 소개 문구, 주소, 이메일, 전화번호 |
| `astro.config.mjs` 의 `SITE` | 배포된 실제 홈페이지 주소 |
| `public/admin/config.yml` 의 `repo` | 본인 GitHub 저장소 (`아이디/저장소이름`) |
| `public/admin/config.yml` 의 `site_url`, `display_url` | 배포된 실제 홈페이지 주소 |
| `public/robots.txt` 의 `Sitemap` | 배포된 실제 홈페이지 주소 |

색상을 바꾸고 싶으면 `src/styles/global.css` 맨 위 `:root` 안의 값만 수정하면 사이트 전체에 반영됩니다.

---

## 2. 내 컴퓨터에서 미리보기

Node.js 20 이상이 설치되어 있어야 합니다.

```bash
npm install     # 처음 한 번만
npm run dev     # http://localhost:4321 에서 확인
```

빌드 결과물을 확인하려면:

```bash
npm run build   # dist/ 폴더에 완성본 생성
npm run preview
```

---

## 3. 글은 어디에 저장되나요?

모든 글은 `src/content/` 안의 텍스트 파일입니다.
관리자 페이지에서 글을 쓰면 이 폴더에 파일이 자동으로 만들어지고 GitHub에 저장됩니다.

```
src/content/
├── news/          공지사항 · 갤러리
│   ├── ko/        한국어 글
│   └── en/        영어 글  (파일 이름을 한국어와 똑같이 맞추면 짝이 됩니다)
├── members/       구성원
│   ├── ko/
│   └── en/
├── research/      연구 분야
│   ├── ko/
│   └── en/
└── publications/  논문 · 실적 (영문 서지정보라 언어 구분 없음)
```

영어 글이 없으면 해당 페이지는 한국어 글로 자동 대체되어 표시됩니다.
사진은 `public/images/` 에 저장되고, 관리자 페이지에서 올리면 자동으로 이곳에 들어갑니다.

---

## 4. 폴더 구조

```
├── astro.config.mjs          사이트 주소 · 다국어 설정
├── public/
│   ├── admin/                관리자 페이지 (Sveltia CMS)
│   │   ├── index.html
│   │   └── config.yml        ← 관리자 화면에 보이는 항목 설정
│   ├── images/               업로드한 사진
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── content.config.ts     글 항목(제목·날짜 등) 규칙 정의
    ├── content/              실제 글 파일
    ├── i18n/
    │   ├── ui.ts             ← 연구실 정보와 모든 번역 문구
    │   └── utils.ts
    ├── layouts/Base.astro    공통 뼈대 (head, 헤더, 푸터)
    ├── components/           헤더 · 푸터
    ├── views/                각 페이지 화면 (한/영 공용)
    ├── pages/                주소 → 화면 연결 (한국어: /, 영어: /en/)
    └── styles/global.css     ← 색상 · 폰트
```

---

## 5. 배포

GitHub에 올린 뒤 Cloudflare Pages에 연결하면 됩니다.
빌드 설정은 다음과 같습니다.

- 빌드 명령: `npm run build`
- 출력 디렉터리: `dist`

이후 GitHub에 변경사항이 올라갈 때마다(관리자 페이지에서 글을 쓸 때 포함) 홈페이지가 자동으로 갱신됩니다.
