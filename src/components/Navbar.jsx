function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl border-b border-slate-800/50 z-50 
                    hover:bg-slate-900/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <span className="text-lg font-semibold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent 
                         hover:scale-105 transition-transform duration-300">
          Nicolas Bucarey
        </span>

        <ul className="flex gap-6 text-sm text-slate-300">
          <li>
            <a href="#about" 
               className="hover:text-white hover:text-indigo-300 transition-all duration-300 
                          hover:scale-105 px-3 py-2 rounded-lg hover:bg-slate-800/40">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#technologies" 
               className="hover:text-white hover:text-indigo-300 transition-all duration-300 
                          hover:scale-105 px-3 py-2 rounded-lg hover:bg-slate-800/40">
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#projects" 
               className="hover:text-white hover:text-indigo-300 transition-all duration-300 
                          hover:scale-105 px-3 py-2 rounded-lg hover:bg-slate-800/40">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" 
               className="hover:text-white hover:text-indigo-300 transition-all duration-300 
                          hover:scale-105 px-3 py-2 rounded-lg hover:bg-slate-800/40">
              Contacto
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
