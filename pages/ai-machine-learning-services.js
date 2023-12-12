import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/ai-machine-learning-services/HeroBanner";
import WhyTriosource from "../components/ai-machine-learning-services/WhyTriosource";
// import Testimonials from "../components/ai-machine-learning-services/Testimonials";
import ComputerVisionAI from "../components/ai-machine-learning-services/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/ai-machine-learning-services/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Machine Learning Solutions by TrioSource  for AI-Powered Excellence  </title>
        <meta property="og:title" content="Machine Learning Solutions by TrioSource  for AI-Powered Excellence " key="title" />
        <meta name="description" content="Maximize business outcomes with TrioSource  AI & ML expertise. Harness data for smarter decisions and transformative insights" key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;