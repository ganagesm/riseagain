import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Offerings</h2>
            {/* <h2> we'll work how you work.</h2> */}
            <p>Empowering women  to re-enter the professional Arena</p>
          </div>

          <div className="row blog-area">
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img src="/images/returnship-programs.jpg" alt="Returnship Programs" />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <h3>
                    Returnship Programs
                  </h3>
                  <p>
                    Our Returnship Programs offer tailored professional development, mentorship, and hands-on experience for women re-entering the workforce. Designed to bridge career breaks, these programs ease the transition back into a thriving professional environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-blog-post flex-fill">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img
                      src="/images/career-coaching.jpg" alt="Career Coaching and Guidance"
                    />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <h3>Career Coaching and Guidance</h3>
                  <p>Access personalized career coaching and guidance from expert coaches to reignite your professional journey. Benefit from one-on-one sessions, resume reviews, interview preparation, and skill-building workshops. Gain the tools and confidence for a successful career relaunch.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-blog-post flex-fill">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img
                      src="/images/skill-enhancement.jpg" alt="Skill Enhancement Workshops"
                    />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <h3>Skill Enhancement Workshops
                  </h3>
                  <p>Stay updated and enhance your skills through our specialized workshops. Covering technology proficiency and leadership training, our curated sessions ensure you’re equipped with the latest industry trends, preparing you for the competitive job market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-blog-post flex-fill">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img
                      src="/images/networking-and-community-support.jpg" alt="Networking and Community Support"
                    />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <h3>Networking and Community Support</h3>
                  <p>Join a vibrant community of retur
                    ning professionals to access exclusive networking events, peer support groups, and forums. Connect, share experiences, and expand your professional network. Forge meaningful connections with like-minded individuals and industry experts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-blog-post flex-fill">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img
                      src="/images/employer-partnerships.jpg"
                      alt="Employer Partnerships and Opportunities"
                    />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <h3>Employer Partnerships and Opportunities
                  </h3>
                  <p>Collaborate with leading companies committed to diversity and inclusion. Access our network of employers offering return-to-work opportunities, including job openings, internships, and returnship placements tailored to your skills and aspirations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-blog-post flex-fill">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <img
                      src="/images/return-to-work-resources.jpg"
                      alt="Return-to-Work Resources and Tools"
                    />
                  </Link>
                </div>
                <div className="entry-post-content">
                  <h3>Return-to-Work Resources and Tools
                  </h3>
                  <p>Access a range of valuable resources and tools tailored to facilitate your return to the workforce. Benefit from online resources, industry insights, and best practices, along with childcare support and flexible work arrangements. Receive comprehensive assistance at every step of your journey.
                  </p>
                </div>
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
      </section >
    </>
  );
};

export default Services;
