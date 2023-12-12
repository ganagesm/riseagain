import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NearshoreVsOffshore from "../../components/Blog/NearshoreVsOffshore";
import Footer from "../../components/Live/Footer";
import Head from 'next/head';

const BlogDetails = () => {
  return (
    <>
    <Head>
        <title>Nearshore vs. Offshore: Optimal Outsourcing Choice? </title>
        <meta property="og:title" content="Nearshore vs. Offshore: Optimal Outsourcing Choice?" key="title" />
        <meta name="description" content="Explore the differences between nearshore and offshore outsourcing to find the perfect fit for your business needs. Contact Triosource for expert guidance." key="description" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Nearshore vs. Offshore: Optimal Outsourcing Choice?"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <NearshoreVsOffshore />
      <Footer />
    </>
  );
};

export default BlogDetails;
