function About() {
  return (
    <section id="about" className="py-16 px-4 relative overflow-hidden scroll-mt-20">

      {/* fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 
                      bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITULO CENTRADO */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* TEXTO EN CARD */}
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">

              <p>
                Soy desarrollador web con formación en la Universidad Nacional del Comahue,
                enfocado en construir aplicaciones completas utilizando React, Node y bases de datos.
              </p>

              <p>
                Trabajé en proyectos donde integré frontend, backend y lógica de negocio,
                lo que me permitió entender el desarrollo de forma integral.
              </p>

              <p>
                Actualmente busco seguir creciendo profesionalmente, participar en proyectos reales
                y aportar soluciones que generen impacto.
              </p>

            </div>
          </div>

          {/* CARDS */}
          <div className="space-y-4">

            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/40 transition">
              <h3 className="text-white text-lg font-semibold mb-1">
                🧠 Enfoque
              </h3>
              <p className="text-base text-slate-400">
                Desarrollo aplicaciones completas, no solo interfaces.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/40 transition">
              <h3 className="text-white text-lg font-semibold mb-1">
                ⚙️ Stack
              </h3>
              <p className="text-base text-slate-400">
                React, Node.js, Express y PostgreSQL.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/40 transition">
              <h3 className="text-white text-lg font-semibold mb-1">
                🚀 Objetivo
              </h3>
              <p className="text-base text-slate-400">
                Ganar experiencia real y aportar valor en proyectos.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About