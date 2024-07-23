import React, { useState } from 'react';
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <br/>
      <br/>
      <br/>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 text-center text-green-500">Contact Us</h2>
          
          <div className="flex flex-col md:flex-row mb-12">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-semibold mb-6 text-gray-700">Contact Information</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-green-500">info@springdale.edu</a>
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6 text-gray-700">Our Location</h3>
              <div className="relative h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126453.16182266607!2d-87.64463270508059!3d41.860587596874265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c1070b14b77%3A0x2923947e8b5a0c12!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1615804061302!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-gray-700 text-center">Contact Form</h3>
            <form action="https://formspree.io/f/mnnajzlg" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ContactUs;
