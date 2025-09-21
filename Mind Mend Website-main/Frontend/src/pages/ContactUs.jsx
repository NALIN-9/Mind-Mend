import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'font-awesome/css/font-awesome.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j6fpbne', 'template_8qfw96m', e.target, 'ocD6sjKNO1COawjro')
      .then((result) => {
        alert('Email sent successfully:', result.text);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Email sending failed:', error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>

        {/* Location */}
        <div className="address">
          <div className="icon">
            <a href="https://www.google.com/maps/place/KL+University,+Vijayawada" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-map-marker"></i>
            </a>
          </div>
          <p>KL University, Vijayawada</p>
        </div>

        {/* Phone */}
        <div className="address">
          <div className="icon">
            <i className="fa fa-phone"></i>
          </div>
          <p>+91 9876543210</p>
        </div>

        {/* Email */}
        <div className="address">
          <div className="icon">
            <i className="fa fa-envelope"></i>
          </div>
          <p>mindmend@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="social-icons">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/profilename /" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
