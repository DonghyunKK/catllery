import React from 'react';
import './navbar.css'

function Navbar ({getNewImg}) {
  return (
    <nav className='navbar'>
      <button className='btn' onClick={getNewImg}>Find new cats</button>
    </nav>
  );
}

export default Navbar;