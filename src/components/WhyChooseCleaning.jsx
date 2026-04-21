import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './WhyChooseCleaning.css'
import { useLanguage } from '../i18n/LanguageContext'

function WhyChooseCleaning() {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useLanguage()
  const translatedItems = t('whyChooseCleaning.items', [])
  const faqItems = Array.isArray(translatedItems)
    ? translatedItems.map((item, index) => ({
        id: index + 1,
        ...item,
      }))
    : []

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="why-choose-cleaning" aria-label={t('whyChooseCleaning.ariaLabel')}>
      <div className="why-choose-cleaning-inner">
        <div className="why-choose-cleaning-media">
          <img
            src="/images/FAQ_cle.png"
            alt={t('whyChooseCleaning.imageAlt')}
            className="why-choose-cleaning-image"
            loading="lazy"
          />
        </div>

        <div className="why-choose-cleaning-content">
          <div className="why-choose-cleaning-header">
            <span className="why-choose-cleaning-label">{t('whyChooseCleaning.label')}</span>
            <h2 className="why-choose-cleaning-title">{t('whyChooseCleaning.title')}</h2>
          </div>

          <div className="why-choose-cleaning-accordion">
            {faqItems.map((item, index) => (
              <div key={item.id} className="why-choose-cleaning-item">
                <button
                  type="button"
                  className={`why-choose-cleaning-trigger ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="why-choose-cleaning-icon" size={20} aria-hidden="true" />
                </button>

                <div className={`why-choose-cleaning-panel ${openIndex === index ? 'open' : ''}`}>
                  <div className="why-choose-cleaning-answer">{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="why-choose-cleaning-footer">{t('whyChooseCleaning.footerText')}</p>

          <div className="why-choose-cleaning-cta-wrap">
            <a
              className="why-choose-cleaning-cta"
              href="https://api.whatsapp.com/send/?phone=19788335051&text=Ola%21+Gostaria+de+solicitar+um+orcamento.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer noopener"
            >
              {t('whyChooseCleaning.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseCleaning