import React from 'react';

const CustomContainer = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen bg-[#f5f5dc] dark:bg-gray-900">
    <div className="bg-white p-4 rounded shadow-md dark:bg-gray-800 dark:text-white">{children}</div>
  </div>
);

export default CustomContainer;
