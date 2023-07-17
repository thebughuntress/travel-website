import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <React.Fragment>
      <Router basename="/travel-website">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;


