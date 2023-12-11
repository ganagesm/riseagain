
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/kubernetes/Services";
import ComputerVisionAI from "../components/kubernetes/ComputerVisionAI";
import PageBanner from "../components/kubernetes/PageBanner";
import TechDetailsContent from "../components/kubernetes/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Master Container Management with TrioSource  Kubernetes </title>
        <meta property="og:title" content="Master Container Management with TrioSource  Kubernetes" key="title" />
        <meta name="description" content="Elevate your container orchestration with TrioSource  Kubernetes solutions. Achieve operational agility and efficiency" key="description" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Kubernetes Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Kubernetes"
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