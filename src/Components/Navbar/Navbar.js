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
      <nav className="nav">
        <Link className="nav__link" to="/"> Home </Link>
        <Link className="nav__link" to="/group"> Group </Link>
        <Link className="nav__link" to="/contact"> Contact </Link>
      </nav>
    </div>
  )
}

export default Navbar;