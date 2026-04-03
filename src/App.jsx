import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Technologies from './sections/Technologies'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'

    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell bg-slate-900 text-slate-100 transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Education />
      <Footer />
    </div>
  )
}

export default App
