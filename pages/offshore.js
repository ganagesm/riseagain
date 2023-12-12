import React from "react";
import Navbar from "../components/Live/Navbar";
import OffshorePageBanner from "../components/Live/OffshorePageBanner";
import OffshoreServiceDetailsContent from "../components/Live/OffshoreServiceDetailsContent";
import OffshoreServices from "../components/Live/OffshoreServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const ServiceDetails = () => {
  return (
    <>
    <Head>
        <title>Offshore Solutions by TrioSource  for Global Talent Access  </title>
        <meta property="og:title" content="Offshore Solutions by TrioSource  for Global Talent Access " key="title" />
        <meta name="description" content="Tap into a world of talent with TrioSource  Offshore services. Get quality solutions at competitive rates, bridging global distances." key="description" />
      </Head>

      <Navbar />
      <OffshorePageBanner
        pageTitle="Offshore Teams - Cost Savings and Global Talent Pool"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Offshore"
        bgImgClass="item-bg2"
      />
      <OffshoreServices />
      <OffshoreServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
