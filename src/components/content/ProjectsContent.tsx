import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

import divkey from '../../images/divkey.png';
import brands from '../../images/brands.png';
import mitingu from '../../images/mitingu.png';
import silvery from '../../images/silvery.png';
import prueba from '../../images/prueba.png';


const ProjectsContent = ({ projectId }: { projectId?: string }) => {
  const proyectos = [
    {
      id: "divkey",
      nombre: "DivKey",
      descripcion: "Soluciones digitales innovadoras que impulsan el futuro de tu negocio.",
      imagen: divkey,
      tecnologias: ["svelte", "react.js", "Tailwind CSS", "Firebase"],
      enlaces: {
        github: "#", 
        live: "https://divkey.cl"
      },
    },
    {
      id: "agenciabrands",
      nombre: "Agencia Brands",
      descripcion: "Agencia creativa enfocada en conectar marcas con sus audiencias mediante experiencias digitales únicas.",
      imagen: brands,
      tecnologias: ["svelte", "react.js", "Tailwind CSS", "Firebase"],
      enlaces: {
        github: "#",
        live: "https://agenciabrands.cl"
      },
    },
    {
      id: "mitingu",
      nombre: "MITINGÜ",
      descripcion: "Ecommerce dedicado a la venta de snacks, bebidas y productos asiáticos, enfocado en ofrecer una experiencia kawaii, rápida y segura.",
      imagen: mitingu,
      tecnologias: ["svelte", "react.js", "Tailwind CSS", "Firebase"],
      enlaces: {
        github: "#",
        live: "https://e-commerce-mitingu-production.up.railway.app/"
      },
    },
    {
      id: "silvery",
      nombre: "Silvery",
      descripcion: "Plataforma pensada para adultos mayores que buscan trabajo o desean ofrecer sus servicios en un entorno inclusivo, simple y amigable.",
      imagen: silvery,
      tecnologias: ["React", "Tailwind", "Firebase", "Node.js"],
      enlaces: {
        github: "#", 
        live: "https://pagina-silvery.firebaseapp.com/"
      },
    },
    {
      id: "prueba",
      nombre: "Prueba Tecnica VUE",
      descripcion: "Aplicación en Vue.js que permite visualizar información bursátil por componente, con estado global (Pinia) y actualizaciones en tiempo real al seleccionar instrumentos.",
      imagen: prueba,
      tecnologias: ["svelte", "react.js", "Tailwind CSS", "Firebase"],
      enlaces: {
        github: "#",
        live: "https://prueba-vuejs-d9fb1.web.app/"
      },
    },
  ];

  const proyectosAMostrar = projectId ? proyectos.filter(p => p.id === projectId) : proyectos;

  return (
    <div className="w-full h-full px-4 py-8 font-mono text-green-400 overflow-y-auto custom-scrollbar">
      <motion.div
        className="mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-pink-400">$</span> mostrarProyectos<span className="text-white">()</span>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {proyectosAMostrar.map((proyecto, i) => (
          <motion.div
            key={proyecto.id + i}
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            {/* Imagen del proyecto */}
            <div className="relative w-full h-64 md:h-80 rounded overflow-hidden border border-green-600">
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-green-300 text-xs px-2 py-1">
                vista previa: {proyecto.nombre.toLowerCase()}
              </div>
            </div>

            {/* Contenido textual */}
            <div className="mt-4 flex flex-col justify-between flex-1">
              <div>
                <div className="text-green-300">
                  <span className="text-pink-400">❯</span> Proyecto: <span className="text-yellow-300">{proyecto.nombre}</span>
                </div>

                <div className="mt-1 text-gray-300">📄 {proyecto.descripcion}</div>

                {/* <div className="mt-2">
                  <span className="text-green-400">Tecnologías:</span>{" "}
                  {proyecto.tecnologias.map((tecno, index) => (
                    <span key={index} className="inline-block bg-gray-900 text-blue-300 px-2 py-0.5 rounded text-xs mr-2 mt-1">
                      {tecno}
                    </span>
                  ))}
                </div> */}

                {projectId && (
                  <div className="mt-3 text-gray-300">
                    <span className="text-green-400">Características:</span>
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      {proyecto.caracteristicas.map((carac, idx) => (
                        <li key={idx}>{carac}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Enlaces */}
              <div className="mt-3 flex gap-4 text-sm">
                {/* <a
                  href={proyecto.enlaces.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center"
                >
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </a> */}
                <a
                  href={proyecto.enlaces.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> Ver
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
