function About() {
  return (
    <section id="about" className="py-12 px-4 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 
                      bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-white via-indigo-200 to-purple-200 
                       bg-clip-text text-transparent">
          Sobre mí
        </h2>

        <div className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 
                        hover:bg-slate-800/40 hover:border-indigo-500/30 transition-all duration-500 
                        hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1">
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p className="hover:text-slate-200 transition-colors duration-300">
              Soy Técnico Universitario en Desarrollo Web, egresado de la Facultad de Informática
              de la Universidad Nacional del Comahue.
            </p>

            <p className="hover:text-slate-200 transition-colors duration-300">
              Durante mi formación académica trabajé en distintos proyectos que involucraron
              frontend, backend y bases de datos, lo que me permitió desarrollar una base sólida
              y una visión integral del desarrollo de aplicaciones web.
            </p>

            <p className="hover:text-slate-200 transition-colors duration-300">
              Me interesa seguir aprendiendo, mejorar continuamente y participar en proyectos
              donde pueda adquirir experiencia real, aportar valor y crecer profesionalmente.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
