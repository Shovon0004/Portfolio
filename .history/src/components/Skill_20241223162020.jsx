import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Tools, X, ExternalLink, Star, Award, Trophy } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-pink-500 to-purple-500",
    description: "Creating responsive and interactive user interfaces with modern technologies",
    skills: [
      { 
        name: "React", 
        proficiency: 90, 
        icon: "⚛️",
        description: "Advanced state management, custom hooks, and optimization techniques",
        projects: ["E-commerce Platform", "Social Media Dashboard"],
        yearsOfExperience: 4
      },
      { 
        name: "JavaScript", 
        proficiency: 85, 
        icon: "🟨",
        description: "ES6+, async programming, and functional concepts",
        projects: ["Real-time Chat Application", "Data Visualization Dashboard"],
        yearsOfExperience: 5
      },
      { 
        name: "HTML/CSS", 
        proficiency: 95, 
        icon: "🎨",
        description: "Semantic HTML, CSS3, animations, and responsive design",
        projects: ["Portfolio Website", "Marketing Landing Pages"],
        yearsOfExperience: 6
      },
      { 
        name: "TypeScript", 
        proficiency: 80, 
        icon: "📘",
        description: "Type safety, interfaces, and advanced TypeScript patterns",
        projects: ["Enterprise CRM", "Team Management Tool"],
        yearsOfExperience: 3
      }
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    description: "Building scalable server-side applications and APIs",
    skills: [
      { 
        name: "Node.js", 
        proficiency: 85, 
        icon: "🟢",
        description: "RESTful APIs, middleware, and authentication systems",
        projects: ["API Gateway", "Microservices Architecture"],
        yearsOfExperience: 4
      },
      { 
        name: "Python", 
        proficiency: 80, 
        icon: "🐍",
        description: "Django, Flask, and data processing applications",
        projects: ["Data Analysis Tool", "ML Pipeline"],
        yearsOfExperience: 3
      },
      { 
        name: "SQL", 
        proficiency: 75, 
        icon: "📊",
        description: "Database design, optimization, and complex queries",
        projects: ["Database Migration Tool", "Analytics Platform"],
        yearsOfExperience: 4
      },
      { 
        name: "MongoDB", 
        proficiency: 70, 
        icon: "🍃",
        description: "NoSQL database design and aggregation pipelines",
        projects: ["Document Management System", "Real-time Analytics"],
        yearsOfExperience: 2
      }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: <Tools className="w-6 h-6" />,
    color: "from-orange-500 to-yellow-500",
    description: "Streamlining development workflows and deployment processes",
    skills: [
      { 
        name: "Git", 
        proficiency: 88, 
        icon: "🔄",
        description: "Version control, branching strategies, and team collaboration",
        projects: ["CI/CD Pipeline", "Git Workflow Automation"],
        yearsOfExperience: 5
      },
      { 
        name: "Docker", 
        proficiency: 75, 
        icon: "🐳",
        description: "Containerization, Docker Compose, and orchestration",
        projects: ["Microservices Deployment", "Development Environments"],
        yearsOfExperience: 3
      },
      { 
        name: "AWS", 
        proficiency: 70, 
        icon: "☁️",
        description: "Cloud infrastructure, serverless, and DevOps practices",
        projects: ["Serverless API", "Cloud Migration"],
        yearsOfExperience: 2
      },
      { 
        name: "Figma", 
        proficiency: 85, 
        icon: "🎯",
        description: "UI/UX design, prototyping, and design systems",
        projects: ["Design System", "Mobile App Interface"],
        yearsOfExperience: 3
      }
    ]
  }
];

const SkillModal = ({ skill, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-gray-800/90 p-6 rounded-2xl max-w-lg w-full backdrop-blur-xl border border-gray-700/50"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{skill.icon}</span>
          <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-gray-400 text-sm mb-1">Experience Level</h4>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-white">{skill.yearsOfExperience} years</span>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 text-sm mb-1">Description</h4>
          <p className="text-white">{skill.description}</p>
        </div>

        <div>
          <h4 className="text-gray-400 text-sm mb-2">Notable Projects</h4>
          <ul className="space-y-2">
            {skill.projects.map((project, index) => (
              <li key={index} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-white">{project}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const SkillBar = ({ skill, animate = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        variants={skillVariants}
        className="mb-6 group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-base font-medium text-gray-200">{skill.name}</span>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-gray-400"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-sm font-medium text-gray-400">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-3 backdrop-blur-sm overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
            initial={animate ? { width: 0 } : { width: `${skill.proficiency}%` }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <SkillModal skill={skill} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const skillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Skill = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my professional skills and technical capabilities,
            developed through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover={{ translateY: -5 }}
              className="group bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-800/70 to-gray-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;