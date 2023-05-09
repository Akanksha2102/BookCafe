import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
    
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h1>About Us</h1>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h1 className='about-title fs-26 ls-1'>About BookCafe</h1>
            <p className='fs-17'>Welcome to our bookcafe! We are a team of avid readers who love nothing more than sharing our passion for books with others. Our mission is to help you discover your next favorite read by providing personalized recommendations based on your individual preferences and interests.</p>
            <p className='fs-17'>Whether you're a fan of thrilling page-turners, thought-provoking literary fiction, or heartwarming romance novels, we have something for everyone. Our expert reviewers carefully select the best books in every genre, ensuring you'll always find something to suit your tastes.</p>
            <p className='fs-17'>We understand that the world of books can be overwhelming, with so many options to choose from. That's why we've created a user-friendly platform that makes it easy to browse and discover new titles, as well as connect with other book lovers in our community.</p>
            <p className='fs-17'>At our book recommendation website, we believe that reading is one of life's greatest pleasures. We hope to inspire and enrich your reading experience by helping you discover the books that will transport you to new worlds, challenge your beliefs, and touch your heart. Thank you for joining us on this literary journey!</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
