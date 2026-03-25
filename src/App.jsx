import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import IzexFurnitureHero from './components/IzexFurnitureHero'
import IzexCleaningHero from './components/IzexCleaningHero'
import ContactAndSteps from './components/ContactAndSteps'
import ServiceRegionsArea from './components/ServiceRegionsArea'
import FloatingButtons from './components/FloatingButtons'
import { useLanguage } from './i18n/LanguageContext'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const closeMenu = () => setIsMenuOpen(false)
  const navAriaLabel = t('homePage.navAriaLabel')

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
          aria-label={t('homePage.menuAriaLabel')}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-actions">
          <nav
            id="main-navigation"
            className={`main-nav ${isMenuOpen ? 'open' : ''}`}
            aria-label={navAriaLabel}
          >
            <a href="#home" onClick={closeMenu}>
              {t('common.home')}
            </a>
            <Link to="/furniture-assembly" onClick={closeMenu}>
              {t('common.furnitureAssembly')}
            </Link>
            <Link to="/cleaning-solutions" onClick={closeMenu}>
              {t('common.cleaningSolutions')}
            </Link>
            <a href="#contato" onClick={closeMenu}>
              {t('common.contact')}
            </a>
          </nav>

          <div className="lang-switcher" aria-label={t('common.languageLabel')}>
            <button
              type="button"
              className={language === 'pt' ? 'active' : ''}
              onClick={() => setLanguage('pt')}
            >
              {t('common.pt')}
            </button>
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              {t('common.en')}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero-section" aria-label={t('homePage.heroAriaLabel')}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{t('homePage.heroTitle')}</h1>
          <p>{t('homePage.heroDescription')}</p>
          <ul className="service-list">
            <li>
              <strong>Izex Furniture Assembly</strong> - {t('homePage.serviceItemFurniture')}
            </li>
            <li>
              <strong>Izex Cleaning Solutions</strong> - {t('homePage.serviceItemCleaning')}
            </li>
          </ul>
        </div>
      </section>

      <ServicesSection />
      <ContactAndSteps />
      <ServiceRegionsArea />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/furniture-assembly" element={<IzexFurnitureHero />} />
        <Route path="/cleaning-solutions" element={<IzexCleaningHero />} />
      </Routes>
      <FloatingButtons />
    </>
  )
}

export default App
