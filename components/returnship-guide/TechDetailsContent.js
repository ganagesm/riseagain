import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview d-flex">
            <div className="services-details-image flex-fill">
              <img
                src="/images/returnship-guide.jpeg"
                alt="image" style={{ width: "100%" }}
              />
            </div>
            <div className="services-details-desc mb-30 flex-fill">
              <h2 style={{ marginBottom: "20px" }}>Deciphering the Returnship Concept



              </h2>
              <p> A returnship, often termed a return-to-work initiative, parallels the structure of an internship, designed to reintegrate individuals who have taken hiatuses from their careers for various reasons. While encompassing both genders, it predominantly involves seasoned female professionals who paused their careers to prioritize caregiving responsibilities or family commitments. These professionals, known as ‘Returners,’ represent a diverse pool. </p>

              <p>  The essence of a returnship is to appropriately position Returners in roles aligned with their expertise and offer fair compensation. Conventional recruitment methods often fail to recognize their competencies, resulting in these individuals, largely women, being overlooked or placed in roles below their actual skill level. </p>

              <p> Moreover, returnship programs encompass supplementary training, guidance, and mentorship, aiding Returners in readjusting to the workplace and honing any skills, including soft skills, that might need polishing post-career breaks.</p>
            </div>

          </div>
        </div>
      </div >
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h2>Why do Returnships Matter ?
</h2>
              <p>In many cases, the recruitment process within companies tends to undervalue candidates who’ve experienced career gaps. Whether by design or due to inherent biases in recruitment technologies like Applicant Tracking Systems (ATS), companies miss out on exceptional talent. This oversight particularly impacts Returners, often comprising women. 
              </p>
              <p> Returnship programs are designed to rectify this imbalance and close the talent gap within organizations.” 

</p>
            </div>
            <div className="services-details-image">
              <img
                src="/images/returnship-guide-1.jpeg"
                alt="image" style={{ float: "right" }}
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ServiceDetailsContent;
