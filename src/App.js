import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <p className="noto-sans">한글 텍스트는 Noto Sans KR 폰트로 적용</p>
      <p className="libre-baskerville">
        English text will use Libre Baskerville.
      </p>
      <Navbar scrolled={scrolled} />
      <Link
        to="portfolio"
        smooth={true}
        duration={700}
        className="finishlineButton"
      >
        ↓
      </Link>

      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
      </div>
    </div>
  );
}

export default App;
