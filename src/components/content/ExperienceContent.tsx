import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Briefcase, Book } from 'lucide-react';
import middifyLogo from '../../images/middify.png';

const isImageLogo = (logo: unknown) => {
  if (typeof logo !== 'string') return false;
  return (
    logo.startsWith('http') ||
    logo.startsWith('/') ||
    logo.startsWith('data:') ||
    /\.(png|jpe?g|gif|webp|svg)$/i.test(logo)
  );
};

const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Middify",
      companyUrl: "https://middify.com",
      logo: middifyLogo,
      period: "01 Ago 2025 - 01 Dic 2025 · Contrato 2 meses",
      achievements: [
        "Desarrollo y despliegue de microservicios para la plataforma de suscripciones digitales",
        "Implementación de integraciones con terceros mediante APIs REST y Webhooks",
        "Diseño de interfaces responsivas orientadas a métricas clave con React y Tailwind",
        "Automatización de pipelines CI/CD con GitHub Actions utilizando contenedores serverless"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "AWS", "AWS Lambda", "Amazon Cognito"]
    },
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

  const [activeTab, setActiveTab] = React.useState(0);
  const activeExperience = experiences[activeTab] ?? null;
  const tabsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
  const activeExperienceIsImage = activeExperience ? isImageLogo(activeExperience.logo) : false;

  const focusTab = (index: number) => {
    if (experiences.length === 0) return;
    const nextIndex = (index + experiences.length) % experiences.length;
    const node = tabsRef.current[nextIndex];

    if (node) {
      node.focus();
    }

    setActiveTab(nextIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(experiences.length - 1);
        break;
      default:
        break;
    }
  };


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
            
            <div className="sm:ml-6 mt-3">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div
                  className="flex flex-row md:flex-col gap-2 overflow-x-auto hide-scrollbar md:overflow-visible"
                  role="tablist"
                  aria-label="Experiencia profesional"
                >
                  {experiences.map((exp, idx) => {
                    const isActive = idx === activeTab;
                    const tabId = `experience-tab-${idx}`;
                    const panelId = `experience-panel-${idx}`;

                    return (
                      <button
                        key={tabId}
                        id={tabId}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={panelId}
                        tabIndex={isActive ? 0 : -1}
                        ref={(el) => {
                          tabsRef.current[idx] = el;
                        }}
                        onClick={() => focusTab(idx)}
                        onKeyDown={(event) => handleKeyDown(event, idx)}
                        className={`relative flex-shrink-0 px-3 py-2 rounded-lg border text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 min-w-[200px] md:min-w-0 md:w-full ${
                          isActive
                            ? 'border-green-400/70 text-green-300'
                            : 'border-gray-700/60 text-gray-400 hover:text-green-200 hover:border-green-400/40'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="experienceTabHighlight"
                            className="absolute inset-0 rounded-lg bg-green-500/10 border border-green-400/60 shadow-lg"
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 flex flex-col gap-1">
                          <span className="text-sm font-semibold">{exp.company}</span>
                          <span className="text-xs text-gray-400">{exp.title}</span>
                          <span className="text-[11px] text-gray-500">{exp.period}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {activeExperience && (
                  <motion.div
                    key={`${activeExperience.company}-${activeExperience.title}`}
                    id={`experience-panel-${activeTab}`}
                    role="tabpanel"
                    aria-labelledby={`experience-tab-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-600"
                  >
                    <div className="flex items-start mb-3">
                      {activeExperienceIsImage ? (
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center mr-3">
                          <img
                            src={activeExperience.logo as string}
                            alt={`Logo ${activeExperience.company}`}
                            className="max-w-[40px] max-h-[40px] object-contain"
                            style={{
                              mixBlendMode: 'screen'
                            }}
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center text-blue-300 font-bold mr-3">
                          {activeExperience.logo}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-lg sm:text-xl font-semibold text-blue-400">{activeExperience.title}</h3>
                          <span className="text-xs sm:text-sm text-green-400 bg-gray-900 px-2 py-1 rounded-full mt-1 sm:mt-0">
                            {activeExperience.period}
                          </span>
                        </div>
                        <a
                          href={activeExperience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-400 transition-colors"
                        >
                          @ {activeExperience.company}
                        </a>
                      </div>
                    </div>

                    <div className="ml-2 pl-2 border-l-2 border-gray-600">
                      <h4 className="text-sm text-green-400 mb-2 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        Logros principales:
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                        {activeExperience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.06 }}
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
                          {activeExperience.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.04 }}
                              className="text-xs px-2 py-1 bg-gray-900 text-blue-300 rounded-full"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
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