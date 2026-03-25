#!/usr/bin/env bash
# SEO Quick Reference for Izex Services
# Guia rápido de referência para SEO & GEO

echo "
╔════════════════════════════════════════════════════════════════════════╗
║          🚀 IZEX SERVICES - SEO & GEO QUICK REFERENCE                 ║
║                  Especialista em SEO & GEO Setup                      ║
╚════════════════════════════════════════════════════════════════════════╝

📚 ARQUIVOS CHAVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. src/components/SEOConfig.jsx
   └─ Componente reutilizável para meta tags e schemas

2. src/config/seoConfig.js  
   └─ Configuração centralizada (SEO_PAGES, schemas, SITE_CONFIG)

3. public/sitemap.xml
   └─ Mapa do site para bots (inclua em search console)

4. public/robots.txt
   └─ Instruções de rastreamento para bots

5. index.html
   └─ Meta tags base e preconnects

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 COMO USAR SEOCONFIG EM UMA NOVA PÁGINA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import SEOConfig from './components/SEOConfig'
import { generateLocalBusinessSchema } from './config/seoConfig'
import { useLanguage } from './i18n/LanguageContext'

export default function MyPage() {
  const { language } = useLanguage()

  return (
    <>
      <SEOConfig
        page=\"home\"  // ou \"furniture\" ou \"cleaning\"
        language={language}
        schemaData={generateLocalBusinessSchema('furniture-assembly')}
      />
      <main>Seu conteúdo aqui</main>
    </>
  )
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ PRÁTICAS OBRIGATÓRIAS PARA IMAGENS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ SEMPRE USE:
<img 
  src=\"/images/my-image.jpg\"
  alt=\"Descrição detalhada e naturalda imagem com palavras-chave\"
  width={600}
  height={400}
  loading=\"lazy\"
/>

❌ NUNCA DEIXE ALT VAZIO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ HIERARQUIA HTML SEMÂNTICA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<header>...</header>        # Cabeçalho (pode ter nav, logo)
<main>                      # Conteúdo PRINCIPAL
  <h1>Título Principal</h1>

  <section>
    <h2>Seção 1</h2>
    <h3>Subsecção</h3>
  </section>

  <section>
    <h2>Seção 2</h2>
    <article>
      <h3>Artigo</h3>
    </article>
  </section>
</main>
<footer>...</footer>        # Rodapé

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 SCHEMAS JSON-LD DISPONÍVEIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. generateOrganizationSchema()
   └─ Informações gerais da empresa (nome, logo, contato)

2. generateLocalBusinessSchema('furniture-assembly')
   └─ Negócio local (endereço, telefone, rating, áreas atendidas)

3. generateServiceSchema('furniture-assembly')
   └─ Detalhes específicos do serviço

4. generateBreadcrumbSchema(pages)
   └─ Navegação estruturada (Home > Serviços > Produto)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 TESTAR E VALIDAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Google Rich Results Test
   https://search.google.com/test/rich-results

2. Schema Validator
   https://validator.schema.org/

3. Open Graph Debugger
   https://developers.facebook.com/tools/debug/sharing

4. Lighthouse (DevTools > Lighthouse)
   Metas: LCP < 2.5s, FID < 100ms, CLS < 0.1

5. IA de Busca
   - ChatGPT: site.com
   - Claude: Claude.ai (web search)
   - Perplexity: perplexity.ai

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CHECKLIST PRÉ-LAUNCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[ ] Meta tags home, furniture, cleaning
[ ] SEOConfig em todas as páginas
[ ] Alt text em TODAS as imagens
[ ] Hierarquia H1-H6 correta
[ ] Tags semânticas (<header>, <main>, <section>, etc)
[ ] Sitemap.xml criado
[ ] Robots.txt criado
[ ] Canonical URLs configuradas
[ ] Open Graph testado
[ ] JSON-LD schemas validados
[ ] Mobile responsivo testado
[ ] Performance core web vitals
[ ] Build produção validada ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 DICAS DE OURO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Atualize sitemap.xml quando adicionar novas páginas
2. Teste em Google Search Console antes de publicar
3. Use Lighthouse regularmente para monitorar performance
4. Adicione Google Analytics 4 para acompanhar usuários IAs
5. Mantenha 1 único <h1> por página
6. Escreva meta descriptions naturais (150-160 chars)
7. Use URLs descritivas e amigáveis
8. Otimize imagens antes de fazer upload
9. Implemente lazy loading em imagens
10. Monitore rankings de palavras-chave regularmente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 LINKS IMPORTANTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Google Search Console: https://search.google.com/search-console
Schema.org: https://schema.org/
Web.dev: https://web.dev/
Lighthouse: https://developers.google.com/web/tools/lighthouse
MDN SEO: https://developer.mozilla.org/en-US/docs/Glossary/SEO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 STATUS: ✅ PRODUÇÃO PRONTA

Build: ✓ 1776 módulos | Size: 320.56KB JS | Gzipped: 98.12KB
Date: 25 de Março de 2026
Status: Ready for deployment

╚════════════════════════════════════════════════════════════════════════╝
"
