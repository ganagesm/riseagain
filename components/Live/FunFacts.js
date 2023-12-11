import React from "react";
import Link from "next/link";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-area pt-100 pt-110 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Empowering Women</h2>
            <h2> for a Brighter Tomorrow.</h2>
            <p> At Rise Again, we believe that every woman deserves the chance to rise, grow, and succeed in her career. Our mission is to empower women by providing exclusive job opportunities in both the IT and non-IT sectors. We are not just a Staffing Firm we are a movement dedicated to women’s professional growth and success.             </p>
          </div>
          <div className="contact-cta-box">
                <h3>Get in touch now</h3>
                <p>Call or chat with us to learn about our work and how we can help scale your teams.</p>
                <Link href="/contact/" target="_blank" className="btn btn-primary">
                Schedule a callback<span></span>
                </Link>
          </div>
        </div>
        {/* Shape Images  */}
        <div className="shape-img1">
          <img src="/images/map.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FunFacts;