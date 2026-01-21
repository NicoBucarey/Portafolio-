// src/components/ProjectCard.jsx

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    highlights,
    technologies,
    demoUrl,
    repoUrl,
    // featured, // Comentado temporalmente
  } = project;

  return (
    <div
      className="group rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-6
      transition-all duration-500 hover:border-indigo-500/60 hover:-translate-y-3 hover:shadow-2xl 
      hover:shadow-indigo-500/25 hover:bg-slate-800/60 relative overflow-hidden"
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      {/* {featured && (
        <span className="inline-block mb-3 text-sm text-indigo-400">
          Proyecto destacado
        </span>
      )} */}
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-xl border border-slate-700/50 relative group/img">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-all duration-500 group-hover/img:scale-110 group-hover/img:brightness-110"
              />
              {/* Indicador visual de que es clickeable */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 z-20 flex items-center justify-center">
                <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-all duration-500 group-hover/img:scale-110 group-hover/img:brightness-110"
            />
          )}
        </div>
      )}

      <h3 className="relative z-20 text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors">{title}</h3>
      <p className="relative z-20 text-slate-300 mb-4 group-hover:text-slate-200 transition-colors">{description}</p>

      <ul className="relative z-20 text-sm text-slate-400 mb-4 space-y-2">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-2 hover:text-slate-300 transition-colors duration-300">
            <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-20 flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gradient-to-r from-slate-700/60 to-slate-600/60 backdrop-blur-sm 
                       px-3 py-1.5 rounded-full border border-slate-600/30 text-slate-300
                       hover:from-indigo-600/30 hover:to-purple-600/30 hover:border-indigo-500/50 
                       hover:text-indigo-200 transition-all duration-300 hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-20 flex gap-4 text-sm">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            className="inline-flex items-center px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 
                       hover:bg-indigo-500/30 hover:text-indigo-300 transition-all duration-300 
                       hover:scale-105 border border-indigo-500/30 hover:border-indigo-500/50"
          >
            Demo ↗
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-700/40 text-slate-300 
                       hover:bg-slate-600/50 hover:text-white transition-all duration-300 
                       hover:scale-105 border border-slate-600/50 hover:border-slate-500/70"
          >
            Código ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
