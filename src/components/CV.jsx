import './CV.css';

function CV() {
  const education = [
    {
      id: 1,
      degree: "Ph.D. in [Your Field]",
      school: "[University Name]",
      location: "[City, Country]",
      period: "2020 - Present",
      advisor: "Advisor: [Professor Name]",
      description: "연구 주제: [Your Research Topic]"
    },
    {
      id: 2,
      degree: "M.S. in [Your Field]",
      school: "[University Name]",
      location: "[City, Country]",
      period: "2018 - 2020",
      description: "논문: [Your Thesis Title]"
    },
    {
      id: 3,
      degree: "B.S. in [Your Field]",
      school: "[University Name]",
      location: "[City, Country]",
      period: "2014 - 2018",
      description: "GPA: X.XX/4.0"
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Research Assistant",
      organization: "[Lab/Institute Name]",
      location: "[University Name]",
      period: "2020 - Present",
      description: [
        "연구 프로젝트 수행 및 논문 작성",
        "데이터 수집 및 분석",
        "학부생 멘토링"
      ]
    },
    {
      id: 2,
      title: "Teaching Assistant",
      organization: "[Course Name]",
      location: "[University Name]",
      period: "2019 - 2020",
      description: [
        "강의 보조 및 실습 진행",
        "과제 채점 및 학생 지도",
        "Office Hours 운영"
      ]
    }
  ];

  const awards = [
    {
      id: 1,
      title: "수상 또는 장학금 이름",
      organization: "수여 기관",
      year: "2023"
    },
    {
      id: 2,
      title: "우수 논문상",
      organization: "학회 이름",
      year: "2022"
    }
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "C++", "R"]
    },
    {
      category: "ML/DL Frameworks",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "JAX"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Linux"]
    },
    {
      category: "Languages",
      items: ["한국어 (Native)", "English (Fluent)"]
    }
  ];

  return (
    <section id="cv" className="section cv-section">
      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>

        <div className="cv-download">
          <a href="#" className="download-button">
            📥 Download Full CV (PDF)
          </a>
        </div>

        {/* Education */}
        <div className="cv-block">
          <h3 className="cv-block-title">Education</h3>
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{edu.degree}</h4>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <p className="timeline-school">{edu.school}</p>
                  <p className="timeline-location">{edu.location}</p>
                  {edu.advisor && <p className="timeline-detail">{edu.advisor}</p>}
                  {edu.description && <p className="timeline-detail">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="cv-block">
          <h3 className="cv-block-title">Experience</h3>
          <div className="timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{exp.title}</h4>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-school">{exp.organization}</p>
                  <p className="timeline-location">{exp.location}</p>
                  <ul className="timeline-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Honors */}
        <div className="cv-block">
          <h3 className="cv-block-title">Awards & Honors</h3>
          <div className="awards-list">
            {awards.map((award) => (
              <div key={award.id} className="award-item">
                <div className="award-content">
                  <h4>{award.title}</h4>
                  <p>{award.organization}</p>
                </div>
                <div className="award-year">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="cv-block">
          <h3 className="cv-block-title">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-category">
                <h4>{skill.category}</h4>
                <div className="skill-items">
                  {skill.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
