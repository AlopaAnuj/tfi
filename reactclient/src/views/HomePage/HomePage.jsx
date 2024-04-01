import React from 'react'
import Home from "./Home";
import UpComingEvents from "./UpComingEvents";
import Constitution from "./Constitution";
import Members from "./Members";
import Footer from "./Footer";
import Images from "./Images";
const HomePage = () => {
  return (
    <>
      <div>
        <Home />
        <UpComingEvents />
        <Images />
        <Constitution />
        <Members />
      </div>
      <Footer />
    </>
  )
}

export default HomePage