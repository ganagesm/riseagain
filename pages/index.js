import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import BlogPostsSection from "../components/Live/BlogPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import TechSlider from "../components/Live/TechSlider";


const Index = () => {
    return (
        <>
        <Navbar />
        <HeroBanner/>
        <PartnerContent />
        <Services/>
        <FunFacts />
        <TechSlider />
        <BlogPostsSection />
        <Footer />
        </>
    )
}
export default Index;