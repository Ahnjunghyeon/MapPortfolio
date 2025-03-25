import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        안녕하세요, 저는 "안중현" 입니다.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="first-line">성장하는 개발자 안중현입니다.</span> <br />
        항상, 여러가지의 호기심을 갖고 다양한 생각을 하는것이 스스로 성장한다
        생각합니다. <br />
        다양한 프로젝트를 경험하며 뛰어난 개발자로 성장해 나가겠습니다. <br />
      </motion.p>
      <Link className="gotoabout" to="about" smooth={true} duration={500}>
        About Me ⬇
      </Link>{" "}
    </motion.section>
  );
};

export default Home;
