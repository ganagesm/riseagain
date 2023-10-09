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
        <title>TrioSource - Your Nearshore AI & Software Development Experts! </title>
        <meta property="og:title" content="TrioSource - Your Nearshore AI & Software Development Experts!" key="title" />
        <meta name="description" content="Unleash technological excellence with TrioSource ! Hire skilled talent anywhere - be it nearshore, offshore, or onsite. Embark on a transformative journey with us, navigating toward a future where technology and innovation converge Let our experts amplify your business value, deploying cutting-edge technologies and innovative AI solutions tailored just for you. !" key="description" />
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