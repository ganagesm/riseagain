
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import PageBanner from "../components/Returnships/PageBanner";
import MainBanner from "../components/Returnships/MainBanner";
import Services from "../components/Returnships/Services";
import TalentAcquisition from "../components/Returnships/TalentAcquisition";
// import ComputerVisionAI from "../components/Returnships/ComputerVisionAI";
import TechDetailsContent from "../components/Returnships/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <TalentAcquisition />
      <TechDetailsContent />
      {/* <ComputerVisionAI /> */}
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;