import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;

  if (url.includes("/embed/")) {
    return url;
  }

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  const watchMatch = url.match(/[?&]v=([^?&]+)/);
  const videoId = shortMatch?.[1] || watchMatch?.[1];

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const Projects = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const embeddedVideoUrl = useMemo(
    () => getYouTubeEmbedUrl(featured?.videoUrl),
    [featured?.videoUrl]
  );

  useEffect(() => {
    if (!isVideoOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVideoOpen]);

  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden scroll-mt-20">

        {/* fondo sutil */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3 text-white">
              Proyectos
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Aplicaciones donde combino frontend, backend y lógica de negocio para resolver problemas reales.
            </p>
          </div>

          {/* ⭐ PROYECTO PROFESIONAL */}
          {featured && (
            <div className="mb-16">
<p className="text-center text-indigo-400 text-sm sm:text-base font-semibold uppercase tracking-[0.16em] sm:tracking-[0.25em] mb-4 flex items-center justify-center gap-2">
                Proyecto principal
              </p>

              <div className="group relative mx-auto max-w-4xl rounded-3xl border border-slate-700/50 bg-slate-800/40 p-4 sm:p-5 md:p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                <div className="mb-6 overflow-hidden rounded-2xl border border-slate-700/50 relative group/img">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10 pointer-events-none" />
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-48 sm:h-64 object-cover transition-all duration-500 group-hover/img:scale-105"
                    />
                  ) : (
                    <div className="flex h-48 sm:h-64 flex-col items-center justify-center">
                      <span className="mb-3 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-indigo-200">
                        Sistema profesional
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white">
                        {featured.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-200">
                        Gestión de turnos, pacientes y seguimiento clínico en un entorno moderno y profesional.
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                    {featured.title}
                  </h3>

                  <p className="mx-auto max-w-2xl text-slate-300 mb-3">
                    {featured.description}
                  </p>

                  <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400 mb-5">
                    Gestión de turnos • Teleconsultas • Historial clínico • Seguimiento de pacientes
                  </p>

                  <div className="mb-6 flex flex-wrap justify-center gap-2">
                    {featured.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition flex items-center justify-center gap-2"
                    >
                      ▶ Ver presentación
                    </button>

                    <a
                      href={featured.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 border border-slate-600 text-slate-300 rounded-lg hover:border-indigo-400 hover:text-white transition text-center"
                    >
                      Ver código
                    </a>
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

      {featured && isVideoOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl border border-slate-700/50 bg-slate-900 p-3 sm:p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-sm sm:text-base font-semibold text-white text-center sm:text-left">
                {featured.title} · Demo
              </h3>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="w-full sm:w-auto rounded-lg bg-slate-800 px-3 py-2 text-slate-200 hover:bg-slate-700 transition"
              >
                Cerrar
              </button>
            </div>

            {embeddedVideoUrl ? (
              <div className="aspect-video overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src={embeddedVideoUrl}
                  title={`Demo ${featured.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video rounded-xl border border-dashed border-slate-600 bg-slate-800/60 px-4 sm:px-6 text-center flex flex-col items-center justify-center">
                <p className="text-slate-100 text-lg font-semibold mb-2">
                  El modal ya está listo para tu video de YouTube
                </p>
                <p className="text-sm text-slate-400 max-w-xl mb-4">
                  Solo tenés que pegar tu link en la propiedad <code className="text-indigo-300">videoUrl</code> dentro de <code className="text-indigo-300">src/data/projects.js</code>.
                </p>

                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition"
                  >
                    Abrir versión online
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;