import { CheckCircle2, Wrench } from 'lucide-react'
import './ServicesSection.css'

const services = [
  {
    id: 'furniture-assembly',
    brand: 'Izex Furniture Assembly',
    title: 'Izex Furniture Assembly: Montagem de móveis profissional',
    description:
      'Seja para sua casa, escritório ou espaço comercial, a Izex Furniture Assembly é a escolha certa para quem busca qualidade e praticidade na montagem e instalação de móveis. Nossa equipe altamente capacitada trabalha com precisão e agilidade, garantindo um serviço impecável.',
    items: [
      'Montagem e desmontagem de móveis residenciais e comerciais',
      'Instalação de prateleiras, painéis e suportes de TV',
      'Ajustes e reparos em móveis já montados',
      'Instalação de cortinas, persianas e acessórios',
      'Atendimento rápido e agendado conforme sua necessidade',
    ],
    footer: 'Atendemos toda a região com rapidez e eficiência!',
    image: '/images/port_.png',
    fillColor: '#d9782d',
  },
  {
    id: 'cleaning-solutions',
    brand: 'Izex Cleaning Solutions',
    title: 'Izex Cleaning Solutions: cuidando do seu espaço',
    description:
      'Além da excelência na montagem de móveis, a Izex Services LLC também conta com a Izex Cleaning Solutions, oferecendo serviços de limpeza profissional e conservação para ambientes residenciais e comerciais. Com profissionais treinados e produtos de qualidade, garantimos um serviço eficiente para deixar seu espaço mais limpo e bem cuidado.',
    items: [],
    image:
      '/images/services_clean.png',
    fillColor: '#2266a6',
  },
]

function ServicesSection() {
  return (
    <section className="services-section" aria-label="Sub-empresas da IZEX Services LLC">
      <div className="services-inner">
        {services.map((service, index) => {
          const isReverse = index % 2 === 0

          return (
            <article
              key={service.id}
              id={service.id}
              className={`service-row ${isReverse ? 'reverse' : ''}`}
            >
              <div className="service-content">
                <p className="service-brand">{service.brand}</p>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>

                {service.items.length > 0 && (
                  <ul className="service-items">
                    {service.items.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.footer && <p className="service-footer">{service.footer}</p>}

                <div className="service-actions">
                  <a
                    href="#"
                    className="btn btn-filled"
                    style={{ '--service-color': service.fillColor }}
                  >
                    <Wrench size={16} aria-hidden="true" />
                    <span>Saber mais</span>
                  </a>
                  <a href="#contato" className="btn btn-outline">
                    Entrar em contato
                  </a>
                </div>
              </div>

              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
