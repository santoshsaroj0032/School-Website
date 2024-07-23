import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import Img3 from '../assets/named3.jpg';
import Library from '../assets/library.jpg';
import Footer from "./Footer";
import AboutImage from "./AboutImage";

// Define image and video data
const photos = [
  { src: Sports, alt: 'Students participating in various sports events.' },
  { src: Literacy, alt: 'Students presenting their science projects.' },
  { src: Drama, alt: 'Students performing in the cultural fest.' },
  { src: Img3, alt: 'A glimpse of our interactive classrooms.' },
  { src: Library, alt: 'Students reading and studying in the school library.' }
];

const videos = [
  { src: 'https://www.youtube.com/embed/zPOcQ2i9kaU', title: 'Virtual tour of Springdale Public School.' },
  { src: 'https://www.youtube.com/embed/rgebxXVxkPk', title: 'Highlights from the Annual Function 2023.' }
];

const Gallery = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
    <br/>
    <br/>
    <br/>

    <section className="py-12 bg-gray-100" data-aos="fade-up">
      <h2 className="text-4xl font-semibold mb-8 text-center text-green-500">Gallery</h2>

      <div className="container mx-auto px-6">
        {/* Photos */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-700">Photos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity">
                  <p className="p-4">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AboutImage/>
        {/* Videos */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-700">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <iframe 
                  width="100%" 
                  height="315" 
                  src={video.src} 
                  title={video.title} 
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity">
                  <p className="p-4">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Gallery;
