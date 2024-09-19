import React from 'react';
// import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="About University" className='about-img' />
        <img src={play_icon} alt="Play Icon" className='play-icon' />
      </div>
      <div className='about-right'>
        <h3>About university</h3>
        <h2>Empowering Minds, Shaping Futures: Vedanta Engineering University</h2>
        <p>At Vedanta Engineering University, we are committed to fostering a culture of academic excellence, innovation, and inclusivity. Our rich history of producing world-class professionals is a testament to our dedication.</p>
        <p>We are dedicated to fostering a culture of academic excellence, innovation, and inclusivity. With a rich history of producing world-class professionals.</p>
        <p>We lead the way in groundbreaking research and technological advancements, constantly pushing the boundaries of knowledge. Our faculty and students collaborate to tackle the challenges of tomorrow.</p>
        <p>Our faculty and students work together to solve the challenges of tomorrow. We invite you to become part of a university that doesn't just prepare you for the future but empowers you to shape it.</p>
        <p>Join us at Vedanta Engineering University—where we don’t just prepare you for the future, but empower you to shape it.</p>
      </div>
    </div>
  );
}

export default About;
