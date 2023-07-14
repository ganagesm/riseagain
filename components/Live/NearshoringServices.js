import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Flexible engagements.</h2>
            <h2> we'll work how you work.</h2>
            <p>
              Our outsourced engineers can plug directly into your teams. Triosource also creates dedicated teams of engineers with a project based approach. Our consulting approach allows for a hybrid. We can work however you work.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="">Unlocking Success
                  <h3 style={{color: "darkgray"}}>Tech Project Excellence</h3></Link>
                </h2>
                <p>Discover how partnering with Triosource's top 1% developers can elevate your tech projects to new heights.</p>
                <p style={{marginTop: "25px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="">Fast Onboarding Process
                  <h3 style={{color: "darkgray"}}>Talent at scale</h3></Link>
                </h2>
                <p>Accelerate Your Tech Projects with Triosource's Fast Onboarding Process, Learn how Triosource's streamlined onboarding process helps you quickly kick-start your tech projects for timely delivery.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="">Flexible Solutions for Tech Talent
                  <h3 style={{color: "darkgray"}}>Talent at home</h3></Link>
                </h2>
                <p>Explore the advantages of Triosource's flexible team arrangements and how they align with your project requirements.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="">Maximize Cost Efficiency
                  <h3 style={{color: "darkgray"}}>Nearshore Tech Talent</h3></Link>
                </h2>
                <p>Delve into the cost-saving benefits of Triosource's Nearshore teams and how they optimize your budget allocation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="">Seamless Collaboration
                  <h3 style={{color: "darkgray"}}>Overlapping Time Zones</h3></Link>
                </h2>
                <p>Discover how Triosource's nearshore teams enable seamless collaboration and effective communication through overlapping time zones.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="">Expertise on Demand
                  <h3 style={{color: "darkgray"}}>Unleashing a Vast Pool of Skills</h3></Link>
                </h2>
                <p>Discover how Triosource's extensive pool of skilled developers offers expertise in various technologies, frameworks, and programming languages.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default NearshoringServices;
