import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Briefcase, Book } from 'lucide-react';

const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "DivKey",
      companyUrl: "https://divkey.cl",
      logo: "https://divkey.cl/assets/logo2-mas-tamano-YXMik2ve.png", 
      period: "2025",
      achievements: [
        "Lideré un equipo de 5 desarrolladores para la implementacion de soluciones web y móviles",
        "Diseño de sitios web con enfoque responsivo y SEO",
        "Implementación de tecnologías modernas de rendimiento",
        "Trabajo con metodologías ágiles y herramientas colaborativas"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "APIs REST"]
    },
    {
      title: "Desarrollador Practicante",
      company: "SellSide SpA",
      companyUrl: "https://www.sellside.cl",
      logo: "https://www.sellside.cl/web/image/website/3/logo/Sellside%20Chile?unique=0b65c6c",
      period: "Dic-2024 - Abr-2025",
      achievements: [
        "Desarrollo de aplicaciones front-end para diversos clientes",
        "Implementación de diseños adaptativos",
        "Colaboración en la creación de una plataforma de gestión de datos",
        "Optimización de procesos de desarrollo",
        "Participación en reuniones con clientes para entender sus necesidades",
        "Contribución a la documentación técnica de proyectos",
        "Conexión de interfaces con servicios web"
      ],
      technologies: ["JavaScript", "Odoo", "Python", "HTML5", "CSS3", "Bootstrap", "APIs REST"]
    }
  ];

  return (
    <div className="w-full h-full min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto font-mono"
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center py-3 sm:py-4 rounded-t-lg border-b border-gray-700"
        >
          <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
          <div className="text-xs sm:text-sm text-gray-400">terminal --profile=samuel_gajardo --experience</div>
        </motion.div>

        <div className="rounded-b-lg -m-2 p-4 sm:p-6 border border-gray-700">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-start text-green-400 mb-2">
              <span className="mr-2">$</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="typing-animation"
              >
                cat experiencia_profesional.txt
              </motion.span>
            </div>
            
            <div className=" sm:ml-6 mt-3 space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.3, duration: 0.4 }}
                  className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-600"
                >
                  <div className="flex items-start mb-3">
                    {typeof exp.logo === 'string' && exp.logo.startsWith('http') ? (
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center mr-3">
                        <img 
                          src={exp.logo} 
                          alt={`Logo ${exp.company}`} 
                          className="max-w-[40px] max-h-[40px] object-contain"
                          style={{ 
                            mixBlendMode: 'screen' 
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center text-blue-300 font-bold mr-3">
                        {exp.logo}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400">{exp.title}</h3>
                        <span className="text-xs sm:text-sm text-green-400 bg-gray-900 px-2 py-1 rounded-full mt-1 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 transition-colors"
                      >
                        @ {exp.company}
                      </a>
                    </div>
                  </div>
                  
                  <div className="ml-2 pl-2 border-l-2 border-gray-600">
                    <h4 className="text-sm text-green-400 mb-2 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Logros principales:
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + idx * 0.3 + i * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-yellow-400 mr-2">▹</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-3 border-t border-gray-700">
                      <h4 className="text-sm text-green-400 mb-2 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Tecnologías utilizadas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0 + idx * 0.3 + i * 0.05 }}
                            className="text-xs px-2 py-1 bg-gray-900 text-blue-300 rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formación Académica */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="mb-6"
          >
            <div className="flex items-start text-green-400 mb-2">
              <span className="mr-2">$</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="typing-animation"
              >
                cat formacion_academica.txt
              </motion.span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.4 }}
              className=" sm:ml-6 mt-3 bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-600"
            >
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-purple-900 flex items-center justify-center text-purple-300 font-bold mr-3">
                  IN
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400">Ingeniería en Informática</h3>
                  <p className="text-purple-300">Instituto Profesional INACAP</p>
                  <span className="text-xs sm:text-sm text-green-400 bg-gray-900 px-2 py-1 rounded-full inline-block mt-1">
                    2021 - 2024
                  </span>
                </div>
              </div>
              
              <div className="ml-2 pl-2 border-l-2 border-gray-600 mt-3">
                <h4 className="text-sm text-green-400 mb-2 flex items-center">
                  <Book className="w-4 h-4 mr-2" />
                  Educación complementaria:
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Cursos y proyectos en desarrollo web, bases de datos y análisis de datos (aprendizaje autodidacta)
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex items-center mt-6"
          >
            <span className="text-green-400 mr-2">$</span>
            <div className="relative">
              <span className="invisible">_</span>
              <motion.div 
                className="absolute top-0 left-0 w-2 h-4 sm:w-3 sm:h-5 bg-green-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.2,
                  times: [0, 0.5, 1]
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceContent;