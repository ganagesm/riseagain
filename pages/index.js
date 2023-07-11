import Navbar from "../components/Live/Navbar";
// import NavbarSeven from "../components/Layouts/NavbarSeven";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import AboutUs from "../components/Live/AboutUs";
import Services from "../components/Live/Services";
import BlogPost from "../components/Live/BlogPost";
import FunFacts from "../components/Live/FunFacts";
import MainBanner from "../components/Live/MainBanner";
import PartnerContent from "../components/Live/PartnerContent";
import TechSlider from "../components/Live/TechSlider";
import Projects from "../components/Live/Projects";
import Link from "next/link";

const Index = () => {
    return (
        <>
        <Navbar />
        <HeroBanner/>
        <PartnerContent />
        <Services/>
        <FunFacts />
        <TechSlider />
        <BlogPost />
        <Footer />
        </>
    )
}
export default Index;