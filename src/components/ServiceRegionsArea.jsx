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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.260447699234!2d-81.24017892579045!3d28.41139706468652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e761ed9ff300ff%3A0x1c4a479252e27f9a!2s10200%20Falcon%20Moss%20Ln%2C%20Orlando%2C%20FL%2032832%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1774469959575!5m2!1spt-BR!2sbr"
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