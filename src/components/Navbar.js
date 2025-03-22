import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
