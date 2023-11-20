import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import WhyProximityMatters from "../../components/Blog/WhyProximityMatters";
import Footer from "../../components/Live/Footer";
import Head from 'next/head';

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Proximity Matters: Nearshore Development Benefits </title>
        <meta property="og:title" content="Proximity Matters: Nearshore Development Benefits" key="title" />
        <meta name="description" content="Discover nearshore development's edge with proximity advantages. Explore how Triosource optimizes global collaboration for your business success." key="description" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Proximity Matters: Nearshore Development Benefits"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <WhyProximityMatters />
      <Footer />
    </>
  );
};

export default BlogDetails;
