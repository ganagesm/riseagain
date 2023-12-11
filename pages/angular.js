
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/angular/Services";
import ComputerVisionAI from "../components/angular/ComputerVisionAI";
import PageBanner from "../components/angular/PageBanner";
import TechDetailsContent from "../components/angular/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Craft Dynamic Web Apps with TrioSource  Angular Services </title>
        <meta property="og:title" content="Craft Dynamic Web Apps with TrioSource  Angular Services" key="title" />
        <meta name="description" content="Deliver responsive, user-friendly web experiences using Angular. TrioSource  expertise ensures top-tier results." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Angular Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Angular"
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