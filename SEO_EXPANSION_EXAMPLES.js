/**
 * EXEMPLOS PRÁTICOS DE EXPANSÃO SEO
 * ==================================
 * 
 * Copie estes exemplos para criar novas páginas ou componentes
 * com suporte completo a SEO & GEO.
 */

// =========================================
// EXEMPLO 1: Adicionar Nova Página com SEO
// =========================================

/*
1. Crie pasta: src/pages/NewPage/
2. Crie arquivo: src/pages/NewPage/index.jsx

import SEOConfig from '../../components/SEOConfig'
import { generateLocalBusinessSchema, generateOrganizationSchema } from '../../config/seoConfig'
import { useLanguage } from '../../i18n/LanguageContext'

export default function NewPage() {
  const { language } = useLanguage()

  return (
    <>
      <SEOConfig
        page="custom"
        language={language}
        schemaData={generateOrganizationSchema()}
      />
      <main>
        <h1>Título da Página</h1>
        <p>Conteúdo...</p>
      </main>
    </>
  )
}

3. Adicione a rota em src/App.jsx:
import NewPage from './pages/NewPage'

<Route path="/new-page" element={<NewPage />} />

4. Atualize src/config/seoConfig.js com:
export const SEO_PAGES = {
  ...
  newPage: {
    title: 'Nova Página | Izex Services LLC',
    description: 'Descrição otimizada da nova página.',
    canonical: 'https://izexservices.com/new-page',
    keywords: 'palavra-chave1, palavra-chave2',
    ogType: 'website',
    ogImage: 'https://izexservices.com/images/og-newpage.png',
  },
}
*/

// =========================================
// EXEMPLO 2: Adicionar Blog com SEO
// =========================================

/*
ESTRUTURA RECOMENDADA:
src/pages/Blog/
├── index.jsx (lista de artigos)
├── [slug].jsx (artigo individual)
├── BlogCard.jsx
└── BlogPost.jsx

ARQUIVO: src/pages/Blog/[slug].jsx

import SEOConfig from '../../components/SEOConfig'
import { Helmet } from 'react-helmet-async'

export default function BlogPost({ article }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    author: {
      '@type': 'Organization',
      name: 'Izex Services LLC',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Izex Services LLC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://izexservices.com/images/izex_logo.png',
      },
    },
  }

  return (
    <>
      <SEOConfig
        customTitle={article.title}
        customDescription={article.excerpt}
        customImage={article.image}
        schemaData={articleSchema}
      />
      <article>
        <header>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <time dateTime={article.publishedDate}>
            {new Date(article.publishedDate).toLocaleDateString('pt-BR')}
          </time>
        </header>
        <main>
          {article.content}
        </main>
      </article>
    </>
  )
}
*/

// =========================================
// EXEMPLO 3: Adicionar Imagens com SEO
// =========================================

/*
SEMPRE USE ESTE PADRÃO PARA IMAGENS:

// ✅ CORRETO
<img 
  src="/images/furniture-assembly-orlando.jpg"
  alt="Profissional montando guarda-roupa de madeira MDF em Orlando, Flórida"
  width={600}
  height={400}
  loading="lazy"
  title="Serviço de montagem de móveis em Orlando"
/>

// ✅ COM PICTURE PARA RESPONSIVE
<picture>
  <source 
    media="(max-width: 640px)" 
    srcSet="/images/furniture-mobile.jpg"
  />
  <source 
    media="(min-width: 641px)" 
    srcSet="/images/furniture-desktop.jpg"
  />
  <img
    src="/images/furniture-desktop.jpg"
    alt="Tim montando móvel customizado na residência em Orlando"
    loading="lazy"
  />
</picture>

BOAS PRÁTICAS:
- Use nomes descritivos: furniture-assembly-orlando.jpg (não: img1.jpg)
- Comprima imagens (use TinyPNG, ImageOptim)
- Use WebP para melhor compressão
- Implemente lazy loading
- Especifique width/height para evitar CLS
- Use alt text único, nunca duplicado
*/

// =========================================
// EXEMPLO 4: Adicionar Avaliações (Ratings)
// =========================================

/*
SCHEMA PARA EXIBIR ESTRELAS NO GOOGLE:

const ratingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Izex Furniture Assembly',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'João Silva'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: 'Serviço excelente! Recomendo muito!',
      datePublished: '2024-01-15'
    }
  ]
}

ISSO FAZARÁ O GOOGLE EXIBIR ESTRELAS NA BUSCA!
*/

// =========================================
// EXEMPLO 5: Adicionar FAQ (Perguntas Frequentes)
// =========================================

/*
SCHEMA PARA FAQ:

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é o preço da montagem de móvel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O preço depende do tipo e complexidade do móvel. Entre em contato para um orçamento.'
      }
    },
    {
      '@type': 'Question',
      name: 'Vocês fazem limpeza comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Atendemos residências e empresas com serviços de limpeza profissional.'
      }
    }
  ]
}

ISSO FAZARÁ O GOOGLE EXPANDIR RESPOSTAS NA BUSCA!
*/

// =========================================
// EXEMPLO 6: Otimizar URLs e Slugs
// =========================================

/*
BOAS PRÁTICAS DE URL:

✅ CORRETO:
- https://izexservices.com/furniture-assembly
- https://izexservices.com/cleaning-solutions
- https://izexservices.com/blog/como-montar-guarda-roupa
- https://izexservices.com/servicos/montagem-tv-wall

❌ ERRADO:
- https://izexservices.com/page?id=123&cat=furniture
- https://izexservices.com/FurnitureAssembly
- https://izexservices.com/serviço/0001
- https://izexservices.com/?p=123

REGRAS:
- Use lowercase
- Use hífens (não underscores)
- Seja descritivo (máx 50-75 caracteres)
- Inclua palavras-chave primárias
- Use slugs consistentes
- Nunca mude URLs publicadas (use redirects 301)
*/

// =========================================
// EXEMPLO 7: Adicionar Breadcrumb Estruturado
// =========================================

/*
COMPONENTE BREADCRUMB COM SEO:

import { generateBreadcrumbSchema } from '../config/seoConfig'
import { Helmet } from 'react-helmet-async'

export default function Breadcrumb({ items }) {
  const breadcrumbSchema = generateBreadcrumbSchema(items)

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
              {index < items.length - 1 && <span> / </span>}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

USO:
<Breadcrumb 
  items={[
    { name: 'Home', url: '/' },
    { name: 'Serviços', url: '/servicos' },
    { name: 'Montagem de Móveis', url: '/furniture-assembly' }
  ]}
/>
*/

// =========================================
// EXEMPLO 8: Mobile App Schema (PWA)
// =========================================

/*
SE FIZER PROGRESSIVE WEB APP:

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Izex Services',
  applicationCategory: 'ServiceApplication',
  operatingSystem: 'Web',
  url: 'https://izexservices.com',
  downloadUrl: 'https://izexservices.com',
  screenshot: {
    '@type': 'ImageObject',
    url: 'https://izexservices.com/images/screenshot.jpg'
  }
}
*/

// =========================================
// EXEMPLO 9: Hreflang para Multi-idioma
// =========================================

/*
JÁ IMPLEMENTADO NO SEOConfig.jsx!
Adiciona automaticamente:

<link rel="alternate" hrefLang="pt-BR" href="https://izexservices.com" />
<link rel="alternate" hrefLang="en" href="https://izexservices.com/en" />
<link rel="alternate" hrefLang="x-default" href="https://izexservices.com" />

SE PRECISAR DE DOMÍNIOS DIFERENTES:
- pt: https://izexservices.com.br (Portugal/Brasil)
- en: https://izexservices.com (EUA/Global)
- es: https://izexservices.es (Espanha)
*/

// =========================================
// EXEMPLO 10: Monitorar com Google Analytics 4
// =========================================

/*
ADICIONE EM index.html:

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXXXX', {
    'anonymize_ip': true
  });
</script>

OU USE REACT-GA4:
npm install react-ga4

import ReactGA from "react-ga4";

useEffect(() => {
  ReactGA.initialize("G-XXXXXXXXXXXX");
  ReactGA.pageview(window.location.pathname);
}, [location])
*/

export default {}
