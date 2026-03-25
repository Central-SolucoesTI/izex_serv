import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import SEOConfig from './SEOConfig'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <>
      <SEOConfig page="privacy-policy" language={language} />
      <div className="privacy-policy-page">
      <header className="privacy-header" aria-label={t('homePage.navAriaLabel')}>
        <Link to="/" className="privacy-brand" aria-label="IZEX Services LLC">
          <img
            src="/images/izex_logo.png"
            alt="Logo IZEX Services LLC"
            width="82"
            height="82"
          />
        </Link>

        <div className="privacy-header-controls">
          <nav className="privacy-nav" aria-label={t('homePage.navAriaLabel')}>
            <Link to="/">{t('common.home')}</Link>
            <Link to="/furniture-assembly">{t('common.furnitureAssembly')}</Link>
            <Link to="/cleaning-solutions">{t('common.cleaningSolutions')}</Link>
            <Link className="active" to="/privacy-policy" aria-current="page">
              {t('common.privacyPolicy')}
            </Link>
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

      <main className="privacy-content">
        <div className="privacy-container">
          <h1>{t('privacyPolicy.title')}</h1>
          <p className="last-updated">
            {t('privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
          </p>

          <nav className="table-of-contents">
            <h2>{t('privacyPolicy.toc')}</h2>
            <ul>
              <li><a href="#introduction">{t('privacyPolicy.introduction')}</a></li>
              <li><a href="#data-collection">{t('privacyPolicy.dataCollection')}</a></li>
              <li><a href="#data-usage">{t('privacyPolicy.dataUsage')}</a></li>
              <li><a href="#data-sharing">{t('privacyPolicy.dataSharing')}</a></li>
              <li><a href="#user-rights">{t('privacyPolicy.userRights')}</a></li>
              <li><a href="#cookies">{t('privacyPolicy.cookies')}</a></li>
              <li><a href="#security">{t('privacyPolicy.security')}</a></li>
              <li><a href="#retention">{t('privacyPolicy.retention')}</a></li>
              <li><a href="#minors">{t('privacyPolicy.minors')}</a></li>
              <li><a href="#changes">{t('privacyPolicy.changes')}</a></li>
              <li><a href="#contact">{t('privacyPolicy.contact')}</a></li>
            </ul>
          </nav>

          <section id="introduction">
            <h2>{t('privacyPolicy.introduction')}</h2>
            <p>{t('privacyPolicy.introductionText')}</p>
          </section>

          <section id="data-collection">
            <h2>{t('privacyPolicy.dataCollection')}</h2>
            <p>{t('privacyPolicy.dataCollectionIntro')}</p>
            <h3>{t('privacyPolicy.personalData')}</h3>
            <ul>
              <li>{t('privacyPolicy.dataItem1')}</li>
              <li>{t('privacyPolicy.dataItem2')}</li>
              <li>{t('privacyPolicy.dataItem3')}</li>
              <li>{t('privacyPolicy.dataItem4')}</li>
              <li>{t('privacyPolicy.dataItem5')}</li>
            </ul>
            <h3>{t('privacyPolicy.deviceData')}</h3>
            <p>{t('privacyPolicy.deviceDataText')}</p>
          </section>

          <section id="data-usage">
            <h2>{t('privacyPolicy.dataUsage')}</h2>
            <p>{t('privacyPolicy.dataUsageIntro')}</p>
            <ul>
              <li>{t('privacyPolicy.usageItem1')}</li>
              <li>{t('privacyPolicy.usageItem2')}</li>
              <li>{t('privacyPolicy.usageItem3')}</li>
              <li>{t('privacyPolicy.usageItem4')}</li>
              <li>{t('privacyPolicy.usageItem5')}</li>
              <li>{t('privacyPolicy.usageItem6')}</li>
            </ul>
          </section>

          <section id="data-sharing">
            <h2>{t('privacyPolicy.dataSharing')}</h2>
            <p>{t('privacyPolicy.dataSharingText')}</p>
            <h3>{t('privacyPolicy.thirdParties')}</h3>
            <p>{t('privacyPolicy.thirdPartiesText')}</p>
          </section>

          <section id="user-rights">
            <h2>{t('privacyPolicy.userRights')}</h2>
            <p>{t('privacyPolicy.userRightsIntro')}</p>
            <ul>
              <li>
                <strong>{t('privacyPolicy.rightAccess')}</strong>: {t('privacyPolicy.rightAccessText')}
              </li>
              <li>
                <strong>{t('privacyPolicy.rightRectification')}</strong>: {t('privacyPolicy.rightRectificationText')}
              </li>
              <li>
                <strong>{t('privacyPolicy.rightErasure')}</strong>: {t('privacyPolicy.rightErasureText')}
              </li>
              <li>
                <strong>{t('privacyPolicy.rightPortability')}</strong>: {t('privacyPolicy.rightPortabilityText')}
              </li>
              <li>
                <strong>{t('privacyPolicy.rightObjection')}</strong>: {t('privacyPolicy.rightObjectionText')}
              </li>
            </ul>
            <p>{t('privacyPolicy.exerciseRights')}</p>
          </section>

          <section id="cookies">
            <h2>{t('privacyPolicy.cookies')}</h2>
            <p>{t('privacyPolicy.cookiesText')}</p>
            <h3>{t('privacyPolicy.cookieTypes')}</h3>
            <ul>
              <li>
                <strong>{t('privacyPolicy.cookiesEssential')}</strong>: {t('privacyPolicy.cookiesEssentialText')}
              </li>
              <li>
                <strong>{t('privacyPolicy.cookiesAnalytical')}</strong>: {t('privacyPolicy.cookiesAnalyticalText')}
              </li>
              <li>
                <strong>{t('privacyPolicy.cookiesMarketing')}</strong>: {t('privacyPolicy.cookiesMarketingText')}
              </li>
            </ul>
          </section>

          <section id="security">
            <h2>{t('privacyPolicy.security')}</h2>
            <p>{t('privacyPolicy.securityText')}</p>
          </section>

          <section id="retention">
            <h2>{t('privacyPolicy.retention')}</h2>
            <p>{t('privacyPolicy.retentionText')}</p>
          </section>

          <section id="minors">
            <h2>{t('privacyPolicy.minors')}</h2>
            <p>{t('privacyPolicy.minorsText')}</p>
          </section>

          <section id="changes">
            <h2>{t('privacyPolicy.changes')}</h2>
            <p>{t('privacyPolicy.changesText')}</p>
          </section>

          <section id="contact">
            <h2>{t('privacyPolicy.contact')}</h2>
            <p>{t('privacyPolicy.contactIntro')}</p>
            <div className="contact-info">
              <p>
                <strong>Izex Services LLC</strong><br />
                {t('privacyPolicy.address')}<br />
                {t('privacyPolicy.phone')}: <a href="tel:+19787277471">(978) 727-7471</a><br />
                {t('privacyPolicy.email')}: <a href="mailto:info@izexservices.com">info@izexservices.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="privacy-footer">
        <p>
          © 2026 Izex Services LLC.{' '}
          <a href="https://www.proversolucoes.com.br" target="_blank" rel="noreferrer">
            {t('common.developedBy')}
          </a>
        </p>
      </footer>
      </div>
    </>
  )
}
