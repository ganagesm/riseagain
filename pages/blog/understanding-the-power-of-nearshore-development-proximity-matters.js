import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ProximityMatters from "../../components/Blog/ProximityMatters";
import Footer from "../../components/Live/Footer";
import Head from 'next/head';

const BlogDetails = () => {
  return (
    <>
    <Head>
        <title>Proximity Matters: Advantages of Nearshore Development </title>
        <meta property="og:title" content="Proximity Matters: Advantages of Nearshore Development" key="title" />
        <meta name="description" content="Discover how proximity in nearshore development boosts collaboration, cuts costs, and accelerates projects. Unlock global success with Triosource." key="description" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Understanding the Power of Nearshore Development: Proximity Matters"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <ProximityMatters />
      <Footer />
    </>
  );
};

export default BlogDetails;
