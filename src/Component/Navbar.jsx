import React, { useState } from "react";
import "./Navbar.css";
import logo from "/public/IMGS/Dragon-logo.jpg";
import Artifacts from "./Artifacts";
import Home from "./Home";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="Nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1 className="namelogo">
            <a href="#" onClick={() => setActiveSection("home")}>Z-WORLD</a>
          </h1>
        </div>
        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`Rooms ${menuOpen ? "open" : ""}`}>
          <div className="Rooooms">
            <button onClick={() => setActiveSection("artifacts")}>Artifacts</button>
            <button onClick={() => setActiveSection("weapons")}>Weapons</button>
            <button onClick={() => setActiveSection("monsters")}>Monsters</button>
            <button onClick={() => setActiveSection("materials")}>Materials</button>
            <button onClick={() => setActiveSection("crystals")}>Crystals</button>
          </div>
          <button id="login1">
            LOGIN <ion-icon name="log-in-outline"></ion-icon>
          </button>
        </div>
      </nav>

      {/* Bo‘limlarni almashtirish */}
      {activeSection === "home" && <Home />}
      {activeSection === "artifacts" && <Artifacts />}
      {activeSection === "weapons" && <Weapons />}
      {activeSection === "monsters" && <Monsters />}
      {activeSection === "materials" && <Materials />}
      {activeSection === "crystals" && <Crystals />}
    </>
  );
}

