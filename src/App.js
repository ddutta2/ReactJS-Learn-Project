import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <Greet name="Debu" heroName="DD"/>
      <Welcome name="Debu" heroName="DD"/>
      <Message/>
      <Counter addValue="1"/>
      <FunctionClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
