import React, { useState } from 'react';
import CustomContainer from './components/CustomContainer';
import CustomInput from './components/CustomInput';
import NumberButton from './components/NumberButton';

function App() {
  const [input, setInput] = useState('');

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

  return (
    <CustomContainer>
      <CustomInput value={input} />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <NumberButton key={btn} onClick={() => onButtonClick(btn)}>{btn}</NumberButton>
        ))}
        <NumberButton onClick={handleClear} className="col-span-4 bg-[#fdd9a0] hover:bg-[#fccb8f]">Clear</NumberButton>
      </div>
    </CustomContainer>
  );
}

export default App;
