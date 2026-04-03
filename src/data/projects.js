// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "MediGestión",
    description:
      "Sistema de gestión para consultorios médicos que permite administrar turnos, pacientes y seguimiento clínico.",
    highlights: [
      "Gestión de turnos y agenda médica",
      "Administración de pacientes e historial clínico",
      "Seguimiento clínico en un entorno profesional",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/projects/medigestion.png",
    videoUrl: "https://youtu.be/viLIjmsucsk",
    liveUrl: "https://tp-final-medi-gestion.vercel.app/",
    repoUrl: "https://github.com/NicoBucarey/TPFinal-MediGestion",
    featured: true,
  },

  {
    id: 2,
    title: "Lookin",
    description:
      "Aplicación web para explorar películas y series usando la API de TMDB.",
    highlights: [
      "Consumo de API externa",
      "Búsqueda, filtros y ordenamiento",
      "Favoritos con localStorage",
      "Interfaz en español e inglés",
    ],
    technologies: ["React", "Tailwind CSS", "API TMDB"],
    image: "/projects/lookin.png",
    demoUrl: "https://lookin-alpha.vercel.app/",
    repoUrl: "https://github.com/NicoBucarey/Lookin.git",
    featured: false,
  },

  {
    id: 3,
    title: "Nerdflix",
    description:
      "SPA para la gestión de películas y series vistas y no vistas.",
    highlights: [
      "CRUD completo",
      "Manejo de estado",
      "Filtros y ordenamiento",
      "Componentes reutilizables",
    ],
    technologies: ["React"],
    image: "/projects/nerdflix.png",
    demoUrl: "https://tp-react-ochre.vercel.app/",
    repoUrl: "https://github.com/NicoBucarey/Nerflix.git",
    featured: false,
  },

  {
    id: 4,
    title: "Blog de Turismo Argentino",
    description:
      "Aplicación web desarrollada con Laravel para la gestión y visualización de destinos turísticos de Argentina.",
    highlights: [
      "CRUD de destinos turísticos",
      "Autenticación de usuarios",
      "Panel de administración",
      "Base de datos MySQL",
    ],
    technologies: ["Laravel", "PHP", "MySQL"],
    image: "/projects/blog-turismo.png",
    demoUrl:
      "https://web-production-434c9.up.railway.app/",
    repoUrl: "https://github.com/NicoBucarey/Laravel---Blog-Turismo-Argentino.git",
    featured: false,
  },
];
