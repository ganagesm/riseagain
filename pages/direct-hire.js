import Link from "next/link";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainBanner from "../components/direct-hire/MainBanner";
import Services from "../components/direct-hire/Services";
import TalentAcquisition from "../components/direct-hire/TalentAcquisition";
// import ComputerVisionAI from "../components/direct-hire/ComputerVisionAI";
import TechDetailsContent from "../components/direct-hire/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      {/* <TalentAcquisition /> */}
      <TechDetailsContent />
      {/* <ComputerVisionAI /> */}
      {/* <Services /> */}
      {/* <BlogPost /> */}

      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>
                Empowering Women's Reentry into the Workforce at Rise Again

                </h3>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Streamlined Hiring Process with a Verified Pool of Returners

                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Access to Qualified and Professional Women Ready for Immediate Contribution 

                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Personalized Support and Mentorship for Returners through WBW 

                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Comprehensive Support for Leave of Absence (LOA) in Engineering, Product, and Technology Organizations 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> An Enthusiastic Talent Pool Available for Short-Term Roles 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Maximizing Leave of Absence Policy Uptake 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Proven Track Record of Success with Our Partner Organizations  
                  </li>
                </ul>
                <div className="about-btn">
                  <Link href="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Index;