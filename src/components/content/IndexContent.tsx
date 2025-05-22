import React from 'react';
import { motion } from 'framer-motion';
import { Code, Folder, FileText, Terminal } from 'lucide-react';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const characters = Array.from(text);
  
  return (
    <div className="inline-block">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const CommandLine: React.FC<{ command: string; output: string | React.ReactNode; delay?: number }> = ({ 
  command, output, delay = 0 
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center text-gray-300 mb-1">
        <span className="text-green-400 mr-2">$</span>
        <TypewriterText text={command} delay={delay} />
      </div>
      <div className="ml-4 text-gray-300">
        {typeof output === 'string' ? (
          <TypewriterText text={output} delay={delay + command.length * 0.04 + 0.2} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + command.length * 0.04 + 0.2 }}
          >
            {output}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const IndexContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 font-mono flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">Raj Savaliya</h1>
          <p className="text-gray-400">Software Development Engineer</p>
        </div>

        {/* Start Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Start</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" disabled />
              <span className="text-gray-400">Skills...</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-gray-400">Projects...</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-400"># Arims...</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-gray-400">Get in Touch...</span>
            </li>
          </ul>
        </div>

        {/* Recent Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Recent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Email: <span className="text-blue-400">E./RajSavaliyaE.mail</span></p>
            </div>
            <div>
              <p className="text-gray-400">Skills: <span className="text-blue-400">E./RajSavaliyaSkills</span></p>
            </div>
            <div>
              <p className="text-gray-400">Experience: <span className="text-blue-400">E./RajSavaliyaExperience</span></p>
            </div>
            <div>
              <p className="text-gray-400">Projects: <span className="text-blue-400">E./RajSavaliyaProjects</span></p>
            </div>
            <div>
              <p className="text-gray-400">Projects/8: <span className="text-blue-400">E./RajSavaliyaProjects/8</span></p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-300 mb-4">About</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" disabled />
              <span className="text-gray-400">LinkedIn Profile</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-gray-400">Grinko Page</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-gray-400">Twitter Handle</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-gray-400">Product Hunt Page</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-gray-400">Peerist Page</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexContent;

IndexContent