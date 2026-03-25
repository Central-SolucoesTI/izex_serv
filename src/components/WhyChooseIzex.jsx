import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './WhyChooseIzex.css'

export default function WhyChooseIzex() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      id: 1,
      title: 'Profissionais treinados',
      content: 'Nossa equipe é composta por montadores experientes e treinados diretamente pelos fabricantes ou através de rigorosos programas internos. Isso garante que cada móvel seja montado com precisão técnica, seguindo todas as especificações de segurança e design, seja um item de linha ou de alto padrão.'
    },
    {
      id: 2,
      title: 'Rapidez e eficiência',
      content: 'Entendemos que seu tempo é precioso. Nossos profissionais trabalham com agilidade e organização para finalizar a montagem no menor tempo possível, sem comprometer a qualidade. Chegamos no horário agendado e deixamos o ambiente limpo e pronto para uso imediato.'
    },
    {
      id: 3,
      title: 'Atendimento personalizado',
      content: 'Cada projeto é único. Adaptamos nosso serviço às suas necessidades específicas, seja para uma única peça residencial ou para um grande projeto corporativo. Oferecemos flexibilidade de agendamento e uma comunicação clara e direta durante todo o processo.'
    },
    {
      id: 4,
      title: 'Orçamento transparente',
      content: 'Na Izex, não há surpresas. Nossos orçamentos são detalhados e claros, sem taxas ocultas. Você saberá exatamente o que está pagando antes de iniciarmos o serviço. Se necessário, oferecemos consultoria para otimizar o custo-benefício do seu projeto de montagem.'
    }
  ]

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
            aria-label="Vídeo explicativo sobre os serviços da Izex Furniture Assembly"
          >
            <source src="/images/faq_forniture_video.mp4" type="video/mp4" />
            Seu navegador não suporta operação de vídeo.
          </video>
        </div>

        {/* Right Column - Content */}
        <div className="why-choose-content-column">
          <div className="why-choose-header">
            <span className="why-choose-label">Furniture Assembly</span>
            <h2 className="why-choose-title">Por que escolher a Izex Furniture Assembly?</h2>
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
          <p className="why-choose-footer">Atendemos toda a região com rapidez e compromisso!</p>

          {/* CTA Button */}
          <div className="why-choose-cta">
            <button className="why-choose-button">Solicite um Orçamento Agora</button>
          </div>
        </div>
      </div>
    </section>
  )
}
