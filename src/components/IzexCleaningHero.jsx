import { useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import './IzexCleaningHero.css'
import { useLanguage } from '../i18n/LanguageContext'
import CleaningServices from './CleaningServices'
import TargetAudienceCleaning from './TargetAudienceCleaning'
import HowCleaningWorks from './HowCleaningWorks'
import WhyChooseCleaning from './WhyChooseCleaning'
import CleaningCTA from './CleaningCTA'
import CleaningFooter from './CleaningFooter'
import SEOConfig from './SEOConfig'
import { generateLocalBusinessSchema } from '../config/seoConfig'

function IzexCleaningHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const translatedHighlights = t('cleaningPage.highlights', [])
  const highlights = Array.isArray(translatedHighlights) ? translatedHighlights : []
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <SEOConfig
        page="cleaning"
        language={language}
        schemaData={generateLocalBusinessSchema('cleaning-solutions')}
      />
      <div className="cleaning-page">
      <header className="cleaning-header" aria-label={t('cleaningPage.headerAriaLabel')}>
        <Link className="cleaning-brand" to="/cleaning-solutions" aria-label={t('cleaningPage.brandAriaLabel')}>
          <img
            src="/images/izex_cleaning_logo_principal.png"
            alt={t('cleaningPage.brandAriaLabel')}
            className="cleaning-brand-logo"
            width="210"
            height="62"
          />
        </Link>

        <button
          className="cleaning-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="cleaning-navigation"
          aria-label={t('homePage.menuAriaLabel')}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="cleaning-header-controls">
          <nav
            id="cleaning-navigation"
            className={`cleaning-nav ${isMenuOpen ? 'open' : ''}`}
            aria-label={t('cleaningPage.navAriaLabel')}
          >
            <Link to="/" onClick={closeMenu}>{t('common.home')}</Link>
            <Link to="/furniture-assembly" onClick={closeMenu}>{t('common.furnitureAssembly')}</Link>
            <Link className="active" to="/cleaning-solutions" aria-current="page" onClick={closeMenu}>
              {t('common.cleaningSolutions')}
            </Link>
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

      <section id="cleaning-home" className="cleaning-hero" aria-label={t('cleaningPage.heroAriaLabel')}>
        <div className="cleaning-overlay">
          <div className="cleaning-content">
            <h1>{t('cleaningPage.heroTitle')}</h1>
            <h2>{t('cleaningPage.heroSubtitle')}</h2>
            <p>{t('cleaningPage.heroDescription')}</p>

            <ul className="cleaning-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a className="cleaning-cta" href="#contato">
              {t('cleaningPage.heroCta')}
            </a>
          </div>
        </div>
      </section>

      <CleaningServices />

      <TargetAudienceCleaning />

      <HowCleaningWorks />

      <WhyChooseCleaning />

      <CleaningCTA />

      <CleaningFooter />
      </div>
    </>
  )
}

export default IzexCleaningHero
