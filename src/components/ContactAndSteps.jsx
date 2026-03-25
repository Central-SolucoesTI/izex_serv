import { Mail, MessageCircle, Phone } from 'lucide-react'
import './ContactAndSteps.css'
import { useLanguage } from '../i18n/LanguageContext'

function ContactAndSteps() {
  const { t } = useLanguage()
  const translatedChannels = t('contactAndSteps.channels', [])
  const channels = Array.isArray(translatedChannels) ? translatedChannels : []
  const translatedSteps = t('contactAndSteps.steps', [])
  const steps = Array.isArray(translatedSteps) ? translatedSteps : []

  const channelIcons = [Phone, MessageCircle, Mail]

  return (
    <section className="contact-and-steps" aria-label={t('contactAndSteps.ariaLabel')}>
      <div className="contact-and-steps-inner">
        <header className="contact-and-steps-header">
          <h2>{t('contactAndSteps.sectionTitle')}</h2>
        </header>

        <div className="contact-and-steps-grid">
          <div className="contact-info-column">
            <h3>{t('contactAndSteps.contactTitle')}</h3>
            <p>{t('contactAndSteps.contactDescription')}</p>

            <ul className="contact-channels">
              {channels.map((channel, index) => {
                const Icon = channelIcons[index] || Phone
                return (
                  <li key={channel}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{channel}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="steps-column">
            <h3>{t('contactAndSteps.stepsTitle')}</h3>

            <div className="step-cards">
              {steps.map((step) => (
                <article key={step.title} className="step-card-gradient">
                  <div className="step-card-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactAndSteps