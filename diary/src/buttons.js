import React from 'react';
import './Button.css';

function gotopage(url) {
  window.location.href = url;
}

const Button = () => {
  return (
    <div className='button_body'>
      <button id='new-entry' className='dashbuttons' onClick={() => { gotopage('/newform') }}>New Entry</button>
      <button id='old-entry' className='dashbuttons'>Old Entry</button>
    </div>
  );
};

export default Button;
