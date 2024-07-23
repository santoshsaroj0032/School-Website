import React, { useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import Footer from "./Footer";
import Man from '../assets/man.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const facultyMembers = [
  { name: 'John Doe', position: 'Principal', qualifications: 'M.Ed', experience: '20 years of experience in educational administration' },
  { name: 'Jane Smith', position: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: '15 years of teaching experience' },
  { name: 'Emily Johnson', position: 'English Teacher', qualifications: 'M.A. in English', experience: '10 years of teaching experience' },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: '8 years of teaching experience' },
  { name: 'Sophia Davis', position: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: '12 years of teaching experience' },
  { name: 'David Wilson', position: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: '5 years of teaching experience' },
];

const Faculty = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <br/>
      <br/>
      <br/>
      <section className="py-12 bg-gray-100" data-aos="fade-up">
        <h2 className="text-4xl font-semibold mb-4 text-center text-green-500">Faculty</h2>
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-700">Profiles</h3>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={Man}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-lg font-semibold text-gray-800">{member.position}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <FaGraduationCap className="w-4 h-4 text-green-500 mr-1" />
                      {member.qualifications}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faculty;
