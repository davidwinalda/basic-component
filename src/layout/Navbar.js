import React from 'react'

import './navbar.css';

const Navbar = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapperNav">
        <ul className="listWrapper">
          <li>QTemu</li>
          <li>Create Meetup</li>
          <li>Explore</li>
        </ul>
        <div>
          Login
        </div>
      </div>
      { children }
    </div>
  );
}

export default Navbar;