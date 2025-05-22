import React from 'react';
import { useTheme } from '../ui/ThemeProvider';
import { useEditorStore } from '../../store/useEditorStore';
import { getDefaultContent } from '../../data/fileSystem';
import { motion, AnimatePresence } from 'framer-motion';

const LineNumbers: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="mr-4 text-gray-500 text-xs text-right select-none w-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="py-0.5">
          {i + 1}
        </div>
      ))}
    </div>
  );
};

const EditorPane: React.FC = () => {
  const { colors } = useTheme();
  const { tabs, activeTab } = useEditorStore();
  
  const activeContent = activeTab 
    ? tabs.find(tab => tab.id === activeTab)?.content 
    : null;
  
  const displayContent = activeContent || getDefaultContent();
  
  return (
    <div 
      className="flex-1 overflow-auto relative custom-scrollbar"
      style={{ backgroundColor: colors.editorBg }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab || 'default'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-full p-4"
        >
          {displayContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EditorPane;