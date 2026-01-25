import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl border-b border-slate-800/50 z-50 
                    hover:bg-slate-900/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <span className="text-lg font-semibold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent 
                         hover:scale-105 transition-transform duration-300">
          Nicolas Bucarey
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-slate-300">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/40 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800/50 bg-slate-900/90 backdrop-blur-xl">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
            >
              Tecnologías
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar
