import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
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

const AboutImage = () => {
  const { scrollY } = useViewportScroll();
  const xTransform = useTransform(scrollY, [0, 1000], [0, -320]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container-fluid about-img-row">
      <div className="container">
        <div className="row">
          <motion.div
            className={`flex flex-col about-img-wrap js-anim-about-img-wrap ${isMobile ? 'w-full' : 'w-[100rem] p-0 m-0'}`}
            style={isMobile ? {} : { x: xTransform }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div className={`flex ${isMobile ? 'flex-col' : 'items-end'} mb-4`}>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-1`}
                  src={Art}
                  alt="Happy Meeting"
                />
              </div>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-2`}
                  src={Dance}
                  alt="Typing"
                />
              </div>
              <div className={`${isMobile ? 'w-full' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full' : ''} about-img-3`}
                  src={Debate}
                  alt="Meeting Blurred"
                />
              </div>
            </div>
            <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} mb-4`}>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-4`}
                  src={Astronomy}
                  alt="Team 1"
                />
              </div>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={Robot}
                  src={Music}
                  alt="Table"
                />
              </div>
              <div className={`${isMobile ? 'w-full' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full' : ''} about-img-6`}
                  src={Sports}
                  alt="Dogs"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
