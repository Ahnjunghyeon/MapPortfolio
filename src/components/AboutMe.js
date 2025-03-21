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
      <h2>About Me</h2>
      <p>소개</p>
    </motion.section>
  );
};

export default AboutMe;
