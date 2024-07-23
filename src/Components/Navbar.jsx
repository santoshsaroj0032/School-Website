import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/sprint-logo-white.svg';
import changedLogo from '../assets/changedlogo.svg';
import '../styles/Nav.css';
import '../styles/index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClass = 'bg-white'; // Set the navbar color to white
  const textColor = 'black'; // Text color for visibility on a white background
  const underlineColor = 'black'; // Underline color for links

  const getLogo = () => {
    return changedLogo; // Use the changed logo based on your previous implementation
  };

  return (
    <nav className={`fixed top-0 w-full z-50 p-4 transition-colors duration-300 ${navbarClass}`} style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to='/' className="text-black text-xl font-bold">
            <img src={getLogo()} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-8" style={{ color: textColor, '--underline-color': underlineColor }}>
            <Link to="/about" className="underline-animation font-bold">About Us</Link>
            <Link to="/academics" className="underline-animation font-bold">Academics</Link>
            <Link to="/admissions" className="underline-animation font-bold">Admissions</Link>
            <Link to="/faculty" className="underline-animation font-bold">Faculty</Link>
            <Link to="/students" className="underline-animation font-bold">Students</Link>
            <Link to="/gallery" className="underline-animation font-bold">Gallery</Link>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#0DC9C5] text-white px-5 py-3 rounded-full hover:bg-[#0DC9C1] font-medium">
              <Link to="/contact" className="text-white">Contact</Link>
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4" style={{ color: textColor, '--underline-color': underlineColor }}>
            <Link to="/about" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/academics" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Academics</Link>
            <Link to="/admissions" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Admissions</Link>
            <Link to="/faculty" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Faculty</Link>
            <Link to="/students" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Students</Link>
            <Link to="/gallery" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
