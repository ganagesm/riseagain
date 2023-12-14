import React, { Component } from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Founder from "../components/About/Founder";
import PartnerContent from "../components/Live/PartnerContent";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Discover Rise Again : Steering the Digital Revolution  </title>
        <meta property="og:title" content="Discover Rise Again : Steering the Digital Revolution  " key="title" />
        <meta name="description" content="Discover the ethos of Rise Again . A journey of innovation, dedication, and passion in the tech realm. " key="description" />
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
      <Founder />
      {/* <PartnerContent /> */}
      <Footer />
    </>
  );
};

export default About;
