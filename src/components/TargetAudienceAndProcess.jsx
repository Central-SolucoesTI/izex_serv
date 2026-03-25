import { Home, Building2, Key, MessageCircle, Calendar, Wrench, CheckCircle2 } from 'lucide-react';
import './TargetAudienceAndProcess.css';
import { useLanguage } from '../i18n/LanguageContext';

export default function TargetAudienceAndProcess() {
  const { t } = useLanguage();

  const translatedAudiences = t('targetAudience.audiences', []);
  const audienceContent = Array.isArray(translatedAudiences) ? translatedAudiences : [];

  const audiences = [
    {
      id: 1,
      icon: Home,
      title: audienceContent[0]?.title || '',
      description: audienceContent[0]?.description || ''
    },
    {
      id: 2,
      icon: Building2,
      title: audienceContent[1]?.title || '',
      description: audienceContent[1]?.description || ''
    },
    {
      id: 3,
      icon: Key,
      title: audienceContent[2]?.title || '',
      description: audienceContent[2]?.description || ''
    }
  ];

  const translatedSteps = t('targetAudience.steps', []);
  const stepContent = Array.isArray(translatedSteps) ? translatedSteps : [];

  const steps = [
    {
      id: 1,
      icon: MessageCircle,
      title: stepContent[0]?.title || '',
      description: stepContent[0]?.description || ''
    },
    {
      id: 2,
      icon: Calendar,
      title: stepContent[1]?.title || '',
      description: stepContent[1]?.description || ''
    },
    {
      id: 3,
      icon: Wrench,
      title: stepContent[2]?.title || '',
      description: stepContent[2]?.description || ''
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: stepContent[3]?.title || '',
      description: stepContent[3]?.description || ''
    }
  ];

  return (
    <>
      {/* Section 1: Target Audience - White Background */}
      <section className="target-audience-section">
        <div className="target-audience-header">
          <span className="section-label">{t('targetAudience.sectionLabel')}</span>
          <h2 className="section-title">{t('targetAudience.title')}</h2>
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => {
            const IconComponent = audience.icon;
            return (
              <div key={audience.id} className="audience-card">
                <div className="audience-icon">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className="audience-title">{audience.title}</h3>
                <p className="audience-description">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Process - Dark Background with Full Height */}
      <section className="process-section">
        {/* Decorative shapes */}
        <div className="process-decoration process-decoration-top-right"></div>
        <div className="process-decoration process-decoration-bottom-left"></div>

        <div className="process-container">
          <div className="process-header">
            <span className="section-label">{t('targetAudience.sectionLabel')}</span>
            <h2 className="section-title">{t('targetAudience.processTitle')}</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="step-card">
                  <div className="step-icon">
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  {index < steps.length - 1 && <div className="step-divider"></div>}
                </div>
              );
            })}
          </div>

          <div className="process-cta">
            <button className="cta-button">{t('targetAudience.cta')}</button>
          </div>
        </div>
      </section>
    </>
  );
}
