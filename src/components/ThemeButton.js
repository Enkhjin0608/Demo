import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Toggle between light and dark themes using a button
const ThemeButton = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 text-white shadow-lg dark:bg-yellow-500"
      aria-label="Toggle theme"
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default ThemeButton;
