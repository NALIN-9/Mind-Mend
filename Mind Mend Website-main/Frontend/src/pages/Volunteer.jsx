import React from 'react';

// Import your local images with exact filenames
import nalin from '../images/nalin.JPG';
import shoib from '../images/shoib.jpg';
import raj from '../images/raj.JPG';

const founders = [
  { name: 'Nalin Kumar', role: 'Front-end Team', image: nalin },
  { name: 'Shoaib', role: 'Front-end Team', image: shoib },
  { name: 'Nalin Raj', role: 'Front-end Team Lead', image: raj },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
