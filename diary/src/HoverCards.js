import React from 'react';
import './HoverCards.css';

const HoverCards = () => {

  const goto = (url) => {
    window.location.href = url;
  }

  return (
    <nav id="hovercard-body">
      <div className="all">
        <div className="lefter">
          <div className="text">Workshops</div>
        </div>
        <div className="left" onClick={() => goto("timetable")}>
          <div className="text">Time Table</div>
        </div>
        <div className="center">
          <div className="explainer" onClick={() => goto("login")} ><span>Teaching Diary</span></div>
          <div className="text">Login</div>
        </div>
        <div className="right" onClick={() => goto("timetable")}>
          <div className="text">Syllabus</div>
        </div>
        <div className="righter" onClick={() => goto("ac")}>
          <div className="text">Academic Calendar</div>
        </div>
      </div>
    </nav>
  );
};

export default HoverCards;
