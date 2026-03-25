import { Camera, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import './FurnitureFooter.css'
import { useLanguage } from '../i18n/LanguageContext'

function FurnitureFooter() {
  const { t } = useLanguage()

  return (
    <footer id="contato" className="furniture-footer" aria-label={t('furnitureFooter.footerAriaLabel')}>
      <section className="furniture-footer-cta" aria-label={t('furnitureFooter.ctaAriaLabel')}>
        <div className="furniture-footer-cta-overlay" aria-hidden="true"></div>
        <div className="furniture-footer-cta-box">
          <h2>{t('furnitureFooter.ctaTitle')}</h2>
          <p>{t('furnitureFooter.ctaSubtitle')}</p>
          <a href="https://wa.me/19787277471" target="_blank" rel="noreferrer">
            {t('common.whatsappCta')}
          </a>
        </div>
      </section>

      <section className="furniture-footer-main" aria-label={t('furnitureFooter.infoAriaLabel')}>
        <div className="furniture-footer-top">
          <div className="furniture-footer-left">
            <h3>{t('furnitureFooter.brand')}</h3>
            <p>{t('furnitureFooter.address')}</p>
            <p>{t('furnitureFooter.phone')}</p>
            <div className="furniture-footer-social" aria-label={t('furnitureFooter.socialAriaLabel')}>
              <a href="#" aria-label="Instagram">
                <Camera size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Facebook">
                <Users size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="furniture-footer-nav" aria-label={t('furnitureFooter.navAriaLabel')}>
            <Link to="/">{t('common.home')}</Link>
            <Link to="/furniture-assembly">{t('common.furnitureAssembly')}</Link>
            <Link to="/cleaning-solutions">{t('common.cleaningSolutions')}</Link>
            <a href="#contato">{t('common.contact')}</a>
          </nav>
        </div>

        <div className="furniture-footer-divider" aria-hidden="true"></div>

        <div className="furniture-footer-bottom">
          <p>{t('furnitureFooter.copyright')} - {t('common.developedBy')}</p>
          <a href="#">{t('common.privacyPolicy')}</a>
        </div>
      </section>
    </footer>
  )
}

export default FurnitureFooter
