import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contacto() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto py-8 px-4">

        <div className="bg-[#161b22] w-full p-4 md:p-6 rounded-xl border border-[#30363d] shadow-lg break-words">
          <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center md:text-left">&lt;Contacto.Info /&gt;</h2>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3 flex-wrap break-words"><FaEnvelope className="text-blue-300" /> s.g.g.j.2003@gmail.com</p>
            <p className="flex items-center gap-3 flex-wrap break-words"><FaGithub className="text-yellow-300" /> github</p>
            <p className="flex items-center gap-3 flex-wrap break-words"><FaLinkedin className="text-blue-500" /> linkedin</p>
          </div>
        </div>

        <div className="bg-[#161b22] w-full p-4 md:p-6 rounded-xl border border-[#30363d] shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center md:text-left">&lt;Contacto.Form /&gt;</h2>
          <form className="space-y-4 w-full">
            <input className="w-full p-2 rounded bg-[#0d1117] border border-[#30363d] text-white placeholder-gray-400" placeholder="Nombre" />
            <input className="w-full p-2 rounded bg-[#0d1117] border border-[#30363d] text-white placeholder-gray-400" placeholder="Email" />
            <input className="w-full p-2 rounded bg-[#0d1117] border border-[#30363d] text-white placeholder-gray-400" placeholder="Asunto" />
            <textarea className="w-full p-2 rounded bg-[#0d1117] border border-[#30363d] text-white placeholder-gray-400" placeholder="Mensaje" rows={4}></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded shadow">
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* <div className="md:col-span-2 bg-[#161b22] w-full p-4 md:p-6 rounded-xl border border-[#30363d] shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center md:text-left">&lt;Contacto.Horario /&gt;</h2>
          <ul className="text-sm text-gray-300 space-y-1 text-center md:text-left">
            <li>Lunes a Viernes: <span className="text-yellow-300">09:00 - 17:00</span></li>
            <li>Sábado: <span className="text-yellow-300">10:00 - 14:00</span></li>
            <li>Domingo: <span className="text-red-400">Cerrado</span></li>
          </ul>
        </div> */}

      </div>
    </div>
  );
}



