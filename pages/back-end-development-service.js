import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/back-end-development-service/HeroBanner";
import Industries from "../components/back-end-development-service/Industries";
import WhyTriosource from "../components/back-end-development-service/WhyTriosource";
// import Testimonials from "../components/back-end-development-service/Testimonials";
import Testimonials from "../components/Live/Testimonials";
import ComputerVisionAI from "../components/back-end-development-service/ComputerVisionAI";
import PartnerSlider from "../components/back-end-development-service/PartnerSlider";
import TechDetailsContent from "../components/back-end-development-service/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      <PartnerSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;