
import Link from "next/link";
import Navbar from "../components/Live/Navbar";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import FunFacts from "../components/Live/FunFacts";
import Footer from "../components/Live/Footer";
import OurFeaturedSolutions from "../components/Live/OurFeaturedSolutions";
import TechSlider from "../components/Live/TechSlider";
import Testimonials from "../components/Live/Testimonials";
import PartnerContent from "../components/Live/PartnerContent";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Head from 'next/head';


const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <PartnerContent /> */}
      <Services />
      <FunFacts />
      {/* <Testimonials />
      <TechSlider />
      <BlogPostSlider />
      <CaseStudiesPost /> */}
      <div className="main-services-area pt-50">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <div className="icon">
                  <i className="flaticon-robot-1"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    DEI Solutions
                  </Link>
                </h3>
                <p>We focus on quality and authentic connections to help you save time, stand out, and attract the best people for your open positions.</p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <div className="icon">
                  <i className="flaticon-neural"></i>
                </div>
                <h3>
                  <Link href="/service-details">Employer</Link>
                </h3>
                <p>Elevate your workforce with highly skilled workers that are often automatically dismissed due to a career gap. This pool of talent is just what you need to enhance your culture and productivity.</p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurFeaturedSolutions />
      <Footer />
    </>
  )
}
export default Index;