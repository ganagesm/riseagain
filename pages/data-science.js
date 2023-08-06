import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/data-science/HeroBanner";
import Industries from "../components/data-science/Industries";
// import Testimonials from "../components/data-science/Testimonials";
import Testimonials from "../components/Live/Testimonials";
import PartnerSlider from "../components/data-science/PartnerSlider";
import WhyTriosource from "../components/data-science/WhyTriosource";
import ComputerVisionAI from "../components/data-science/ComputerVisionAI";
import TechDetailsContent from "../components/data-science/TechDetailsContent";

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