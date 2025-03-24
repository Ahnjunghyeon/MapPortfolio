import React from "react";
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
            <div className="contactmain">연락처 & 정보</div>
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
          <h3>Education</h3>
          <p>React, JavaScript, AWS 등을 활용한 프로젝트 경험</p>
        </motion.div>

        <motion.div
          className="about-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>비전</h3>
          <p>유저 경험을 고려한 개발자로 성장하고 싶습니다.</p>
        </motion.div>

        <motion.div
          className="about-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>award</h3>
          <p>새로운 기술을 배우고 적용하는 것을 좋아합니다.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
