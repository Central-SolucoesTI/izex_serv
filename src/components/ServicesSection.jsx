import { CheckCircle2, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import './ServicesSection.css'
import { useLanguage } from '../i18n/LanguageContext'

const serviceAssets = {
  'furniture-assembly': {
    image: '/images/port_.png',
    fillColor: '#d9782d',
    heroId: 'furniture-home',
  },
  'cleaning-solutions': {
    image: '/images/services_clean.png',
    fillColor: '#2266a6',
    heroId: 'cleaning-home',
  },
}

function ServicesSection() {
  const { t } = useLanguage()
  const translatedServices = t('servicesSection.services', [])
  const services = Array.isArray(translatedServices)
    ? translatedServices.map((service) => ({
        ...service,
        ...serviceAssets[service.id],
      }))
    : []

  return (
    <section className="services-section" aria-label={t('servicesSection.ariaLabel')}>
      <div className="services-inner">
        {services.map((service, index) => {
          const isReverse = index % 2 === 0

          return (
            <article
              key={service.id}
              id={service.id}
              className={`service-row ${isReverse ? 'reverse' : ''}`}
            >
              <div className="service-content">
                <p className="service-brand">{service.brand}</p>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>

                {service.items.length > 0 && (
                  <ul className="service-items">
                    {service.items.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.footer && <p className="service-footer">{service.footer}</p>}

                <div className="service-actions">
                  <Link
                    to={`/${service.id}#${service.heroId}`}
                    className="btn btn-filled"
                    style={{ '--service-color': service.fillColor }}
                  >
                    <Wrench size={16} aria-hidden="true" />
                    <span>{t('servicesSection.knowMore')}</span>
                  </Link>
                  <a href="#contato" className="btn btn-outline">
                    {t('servicesSection.contact')}
                  </a>
                </div>
              </div>

              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
