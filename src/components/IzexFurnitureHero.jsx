import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import './IzexFurnitureHero.css'
import FurnitureServices from './FurnitureServices'
import TargetAudienceAndProcess from './TargetAudienceAndProcess'
import WhyChooseIzex from './WhyChooseIzex'

const highlights = [
  'Profissionais qualificados',
  'Atendimento rápido e agendado',
  'Serviço em toda a região',
]

function IzexFurnitureHero() {
  return (
    <div className="furniture-page">
      <header className="furniture-header" aria-label="Header IZEX furniture ASSEMBLY">
        <Link className="furniture-brand" to="/furniture-assembly" aria-label="IZEX furniture ASSEMBLY">
          <img
            src="/images/izex_furniture_ass.png"
            alt="IZEX furniture ASSEMBLY"
            className="furniture-brand-logo"
            width="210"
            height="62"
          />
        </Link>

        <nav className="furniture-nav" aria-label="Navegação principal">
          <Link to="/">Home</Link>
          <Link className="active" to="/furniture-assembly" aria-current="page">
            Furniture Assembly
          </Link>
          <a href="/#cleaning-solutions">Cleaning Solutions</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="furniture-home" className="furniture-hero" aria-label="Especialistas em Montagem de Móveis">
        <div className="furniture-overlay">
          <div className="furniture-content">
            <h1>Especialistas em Montagem de Móveis</h1>
            <h2>Soluções Rápidas, Profissionais e Sem Complicações!</h2>
            <p>
              Está precisando montar ou instalar móveis na sua casa ou empresa? A Izex Furniture
              Assembly oferece um serviço confiável e eficiente para garantir que seus móveis sejam
              montados com qualidade e segurança.
            </p>

            <ul className="furniture-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a className="furniture-cta" href="#contato">
              Solicite um orçamento agora
            </a>
          </div>
        </div>
      </section>

      <FurnitureServices />

      <TargetAudienceAndProcess />

      <WhyChooseIzex />
    </div>
  )
}

export default IzexFurnitureHero
