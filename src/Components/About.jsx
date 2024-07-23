import React, { useEffect } from 'react';
import AOS from 'aos';
import Img2 from '../assets/named2.jpg';
import School from '../assets/school.jpg';
import Play from '../assets/playground.jpg';
import Img3 from '../assets/named3.jpg';
import Footer from "./Footer";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <section className="text-center py-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-green-500">About Us</h1>
          <br />
          <p className="text-xl text-gray-600">
            "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
          </p>
        </section>

        <section className="py-12 flex flex-col md:flex-row items-center" data-aos="fade-right">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Vision</h2>
            <p className="text-lg text-gray-600">
              "To create a learning environment that fosters academic excellence, critical thinking, and ethical values."
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src={Img2} alt="Vision" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </section>

        <section className="py-12 flex flex-col md:flex-row items-center" data-aos="fade-left">
          <div className="md:w-1/2 p-4">
            <img src={School} alt="Mission" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Mission</h2>
            <p className="text-lg text-gray-600">
              "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."
            </p>
          </div>
        </section>

        <section className="py-12 flex flex-col md:flex-row items-center" data-aos="fade-up">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Principal's Message</h2>
            <p className="text-lg text-gray-600">
              "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src={Play} alt="Principal's Message" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </section>

        <section className="py-12 bg-blue-500 rounded-2xl" data-aos="fade-up">
          <h2 className="text-4xl font-semibold mb-8 text-center text-white">Infrastructure and Facilities</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-[#0DC9C5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9v-6h-9v6zm0 0H3v-6h9v6zm0 0v-8H3v8m9 0h9v-8h-9v8z"></path>
                </svg>
                <h3 className="text-lg font-semibold">Science and Computer Labs</h3>
              </div>
              <p className="text-sm text-gray-600">
                Equipped with the latest technology for hands-on learning experiences.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-[#0DC9C5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16m-7 8h7"></path>
                </svg>
                <h3 className="text-lg font-semibold">Well-Equipped Classrooms</h3>
              </div>
              <p className="text-sm text-gray-600">
                Designed for a comfortable and engaging learning environment.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-[#0DC9C5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3h14v4H5V3zm0 6h14v10H5V9zm7 4h7v2h-7v-2z"></path>
                </svg>
                <h3 className="text-lg font-semibold">Library Collection</h3>
              </div>
              <p className="text-sm text-gray-600">
                Offers a wide range of books and digital resources for all academic needs.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-[#0DC9C5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-7-9-7-9 7 9 7z"></path>
                </svg>
                <h3 className="text-lg font-semibold">Sports Facilities</h3>
              </div>
              <p className="text-sm text-gray-600">
                Includes playground, gymnasium, and swimming pool for physical development.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="zoom-in">
          <div>
            <img src={Img2} alt="Infrastructure" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <img src={School} alt="Facilities" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <img src={Play} alt="Library" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <img src={Img3} alt="Playground" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
