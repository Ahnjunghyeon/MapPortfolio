import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <motion.section
      className="about-me"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="aboutmelogo">About Me</h2>
      <div className="about-me-container">
        <motion.div
          className="contact"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/images/증명사진.jpg"
            alt="About Icon"
            className="aboutimage"
          />
          <div className="info">
            {" "}
            <div className="abouttitle">정보</div>
            <p>
              <img
                src="/images/user.png"
                className="usericon"
                alt="User Icon"
              />
              : 안 중현(Junghyeon An)
            </p>
            <p>
              <img
                src="/images/birth.png"
                className="birthicon"
                alt="Birthdate Icon"
              />
              : 1999. 07. 04
            </p>
            <p>
              <img src="/images/email.png" className="email" alt="Email Icon" />
              : wndgusdl1271@gmail.com
            </p>
            <p>
              <img src="/images/github.png" className="git" alt="GitHub Icon" />
              : https://github.com/Ahnjunghyeon
            </p>
          </div>
        </motion.div>

        <motion.div
          className="education"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="abouttitle">배움</div>
          <div className="educationmain">
            한림성심대학교 디지털미디어콘텐츠 학과
          </div>
          <div className="educationmiddle">재학 : 2018. 03 ~ 2020. 02</div>
          <div className="educationlast1">학점 : 3.78 / 4.5</div>

          <div className="educationmain">
            한림대학교 소프트웨어융합 - 콘텐츠IT학과
          </div>
          <div className="educationmiddle">재학 : 2020. 03 ~ 2024. 02</div>
          <div className="educationlast">학점 : 2.79 / 4.5</div>
        </motion.div>
        <motion.div
          className="gotobox"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link className="gotoskills" to="skills" smooth={true} duration={500}>
            Skills ⬇
          </Link>
        </motion.div>
        <motion.div
          className="experience"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="abouttitle">경험 및 목표</div>
          <div className="experiencetitle">
            춘천시 빅데이터 경진대회 (2인 프로젝트) : 금상
          </div>
          <div className="experiencetitle">
            한림대학교 캡스톤디자인 (2인 프로젝트) : WEB / 쇼핑 장바구니 (React
            사용)
          </div>
          <div className="experiencetitle">
            WEB : <span>TodoList</span> ( 개인 / Front-End : React-javascript or
            Back-End : Firebase )
          </div>
          <div className="experiencetitle">
            WEB : <span>고객관리서비스</span> ( 개인 / Front-End :
            React-javascript or Back-End : aws )
          </div>
          <div className="experiencetitle">
            WEB : <span>SNS</span> ( 개인 / Front-End : React-javascript or
            Back-End : Firebase )
          </div>
          <div className="experiencetitle">
            WEB : <span>지도</span> ( 개인 / Front-End : React-javascript or
            Back-End : Aws,Firebase )
          </div>

          <div className="experience-goal">
            <p>React, JavaScript, AWS 등을 활용한 프로젝트 경험</p>
          </div>
        </motion.div>
      </div>{" "}
    </motion.section>
  );
};

export default AboutMe;
