import React, { useState } from 'react';
import './Navbar.css';
import logo from '/public/IMGS/Dragon-logo.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Nav">
      <div className="logo">
        <img  src={logo} alt="logo" />
        <h1 className='namelogo'><a href="#">Z-WORLD</a></h1>
      </div>
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <div className={`Rooms ${menuOpen ? "open" : ""}`}>
        <div className="Rooooms">
          <button id="room1">Artifacts</button>
          <button id="room2">Weapons</button>
          <button id="room3">Monsters</button>
          <button id="room3.5">Materials</button>
          <button id="room4">Crystals</button>
        </div>
        <button id="login1">LOGIN <ion-icon name="log-in-outline"></ion-icon></button>
      </div>
    </nav>
  );
}
