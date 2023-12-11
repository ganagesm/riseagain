import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import HeroBanner from "../components/cloud-nfrastructure-services/HeroBanner";
import WhyTriosource from "../components/cloud-nfrastructure-services/WhyTriosource";
import ComputerVisionAI from "../components/cloud-nfrastructure-services/ComputerVisionAI";
import TechDetailsContent from "../components/cloud-nfrastructure-services/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Cloud Infrastructure Services by TrioSource  for Seamless Scaling  </title>
        <meta property="og:title" content="Cloud Infrastructure Services by TrioSource  for Seamless Scaling " key="title" />
        <meta name="description" content="Leverage the power of cloud with TrioSource . Ensure agility, security, and scalability in your business operations" key="description" />
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