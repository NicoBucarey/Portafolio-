// src/components/ProjectCard.jsx

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    highlights,
    technologies,
    demoUrl,
    repoUrl,
    featured,
  } = project;

  return (
    <div
      className={`rounded-2xl border border-slate-700 bg-slate-800/60 p-6
      transition hover:border-indigo-500 hover:-translate-y-1
      ${featured ? "md:col-span-2" : ""}`}
    >
      {featured && (
        <span className="inline-block mb-3 text-sm text-indigo-400">
          Proyecto destacado
        </span>
      )}
      {project.image && (
  <div className="mb-4 overflow-hidden rounded-xl border border-slate-700">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover transition duration-300 hover:scale-105"
    />
  </div>
)}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>

      <ul className="text-sm text-slate-400 mb-4 space-y-1">
        {highlights.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-slate-700/60 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            Repositorio
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
