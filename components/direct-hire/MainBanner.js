import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>Employ directly with us.

              </h1>
              <p>
              Engage and onboard remarkable, full-time team members from a variety of backgrounds Job seekers prioritize joining organizations that champion diversity in the workplace. Prospective employees seek out companies that place a strong emphasis on fostering an inclusive workforce.
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
