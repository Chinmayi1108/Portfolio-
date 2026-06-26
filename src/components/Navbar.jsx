import React from 'react';

export default function Navbar({ setActivePage }) {
  return (
    <nav className="navbar container">
      <div className="logo">PORTFOLIO</div>
      <ul className="nav-links">
        <li><button onClick={() => setActivePage('home')}>Home</button></li>
        <li><button onClick={() => setActivePage('about')}>About me</button></li>
        <li><button onClick={() => setActivePage('projects')}>Projects</button></li>
        <li><button onClick={() => setActivePage('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}