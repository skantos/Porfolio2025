import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaGitAlt, FaGithub, FaDocker, FaDatabase,
  FaChartBar, FaCode, FaServer, FaMobileAlt
} from 'react-icons/fa';
import { 
  SiExpo, SiTauri, SiDjango, SiFirebase, 
  SiMongodb, SiMysql, SiTypescript, SiNextdotjs
} from 'react-icons/si';

const SkillsContent = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <FaReact className="text-blue-500" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
      ]
    },
    {
      name: "Backend Development",
      icon: <FaServer className="text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaCode className="text-green-600" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Django", icon: <SiDjango className="text-green-700" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-300" /> }
      ]
    },
    {
      name: "Mobile Development",
      icon: <FaMobileAlt className="text-purple-500" />,
      skills: [
        { name: "React Native", icon: <FaReact className="text-blue-400" /> },
        { name: "Expo", icon: <SiExpo className="text-gray-800 dark:text-gray-200" /> },
        { name: "Tauri", icon: <SiTauri className="text-blue-300" /> }
      ]
    },
    {
      name: "DevOps & Tools",
      icon: <FaGitAlt className="text-orange-500" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
        { name: "Power BI", icon: <FaChartBar className="text-yellow-400" /> }
      ]
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <header className="mb-12 text-center">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            Manejo de Software
          </motion.h1>
          <motion.div 
            className="h-1 w-24 bg-blue-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: catIndex * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-gray-700 mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {category.name}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: catIndex * 0.15 + skillIndex * 0.05
                    }}
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsContent;