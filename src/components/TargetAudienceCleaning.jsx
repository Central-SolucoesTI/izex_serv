import { Building2, Home, Hotel } from 'lucide-react'
import './TargetAudienceCleaning.css'
import { useLanguage } from '../i18n/LanguageContext'

const imageComposition = {
  primary: '/images/hero_cleaning.png',
  secondary: '/images/bg_3.png',
}

function TargetAudienceCleaning() {
  const { t } = useLanguage()
  const translatedItems = t('targetAudienceCleaning.items', [])
  const itemList = Array.isArray(translatedItems) ? translatedItems : []

  const audienceItems = [
    {
      icon: Home,
      title: itemList[0]?.title || '',
      description: itemList[0]?.description || '',
    },
    {
      icon: Building2,
      title: itemList[1]?.title || '',
      description: itemList[1]?.description || '',
    },
    {
      icon: Hotel,
      title: itemList[2]?.title || '',
      description: itemList[2]?.description || '',
    },
  ]

  return (
    <section className="target-audience-cleaning" aria-label={t('targetAudienceCleaning.ariaLabel')}>
      <div className="target-audience-cleaning-inner">
        <div className="target-audience-cleaning-media">
          <img
            className="target-audience-cleaning-image target-audience-cleaning-image-primary"
            src={imageComposition.primary}
            alt={t('targetAudienceCleaning.primaryImageAlt')}
            loading="lazy"
          />
          <img
            className="target-audience-cleaning-image target-audience-cleaning-image-secondary"
            src={imageComposition.secondary}
            alt={t('targetAudienceCleaning.secondaryImageAlt')}
            loading="lazy"
          />
        </div>

        <div className="target-audience-cleaning-content">
          <p className="target-audience-cleaning-label">{t('targetAudienceCleaning.label')}</p>
          <h2 className="target-audience-cleaning-title">{t('targetAudienceCleaning.title')}</h2>

          <div className="target-audience-cleaning-list">
            {audienceItems.map((item) => {
              const IconComponent = item.icon

              return (
                <article key={item.title} className="target-audience-cleaning-item">
                  <div className="target-audience-cleaning-icon">
                    <IconComponent size={28} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="target-audience-cleaning-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetAudienceCleaning