import React, { useEffect } from 'react';
import Footer from './Footer';
import First from '../assets/first.jpg';
import Second from '../assets/second.jpg';
import Third from '../assets/third.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Academics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <section className="py-12 bg-gray-100" data-aos="fade-up">
        <h2 className="text-4xl font-semibold mb-8 text-center text-green-500">Academics</h2>

        <div className="container mx-auto px-6">
          {/* Curriculum Section */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="md:w-1/2">
              <img src={First} alt="Curriculum" className="w-full h-70 object-cover rounded-lg mb-4 md:mb-0" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>
              <div className="text-lg text-gray-700">
                <h4 className="text-xl font-semibold mt-4">Primary (Grades 1-5)</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Studies</li>
                  <li>Art</li>
                  <li>Physical Education</li>
                </ul>
                <h4 className="text-xl font-semibold mt-4">Secondary (Grades 6-10)</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Science (Physics, Chemistry, Biology)</li>
                  <li>Social Studies</li>
                  <li>Computer Science</li>
                  <li>Physical Education</li>
                  <li>Art</li>
                </ul>
                <h4 className="text-xl font-semibold mt-4">Senior Secondary (Grades 11-12)</h4>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                  <li><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teaching Methodologies Section */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="md:w-1/2">
              <img src={Third} alt="Teaching Methodologies" className="w-full h-64 object-cover rounded-lg mb-4 md:mb-0" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Teaching Methodologies</h3>
              <p className="text-lg text-gray-700">
                "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
              </p>
            </div>
          </div>

          {/* Educational Resources Section */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="md:w-1/2">
              <img src={Second} alt="Educational Resources" className="w-full h-64 object-cover rounded-lg mb-4 md:mb-0" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Educational Resources</h3>
              <p className="text-lg text-gray-700">
                "Digital classrooms, interactive learning modules, and access to online educational platforms."
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Academics;
