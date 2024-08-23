import React from 'react';

const Popup = ({ isOpen, onYes, onNo }) => (
  <div className={`popup ${isOpen ? 'open' : ''}`}>
    <div className="popup-content">
      <p>Are you an existing user?</p>
      <button onClick={onYes}>Yes</button>
      <button onClick={onNo}>No</button>
    </div>
  </div>
);

export default Popup;
