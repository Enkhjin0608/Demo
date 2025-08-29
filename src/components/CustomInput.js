import React from 'react';

const CustomInput = ({ value }) => (
  <input
    type="text"
    value={value}
    readOnly
    className="w-full mb-4 p-2 text-right rounded bg-[#fffaf0] dark:bg-gray-700 dark:text-white"
  />
);

export default CustomInput;
