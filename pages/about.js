import React, { Component } from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import PartnerContent from "../components/Live/PartnerContent";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Discover TrioSource : Steering the Digital Revolution  </title>
        <meta property="og:title" content="Discover TrioSource : Steering the Digital Revolution  " key="title" />
        <meta name="description" content="Discover the ethos of TrioSource . A journey of innovation, dedication, and passion in the tech realm. " key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg1"
      />

      <AboutContact />
      <PartnerContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default About;
