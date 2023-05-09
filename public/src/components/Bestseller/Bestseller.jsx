import React from 'react'
import './Bestseller.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bs1 from "../../images/bs1.jpg";
import bs2 from "../../images/bs2.jpg";
import bs3 from "../../images/bs3.jpg";
import bs4 from "../../images/bs4.jpg";
import bs5 from "../../images/bs5.jpg";
import bs6 from "../../images/bs6.jpg";
import bs7 from "../../images/bs7.jpg";
const Bestseller = () => {
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
    
      <div className="bestseller-container" >
      <h1>BEST-SELLER</h1>
      <Carousel responsive={responsive}>
    <div className="card" >
      <img className="product--image" src={bs1} alt="bs1"/>
      <h4>The Palace of Illutions</h4>
      <p classname="price">150 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={bs2} alt="bs2"/>
      <h4>Wish I Could Tell You</h4>
      <p classname="price">230 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={bs3} alt="bs3"/>
      <h4>Rich Dad Poor Dad</h4>
      <p classname="price">150 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={bs4} alt="bs4"/>
      <h4>Call me by Your Name</h4>
      <p classname="price">435 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={bs5} alt="bs5"/>
      <h4>Regretting You</h4>
      <p classname="price">450 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={bs6} alt="bs6"/>
      <h4>After The End</h4>
      <p classname="price">370 Coins</p>
      <button>Add to Wishlist</button>
    </div>
    <div className="card">
      <img className="product--image" src={bs7} alt="bs7"/>
      <h4>Dark Matter</h4>
      <p classname="price">185 Coins</p>
      <button>Add to Wishlist</button>
    </div>
  </Carousel>
    </div>
  )
}

export default Bestseller
