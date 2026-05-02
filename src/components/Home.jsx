import { useLanguage } from '../contexts/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguage();

  // Placeholder data - you can customize this
  const bioItems = [
    { year: '2024 - Present', description: 'Student, Dept. of Intelligence and Information' },
    // Add more bio items here
  ];

  return (
    <div className="home-container">
      {/* Main content area */}
      <div className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="profile-photo">
              <div className="photo-placeholder">
                {/* Replace with actual photo */}
                <span>Photo</span>
              </div>
            </div>
            <div className="hero-text">
              <p className="hero-position">
                {t('currentPosition')}
              </p>
              <p className="hero-description">
                {t('researchInterest')}
              </p>
              <p className="hero-focus">
                {t('recentFocus')}
              </p>
            </div>
          </div>
        </section>

        {/* Research Approaches Section */}
        <section className="research-approaches">
          <h2 className="section-title">{t('researchApproaches')}</h2>
          <div className="approaches-grid">
            <div className="approach-item">
              <div className="approach-number">1</div>
              <h3 className="approach-title">{t('approach1')}</h3>
              <p className="approach-desc">{t('approach1Desc')}</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">2</div>
              <h3 className="approach-title">{t('approach2')}</h3>
              <p className="approach-desc">{t('approach2Desc')}</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">3</div>
              <h3 className="approach-title">{t('approach3')}</h3>
              <p className="approach-desc">{t('approach3Desc')}</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">4</div>
              <h3 className="approach-title">{t('approach4')}</h3>
              <p className="approach-desc">{t('approach4Desc')}</p>
            </div>
          </div>

          {/* Contact box */}
          <div className="contact-box">
            <p>{t('contactMe')}</p>
            <a href="mailto:your.email@example.com" className="email-link">
              your.email@example.com
            </a>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="home-sidebar">
        {/* Short Bio */}
        <section className="sidebar-section">
          <h3 className="sidebar-title">{t('shortBio')}</h3>
          <div className="bio-timeline">
            {bioItems.map((item, index) => (
              <div key={index} className="bio-item">
                <div className="bio-year">{item.year}</div>
                <div className="bio-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Add more sidebar sections here as needed */}
      </aside>
    </div>
  );
}

export default Home;
