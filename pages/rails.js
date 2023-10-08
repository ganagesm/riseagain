
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/rails/Services";
import ComputerVisionAI from "../components/rails/ComputerVisionAI";
import PageBanner from "../components/rails/PageBanner";
import TechDetailsContent from "../components/rails/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Rapid Web Solutions with TrioSource  Rails Development </title>
        <meta property="og:title" content="Rapid Web Solutions with TrioSource  Rails Development" key="title" />
        <meta name="description" content="Accelerate your web projects using Rails. With TrioSource , experience the blend of speed and quality." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Rails Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Rails"
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