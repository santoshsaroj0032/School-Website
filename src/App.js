import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Nav from './Components/Navbar';
import Home from './Components/Homepage';
import About from './Components/About';
import Academics from './Components/Academics';
import Admissions from "./Components/Admissions";
import Faculty from "./Components/Faculty";
import Students from "./Components/Students";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";



const App = () => {
  return (
    <>
      <Nav />
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/students" element={<Students />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />

      </Routes>
      
      
      
    </>
  );
};

export default App;
