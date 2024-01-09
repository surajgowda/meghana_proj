import React from 'react';
import './timetable.css';

const GlassmorphismButton = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Glassmorphism Button</title>
          <link rel="stylesheet" href="timetable.css" />
        </head>

        <body>
          <div className="container">
            <div className="btn">
              <a href="documentviewer">First Semester</a>
            </div>
            <div className="btn">
              <a href="#">Second Semester</a>
            </div>
            <div className="btn">
              <a href="#">Third Semester</a>
            </div>
            <div className="btn">
              <a href="#">Fourth Semester</a>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default GlassmorphismButton;
