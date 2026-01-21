function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Educación
        </h2>

        <div className="space-y-6">

          {/* Carrera */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              Técnico Universitario en Desarrollo Web
            </h3>

            <p className="text-slate-300">
              Facultad de Informática – Universidad Nacional del Comahue
            </p>

            <p className="text-slate-400 text-sm mt-2">
              Título en trámite · Egresado 2025
            </p>
          </div>

          {/* Inglés */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">
              Inglés
            </h3>

            <p className="text-slate-300">
              Instituto Cultural Inglesa (4° año)
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education
