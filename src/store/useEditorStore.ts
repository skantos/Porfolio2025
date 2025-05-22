import { create } from 'zustand';
import { FileSystemItem, Tab } from '../types';

interface EditorState {
  activeTab: string | null;
  tabs: Tab[];
  sidebarVisible: boolean;
  fileSystem: FileSystemItem[];
  setActiveTab: (id: string | null) => void;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  toggleSidebar: () => void;
  setSidebarVisible: (visible: boolean) => void;
  toggleFolder: (path: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  activeTab: null,
  tabs: [],
  sidebarVisible: true,
  fileSystem: [],
  setActiveTab: (id) => set({ activeTab: id }),
  addTab: (tab) => set((state) => {
    if (state.tabs.some(t => t.id === tab.id)) {
      return { activeTab: tab.id };
    }
    return { tabs: [...state.tabs, tab], activeTab: tab.id };
  }),
  removeTab: (id) => set((state) => {
    const newTabs = state.tabs.filter(tab => tab.id !== id);
    let activeTab = state.activeTab;
    if (state.activeTab === id) {
      activeTab = newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null;
    }
    return { tabs: newTabs, activeTab };
  }),
  toggleSidebar: () => set((state) => ({ sidebarVisible: !state.sidebarVisible })),
  setSidebarVisible: (visible) => set({ sidebarVisible: visible }),
  toggleFolder: (path) => set((state) => {
    const toggleFolderRecursive = (items: FileSystemItem[]): FileSystemItem[] => {
      return items.map(item => {
        if (item.type === 'folder') {
          if (item.path === path) {
            return { ...item, isOpen: !item.isOpen };
          }
          return { ...item, children: toggleFolderRecursive(item.children) };
        }
        return item;
      });
    };
    
    return { fileSystem: toggleFolderRecursive(state.fileSystem) };
  }),
}));