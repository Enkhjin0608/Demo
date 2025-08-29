import React from 'react';

const NumberButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`p-4 rounded bg-[#f5deb3] hover:bg-[#eecfa1] ${className}`}
  >
    {children}
  </button>
);

export default NumberButton;
