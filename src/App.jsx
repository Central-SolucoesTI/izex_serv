import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import IzexFurnitureHero from './components/IzexFurnitureHero'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="IZEX SERVICES LLC">
          <img
            className="brand-mark"
            src="/images/izex_logo.png"
            alt="Logo IZEX Services LLC"
            width="82"
            height="82"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Navegação principal"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <Link to="/furniture-assembly" onClick={closeMenu}>
            Furniture Assembly
          </Link>
          <a href="#cleaning-solutions" onClick={closeMenu}>
            Cleaning Solutions
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>
      </header>

      <section id="home" className="hero-section" aria-label="Seção principal IZEX SERVICES LLC">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Excelência e Eficiência em Serviços Especializados</h1>
          <p>
            Na Izex Services LLC, nossa missão é oferecer soluções práticas e de alta qualidade
            para sua casa, escritório ou empreendimento. Somos uma holding que gerencia duas
            empresas especializadas para atender diferentes necessidades com profissionalismo e
            compromisso:
          </p>
          <ul className="service-list">
            <li>
              <strong>Izex Furniture Assembly</strong> - Montagem e Instalação de Móveis
            </li>
            <li>
              <strong>Izex Cleaning Solutions</strong> - Limpeza e Conservação Profissional
            </li>
          </ul>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/furniture-assembly" element={<IzexFurnitureHero />} />
    </Routes>
  )
}

export default App
