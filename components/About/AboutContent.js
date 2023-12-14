import React from "react";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/about1.jpg" alt="image" />
                <img src="/images/about/about2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Welcome to Rise Again - Empowering Women in IT and Beyond</h2>
                <p> At Rise Again, we believe that every woman deserves the chance to rise, grow, and succeed in her career. Our mission is to empower women by providing exclusive job opportunities in both the IT and non-IT sectors. We are not just a Staffing Firm we are a movement dedicated to women’s professional growth and success. </p>

              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Search Millions of Jobs
                  </h3>
                  <p>
                    IT and Beyond: Whether you're looking for a career in Information Technology or exploring opportunities outside the tech world, we have a diverse range of job options to match your skills and aspirations.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Endless Possibilities
                  </h3>
                  <p>
                    From software development to project management, from marketing to finance, we connect you with exciting roles across various industries.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Dedicated Support
                  </h3>
                  <p>
                    Our team is here to support you throughout your job search journey. We provide guidance, resources, and training to help you achieve your professional goals.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Inclusive Partnerships

                  </h3>
                  <p>
                  We collaborate with organizations that share our vision of women's empowerment. These partnerships create a network of opportunities for you to thrive in your chosen field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
