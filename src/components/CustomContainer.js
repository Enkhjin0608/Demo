import React from 'react';

const CustomContainer = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen bg-[#f5f5dc]">
    <div className="bg-white p-4 rounded shadow-md">{children}</div>
  </div>
);

export default CustomContainer;
