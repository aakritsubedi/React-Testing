import React, { useState } from 'react';
import Button from '../Button/Button';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const updateCounter = (action) => {
    let factor = 0;
    if (action === 'INCREMENT') {
      factor = 1;
    } else if (action === 'DECREMENT') {
      factor = -1;
    } else {
      setErrorMessage('Unknown action');
    }

    setCounter((prev) => prev + factor);
  };

  return (
    <div className="wrapper">
      <h1>This is counter application</h1>
      <span className="counter">{counter}</span>

      <div className="mt-4">
        <Button
          label="Increment Counter"
          action={() => updateCounter('INCREMENT')}
          className="btn-success"
          id="increment-btn"
        />
        <Button
          label="Decrement Counter"
          action={() => updateCounter('DECREMENT')}
          disabled={counter === 0}
          className="btn-danger"
          id="decrement-btn"
        />
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </div>
    </div>
  );
}
