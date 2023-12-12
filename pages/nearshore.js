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
        <title>Explore the Benefits of Nearshore IT Services | TrioSource  </title>
        <meta property="og:title" content="Explore the Benefits of Nearshore IT Services | TrioSource " key="title" />
        <meta name="description" content="Triosource offers top-tier nearshore IT Services for cost-effective and efficient software development solutions. Contact Us" key="description" />
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
