import React from 'react'
import Home from "./Home";
import UpComingEvents from "./UpComingEvents";
import Members from "./Members";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div>
        <Home />
        <UpComingEvents />
        <Members />
      </div>
      <Footer />
    </>
  )
}

export default HomePage