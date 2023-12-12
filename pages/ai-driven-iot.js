import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/AIDrivenIoT/HeroBanner";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import AboutUs from "../components/AIDrivenIoT/AboutUs";
import WhyChooseUs from "../components/AIDrivenIoT/WhyChooseUs";
// import Testimonials from "../components/AIDrivenIoT/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import WhyTriosource from "../components/AIDrivenIoT/WhyTriosource";
import ComputerVisionAI from "../components/AIDrivenIoT/ComputerVisionAI";
import TechDetailsContent from "../components/AIDrivenIoT/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Innovate with TrioSource  IoT & App Development </title>
        <meta property="og:title" content="Innovate with TrioSource  IoT & App Development" key="title" />
        <meta name="description" content="Integrate the power of IoT into your apps. TrioSource  bridges connectivity and functionality for transformative results." key="description" />
      </Head>

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