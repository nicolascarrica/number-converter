import React from 'react';

function NumberInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <input type="text" value={value} onChange={onChange} placeholder={label}/>
    </div>
  );
}

export default NumberInput;