import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../assets/named1.jpg';
// import Img2 from '../assets/named2.jpg';
import Img3 from '../assets/named3.jpg';
import School from '../assets/school.jpg';
import Library from '../assets/library.jpg';
import Banner from './Banner';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Banner />
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img src={Img1} alt="School 1" className="w-full h-[400px] sm:h-[300px] object-cover" />
          </div>
          <div>
            <img src={Library} alt="School 2" className="w-full h-[400px] sm:h-[300px] object-cover" />
          </div>
          <div>
            <img src={Img3} alt="School 3" className="w-full h-[400px] sm:h-[300px] object-cover" />
          </div>
        </Slider>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 shadow-md rounded-md flex flex-col">
          <h2 className="text-orange-500 text-xl font-bold mb-4">Welcome To</h2>
          <h3 className="text-2xl font-semibold mb-4">Springdale Public School</h3>
          <img src={School} alt="Principal" className="w-full h-auto mb-4 rounded-md" />
          <p className="text-base md:text-lg">
            Welcome to Springdale Public School, where we nurture young minds for a brighter future.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Read More ➞</button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md flex flex-col">
          <h2 className="text-orange-500 text-xl font-bold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            <li>
              <div className="text-green-500 text-2xl font-bold">22</div>
              <div className="text-gray-600 text-lg font-bold">AUG</div>
              <div className="text-gray-800">"Annual Sports Day - Celebrating Excellence in Sports"</div>
            </li>
            <li>
              <div className="text-green-500 text-2xl font-bold">15</div>
              <div className="text-gray-600 text-lg font-bold">MAY</div>
              <div className="text-gray-800">"Science Exhibition - Showcasing Student Innovations"</div>
            </li>
            <li>
              <div className="text-green-500 text-2xl font-bold">29</div>
              <div className="text-gray-600 text-lg font-bold">APR</div>
              <div className="text-gray-800">"Cultural Fest - Embracing Diversity and Creativity"</div>
            </li>
          </ul>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View All Events ➞</button>
        </div>
      </div>
    </>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full shadow-lg hover:bg-gray-200`}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full shadow-lg hover:bg-gray-200`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default Home;
