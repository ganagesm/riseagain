import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>
                For Comeback Professionals

              </h1>
              <p>Our cutting-edge Returnship programs are revolutionizing talent acquisition for companies. By tapping into an exceptional pool of highly skilled technical professionals returning to work, these programs empower leaders to redefine diversity strategies while seamlessly aligning with strategic business imperatives.</p>

              <div className="btn-box">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
