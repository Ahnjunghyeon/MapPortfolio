import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import MapStar from "./components/projects/MapStar";
import Snsweb from "./components/projects/Snsweb";
import UserService from "./components/projects/Snsweb";

import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar scrolled={scrolled} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <AboutMe />
              </section>
              <section id="portfolio">
                <Portfolio />
              </section>
              <section id="skills">
                <Skills />
              </section>
            </>
          }
        />
        <Route path="/projects/mapstar" element={<MapStar />} />
        <Route path="/projects/snsweb" element={<Snsweb />} />
        <Route path="/projects/userservice" element={<UserService />} />
      </Routes>

      <ScrollLink
        to="skills"
        smooth={true}
        duration={700}
        className="finishlineButton"
      >
        ↓
      </ScrollLink>
    </div>
  );
}

export default App;
