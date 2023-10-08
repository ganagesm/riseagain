import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import TechSlider from "../components/Live/TechSlider";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Head from 'next/head';


const Index = () => {
  return (
    <>
      <Head>
        <title>Pioneering Digital Solutions with Advanced Tech & Expertise! </title>
        <meta property="og:title" content="Pioneering Digital Solutions with Advanced Tech & Expertise!" key="title" />
        <meta name="description" content="Navigate the digital future with TrioSource! Specializing in AI, IoT, Data Science, Cloud Infrastructure, and more, we turn your tech goals into reality. Engage with us to explore innovative solutions, tailored just for your business, and drive transformative results together." key="description" />
      </Head>
      <Navbar />
      <HeroBanner />
      <PartnerContent />
      <Services />
      <FunFacts />
      <Testimonials />
      <TechSlider />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />

    </>
  )
}
export default Index;