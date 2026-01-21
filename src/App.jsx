import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Technologies from './sections/Technologies'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
