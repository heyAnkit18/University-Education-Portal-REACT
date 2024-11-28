import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayVideo}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayVideo(true)}} />
        </div>
        <div className='about-right'>
        <h3>About university</h3>
        <h2>Empowering Minds, Shaping Futures: Vedanta Engineering University</h2>
        <p>At Vedanta Engineering University, we are committed to fostering a culture of academic excellence, innovation, and inclusivity. Our rich history of producing world-class professionals is a testament to our dedication.</p>
        <p>We are dedicated to fostering a culture of academic excellence, innovation, and inclusivity. With a rich history of producing world-class professionals.</p>
        <p>We lead the way in groundbreaking research and technological advancements, constantly pushing the boundaries of knowledge. Our faculty and students collaborate to tackle the challenges of tomorrow.</p>
    </div>
    </div>
  )
}

export default About
