import React from 'react';
import Header from '../../components/Header/Header';
import "./Home.css";
import Offers from '../../components/Offers/Offers';
import Bestseller from '../../components/Bestseller/Bestseller';
import Newarrivals from '../../components/Newarrivals/Newarrivals';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    // <main>
    //     <Header />
    // </main>
    <div className='h-container'>
      <Offers/>
      <Bestseller/>
      <Newarrivals/>
      <Footer/>
    </div>
  )
}

export default Home
