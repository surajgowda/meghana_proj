
import React from 'react';
import { Link } from 'react-router-dom';
import './Badge.css';

const Badge = () => {
  return (
    <Link to="/hover-cards" className="badge-link">
      <div className="badge">
        <div className="text1">MSRIT</div>
      </div>
   </Link>
  );
};

export default Badge;
