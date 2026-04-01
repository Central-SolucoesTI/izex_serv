import './ServiceRegionsArea.css'
import { useLanguage } from '../i18n/LanguageContext'

function ServiceRegionsArea() {
  const { t } = useLanguage()
  const translatedCities = t('serviceRegionsArea.cities', [])
  const cities = Array.isArray(translatedCities) ? translatedCities : []

  return (
    <section className="service-regions-area" aria-label={t('serviceRegionsArea.ariaLabel')}>
      <div className="service-regions-inner">
        <div className="service-regions-text">
          <h2>{t('serviceRegionsArea.title')}</h2>
          <p className="service-regions-description">{t('serviceRegionsArea.description')}</p>
          <p className="service-regions-instruction">{t('serviceRegionsArea.instruction')}</p>

          <ul className="service-regions-list">
            {cities.map((city, index) => (
              <li key={city} className={index === 0 ? 'highlight' : ''}>
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-regions-map-wrap">
          <iframe
            title={t('serviceRegionsArea.mapTitle')}
            src="https://www.google.com/maps?q=2691+Nottel+dr+Saint+Cloud+Fl+34772&output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ServiceRegionsArea