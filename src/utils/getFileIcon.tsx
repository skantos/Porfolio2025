import React from 'react';
import { FileText, FolderClosed, FolderOpen, FileJson, FileCode, FileType as FileTypeIcon, File as FileHtml, File as FileCss, File } from 'lucide-react';

export function getFileIcon(type: string, isOpen?: boolean): React.ReactElement {
  switch (type) {
    case 'folder':
      return isOpen ? <FolderOpen className="w-4 h-4 text-yellow-400" /> : <FolderClosed className="w-4 h-4 text-yellow-400" />;
    case 'html':
      return <FileHtml className="w-4 h-4 text-orange-400" />;
    case 'css':
      return <FileCss className="w-4 h-4 text-blue-400" />;
    case 'javascript':
    case 'js':
      return <FileCode className="w-4 h-4 text-yellow-300" />;
    case 'typescript':
    case 'ts':
      return <FileCode className="w-4 h-4 text-blue-400" />;
    case 'json':
      return <FileJson className="w-4 h-4 text-yellow-200" />;
    case 'react':
    case 'jsx':
    case 'tsx':
      return <FileCode className="w-4 h-4 text-blue-300" />;
    case 'python':
    case 'py':
      return <FileCode className="w-4 h-4 text-green-400" />;
    case 'csharp':
    case 'cs':
    case 'sln':
      return <FileCode className="w-4 h-4 text-purple-400" />;
    case 'md':
      return <FileText className="w-4 h-4 text-gray-400" />;
    case 'image':
      return <FileTypeIcon className="w-4 h-4 text-pink-400" />;
    default:
      return <File className="w-4 h-4 text-gray-400" />;
  }
}