import React from "react";
import Link from "next/link";

const Founder = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-50 pb-50">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/priyanka-joshi-768x814.jpeg" alt="Team Image" />

                  <div className="social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Priyanka Joshi</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="why-choose-us-content">
                <h3>Message from our Founder Priyanka Joshi
                </h3>
                <p>Dear Resilient Women, </p>
                <p>Rise Again is not just another company; it’s a visionary platform dedicated to empowering women in the IT and non-IT sectors. It’s a place where we believe in the limitless potential of women and work tirelessly to unlock opportunities that allow you to achieve your career aspirations.
                </p>
                <p>I extend a heartfelt welcome to each and every one of you who are embarking on a remarkable journey of re-entering the workforce after a career break. Your decision to reclaim your professional path is a testament to your resilience, ambition, and unwavering spirit.
                </p>
                <p>At Rise Again, we understand that life is filled with diverse journeys, and taking a break from your career is a choice that can be driven by numerous factors. We applaud your strength in making this choice and your determination to return to the workforce.</p>
                <p>Our commitment at Rise Again is to provide a supportive and inclusive environment where you can reignite your career, chase your ambitions, and achieve your fullest potential. We believe in the power of second chances and the immense value you bring to the table.</p>
                <p>As you embark on this new chapter, remember that your experiences, skills, and unique perspectives are your strengths. They are what set you apart and make you an invaluable asset to any team or organization.</p>
                <p>We are here to provide you with the guidance, resources, and opportunities needed to make your re-entry a smooth and successful one. Our mission is to create a space where you can thrive, learn, and grow, not just professionally but personally as well.</p>
                <p>Your journey may have had its twists and turns, but your destination is one filled with endless opportunities and possibilities. Rise Again is more than just a company; it’s a community that supports and uplifts women like you.</p>
                <p>Thank you for choosing Rise Again as your partner in this incredible journey. We’re here to help you soar.</p>

                <p>Priyanka</p>
                <p>Rise Again</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
