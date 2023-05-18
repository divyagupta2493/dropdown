import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <>
    <div className="heading" style={{fontSize:"20px",fontWeight:'bold'}}> 
        Should you use a dropdown?
    </div>
    <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
      <option value={null}>Select</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </>
  );
};

export default Dropdown;
