import { CalendarClock, MessageCircleMore, Sofa, Sparkles } from 'lucide-react'
import './HowCleaningWorks.css'
import { useLanguage } from '../i18n/LanguageContext'

const stepIcons = [MessageCircleMore, Sofa, CalendarClock, Sparkles]

function HowCleaningWorks() {
  const { t } = useLanguage()
  const translatedSteps = t('howCleaningWorks.steps', [])
  const steps = Array.isArray(translatedSteps)
    ? translatedSteps.map((step, index) => ({
        ...step,
        icon: stepIcons[index] || Sparkles,
      }))
    : []

  return (
    <section className="how-cleaning-works" aria-label={t('howCleaningWorks.ariaLabel')}>
      <div className="how-cleaning-works-inner">
        <div className="how-cleaning-works-header">
          <p className="how-cleaning-works-label">{t('howCleaningWorks.label')}</p>
          <h2 className="how-cleaning-works-title">{t('howCleaningWorks.title')}</h2>
        </div>

        <div className="how-cleaning-works-grid">
          {steps.map((step) => {
            const IconComponent = step.icon

            return (
              <article key={step.title} className="how-cleaning-works-item">
                <div className="how-cleaning-works-icon">
                  <IconComponent size={54} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            )
          })}
        </div>

        <div className="how-cleaning-works-cta-wrap">
          <a className="how-cleaning-works-cta" href="#contato">
            {t('howCleaningWorks.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowCleaningWorks