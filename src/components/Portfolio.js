import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <motion.section
      className="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Projects</h2>
      <p>웹사이트들을 소개</p>
    </motion.section>
  );
};

export default Portfolio;
