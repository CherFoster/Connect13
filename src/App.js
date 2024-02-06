import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
      </Router>
      
    </div>
  );
}

export default App;
