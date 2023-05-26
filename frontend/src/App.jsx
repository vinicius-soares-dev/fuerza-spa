import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/About';
import Recruitment from './pages/Recruitment';

import './styles/styleConfig.css';

function App() {
  return (
    <Router>
      <Routes>

        <Route 
        path="/" 
        element= { <Home /> } 

        />

        <Route 
        path="/about" 
        element= { <Sobre /> } 

        />

        <Route
        path='/recruitment'
        element= { <Recruitment /> }
         />

      </Routes>
    </Router>

  )
}

export default App;
