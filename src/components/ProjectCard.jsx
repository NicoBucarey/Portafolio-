const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    highlights,
    technologies,
    demoUrl,
    repoUrl,
    image,
  } = project;

  return (
    <div
      className="group rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-5
      transition-all duration-500 hover:border-indigo-500/60 hover:-translate-y-2 hover:shadow-xl 
      hover:shadow-indigo-500/20 relative overflow-hidden"
    >
      {/* brillo sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      {/* IMAGEN */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl border border-slate-700/50 relative group/img">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />

          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover transition-all duration-500 group-hover/img:scale-105"
          />

          {/* overlay botones */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-500 transition"
              >
                Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600 transition"
              >
                Código
              </a>
            )}
          </div>
        </div>
      )}

      {/* TITULO */}
      <h3 className="relative z-20 text-lg font-semibold mb-1 group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>

      {/* DESCRIPCION (más corta) */}
      <p className="relative z-20 text-sm text-slate-400 mb-3 line-clamp-2">
        {description}
      </p>

      {/* HIGHLIGHTS (máx 2) */}
      <ul className="relative z-20 text-xs text-slate-400 mb-3 space-y-1">
        {highlights.slice(0, 2).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-indigo-400 mt-[2px]">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* TECNOLOGIAS */}
      <div className="relative z-20 flex flex-wrap gap-2 mb-3">
        {technologies.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-slate-700/50 px-2 py-1 rounded-md border border-slate-600/30 text-slate-300
                       hover:border-indigo-500/40 hover:text-indigo-300 transition"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* LINKS ABAJO */}
      <div className="relative z-20 flex gap-4 text-xs">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            Demo →
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            className="text-slate-400 hover:text-white transition"
          >
            Código →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;