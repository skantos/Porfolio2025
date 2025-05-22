import React from 'react';
import { useTheme } from '../ui/ThemeProvider';
import { useEditorStore } from '../../store/useEditorStore';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { getFileIcon } from '../../utils/getFileIcon';
import { motion } from 'framer-motion';

const Tabs: React.FC = () => {
  const { colors } = useTheme();
  const { tabs, activeTab, setActiveTab, removeTab } = useEditorStore();

  if (tabs.length === 0) return null;

  return (
    <div 
      className="flex overflow-x-auto hide-scrollbar"
      style={{ backgroundColor: colors.tabBg }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const fileIcon = tab.icon ? getFileIcon(tab.icon) : null;
        
        return (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "flex items-center px-3 py-1.5 border-r text-sm relative min-w-0 transition-colors duration-200 group",
              isActive ? "border-b-2" : "border-b-0 hover:bg-opacity-20 hover:bg-white"
            )}
            style={{ 
              backgroundColor: isActive ? colors.tabActiveBg : colors.tabBg,
              borderRightColor: 'rgba(255,255,255,0.1)',
              borderBottomColor: isActive ? colors.highlightColor : 'transparent'
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="mr-2 flex-shrink-0">{fileIcon}</div>
            <span className="truncate max-w-[120px]">{tab.title}</span>
            <button 
              className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-opacity-20 hover:bg-white rounded p-0.5 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Tabs;