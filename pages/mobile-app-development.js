import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/mobile-app-development/HeroBanner";
import WhyTriosource from "../components/mobile-app-development/WhyTriosource";
// import Testimonials from "../components/mobile-app-development/Testimonials";
import BlogPost from "../components/mobile-app-development/BlogPost";
import ComputerVisionAI from "../components/mobile-app-development/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/mobile-app-development/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Engage Users with TrioSource  Mobile App Development </title>
        <meta property="og:title" content="Engage Users with TrioSource  Mobile App Development" key="title" />
        <meta name="description" content="Craft captivating mobile experiences with TrioSource . Connect with your audience anytime, anywhere with our expertise." key="description" />
      </Head>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      {/* <BlogPost /> */}
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;