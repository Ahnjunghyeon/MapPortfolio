import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Skills</h2>

      {/* Frontend */}
      <div className="skill-category">
        <h3>💻 Frontend</h3>
        <ul>
          <li>
            <strong>React</strong> - 컴포넌트 기반 개발, React Router, 상태
            관리(useState, useEffect)
          </li>
          <li>
            <strong>JavaScript (ES6+)</strong> - 비동기 처리 (Promise,
            async/await), API 연동
            <br />
          </li>
        </ul>
        <h4>🎯 학습 경험</h4>
        <ul>
          <li>
            <strong>C</strong> - 기초 알고리즘 및 메모리 관리 학습
          </li>
          <li>
            <strong>Python</strong> - 기본 문법 및 간단한 스크립트 제작
          </li>
          <li>
            <strong>Java</strong> - 객체 지향 프로그래밍 학습
          </li>
        </ul>
      </div>

      {/* Backend & Database */}
      <div className="skill-category">
        <h3>🛠 Backend & Database</h3>
        <ul>
          <li>
            <strong>AWS</strong> - EC2, RDS(MySQL) 설정 및 관리
          </li>
          <li>
            <strong>Firebase</strong> - Authentication, Firestore Database
          </li>
          <li>
            <strong>MySQL</strong> - DB 설계 및 HeidiSQL을 이용한 관리
          </li>
          <li>
            <strong>Node.js</strong> - Express.js를 이용한 간단한 Server 및 REST
            API 개발
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Skills;
