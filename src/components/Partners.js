const Partners = ({ dark }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    src={`img/partners/${dark ? "light" : "dark"}/vignan-logo.png`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" href="https://vignanits.ac.in/" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    src={`img/partners/${dark ? "light" : "dark"}/OIP.jpeg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    src={`img/partners/${dark ? "light" : "dark"}/tata.jpeg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" href="https://www.tata.com/business/tcs" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    src={`img/partners/${dark ? "light" : "dark"}/bhel.jpeg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" href="https://www.bhel.com/" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
