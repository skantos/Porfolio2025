import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

interface ProjectsContentProps {
  projectId?: string;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ projectId }) => {
  const projects = [
    {
      id: "ayesoul",
      name: "AyeSoul",
      description: "A responsive, accessible UI component library built with React and TypeScript.",
      image: "https://images.pexels.com/photos/7256586/pexels-photo-7256586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "CSS-in-JS"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "50+ customizable components",
        "Fully accessible and WCAG compliant",
        "Comprehensive documentation",
        "Theming support"
      ]
    },
    {
      id: "ayehigh",
      name: "AyeHigh",
      description: "A data visualization dashboard for monitoring system performance metrics.",
      image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "D3.js", "Redux", "Node.js", "MongoDB"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Real-time data processing",
        "Interactive charts and graphs",
        "Customizable dashboard layouts",
        "Data export functionality"
      ]
    },
    {
      id: "ninetails",
      name: "NineTails",
      description: "A modern e-commerce platform with headless CMS integration.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity.io"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Headless CMS integration",
        "Secure payment processing",
        "Advanced filtering and search",
        "Responsive design for all devices"
      ]
    },
    {
      id: "ayedot",
      name: "AyeDot",
      description: "A collaborative code editor with real-time syncing and version control.",
      image: "https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "CodeMirror"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Real-time collaboration",
        "Syntax highlighting for 40+ languages",
        "Version history tracking",
        "Integrated chat and comments"
      ]
    },
    {
      id: "ayefun",
      name: "AyeFun",
      description: "A social media platform for developers to share code snippets and projects.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Firebase", "Redux", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Code snippet sharing",
        "User profiles and portfolios",
        "Like, comment, and fork functionality",
        "Tagging and searching"
      ]
    },
    {
      id: "ownvcs",
      name: "OwnVCS",
      description: "A lightweight version control system inspired by Git but simplified for educational purposes.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["TypeScript", "Node.js", "Command Line Interface"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Basic commit, branch, and merge functionality",
        "Diff visualization",
        "Interactive CLI",
        "Educational documentation"
      ]
    },
    {
      id: "firelow",
      name: "Firelow",
      description: "A visual workflow automation tool for connecting apps and automating tasks.",
      image: "https://images.pexels.com/photos/5474280/pexels-photo-5474280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express", "MongoDB", "React Flow"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Drag-and-drop workflow builder",
        "Integration with 50+ services",
        "Conditional logic and filtering",
        "Scheduling and triggers"
      ]
    },
    {
      id: "shortbi",
      name: "ShortBI",
      description: "A lightweight business intelligence tool for small to medium businesses.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Python", "Flask", "PostgreSQL", "Chart.js"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Data import from multiple sources",
        "Custom dashboards and reports",
        "Scheduled reporting",
        "Export to multiple formats"
      ]
    },
    {
      id: "blogs",
      name: "DevBlogs",
      description: "A technical blog platform focused on web development topics.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      links: {
        github: "#",
        live: "#"
      },
      features: [
        "Markdown support",
        "Code syntax highlighting",
        "Categories and tags",
        "Comments with moderation"
      ]
    },
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

  // If a specific project is requested, only show that one
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