// import Navbar from "../components/Layouts/Navbar";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import AboutUs from "../components/Live/AboutUs";
import Services from "../components/Live/Services";
import BlogPost from "../components/Common/BlogPost";
import FunFacts from "../components/Live/FunFacts";
import MainBanner from "../components/Live/MainBanner";
import PartnerContent from "../components/Live/PartnerContent";
import TechSlider from "../components/Live/TechSlider";
import Projects from "../components/Live/Projects";


import ComputerVisionAI from "../components/Live/ComputerVisionAI";
import PageBanner from "../components/Live/PageBanner";
import TechDetailsContent from "../components/Live/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="React Js Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="React Js"
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