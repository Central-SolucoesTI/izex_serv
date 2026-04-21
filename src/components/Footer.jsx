import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'
import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contato" className="site-footer" aria-label={t('globalFooter.ariaLabel')}>
      <section className="footer-cta" aria-label={t('globalFooter.ctaAriaLabel')}>
        <div className="footer-cta-overlay" aria-hidden="true"></div>
        <div className="footer-cta-content">
          <h2>{t('globalFooter.ctaTitle')}</h2>
          <p>{t('globalFooter.ctaSubtitle')}</p>
          <a className="cta-button" href="https://api.whatsapp.com/send/?phone=19788335051&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
            {t('common.whatsappCta')}
          </a>
        </div>
      </section>

      <section className="footer-main" aria-label={t('globalFooter.infoAriaLabel')}>
        <div className="footer-top">
          <div className="footer-left">
            <img
              src="/images/izex_logo_white.png"
              alt="IZEX SERVICES LLC"
              className="footer-logo"
              width="180"
              height="90"
            />
            <div className="footer-block">
              <h3>{t('globalFooter.addressTitle')}</h3>
              <p>{t('globalFooter.addressValue')}</p>
            </div>
            <div className="footer-block">
              <h3>{t('globalFooter.contactTitle')}</h3>
              <p>
                <a
                  href="https://api.whatsapp.com/send/?phone=19788335051&text=Hi%21+I+would+like+to+request+a+quote.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t('globalFooter.contactValue')}
                </a>
              </p>
            </div>
            <div className="footer-social" aria-label={t('globalFooter.socialAriaLabel')}>
              <a
                href="https://www.instagram.com/izexservices/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/people/Izex-Services-LLC/61573515443799/#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label={t('globalFooter.navAriaLabel')}>
            <a href="#home">{t('common.home')}</a>
            <Link to="/furniture-assembly">{t('common.furnitureAssembly')}</Link>
            <Link to="/cleaning-solutions">{t('common.cleaningSolutions')}</Link>
            <Link to="/privacy-policy">{t('common.privacyPolicy')}</Link>
            <a href="#contato">{t('common.contact')}</a>
          </nav>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <div className="footer-bottom">
          <p>
            {t('globalFooter.copyright')} -{' '}
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

export default Footer
