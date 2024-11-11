import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024 All rights reserved. Your Company Name.</p>
      <p>Creating a better future through technology.</p>
      <p>Follow us on:</p>
      <div className='social-icons'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a> | 
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a> | 
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
      </div>
    </div>
  )
}

export default Footer;

