import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navigation.css';

function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const { language, toggleLanguage } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'research', 'projects', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navText = {
    en: {
      logo: 'Portfolio',
      about: 'About',
      research: 'Research',
      projects: 'Projects',
      cv: 'CV',
      contact: 'Contact'
    },
    ko: {
      logo: '포트폴리오',
      about: '소개',
      research: '연구',
      projects: '프로젝트',
      cv: '이력서',
      contact: '연락처'
    }
  };

  const t = navText[language];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">{t.logo}</div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li>
              <button
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
              >
                {t.about}
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'research' ? 'active' : ''}
                onClick={() => scrollToSection('research')}
              >
                {t.research}
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => scrollToSection('projects')}
              >
                {t.projects}
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'cv' ? 'active' : ''}
                onClick={() => scrollToSection('cv')}
              >
                {t.cv}
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                {t.contact}
              </button>
            </li>
          </ul>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'en' ? '한국어' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
