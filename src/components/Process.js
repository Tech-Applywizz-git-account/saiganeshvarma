import Accordion from "./Accordion";

const Process = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="left">
              <div className="devman_tm_main_title" data-text-align="left">
                <span>Driving Scalable Digital Solutions</span>
                <h3>Building Secure, Cloud-Ready Web Applications</h3>
                <p>
                  With hands-on experience in full-stack development and CRM
                transformation, I design and deploy robust applications using
                Spring Boot, React.js, MongoDB, and cloud tools like AWS. I
                prioritize performance, automation, and user-centric interfaces
                to solve real-world business challenges.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="acc_holder">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
