import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "To Do List",
      description: "A simple To-Do List application built with HTML, CSS, and JavaScript. This app allows users to:\n- Add new tasks.\n- View a list of added tasks.\n- Remove tasks when completed.",
      tech: ["Html", "CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce.com",
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
    },
    {
      id: 2,
      title: "Lexishift",
      description: "Lexishift is a dyslexia-friendly PDF converter designed to enhance accessibility for individuals with dyslexia. This web-based tool allows users to upload PDF files and convert them into dyslexia-friendly formats with customizable text and layout options.",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      githubLink: "https://github.com/yourusername/taskmanager",
      liveLink: "https://your-taskmanager.com",
      image: "https://tse4.mm.bing.net/th?id=OIP.DZRSmPzHusS8swh5G1TJuQHaDt&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.",
      tech: ["React", "OpenWeather API", "Chart.js", "Axios"],
      githubLink: "https://github.com/yourusername/weather",
      liveLink: "https://your-weather.com",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A social networking platform with real-time chat, post sharing, and user profiles. Includes features like post reactions and comments.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/social",
      liveLink: "https://your-social.com",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions. Integrates with various AI models.",
      tech: ["React", "Python", "TensorFlow", "OpenAI API"],
      githubLink: "https://github.com/yourusername/ai-image",
      liveLink: "https://your-ai-image.com",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 dark:bg-gray-900">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:bg-gray-900">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg dark:bg-gray-900 overflow-hidden"
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
            <div className="relative overflow-hidden dark:bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <motion.div 
                className="absolute inset-0 bg-black  bg-opacity-60 flex items-center justify-center"
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
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
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