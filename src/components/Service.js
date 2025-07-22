import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Northern Illinois University, Chicago",
    role:"Graduate Assistant – Data & Platform Ops",
    icon: "img/svg/cpu.svg",
    year:"  May 2024 – May 2025",
    img: "img/service/1.jpg",
    description: [
      "Ganesh is a top-tier web design agency known for creating visually stunning and results-driven websites. Our award-winning team builds sites that reflect your brand, boost conversions, and increase revenue .",
      "In today’s digital-first world, your website is your brand’s first impression—Ganesh ensures it’s a powerful one. With over 50 design awards and $2.4B+ in client-driven revenue, we craft custom websites that don’t just look great—they grow your business"
    ],
  },
  {
    name: "Tata Consultancy Services, Hyderabad" ,
    role:"System Engineer – Salesforce & Web Development ",
    period:"Oct 2021 – Jul 2023  ",
    icon: "img/svg/circle.svg",
    img: "img/service/2.jpg",
    description: [
      "Re-engineered monolithic Salesforce CRM into Spring Boot microservices with MongoDB, boosting scalability and reducing downtime by 40%. Automated CRM workflows via custom APIs, improved UI with modular React + Redux, and optimized deployment using Jenkins CI/CD.",
      "Integrated third-party APIs for real-time sync, added unit testing for reliability, improved reporting performance, and delivered features efficiently through Agile with Jira."
    ],
  },
  {
    name: "Bharat Heavy Electrical Ltd, Vizag",
    role:"Data Analyst Intern – Production Insights",
    period:" May 2019 – May 2020 ",
    icon: "img/svg/web.svg",
    img: "img/service/3.jpg",
    description: [
      "Built a Flask dashboard to track KPIs in real-time, cutting reporting time by 35%.",
       "Automated data cleaning and ETL with Python, Pandas, and SQL to improve accuracy and reduce manual work.",
       "Used SQL-based EDA to identify cost-saving opportunities, automated visual reports for executives, and set up Git-based version control for scalable workflows.",
        "Enabled better team collaboration with cross-functional data pipelines and a reusable SQL query library."
    ],
  },
  {
  name: "Freelance Full Stack Developer – Remote ",
  icon: "img/svg/download.svg",
  img: "img/service/4.jpg",
  period:"May 2020 - Present",
  description: [
    "Developed full-stack web applications for small businesses using Spring Boot, React.js, and MongoDB to digitalize operations and improve client engagement.",
    "Built responsive user interfaces and secure RESTful APIs with JWT authentication, enabling clients to manage their platforms efficiently.",
    "Deployed cloud-ready solutions using AWS EC2 and S3, integrating CI/CD pipelines with GitHub Actions for continuous delivery.",
    "Provided consulting on architecture, scalability, and performance, while maintaining code quality through unit testing and Git-based version control."
  ],
}
 
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul  className="service_grid">
                {serviceData.map((service, i) => (
                  <li
                    className="service_item"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
            
                      <h3 className="title" style={{fontSize: "30px", color: "#ffffff", fontWeight: "500"}}>{service.name}</h3>
                      <h3 className="role" style={{fontSize: "25px", color: "#ffffff", fontWeight: "200"}}>{service.role}</h3>
                      <p className="period"  style={{ fontSize: "20px", color: "#faefefff", fontWeight: "300" }}>{service.period || service.year}</p>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      
                      {/*<a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />*/}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
