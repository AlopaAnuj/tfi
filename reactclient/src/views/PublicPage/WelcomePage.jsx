import React from 'react'
import Header from "./Header";
import Home from "./Home";
import ImageSection from "./ImageSection";
import Constitution from "./Constitution";
import Members from "./Members";
import Footer from "./Footer";

const WelcomePage = () => {

  return (
    <>
      <Header />
      <div className="publicmaincontainer">
        <Home />
        <ImageSection />
        <Constitution />
        <Members />
      </div>
      <Footer />
    </>
  )
}

export default WelcomePage