
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/python/Services";
import BlogPost from "../components/Common/BlogPost";

import ComputerVisionAI from "../components/python/ComputerVisionAI";
import PageBanner from "../components/Live/PageBanner";
import TechDetailsContent from "../components/python/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Versatile Coding with TrioSource  Python Development  </title>
        <meta property="og:title" content="Versatile Coding with TrioSource  Python Development " key="title" />
        <meta name="description" content="Benefit from Python's flexibility and robustness with TrioSource . Craft solutions that stand out in functionality and efficiency." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Python Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Python"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;