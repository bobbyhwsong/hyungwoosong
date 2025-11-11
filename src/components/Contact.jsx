import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact',
      getInTouch: 'Get In Touch',
      description: 'Feel free to reach out for research collaboration, project inquiries, or any other questions!',
      viewProfile: 'View Profile',
      connectWith: 'Connect with me',
      sendMessage: 'Send a Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      submitButton: 'Send Message',
      formNote: 'Note: Form submission requires backend integration or can be replaced with an email link.',
      copyright: 'All rights reserved.',
      builtWith: 'Built with React & Vite'
    },
    ko: {
      title: '연락처',
      getInTouch: '연락하기',
      description: '연구 협력, 프로젝트 문의, 또는 기타 궁금하신 사항이 있으시면 언제든지 연락주세요!',
      viewProfile: '프로필 보기',
      connectWith: '연결하기',
      sendMessage: '메시지 보내기',
      name: '이름',
      namePlaceholder: '이름을 입력하세요',
      email: '이메일',
      emailPlaceholder: 'your.email@example.com',
      subject: '제목',
      subjectPlaceholder: '무엇에 관한 내용인가요?',
      message: '메시지',
      messagePlaceholder: '메시지를 입력하세요...',
      submitButton: '메시지 보내기',
      formNote: '참고: 폼 제출 기능은 백엔드 연동이 필요합니다. 또는 이메일 링크로 대체할 수 있습니다.',
      copyright: '모든 권리 보유.',
      builtWith: 'React & Vite로 제작'
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.getInTouch}</h3>
            <p className="contact-description">
              {t.description}
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:your.email@university.edu">your.email@university.edu</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🎓</div>
                <div className="contact-details">
                  <h4>Google Scholar</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">{t.viewProfile}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">{t.connectWith}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">@yourusername</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🐦</div>
                <div className="contact-details">
                  <h4>Twitter / X</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">@yourusername</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Office</h4>
                  <p>
                    [Building Name], Room [Number]<br />
                    [Department Name]<br />
                    [University Name]<br />
                    [City, Country]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>{t.sendMessage}</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.namePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t.messagePlaceholder}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                {t.submitButton}
              </button>
            </form>
            <p className="form-note">
              {t.formNote}
            </p>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} [Your Name]. {t.copyright}</p>
          <p>{t.builtWith}</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
