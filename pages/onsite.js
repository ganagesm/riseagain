import React from "react";
import Navbar from "../components/Live/Navbar";
import OnsitePageBanner from "../components/Live/OnsitePageBanner";
import OnsiteServiceDetailsContent from "../components/Live/OnsiteServiceDetailsContent";
import OnsiteServices from "../components/Live/OnsiteServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Onsite Collaboration by TrioSource  for Direct Engagement </title>
        <meta property="og:title" content="Onsite Collaboration by TrioSource  for Direct Engagement" key="title" />
        <meta name="description" content="Integrate TrioSource  experts directly into your team. Achieve seamless collaboration and immediate results with our Onsite services." key="description" />
      </Head>

      <Navbar />
      <OnsitePageBanner
        pageTitle="Onsite Teams - Proximity and Collaboration"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Onsite"
        bgImgClass="item-bg2"
      />
      <OnsiteServices />
      <OnsiteServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
