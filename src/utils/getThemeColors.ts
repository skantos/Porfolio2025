import { ThemeType, CustomColors } from '../types';

export const getThemeColors = (theme: ThemeType, customColors: CustomColors) => {
  const themes = {
    dark: {
      background: '#1E1E1E',
      sidebarBg: '#252526',
      activityBarBg: '#333333',
      editorBg: '#1E1E1E',
      statusBarBg: '#007ACC',
      tabActiveBg: '#1E1E1E',
      tabBg: '#2D2D2D',
      textColor: '#D4D4D4',
      highlightColor: customColors.primary,
      accentColor: customColors.accent,
    },
    light: {
      background: '#FFFFFF',
      sidebarBg: '#F3F3F3',
      activityBarBg: '#2C2C2C',
      editorBg: '#FFFFFF',
      statusBarBg: '#007ACC',
      tabActiveBg: '#FFFFFF',
      tabBg: '#ECECEC',
      textColor: '#333333',
      highlightColor: customColors.primary,
      accentColor: customColors.accent,
    },
    blue: {
      background: '#193549',
      sidebarBg: '#15232D',
      activityBarBg: '#0D3A58',
      editorBg: '#193549',
      statusBarBg: '#0D3A58',
      tabActiveBg: '#193549',
      tabBg: '#0D3A58',
      textColor: '#E0E0E0',
      highlightColor: customColors.primary,
      accentColor: customColors.accent,
    }
  };

  return themes[theme];
};