function Education() {
  return (
    <section id="education" className="py-16 px-4 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-white via-indigo-200 to-purple-200 
                       bg-clip-text text-transparent">
          Educación
        </h2>

        <div className="space-y-6">

          {/* Carrera */}
          <div className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8
                          transition-all duration-300 hover:border-indigo-500/60 hover:-translate-y-2 hover:shadow-2xl 
                          hover:shadow-indigo-500/20 hover:bg-slate-800/60">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">🎓</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors">
              Técnico Universitario en Desarrollo Web
            </h3>

            <p className="text-slate-300 font-medium group-hover:text-slate-200 transition-colors">
              Facultad de Informática – Universidad Nacional del Comahue
            </p>

            <div className="mt-3 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
              ✨ Recién egresado 2025 - Titulo en tramite
            </div>
          </div>

          {/* Inglés */}
          <div className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6
                          transition-all duration-300 hover:border-indigo-500/60 hover:-translate-y-1 hover:shadow-xl 
                          hover:shadow-indigo-500/10 hover:bg-slate-800/50">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌐</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors">
              Inglés
            </h3>

            <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
              Instituto Cultural Inglesa (4° año)
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education
