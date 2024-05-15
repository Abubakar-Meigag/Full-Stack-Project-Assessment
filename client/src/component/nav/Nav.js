import React from 'react'
import { Link } from 'react-router-dom';
import '../nav/nav.css';

const Nav = () => {
  return (
    <div className='nav-continuer'>
      <ul className='left-ul'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/videos"> Videos </Link></li>
        <li><Link to="/create"> Create </Link></li>
      </ul>
    </div>
  );
}

export default Nav

