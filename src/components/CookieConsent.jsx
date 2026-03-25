import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Settings } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './CookieConsent.css'

export default function CookieConsent() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Verificar se já há preferência salva
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted))
    
    // Inicializar Google Analytics e outros scripts
    initializeAnalytics()
    
    setIsVisible(false)
  }

  const handleRejectNonEssential = () => {
    const minimalPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookiePreferences', JSON.stringify(minimalPreferences))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const allPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences))
    
    if (preferences.analytics) {
      initializeAnalytics()
    }
    
    setShowSettings(false)
    setIsVisible(false)
  }

  const initializeAnalytics = () => {
    // Aqui você pode inicializar Google Analytics ou outro serviço
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-card">
        {!showSettings ? (
          <>
            <div className="cookie-header">
              <h3>{t('cookieConsent.title')}</h3>
              <button
                className="cookie-close"
                onClick={handleRejectNonEssential}
                aria-label={t('cookieConsent.closeAriaLabel')}
              >
                <X size={20} />
              </button>
            </div>

            <p className="cookie-description">{t('cookieConsent.description')}</p>

            <div className="cookie-types">
              <div className="cookie-type">
                <input
                  type="checkbox"
                  id="essential"
                  checked={true}
                  disabled
                  aria-label={t('cookieConsent.essentialLabel')}
                />
                <label htmlFor="essential">
                  <strong>{t('cookieConsent.essentialLabel')}</strong>
                  <span>{t('cookieConsent.essentialDescription')}</span>
                </label>
              </div>

              <div className="cookie-type">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  aria-label={t('cookieConsent.analyticsLabel')}
                />
                <label htmlFor="analytics">
                  <strong>{t('cookieConsent.analyticsLabel')}</strong>
                  <span>{t('cookieConsent.analyticsDescription')}</span>
                </label>
              </div>

              <div className="cookie-type">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  aria-label={t('cookieConsent.marketingLabel')}
                />
                <label htmlFor="marketing">
                  <strong>{t('cookieConsent.marketingLabel')}</strong>
                  <span>{t('cookieConsent.marketingDescription')}</span>
                </label>
              </div>
            </div>

            <div className="cookie-actions">
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowSettings(true)}
              >
                <Settings size={16} aria-hidden="true" />
                {t('cookieConsent.managePreferences')}
              </button>
              <button
                className="cookie-btn cookie-btn-secondary-outline"
                onClick={handleRejectNonEssential}
              >
                {t('cookieConsent.rejectNonEssential')}
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={handleAcceptAll}>
                {t('cookieConsent.acceptAll')}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-header">
              <h3>{t('cookieConsent.preferences')}</h3>
              <button
                className="cookie-close"
                onClick={() => setShowSettings(false)}
                aria-label={t('cookieConsent.closeAriaLabel')}
              >
                <X size={20} />
              </button>
            </div>

            <p className="cookie-description">{t('cookieConsent.preferencesDescription')}</p>

            <div className="cookie-types">
              <div className="cookie-type">
                <input
                  type="checkbox"
                  id="settings-essential"
                  checked={true}
                  disabled
                  aria-label={t('cookieConsent.essentialLabel')}
                />
                <label htmlFor="settings-essential">
                  <strong>{t('cookieConsent.essentialLabel')}</strong>
                  <span>{t('cookieConsent.essentialDescription')}</span>
                </label>
              </div>

              <div className="cookie-type">
                <input
                  type="checkbox"
                  id="settings-analytics"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  aria-label={t('cookieConsent.analyticsLabel')}
                />
                <label htmlFor="settings-analytics">
                  <strong>{t('cookieConsent.analyticsLabel')}</strong>
                  <span>{t('cookieConsent.analyticsDescription')}</span>
                </label>
              </div>

              <div className="cookie-type">
                <input
                  type="checkbox"
                  id="settings-marketing"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  aria-label={t('cookieConsent.marketingLabel')}
                />
                <label htmlFor="settings-marketing">
                  <strong>{t('cookieConsent.marketingLabel')}</strong>
                  <span>{t('cookieConsent.marketingDescription')}</span>
                </label>
              </div>
            </div>

            <div className="cookie-actions">
              <button
                className="cookie-btn cookie-btn-secondary-outline"
                onClick={() => setShowSettings(false)}
              >
                {t('cookieConsent.cancel')}
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={handleSavePreferences}>
                {t('cookieConsent.savePreferences')}
              </button>
            </div>
          </>
        )}

        <p className="cookie-policy">
          {t('cookieConsent.policyText')}{' '}
          <Link to="/privacy-policy">{t('cookieConsent.privacyPolicy')}</Link>
        </p>
      </div>
    </div>
  )
}
