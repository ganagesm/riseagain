import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>Critical Considerations

              </h1>
              {/* <p>
                Comprehensive Strategies for a Successful Re-entry Program
              </p> */}

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
