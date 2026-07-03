# 크레타테크(CREATOR TECH) Corporate Website

**크레타테크 회사소개 홈페이지 운영·유지보수·인수인계 문서**

이 문서는 현재 코드 기준으로 작성된 유지보수 문서입니다.  
텍스트, 이미지, 연락처, 지도, SEO, 배포 흐름을 실무자가 빠르게 확인하고 수정할 수 있도록 구성했습니다.

---

## 운영 기본 원칙 (이번 프로젝트 기준)

아래 3가지는 이번 프로젝트 운영에서 **필수 기준**입니다.

| 구분 | 반드시 이렇게 진행 |
|---|---|
| Vercel 계정 | **GitHub 계정으로 가입/로그인** |
| 도메인 구매 | **가비아 + 네이버 계정**, 도메인 `creta.한국` **5년 등록** |
| 네이버 노출 등록 | **네이버 서치어드바이저**에서 네이버 로그인 후 사이트 등록 |

> 운영 정책 메모: 계정이 분산되면(개인 계정 여러 개 혼재) 인수인계와 장애 대응이 어려워집니다.  
> 가능한 한 담당자/회사 계정 체계를 고정해서 운영하세요.

---

## 비개발자용 빠른 실행 순서 (대표님/실무 담당자)

| 단계 | 작업 | 완료 기준 |
|---:|---|---|
| 1 | GitHub 계정 준비/확인 | 저장소 접근 가능 |
| 2 | Vercel 가입(반드시 GitHub로 로그인) | Vercel 프로젝트 생성 가능 |
| 3 | GitHub 저장소와 Vercel 프로젝트 연결 | `main` push 시 자동 배포 동작 |
| 4 | 가비아에서 `creta.한국` 도메인 5년 구매 | 도메인 결제/소유 완료 |
| 5 | 가비아 DNS를 Vercel 안내값으로 연결 | 운영 도메인 접속 가능 |
| 6 | 네이버 서치어드바이저 등록(네이버 로그인) | 사이트 소유 확인 + 수집 요청 완료 |
| 7 | 운영 점검(모바일/PC/문의 연락처) | 실제 고객 화면 이상 없음 |

---

## 도메인 운영 경고 (매우 중요)

이번 프로젝트는 `creta.한국` 도메인을 **5년 등록**으로 운영합니다.

| 항목 | 운영 기준 |
|---|---|
| 구매 도메인 | `creta.한국` |
| 구매처 | 가비아 |
| 등록 기간 | 5년 |
| 만료 점검 | 만료 90일 전/30일 전/7일 전 내부 점검 |
| 자동 연장 | 가능하면 활성화 권장 |

반드시 문서에 남겨야 할 주의사항:

- 등록 기간은 결제 직후 **5년으로 정확히 등록되었는지** 재확인합니다.
- 만료일을 놓쳐도 연장은 가능할 수 있으나, **추가 비용이 발생할 수 있습니다.**
- 만료 상태가 길어지면 웹사이트/메일 중단 또는 복구 절차 복잡화가 발생할 수 있습니다.
- 운영 문서/캘린더/알림툴에 도메인 만료일을 중복 등록해 두세요.

---

## 네이버 서치어드바이저 등록 절차

네이버 검색 노출 및 색인 관리를 위해 아래 절차를 운영 표준으로 사용합니다.

| 단계 | 작업 |
|---:|---|
| 1 | 네이버 계정으로 [네이버 서치어드바이저](https://searchadvisor.naver.com/) 로그인 |
| 2 | 사이트 등록 (`https://creta.한국` 또는 운영 도메인) |
| 3 | 사이트 소유확인(HTML 파일 또는 메타태그 방식 중 1개) |
| 4 | `https://creta.한국/sitemap.xml` 제출 (`public/sitemap.xml`이 배포 시 자동 제공됨) |
| 5 | 웹페이지 수집 요청 실행 |
| 6 | 색인/오류 리포트 주기 점검 |

실무 팁:

- 소유확인용 파일/태그는 배포 후 삭제되지 않게 관리합니다.
- 도메인 변경, www 정책 변경, HTTPS 정책 변경 시 서치어드바이저도 함께 재검토합니다.

---

## 0. 운영 담당자가 가장 먼저 알아야 하는 내용

이 홈페이지는 일반 프로그램처럼 서버를 직접 켜 두는 방식이 아닙니다.

현재 운영 구조는 아래와 같습니다.

text 내 작업 PC    ↓ GitHub 저장소    ↓ Vercel 자동 배포    ↓ 실제 회사 홈페이지 운영 

## 현재 운영 정보

| 항목 | 값 |
|---|---|
| 운영 환경 | Production |
| 배포 플랫폼 | Vercel |
| Git 기본 브랜치 | main |
| Node.js 권장 버전 | 22 이상 권장 |
| 패키지 매니저 | npm |
| 프론트엔드 프레임워크 | React + Vite |

### 쉽게 설명

| 항목 | 역할 |
|---|---|
| 내 PC | 홈페이지 내용을 수정하는 작업 공간 |
| GitHub | 홈페이지 코드 백업 및 변경 이력 관리 |
| Vercel | 실제 인터넷 홈페이지를 운영하는 서비스 |
| 회사 도메인 | 고객이 접속하는 실제 주소 |

즉:

- 담당자가 홈페이지 내용을 수정한 뒤 GitHub에 업로드(push)하면
- Vercel이 자동으로 새 홈페이지를 다시 생성(build)하고
- 실제 운영 사이트에 자동 반영됩니다.

따라서:
- 별도로 서버를 24시간 켜둘 필요가 없고
- FTP 업로드도 필요 없으며
- 직접 서버를 관리하지 않아도 됩니다.

---

## 실제 운영과 로컬 개발의 차이

| 구분 | 의미 |
|---|---|
| npm run dev | 내 PC에서만 확인하는 임시 미리보기 |
| 실제 운영 사이트 | Vercel에서 항상 운영되는 실제 홈페이지 |
| GitHub push | 실제 홈페이지를 업데이트하는 배포 시작 동작 |

즉 npm run dev를 종료해도 실제 홈페이지는 계속 정상 운영됩니다.

---

## 유지보수 담당자가 실제로 자주 하는 작업

| 작업 | 난이도 |
|---|---|
| 전화번호 수정 | 매우 쉬움 |
| 주소 수정 | 쉬움 |
| 제품 사진 교체 | 쉬움 |
| 회사소개 문구 수정 | 쉬움 |
| 설비 추가 | 보통 |
| 새 메뉴 추가 | 개발자 권장 |
| 전체 디자인 수정 | 개발자 권장 |

대부분의 수정은 아래 폴더만 수정하면 처리 가능합니다.

text src/data/ src/assets/ 

---

## 수정 후 실제 반영되는 과정

text 파일 수정 → npm run dev 로 확인 → git push → Vercel 자동 배포 → 실제 홈페이지 반영 

보통 push 후 1~3분 안에 실제 사이트에 반영됩니다.

---

## 문제 발생 시 가장 먼저 확인할 것

| 증상 | 가장 먼저 확인 |
|---|---|
| 사이트 접속 안 됨 | 도메인 만료 여부 |
| 수정 반영 안 됨 | GitHub push 성공 여부 |
| 배포 실패 | Vercel Deployments 로그 |
| 이미지 안 보임 | 파일 경로 / 파일명 |
| 메뉴 이동 안 됨 | section id / navLinks 연결 여부 |

---

## 인수인계 시 반드시 전달해야 하는 것

| 항목 | 중요도 |
|---|---|
| GitHub 저장소 접근 권한 | 매우 중요 |
| Vercel 프로젝트 권한 | 매우 중요 |
| 도메인 구매처 계정 | 매우 중요 |
| 도메인 만료일 | 매우 중요 |
| README 문서 | 중요 |
| 이미지 원본 파일 | 권장 |

특히 도메인 계정과 만료일은 반드시 관리해야 합니다.

도메인이 만료되면 홈페이지 파일이 정상이어도 사이트 접속이 불가능해집니다.

## 1. 프로젝트 요약

| 항목 | 현재 기준 |
|---|---|
| 사이트 유형 | 정적 회사소개 웹사이트 |
| 주요 목적 | 크레타테크의 정밀 방전가공, 와이어 가공, 설비, 제품, 협력업체, 문의 정보 소개 |
| 화면 구성 | 단일 페이지 랜딩 구조 |
| 프론트엔드 | React 19 + Vite 8 |
| 스타일 | Tailwind CSS 4, `src/index.css`의 `@theme` 토큰 사용 |
| 아이콘 | `react-icons`의 Heroicons 계열 아이콘 |
| 데이터 관리 | `src/data/*.js` 파일에서 섹션별 콘텐츠 관리 |
| 이미지 관리 | 실제 화면 이미지는 주로 `src/assets/`에서 import |
| 배포 방식 | GitHub 저장소 push 후 Vercel 자동 빌드·배포 |
| 서버/DB | 없음 |
| 관리자 페이지 | 없음 |
| 환경변수 | 현재 사용하지 않음 |

---

## 2. 빠른 유지보수 가이드

대부분의 운영 수정은 컴포넌트 코드를 직접 고치기보다 `src/data/`와 `src/assets/`를 수정하는 방식으로 처리합니다.

| 수정 목적 | 우선 확인 파일 |
|---|---|
| 회사명, 전화번호, 이메일, 푸터 문구, 메뉴명 | **`src/data/site.js`** |
| 메인 첫 화면 문구와 히어로 이미지 | **`src/data/hero.js`**, `src/assets/hero/` |
| 회사소개, 대표 인사말, 회사 개요 | **`src/data/about.js`**, `src/assets/company/` |
| 설비 목록, 사양, 설비 사진 | **`src/data/equipment.js`**, `src/assets/equipment/` |
| 제품소개 항목과 제품 이미지 | **`src/data/products.js`**, `src/assets/products/` |
| 회사 연혁 | **`src/data/history.js`** |
| 협력업체 목록, 로고, 링크 | **`src/data/partners.js`**, `src/assets/partners/` |
| 문의 안내 문구 | **`src/data/contact.js`** |
| 주소, 네이버 지도 링크, 지도 embed | **`src/data/location.js`** |
| SEO 메타태그, favicon | **`index.html`**, `public/favicon.svg` |
| 검색엔진 크롤링 안내 | **`public/robots.txt`** |
| 사이트맵(검색엔진 제출용) | **`public/sitemap.xml`** |
| 전체 색상, 전역 폰트, 기본 CSS | **`src/index.css`** |
| 섹션 표시 순서 | **`src/pages/Home.jsx`** |

### 운영 수정 기본 순서

| 단계 | 작업 |
|---|---|
| 1 | 수정할 콘텐츠가 어느 `src/data/*.js` 파일에 있는지 확인 |
| 2 | 필요한 텍스트, 링크, 이미지 import 경로 수정 |
| 3 | `npm run dev`로 로컬 화면 확인 |
| 4 | 이상 없으면 `npm run build`로 배포 빌드 확인 |
| 5 | GitHub에 commit/push |
| 6 | Vercel Deployments에서 배포 성공 여부 확인 |

---

## 3. 실제 기술 스택

`package.json` 기준 현재 사용 중인 라이브러리입니다.

| 구분 | 패키지 | 버전 범위 | 역할 |
|---|---|---:|---|
| UI | `react` | `^19.2.6` | 화면 구성 |
| UI 렌더링 | `react-dom` | `^19.2.6` | React DOM 렌더링 |
| 아이콘 | `react-icons` | `^5.6.0` | 메뉴, 연락처, 지도 등 아이콘 |
| 빌드 도구 | `vite` | `^8.0.12` | 개발 서버 및 배포 빌드 |
| React 플러그인 | `@vitejs/plugin-react` | `^6.0.1` | Vite의 React 처리 |
| CSS | `tailwindcss` | `^4.3.0` | 유틸리티 CSS |
| Tailwind/Vite 연동 | `@tailwindcss/vite` | `^4.3.0` | Tailwind CSS 4 Vite 플러그인 |
| 린트 | `eslint` | `^10.3.0` | 코드 검사 |
| 린트 설정 | `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals` | package.json 참고 | React/Vite 프로젝트 린트 |

현재 사용하지 않는 항목:

| 항목 | 현재 상태 |
|---|---|
| 백엔드 서버 | 없음 |
| 데이터베이스 | 없음 |
| 로그인/회원 기능 | 없음 |
| 관리자 페이지 | 없음 |
| 상태관리 라이브러리 | 없음 |
| 라우터 | 없음 |
| API 연동 | 없음 |
| 환경변수 | 없음 |
| `tailwind.config.*` | 없음 |
| `vercel.json` | 없음 |

---

## 4. 실행 명령어

| 명령어 | 용도 | 사용 시점 |
|---|---|---|
| `npm install` | 의존성 설치 | 프로젝트 최초 실행, `package.json` 변경 후 |
| `npm run dev` | 로컬 개발 서버 실행 | 수정 내용을 브라우저에서 확인할 때 |
| `npm run build` | 배포용 정적 파일 생성 | 배포 전 오류 확인, Vercel 자동 빌드 |
| `npm run preview` | 빌드 결과 로컬 미리보기 | `npm run build` 이후 최종 확인 |
| `npm run lint` | ESLint 검사 | 코드 수정 후 품질 확인 |

### 로컬 실행

```bash
npm install
npm run dev
```

기본 접속 주소는 Vite가 안내하는 로컬 주소입니다. 일반적으로 `http://localhost:5173`입니다.

### 배포 전 확인

```bash
npm run lint
npm run build
```

`npm run build` 결과물은 `dist/` 폴더에 생성됩니다. `dist/`는 빌드 산출물이므로 Git에 올리지 않습니다.

---

## 5. 실제 폴더 구조

현재 프로젝트의 핵심 구조입니다.

```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── icons.svg
│   └── images/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── pages/
│   │   └── Home.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── FadeIn.jsx
│   │   └── SectionHeading.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Equipment.jsx
│   │   ├── Products.jsx
│   │   ├── History.jsx
│   │   ├── Partners.jsx
│   │   ├── Contact.jsx
│   │   └── Location.jsx
│   ├── data/
│   │   ├── site.js
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── equipment.js
│   │   ├── products.js
│   │   ├── history.js
│   │   ├── partners.js
│   │   ├── contact.js
│   │   └── location.js
│   └── assets/
│       ├── hero/
│       ├── company/
│       ├── equipment/
│       ├── products/
│       └── partners/
└── dist/
```

`dist/`는 `npm run build` 실행 후 생성되는 폴더입니다. 저장소에 포함하지 않습니다.

---

## 6. 화면 구성 구조

이 프로젝트는 현재 단일 페이지 구조입니다.

| 파일 | 역할 |
|---|---|
| `src/main.jsx` | React 앱 진입점, `src/index.css` 로드 |
| `src/App.jsx` | `Home` 페이지 렌더링 |
| `src/pages/Home.jsx` | Header, Footer, 각 섹션 조립 및 표시 순서 관리 |
| `src/components/Header.jsx` | 상단 고정 메뉴, 모바일 메뉴 |
| `src/components/Footer.jsx` | 하단 회사 정보, 연락처, 바로가기 |
| `src/components/SectionHeading.jsx` | 섹션 공통 제목 UI |
| `src/components/FadeIn.jsx` | 스크롤 진입 애니메이션 |

현재 섹션 표시 순서:

| 순서 | 섹션 | 컴포넌트 | 데이터 파일 | 앵커 ID |
|---:|---|---|---|---|
| 1 | 메인 히어로 | `Hero.jsx` | `hero.js` | `hero` |
| 2 | 회사소개 | `About.jsx` | `about.js` | `about` |
| 3 | 설비 | `Equipment.jsx` | `equipment.js` | `equipment` |
| 4 | 제품소개 | `Products.jsx` | `products.js` | `products` |
| 5 | 회사 연혁 | `History.jsx` | `history.js` | `history` |
| 6 | 협력업체 | `Partners.jsx` | `partners.js` | `partners` |
| 7 | 문의사항 | `Contact.jsx` | `contact.js`, `site.js` | `contact` |
| 8 | 찾아오는길 | `Location.jsx` | `location.js`, `site.js` | `location` |

메뉴 항목은 `src/data/site.js`의 `navLinks` 배열과 각 섹션의 `id`가 맞아야 정상 이동합니다.

---

## 7. Data 파일 구조

비개발자 또는 유지보수 담당자가 가장 자주 수정하게 되는 영역입니다.

### `src/data/site.js`

| 데이터 | 사용 위치 |
|---|---|
| `company.name` | Header, Footer |
| `company.fullName` | Footer |
| `company.phone` | Contact, Footer |
| `company.fax` | Contact |
| `company.email` | Contact, Footer |
| `company.address` | Footer, Location fallback |
| `company.footerDescription` | Footer |
| `navLinks` | Header 메뉴 |
| `footerLinks` | Footer 바로가기 |

주의: 현재 `company.address`와 `src/data/location.js`의 `address.value`가 별도 값으로 관리됩니다. 주소를 수정할 때는 두 파일을 함께 확인하세요.

### `src/data/hero.js`

| 데이터 | 설명 |
|---|---|
| `heroImages` | 첫 화면의 2분할 배경 이미지 |
| `heroContent.eyebrow` | 상단 영문 라벨 |
| `heroContent.title` | 메인 제목 |
| `heroContent.subtitle` | 메인 설명 |
| `ctaPrimary`, `ctaSecondary` | 버튼 문구와 이동 위치 |

이미지는 현재 `src/assets/hero/edm-hero.jpg`, `src/assets/hero/wire-hero.jpg`를 import합니다.

### `src/data/about.js`

| 데이터 | 설명 |
|---|---|
| `greeting` | 대표 인사말 |
| `overview.items` | 회사 개요 표 |
| `facilityImage` | 회사 전경 이미지, 대체 텍스트, 캡션 |

회사 전경 이미지는 `src/assets/company/company.jpg`를 사용합니다.

### `src/data/equipment.js`

| 데이터 | 설명 |
|---|---|
| `technologies` | 방전가공, 와이어 가공 기술 설명 |
| `categories` | 방전기, 슈퍼드릴, 와이어, 측정기 설비 목록 |
| `specs` | 각 설비의 사양 표 |
| `images` | 설비 이미지와 캡션 |

설비 이미지는 `src/assets/equipment/` 하위 폴더에서 import합니다.

### `src/data/products.js`

| 데이터 | 설명 |
|---|---|
| `items` | 제품소개 카드 목록 |
| `category` | 제품 분류 라벨 |
| `description` | 제품 설명 |
| `image` | 제품 이미지 |
| `applications` | 적용 분야 태그 |

### `src/data/history.js`

| 데이터 | 설명 |
|---|---|
| `items` | 회사 연혁 목록 |
| `year`, `month` | 정렬 기준 |
| `dateLabel` | 화면 표시 날짜 |
| `partner`, `website` | 협력사명과 홈페이지 링크 |

`History.jsx`에서 `year`, `month` 기준 오름차순으로 정렬합니다.

### `src/data/partners.js`

| 데이터 | 설명 |
|---|---|
| `items` | 협력업체 카드 목록 |
| `image` | 로고 이미지. 없으면 준비 중 placeholder 표시 |
| `website` | 홈페이지 링크. 없으면 링크 미표시 |

### `src/data/contact.js`

문의 섹션의 안내 문구와 채널 구성을 관리합니다. 실제 전화번호, 이메일, 팩스 값은 `src/data/site.js`의 `company` 객체에서 가져옵니다.

### `src/data/location.js`

| 데이터 | 설명 |
|---|---|
| `address.value` | 찾아오는길에 표시되는 주소 |
| `address.mapUrl` | 네이버 지도 새 창 링크 |
| `directions` | 방문/주차 안내 문구 |
| `mapEmbedUrl` | 페이지 내부 iframe 지도 URL |

`mapEmbedUrl`이 비어 있으면 지도 대신 placeholder 안내가 표시됩니다.

---

## 8. 이미지 관리 기준

현재 실제 화면에서 사용하는 이미지는 대부분 `src/assets/`에서 import합니다. `public/images/`에는 SVG 샘플 이미지가 있지만, 현재 섹션 컴포넌트에서 직접 사용하지 않습니다.

| 이미지 종류 | 현재 위치 | 연결 파일 |
|---|---|---|
| 히어로 이미지 | `src/assets/hero/` | `src/data/hero.js` |
| 회사 전경 | `src/assets/company/` | `src/data/about.js` |
| 설비 이미지 | `src/assets/equipment/` | `src/data/equipment.js` |
| 제품 이미지 | `src/assets/products/` | `src/data/products.js` |
| 협력업체 로고 | `src/assets/partners/` | `src/data/partners.js` |
| favicon | `public/favicon.svg` | `index.html` |
| 미사용/예비 SVG 이미지 | `public/images/` | 현재 직접 사용 없음 |

### 이미지 교체 절차

| 단계 | 내용 |
|---|---|
| 1 | 같은 성격의 폴더에 새 이미지 추가 |
| 2 | 해당 `src/data/*.js` 파일 상단의 import 경로 수정 |
| 3 | `alt`, `caption`도 새 이미지에 맞게 수정 |
| 4 | `npm run dev`로 PC/모바일 화면 확인 |
| 5 | `npm run build`로 빌드 확인 |

### 이미지 최적화 권장사항

| 항목 | 권장 기준 |
|---|---|
| 파일명 | 가능하면 짧고 의미 있게 관리 |
| 용량 | 큰 사진은 업로드 전 압축 권장 |
| 히어로 이미지 | 가로형, 최소 1600px 이상 권장 |
| 제품/설비 이미지 | 너무 어둡거나 흐린 사진은 지양 |
| 로고 이미지 | 투명 PNG 또는 여백 적은 JPG/PNG 권장 |
| 대체 텍스트 | `alt`는 이미지 내용을 설명하도록 작성 |

---

## 9. SEO, robots.txt, sitemap, Open Graph

검색엔진 최적화(SEO) 관련 파일은 아래 3곳에서 관리합니다.

| 파일 | 역할 | 배포 후 접근 주소 |
|---|---|---|
| `index.html` | 페이지 메타태그, 네이버 인증, OG/Twitter Card | `https://creta.한국/` |
| `public/robots.txt` | 검색엔진 크롤링 허용 및 사이트맵 안내 | `https://creta.한국/robots.txt` |
| `public/sitemap.xml` | 검색엔진에 제출할 URL 목록 | `https://creta.한국/sitemap.xml` |

Vite는 `public/` 폴더 파일을 빌드 시 `dist/` 루트로 그대로 복사합니다.  
별도 `vercel.json` 설정 없이도 배포 후 위 두 주소로 정상 접근됩니다.

### `index.html` SEO 메타태그 (현재 설정)

| 항목 | 내용 |
|---|---|
| 문서 언어 | `<html lang="ko">` |
| favicon | `<link rel="icon" href="/favicon.svg">` |
| viewport | `<meta name="viewport">` |
| 네이버 사이트 인증 | `<meta name="naver-site-verification">` (삭제 금지) |
| description | 크레타테크 정밀가공 기업 소개 문구 |
| author | 크레타테크 (CREATOR TECH) |
| keywords | Wire EDM, 정밀가공, CNC 가공 등 |
| robots | `index, follow` |
| theme-color | `#0a0f14` (브랜드 다크 컬러) |
| canonical | `https://creta.한국/` |
| title | `크레타테크 \| CREATOR TECH - Precision Wire & EDM Solutions` |

### Open Graph / Twitter Card (현재 설정)

| 항목 | 설정 여부 |
|---|---|
| `og:type`, `og:locale`, `og:site_name` | 설정 완료 |
| `og:title`, `og:description`, `og:url` | 설정 완료 |
| `twitter:card`, `twitter:title`, `twitter:description` | 설정 완료 |
| `og:image` | 미설정 (추후 `public/og-image.jpg` 추가 가능) |

SNS 공유 미리보기 이미지를 개선하려면 `public/og-image.jpg` 등을 추가한 뒤 `index.html`에 `og:image`, `twitter:image`를 연결하세요.

### `public/robots.txt`

현재 내용:

```text
User-agent: *
Allow: /

Sitemap: https://creta.한국/sitemap.xml
```

### `public/sitemap.xml`

현재는 단일 페이지 구조이므로 메인 URL 1개만 등록되어 있습니다.

| 항목 | 값 |
|---|---|
| URL | `https://creta.한국/` |
| changefreq | `monthly` |
| priority | `1.0` |
| lastmod | 사이트 내용 대폭 수정 시 날짜 갱신 권장 |

페이지가 추가되면 `public/sitemap.xml`에 `<url>` 항목을 추가하고, 네이버 서치어드바이저에 재제출하세요.

### favicon 변경

| 작업 | 위치 |
|---|---|
| favicon 파일 교체 | `public/favicon.svg` |
| 파일명 변경 시 경로 수정 | `index.html`의 favicon link |

### SEO 수정 시 주의사항

| 항목 | 주의 내용 |
|---|---|
| 네이버 인증 메타태그 | 배포 후 삭제하면 서치어드바이저 소유 확인이 해제될 수 있음 |
| canonical / og:url | 도메인 변경 시 `index.html`과 `sitemap.xml`을 함께 수정 |
| sitemap lastmod | 콘텐츠 대폭 수정 후 날짜 갱신 권장 |
| robots.txt | 전체 차단(`Disallow: /`) 설정 금지 |

---

## 10. 스타일과 반응형 관리

### 전역 CSS

전역 스타일은 `src/index.css`에서 관리합니다.

| 항목 | 위치 |
|---|---|
| Tailwind 로드 | `@import 'tailwindcss';` |
| 공통 폰트 | `--font-sans` |
| 브랜드 색상 | `--color-brand-*` |
| 스크롤 동작 | `html { scroll-behavior: smooth; }` |
| body 기본 색상/배경 | `body` |

### Tailwind 컬러 수정 위치

브랜드 컬러 토큰은 `src/index.css`의 `@theme` 안에 있습니다.

| 토큰 | 현재 용도 |
|---|---|
| `--color-brand-dark` | Footer, Hero 배경 계열 |
| `--color-brand-steel` | Partners 섹션 배경 |
| `--color-brand-accent` | 포인트 컬러 |
| `--color-brand-muted` | 보조 텍스트 |

현재 별도의 `tailwind.config.*` 파일은 없습니다. Tailwind CSS 4 방식으로 CSS 안에서 theme 토큰을 정의합니다.

### 반응형 수정 시 주의사항

| 체크 항목 | 설명 |
|---|---|
| Header 높이 | `Header.jsx`가 fixed 이므로 Hero의 `pt-16`, `sm:pt-[72px]`와 함께 확인 |
| 섹션 이동 | 각 섹션의 `scroll-mt-20`이 고정 Header와 맞는지 확인 |
| 모바일 메뉴 | `Header.jsx`의 `lg:hidden`, `lg:flex` 동작 확인 |
| 이미지 비율 | `aspect-*`, `object-cover` 변경 시 이미지 잘림 확인 |
| 카드 그리드 | `sm:`, `md:`, `lg:` breakpoint 변경 시 PC/모바일 모두 확인 |
| 긴 텍스트 | 버튼, 카드, 표 안에서 줄바꿈이 자연스러운지 확인 |

---

## 11. 공통 레이아웃 수정 위치

| 수정 범위 | 파일 |
|---|---|
| 상단 메뉴, 모바일 메뉴, 문의하기 버튼 | `src/components/Header.jsx` |
| 푸터 회사 정보, 연락처, 바로가기 | `src/components/Footer.jsx` |
| 섹션 제목 스타일 | `src/components/SectionHeading.jsx` |
| 스크롤 등장 애니메이션 | `src/components/FadeIn.jsx` |
| 섹션 순서 추가/삭제 | `src/pages/Home.jsx` |
| 전체 폰트/컬러 | `src/index.css` |

섹션을 새로 추가할 때는 보통 다음 순서로 작업합니다.

| 단계 | 작업 |
|---|---|
| 1 | `src/data/newSection.js` 생성 |
| 2 | `src/sections/NewSection.jsx` 생성 |
| 3 | `src/pages/Home.jsx`에 import 및 배치 |
| 4 | 메뉴가 필요하면 `src/data/site.js`의 `navLinks`에 추가 |
| 5 | 섹션 root에 `id`와 `scroll-mt-20` 지정 |

---

## 12. 배포 구조

이 프로젝트는 GitHub와 Vercel을 연결해 운영하는 정적 사이트 배포 흐름을 전제로 합니다.

| 서비스 | 역할 |
|---|---|
| GitHub | 소스 코드 저장, 변경 이력 관리, Vercel 배포 트리거 |
| Vercel | 소스 코드를 빌드하고 실제 웹사이트로 제공 |
| 도메인/DNS | 회사 도메인을 Vercel 배포 주소에 연결 |

### 필수 배포 정책 (이번 프로젝트 확정 사항)

| 항목 | 고정 운영 기준 |
|---|---|
| Vercel 가입 방식 | GitHub 계정으로 가입/로그인 |
| 배포 연동 저장소 | GitHub `main` 기준 자동 배포 |
| 도메인 구매처 | 가비아 |
| 도메인 | `creta.한국` |
| 도메인 등록 기간 | 5년 |
| 검색엔진 등록 | 네이버 서치어드바이저(네이버 로그인) |

위 정책이 바뀌면 본 README를 함께 갱신해야 인수인계 혼선을 줄일 수 있습니다.

### 실제 운영 URL 관리

| 항목 | 설명 |
|---|---|
| 운영 도메인 | 실제 고객이 접속하는 회사 홈페이지 주소 |
| Vercel 기본 주소 | *.vercel.app 형태의 기본 배포 주소 |
| DNS 연결 | 도메인 구매처에서 Vercel로 연결 |
| SSL(HTTPS) | Vercel에서 자동 적용 및 갱신 |

현재 운영 구조에서는 도메인 DNS가 올바르게 연결되어 있어야 실제 홈페이지 접속이 가능합니다.

도메인 또는 DNS 설정이 변경되면 아래 항목을 우선 확인하세요.

| 체크 항목 | 확인 내용 |
|---|---|
| 도메인 만료 여부 | 도메인 사용 기간 종료 여부 |
| DNS 레코드 | Vercel에서 안내한 값과 일치하는지 |
| www 연결 여부 | www 포함 주소 정상 연결 여부 |
| HTTPS 적용 여부 | 브라우저 자물쇠 표시 확인 |

도메인 문제 발생 시 홈페이지 코드가 정상이어도 사이트 접속이 불가능할 수 있습니다.

### GitHub → Vercel 자동 배포 흐름

| 순서 | 작업 |
|---:|---|
| 1 | 담당자가 로컬에서 파일 수정 |
| 2 | `npm run dev`로 화면 확인 |
| 3 | `npm run lint`, `npm run build`로 오류 확인 |
| 4 | Git commit 생성 |
| 5 | GitHub main 브랜치에 push |
| 6 | Vercel이 자동으로 새 배포 시작 |
| 7 | Vercel이 `npm run build` 실행 |
| 8 | 성공 시 운영 사이트에 반영 |

### Vercel 기본 설정

현재 코드 기준으로 별도 `vercel.json`은 없습니다. Vercel에서 Vite 프로젝트로 자동 감지하는 구성이 적합합니다.

| 설정 항목 | 값 |
|---|---|
| Framework Preset | Vite |
| Install Command | `npm install` 또는 Vercel 기본값 |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## 13. 배포 실패 시 확인 방법

| 증상 | 우선 확인 |
|---|---|
| Vercel 빌드 실패 | Vercel Deployments의 Build Logs |
| 로컬에서는 되는데 배포 실패 | `npm run build`를 로컬에서 재현 |
| 이미지가 안 보임 | import 경로, 파일명 대소문자, 한글 파일명 인코딩 확인 |
| 메뉴 클릭 이동이 안 됨 | `src/data/site.js`의 `navLinks.id`와 섹션 `id` 일치 여부 |
| 지도 표시 안 됨 | `src/data/location.js`의 `mapEmbedUrl` |
| 연락처가 다르게 표시됨 | `src/data/site.js`와 `src/data/location.js` 중복 주소 확인 |
| favicon이 안 바뀜 | 브라우저 캐시, `public/favicon.svg`, `index.html` 경로 확인 |
| CSS가 기대와 다름 | Tailwind class, `src/index.css`의 `@theme` 확인 |

배포 오류 확인 권장 순서:

| 순서 | 명령/작업 |
|---:|---|
| 1 | `npm install` |
| 2 | `npm run lint` |
| 3 | `npm run build` |
| 4 | Vercel Build Logs 확인 |
| 5 | 실패한 파일 경로와 import 경로 비교 |

---

## 14. 운영 시 주의사항

| 항목 | 주의 내용 |
|---|---|
| 연락처 | `site.js`의 전화, 이메일, 팩스가 실제 운영 정보와 맞는지 확인 |
| 주소 | `site.js`와 `location.js`에 주소가 나뉘어 있으므로 함께 점검 |
| 이미지 | 용량이 큰 원본 사진을 그대로 넣으면 초기 로딩이 느려질 수 있음 |
| 외부 링크 | 협력업체 홈페이지 링크가 변경되거나 폐쇄될 수 있으므로 정기 확인 |
| 지도 embed | 외부 지도 정책 또는 URL 변경 시 iframe 표시가 깨질 수 있음 |
| 한글 파일명 | macOS/Windows/Git/Vercel 환경에서 경로 문제가 없는지 배포 후 확인 |
| `dist/` | 빌드 산출물이므로 직접 수정하거나 Git에 올리지 않음 |
| `node_modules/` | 설치 산출물이므로 Git에 올리지 않음 |
| 도메인 만료일 | `creta.한국` 5년 등록 만료일을 반드시 사전 점검 (만료 후 연장 가능하나 추가 비용 가능성 있음) |

---

## 15. 계정 인수인계 체크리스트

운영 권한 인수인계 시 아래 항목을 확인하세요.

| 구분 | 체크 항목 |
|---|---|
| GitHub | 저장소 URL, 소유 계정/조직, main 브랜치 권한 |
| Vercel | 프로젝트 접근 권한, GitHub 연동 상태, 배포 로그 확인 권한 |
| 도메인 | 도메인 구매처, 로그인 계정, 만료일, 자동 갱신 여부 |
| 계정 정책 | Vercel은 GitHub 계정 로그인 기준으로 운영 중인지 확인 |
| 도메인 정책 | `creta.한국` 5년 등록 기준 유지 여부 및 차기 갱신 일정 |
| DNS | Vercel 연결 레코드, apex/www 도메인 설정 |
| 이메일 | 문의 이메일 계정 접근 가능 여부 |
| 이미지 원본 | 회사/설비/제품/로고 원본 파일 보관 위치 |
| 유지보수 담당 | 수정 요청 접수 채널, 배포 승인 담당자 |
| 비상 연락 | 배포 실패 또는 도메인 만료 시 연락할 담당자 |

---

## 16. 자주 수정하는 파일 TOP 10

| 순위 | 파일 | 수정 내용 | 난이도 |
|---:|---|---|---|
| 1 | **`src/data/site.js`** | 회사 기본 정보, 연락처, 메뉴 | 낮음 |
| 2 | **`src/data/about.js`** | 회사소개, 대표 인사말, 회사 개요 | 낮음 |
| 3 | **`src/data/equipment.js`** | 설비 목록, 사양, 사진 | 중간 |
| 4 | **`src/data/products.js`** | 제품소개 항목, 이미지 | 낮음 |
| 5 | **`src/data/location.js`** | 주소, 지도 링크, embed | 낮음 |
| 6 | **`src/data/partners.js`** | 협력업체, 로고, 링크 | 낮음 |
| 7 | **`src/data/history.js`** | 회사 연혁 | 낮음 |
| 8 | **`src/data/hero.js`** | 메인 문구, 히어로 이미지 | 낮음 |
| 9 | **`index.html`** | SEO 메타태그, OG/Twitter Card, favicon, 네이버 인증 | 중간 |
| 11 | **`public/robots.txt`** | 검색엔진 크롤링 허용, 사이트맵 경로 안내 | 낮음 |
| 12 | **`public/sitemap.xml`** | 검색엔진 제출용 URL 목록 | 낮음 |
| 10 | **`src/index.css`** | 전역 색상, 폰트, 기본 스타일 | 중간 |

---

## 17. 유지보수 난이도

| 작업 | 난이도 | 비고 |
|---|---|---|
| 텍스트 수정 | 낮음 | 대부분 `src/data/*.js` 수정 |
| 연락처/주소 수정 | 낮음 | `site.js`, `location.js` 함께 확인 |
| 이미지 교체 | 낮음~중간 | import 경로와 이미지 비율 확인 필요 |
| 설비/제품 카드 추가 | 중간 | 배열 항목 추가 및 이미지 import 필요 |
| 메뉴/섹션 추가 | 중간 | data, section, Home, navLinks 연결 필요 |
| 전체 디자인 변경 | 높음 | Tailwind class와 반응형 검토 필요 |
| SEO 메타 수정 | 낮음~중간 | `index.html`의 title/description/OG 태그 수정 |
| OG 공유 이미지 추가 | 중간 | `public/og-image.jpg` 추가 후 `index.html`에 `og:image` 연결 |
| sitemap 갱신 | 낮음 | `public/sitemap.xml`의 `lastmod` 또는 URL 항목 수정 |
| 배포 문제 해결 | 중간 | Vercel 로그와 로컬 build 재현 필요 |

---

## 18. 최종 점검 체크리스트

수정 후 배포 전 아래 항목을 확인하세요.

| 체크 | 항목 |
|---|---|
| [ ] | `npm run lint` 통과 |
| [ ] | `npm run build` 통과 |
| [ ] | Header 메뉴 클릭 시 각 섹션으로 이동 |
| [ ] | PC/모바일에서 Hero 이미지와 텍스트가 겹치지 않음 |
| [ ] | 회사 정보, 연락처, 주소가 최신 정보와 일치 |
| [ ] | 설비/제품/협력업체 이미지가 정상 표시 |
| [ ] | 지도 iframe과 네이버 지도 링크가 정상 동작 |
| [ ] | favicon이 브라우저 탭에 정상 표시 |
| [ ] | `https://creta.한국/robots.txt` 접속 확인 |
| [ ] | `https://creta.한국/sitemap.xml` 접속 확인 |
| [ ] | 네이버 서치어드바이저에 sitemap 제출 상태 확인 |
| [ ] | Vercel Deployments에서 배포 성공 확인 |
| [ ] | 실제 운영 도메인에서 최신 내용 반영 확인 |

---

## 19. 현재 코드 기준 검토 결과

이 README는 다음 파일과 구조를 기준으로 재작성되었습니다.

| 검토 항목 | 현재 README 반영 상태 |
|---|---|
| `package.json` scripts | 반영 완료 |
| 실제 사용 라이브러리 | 반영 완료 |
| React/Vite/Tailwind 버전 | 반영 완료 |
| `vite.config.js` 플러그인 구조 | 반영 완료 |
| `eslint.config.js` 존재 | 반영 완료 |
| 실제 pages/components/sections 구조 | 반영 완료 |
| 실제 `src/data/*.js` 구조 | 반영 완료 |
| 실제 `src/assets/` 이미지 구조 | 반영 완료 |
| `public/favicon.svg` 위치 | 반영 완료 |
| `public/images/` 현재 직접 미사용 상태 | 반영 완료 |
| SEO 메타 위치 | `index.html` 기준 반영 |
| `public/robots.txt` | 반영 완료 |
| `public/sitemap.xml` | 반영 완료 |
| Open Graph / Twitter Card | `index.html` 기준 반영 완료 (`og:image` 제외) |
| 네이버 사이트 인증 메타태그 | `index.html` 유지 중 |
| Global CSS 위치 | `src/index.css` 기준 반영 |
| Tailwind config 파일 없음 | 반영 완료 |
| 환경변수 없음 | 반영 완료 |
| Vercel 설정 파일 없음 | 반영 완료 |
| 배포 산출물 `dist/` | 반영 완료 |

