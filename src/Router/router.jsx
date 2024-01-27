import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/home';
import About from '../Pages/About/about';
import Skills from '../Pages/Skills/skills';
import Works from '../Pages/Works/works';
import Contact from '../Pages/Contact/contact';
import NotFound from '../Pages/NotFound/notFound';
import ProgressScrollBar from '../Pages/ProgressBar/progressBar';
import ScrollToTopButton from "../Pages/ScrollTopButton/scrolTopBtn";


export default function RouterApp() {

  return (
      <Router basename='youce-portfolio'>
        <ProgressScrollBar />
        <ScrollToTopButton />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
  );
}
