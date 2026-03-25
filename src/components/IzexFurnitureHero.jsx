import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import './IzexFurnitureHero.css'
import FurnitureServices from './FurnitureServices'
import TargetAudienceAndProcess from './TargetAudienceAndProcess'
import WhyChooseIzex from './WhyChooseIzex'
import FurnitureFooter from './FurnitureFooter'
import { useLanguage } from '../i18n/LanguageContext'

function IzexFurnitureHero() {
  const { language, setLanguage, t } = useLanguage()
  const translatedHighlights = t('furniturePage.highlights', [])
  const highlights = Array.isArray(translatedHighlights) ? translatedHighlights : []

  return (
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

        <div className="furniture-header-controls">
        <nav className="furniture-nav" aria-label={t('furniturePage.navAriaLabel')}>
          <Link to="/">{t('common.home')}</Link>
          <Link className="active" to="/furniture-assembly" aria-current="page">
            {t('common.furnitureAssembly')}
          </Link>
          <a href="/#cleaning-solutions">{t('common.cleaningSolutions')}</a>
          <a href="#contato">{t('common.contact')}</a>
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
  )
}

export default IzexFurnitureHero
