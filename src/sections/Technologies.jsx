import { technologyGroups } from '../data/technologies'

function Technologies() {
  return (
    <section id="technologies" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-white via-indigo-200 to-purple-200 
                       bg-clip-text text-transparent">
          Tecnologías
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {technologyGroups.map(group => (
            <div
                key={group.title}
                className="rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-6
                transition-all duration-300 hover:border-indigo-500/60 hover:-translate-y-2 hover:shadow-2xl 
                hover:shadow-indigo-500/20 hover:bg-slate-800/60 group"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-400 text-center group-hover:text-indigo-300 transition-colors">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {group.items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 text-slate-300 p-3 rounded-xl
                                transition-all duration-300 transform hover:-translate-y-2 hover:text-indigo-400 
                                hover:bg-slate-700/30 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
                    >
                    <Icon className="text-3xl transition-all duration-300 hover:scale-125 hover:rotate-12 group-hover:text-indigo-400" />
                    <span className="text-xs text-center font-medium">
                        {name}
                    </span>
                    </div>

                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Technologies
