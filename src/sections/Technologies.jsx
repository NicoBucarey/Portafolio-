import { technologyGroups } from '../data/technologies'

function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          Tecnologías
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {technologyGroups.map(group => (
            <div
                key={group.title}
                className="rounded-2xl bg-slate-800/60 border border-slate-700 p-6
                transition hover:border-indigo-500 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-400 text-center">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {group.items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 text-slate-300
                                transition transform hover:-translate-y-1 hover:text-indigo-400"
                    >
                    <Icon className="text-3xl transition-transform duration-300 hover:scale-110" />
                    <span className="text-xs text-center">
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
