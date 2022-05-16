import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

//Styled Navbar
import './NavbarStyle.css';

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();


  const handleClick = () => {
    navigate("/Home");
  }

  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/group"> Group </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
    </div>
  )
}

export default Navbar;