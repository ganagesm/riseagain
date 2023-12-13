import Link from "next/link";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainBanner from "../components/success-stories/MainBanner";
import Services from "../components/success-stories/Services";
import TalentAcquisition from "../components/success-stories/TalentAcquisition";
// import ComputerVisionAI from "../components/success-stories/ComputerVisionAI";
import TechDetailsContent from "../components/success-stories/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      {/* <TalentAcquisition /> */}
      <TechDetailsContent />
      {/* <ComputerVisionAI /> */}
      <Services />
      {/* <BlogPost /> */}

      {/* <div className="ai-about-area pb-100">
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
      </div> */}

      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview d-flex">
            <div className="services-details-image">
              <img
                src="/images/returnship-guide-2.jpeg"
                alt="image" style={{ width: '75%', display: "block", margin: "0 auto" }}
              />
            </div>
            <div className="services-details-desc mb-30 flex-fill">
              <h2>How It Operates


              </h2>
              <p>The initial step is to gauge the organization’s interest in establishing a Returnship program. It necessitates a particular mindset and commitment from various departments to bring it to fruition. These departments encompass your Engineering, Information Technology, Business, HR, Talent Acquisition leaders, and hiring managers. Critical decisions related to returnships include:
              </p>
              <ul className="about-list" style={{ listStyle: "none" }}>
                <li>
                  <i className="fa-solid fa-check"></i> Define the employment structure.

                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Specify the benefits you wish to provide.

                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Identify roles and positions suitable for Returnship candidates.

                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Establish the duration of your Returnship program
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Develop a comprehensive training and mentoring framework for returners.
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Craft a distinct branding strategy for your Returnship program.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Index;