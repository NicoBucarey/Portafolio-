import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden scroll-mt-20">
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 
                      bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">

        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-indigo-200 to-purple-200 
                       bg-clip-text text-transparent">
          Contacto
        </h2>

        <p className="text-slate-300 mb-12 text-lg hover:text-slate-200 transition-colors duration-300 max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente? ¿Buscas colaborar en algo interesante? 
          Me encantaría conocer sobre tu idea y ver cómo puedo ayudarte a hacerla realidad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Email */}
          <a
            href="mailto:nicobucarey12@gmail.com"
            className="group flex flex-col items-center p-6 rounded-2xl bg-slate-800/40 backdrop-blur-xl 
                       border border-slate-700/50 hover:border-indigo-500/60 transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 hover:bg-slate-800/60"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full 
                            flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <h3 className="font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
              Email
            </h3>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5492994573646"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-2xl bg-slate-800/40 backdrop-blur-xl 
                       border border-slate-700/50 hover:border-green-500/60 transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 hover:bg-slate-800/60"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full 
                            flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaWhatsapp className="text-white text-xl" />
            </div>
            <h3 className="font-semibold text-green-400 group-hover:text-green-300 transition-colors">
              WhatsApp
            </h3>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nicolas-bucarey-7b711b368"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-2xl bg-slate-800/40 backdrop-blur-xl 
                       border border-slate-700/50 hover:border-blue-500/60 transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-slate-800/60"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full 
                            flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaLinkedin className="text-white text-xl" />
            </div>
            <h3 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
              LinkedIn
            </h3>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NicoBucarey"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-2xl bg-slate-800/40 backdrop-blur-xl 
                       border border-slate-700/50 hover:border-slate-400/60 transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/20 hover:bg-slate-800/60"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full 
                            flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaGithub className="text-white text-xl" />
            </div>
            <h3 className="font-semibold text-slate-300 group-hover:text-slate-200 transition-colors">
              GitHub
            </h3>
          </a>
        </div>

        {/* CTA adicional */}
        <div className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 
                        hover:bg-slate-800/40 hover:border-indigo-500/30 transition-all duration-500 
                        hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">
            ¿Buscas talento para tu equipo?
          </h3>
          <p className="text-slate-400 mb-6">
            Estoy en búsqueda de nuevas oportunidades laborales para formar parte de equipos innovadores y contribuir al crecimiento de la empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nicobucarey12@gmail.com"
              className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 
                         rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
                         hover:shadow-indigo-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">Enviar Email</span>
            </a>
            
            <a
              href="https://wa.me/5491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-medium 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
            >
              <span className="relative z-10">Chat en WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
