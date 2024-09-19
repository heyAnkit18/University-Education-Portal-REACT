import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="Website Logo" className='logo' />
      <ul className='nav-links'>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-110} duration={500}>About</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-175} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-240} duration={500}>Testimonials</Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
