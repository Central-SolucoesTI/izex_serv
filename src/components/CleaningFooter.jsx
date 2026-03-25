import { Camera, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CleaningFooter.css'
import { useLanguage } from '../i18n/LanguageContext'

function CleaningFooter() {
  const { t } = useLanguage()

  return (
    <footer id="contato" className="cleaning-footer" aria-label={t('cleaningFooter.ariaLabel')}>
      <section className="cleaning-footer-main" aria-label={t('cleaningFooter.mainAriaLabel')}>
        <div className="cleaning-footer-top">
          <div className="cleaning-footer-left">
            <h3>{t('cleaningFooter.brand')}</h3>

            <div className="cleaning-footer-block">
              <h4>{t('cleaningFooter.addressTitle')}</h4>
              <p>{t('cleaningFooter.addressValue')}</p>
            </div>

            <div className="cleaning-footer-block">
              <h4>{t('cleaningFooter.contactTitle')}</h4>
              <p>{t('cleaningFooter.contactValue')}</p>
            </div>

            <div className="cleaning-footer-social" aria-label={t('cleaningFooter.socialAriaLabel')}>
              <a href="#" aria-label="Instagram">
                <Camera size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Facebook">
                <Users size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="cleaning-footer-nav" aria-label={t('cleaningFooter.navAriaLabel')}>
            <Link to="/">{t('common.home')}</Link>
            <Link to="/furniture-assembly">{t('common.furnitureAssembly')}</Link>
            <Link to="/cleaning-solutions">{t('common.cleaningSolutions')}</Link>
            <Link to="/privacy-policy">{t('common.privacyPolicy')}</Link>
            <a href="#contato">{t('common.contact')}</a>
          </nav>
        </div>

        <div className="cleaning-footer-divider" aria-hidden="true"></div>

        <div className="cleaning-footer-bottom">
          <p>{t('cleaningFooter.copyright')} - {t('common.developedBy')}</p>
          <Link to="/privacy-policy">{t('common.privacyPolicy')}</Link>
        </div>
      </section>
    </footer>
  )
}

export default CleaningFooter