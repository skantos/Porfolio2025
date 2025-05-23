import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full min-h-screen py-8 text-[#d1d1d1] font-['JetBrains_Mono'] px-4">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10 p-4 md:p-8">
        {/* Sección izquierda */}
        <section className="space-y-6 md:space-y-8 text-left w-full md:w-1/2">
          <div className="mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#00ffcc]">Samuel Gajardo</h1>
            <p className="text-base sm:text-lg text-[#999]">Software Development Engineer</p>
          </div>

          <div>
            <h2 className="text-xl mb-2 text-[#00ffff]">Habilidades</h2>
            <ul className="space-y-2 text-sm">
              <li><span className="text-[#00ffcc] font-medium">Proactividad:</span> Iniciativa constante para mejorar procesos y anticiparse a problemas.</li>
              <li><span className="text-[#00ffcc] font-medium">Aprendizaje continuo:</span> Actualización constante de conocimientos técnicos y tendencias.</li>
              <li><span className="text-[#00ffcc] font-medium">Autodidacta:</span> Capacidad de aprender por cuenta propia de forma efectiva.</li>
              <li><span className="text-[#00ffcc] font-medium">Adaptabilidad:</span> Flexibilidad para enfrentar nuevos entornos y desafíos con rapidez.</li>
              <li><span className="text-[#00ffcc] font-medium">Comunicación:</span> Claridad y eficacia para trabajar en equipo y compartir ideas.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl mb-2 text-[#00ffff]">Empecemos</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">📘 <a href="#" className="hover:underline">Skills ...</a></li>
              <li className="flex items-center gap-2">📁 <a href="#" className="hover:underline">Projects ...</a></li>
              <li className="flex items-center gap-2">💬 <a href="#" className="hover:underline">Get in Touch ...</a></li>
            </ul>
          </div>
        </section>

        {/* Sección derecha */}
        <aside className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h2 className="text-xl text-left text-[#00ffff]">About</h2>
          <div className="space-y-4">
            <a href="https://www.linkedin.com/in/samuel-gajardos/" className="flex items-center justify-start bg-[#1a1a1a] hover:bg-[#222] border-l-4 border-[#00ffcc] py-3 px-4 rounded-md gap-2 transition">
              <FaLinkedin className="text-blue-400" /> LinkedIn Profile
            </a>
            <a href="https://github.com/skantos" className="flex items-center justify-start bg-[#1a1a1a] hover:bg-[#222] border-l-4 border-[#00ffcc] py-3 px-4 rounded-md gap-2 transition">
              <FaGithub className="text-gray-300" /> Github Page
            </a>

            {/* Animación de programación */}
            <div className="animate-pulse flex items-center gap-2 text-sm text-[#00ffcc] mt-6">
              <FaCode className="text-xl" />
              <span>Código en constante evolución...</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}