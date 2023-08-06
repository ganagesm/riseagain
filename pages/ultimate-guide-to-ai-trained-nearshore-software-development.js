import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogDetailsContentAITrainedNearshoreSoftware from "../components/Blog/BlogDetailsContentAITrainedNearshoreSoftware";
import Footer from "../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImgClass="item-bg3"
      />

      <BlogDetailsContentAITrainedNearshoreSoftware />

      <Footer />
    </>
  );
};

export default BlogDetails;
