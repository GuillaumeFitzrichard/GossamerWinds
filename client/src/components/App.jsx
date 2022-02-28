import { Outlet, Link } from 'react-router-dom';

import React from 'react';
import Header from './Header.jsx'
import Nav from './Nav.jsx'

function App() {
  return (
    <div id="gossamer-container">
      <Header />
      <Nav />
      <Outlet />  
      <div id="footer">Gossamer Winds 2022</div>
    </div>
  );
}

export default App;
