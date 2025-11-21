import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
            <p className="flex items-center gap-3 flex-wrap break-words"><FaEnvelope className="text-blue-300" /> s.g.g.j.2003@gmail.com</p>
            <p className="flex items-center gap-3 flex-wrap break-words"><FaGithub className="text-yellow-300" /> github</p>
            <p className="flex items-center gap-3 flex-wrap break-words"><FaLinkedin className="text-blue-500" /> linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}