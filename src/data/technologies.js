import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiDocker,
  SiPostman,
} from 'react-icons/si'

export const technologyGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
    ],
  },
  {
    title: 'Bases de datos',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Postman', icon: SiPostman },
    ],
  },
]
