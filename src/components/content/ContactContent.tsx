import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaUsers,
  FaRocket,
} from 'react-icons/fa';

export default function Contacto() {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-4xl mx-auto py-8 px-4 space-y-6">
        <div className="bg-[#161b22] w-full p-4 md:p-6 rounded-xl border border-[#30363d] shadow-lg break-words">
          <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center md:text-left">&lt;Contacto.Info /&gt;</h2>
          <p className="text-sm text-gray-300 mb-5 leading-relaxed text-center md:text-left">
            ¿Quieres colaborar o tienes una propuesta? Escríbeme directamente a cualquiera de los siguientes canales y responderé a la brevedad.
          </p>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3 flex-wrap break-words">
              <FaEnvelope className="text-blue-300" /> s.g.g.j.2003@gmail.com
            </p>
            <a
              href="https://github.com/skantos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-wrap break-words text-yellow-300 hover:text-yellow-200 transition-colors"
            >
              <FaGithub className="text-yellow-300" /> github.com/skantos
            </a>
          </div>
        </div>

        <div className="bg-[#161b22] w-full p-4 md:p-6 rounded-xl border border-[#30363d] shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center md:text-left">&lt;Github.Preview /&gt;</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3 w-full bg-[#0f1722] border border-[#1f2937] rounded-lg p-4 space-y-4 text-sm text-gray-200">
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  src="https://github.com/skantos.png"
                  alt="Avatar de skantos"
                  className="w-24 h-24 rounded-full border border-[#30363d] shadow-lg"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Samuel Gajardo</h3>
                  <p className="text-xs uppercase tracking-widest text-[#00ffcc]/80">Full Stack Developer</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-gray-400">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#00ffcc]" /> Santiago, Chile
                </p>
                <p className="flex items-center gap-2">
                  <FaExternalLinkAlt className="text-[#00ffcc]" />
                  <a
                    href="https://porfoliosamuel-33f2d.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00ffcc]"
                  >
                    portafolio en producción
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaUsers className="text-[#00ffcc]" /> 3 seguidores · 6 siguiendo
                </p>
              </div>
              <a
                href="https://github.com/skantos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 transition-colors w-full text-sm"
              >
                <FaGithub /> Visitar perfil en GitHub
              </a>
            </div>

            <div className="flex-1 space-y-5 text-sm text-gray-200">
              <div className="bg-[#0f1722] border border-[#1f2937] rounded-lg p-4">
                <h3 className="text-base font-semibold text-[#00ffcc] mb-3">Resumen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🎓 Ingeniería en Informática — INACAP (2021-2024)</li>
                  <li>📚 Aprendiendo: análisis de datos y machine learning</li>
                  <li>🛠️ Stack principal: JavaScript, React, Node.js, Firebase, Python</li>
                </ul>
              </div>

              <div className="bg-[#0f1722] border border-[#1f2937] rounded-lg p-4">
                <h3 className="text-base font-semibold text-[#00ffcc] mb-3">Estadísticas</h3>
                <a
                  href="https://github.com/skantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=skantos&show_icons=true&theme=github_dark&hide_border=true"
                    alt="Estadísticas de GitHub de skantos"
                    className="rounded-md border border-[#1f2937] shadow-md max-w-full"
                    loading="lazy"
                  />
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  Generado automáticamente con GitHub Readme Stats. Datos actualizados cada vez que visitas el perfil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}