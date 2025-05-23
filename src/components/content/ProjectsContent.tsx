import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

interface ProjectsContentProps {
  projectId?: string;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ projectId }) => {
  const projects = [
    {
      id: "startup",
      name: "StartupLaunch",
      description: "A platform for connecting startups with potential investors and mentors.",
      image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Startup profiles and pitches",
        "Investor matching algorithm",
        "Secure messaging system",
        "Resource library"
      ]
    }
  ];

  const displayProjects = projectId 
    ? projects.filter(p => p.id === projectId)
    : projects;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="py-8 px-4">
        {!projectId && (
          <motion.h1 
            className="text-3xl font-mono mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-400">function</span>{" "}
            <span className="text-yellow-300">showcaseProjects</span>
            <span className="text-white">()</span>{" "}
            <span className="text-yellow-300">{`{`}</span>
          </motion.h1>
        )}
        
        <div className={`grid grid-cols-1 ${projectId ? '' : 'md:grid-cols-2'} gap-6 ${projectId ? '' : 'ml-6'}`}>
          {displayProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-3">
                  <h2 className="text-xl text-yellow-300 font-semibold">{project.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 bg-blue-900 bg-opacity-50 rounded text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                
                {projectId && (
                  <div className="mb-4">
                    <h3 className="text-blue-400 font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc text-sm text-gray-300 ml-5 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex space-x-4 mt-2">
                  <a 
                    href={project.links.github} 
                    className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>Source</span>
                  </a>
                  
                  <a 
                    href={project.links.live} 
                    className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Live Demo</span>
                  </a>
                  
                  {!projectId && (
                    <a 
                      href="#" 
                      className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors ml-auto"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      <span>Details</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!projectId && (
          <motion.h1 
            className="text-3xl font-mono mt-8 ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-yellow-300">{`}`}</span>
          </motion.h1>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;