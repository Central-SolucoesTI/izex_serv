import { Home, Building2, Key, MessageCircle, Calendar, Wrench, CheckCircle2 } from 'lucide-react';
import './TargetAudienceAndProcess.css';

export default function TargetAudienceAndProcess() {
  const audiences = [
    {
      id: 1,
      icon: Home,
      title: 'Residências',
      description: 'Se você acabou de comprar móveis novos ou está reformando sua casa, nós cuidamos da montagem para você!'
    },
    {
      id: 2,
      icon: Building2,
      title: 'Empresas e escritórios',
      description: 'Organizamos seu espaço corporativo com eficiência, garantindo que seus móveis sejam instalados corretamente.'
    },
    {
      id: 3,
      icon: Key,
      title: 'Administradora de imóveis',
      description: 'Agilidade e qualidade na montagem de móveis para anfitriões que precisam de um espaço pronto para receber hóspedes.'
    }
  ];

  const steps = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'Entre em contato',
      description: 'Solicite um orçamento pelo WhatsApp ou telefone.'
    },
    {
      id: 2,
      icon: Calendar,
      title: 'Agende o serviço',
      description: 'Escolha a melhor data e horário para sua montagem.'
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Montagem profissional',
      description: 'Nossa equipe chegará no horário marcado e realizará o serviço com excelência.'
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: 'Aproveite seu espaço',
      description: 'Tudo pronto para você desfrutar dos seus móveis com tranquilidade.'
    }
  ];

  return (
    <>
      {/* Section 1: Target Audience - White Background */}
      <section className="target-audience-section">
        <div className="target-audience-header">
          <span className="section-label">Furniture Assembly</span>
          <h2 className="section-title">Para quem é o nosso serviço?</h2>
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
            <span className="section-label">Furniture Assembly</span>
            <h2 className="section-title">Como funciona?</h2>
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
            <button className="cta-button">Agende seu serviço agora</button>
          </div>
        </div>
      </section>
    </>
  );
}
