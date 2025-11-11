# 박사과정 포트폴리오 웹사이트

React와 Vite로 구축한 박사과정 학생을 위한 현대적인 포트폴리오 웹사이트입니다.

## 주요 기능

- ✨ **About**: 자기소개 및 연구 분야 소개
- 📚 **Research & Publications**: 논문 및 연구 업적 전시
- 🚀 **Projects**: 주요 프로젝트 포트폴리오
- 📄 **CV**: 학력, 경력, 수상 내역 등 이력서
- 📧 **Contact**: 연락처 및 소셜 미디어 링크
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- 🎨 **현대적인 UI/UX**: 부드러운 스크롤 및 인터랙션

## 기술 스택

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: CSS3 (Flexbox, Grid)
- **Font**: Inter (Google Fonts)

## 시작하기

### 필수 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 커스터마이징 가이드

### 1. 개인 정보 수정

각 섹션의 컴포넌트 파일을 수정하여 본인의 정보로 업데이트하세요:

- `src/components/About.jsx` - 자기소개 및 연구 관심사
- `src/components/Research.jsx` - 논문 및 출판물
- `src/components/Projects.jsx` - 프로젝트 목록
- `src/components/CV.jsx` - 학력, 경력, 수상 내역, 스킬
- `src/components/Contact.jsx` - 연락처 및 소셜 링크

### 2. 프로필 이미지 추가

`src/components/About.jsx`의 이미지 플레이스홀더를 본인의 사진으로 교체:

```jsx
<div className="image-placeholder">
  <img src="/path/to/your/photo.jpg" alt="Your Name" />
</div>
```

### 3. 네비게이션 로고 변경

`src/components/Navigation.jsx`에서 로고 텍스트를 수정:

```jsx
<div className="nav-logo">Your Name</div>
```

### 4. 색상 테마 변경

`src/components/*.css` 파일에서 색상 값을 수정하여 원하는 테마를 적용할 수 있습니다.

## 배포 가이드

### Vercel 배포

1. [Vercel](https://vercel.com)에 가입
2. GitHub 레포지토리 연결
3. 자동 빌드 및 배포

### Netlify 배포

1. [Netlify](https://netlify.com)에 가입
2. `npm run build` 실행
3. `dist` 폴더 드래그 앤 드롭

### GitHub Pages 배포

```bash
# vite.config.js에 base 경로 추가
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})

# 빌드 후 dist 폴더를 gh-pages 브랜치에 푸시
npm run build
```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Navigation.jsx   # 네비게이션 바
│   ├── About.jsx        # About 섹션
│   ├── Research.jsx     # Research 섹션
│   ├── Projects.jsx     # Projects 섹션
│   ├── CV.jsx          # CV 섹션
│   ├── Contact.jsx      # Contact 섹션
│   └── *.css           # 각 컴포넌트의 스타일
├── App.jsx             # 메인 앱 컴포넌트
├── App.css             # 전역 앱 스타일
├── index.css           # 전역 기본 스타일
└── main.jsx            # 앱 진입점
```

## 라이선스

이 프로젝트는 MIT 라이선스로 배포됩니다. 자유롭게 사용, 수정, 배포할 수 있습니다.

## 문의

궁금한 점이 있으시면 이슈를 등록해주세요.
