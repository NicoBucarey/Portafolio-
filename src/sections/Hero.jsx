import profileImg from '../assets/profile.jpg'
import profileOscuroImg from '../assets/profileoscuro.jpg'

function Hero({ theme }) {
  const currentProfileImg = theme === 'light' ? profileOscuroImg : profileImg

  return (
    <section className="relative min-h-[90vh] flex items-center px-4 pt-24 md:pt-20 overflow-hidden">

      {/* fondo sutil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* TEXTO */}
        <div className="text-center md:text-left">

          <span className="inline-block mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Full Stack Developer
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Nicolas <span className="text-indigo-400">Bucarey</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-400 mb-6">
            Desarrollo aplicaciones web completas con React, Node y bases de datos,
            enfocadas en resolver problemas reales.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-medium 
                         flex items-center justify-center
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-slate-600 hover:border-indigo-400 rounded-xl text-slate-300 hover:text-white 
                         flex items-center justify-center
                         font-medium transition-all duration-300 hover:scale-105"
            >
              Contacto
            </a>

          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <div className="relative group">

            <div className={`absolute -inset-3 rounded-full blur-xl transition-all duration-500 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-indigo-400/35 via-purple-400/30 to-cyan-400/25 opacity-70 group-hover:opacity-90'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 opacity-40 group-hover:opacity-60'
            }`} />

            <img
              src={currentProfileImg}
              alt="Foto de perfil"
              className={`relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 transition-all duration-500 hover:scale-105 ${
                theme === 'light'
                  ? 'border-slate-300 shadow-xl shadow-indigo-200/40'
                  : 'border-slate-800 shadow-xl shadow-indigo-950/30'
              }`}
              style={{ objectPosition: 'center 55%' }}
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero