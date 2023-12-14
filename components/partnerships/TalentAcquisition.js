import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area ptb-110">
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
                <h2>Transforming Talent Acquisition: Our Returnship Initiatives
                </h2>
                <p>Our innovative returnship programs are revolutionizing the approach to talent recruitment. These initiatives empower leaders to enhance diversity within their organizations while aligning with strategic business objectives, all by tapping into a pool of highly skilled technical professionals who are returning to the workforce.
                </p>
                <p>By leveraging these initiatives, companies can access a unique talent pool that is traditionally underrepresented in conventional hiring pipelines. These programs not only reshape the talent landscape but also create a win-win scenario for both organizations and experienced individuals re-entering the workforce.
                </p>
                <p>Through our returnship programs, we bridge the gap between exceptional, experienced professionals and the companies seeking their expertise. This transformative approach offers a powerful solution for companies aiming to enrich their workforce and meet their business goals, all while fostering an inclusive and dynamic workplace.

                </p>
                <p>Join us in reimagining talent acquisition and empowering highly qualified technical individuals as they return to the professional sphere. Together, we are reshaping the future of hiring.
                </p>
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

export default About;
