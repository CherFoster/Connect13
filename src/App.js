import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import OurValues from './components/OurValues';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Home />
        <OurValues />
      </Router>
      
    </div>
  );
}

export default App;
