import React from 'react';
import { Link } from 'react-router-dom';
import './Badge.css';

const Badge = () => {
  return (
    <div>
      <marquee>
        <h1 style={{ fontSize: '2rem', color: '#fff' }}>Department of MCA</h1>
      </marquee>
      <Link to="/hover-cards" className="badge-link">
        <div className="badge">
          <div className="text1">MSRIT</div>
        </div>
      </Link>
    </div>
  );
};

export default Badge;
