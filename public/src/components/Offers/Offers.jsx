import React from 'react'
import "./Offers.css";
import ImageSlider, { Slide } from "react-auto-image-slider";
import poster1 from "../../images/poster1.png";
import poster2 from "../../images/poster2.png";
import poster3 from "../../images/poster3.png";
import poster4 from "../../images/poster4.png";
import poster5 from "../../images/poster5.png";
const Offers = () => {
  return (
    <div className="offer-container">
      <ImageSlider effectDelay={500} autoPlayDelay={4000} >
      <Slide>
        <img className="sliderimg" alt="img1" src={poster1} />
      </Slide>
      <Slide>
      <img className="sliderimg" alt="img4" src={poster4} />
      </Slide>
      <Slide>
        <img className="sliderimg" alt="img2" src={poster2} />
      </Slide>
      <Slide>
        <img className="sliderimg" alt="img5" src={poster5} />
      </Slide>
      <Slide>
        <img className="sliderimg" alt="img3" src={poster3} />
      </Slide>
    </ImageSlider>
    </div>
  )
}

export default Offers
