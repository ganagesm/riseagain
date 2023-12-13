import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>Assisting Employee Leave
                Scenarios

              </h1>
              <p>
                Rise Again places a strong emphasis on supporting our employees during various life transitions. We acknowledge that events like childbirth, adoption, significant health issues, or military service may require a valued employee to request a leave of absence. Demonstrating our commitment to compassion and understanding, we work to accommodate these circumstances, ultimately contributing to enhanced employee retention rates.


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
