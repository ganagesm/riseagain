
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/Live/Services";
import BlogPost from "../components/Common/BlogPost";

import ComputerVisionAI from "../components/Live/ComputerVisionAI";
import PageBanner from "../components/Live/PageBanner";
import TechDetailsContent from "../components/Live/TechDetailsContent";

const Index = () => {
  return (
    <>
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
      <BlogPost />

      <Footer />
    </>
  )
}
export default Index;