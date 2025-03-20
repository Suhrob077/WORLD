import React, { useState } from "react";
import "./Navbar.css";
import logo from "/public/IMGS/Dragon-logo.jpg";
import Artifacts from "./Artifacts";
import Weapons from "./Weapons";
import Monsters from "./Monsters";
import Materials from "./Materials";
import Home from "./Home";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Menyu ochish yoki yopish
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Bo‘lim tanlanganda menyuni animatsiya bilan yopish
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Menyu yopiladi
  };

  return (
    <>
      <nav className="Nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1 className="namelogo">
            <a href="#" onClick={() => handleSectionChange("home")}>Z-WORLD</a>
          </h1>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`Rooms ${menuOpen ? "open" : "closing"}`}>
          <div className="Rooooms">
            <button onClick={() => handleSectionChange("home")}>Home</button>
            <button onClick={() => handleSectionChange("artifacts")}>Artifacts</button>
            <button onClick={() => handleSectionChange("weapons")}>Weapons</button>
            <button onClick={() => handleSectionChange("monsters")}>Monsters</button>
            <button onClick={() => handleSectionChange("materials")}>Materials</button>
          </div>
          <button id="login1">LOGIN <ion-icon name="log-in-outline"></ion-icon></button>
        </div>
      </nav>

      {/* Bo‘limlarni almashtirish */}
      {activeSection === "home" && <Home />}
      {activeSection === "artifacts" && <Artifacts />}
      {activeSection === "weapons" && <Weapons />}
      {activeSection === "monsters" && <Monsters />}
      {activeSection === "materials" && <Materials />}
    </>
  );
}
