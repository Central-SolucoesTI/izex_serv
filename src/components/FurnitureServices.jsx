import { useEffect, useState } from 'react'
import './FurnitureServices.css'
import { useLanguage } from '../i18n/LanguageContext'

const portfolioBasePath = '/images/port'

const portfolioImageNames = [
  '10.png',
  '22.png',
  '23.png',
  '24.png',
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  'port.png',
  'port (2).png',
  'port (3).png',
  'port (4).png',
  'port (5).png',
  'port (6).png',
  'port (7).png',
  'port (8).png',
  'port (9).png',
  'port (10).png',
  'port (11).png',
  'port (12).png',
  'port (13).png',
  'port (14).png',
  'port (15).png',
  'port (16).png',
  'port (17).png',
  'port (18).png',
  'port (19).png',
  'port (20).png',
]

const cardImages = [
  `${portfolioBasePath}/port (19).png`,
  `${portfolioBasePath}/port (3).png`,
]

const galleryImageSources = portfolioImageNames.map((imageName) => `${portfolioBasePath}/${imageName}`)

function FurnitureServices() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const handleChange = (event) => setIsMobile(event.matches)

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

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
  const topTrackImages = isMobile ? topRowImages : [...topRowImages, ...topRowImages]
  const bottomTrackImages = [...bottomRowImages, ...bottomRowImages]

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
              <img src={card.image} alt={card.title} loading="lazy" decoding="async" width="150" height="150" />
            </article>
          ))}
        </div>

        <div className="furniture-gallery" aria-label={t('furnitureServices.galleryAriaLabel')}>
          <div className="furniture-gallery-row row-left">
            {topTrackImages.map((image, index) => (
              <figure key={`${image.src}-top-${index}`} className="furniture-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" fetchPriority="low" width="260" height="220" />
              </figure>
            ))}
          </div>

          {!isMobile && <div className="furniture-gallery-row row-right">
            {bottomTrackImages.map((image, index) => (
              <figure key={`${image.src}-bottom-${index}`} className="furniture-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" fetchPriority="low" width="260" height="220" />
              </figure>
            ))}
          </div>}
        </div>
      </div>
    </section>
  )
}

export default FurnitureServices
