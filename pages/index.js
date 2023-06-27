import Navbar from "../components/Layouts/Navbar";
import NavbarSeven from "../components/Layouts/NavbarSeven";
import Footer from "../components/Layouts/Footer";

import HeroBanner from "../components/nearshore/HeroBanner";
import Outpartnerships from "../components/HomeEight/Outpartnerships";
import AboutUs from "../components/nearshore/AboutUs";
import Services from "../components/nearshore/Services";
import Testimonials from "../components/HomeThree/Testimonials";
import BlogPost from "../components/Common/BlogPost";
import FunFacts from "../components/nearshore/FunFacts";
import MainBanner from "../components/nearshore/MainBanner";


const Index = () => {
    return (
        <>
        <NavbarSeven />
        <HeroBanner/>
        <AboutUs />
        <Outpartnerships/>
        <Services/>
        <FunFacts />
        <MainBanner/>
        <Testimonials />
       <BlogPost />
       <Footer />
        </>
    )
}
export default Index;

// import React from "react";
// import NavbarThree from "../components/Layouts/NavbarThree";
// import MainBanner from "../components/HomeTwo/MainBanner";
// import OurFeaturedSolutions from "../components/HomeTwo/OurFeaturedSolutions";
// import AboutUs from "../components/HomeTwo/AboutUs";
// import Services from "../components/HomeTwo/Services";
// import FunFacts from "../components/HomeTwo/FunFacts";
// import Projects from "../components/HomeTwo/Projects";
// import OurPricingPlan from "../components/HomeTwo/OurPricingPlan";
// import Testimonials from "../components/HomeTwo/Testimonials";
// import BlogPost from "../components/Common/BlogPost";
// import FreeTrialArea from "../components/Common/FreeTrialArea";
// import PartnerSlider from "../components/Common/PartnerSlider";
// import Footer from "../components/Layouts/Footer";

// const Index2 = () => {
//   return (
//     <>
//       <NavbarThree />

//       <MainBanner />

//       <OurFeaturedSolutions />

//       <AboutUs />

//       <Services />

//       <FunFacts />

//       <Projects />

//       <OurPricingPlan />

//       <Testimonials />

//       <BlogPost />

//       <FreeTrialArea />

//       <PartnerSlider />
      
//       <Footer />
//     </>
//   );
// };

// export default Index2;
