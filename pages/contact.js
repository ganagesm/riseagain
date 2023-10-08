import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Live/Footer";
import Head from 'next/head';

const Contact = () => {
  return (
    <>
     <Head>
        <title>Connect with TrioSource Professionals | Reach Out to Us Now  </title>
        <meta property="og:title" content="Connect with TrioSource Professionals | Reach Out to Us Now  " key="title" />
        <meta name="description" content="Seeking expert solutions or have inquiries? Engage with TrioSource today. Let's navigate the path to your business success together, providing specialized solutions tailored just for you. " key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg3"
      />

      <ContactFormContent />

      <Footer />
    </>
  );
};

export default Contact;
