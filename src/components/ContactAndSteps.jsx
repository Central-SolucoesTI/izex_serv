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

  const makeLink = (text, idx) => {
    if (!text) return null
    const normalized = String(text).trim()
    const lower = normalized.toLowerCase()

    // If the label is 'whatsapp', link to the phone number found in channels
    if (lower === 'whatsapp') {
      const allDigits = channels.map((c) => String(c).replace(/\D/g, '')).filter(Boolean)
      const phoneWithCountry = allDigits.find((d) => d.length >= 11)
      const digits = phoneWithCountry || allDigits[0] || '19788335051'
      const msg = 'Hi%21+I+would+like+to+request+a+quote.'
      const href = `https://api.whatsapp.com/send/?phone=${digits}&text=${msg}&type=phone_number&app_absent=0`
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      )
    }

    // email
    if (text.includes('@')) {
      return <a href={`mailto:${text}`}>{text}</a>
    }

    // digits only (for whatsapp when placed in index 1)
    const digitsOnly = String(text).replace(/\D/g, '')
    if (idx === 1) {
      if (!digitsOnly) return <span>{text}</span>
      return (
        <a href={`https://wa.me/${digitsOnly}`} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      )
    }

    // phone (tel:) - keep + if present
    const telNumber = text.replace(/[^+\d]/g, '')
    if (!telNumber) return <span>{text}</span>
    return <a href={`tel:${telNumber}`}>{text}</a>
  }

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
                  <li key={`${channel}-${index}`}>
                    <Icon size={18} aria-hidden="true" />
                    {makeLink(channel, index)}
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