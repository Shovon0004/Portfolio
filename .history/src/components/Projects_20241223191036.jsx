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
      tech: [],
      githubLink: "https://github.com/Shovon0004/Lexishift.git",
      liveLink: "https://your-taskmanager.com",
      image: "https://tse4.mm.bing.net/th?id=OIP.DZRSmPzHusS8swh5G1TJuQHaDt&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      title: "Snake Game",
      description: "An amazing snake game build with python. This game is built with the help of the turtle module in python. The game is simple and easy to play.",
      tech: ["Python", "Turtle"],
      githubLink: "https://github.com/Shovon0004/Snake-game.git",
      liveLink: "https://your-weather.com",
      image: "https://www.giantbomb.com/a/uploads/original/47/472150/3204862-hirezsnake.png"
    },
    {
      id: 4,
      title: "Rock Paper Scissors",
      description: "Rock paper scissors is a simple hand game that is played between two people. The game is played by the players making shapes with an outstretched hand.",
      tech: ["Html", "css", "JS"],
      githubLink: "https://github.com/Shovon0004/Rock-paper-scissors.git",
      liveLink: "https://your-social.com",
      image: "https://tse1.mm.bing.net/th?id=OIP.fDqk-RDfrxBtnH8cjaiB2QHaDd&pid=Api&P=0&h=180"
    },
    {
      id: 5,
      title: "Skin Cancer Image detection",
      description: "A deep learning model that can detect cancer in medical images. The model is trained on a dataset of cancer images and uses convolutional neural networks to classify the images as cancerous or non-cancerous.",
      tech: ["Python", "TensorFlow", "Keras","Kaggel"],
      githubLink: "https://github.com/Shovon0004/Skin-Cancer.git",
      liveLink: "https://your-ai-image.com",
      image: "https://www.cnet.com/a/img/resize/003ff7bf85a1a57a2a57fcf043b9160f6a47a9d7/hub/2019/06/26/b2b042fc-4ae0-4a80-9ae7-11cd7eba0a59/skinvision.jpg?auto=webp&width=1200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 dark:bg-gray-900">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-orange-500 hover:text-orange-700 focus:text-orange-700"
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
                className="absolute inset-0 bg-black  bg-opacity-60 flex items-center justify-center "
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: hoveredId === project.id ? 1 : 0,
                  x: hoveredId === project.id ? 0 : -20
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-4 ">
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-200 transition-colors"
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