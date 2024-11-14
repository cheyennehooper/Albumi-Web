import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextButton from './textbutton';
import '../styles/navbar.css';

function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title"onClick={handleClick} style={{ cursor: 'pointer' }}>
        ALBUMI
      </h1>
      <div className="nav-t-buttons">
        <TextButton text="LOGIN" to="/login" />
      </div>
    </div>
  );
}

export default NavBar;