/**
 * GUIA PRÁTICO DE IMPLEMENTAÇÃO DE SEO & GEO
 * ===========================================
 * 
 * Este documento mostra como usar o sistema de SEO/GEO implementado no site.
 */

// ==========================================
// 1. USAR O COMPONENTE SEOConfig
// ==========================================

// Em qualquer página/componente:

import SEOConfig from './components/SEOConfig'
import { generateLocalBusinessSchema, generateOrganizationSchema } from './config/seoConfig'

function IzexFurnitureHero() {
  const { language } = useLanguage()

  return (
    <>
      {/* Adicione SEOConfig no início do componente */}
      <SEOConfig
        page="furniture"  // Opções: 'home', 'furniture', 'cleaning'
        language={language}
        schemaData={generateLocalBusinessSchema('furniture-assembly')}
      />
      
      <div className="furniture-page">
        {/* Seu conteúdo aqui */}
      </div>
    </>
  )
}

// ==========================================
// 2. CUSTOMIZAR META TAGS POR PÁGINA
// ==========================================

// No arquivo src/config/seoConfig.js, altere SEO_PAGES:

export const SEO_PAGES = {
  home: {
    title: 'Izex Services | Montagem de Móveis e Limpeza Profissional em Orlando',
    description: 'Serviços especializados de montagem de móveis e limpeza profissional em Orlando, FL.',
    canonical: 'https://izexservices.com',
    keywords: 'montagem de móveis, limpeza profissional, Orlando, Florida',
    ogType: 'website',
    ogImage: 'https://izexservices.com/images/og-home.png',
  },
  // ... adicione mais páginas aqui
}

// ==========================================
// 3. ADICIONAR NOVOS SCHEMAS JSON-LD
// ==========================================

// Para uma nova página, crie um schema customizado:

import { Helmet } from 'react-helmet-async'

function CustomPage() {
  const customSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Título do Artigo',
    description: 'Descrição',
    image: 'https://example.com/image.jpg',
    datePublished: '2024-01-01',
    author: {
      '@type': 'Organization',
      name: 'Izex Services LLC',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(customSchema)}
      </script>
    </Helmet>
  )
}

// ==========================================
// 4. ALT TEXT EM IMAGENS (ESSENCIAL PARA IA)
// ==========================================

// ❌ ERRADO
<img src="/images/furniture.jpg" />

// ✅ CORRETO - Alt descritivo e contextual
<img 
  src="/images/furniture.jpg"
  alt="Montagem profissional de guarda-roupa de madeira em estilo moderno"
  width="400"
  height="300"
/>

// Boas práticas:
// - Descreva o conteúdo visual
// - Inclua palavras-chave relevantes se natural
// - Não exagere (50-125 caracteres ideal)
// - Nunca deixe em branco
// - Não comece com "imagem de" (é redundante)

// ==========================================
// 5. TAGS SEMÂNTICAS HTML5 (PARA IA)
// ==========================================

// ❌ ERRADO
<div className="header">
  <div className="title">
    <h1>Serviços</h1>
  </div>
</div>

// ✅ CORRETO
<header>
  <section>
    <h1>Serviços</h1>
  </section>
</header>

// Tags semânticas importantes:
// <header> - Cabeçalho da página
// <main>   - Conteúdo principal
// <nav>    - Navegação
// <section> - Seção clara do conteúdo
// <article> - Conteúdo independente/publicação
// <aside>  - Conteúdo complementar
// <footer> - Rodapé
// <h1>-<h6> - Hierarquia de títulos

// ==========================================
// 6. HIERARQUIA DE TÍTULOS (PARA IA)
// ==========================================

// ❌ ERRADO
<h1>Página</h1>
<h3>Subsecção</h3>
<h2>Outra seção</h2>

// ✅ CORRETO
<h1>Página Principal</h1>
<section>
  <h2>Primeira Seção</h2>
  <h3>Subsecção</h3>
</section>
<section>
  <h2>Segunda Seção</h2>
  <h3>Subsecção</h3>
</section>

// ==========================================
// 7. OPTIMIZAR PARA IAs (ChatGPT, Claude, Perplexity)
// ==========================================

// Adicione um sitemap.xml:
// /sitemap.xml
// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://izexservices.com</loc>
//     <priority>1.0</priority>
//   </url>
//   <url>
//     <loc>https://izexservices.com/furniture-assembly</loc>
//     <priority>0.8</priority>
//   </url>
//   <url>
//     <loc>https://izexservices.com/cleaning-solutions</loc>
//     <priority>0.8</priority>
//   </url>
// </urlset>

// Adicione robots.txt:
// /robots.txt
// User-agent: *
// Allow: /
// Sitemap: https://izexservices.com/sitemap.xml
// Disallow: /admin
// Disallow: /*.pdf

// ==========================================
// 8. TESTAR INDEXAÇÃO
// ==========================================

// Google Search Console:
// https://search.google.com/search-console

// LinkedIn Insights:
// https://www.linkedin.com/developers/tools/inspector

// Facebook Sharing Debugger:
// https://developers.facebook.com/tools/debug/sharing

// Bing Webmaster Tools:
// https://www.bing.com/webmasters

// ==========================================
// 9. PERFORMANCE (Core Web Vitals)
// ==========================================

// Use Lighthouse no Chrome DevTools:
// 1. DevTools > Lighthouse
// 2. Clique em "Generate Report"
// 3. Analise LCP, FID, CLS

// Métricas importantes:
// - LCP (Largest Contentful Paint): < 2.5s
// - FID (First Input Delay): < 100ms
// - CLS (Cumulative Layout Shift): < 0.1

// ==========================================
// 10. CHECKLIST DE IMPLEMENTAÇÃO
// ==========================================

/* 
✅ Meta tags configuradas (title, description, keywords)
✅ Canonical URLs definidas
✅ Open Graph tags para redes sociais
✅ Twitter Cards configuradas
✅ JSON-LD Schema implementado
✅ Sitemap.xml criado
✅ Robots.txt configurado
✅ Alt text em TODAS as imagens
✅ Tags semânticas HTML5 utilizadas
✅ Hierarquia de títulos (H1-H6) consistente
✅ Mobile responsivo
✅ Velocidade otimizada (< 3s)
✅ Core Web Vitals aprovados
✅ Estrutura de dados consistente
✅ Teste com Google Search Console
✅ Teste com ferramentas de IA (Rich Preview)
*/
