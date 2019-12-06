import React from 'react';
import Home from '../Components/Home/Home';

import './App.scss';

import Shop from '../Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
      <Shop />
      </header>
    </div>
  );
}

export default App;
