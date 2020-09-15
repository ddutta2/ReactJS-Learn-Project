import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Debu" heroName="DD"/>
      <Welcome name="Debu" heroName="DD"/>
    </div>
  );
}

export default App;
