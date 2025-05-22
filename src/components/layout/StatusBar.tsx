import React from 'react';
import { useTheme } from '../ui/ThemeProvider';
import { useThemeStore } from '../../store/useThemeStore';
import { ThemeType } from '../../types';
import { Sun, Moon, Palette, Globe } from 'lucide-react';

const StatusBar: React.FC = () => {
  const { colors } = useTheme();
  const { theme, setTheme } = useThemeStore();
  
  // Get current time with seconds
  const [time, setTime] = React.useState<string>('');
  
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      });
      
      const formattedDate = now.toLocaleDateString([], {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      
      setTime(`${formattedDate}, ${formattedTime}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  return (
    <div 
      className="h-6 px-2 flex items-center justify-between text-xs"
      style={{ backgroundColor: colors.statusBarBg }}
    >
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <Globe className="h-3.5 w-3.5" />
          {/* <span>Made in</span> */}
        </div>
        
        {/* <div className="flex items-center space-x-2">
          <span>NEXT.JS</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
          <span>React</span>
        </div> */}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/* <button 
            className={`p-1 rounded ${theme === 'light' ? 'bg-white bg-opacity-20' : ''}`}
            onClick={() => handleThemeChange('light')}
            title="Light Theme"
          >
            <Sun className="h-3.5 w-3.5" />
          </button> */}
          
          <button 
            className={`p-1 rounded ${theme === 'dark' ? 'bg-white bg-opacity-20' : ''}`}
            onClick={() => handleThemeChange('dark')}
            title="Dark Theme"
          >
            <Moon className="h-3.5 w-3.5" />
          </button>
          
          <button 
            className={`p-1 rounded ${theme === 'blue' ? 'bg-white bg-opacity-20' : ''}`}
            onClick={() => handleThemeChange('blue')}
            title="Blue Theme"
          >
            <Palette className="h-3.5 w-3.5" />
          </button>
        </div>
        
        {/* <div>
          <span>UTF-8</span>
        </div>
        
        <div>
          <span>Port: 443</span>
        </div>
        
        <div>
          <span>Total Visits</span>
        </div> */}
        
        <div>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;