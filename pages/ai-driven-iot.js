import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/AIDrivenIoT/HeroBanner";
import AboutUs from "../components/AIDrivenIoT/AboutUs";
import Industries from "../components/AIDrivenIoT/Industries";
import WhyChooseUs from "../components/AIDrivenIoT/WhyChooseUs";
import Testimonials from "../components/Live/Testimonials";
// import Testimonials from "../components/AIDrivenIoT/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import WhyTriosource from "../components/AIDrivenIoT/WhyTriosource";
import ComputerVisionAI from "../components/AIDrivenIoT/ComputerVisionAI";
import TechDetailsContent from "../components/AIDrivenIoT/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <WhyChooseUs />
      {/* <AboutUs /> */}
      <Industries />
      <WhyTriosource />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;