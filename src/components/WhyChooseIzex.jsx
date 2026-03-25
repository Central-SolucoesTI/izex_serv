import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './WhyChooseIzex.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function WhyChooseIzex() {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useLanguage()
  const translatedItems = t('whyChoose.items', [])
  const itemList = Array.isArray(translatedItems) ? translatedItems : []
  const faqItems = itemList.map((item, index) => ({
    id: index + 1,
    ...item,
  }))

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left Column - Video */}
        <div className="why-choose-media-column">
          <video
            className="why-choose-video"
            autoPlay
            muted
            loop
            poster="/images/why-choose.jpg"
            aria-label={t('whyChoose.videoAriaLabel')}
          >
            <source src="/images/faq_forniture_video.mp4" type="video/mp4" />
            {t('whyChoose.videoUnsupported')}
          </video>
        </div>

        {/* Right Column - Content */}
        <div className="why-choose-content-column">
          <div className="why-choose-header">
            <span className="why-choose-label">{t('whyChoose.label')}</span>
            <h2 className="why-choose-title">{t('whyChoose.title')}</h2>
          </div>

          {/* Accordion */}
          <div className="faq-accordion">
            {faqItems.map((item, index) => (
              <div key={item.id} className="faq-item">
                <button
                  className={`faq-trigger ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-title">{item.title}</span>
                  <ChevronDown
                    className="faq-icon"
                    size={20}
                    aria-hidden="true"
                  />
                </button>

                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                  <div className="faq-text">{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <p className="why-choose-footer">{t('whyChoose.footerText')}</p>

          {/* CTA Button */}
          <div className="why-choose-cta">
            <button className="why-choose-button">{t('whyChoose.cta')}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
