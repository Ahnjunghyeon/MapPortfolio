import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 페이지 이동을 위한 Link 추가
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <motion.section
      className="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-grid">
        {/* snsweb 프로젝트*/}
        <motion.div className="portfolio-item" whileHover={{ scale: 1.05 }}>
          <Link to="/projects/snsweb">
            <div className="project-card">
              <img
                src="/images/snsweb.jpg" // 실제 이미지 경로 확인 필요
                alt="SnsWeb 프로젝트"
                className="project-img"
              />
              <div className="overlay">
                <p className="project-text">SNS - WEB</p>
              </div>
            </div>
            <p className="project-text">Sub 프로젝트</p>
          </Link>
          <Link to="/projects/mapstar">
            <div className="project-card">
              <img
                src="/images/mapstarphone.jpg" // 실제 이미지 경로 확인 필요
                alt="MapStar 프로젝트"
                className="project-img"
              />
              <div className="overlay">
                <p className="project-text">지도 프로젝트</p>
              </div>
            </div>
            <p className="project-text">Main 프로젝트</p>
          </Link>
        </motion.div>
        {/* MapStar 프로젝트*/}
        <motion.div
          className="portfolio-item"
          whileHover={{ scale: 1.05 }}
        ></motion.div>

        {/* userservice 프로젝트*/}
        <motion.div className="portfolio-item" whileHover={{ scale: 1.05 }}>
          <Link to="/projects/snsweb">
            <div className="project-card">
              <img
                src="/images/userservice.jpg"
                alt="UserService 프로젝트"
                className="project-img"
              />
              <div className="overlay">
                <p className="project-text">USERSERVICE</p>
              </div>
            </div>
            <p className="project-text">Sub 프로젝트</p>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
