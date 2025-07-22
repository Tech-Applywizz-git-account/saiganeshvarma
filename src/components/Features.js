const features_list = [
  {
    title: "Dedication",
    icon: "img/svg/design.svg",
    text: "Dedicated to building high-quality, scalable software through continuous learning, hands-on problem solving, and a commitment to excellence.",

  },
  {
    title: "Smart Work",
    icon: "img/svg/development.svg",
    text: "I practice smart work by combining automation, scalable design, and strategic problem-solving to deliver efficient, high-impact software solutions.",
  },
  {
    title: "Intelligence",
    icon: "img/svg/landing.svg",
    text: "Driven by technical intelligence, I craft data-informed, cloud-native solutions that merge strategic thinking with deep system understanding.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
