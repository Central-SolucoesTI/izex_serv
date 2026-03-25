import './FurnitureServices.css'
import { useLanguage } from '../i18n/LanguageContext'

const cardImages = ['/images/port (19).png', '/images/port (3).png']

const galleryImageSources = [
  '/images/port_.png',
  '/images/port.png',
  '/images/port (2).png',
  '/images/port (3).png',
  '/images/port (5).png',
  '/images/port (9).png',
  '/images/port (10).png',
  '/images/port (17).png',
  '/images/port (19).png',
  '/images/port (20).png',
  '/images/port (26).png',
  '/images/port (27).png',
  '/images/port (29).png',
  '/images/port (43).png',
]

function FurnitureServices() {
  const { t } = useLanguage()
  const translatedCards = t('furnitureServices.serviceCards', [])
  const serviceCards = Array.isArray(translatedCards)
    ? translatedCards.map((card, index) => ({
        ...card,
        image: cardImages[index] || cardImages[0],
      }))
    : []

  const galleryImages = galleryImageSources.map((src, index) => ({
    src,
    alt: `${t('common.projectImageAlt')} ${index + 1}`,
  }))
  const topRowImages = galleryImages.slice(0, Math.ceil(galleryImages.length / 2))
  const bottomRowImages = galleryImages.slice(Math.ceil(galleryImages.length / 2))

  return (
    <section className="furniture-services" aria-label={t('furnitureServices.ariaLabel')}>
      <div className="furniture-services-inner">
        <p className="furniture-services-label">{t('furnitureServices.label')}</p>
        <h2 className="furniture-services-title">{t('furnitureServices.title')}</h2>

        <div className="furniture-service-cards">
          {serviceCards.map((card) => (
            <article key={card.title} className="furniture-service-card">
              <div className="furniture-service-text">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <small>{card.footer}</small>
              </div>
              <img src={card.image} alt={card.title} loading="lazy" />
            </article>
          ))}
        </div>

        <div className="furniture-gallery" aria-label={t('furnitureServices.galleryAriaLabel')}>
          <div className="furniture-gallery-row row-left">
            {[...topRowImages, ...topRowImages].map((image, index) => (
              <figure key={`${image.src}-top-${index}`} className="furniture-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="furniture-gallery-row row-right">
            {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
              <figure key={`${image.src}-bottom-${index}`} className="furniture-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FurnitureServices
