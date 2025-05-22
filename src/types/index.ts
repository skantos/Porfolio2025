export type ThemeType = 'dark' | 'light' | 'blue';

export interface FileType {
  id: string;
  name: string;
  icon: string;
  type: 'file';
  path: string;
  content?: React.ReactNode;
}

export interface FolderType {
  id: string;
  name: string;
  icon: string;
  type: 'folder';
  path: string;
  isOpen?: boolean;
  children: (FileType | FolderType)[];
}

export type FileSystemItem = FileType | FolderType;

export interface Tab {
  id: string;
  title: string;
  path: string;
  content: React.ReactNode;
  icon?: string;
}

export interface CustomColors {
  primary: string;
  secondary: string;
  accent: string;
}

