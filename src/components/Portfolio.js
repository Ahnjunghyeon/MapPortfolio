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
        <div className="portfolio-title">Introduce Projects</div>

        <div className="portfolio-item">
          <div className="project-wrapper">
            <Link to="/projects/snsweb">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/snsweb.JPG"
                  alt="SnsWeb 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">개인 프로젝트</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">소셜미디어 서비스</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/mapstar">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/mapstarphone.JPG"
                  alt="MapStar 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">개인 프로젝트</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">인프라 서비스</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/userservice">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/userservice.JPG"
                  alt="UserService 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">개인 프로젝트</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">고객관리서비스</p>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="project-wrapper">
            <Link to="/projects/Capston">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/capston/캡스톤8.JPG"
                  alt="capston 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">2인 프로젝트</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">캡스톤 디자인</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/Bigdata">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/bom1.JPG"
                  alt="bigdata 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">대외경험 : 2인 프로젝트</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">빅데이터 경진대회</p>
          </div>

          <div className="project-wrapper">
            <Link to="/projects/todolist">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/todolist/todolist3.JPG"
                  alt="todolist 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">개인작업</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">투두리스트</p>
          </div>
          <div className="project-wrapper">
            <Link to="/projects/frontport">
              <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
                <img
                  src="/images/frontport/프론트앤드개발자포트폴리오.JPG"
                  alt="포트폴리오 프로젝트"
                  className="project-img"
                />
                <div className="overlay">
                  <p className="project-text">이력서</p>
                </div>
              </motion.div>
            </Link>
            <p className="project-text">포트폴리오</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
