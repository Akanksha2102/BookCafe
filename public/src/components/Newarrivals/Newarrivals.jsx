import React from 'react'
import './Newarrivals.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import na1 from "../../images/na1.png";
import na2 from "../../images/na2.jpg";
import na3 from "../../images/na3.jpg";
import na4 from "../../images/na4.jpg";
import na5 from "../../images/na5.jpg";
import na6 from "../../images/na6.png";
import na7 from "../../images/na7.jpg";
const Newarrivals = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='arrival-container'>
       <h1>NEW ARRIVALS</h1>
      <Carousel responsive={responsive}>
    <div className="card" >
      <img className="product--image" src={na1} alt="na1"/>
      <h4>Reminders of Him</h4>
      <p classname="price">150 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={na2} alt="na2"/>
      <h4>My Heart is a Chainsaw</h4>
      <p classname="price">340 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={na3} alt="na3"/>
      <h4>Set on You</h4>
      <p classname="price">210 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={na4} alt="na4"/>
      <h4>What Moves the Dead</h4>
      <p classname="price">450 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={na5} alt="na5"/>
      <h4>One Italian Summer</h4>
      <p classname="price">265 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={na6} alt="na6"/>
      <h4>Demon Copperhead</h4>
      <p classname="price">349 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={na7} alt="na7"/>
      <h4>Something Wilder</h4>
      <p classname="price">199 Coins</p>
      <button>Add to Wishlist</button>
    </div>
  </Carousel>
    </div>
  )
}

export default Newarrivals
