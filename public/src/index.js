import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Search from './pages/Search/Search';
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
    
    
          <Route path = "/" element = {<Home />}/>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "search" element = {<Search/>}/> 
          <Route path = "wishlist" element = {<Wishlist/>}/>
          <Route path = "login" element = {<Login/>}/>
          <Route path = "register" element = {<Register/>}/>
      
      </Routes>
      
    </BrowserRouter>
  </AppProvider>
);

