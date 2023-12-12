import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CaseStudiesGrid from "../components/Live/CaseStudiesGrid";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const Blog = () => {
  return (
    <>
      <Head>
        <title>TrioSource  Success Stories | Case Studies </title>
        <meta property="og:title" content="TrioSource  Success Stories | Case Studies " key="title" />
        <meta name="description" content="Dive into TrioSource  impactful case studies. Witness our transformative solutions across industries and technologies." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Case Studies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
        bgImgClass="item-bg2"
      />

      <CaseStudiesGrid />

      <Footer />
    </>
  );
};

export default Blog;
