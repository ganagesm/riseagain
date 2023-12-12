
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/android/Services";
import ComputerVisionAI from "../components/android/ComputerVisionAI";
import PageBanner from "../components/android/PageBanner";
import TechDetailsContent from "../components/android/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Mobile Mastery with TrioSource  Android Development </title>
        <meta property="og:title" content="Mobile Mastery with TrioSource  Android Development" key="title" />
        <meta name="description" content=" Capture the mobile market effectively with intuitive Android apps by TrioSource . Engage users on the go." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Android Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Android"
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