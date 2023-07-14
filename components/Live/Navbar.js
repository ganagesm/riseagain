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
                  src="/images/white-triosource.png"
                  className="main-logo"
                  alt="logo"
                  width={200}
                />
                <img
                  src="/images/white-triosource.png"
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
                      className={`nav-link ${
                        currentPath == "/engagement-models" && "active"
                      }`}
                    >
                      Engagement Models
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/nearshore/"
                          className={`nav-link ${
                            currentPath == "/nearshore/" && "active"
                          }`}
                        >
                          Nearshore
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/offshore/"
                          className={`nav-link ${
                            currentPath == "/offshore/" && "active"
                          }`}
                        >
                            Offshore
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/onsite/"
                          className={`nav-link ${
                            currentPath == "/onsite/" && "active"
                          }`}
                        >
                         Onsite
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/technologies"
                      className={`nav-link ${
                        currentPath == "/technologies" && "active"
                      }`}
                    >
                      Technologies
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/kubernetes/"
                          className={`nav-link ${
                            currentPath == "/kubernetes/" && "active"
                          }`}
                        >
                          Kubernetes
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/react/"
                          className={`nav-link ${
                            currentPath == "/react/" && "active"
                          }`}
                        >
                            React
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/net/"
                          className={`nav-link ${
                            currentPath == "/net/" && "active"
                          }`}
                        >
                         .NET
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/python/"
                          className={`nav-link ${
                            currentPath == "/python/" && "active"
                          }`}
                        >
                         Python
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/c-sharp/"
                          className={`nav-link ${
                            currentPath == "/c-sharp/" && "active"
                          }`}
                        >
                          C#
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/rails/"
                          className={`nav-link ${
                            currentPath == "/rails/" && "active"
                          }`}
                        >
                          Rails
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/angular/"
                          className={`nav-link ${
                            currentPath == "/angular/" && "active"
                          }`}
                        >
                          Angular
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/android/"
                          className={`nav-link ${
                            currentPath == "/android/" && "active"
                          }`}
                        >
                          Android
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/case-studies/"
                      className={`nav-link ${
                        currentPath == "/case-studies/" && "active"
                      }`}
                    >
                      Case Studies
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="/team"
                      className={`nav-link ${
                        currentPath == "/team/" && "active"
                      }`}
                    >
                      Team
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
                {/* others-options */}
                <div className="others-options">
                  {/* <Link href="/cart" className="cart-btn">
                    <i className="flaticon-commerce-and-shopping"></i>
                    <span>1</span>
                  </Link>

                  <div className="option-item">
                    <i
                      className="search-btn flaticon-search"
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div> */}

                  <Link href="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
