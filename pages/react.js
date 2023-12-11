import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/reactjs/Services";
import ComputerVisionAI from "../components/reactjs/ComputerVisionAI";
import PageBanner from "../components/reactjs/PageBanner";
import TechDetailsContent from "../components/reactjs/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Dynamic UI Creation with TrioSource  React Services </title>
        <meta property="og:title" content="Dynamic UI Creation with TrioSource  React Services" key="title" />
        <meta name="description" content="Engage users with interactive interfaces using TrioSource  React development. Deliver compelling digital experiences." key="description" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="React Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="React"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      <Footer />
    </>
  );
};
export default Index;
