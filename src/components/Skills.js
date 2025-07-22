import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
  <div className="devman_tm_section">
    <div className="devman_tm_skills">
      <div className="container">
        <div className="devman_tm_main_title" data-text-align="center">
          <span>My Skills</span>
          <h3>I Develop Skills Regularly</h3>
          <p>
            My skills reflect a balance between backend engineering, frontend development, cloud infrastructure, and modern DevOps practices.
          </p>
        </div>
        <div className="skills_wrapper">
          <div className="left">
            <div className="dodo_progress">
              <div className="skillsInner___ progress_inner" data-value={95} data-color="#142eb5">
                <span>
                  <span className="label">Java & Spring Boot</span>
                  <span className="number">95%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={90} data-color="#142eb5">
                <span>
                  <span className="label">React.js & JavaScript</span>
                  <span className="number">90%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={90} data-color="#142eb5">
                <span>
                  <span className="label">REST APIs & Microservices</span>
                  <span className="number">90%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={85} data-color="#142eb5">
                <span>
                  <span className="label">AWS Cloud</span>
                  <span className="number">85%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={85} data-color="#142eb5">
                <span>
                  <span className="label">SQL & PostgreSQL</span>
                  <span className="number">85%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="dodo_progress">
              <div className="skillsInner___ progress_inner" data-value={80} data-color="#142eb5">
                <span>
                  <span className="label">Docker & Containerization</span>
                  <span className="number">80%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={80} data-color="#142eb5">
                <span>
                  <span className="label">CI/CD (Jenkins & GitHub Actions)</span>
                  <span className="number">80%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={75} data-color="#142eb5">
                <span>
                  <span className="label">MongoDB & NoSQL</span>
                  <span className="number">75%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={85} data-color="#142eb5">
                <span>
                  <span className="label">Spring Security & JWT</span>
                  <span className="number">85%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>

              <div className="skillsInner___ progress_inner" data-value={80} data-color="#142eb5">
                <span>
                  <span className="label">Agile & Scrum</span>
                  <span className="number">80%</span>
                </span>
                <div className="background">
                  <div className="bar"><div className="bar_in" /></div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* skills_wrapper end */}
      </div>
    </div>
  </div>
);
}
export default Skills;
