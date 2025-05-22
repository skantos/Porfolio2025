import React from 'react';
import { useTheme } from '../ui/ThemeProvider';
import { Circle, Code } from 'lucide-react';

const Titlebar: React.FC = () => {
  const { colors } = useTheme();
  
  return (
    <div 
      className="h-9 flex items-center justify-between px-2 border-b"
      style={{ 
        backgroundColor: colors.activityBarBg,
        borderColor: 'rgba(255,255,255,0.1)'
      }}
    >
      <div className="flex items-center">
        <Code className="h-5 w-5 text-blue-400 mr-2" />
        <div className="text-sm font-medium">Samuel Gajardo</div>
      </div>
      
      {/* <div className="flex items-center space-x-2 text-sm">
        <button className="px-2 py-0.5 hover:bg-white hover:bg-opacity-10 rounded">About</button>
        <button className="px-2 py-0.5 hover:bg-white hover:bg-opacity-10 rounded">Experience</button>
        <button className="px-2 py-0.5 hover:bg-white hover:bg-opacity-10 rounded">Skills</button>
        <button className="px-2 py-0.5 hover:bg-white hover:bg-opacity-10 rounded">Projects</button>
        <button className="px-2 py-0.5 hover:bg-white hover:bg-opacity-10 rounded">Contact</button>
        <button className="px-2 py-0.5 hover:bg-white hover:bg-opacity-10 rounded">Hobbies</button>
      </div> */}
      
      <div className="flex space-x-2">
        <Circle className="h-3.5 w-3.5 text-red-500 fill-current" />
        <Circle className="h-3.5 w-3.5 text-yellow-500 fill-current" />
        <Circle className="h-3.5 w-3.5 text-green-500 fill-current" />
      </div>
    </div>
  );
};

export default Titlebar;