import { MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const { t } = useLanguage()

  const phoneNumber = '978 833 5051'
  const whatsappNumber = '19788335051'
  const whatsappMessage = t('floatingButtons.whatsappMessage')

  const handleWhatsApp = () => {
    const url = `https://api.whatsapp.com/send/?phone=19788335051&text=Ola%21+Gostaria+de+solicitar+um+orcamento.&type=phone_number&app_absent=0`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const handleSMS = () => {
    window.location.href = `sms:${phoneNumber}`
  }

  return (
    <div className="floating-buttons" aria-label={t('floatingButtons.ariaLabel')}>
      <button
        className="floating-btn whatsapp-btn"
        onClick={handleWhatsApp}
        title={t('floatingButtons.whatsappTitle')}
        aria-label={t('floatingButtons.whatsappAriaLabel')}
      >
        <MessageCircle size={24} />
        <span className="btn-label">{t('floatingButtons.whatsappLabel')}</span>
      </button>

      <button
        className="floating-btn sms-btn"
        onClick={handleSMS}
        title={t('floatingButtons.smsTitle')}
        aria-label={t('floatingButtons.smsAriaLabel')}
      >
        <Phone size={24} />
        <span className="btn-label">{t('floatingButtons.smsLabel')}</span>
      </button>
    </div>
  )
}
