
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/net/Services";
import ComputerVisionAI from "../components/net/ComputerVisionAI";
import PageBanner from "../components/net/PageBanner";
import TechDetailsContent from "../components/net/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Build Robust Solutions with TrioSource  .NET Development   </title>
        <meta property="og:title" content="Build Robust Solutions with TrioSource  .NET Development  " key="title" />
        <meta name="description" content="Harness the power and security of .NET with TrioSource . Craft reliable, scalable applications tailored to your needs." key="description" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle=".NET Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=".NET"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;