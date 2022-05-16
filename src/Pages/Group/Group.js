import React from 'react';
import './GroupStyle.css';
import { Link } from 'react-router-dom';

const Group = () => {
  return (
    <div>
      <h1>GROUP</h1>
      <p>Lorem impsum</p>
      <nav>
        <Link to="/group/member01"> Member 01 </Link>
        <Link to="/group/member02"> Member 02 </Link>
        <Link to="/group/member03"> Member 03 </Link>
        <Link to="/group/member04"> Member 04 </Link>
        <Link to="/group/member05"> Member 05 </Link>
      </nav>
    </div>
  )
}

export default Group;