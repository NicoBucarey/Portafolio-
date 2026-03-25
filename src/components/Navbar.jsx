import { useState, useEffect } from 'react'

function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleThemeToggle = () => {
    setIsMenuOpen(false)
    onToggleTheme()
  }

  const isLightMode = theme === 'light'
  const toggleThemeIcon = isLightMode ? '🌙' : '☀️'
  const navClass = isLightMode
    ? scrolled
      ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80'
      : 'bg-white/80 backdrop-blur-md border-b border-slate-200/70'
    : scrolled
      ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50'
      : 'bg-slate-900/60 backdrop-blur-md'

  const themeButtonClass = isLightMode
    ? 'w-10 h-10 flex items-center justify-center rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors duration-300'
    : 'w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/60 text-white hover:bg-slate-700 transition-colors duration-300'

  const mobileMenuClass = isLightMode
    ? 'bg-white/95 backdrop-blur-xl border-t border-slate-200'
    : 'bg-slate-900/95 backdrop-blur-xl border-t border-slate-800'

  const mobileMenuLinkClass = isLightMode ? 'block text-slate-700' : 'block text-slate-300'

  const mobileHamburgerClass = isLightMode
    ? 'p-2 text-slate-700 rounded-lg hover:bg-slate-200/70 transition-colors'
    : 'p-2 text-slate-300 rounded-lg hover:bg-slate-800/50 transition-colors'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <span className="text-lg font-semibold text-slate-100">
          Nicolas <span className="text-indigo-400">Bucarey</span>
        </span>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6">

          <ul className="flex gap-6 text-sm text-slate-300">
            <li><a href="#about" className="hover:text-white transition">Sobre mí</a></li>
            <li><a href="#technologies" className="hover:text-white transition">Tecnologías</a></li>
            <li><a href="#projects" className="hover:text-white transition">Proyectos</a></li>
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm transition"
          >
            Contacto
          </a>

          {/* THEME */}
          <button
            onClick={handleThemeToggle}
            className={themeButtonClass}
          >
            {toggleThemeIcon}
          </button>

        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">

          <button
            onClick={handleThemeToggle}
            className={themeButtonClass}
          >
            {toggleThemeIcon}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={mobileHamburgerClass}
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
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className={`${mobileMenuClass} transition-colors duration-300`}>
          <div className="px-4 py-4 space-y-3">

            <a href="#about" onClick={() => setIsMenuOpen(false)} className={mobileMenuLinkClass}>Sobre mí</a>
            <a href="#technologies" onClick={() => setIsMenuOpen(false)} className={mobileMenuLinkClass}>Tecnologías</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className={mobileMenuLinkClass}>Proyectos</a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg text-center"
            >
              Contacto
            </a>

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar