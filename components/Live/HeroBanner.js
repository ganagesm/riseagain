import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const HeroBanner = () => {
  return (
    <>
      {/* <Swiper
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
            style={{
              background:"#000000",
              background: `url(/images/background-home-1.jpeg) no-repeat center center fixed`,
              WebkitBackgroundSize: 'cover',
              MozBackgroundSize: 'cover',
              OBackgroundSize: 'cover',
              backgroundSize: 'cover',
            }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}>
                  Reignite, Reimagine, Rise Again
                </h1>
                <p>Search your career opportunity through 12,800 jobs</p>

                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>
      </Swiper> */}

      <div className="ml-main-banner-area ai-main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-content">
                {/* <span className="sub-title">
                  Analysis & Deep Machine Learning With <b>Ai</b>
                </span> */}
                <h1>
                  Reignite, Reimagine, <span>Rise Again</span>
                </h1>
                <p>
                Search your career opportunity through 12,800 jobs
                </p>

                <div className="btn-box" style={{marginTop:"20px"}}>
                  <Link href="/contact" className="btn btn-primary">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-image">
                <img src="/images/banners/riseagain.png" alt="image" />

                <div className="circle-shape"></div>

                <div className="wrap-shape">
                  <img src="/images/home-seven/banner/shape3.png" alt="image" />
                </div>

                <div className="wrap-text">
                  <i className="fa-solid fa-check"></i>
                  <span>Jobs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-main-banner-shape1">
          <img src="/images/home-seven/banner/shape1.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape2">
          <img src="/images/home-seven/banner/shape2.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape3">
          <img src="/images/home-seven/banner/shape4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
