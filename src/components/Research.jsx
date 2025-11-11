import './Research.css';

function Research() {
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

  return (
    <section id="research" className="section research-section">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>

        <div className="research-overview">
          <p className="overview-text">
            저의 연구는 [주요 연구 분야]에 초점을 맞추고 있습니다.
            특히 [구체적인 연구 주제]와 관련된 문제를 해결하는 데 관심이 있습니다.
          </p>
        </div>

        <div className="publications-list">
          {publications.map((pub) => (
            <div key={pub.id} className={`publication-item ${pub.status}`}>
              <div className="pub-header">
                <span className="pub-type">{pub.type}</span>
                {pub.status === 'in-progress' && (
                  <span className="pub-status">In Progress</span>
                )}
              </div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-venue">{pub.venue}</p>
              {Object.keys(pub.links).length > 0 && (
                <div className="pub-links">
                  {pub.links.paper && (
                    <a href={pub.links.paper} className="pub-link" target="_blank" rel="noopener noreferrer">
                      📄 Paper
                    </a>
                  )}
                  {pub.links.code && (
                    <a href={pub.links.code} className="pub-link" target="_blank" rel="noopener noreferrer">
                      💻 Code
                    </a>
                  )}
                  {pub.links.slides && (
                    <a href={pub.links.slides} className="pub-link" target="_blank" rel="noopener noreferrer">
                      📊 Slides
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
            <div className="stat-label">Publications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{publications.filter(p => p.status === 'in-progress').length}</div>
            <div className="stat-label">In Progress</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
