import React from 'react'
import Home from "./Home";
import UpComingEvents from "./UpComingEvents";
import Members from "./Members";
import Footer from "./Footer";
import ImageSlider from './ImageSlider';

const HomePage = () => {
  return (
    <>
      <div>
        <Home />
        <UpComingEvents />
        <ImageSlider />
        <Members />
      </div>
      <Footer />
    </>
  )
}

export default HomePage