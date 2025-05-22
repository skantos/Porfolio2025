import React from 'react';
import { motion } from 'framer-motion';

interface HobbiesContentProps {
  hobby?: string;
}

const HobbiesContent: React.FC<HobbiesContentProps> = ({ hobby }) => {
  const hobbies = {
    gaming: {
      title: "Gaming",
      description: "When I'm not coding, I enjoy playing video games to relax and unwind.",
      favorites: [
        { name: "The Witcher 3", genre: "RPG", platform: "PC" },
        { name: "Hollow Knight", genre: "Metroidvania", platform: "Switch" },
        { name: "Hades", genre: "Roguelike", platform: "PC" },
        { name: "Red Dead Redemption 2", genre: "Action-Adventure", platform: "PlayStation" },
        { name: "Celeste", genre: "Platformer", platform: "PC" }
      ],
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    anime: {
      title: "Anime",
      description: "I'm a big anime fan and enjoy watching various genres.",
      favorites: [
        { name: "Attack on Titan", genre: "Action", year: "2013-2023" },
        { name: "Fullmetal Alchemist: Brotherhood", genre: "Adventure", year: "2009-2010" },
        { name: "Steins;Gate", genre: "Sci-Fi", year: "2011" },
        { name: "Violet Evergarden", genre: "Drama", year: "2018" },
        { name: "Your Lie in April", genre: "Drama", year: "2014-2015" }
      ],
      image: "https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  };

  const selectedHobby = hobby === 'gaming' ? hobbies.gaming : 
                       hobby === 'anime' ? hobbies.anime : 
                       null;

  if (!selectedHobby) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400">Select a hobby to view details.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 mb-8">
            <div className="h-64 overflow-hidden">
              <img 
                src={selectedHobby.image} 
                alt={selectedHobby.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-semibold text-yellow-300 mb-4">{selectedHobby.title}</h1>
              <p className="text-gray-300 mb-6">{selectedHobby.description}</p>
              
              <div className="font-mono">
                <div className="text-purple-400">const</div>
                <div className="ml-4">
                  <span className="text-yellow-300">favorites</span> 
                  <span className="text-white"> = </span>
                  <span className="text-yellow-300">[</span>
                </div>
                
                {selectedHobby.favorites.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="ml-8 mb-3"
                  >
                    <span className="text-yellow-300">{"{"}</span>
                    <div className="ml-4">
                      <div>
                        <span className="text-green-400">name</span>
                        <span className="text-white">: </span>
                        <span className="text-blue-300">"{item.name}"</span>
                        <span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-400">{hobby === 'gaming' ? 'genre' : 'genre'}</span>
                        <span className="text-white">: </span>
                        <span className="text-blue-300">"{hobby === 'gaming' ? item.genre : item.genre}"</span>
                        <span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-400">{hobby === 'gaming' ? 'platform' : 'year'}</span>
                        <span className="text-white">: </span>
                        <span className="text-blue-300">"{hobby === 'gaming' ? (item as any).platform : (item as any).year}"</span>
                      </div>
                    </div>
                    <span className="text-yellow-300">{"}"}</span>
                    {index < selectedHobby.favorites.length - 1 && <span className="text-white">,</span>}
                  </motion.div>
                ))}
                
                <div className="ml-4">
                  <span className="text-yellow-300">]</span>
                  <span className="text-white">;</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">// Why I love {selectedHobby.title}</h2>
            
            <div className="space-y-4 text-gray-300">
              {hobby === 'gaming' ? (
                <>
                  <p>Gaming is more than just a hobby for me—it's a way to experience interactive storytelling, problem-solving, and creative worlds. I'm particularly drawn to games with strong narratives and innovative mechanics.</p>
                  <p>As a developer, I also appreciate games from a technical perspective, analyzing how different systems work together to create engaging experiences.</p>
                  <p>My favorite gaming memories include completing my first difficult platforming challenge in Celeste and experiencing the emotional story of Red Dead Redemption 2.</p>
                </>
              ) : (
                <>
                  <p>Anime has been a significant part of my life since I discovered it in college. I'm fascinated by the unique storytelling techniques, visual styles, and cultural elements that anime offers.</p>
                  <p>What I appreciate most about anime is its ability to tackle complex themes and emotions while creating memorable characters and worlds.</p>
                  <p>I enjoy discussing anime with friends and occasionally attend conventions when time permits. Some of my most memorable viewing experiences have been the emotional impact of Your Lie in April and the mind-bending plot of Steins;Gate.</p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HobbiesContent;