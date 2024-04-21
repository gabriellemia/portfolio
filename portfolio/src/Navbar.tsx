import CloseFries from "./CloseFries";
import Hamburger from "./Hamburger";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navigation">
        <div className="main-title">
          <h1>Gabrielle Mia</h1>
        </div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="fries" onClick={closeMenu}>
            <CloseFries />
          </div>
          <ul className="menuList">
            <li>About</li>
            <li>Projects</li>
            <li>Tech Stack</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <Hamburger />
        </div>
      </div>
    </>
  );
}

export default Navbar;
