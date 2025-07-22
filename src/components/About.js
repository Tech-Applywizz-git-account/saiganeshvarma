const aboutData = {
  designation: "Developer",
  title: "I Develop Application that Help People",
  text: [
    "Highly skilled and results-driven Full Stack Java Developer with over 3 years of professional experience in designing, developing, and deploying scalable enterprise applications using Java, Spring Boot, Microservices, and React.js.",
     "Proficient in building RESTful APIs, implementing security protocols using Spring Security and JWT, and deploying cloud-native solutions on AWS and Azure.",
     "Experienced in Agile/Scrum environments, CI/CD pipelines with Jenkins and GitHub Actions, and containerization using Docker. ",
     "Adept at backend optimization, database design with MySQL, PostgreSQL, and MongoDB, and real-time data integration.",
     "Proven track record in delivering high-performance software solutions that align with business goals and industry best practices.",
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/joomla.svg" },
    { name: "wp", icon: "img/svg/wp.svg" },
    { name: "drupal", icon: "img/svg/drupal.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/about/3.png" />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/4.png"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
