import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Skill.css";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "HTML & CSS", icon: "🌐" },
  { name: "Node.js", icon: "🌿" },
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "UI/UX Design", icon: "🎨" },
];

const Skill = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div className="skill-container dark:bg-900">
      <motion.div
        className="parallax-header"
        style={{ x, opacity }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="skill-title">My Skills</h1>
        <p className="skill-subtitle">Crafted with passion and precision</p>
      </motion.div>
      
      <motion.div
        className="skills-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="parallax-footer"
        style={{ x: useTransform(scrollYProgress, [0, 1], [100, 0]) }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="footer-text">Always eager to learn and grow!</p>
        <motion.button
          className="contact-button"
          whileHover={{ scale: 1.1, backgroundColor: "#555" }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Skill;