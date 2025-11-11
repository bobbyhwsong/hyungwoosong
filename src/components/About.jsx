import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <div className="image-placeholder">
              {/* 프로필 이미지를 여기에 추가하세요 */}
              <span>Your Photo</span>
            </div>
          </div>
          <div className="bio">
            <h3>PhD Candidate</h3>
            <p className="affiliation">
              {/* 대학교 및 학과 정보를 여기에 추가하세요 */}
              Department of [Your Department]<br />
              [Your University]
            </p>
            <div className="bio-text">
              <p>
                안녕하세요! 저는 [연구 분야]를 전공하는 박사과정 학생입니다.
              </p>
              <p>
                주요 연구 관심사는 [연구 주제 1], [연구 주제 2], [연구 주제 3] 등입니다.
                현재 [지도교수 이름] 교수님 연구실에서 [구체적인 연구 내용]에 대한 연구를 수행하고 있습니다.
              </p>
              <p>
                저의 목표는 [연구 목표 또는 비전]입니다.
              </p>
            </div>
            <div className="research-interests">
              <h4>Research Interests</h4>
              <ul>
                <li>연구 관심사 1</li>
                <li>연구 관심사 2</li>
                <li>연구 관심사 3</li>
                <li>연구 관심사 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
