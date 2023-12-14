import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>Embracing flexible workforce strategies. Empowering Every Hiring Decision

              </h1>
              <p>
              In the modern business landscape, forward-thinking companies grasp the critical role of diversity, equity, inclusion, and a sense of belonging in their success. Enlightened leaders understand that a diverse workforce is not just a desirable quality; it’s a proven catalyst for innovation and heightened productivity.
              </p>

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
