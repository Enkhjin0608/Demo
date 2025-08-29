import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CustomContainer from './components/CustomContainer';
import CustomInput from './components/CustomInput';
import NumberButton from './components/NumberButton';
import ThemeButton from './components/ThemeButton';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

function App() {
  const [input, setInput] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput('');

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(String(eval(input)));
    } catch {
      setInput('Error');
    }
  };

  const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];

  const onButtonClick = (value) => {
    if (value === '=') {
      handleCalculate();
    } else {
      handleClick(value);
    }
  };

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <CustomContainer>
          <CustomInput value={input} />
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <NumberButton key={btn} onClick={() => onButtonClick(btn)}>{btn}</NumberButton>
            ))}
            <NumberButton
              onClick={handleClear}
              className="col-span-4 bg-[#fdd9a0] hover:bg-[#fccb8f] dark:bg-red-600 dark:hover:bg-red-500"
            >
              Clear
            </NumberButton>
          </div>
        </CustomContainer>
        <ThemeButton isDark={isDark} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
