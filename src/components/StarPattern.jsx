import React, { useState } from 'react';


const StarPattern = () => {
  const [number, setNumber] = useState();
  const [pattern, setPattern] = useState([]);

  const handleSubmit = () => {
    let result = '';

    for (let i = 1; i <= number; i++) {
      result += '*'.repeat(i) + '\n';
    }

    for (let i = number - 1; i >= 1; i--) {
      result += '*'.repeat(i) + '\n';
    }

    setPattern(result);
  };

  return (
    <div className="star-pattern-container">
      <label>Input :</label>
      <input 
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="input-number"
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      <pre className="pattern-output">{pattern}</pre>
    </div>
  );
};

export default StarPattern;
