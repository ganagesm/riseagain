
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/GenerativeAi/Services";
// import ComputerVisionAI from "../components/GenerativeAi/ComputerVisionAI";
import PageBanner from "../components/GenerativeAi/PageBanner";
import TechDetailsContent from "../components/GenerativeAi/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Unlock the Future with TrioSource  Generative AI Solutions  </title>
        <meta property="og:title" content="Unlock the Future with TrioSource  Generative AI Solutions " key="title" />
        <meta name="description" content="Unlock creativity with TrioSource  Generative AI solutions. Drive innovation and stay ahead in the digital age. " key="description" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Generative Ai Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Generative Ai"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      {/* <ComputerVisionAI /> */}
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;