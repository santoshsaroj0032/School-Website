import React, { useEffect } from 'react';
import { FaCalendarAlt, FaFileDownload, FaCheckCircle } from 'react-icons/fa';
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Admissions = () => {
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
        <h2 className="text-4xl font-semibold mb-8 text-center text-green-500">Admissions</h2>

        <div className="container mx-auto px-6">
          {/* Admission Process Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
            <div className="flex items-center mb-4">
              <FaFileDownload className="w-6 h-6 text-green-500 mr-3" />
              <p className="text-lg text-gray-700">
                Admission forms are available for download. Submit the completed form along with required documents at the school office.
              </p>
            </div>
          </div>

          {/* Admission Criteria Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Admission Criteria</h3>
            <div className="flex items-center mb-4">
              <FaCheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <p className="text-lg text-gray-700">
                Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
              </p>
            </div>
          </div>

          {/* Important Dates Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCalendarAlt className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-lg text-gray-700">
                  <strong>Admission Form Availability:</strong> March 1st
                </p>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-lg text-gray-700">
                  <strong>Last Date for Submission:</strong> March 31st
                </p>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-lg text-gray-700">
                  <strong>Entrance Test:</strong> April 15th
                </p>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="w-6 h-6 text-green-500 mr-3" />
                <p className="text-lg text-gray-700">
                  <strong>Announcement of Results:</strong> April 30th
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Admissions;
