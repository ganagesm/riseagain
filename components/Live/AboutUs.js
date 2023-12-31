import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="pt-0 about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src="/images/about/about3.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <h2>Chose your own engagement model and onboard your perfect team.</h2>
                <p>
                  
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Classification
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Examples
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Extensions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Extraction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Selection
                    </span>
                  </li>
                </ul>

                <Link href="/about-two" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
