import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Embark on a Journey of Excellence at Vedanta Engineering University</h1>
        <p>
          Dive into a world of innovation and opportunity. At Vedanta Engineering University, you’re not just a student; you’re part of a dynamic community pushing boundaries and achieving greatness. Get ready to challenge yourself, explore new ideas, and turn your dreams into reality with our cutting-edge resources and support. Your journey to success begins here—let’s make it happen.
        </p>
        <button className='btn'>
          Explore More
          <img src={dark_arrow} alt="Arrow pointing down" />
        </button>
      </div>
    </div>
  );
}

export default Hero;

