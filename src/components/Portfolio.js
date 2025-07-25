import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                My projects showcase practical, scalable solutions built with Java, Spring Boot, React.js, and cloud technologies.
                Each one reflects my focus on clean architecture, secure APIs, and performance-driven development tailored to real-world needs.


              </p>
            </div>
            <div className="portfolio_list">
               <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                    className="background_image"
                    data-img-url= "/img/portfolio/11.png"
                    />
                     <div className="content">
                        <div className="details">
                          {/*} <span className="category">
                            <a href="#">YouTube</a>
                            </span>*/} 
                            <h3 className="title" style={{ fontSize: "24px", fontWeight: "bold" , fontcolor:"black" }}>
                              <a href="#">Campus Operation Management System</a>
                            </h3>
                              {/* <span className="view_project">
                                <a href="#">
                                  View Project <i className="icon-right-big" />
                                  </a>
                              </span>*/}
                          </div>
                        </div>
                                  
                                 {/* <div className="overlay" />
                                  <a
                                  className="devman_tm_full_link popup-youtube"
                                  href="https://www.youtube.com/watch?v=7e90gBu4pas"
                                  /> */}
                                  </div> 
            
                                  </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/img/portfolio/6.png"
                    />
                    <div className="content">
                      <div className="details">
                        {/* <span className="category">
                          <a href="#">vimeo</a>
                        </span>*/}
                        <h3 className="title">
                          <a href="#">
                            LLM-Based Netflix Success Predictor

                          </a>
                        </h3>
                        {/* <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>*/}
                      </div>
                    </div>
                    {/* <div className="overlay" />
                    <a
                      className="devman_tm_full_link popup-vimeo"
                      href="https://vimeo.com/337293658"
                    />*/}
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/img/portfolio/9.png"
                    />
                    <div className="content">
                      <div className="details">
                       {/*  <span className="category">
                          <a href="#">soundcloud</a>
                        </span> */}
                        <h3 className="title">
                          <a href="#">
                            Expense Tracker Web App
                          </a>
                        </h3>
                        {/* <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span> */}
                      </div>
                    </div>
                    {/* <div className="overlay" />
                    <a
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />*/}
                  </div>
                </li>
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
