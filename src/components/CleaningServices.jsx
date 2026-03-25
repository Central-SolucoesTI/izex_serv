import './CleaningServices.css'
import { useLanguage } from '../i18n/LanguageContext'

const cardImages = [
  '/images/bg_5.png',
  '/images/bg_3.png',
  '/images/bg_2.png',
  '/images/bg_4.png',
]

function CleaningServices() {
  const { t } = useLanguage()
  const translatedCards = t('cleaningServices.cards', [])

  const cards = Array.isArray(translatedCards)
    ? translatedCards.map((card, index) => ({
        ...card,
        image: cardImages[index] || cardImages[0],
      }))
    : []

  return (
    <section className="cleaning-services" aria-label={t('cleaningServices.ariaLabel')}>
      <div className="cleaning-services-inner">
        <div className="cleaning-services-header">
          <p className="cleaning-services-label">{t('cleaningServices.label')}</p>
          <h2 className="cleaning-services-title">{t('cleaningServices.title')}</h2>
        </div>

        <div className="cleaning-cards-grid">
          {cards.map((card) => (
            <article key={card.title} className="cleaning-service-card">
              <div className="cleaning-service-text">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <img src={card.image} alt={card.title} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CleaningServices
