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
          <a href="https://api.whatsapp.com/send/?phone=19788335051&text=Ola%21+Gostaria+de+solicitar+um+orcamento.&type=phone_number&app_absent=0" target="_blank" rel="noreferrer noopener">
            {t('common.whatsappCta')}
          </a>
        </div>
      </section>

      <section className="furniture-footer-main" aria-label={t('furnitureFooter.infoAriaLabel')}>
        <div className="furniture-footer-top">
          <div className="furniture-footer-left">
            <h3>{t('furnitureFooter.brand')}</h3>
            <p>{t('furnitureFooter.address')}</p>
            <p>
              <a
                href="https://api.whatsapp.com/send/?phone=19788335051&text=Ola%21+Gostaria+de+solicitar+um+orcamento.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer noopener"
              >
                {t('furnitureFooter.phone')}
              </a>
            </p>
            <p>
              <a href="mailto:izexservices@gmail.com">{t('furnitureFooter.email')}</a>
            </p>
          </div>

          <nav className="furniture-footer-nav" aria-label={t('furnitureFooter.navAriaLabel')}>
            <Link to="/">{t('common.home')}</Link>
            <Link to="/furniture-assembly">{t('common.furnitureAssembly')}</Link>
            <Link to="/cleaning-solutions">{t('common.cleaningSolutions')}</Link>
            <Link to="/privacy-policy">{t('common.privacyPolicy')}</Link>
            <a href="#contato">{t('common.contact')}</a>
          </nav>
        </div>

        <div className="furniture-footer-divider" aria-hidden="true"></div>

        <div className="furniture-footer-bottom">
          <p>
            {t('furnitureFooter.copyright')} -{' '}
            <a href="https://www.proversolucoes.com.br" target="_blank" rel="noreferrer">
              {t('common.developedBy')}
            </a>
          </p>
          <Link to="/privacy-policy">{t('common.privacyPolicy')}</Link>
        </div>
      </section>
    </footer>
  )
}

export default FurnitureFooter
