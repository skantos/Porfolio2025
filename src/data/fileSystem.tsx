import React from 'react';
import { FileSystemItem } from '../types';
import IconMapper from '../types/IconMapper';

import AboutContent from '../components/content/AboutContent';
import SkillsContent from '../components/content/SkillsContent';
import ProjectsContent from '../components/content/ProjectsContent';
import ContactContent from '../components/content/ContactContent';
import ExperienceContent from '../components/content/ExperienceContent';
import HobbiesContent from '../components/content/HobbiesContent';
import IndexContent from '../components/content/IndexContent';

export const fileSystem: FileSystemItem[] = [
  {
    id: 'about-folder',
    name: 'Acerca de mi',
    icon: 'folder',
    type: 'folder',
    path: '/about',
    isOpen: false,
    children: [
      {
        id: 'index-html',
        name: 'Index.html',
        icon: 'html',
        type: 'file',
        path: '/about/index.html',
        content: <AboutContent />
      },
      {
        id: 'experience-css',
        name: 'Experiencia.css',
        icon: 'css',
        type: 'file',
        path: '/about/experience.css',
        content: <ExperienceContent />
      },
      {
        id: 'skills-js',
        name: 'Habilidades.js',
        icon: 'javascript',
        type: 'file',
        path: '/about/skills.js',
        content: <SkillsContent />
      },
      {
        id: 'projects-ts',
        name: 'Proyectos.ts',
        icon: 'typescript',
        type: 'file',
        path: '/about/projects.ts',
        content: <ProjectsContent />
      }
    ]
  },


  {
    id: 'contact-folder',
    name: 'Contacto',
    icon: 'folder',
    type: 'folder',
    path: '/contact',
    isOpen: false,
    children: [
      {
        id: 'email-tsx',
        name: 'Email.tsx',
        icon: 'react',
        type: 'file',
        path: '/contact/email.tsx',
        content: <ContactContent />
      }
    ]
  },


];

export const getDefaultContent = () => {
  return <IndexContent />;
};