import profileImg from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">

      {/* fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="text-center md:text-left">
          <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-400">
            Full Stack Developer
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nicolas Bucarey
          </h1>

          <p className="text-xl text-slate-300 mb-6">
            Técnico Universitario en Desarrollo Web
          </p>

          <p className="text-slate-400 max-w-xl mb-10">
            Desarrollo aplicaciones web full stack, integrando frontend, backend
            y bases de datos, utilizando distintas tecnologías y enfocándome en
            buenas prácticas y aprendizaje continuo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-medium transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-slate-600 hover:border-slate-400 rounded-md text-slate-300 transition"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Foto de perfil"
            className="w-64 h-64 object-cover rounded-full border-4 border-slate-700"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
