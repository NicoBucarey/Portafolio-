import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Contacto
        </h2>

        <p className="text-slate-300 mb-12 text-lg">
          Si te interesa mi perfil o querés ponerte en contacto conmigo,
          podés hacerlo a través de los siguientes medios.
        </p>

        <div className="flex justify-center gap-12 text-3xl text-slate-300">
          <a
            href="mailto:nicobucarey12@gmail.com"
            className="transition hover:text-indigo-400 hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/NicoBucarey"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-indigo-400 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/nicolas-bucarey-7b711b368"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-indigo-400 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
