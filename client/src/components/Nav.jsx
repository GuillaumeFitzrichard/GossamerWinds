import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div id="nav-item">
      <Link to="/about">About</Link>
      <Link to="/media">Media</Link>
      <Link to="/repertoire">Repertoire</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Nav;
