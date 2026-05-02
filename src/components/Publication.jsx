import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Publication.css';

function Publication() {
  const { t } = useLanguage();
  const [filterBy, setFilterBy] = useState('year'); // 'year' or 'type'

  // Placeholder data - you can customize this
  const publications = [
    {
      id: 1,
      title: 'Example Publication Title',
      authors: ['Author 1', 'Hyungwoo Song', 'Author 3'],
      venue: 'CHI 2024',
      year: 2024,
      type: 'Conference',
      isFirstAuthor: false,
      thumbnail: null, // Add thumbnail URL here
      links: {
        pdf: '#',
        arxiv: '#',
        demo: '#',
      },
      status: 'Nonarchival preprint',
    },
    // Add more publications here
  ];

  return (
    <div className="publication-container">
      {/* Main content area */}
      <div className="publication-main">
        {/* Filter options */}
        <div className="filter-section">
          <div className="filter-toggle">
            <button
              className={`filter-btn ${filterBy === 'year' ? 'active' : ''}`}
              onClick={() => setFilterBy('year')}
            >
              {t('byYear')}
            </button>
            <button
              className={`filter-btn ${filterBy === 'type' ? 'active' : ''}`}
              onClick={() => setFilterBy('type')}
            >
              {t('byType')}
            </button>
          </div>
        </div>

        {/* Publications list */}
        <div className="publications-list">
          {publications.map((pub) => (
            <article key={pub.id} className="publication-item">
              <div className="pub-thumbnail">
                {pub.thumbnail ? (
                  <img src={pub.thumbnail} alt={pub.title} />
                ) : (
                  <div className="thumbnail-placeholder">
                    <span>Preview</span>
                  </div>
                )}
              </div>
              <div className="pub-content">
                <h3 className="pub-title">
                  {pub.isFirstAuthor && <span className="first-author-dot">●</span>}
                  {pub.title}
                </h3>
                <p className="pub-authors">
                  {pub.authors.map((author, idx) => (
                    <span key={idx}>
                      {author === 'Hyungwoo Song' ? (
                        <strong>{author}</strong>
                      ) : (
                        author
                      )}
                      {idx < pub.authors.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <p className="pub-venue">
                  {pub.venue} • {pub.status}
                </p>
                <div className="pub-links">
                  {pub.links.pdf && (
                    <a href={pub.links.pdf} className="pub-link" target="_blank" rel="noopener noreferrer">
                      {t('pdf')}
                    </a>
                  )}
                  {pub.links.arxiv && (
                    <a href={pub.links.arxiv} className="pub-link" target="_blank" rel="noopener noreferrer">
                      arXiv
                    </a>
                  )}
                  {pub.links.demo && (
                    <a href={pub.links.demo} className="pub-link" target="_blank" rel="noopener noreferrer">
                      {t('demo')}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="publication-sidebar">
        {/* Legend */}
        <section className="sidebar-section">
          <div className="legend-item">
            <span className="first-author-dot">●</span>
            <span>{t('firstAuthor')}</span>
          </div>
        </section>

        {/* Publication statistics */}
        <section className="sidebar-section">
          <h3 className="sidebar-title">{t('publicationStats')}</h3>

          {/* Placeholder for statistics visualization */}
          <div className="stats-placeholder">
            <p className="stats-note">
              Add your publication statistics visualization here
            </p>
          </div>

          {/* Primary vs Co-authored grid */}
          <div className="authorship-grid">
            <div className="grid-label">{t('primaryAuthored')}</div>
            <div className="grid-label">{t('coAuthored')}</div>
            {/* Add year-by-year grid visualization here */}
          </div>
        </section>
      </aside>
    </div>
  );
}

export default Publication;
