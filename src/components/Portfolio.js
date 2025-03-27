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
      <div className="portfolio-grid">
        <div className="portfolio-title">My Projects</div>

        {/* 1번 프로젝트 모음 */}
        <div className="portfolio-item">
          <div className="portfolio-group-title">1번 프로젝트 모음</div>

          <div className="project-wrapper">
            <Link to="/projects/snsweb">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/snsweb.jpg"
                  alt="SnsWeb 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">SNS - WEB</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">Sub 프로젝트</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/mapstar">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/mapstarphone.jpg"
                  alt="MapStar 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">지도 프로젝트</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">Main 프로젝트</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/userservice">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/userservice.jpg"
                  alt="UserService 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">USERSERVICE</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">Sub 프로젝트</p>
          </div>
        </div>

        {/* 2번 프로젝트 모음 */}
        <div className="portfolio-item">
          <div className="portfolio-group-title">2번 프로젝트 모음</div>

          <div className="project-wrapper">
            <Link to="/projects/anotherproject">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/anotherproject.jpg"
                  alt="Another 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">Another Project</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">New Sub 프로젝트</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/newmap">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/newmap.jpg"
                  alt="NewMap 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">New Map Project</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">New Main 프로젝트</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/newservice">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/newservice.jpg"
                  alt="NewService 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">New Service</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">New Sub 프로젝트</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
