import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/mobile-app-development/HeroBanner";
import Industries from "../components/mobile-app-development/Industries";
import WhyTriosource from "../components/mobile-app-development/WhyTriosource";
import Testimonials from "../components/Live/Testimonials";
// import Testimonials from "../components/mobile-app-development/Testimonials";
import BlogPost from "../components/mobile-app-development/BlogPost";
import ComputerVisionAI from "../components/mobile-app-development/ComputerVisionAI";
import PartnerSlider from "../components/mobile-app-development/PartnerSlider";
import PageBanner from "../components/mobile-app-development/PageBanner";
import TechDetailsContent from "../components/mobile-app-development/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      {/* <BlogPost /> */}
      <PartnerSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;