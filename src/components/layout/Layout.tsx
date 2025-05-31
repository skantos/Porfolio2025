import React, { useEffect } from 'react';
import Titlebar from './Titlebar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import EditorPane from './EditorPane';
import StatusBar from './StatusBar';
import { useEditorStore } from '../../store/useEditorStore';
import { fileSystem } from '../../data/fileSystem';

const Layout: React.FC = () => {
  const { setSidebarVisible } = useEditorStore();
  
  useEffect(() => {
    useEditorStore.setState({ fileSystem });
    
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSidebarVisible]);
  
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Titlebar />
      
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs />
          <EditorPane />
        </div>
      </div>
      
      <StatusBar />
    </div>
  );
};

export default Layout;