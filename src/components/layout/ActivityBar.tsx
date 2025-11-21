import React from 'react';
import { useTheme } from '../ui/ThemeProvider';
import { useEditorStore } from '../../store/useEditorStore';
import { motion } from 'framer-motion';

import { 
  User, Code, Briefcase, Mail, Menu, Github,
} from 'lucide-react';

interface ActivityBarItemProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  tooltip?: string;
}

const ActivityBarItem: React.FC<ActivityBarItemProps> = ({ 
  icon, active, onClick, tooltip 
}) => {
  const { colors } = useTheme();

  return (
    <div className="relative group">
      <button 
        onClick={onClick}
        className={`relative w-12 h-12 flex items-center justify-center transition-all duration-200`}
      >
        <div className={`absolute left-0 w-0.5 h-6 ${active ? 'bg-white' : 'bg-transparent'} transition-all duration-200`} />
        <div className={`transition-all duration-200 ${active ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
          {icon}
        </div>
      </button>
      {tooltip && (
        <div 
          className="absolute left-14 top-2 px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap"
          style={{ backgroundColor: colors.background, color: colors.textColor }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

const ActivityBar: React.FC = () => {
  const { colors } = useTheme();
  const { sidebarVisible, toggleSidebar, openFileByPath, activeTab } = useEditorStore();

  const quickActions = [
    {
      id: 'index-html',
      icon: <User size={24} />,
      tooltip: 'Sobre mí',
      action: () => openFileByPath('/about/index.html'),
    },
    {
      id: 'skills-js',
      icon: <Code size={24} />,
      tooltip: 'Habilidades',
      action: () => openFileByPath('/about/skills.js'),
    },
    {
      id: 'experience-css',
      icon: <Briefcase size={24} />,
      tooltip: 'Experiencia',
      action: () => openFileByPath('/about/experience.css'),
    },
    {
      id: 'email-tsx',
      icon: <Mail size={24} />,
      tooltip: 'Contacto',
      action: () => openFileByPath('/contact/email.tsx'),
    },
  ];

  return (
    <div 
      className="h-full flex flex-col justify-between py-2 w-12"
      style={{ backgroundColor: colors.activityBarBg }}
    >
      <div>
        <ActivityBarItem 
          icon={<Menu size={24} />}
          active={sidebarVisible}
          onClick={toggleSidebar}
          tooltip={sidebarVisible ? 'Ocultar panel lateral' : 'Mostrar panel lateral'}
        />
        {quickActions.map((item) => (
          <ActivityBarItem
            key={item.id}
            icon={item.icon}
            active={activeTab === item.id}
            onClick={item.action}
            tooltip={item.tooltip}
          />
        ))}
      </div>
      
      <div>
        <ActivityBarItem 
          icon={<Github size={24} />}
          tooltip="GitHub"
          onClick={() => window.open('https://github.com/skantos', '_blank')}
        />
      </div>
    </div>
  );
};

export default ActivityBar;