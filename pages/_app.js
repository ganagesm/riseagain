import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import Script from 'next/script'

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();

  }, []);
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=G-L4CMTB5TYP`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L4CMTB5TYP');
          `}
      </Script>
      <Head>
        <meta name="google-site-verification" content="3HUJeVYK92s3RflIJ2jyappEwuqAzAioHiGbRGAcjpk" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>TrioSource - Pioneering Digital Solutions with Advanced Tech & Expertise! </title>
        <meta property="og:title" content="TrioSource - Pioneering Digital Solutions with Advanced Tech & Expertise!" key="title" />
        <meta name="description" content="Navigate the digital future with TrioSource! Specializing in AI, IoT, Data Science, Cloud Infrastructure, and more, we turn your tech goals into reality. Engage with us to explore innovative solutions, tailored just for your business, and drive transformative results together." key="description" />


      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
