import Link from "next/link";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainBanner from "../components/returnship-guide/MainBanner";
import Services from "../components/returnship-guide/Services";
import TalentAcquisition from "../components/returnship-guide/TalentAcquisition";
// import ComputerVisionAI from "../components/returnship-guide/ComputerVisionAI";
import TechDetailsContent from "../components/returnship-guide/TechDetailsContent";

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
              <h2>Blueprint for a Successful Returnship Journey

              </h2>
              <p><strong>Setting the Foundation</strong> Commence by assessing the organization’s readiness and enthusiasm for a returnship program. Collaboration from various departments, including Talent Acquisition, departmental heads, MSP (if applicable), hiring managers, Human Resources, and contingent workforce leaders, is imperative.
              </p>
              <p><strong>Strategic Employment Models</strong> Different employment models cater to engaging returners: Contract/Temporary Engagement: Hiring returners as contract workers allows for swift evaluation and potential conversion to permanent roles based on performance.
              </p>
              <p>Direct Hiring: Directly hiring returners demonstrates a long-term commitment, fostering a sense of pride and commitment. </p>
              <p>Hybrid Approaches: Combining both contract and direct hires offers flexibility in returnship programs. </p>
              <p><strong>Tailoring Benefit Packages</strong> Decide on benefits offered, aligning with employment status to meet returners’ needs and expectations effectively.

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h2>Branding the Returnship Experience

              </h2>
              <p>Craft a distinctive and company-associated name for the returnship program, establishing a compelling brand identity.
              </p>
              <p><strong>Strategizing Role Allocation</strong> Strategically assign roles to the returner cohort, prioritizing diversity and departmental needs for seamless integration. </p>
              <p><strong>Optimizing Job Descriptions</strong> Customize job descriptions for returnship opportunities to encourage applications, highlight the program’s welcoming approach to resume gaps, and emphasize additional support for returners.

              </p>
              <p><strong>Specialized Recruitment Strategies</strong> Returners require specialized recruitment processes; ensure the organization possesses the expertise to source, screen, and hire these candidates effectively.

              </p>
              <p><strong>Program Duration and Comprehensive Training</strong> Returnship durations vary based on cohort size, role complexity, and organizational resources. Rigorous training encompassing job-specific tasks, office conduct, and soft skills is integral to their success.

              </p>
            </div>
            <div className="services-details-image">
              <img
                src="/images/returnship-guide-3.jpeg"
                alt="image" style={{ float: "right" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Index;