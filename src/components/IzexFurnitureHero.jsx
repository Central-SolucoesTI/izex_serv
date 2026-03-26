import { useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import './IzexFurnitureHero.css'
import FurnitureServices from './FurnitureServices'
import TargetAudienceAndProcess from './TargetAudienceAndProcess'
import WhyChooseIzex from './WhyChooseIzex'
import FurnitureFooter from './FurnitureFooter'
import SEOConfig from './SEOConfig'
import { useLanguage } from '../i18n/LanguageContext'
import { generateLocalBusinessSchema } from '../config/seoConfig'

function IzexFurnitureHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const translatedHighlights = t('furniturePage.highlights', [])
  const highlights = Array.isArray(translatedHighlights) ? translatedHighlights : []
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <SEOConfig
        page="furniture"
        language={language}
        schemaData={generateLocalBusinessSchema('furniture-assembly')}
      />
      <div className="furniture-page">
      <header className="furniture-header" aria-label={t('furniturePage.headerAriaLabel')}>
        <Link className="furniture-brand" to="/furniture-assembly" aria-label={t('furniturePage.brandAriaLabel')}>
          <img
            src="/images/izex_furniture_ass.png"
            alt={t('furniturePage.brandAriaLabel')}
            className="furniture-brand-logo"
            width="210"
            height="62"
          />
        </Link>

        <button
          className="furniture-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="furniture-navigation"
          aria-label={t('homePage.menuAriaLabel')}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="furniture-header-controls">
        <nav
          id="furniture-navigation"
          className={`furniture-nav ${isMenuOpen ? 'open' : ''}`}
          aria-label={t('furniturePage.navAriaLabel')}
        >
          <Link to="/" onClick={closeMenu}>{t('common.home')}</Link>
          <Link className="active" to="/furniture-assembly" aria-current="page" onClick={closeMenu}>
            {t('common.furnitureAssembly')}
          </Link>
          <Link to="/cleaning-solutions" onClick={closeMenu}>{t('common.cleaningSolutions')}</Link>
          <a href="#contato" onClick={closeMenu}>{t('common.contact')}</a>
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

      <section id="furniture-home" className="furniture-hero" aria-label={t('furniturePage.heroAriaLabel')}>
        <div className="furniture-overlay">
          <div className="furniture-content">
            <h1>{t('furniturePage.heroTitle')}</h1>
            <h2>{t('furniturePage.heroSubtitle')}</h2>
            <p>{t('furniturePage.heroDescription')}</p>

            <ul className="furniture-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a className="furniture-cta" href="#contato">{t('furniturePage.heroCta')}</a>
          </div>
        </div>
      </section>

      <FurnitureServices />

      <TargetAudienceAndProcess />

      <WhyChooseIzex />
      
      <FurnitureFooter />
      </div>
    </>
  )
}

export default IzexFurnitureHero
