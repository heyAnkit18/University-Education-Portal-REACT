import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'; 

const Hero = () => {
  
  const [showButton, setShowButton] = useState(true);
  const [text, setText] = useState({
    heading: 'Embark on a Journey of Excellence at Vedanta Engineering University',
    paragraph: 'Dive into a world of innovation and opportunity. At Vedanta Engineering University, you’re not just a student; you’re part of a dynamic community pushing boundaries and achieving greatness. Get ready to challenge yourself, explore new ideas, and turn your dreams into reality with our cutting-edge resources and support. Your journey to success begins here—let’s make it happen.'
  });

  
  const handleClick = () => {
    setText({
      heading: '"Explore the Future of Engineering with AIR-1 College"',
      paragraph: "At AIR-1 College, we are dedicated to guiding you through a transformative journey in the world of engineering. Our cutting-edge programs and state-of-the-art facilities empower you to push the boundaries of technology and innovation. Here, you’ll collaborate with top-tier professionals and visionary peers, gaining hands-on experience and knowledge that will shape the future of engineering. Join us to explore groundbreaking opportunities and develop the skills necessary to lead in a rapidly evolving industry. Your path to engineering excellence starts here!"
    });
    setShowButton(false); 
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>{text.heading}</h1>
        <p>{text.paragraph}</p>
        {showButton && (
          <button className='btn' onClick={handleClick}>
            Explore More 
            <img src={dark_arrow} alt="Arrow pointing down" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
