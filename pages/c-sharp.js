
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/CSharp/Services";
import ComputerVisionAI from "../components/CSharp/ComputerVisionAI";
import PageBanner from "../components/CSharp/PageBanner";
import TechDetailsContent from "../components/CSharp/TechDetailsContent";
import Head from 'next/head';

const Index = () => {
  return (
    <>
     <Head>
        <title>Seamless App Development with C# by TrioSource    </title>
        <meta property="og:title" content="Seamless App Development with C# by TrioSource   " key="title" />
        <meta name="description" content="Utilize the power of C# for robust, efficient applications. TrioSource  ensures optimal performance and scalability." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Top C# Development Company"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="C#"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      <Footer />
    </>
  )
}
export default Index;