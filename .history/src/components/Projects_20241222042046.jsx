import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and order management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce.com",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features.",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      githubLink: "https://github.com/yourusername/taskmanager",
      liveLink: "https://your-taskmanager.com",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.",
      tech: ["React", "OpenWeather API", "Chart.js", "Axios"],
      githubLink: "https://github.com/yourusername/weather",
      liveLink: "https://your-weather.com",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-26">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: hoveredId === project.id ? 1 : 0,
                  x: hoveredId === project.id ? 0 : -20
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-4">
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + i * 0.1 + 0.4 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;