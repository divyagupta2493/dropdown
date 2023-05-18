import React from 'react';
import Dropdown from './Dropdown';

const options = ['Yes', 'Probably Not',];

const App = () => {
  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  return <Dropdown options={options} onSelect={handleSelect} />;
};

export default App;
