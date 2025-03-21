import React from "react";
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
      <h1>Welcome to My Portfolio</h1>
      <p>웹 홈</p>
    </motion.section>
  );
};

export default Home;
