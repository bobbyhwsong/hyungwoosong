import './Projects.css';

function Projects() {
  // 프로젝트 데이터 예시 (실제 데이터로 교체하세요)
  const projects = [
    {
      id: 1,
      title: "프로젝트 제목 1",
      description: "이 프로젝트는 [문제]를 해결하기 위한 연구입니다. [방법론]을 사용하여 [결과]를 달성했습니다.",
      technologies: ["Python", "PyTorch", "React", "Node.js"],
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      },
      status: "completed",
      image: null
    },
    {
      id: 2,
      title: "프로젝트 제목 2",
      description: "이 연구는 [연구 주제]에 대한 새로운 접근 방식을 제시합니다. [핵심 기여]를 통해 기존 방법보다 우수한 성능을 보였습니다.",
      technologies: ["TensorFlow", "Docker", "AWS", "PostgreSQL"],
      links: {
        github: "#",
        paper: "#"
      },
      status: "completed",
      image: null
    },
    {
      id: 3,
      title: "진행 중인 프로젝트",
      description: "현재 진행 중인 연구 프로젝트입니다. [목표]를 달성하기 위해 [방법]을 개발하고 있습니다.",
      technologies: ["Python", "JAX", "Kubernetes"],
      links: {
        github: "#"
      },
      status: "in-progress",
      image: null
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.status}`}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <span>Project Screenshot</span>
                  </div>
                )}
                {project.status === 'in-progress' && (
                  <div className="project-badge">In Progress</div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links.paper && (
                    <a href={project.links.paper} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
