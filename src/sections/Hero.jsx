import profileImg from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center px-4 pb-8 overflow-hidden">

      {/* fondo decorativo moderno */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="text-center md:text-left">
          <span className="inline-block mb-6 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                           text-indigo-300 border border-indigo-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            Full Stack Developer
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-indigo-200 
                         bg-clip-text text-transparent animate-pulse">
            Nicolas Bucarey
          </h1>

          <p className="text-xl text-slate-300 mb-6">
            Técnico Universitario en Desarrollo Web
          </p>

          <p className="text-slate-400 max-w-xl mb-10">
            Desarrollo Aplicaciones Web, integrando frontend, backend
            y bases de datos, utilizando distintas tecnologías y enfocándome en
            buenas prácticas y aprendizaje continuo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
            <a
              href="#projects"
              className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 
                         rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
                         hover:shadow-indigo-500/25 relative overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Ver proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/5492994573646" 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-medium 
                           transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20
                           w-full sm:w-auto text-center"
              >
                <span className="relative z-10">📱 WhatsApp</span>
              </a>
              
              <a
                href="#contact"
                className="group px-6 py-3 border border-slate-600 hover:border-indigo-400 rounded-xl text-slate-300 hover:text-white 
                           font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-slate-500/20 
                           backdrop-blur-sm bg-slate-800/30 hover:bg-slate-700/40 w-full sm:w-auto text-center"
              >
                <span className="relative z-10">✉ Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <img
              src={profileImg}
              alt="Foto de perfil"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-slate-700/50 backdrop-blur-xl 
                         transform transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-400/60"
              style={{ objectPosition: 'center 55%' }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
