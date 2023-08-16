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
import ReactGA from 'react-ga';

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

// Initialize Google Analytics

ReactGA.initialize('UA-91820466-2');

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();
    // Track pageview using Google Analytics
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview('/');
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Triosource - Technology Consulting & Outsourcing Company</title>

      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
