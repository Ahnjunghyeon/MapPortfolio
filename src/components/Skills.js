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
      <ul>
        <li>JavaScript (React, Node.js)</li>
        <li>CSS</li>
        <li>Firebase & AWS</li>
      </ul>
    </motion.section>
  );
};

export default Skills;
