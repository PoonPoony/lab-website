export const languages = { ko: '한국어', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ko';

/**
 * 사이트 기본 정보 — 연구실에 맞게 이 부분만 고치면 전체에 반영됩니다.
 */
export const site = {
  ko: {
    labName: '전동파워트레인연구실',
    labShort: 'ePTL',
    university: '영남대학교 미래자동공학과',
    tagline: '전기기기 설계, 해석 및 최적화 연구',
    heroLead:
      'AI 기반 최적설계, 다물리 연성 해석 (전자기·열·진동), 탈희토류 모터 설계, 시스템 단위 성능 예측',
    keywords: [
  'AI 기반 최적설계',
  '다물리 연성 해석 (전자기·열·진동)',
  '탈희토류 모터 설계',
  '시스템 단위 성능 예측',
],
    address: '경상북도 경산시 대학로 280, 영남대학교 자동차관',
    email: 'yhjung@yu.ac.kr',
    phone: '+82-53-810-3008',
  },
  en: {
    labName: 'e-Powertrain Laboratory',
    labShort: 'ePTL',
    university: 'Dept. of Automotive Engineering, Yeungnam University',
    tagline: 'Design, analysis and optimization of electric machines',
    heroLead:
      'AI-based optimizing design, Multiphysics coupled analysis (electromagnetic·thermal·NVH), Rare-earth-free motor design, System-level performance prediction',
    address: 'Automotive Eng. Bldg., 280 Daehak-ro, Gyeongsan-si, Gyeongsangbuk-do 38541, Republic of Korea',
    email: 'yhjung@yu.ac.kr',
    phone: '+82-53-810-3008',
  },
} as const;

export const ui = {
  ko: {
    'nav.home': '홈',
    'nav.research': '연구 분야',
    'nav.members': '구성원',
    'nav.publications': '논문·실적',
    'nav.news': '공지·갤러리',
    'nav.contact': '오시는 길',

    'home.research.title': '연구 분야',
    'home.research.desc': '우리 연구실이 집중하고 있는 주제입니다.',
    'home.news.title': '최근 소식',
    'home.pubs.title': '주요 논문',
    'home.more': '전체 보기',
    'home.stat.pubs': '논문·특허',
    'home.stat.members': '연구 인력',
    'home.stat.areas': '연구 분야',

    'research.title': '연구 분야',
    'research.desc':
      '전기기기 설계부터 손실·열 해석, 최적화까지 전 과정을 다룹니다.',
    'research.keywords': '키워드',

    'members.title': '구성원',
    'members.desc': '함께 연구하는 사람들입니다.',
    'members.professor': '지도교수',
    'members.postdoc': '박사후연구원',
    'members.phd': '박사과정',
    'members.ms': '석사과정',
    'members.undergrad': '학부연구생',
    'members.alumni': '졸업생',
    'members.topic': '연구 주제',

    'pubs.title': '논문 · 실적',
    'pubs.desc': '연구실에서 발표한 논문, 특허, 수행 과제입니다.',
    'pubs.all': '전체',
    'pubs.journal': '학술지',
    'pubs.conference': '학술대회',
    'pubs.patent': '특허',
    'pubs.project': '연구과제',
    'pubs.empty': '해당하는 항목이 없습니다.',

    'news.title': '공지사항 · 갤러리',
    'news.desc': '연구실 소식과 활동 사진을 전합니다.',
    'news.notice': '공지',
    'news.award': '수상',
    'news.event': '행사',
    'news.gallery': '갤러리',
    'news.pinned': '중요',
    'news.back': '목록으로',
    'news.empty': '등록된 글이 없습니다.',

    'contact.title': '오시는 길',
    'contact.address': '주소',
    'contact.email': '이메일',
    'contact.phone': '전화',
    'contact.join.title': '함께 연구할 학생을 찾습니다',
    'contact.join.desc':
      '전기기기 설계와 해석에 관심 있는 학생은 언제든 메일로 연락 주세요.',
    'contact.join.cta': '메일 보내기',

    'footer.rights': '모든 권리 보유.',
    'lang.switch': 'English',
    'skip': '본문 바로가기',
  },
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.members': 'Members',
    'nav.publications': 'Publications',
    'nav.news': 'News',
    'nav.contact': 'Contact',

    'home.research.title': 'Research Areas',
    'home.research.desc': 'What our laboratory focuses on.',
    'home.news.title': 'Latest News',
    'home.pubs.title': 'Selected Publications',
    'home.more': 'View all',
    'home.stat.pubs': 'Publications',
    'home.stat.members': 'Researchers',
    'home.stat.areas': 'Research areas',

    'research.title': 'Research Areas',
    'research.desc':
      'From machine design to loss and thermal analysis, through to optimization.',
    'research.keywords': 'Keywords',

    'members.title': 'Members',
    'members.desc': 'The people behind our research.',
    'members.professor': 'Principal Investigator',
    'members.postdoc': 'Postdoctoral Researcher',
    'members.phd': 'Ph.D. Students',
    'members.ms': "Master's Students",
    'members.undergrad': 'Undergraduate Researchers',
    'members.alumni': 'Alumni',
    'members.topic': 'Research topic',

    'pubs.title': 'Publications',
    'pubs.desc': 'Journal and conference papers, patents and funded projects.',
    'pubs.all': 'All',
    'pubs.journal': 'Journal',
    'pubs.conference': 'Conference',
    'pubs.patent': 'Patent',
    'pubs.project': 'Project',
    'pubs.empty': 'No items in this category yet.',

    'news.title': 'News & Gallery',
    'news.desc': 'Announcements and moments from the lab.',
    'news.notice': 'Notice',
    'news.award': 'Award',
    'news.event': 'Event',
    'news.gallery': 'Gallery',
    'news.pinned': 'Pinned',
    'news.back': 'Back to list',
    'news.empty': 'No posts yet.',

    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.join.title': 'We are looking for motivated students',
    'contact.join.desc':
      'If you are interested in electric machine design and analysis, feel free to reach out by email.',
    'contact.join.cta': 'Send an email',

    'footer.rights': 'All rights reserved.',
    'lang.switch': '한국어',
    'skip': 'Skip to content',
  },
} as const;

export type UIKey = keyof (typeof ui)['ko'];
