import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Footer";
import Art from "../assets/art.jpeg";
import Dance from "../assets/dance.jpeg";
import Debate from "../assets/debate.jpeg";
import Drama from "../assets/drama.jpeg";
import Club from "../assets/club.jpeg";
import Robot from "../assets/robots.webp";
import Music from "../assets/music.png";
import Sports from "../assets/sports.webp";
import Coding from "../assets/coding.jpeg";
import Astronomy from "../assets/astronomy.jpeg";
import Environment from "../assets/environment.jpeg";
import Literacy from "../assets/literacy.jpeg";
import Win1 from "../assets/win1.jpg";
import Win2 from "../assets/win23.jpeg";
import Win3 from "../assets/wind3.jpg";

const Students = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="p-4 sm:p-8 bg-gray-100 min-h-screen overflow-x-hidden">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-500">Life at Springdale</h1>
        
        <section data-aos="fade-up" className="mb-8 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-700 border-b-2 border-indigo-300 pb-2">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {[
              { src: Music, label: "Music" },
              { src: Dance, label: "Dance" },
              { src: Drama, label: "Drama" },
              { src: Art, label: "Art" },
              { src: Sports, label: "Sports" },
              { src: Robot, label: "Robotics" },
              { src: Debate, label: "Debate Club" },
              { src: Club, label: "Science Club" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <img src={item.src} alt={item.label} className="w-full h-48 sm:h-60 object-cover rounded-lg shadow-md" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm sm:text-lg px-2 py-1 rounded-b-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-left" className="mb-8 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-700 border-b-2 border-indigo-300 pb-2">Clubs and Societies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[
              { src: Literacy, label: "Literacy Society" },
              { src: Environment, label: "Environment Club" },
              { src: Astronomy, label: "Astronomy Club" },
              { src: Coding, label: "Coding" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <img src={item.src} alt={item.label} className="w-full h-48 sm:h-60 object-cover rounded-lg shadow-md" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm sm:text-lg px-2 py-1 rounded-b-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-left" className="mb-8 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-700 border-b-2 border-indigo-300 pb-2">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { src: Win1, name: "John Smith", achievement: "National Level Math Olympiad Winner" },
              { src: Win2, name: "Sarah Lee", achievement: "Gold Medalist in State Swimming Championship" },
              { src: Win3, name: "Tech Innovators Club", achievement: "Winners of Inter-School Robotics Competition" }
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition">
                <img src={item.src} alt={item.name} className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">{item.name}</h3>
                  <p className="text-gray-700">{item.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-left" className="mb-8 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-700 border-b-2 border-indigo-300 pb-2">Student Council</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { src: Win3, role: "President", name: "Amy Parker", grade: "Grade 12" },
              { src: Win2, role: "Vice President", name: "Rajiv Mehta", grade: "Grade 11" },
              { src: Win1, role: "Secretary", name: "Lisa Wong", grade: "Grade 10" }
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition">
                <img src={item.src} alt={item.role} className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-indigo-700">{item.role}</h3>
                  <p className="text-gray-700">{item.name}, {item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Students;
