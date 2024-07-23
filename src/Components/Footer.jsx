import React from 'react';
import logo from '../assets/sprint-logo-white.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 flex flex-wrap justify-between">
      <div className="mb-6 max-w-xs">
        <img src={logo} alt="Springdale Public School" className="w-40 mb-4" />
        <p>
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </div>
      <div className="mb-6">
        <h4 className="mb-4 font-semibold text-xl">QUICK LINKS</h4>
        <ul>
          <li className="mb-2 text-lg"><a href="/about" className="hover:underline">About</a></li>
          <li className="mb-2 text-lg"><a href="/faculty" className="hover:underline">Faculty</a></li>
          <li className="mb-2 text-lg"><a href="/students" className="hover:underline">Students</a></li>
          <li className="mb-2 text-lg"><a href="/admissions" className="hover:underline">Admissions</a></li>
          <li className="mb-2 text-lg"><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="mb-4 font-semibold text-xl">PROGRAMS</h4>
        <ul>
          <li className="mb-2 text-lg"><a href="/primary" className="hover:underline">Primary</a></li>
          <li className="mb-2 text-lg"><a href="/secondary" className="hover:underline">Secondary</a></li>
          <li className="mb-2 text-lg"><a href="/senior-secondary" className="hover:underline">Senior Secondary</a></li>
          <li className="mb-2 text-lg"><a href="/extracurricular" className="hover:underline">Extracurricular</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="mb-4 font-semibold text-xl">CONTACT US</h4>
        <p className="text-lg">Springdale Public School, 123 Education Lane, Cityville</p>
        <br />
        <p className="text-lg">Tel: +1 (123) 456-7890</p>
        <br />
        <p className="text-lg">Mail: <a href="mailto:info@springdale.edu" className="hover:underline">info@springdale.edu</a></p>
      </div>
      <div className="w-full text-center mt-6 text-xl">
        <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
