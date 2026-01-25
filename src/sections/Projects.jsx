// src/sections/Projects.jsx

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden scroll-mt-20">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Proyectos destacados
        </h2>
        <p className="text-slate-400 mb-10 hover:text-slate-300 transition-colors duration-300">
          Algunos proyectos personales donde aplico frontend, backend y buenas prácticas.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
