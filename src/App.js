import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // 스크롤이 50px 이상일 때
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
    <>
      <Navbar scrolled={scrolled} />
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
    </>
  );
}

export default App;
