import React from 'react';

import Header from './Components/Header';
import Counter from './Components/Counter';

import './assets/css/App.css';

function App() {
  return (
    <>
      <Header title="Counter App" />
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

export default App;
