import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Signup from './pages/signup'; 
import Login from './pages/login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* HomePage as the root */}
          <Route path="/signup" element={<Signup />} /> {/* Placeholder for the SignupPage */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
