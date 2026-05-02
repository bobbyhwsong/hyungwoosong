import { useLanguage } from '../context/LanguageContext';
import './About.css';

function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Me',
      photoAlt: 'Your Photo',
      position: 'PhD Candidate',
      department: 'Department of [Your Department]',
      university: '[Your University]',
      bio1: 'Hello! I am a PhD candidate majoring in [Your Research Field].',
      bio2: 'My main research interests include [Research Topic 1], [Research Topic 2], [Research Topic 3], etc. I am currently conducting research on [Specific Research Content] in [Advisor Name] Professor\'s laboratory.',
      bio3: 'My goal is [Your Research Goal or Vision].',
      interestsTitle: 'Research Interests',
      interests: [
        'Research Interest 1',
        'Research Interest 2',
        'Research Interest 3',
        'Research Interest 4'
      ]
    },
    ko: {
      title: '소개',
      photoAlt: '프로필 사진',
      position: '박사과정',
      department: '[학과명]',
      university: '[대학교명]',
      bio1: '안녕하세요! 저는 [연구 분야]를 전공하는 박사과정 학생입니다.',
      bio2: '주요 연구 관심사는 [연구 주제 1], [연구 주제 2], [연구 주제 3] 등입니다. 현재 [지도교수 이름] 교수님 연구실에서 [구체적인 연구 내용]에 대한 연구를 수행하고 있습니다.',
      bio3: '저의 목표는 [연구 목표 또는 비전]입니다.',
      interestsTitle: '연구 관심사',
      interests: [
        '연구 관심사 1',
        '연구 관심사 2',
        '연구 관심사 3',
        '연구 관심사 4'
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <div className="about-content">
          <div className="profile-image">
            <div className="image-placeholder">
              <span>{t.photoAlt}</span>
            </div>
          </div>
          <div className="bio">
            <h3>{t.position}</h3>
            <p className="affiliation">
              {t.department}<br />
              {t.university}
            </p>
            <div className="bio-text">
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>
              <p>{t.bio3}</p>
            </div>
            <div className="research-interests">
              <h4>{t.interestsTitle}</h4>
              <ul>
                {t.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
