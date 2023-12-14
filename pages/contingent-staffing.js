
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import PageBanner from "../components/contingentStaffing/PageBanner";
import MainBanner from "../components/contingentStaffing/MainBanner";
import Services from "../components/contingentStaffing/Services";
import TalentAcquisition from "../components/contingentStaffing/TalentAcquisition";
// import ComputerVisionAI from "../components/contingentStaffing/ComputerVisionAI";
import TechDetailsContent from "../components/contingentStaffing/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      {/* <TalentAcquisition /> */}
      <TechDetailsContent />
      {/* <ComputerVisionAI /> */}
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;