import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/white-triosource.png" alt="triosource logo" width={200} />
                  </Link>
                  <p>
                    Trisource is a technology consulting and outsourcing company. Nearshore, Offshore, onsite. Hire technology talent anywhere or let our experts use bleeding edge tech to unlock business value for you. 
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.linkedin.com/company/triosource/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Engagement Models</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/nearshore">Nearshoring</Link>
                  </li>
                  <li>
                    <Link href="/offshore">Offshoring</Link>
                  </li>
                  <li>
                    <Link href="/onsite">Onsite Hiring</Link>
                  </li>
                </ul>
              </div>
            </div>            

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  {/* <li> <Link href="/technologies">Technologies</Link> </li> */}
                  <li> <Link href="/blog">Case Studies</Link> </li>
                  {/* <li>
                    <Link href="/technologies/kubernetes">Kubernetes</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/technologies/generative-ai">Generative Ai</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/technologies/mobile">Mobile</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Contact</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    3031 Tisch Way, 110 Plaza West <br /> San Jose, CA
                  </li>
                  <li> <span>Email:</span> hello@triosource.com </li>
                  <li> <span>Phone:</span> +1 408-931-2520 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  @ Copyright &copy;{currentYear} Triosource. All Rights Reserved{" "}
                  .
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
