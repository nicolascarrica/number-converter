import React, { useState } from 'react';
import NumberInput from '../components/NumberInput';
import toIEEE754 from '../utils/IEE754';

const Convertor = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [ieee754, setIEEE754] = useState('');


  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);
    setBinary(parseInt(value, 10).toString(2));
    setHexadecimal(parseInt(value, 10).toString(16).toUpperCase());
    setIEEE754(toIEEE754(value));
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);
    setDecimal(parseInt(value, 2).toString(10));
    setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
    setIEEE754(toIEEE754(value));
  };

  const handleHexadecimalChange = (e) => {
    const value = e.target.value;
    setHexadecimal(value);
    setDecimal(parseInt(value, 16).toString(10));
    setBinary(parseInt(value, 16).toString(2));
    setIEEE754(toIEEE754(value));
  };

  return (
    <div className="convertor-container">
      <h1>Number Converter</h1>
      <NumberInput label="Decimal" value={decimal} onChange={handleDecimalChange} />
      <NumberInput label="Binary" value={binary} onChange={handleBinaryChange} />
      <NumberInput label="Hexadecimal" value={hexadecimal} onChange={handleHexadecimalChange} />
      <NumberInput label="IEEE754" value={ieee754} onChange={() => { }} />
    </div>
  );
};

export default Convertor;
