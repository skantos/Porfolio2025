import React, { createContext, useContext } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { getThemeColors } from '../../utils/getThemeColors';

type ThemeContextType = {
  colors: {
    background: string;
    sidebarBg: string;
    activityBarBg: string;
    editorBg: string;
    statusBarBg: string;
    tabActiveBg: string;
    tabBg: string;
    textColor: string;
    highlightColor: string;
    accentColor: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, customColors } = useThemeStore();
  const colors = getThemeColors(theme, customColors);

  return (
    <ThemeContext.Provider value={{ colors }}>
      <div 
        className="h-screen w-full overflow-hidden transition-colors duration-300"
        style={{ 
          backgroundColor: colors.background,
          color: colors.textColor
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};