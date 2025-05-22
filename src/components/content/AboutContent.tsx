import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, User, Mail, MapPin, Briefcase, Cpu, Database, Smartphone, Search } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto font-mono"
      >
        {/* Terminal Header - Optimizado para móvil */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center p-3 sm:p-4 rounded-t-lg border-b border-gray-700"
        >
          <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
          <div className="text-xs sm:text-sm text-gray-400">terminal --profile=samuel_gajardo</div>
        </motion.div>

        {/* Main Content - Ajuste para móvil */}
        <div className="rounded-b-lg p-4 sm:p-6 border border-gray-700">
          {/* Presentación con animaciones más rápidas */}
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
                cat presentacion.txt
              </motion.span>
            </div>
            
            <div className="ml-4 sm:ml-6 mt-3">
              <motion.h1 
                className="text-2xl sm:text-3xl font-bold mb-3 text-blue-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                Hola, soy Samuel Gajardo
              </motion.h1>
            </div>
          </motion.div>

          {/* Información Personal - Mejorado para móvil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mb-6 bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-600"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-400 flex items-center">
              <Code className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Información Personal
            </h2>
            
            <div className="grid grid-cols-1 gap-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start">
                <User className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 mt-0.5" />
                <span>Samuel Gajardo Bazaes</span>
              </div>
              
              <div className="flex items-start break-all"> {/* Break-all para el correo */}
                <Mail className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-ellipsis overflow-hidden">s.g.g.j.2003@gmail.com</span>
              </div>
              
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 mt-0.5" />
                <span>Santiago, Chile</span>
              </div>
              
              <div className="flex items-start">
                <Briefcase className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 mt-0.5" />
                <span>Desarrollador Full Stack</span>
              </div>
            </div>
          </motion.div>

          {/* Perfil Profesional - Animaciones optimizadas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="mb-6"
          >
            <div className="flex items-start text-green-400 mb-2">
              <span className="mr-2">$</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="typing-animation"
              >
                cat perfil_profesional.txt
              </motion.span>
            </div>
            
            <div className="ml-4 sm:ml-6 mt-3 space-y-3 text-sm sm:text-base">
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <span className="text-yellow-300">Ingeniero Informático</span> con experiencia en desarrollo de aplicaciones, tanto en el <span className="text-blue-300">Backend</span> como en el <span className="text-blue-300">Frontend</span>.
              </motion.p>
              
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <Database className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2 mt-0.5" />
                <p className="text-gray-300">
                  Experto en bases de datos <span className="text-purple-300">SQL</span> y <span className="text-purple-300">NoSQL</span>.
                </p>
              </motion.div>
              
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
              >
                <Cpu className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 mt-0.5" />
                <p className="text-gray-300">
                  Profesional <span className="text-green-300">proactivo</span> en constante aprendizaje.
                </p>
              </motion.div>
              
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
              >
                <Smartphone className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 mt-0.5" />
                <p className="text-gray-300">
                  Enfoque en <span className="text-yellow-300">Frontend</span> moderno.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
              >
                <Search className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2 mt-0.5" />
                <p className="text-gray-300">
                  Especial interés en <span className="text-red-300">SEO técnico</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Enfoque Técnico - Mejorado para móvil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.4 }}
            className="mb-6 bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-600"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-400 flex items-center">
              <Code className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Enfoque Técnico
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <h3 className="text-green-400 mb-1 text-sm sm:text-base">Frontend</h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Interfaces accesibles y optimizadas para SEO, con atención a Core Web Vitals.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                <h3 className="text-green-400 mb-1 text-sm sm:text-base">SEO Técnico</h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Mejores prácticas para indexación, rendimiento y estructura semántica.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Terminal Prompt - Animación más visible */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
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

export default AboutMe;