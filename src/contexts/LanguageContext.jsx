import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header
    name: 'Hyungwoo Song',
    subtitle: 'HAI Researcher',
    home: 'Home',
    publication: 'Publication',
    cv: 'Curriculum Vitae',

    // Home - Hero Section
    currentPosition: 'Student at Dept. of Intelligence and Information',
    researchInterest: 'My research focuses on Human-AI Interaction (HAI), exploring how people interact with AI systems and how to design better AI experiences.',
    recentFocus: 'I am particularly interested in understanding user behaviors and designing AI systems that are more intuitive and accessible.',

    // Home - Research Approaches
    researchApproaches: 'Research Approaches',
    approach1: 'Understand',
    approach1Desc: 'Understanding user needs and behaviors through qualitative research',
    approach2: 'Design',
    approach2Desc: 'Designing solutions that address real problems',
    approach3: 'Implement',
    approach3Desc: 'Building prototypes and systems',
    approach4: 'Evaluate',
    approach4Desc: 'Evaluating effectiveness through user studies',

    // Home - Short Bio
    shortBio: 'Short Bio',
    present: 'Present',

    // Home - Contact
    contactMe: 'For collaboration or inquiries, please contact me at:',

    // Publication
    byYear: 'By Year',
    byType: 'By Type',
    firstAuthor: 'First/corresponding author',
    publicationStats: 'Publication Statistics',
    primaryAuthored: 'Primary-authored',
    coAuthored: 'Co-authored',

    // Publication Item
    pdf: 'PDF',
    demo: 'Demo video',
    preprint: 'Nonarchival preprint',

    // Common
    more: 'More →',
  },
  ko: {
    // Header
    name: '송형우',
    subtitle: 'HAI 연구자',
    home: '홈',
    publication: '논문',
    cv: '이력서',

    // Home - Hero Section
    currentPosition: '지능정보융합학과 학생',
    researchInterest: '저의 연구는 Human-AI Interaction (HAI)에 초점을 맞추고 있으며, 사람들이 AI 시스템과 어떻게 상호작용하는지, 그리고 더 나은 AI 경험을 어떻게 설계할 수 있는지를 탐구합니다.',
    recentFocus: '특히 사용자 행동을 이해하고 더 직관적이고 접근 가능한 AI 시스템을 설계하는 데 관심이 있습니다.',

    // Home - Research Approaches
    researchApproaches: '연구 방법론',
    approach1: '이해하기',
    approach1Desc: '질적 연구를 통해 사용자 요구사항과 행동 이해',
    approach2: '디자인하기',
    approach2Desc: '실제 문제를 해결하는 솔루션 디자인',
    approach3: '구현하기',
    approach3Desc: '프로토타입과 시스템 구축',
    approach4: '평가하기',
    approach4Desc: '사용자 연구를 통한 효과성 평가',

    // Home - Short Bio
    shortBio: '약력',
    present: '현재',

    // Home - Contact
    contactMe: '협업이나 문의사항은 아래 이메일로 연락주세요:',

    // Publication
    byYear: '연도별',
    byType: '유형별',
    firstAuthor: '제1저자/교신저자',
    publicationStats: '논문 통계',
    primaryAuthored: '제1저자',
    coAuthored: '공동저자',

    // Publication Item
    pdf: 'PDF',
    demo: '데모 영상',
    preprint: '비정식 논문',

    // Common
    more: '더 보기 →',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ko' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
