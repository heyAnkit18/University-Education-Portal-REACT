import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f21333f9-8afc-42e8-adef-285c4c234c42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to react out through contact form or find our contact information below.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@VedantaUniversity.com</li>
          <li><img src={phone_icon} alt="" />+91-21-203-23232</li>
          <li><img src={location_icon} alt="" />Ghaziabad (U.P)</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='nmae' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your contact number' required />
          <label>Write your message here</label>
          <textarea name='message' rows='6' placeholder='Enter your message here' required></textarea>
          <button type='submit' className='btn dark-btn'> Submit Now </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact