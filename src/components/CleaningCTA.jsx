import './CleaningCTA.css'
import { useLanguage } from '../i18n/LanguageContext'

function CleaningCTA() {
  const { t } = useLanguage()

  return (
    <section className="cleaning-cta-section" aria-label={t('cleaningCTA.ariaLabel')}>
      <div className="cleaning-cta-inner">
        <div className="cleaning-cta-content">
          <h2>{t('cleaningCTA.title')}</h2>
          <p>{t('cleaningCTA.subtitle')}</p>
          <a className="cleaning-cta-button" href="https://wa.me/19788335051" target="_blank" rel="noreferrer">
            {t('cleaningCTA.button')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CleaningCTA