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
  { name: "Java", icon: "☕" },
  { name: "C/C++", icon: "📘" },
  { name: "Three.js", icon: "🌌" },
  { name: "Objective-C", icon: "🍎" },
  { name: "SQL", icon: "💾" },
  { name: "Appwrite", icon: "🚀" },
];

const Skill = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div className="skill-container dark:bg-gray-900">
      <motion.div
        className="parallax-header"
        style={{ x, opacity }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="skill-title dark:bg-gray-900">My Skills</h1>
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
            whileHover={{
              scale: 1.2,
              rotate: [0, 5, -5, 0],
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.5 },
            }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <motion.div
              className="glow-effect"
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="interactive-background dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-bubble"
            initial={{ y: 0, opacity: 0.6 }}
            animate={{ y: [10, -10, 10], opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;