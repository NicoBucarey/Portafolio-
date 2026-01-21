function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <span className="text-lg font-semibold">
          Nicolas Bucarey
        </span>

        <ul className="flex gap-6 text-sm text-slate-300">
          <li><a href="#about" className="hover:text-white">Sobre mí</a></li>
          <li><a href="#technologies" className="hover:text-white">Tecnologías</a></li>
          <li><a href="#projects" className="hover:text-white">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-white">Contacto</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
