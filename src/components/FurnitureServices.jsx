import './FurnitureServices.css'

const serviceCards = [
  {
    title: 'Montagem e Desmontagem de Móveis',
    description:
      'Armários, móveis alto padrão, móveis personalizados, móveis soltos e muito mais!',
    footer: 'Móveis prontos de lojas como IKEA, Wayfair, Amazon e outras.',
    image: '/images/port (19).png',
  },
  {
    title: 'Instalação de Suportes e Acessórios',
    description: 'Prateleiras, suportes de TV, quadros e decoração.',
    footer: 'Cortinas, persianas e varões.',
    image: '/images/port (3).png',
  },
]

const galleryImages = [
  {
    src: '/images/port_.png',
    alt: 'Projeto de montagem de móveis 1',
  },
  {
    src: '/images/port.png',
    alt: 'Projeto de montagem de móveis 2',
  },
  {
    src: '/images/port (2).png',
    alt: 'Projeto de montagem de móveis 3',
  },
  {
    src: '/images/port (3).png',
    alt: 'Projeto de montagem de móveis 4',
  },
  {
    src: '/images/port (5).png',
    alt: 'Projeto de montagem de móveis 5',
  },
  {
    src: '/images/port (9).png',
    alt: 'Projeto de montagem de móveis 6',
  },
  {
    src: '/images/port (10).png',
    alt: 'Projeto de montagem de móveis 7',
  },
  {
    src: '/images/port (17).png',
    alt: 'Projeto de montagem de móveis 8',
  },
  {
    src: '/images/port (19).png',
    alt: 'Projeto de montagem de móveis 9',
  },
  {
    src: '/images/port (20).png',
    alt: 'Projeto de montagem de móveis 10',
  },
  {
    src: '/images/port (26).png',
    alt: 'Projeto de montagem de móveis 11',
  },
  {
    src: '/images/port (27).png',
    alt: 'Projeto de montagem de móveis 12',
  },
  {
    src: '/images/port (29).png',
    alt: 'Projeto de montagem de móveis 13',
  },
  {
    src: '/images/port (43).png',
    alt: 'Projeto de montagem de móveis 14',
  },
]

const topRowImages = galleryImages.slice(0, Math.ceil(galleryImages.length / 2))
const bottomRowImages = galleryImages.slice(Math.ceil(galleryImages.length / 2))

function FurnitureServices() {
  return (
    <section className="furniture-services" aria-label="Nossos serviços de furniture assembly">
      <div className="furniture-services-inner">
        <p className="furniture-services-label">Furniture Assembly</p>
        <h2 className="furniture-services-title">Nossos serviços</h2>

        <div className="furniture-service-cards">
          {serviceCards.map((card) => (
            <article key={card.title} className="furniture-service-card">
              <div className="furniture-service-text">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <small>{card.footer}</small>
              </div>
              <img src={card.image} alt={card.title} loading="lazy" />
            </article>
          ))}
        </div>

        <div className="furniture-gallery" aria-label="Galeria de projetos">
          <div className="furniture-gallery-row row-left">
            {[...topRowImages, ...topRowImages].map((image, index) => (
              <figure key={`${image.src}-top-${index}`} className="furniture-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="furniture-gallery-row row-right">
            {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
              <figure key={`${image.src}-bottom-${index}`} className="furniture-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FurnitureServices
