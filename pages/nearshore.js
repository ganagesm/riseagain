import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import NearshoringServices from "../components/Live/NearshoringServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const ServiceDetails = () => {
  return (
    <>
    <Head>
        <title>Nearshore Engagement with TrioSource  for Localized Expertise  </title>
        <meta property="og:title" content="Nearshore Engagement with TrioSource  for Localized Expertise " key="title" />
        <meta name="description" content=" Collaborate closer to home with TrioSource  Nearshore services. Benefit from cultural proximity and time zone alignment." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Development Teams - Talent in your time zone"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Nearshore"
        bgImgClass="item-bg2"
      />
      <NearshoringServices />
      <ServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
