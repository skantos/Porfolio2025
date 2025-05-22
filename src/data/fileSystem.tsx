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
    name: 'About',
    icon: 'folder',
    type: 'folder',
    path: '/about',
    isOpen: false,
    children: [
      {
        id: 'index-html',
        name: 'index.html',
        icon: 'html',
        type: 'file',
        path: '/about/index.html',
        content: <AboutContent />
      },
      {
        id: 'experience-css',
        name: 'experience.css',
        icon: 'css',
        type: 'file',
        path: '/about/experience.css',
        content: <ExperienceContent />
      },
      {
        id: 'skills-js',
        name: 'skills.js',
        icon: 'javascript',
        type: 'file',
        path: '/about/skills.js',
        content: <SkillsContent />
      },
      {
        id: 'projects-ts',
        name: 'projects.ts',
        icon: 'typescript',
        type: 'file',
        path: '/about/projects.ts',
        content: <ProjectsContent />
      }
    ]
  },

  // {
  //   id: 'side-projects',
  //   name: 'Side Projects',
  //   icon: 'folder',
  //   type: 'folder',
  //   path: '/side-projects',
  //   isOpen: false,
  //   children: [
  //     {
  //       id: 'ayesoul-js',
  //       name: 'AyeSoul.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/side-projects/ayesoul.js',
  //       content: <ProjectsContent projectId="ayesoul" />
  //     },
  //     {
  //       id: 'ayehigh-js',
  //       name: 'AyeHigh.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/side-projects/ayehigh.js',
  //       content: <ProjectsContent projectId="ayehigh" />
  //     },
  //     {
  //       id: 'ninetails-ts',
  //       name: 'NineTails.ts',
  //       icon: 'typescript',
  //       type: 'file',
  //       path: '/side-projects/ninetails.ts',
  //       content: <ProjectsContent projectId="ninetails" />
  //     },
  //     {
  //       id: 'ayedot-js',
  //       name: 'AyeDot.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/side-projects/ayedot.js',
  //       content: <ProjectsContent projectId="ayedot" />
  //     },
  //     {
  //       id: 'ayefun-js',
  //       name: 'AyeFun.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/side-projects/ayefun.js',
  //       content: <ProjectsContent projectId="ayefun" />
  //     },
  //     {
  //       id: 'ownvcs-ts',
  //       name: 'OwnVCS.ts',
  //       icon: 'typescript',
  //       type: 'file',
  //       path: '/side-projects/ownvcs.ts',
  //       content: <ProjectsContent projectId="ownvcs" />
  //     },
  //     {
  //       id: 'firelow-js',
  //       name: 'firelow.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/side-projects/firelow.js',
  //       content: <ProjectsContent projectId="firelow" />
  //     },
  //     {
  //       id: 'shortbi-js',
  //       name: 'ShortBI.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/side-projects/shortbi.js',
  //       content: <ProjectsContent projectId="shortbi" />
  //     }
  //   ]
  // },

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

  // {
  //   id: 'misc-folder',
  //   name: 'Musica',
  //   icon: 'folder',
  //   type: 'folder',
  //   path: '/misc',
  //   isOpen: false,
  //   children: [
  //     {
  //       id: 'blogs-py',
  //       name: 'Blogs.py',
  //       icon: 'python',
  //       type: 'file',
  //       path: '/misc/blogs.py',
  //       content: <ProjectsContent projectId="blogs" />
  //     },
  //     {
  //       id: 'gaming-sln',
  //       name: 'Gaming.sln',
  //       icon: 'csharp',
  //       type: 'file',
  //       path: '/misc/gaming.sln',
  //       content: <HobbiesContent hobby="gaming" />
  //     },
  //     {
  //       id: 'anime-jsx',
  //       name: 'Anime.jsx',
  //       icon: 'react',
  //       type: 'file',
  //       path: '/misc/anime.jsx',
  //       content: <HobbiesContent hobby="anime" />
  //     },
  //     {
  //       id: 'learning-ts',
  //       name: 'Learning.ts',
  //       icon: 'typescript',
  //       type: 'file',
  //       path: '/misc/learning.ts',
  //       content: <SkillsContent category="learning" />
  //     },
  //     {
  //       id: 'startup-js',
  //       name: 'Startup.js',
  //       icon: 'javascript',
  //       type: 'file',
  //       path: '/misc/startup.js',
  //       content: <ProjectsContent projectId="startup" />
  //     }
  //   ]
  // }

];

export const getDefaultContent = () => {
  return <IndexContent />;
};