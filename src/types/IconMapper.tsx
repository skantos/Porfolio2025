// types/IconMapper.tsx
import { 
  FaFolder,
  FaFolderOpen,
  FaFileCode,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaMusic,
  FaGamepad,
  FaFilm,
  FaPython
} from 'react-icons/fa';
import { SiTypescript, SiCsharp } from 'react-icons/si';

interface IconMapperProps {
  icon: string;
  isOpen?: boolean;
  className?: string;
}

export const IconMapper = ({ icon, isOpen = false, className = '' }: IconMapperProps) => {
  const iconMap = {
    'folder': isOpen ? <FaFolderOpen className="text-yellow-400" /> : <FaFolder className="text-yellow-400" />,
    'html': <FaHtml5 className="text-orange-500" />,
    'css': <FaCss3Alt className="text-blue-500" />,
    'javascript': <FaJs className="text-yellow-300" />,
    'typescript': <SiTypescript className="text-blue-400" />,
    'react': <FaReact className="text-blue-400" />,
    'music': <FaMusic className="text-purple-500" />,
    'gamepad': <FaGamepad className="text-green-500" />,
    'film': <FaFilm className="text-red-500" />,
    'python': <FaPython className="text-blue-600" />,
    'csharp': <SiCsharp className="text-purple-500" />
  };

  return iconMap[icon as keyof typeof iconMap] || <FaFileCode className={`text-gray-400 ${className}`} />;
};