import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/riseagain-white.png"
                  className="main-logo"
                  alt="logo"
                  width={200}
                />
                <img
                  src="/images/riseagain-white.png"
                  className="optional-logo"
                  alt="logo"
                  height={30}
                  width={200}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${currentPath == "/generativeAi" || currentPath === "/mobile-app-development" || currentPath === "/frontend-development" || currentPath === "/back-end-development-service" || currentPath === "/ai-driven-iot" || currentPath === "/ai-machine-learning-services" || currentPath === "/data-science" || currentPath === "/cloud-infrastructure-services" ? "active"
                        : ""
                        }`}
                    >
                      DEI Solutions
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/generativeAi"
                          className={`nav-link ${currentPath == "/generativeAi" && "active"
                            }`}
                        >
                          Retunships
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/mobile-app-development"
                          className={`nav-link ${currentPath == "/mobile-app-development" && "active"
                            }`}
                        >
                          Contingent Staffing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/frontend-development"
                          className={`nav-link ${currentPath == "/frontend-development" && "active"
                            }`}
                        >
                          Direct Hire
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/back-end-development-service"
                          className={`nav-link ${currentPath == "/back-end-development-service" && "active"
                            }`}
                        >
                          Leave of Absence
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${currentPath == "/nearshore" || currentPath === "/offshore" || currentPath === "/onsite" ? "active"
                        : ""
                        }`}
                    >
                      Employers
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/nearshore"
                          className={`nav-link ${currentPath == "/nearshore" && "active"
                            }`}
                        >
                          Partnerships
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/offshore"
                          className={`nav-link ${currentPath == "/offshore" && "active"
                            }`}
                        >
                          Returnship Guide
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/onsite"
                          className={`nav-link ${currentPath == "/onsite" && "active"
                            }`}
                        >
                          Critical Considerations
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/onsite"
                          className={`nav-link ${currentPath == "/onsite" && "active"
                            }`}
                        >
                          Success Stories
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${currentPath == "/about" && "active"
                        }`}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
                {/* others-options */}
                <div className="others-options">
                  <Link href="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
