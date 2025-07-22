import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "I follow an Agile, results-focused work strategy—combining clean code, cloud-native design, and automation to deliver scalable and efficient software solutions.",
  },
  {
    title: "The Process of Our Work",
    details:
      "We blend clear planning, scalable system design, secure full stack development, continuous integration and deployment, and Agile methodology to deliver high impact cloud ready solutions.",
  },
  {
    title: "Core Value of Development",
    details:
      "Clean code, scalable architecture, security, performance, and continuous improvement form the core of my development approach, ensuring reliable and future-ready solutions.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "Driven by a strong work ethic, I consistently strive to exceed expectations through focus, discipline, and a commitment to continuous growth.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
