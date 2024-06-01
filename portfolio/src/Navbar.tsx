import CloseFries from "./CloseFries";
import Hamburger from "./Hamburger";
import "./Navbar.css";
import { useState } from "react";
// import logo from "./assets/portfolio-logo-nobg.gif";

type NavItem = "about" | "projects" | "tech" | "contact";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<NavItem | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleItemClick = (item: NavItem) => {
    setActiveItem(item);
    closeMenu();
  };

  return (
    <>
      <div className="header">
        <div className="head-title">
          <h1>Gabrielle Mia</h1>
          {/* <img src={logo}></img> */}
        </div>
        <div className="navigation">
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <div className="fries" onClick={closeMenu}>
              <CloseFries />
            </div>
            <ul className="menuList">
              <li className={activeItem === "about" ? "active" : ""}>
                <a href="#about-section" onClick={() => handleItemClick("about")}>
                  About
                </a>
              </li>
              <li className={activeItem === "projects" ? "active" : ""}>
                <a href="#project-section" onClick={() => handleItemClick("projects")}>
                  Projects
                </a>
              </li>
              <li>Tech Stack</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
