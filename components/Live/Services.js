import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Offerings</h2>
            {/* <h2> we'll work how you work.</h2> */}
            <p>Empowering women  to re-enter the professional Arena</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="icon">
                  <img
                    src="/images/software-engineer.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h3 style={{ color: "darkgray" }}>
                  Returnship Programs
                </h3>
                <p>
                  Our Returnship Programs offer tailored professional development, mentorship, and hands-on experience for women re-entering the workforce. Designed to bridge career breaks, these programs ease the transition back into a thriving professional environment.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="icon">
                  <img
                    src="/images/offshore.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h3 style={{ color: "darkgray" }}>Career Coaching and Guidance</h3>
                <p>Access personalized career coaching and guidance from expert coaches to reignite your professional journey. Benefit from one-on-one sessions, resume reviews, interview preparation, and skill-building workshops. Gain the tools and confidence for a successful career relaunch.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="icon">
                  <img
                    src="/images/clipboard-list.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h3 style={{ color: "darkgray" }}>Skill Enhancement Workshops
                </h3>
                <p>Stay updated and enhance your skills through our specialized workshops. Covering technology proficiency and leadership training, our curated sessions ensure you’re equipped with the latest industry trends, preparing you for the competitive job market.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="icon">
                  <img
                    src="/images/clipboard-list.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h3 style={{ color: "darkgray" }}>Networking and Community Support

                </h3>
                <p>Join a vibrant community of returning professionals to access exclusive networking events, peer support groups, and forums. Connect, share experiences, and expand your professional network. Forge meaningful connections with like-minded individuals and industry experts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="icon">
                  <img
                    src="/images/clipboard-list.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h3 style={{ color: "darkgray" }}>Employer Partnerships and Opportunities


                </h3>
                <p>Collaborate with leading companies committed to diversity and inclusion. Access our network of employers offering return-to-work opportunities, including job openings, internships, and returnship placements tailored to your skills and aspirations.


                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="icon">
                  <img
                    src="/images/clipboard-list.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h3 style={{ color: "darkgray" }}>Return-to-Work Resources and Tools
                </h3>
                <p>Access a range of valuable resources and tools tailored to facilitate your return to the workforce. Benefit from online resources, industry insights, and best practices, along with childcare support and flexible work arrangements. Receive comprehensive assistance at every step of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
