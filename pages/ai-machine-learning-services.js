import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/ai-machine-learning-services/HeroBanner";
import Industries from "../components/ai-machine-learning-services/Industries";
import WhyTriosource from "../components/ai-machine-learning-services/WhyTriosource";
import Testimonials from "../components/ai-machine-learning-services/Testimonials";
import ComputerVisionAI from "../components/ai-machine-learning-services/ComputerVisionAI";
import PartnerSlider from "../components/ai-machine-learning-services/PartnerSlider";
import TechDetailsContent from "../components/ai-machine-learning-services/TechDetailsContent";

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