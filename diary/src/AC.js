import React from 'react';
import tmImage from './tm.jpg'; // Import the image

const ImageDisplay = () => {
  return (
    <div>
      <h1>Time Table</h1>

      {/* Display the current image */}
      <img id="displayImage" src={tmImage} alt="Time Table" height="800" width="800" />
    </div>
  );
};

export default ImageDisplay;
