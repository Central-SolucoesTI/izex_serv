import { Helmet } from 'react-helmet-async'
import { SITE_CONFIG, SEO_PAGES } from '../config/seoConfig'

/**
 * Componente reutilizável para configurar meta tags e structured data
 * Uso: <SEOConfig page="home" customTitle="..." customDescription="..." />
 */
export default function SEOConfig({
  page = 'home',
  customTitle,
  customDescription,
  customKeywords,
  customImage,
  customUrl,
  schemaData = null,
  language = 'pt',
}) {
  const pageConfig = SEO_PAGES[page] || SEO_PAGES.home

  const title = customTitle || pageConfig.title
  const description = customDescription || pageConfig.description
  const keywords = customKeywords || pageConfig.keywords
  const ogImage = customImage || pageConfig.ogImage
  const canonicalUrl = customUrl || pageConfig.canonical

  return (
    <Helmet>
      {/* Meta Tags Básico */}
      <html lang={language === 'pt' ? 'pt-BR' : 'en-US'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph - Facebook, LinkedIn */}
      <meta property="og:type" content={pageConfig.ogType || 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:locale" content={language === 'pt' ? 'pt_BR' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* WhatsApp Card */}
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Business Meta Tags */}
      <meta name="application-name" content={SITE_CONFIG.siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#d8742e" />

      {/* Contacto e Ubicación */}
      <meta name="phone_number" content={SITE_CONFIG.contact.phone} />
      <meta name="geo.position" content={`-81.3769,28.5421`} />
      <meta name="ICBM" content="-81.3769,28.5421" />
      <meta name="geo.placename" content={SITE_CONFIG.contact.city} />
      <meta name="geo.region" content="US-FL" />

      {/* Índexação */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Alternates para Multi-idioma */}
      <link rel="alternate" hrefLang="pt-BR" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl.replace('pt', 'en')} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Icons */}
      <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

      {/* JSON-LD Structured Data */}
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}

      {/* Preconnect para Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Helmet>
  )
}
