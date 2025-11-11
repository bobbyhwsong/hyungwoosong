import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-description">
              연구 협력, 프로젝트 문의, 또는 기타 궁금하신 사항이 있으시면 언제든지 연락주세요!
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
                  <a href="#" target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">Connect with me</a>
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
            <h3>Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
            <p className="form-note">
              Note: 폼 제출 기능은 백엔드 연동이 필요합니다. 또는 이메일 링크로 대체할 수 있습니다.
            </p>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
