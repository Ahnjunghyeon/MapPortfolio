import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import MapStar from "./components/projects/MapStar";
import Snsweb from "./components/projects/Snsweb";
import UserService from "./components/projects/UserService";
import Todolist from "./components/projects/Todolist";
import Bigdata from "./components/projects/Bigdata";
import Capston from "./components/projects/Capston";
import Frontport from "./components/projects/Frontport";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // 현재 위치 정보 받아오기

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showNavbar = !location.pathname.includes("/projects");

  return (
    <div className="app-container">
      {showNavbar && <Navbar scrolled={scrolled} />} {/* 조건부 렌더링 */}
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
        <Route path="/projects/bigdata" element={<Bigdata />} />
        <Route path="/projects/todolist" element={<Todolist />} />
        <Route path="/projects/capston" element={<Capston />} />
        <Route path="/projects/frontport" element={<Frontport />} />
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
