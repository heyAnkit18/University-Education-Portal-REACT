import React, { useState } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(prevState => !prevState); // Toggle the state
  };

  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt="Campus Image 1" />
        <img src={gallery_2} alt="Campus Image 2" />
        <img src={gallery_3} alt="Campus Image 3" />
        <img src={gallery_4} alt="Campus Image 4" />
      </div>
      <button className='btn dark-btn' onClick={handleButtonClick}>
        {showDetails ? 'Show Less' : 'Discover More'} <img src={white_arrow} alt="Arrow" />
      </button>
      {showDetails && (
        <div className='campus-details'>
          <h3>Discover the Vibrant Campus Life</h3>
          <p><strong>Library:</strong> Our state-of-the-art library is equipped with the latest resources, quiet study areas, and collaborative spaces to enhance your learning experience.</p>
          <p><strong>Sports Facilities:</strong> Enjoy our diverse range of sports facilities, including tennis courts, a gymnasium, and swimming pool, all designed to keep you active and engaged.</p>
          <p><strong>Events:</strong> From academic conferences to cultural festivals, our campus hosts a variety of events to enrich your student life and foster community connections.</p>
          <p><strong>Grounds:</strong> Relax and unwind in our beautifully landscaped grounds, featuring outdoor seating areas, walking paths, and lush green spaces perfect for socializing and leisure.</p>
        </div>
      )}
    </div>
  );
};

export default Campus;
