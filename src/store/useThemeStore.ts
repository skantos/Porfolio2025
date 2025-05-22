import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeType, CustomColors } from '../types';

interface ThemeState {
  theme: ThemeType;
  customColors: CustomColors;
  setTheme: (theme: ThemeType) => void;
  setCustomColors: (colors: Partial<CustomColors>) => void;
}

const defaultCustomColors: CustomColors = {
  primary: '#0078D4',
  secondary: '#252526',
  accent: '#569CD6',
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      customColors: defaultCustomColors,
      setTheme: (theme) => set({ theme }),
      setCustomColors: (colors) => 
        set((state) => ({ 
          customColors: { ...state.customColors, ...colors } 
        })),
    }),
    {
      name: 'theme-storage',
    }
  )
);