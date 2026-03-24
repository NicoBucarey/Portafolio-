import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden scroll-mt-20">

      {/* fondo sutil */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Proyectos
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Aplicaciones donde combino frontend, backend y lógica de negocio para resolver problemas reales.
          </p>
        </div>

        {/* ⭐ PROYECTO DESTACADO */}
        {featured && (
          <div className="mb-16">
            <h3 className="text-left text-indigo-400 text-sm mb-4">
              PROYECTO DESTACADO
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl">

              {/* imagen */}
              <img
                src={featured.image}
                alt={featured.title}
                className="rounded-xl w-full h-64 object-cover"
              />

              {/* info */}
              <div>
                <h4 className="text-2xl font-semibold text-white mb-3">
                  {featured.title}
                </h4>

                <p className="text-slate-400 mb-4">
                  {featured.description}
                </p>

                <ul className="text-sm text-slate-400 mb-4 space-y-2">
                  {featured.highlights.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-indigo-400">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {featured.demoUrl && (
                    <a
                      href={featured.demoUrl}
                      target="_blank"
                      className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                    >
                      Ver demo
                    </a>
                  )}

                  {featured.repoUrl && (
                    <a
                      href={featured.repoUrl}
                      target="_blank"
                      className="px-5 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-indigo-400 hover:text-white transition"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 🧩 RESTO DE PROYECTOS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;