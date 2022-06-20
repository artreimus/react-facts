import React from 'react';
import Logo from '../images/react-icon-small.png';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav
      className={darkMode ? 'dark' : ''}
    >
      <img
        className="nav--logo_icon"
        src={Logo}
        alt="react-logo"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div
        className="toggler"
      >
        <p className="toggler--light">Light</p>
        <div
          className="toggler--slider"
          onClick={toggleDarkMode}
          aria-hidden="true"
        >
          <div className="toggler--slider--circle" />
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
