import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const HeroBanner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/app-dev/banner.jpeg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1>Empowering Businesses with AI-Driven Mobile App Development </h1>
                <p>
                  Faster Development with AI Integration, High-Quality Apps with Intelligent Features, Enhanced Security with AI-Driven Solutions, AI for Predictive Analysis and Smart Decision-Making </p>

                <div className="btn-box">
                  <Link href="#" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Started Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

       {/* <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>
              Empowering Businesses with <br /> AI-Driven Mobile App Development 
              </h1>
              <p>
              Faster Development with AI Integration, High-Quality Apps with Intelligent Features, Enhanced Security with AI-Driven Solutions, AI for Predictive Analysis and Smart Decision-Making 
              </p>

              <div className="btn-box">
                <Link href="#" className="btn btn-primary">
                  Schedule a Demo
                </Link>
                <Link href="/contact" className="optional-btn">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroBanner;
