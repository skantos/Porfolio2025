import React, { useState } from 'react';
import { useTheme } from '../ui/ThemeProvider';
import { useEditorStore } from '../../store/useEditorStore';
import { FileSystemItem } from '../../types';
import { getFileIcon } from '../../utils/getFileIcon';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileTreeItemProps {
  item: FileSystemItem;
  level: number;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ item, level }) => {
  const { colors } = useTheme();
  const { toggleFolder, addTab } = useEditorStore();
  
  const handleClick = () => {
    if (item.type === 'folder') {
      toggleFolder(item.path);
    } else if (item.type === 'file' && item.content) {
      addTab({
        id: item.id,
        title: item.name,
        path: item.path,
        content: item.content,
        icon: item.icon
      });
    }
  };

  const iconComponent = getFileIcon(item.icon, item.type === 'folder' && item.isOpen);

  return (
    <div>
      <div 
        className={`flex items-center px-2 py-1 cursor-pointer text-sm hover:bg-opacity-20 hover:bg-white`}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={handleClick}
      >
        {item.type === 'folder' && (
          <div className="mr-1">
            {item.isOpen ? (
              <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
            )}
          </div>
        )}
        <div className="mr-1.5">{iconComponent}</div>
        <span>{item.name}</span>
      </div>
      
      {item.type === 'folder' && item.isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {item.children.map((child) => (
              <FileTreeItem key={child.id} item={child} level={level + 1} />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

interface SectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  title, isOpen, onToggle, children 
}) => {
  return (
    <div className="mb-2">
      <div 
        className="flex items-center px-2 py-1 text-xs uppercase tracking-wider font-semibold cursor-pointer"
        onClick={onToggle}
      >
        {isOpen ? (
          <ChevronDown className="h-3.5 w-3.5 mr-1 text-gray-400" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 mr-1 text-gray-400" />
        )}
        {title}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const { colors } = useTheme();
  const { sidebarVisible, fileSystem } = useEditorStore();
  const [sectionsOpen, setSectionsOpen] = useState({
    explorer: true,
  });
  
  const toggleSection = (section: keyof typeof sectionsOpen) => {
    setSectionsOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!sidebarVisible) return null;
  
  return (
    <div 
      className="h-full w-60 overflow-hidden flex flex-col border-r transition-all duration-300"
      style={{ 
        backgroundColor: colors.sidebarBg,
        borderColor: 'rgba(255,255,255,0.1)'
      }}
    >
      <div className="p-2 text-sm font-semibold tracking-wider uppercase">
        EXPLORER
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <Section 
          title="Porfolio" 
          isOpen={sectionsOpen.explorer}
          onToggle={() => toggleSection('explorer')}
        >
          {fileSystem.map((item) => (
            <FileTreeItem key={item.id} item={item} level={0} />
          ))}
        </Section>
      </div>
      
      {/* <div 
        className="p-2 text-xs border-t"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        All Rights Reserved
      </div> */}
      
      <div
        className="p-2 text-xs"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        Made in 2025
      </div>
    </div>
  );
};

export default Sidebar;