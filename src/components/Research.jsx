import { useLanguage } from '../context/LanguageContext';
import './Research.css';

function Research() {
  const { language } = useLanguage();

  // 논문 데이터 예시 (실제 데이터로 교체하세요)
  const publications = [
    {
      id: 1,
      title: "논문 제목을 여기에 작성하세요",
      authors: "저자1, 저자2, 귀하의 이름, 저자3",
      venue: "학회/저널 이름, 2024",
      type: "Conference",
      links: {
        paper: "#",
        code: "#",
        slides: "#"
      },
      status: "published"
    },
    {
      id: 2,
      title: "두 번째 논문 제목",
      authors: "저자1, 귀하의 이름, 저자2",
      venue: "저널 이름, 2023",
      type: "Journal",
      links: {
        paper: "#",
        code: "#"
      },
      status: "published"
    },
    {
      id: 3,
      title: "진행 중인 연구 제목",
      authors: "귀하의 이름, 공동연구자",
      venue: "In Preparation",
      type: "Working Paper",
      links: {},
      status: "in-progress"
    }
  ];

  const content = {
    en: {
      title: 'Research & Publications',
      overview: 'My research focuses on [Main Research Field]. I am particularly interested in solving problems related to [Specific Research Topics].',
      inProgress: 'In Progress',
      paper: 'Paper',
      code: 'Code',
      slides: 'Slides',
      statsPublications: 'Publications',
      statsInProgress: 'In Progress'
    },
    ko: {
      title: '연구 & 출판',
      overview: '저의 연구는 [주요 연구 분야]에 초점을 맞추고 있습니다. 특히 [구체적인 연구 주제]와 관련된 문제를 해결하는 데 관심이 있습니다.',
      inProgress: '진행 중',
      paper: '논문',
      code: '코드',
      slides: '슬라이드',
      statsPublications: '출판 논문',
      statsInProgress: '진행 중'
    }
  };

  const t = content[language];

  return (
    <section id="research" className="section research-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="research-overview">
          <p className="overview-text">
            {t.overview}
          </p>
        </div>

        <div className="publications-list">
          {publications.map((pub) => (
            <div key={pub.id} className={`publication-item ${pub.status}`}>
              <div className="pub-header">
                <span className="pub-type">{pub.type}</span>
                {pub.status === 'in-progress' && (
                  <span className="pub-status">{t.inProgress}</span>
                )}
              </div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-venue">{pub.venue}</p>
              {Object.keys(pub.links).length > 0 && (
                <div className="pub-links">
                  {pub.links.paper && (
                    <a href={pub.links.paper} className="pub-link" target="_blank" rel="noopener noreferrer">
                      📄 {t.paper}
                    </a>
                  )}
                  {pub.links.code && (
                    <a href={pub.links.code} className="pub-link" target="_blank" rel="noopener noreferrer">
                      💻 {t.code}
                    </a>
                  )}
                  {pub.links.slides && (
                    <a href={pub.links.slides} className="pub-link" target="_blank" rel="noopener noreferrer">
                      📊 {t.slides}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="research-stats">
          <div className="stat-item">
            <div className="stat-number">{publications.filter(p => p.status === 'published').length}</div>
            <div className="stat-label">{t.statsPublications}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{publications.filter(p => p.status === 'in-progress').length}</div>
            <div className="stat-label">{t.statsInProgress}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
