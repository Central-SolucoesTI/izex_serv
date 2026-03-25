// Configuração centralizada de SEO para o site

export const SITE_CONFIG = {
  siteName: 'Izex Services LLC',
  siteUrl: 'https://izexservices.com',
  locale: 'pt-BR',
  socialProfiles: {
    facebook: 'https://www.facebook.com/izexservices',
    instagram: 'https://www.instagram.com/izexservices',
    whatsapp: 'https://wa.me/9787277471',
  },
  contact: {
    phone: '(978) 727-7471',
    phoneClean: '9787277471',
    email: 'info@izexservices.com',
    address: '10200 Falcon Moss Ln, Orlando, FL 32832',
    city: 'Orlando',
    state: 'FL',
    zipCode: '32832',
    country: 'US',
  },
  business: {
    name: 'Izex Services LLC',
    alternateName: 'IZEX',
    description: 'Holding company oferecendo serviços especializados de montagem de móveis e limpeza profissional em Orlando, Flórida.',
    foundingDate: '2024',
    paymentAccepted: ['CreditCard', 'DebitCard', 'Cash'],
    priceRange: '$$$',
    image: 'https://izexservices.com/images/izex_logo.png',
  },
  services: [
    {
      id: 'furniture-assembly',
      name: 'Izex Furniture Assembly',
      description: 'Serviço profissional de montagem e instalação de móveis residenciais e comerciais',
      keywords: 'montagem de móveis, instalação de móveis, montagem profissional, Orlando',
      priceRange: '$$$',
      areaServed: ['Orlando, FL', 'Clearwater, FL', 'Kissimmee, FL'],
    },
    {
      id: 'cleaning-solutions',
      name: 'Izex Cleaning Solutions',
      description: 'Limpeza profissional e conservação para ambientes residenciais e comerciais',
      keywords: 'limpeza profissional, limpeza comercial, conservação, Orlando',
      priceRange: '$$$',
      areaServed: ['Orlando, FL', 'Clearwater, FL', 'Kissimmee, FL'],
    },
  ],
}

// Meta tags por página
export const SEO_PAGES = {
  home: {
    title: 'Izex Services | Montagem de Móveis e Limpeza Profissional em Orlando',
    description:
      'Serviços especializados de montagem de móveis e limpeza profissional em Orlando, FL. Equipe qualificada, atendimento rápido e eficiente.',
    canonical: 'https://izexservices.com',
    keywords: 'montagem de móveis, limpeza profissional, Orlando, Florida',
    ogType: 'website',
    ogImage: 'https://izexservices.com/images/og-home.png',
  },
  furniture: {
    title: 'Montagem de Móveis Profissional | Izex Furniture Assembly - Orlando',
    description:
      'Serviços de montagem e instalação de móveis para residências e comercial em Orlando. Precisão, qualidade e agilidade garantidas.',
    canonical: 'https://izexservices.com/furniture-assembly',
    keywords:
      'montagem de móveis, instalação de prateleiras, TV wall mount, furniture assembly, Orlando',
    ogType: 'website',
    ogImage: 'https://izexservices.com/images/og-furniture.png',
  },
  cleaning: {
    title: 'Limpeza Profissional e Conservação | Izex Cleaning Solutions - Orlando',
    description:
      'Serviços de limpeza profissional e conservação para residências e empresas em Orlando. Profissionais treinados e produtos de qualidade.',
    canonical: 'https://izexservices.com/cleaning-solutions',
    keywords: 'limpeza profissional, limpeza comercial, conservação, Orlando, cleaning services',
    ogType: 'website',
    ogImage: 'https://izexservices.com/images/og-cleaning.png',
  },
  'privacy-policy': {
    title: 'Política de Privacidade | Izex Services LLC',
    description:
      'Política de privacidade e proteção de dados da Izex Services LLC. Conheça como coletamos, usamos e protegemos suas informações.',
    canonical: 'https://izexservices.com/privacy-policy',
    keywords: 'política de privacidade, proteção de dados, GDPR, CCPA, LGPD',
    ogType: 'website',
    ogImage: 'https://izexservices.com/images/og-privacy.png',
  },
}

// JSON-LD Schema Builders
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.business.name,
  alternateName: SITE_CONFIG.business.alternateName,
  url: SITE_CONFIG.siteUrl,
  logo: SITE_CONFIG.business.image,
  description: SITE_CONFIG.business.description,
  foundingDate: SITE_CONFIG.business.foundingDate,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.contact.address,
    addressLocality: SITE_CONFIG.contact.city,
    addressRegion: SITE_CONFIG.contact.state,
    postalCode: SITE_CONFIG.contact.zipCode,
    addressCountry: SITE_CONFIG.contact.country,
  },
  sameAs: [
    SITE_CONFIG.socialProfiles.facebook,
    SITE_CONFIG.socialProfiles.instagram,
    SITE_CONFIG.socialProfiles.whatsapp,
  ],
})

export const generateLocalBusinessSchema = (serviceType = 'furniture') => {
  const service = SITE_CONFIG.services.find((s) => s.id === serviceType)

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: service.name,
    image: SITE_CONFIG.business.image,
    description: service.description,
    url: `${SITE_CONFIG.siteUrl}/${serviceType}`,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    priceRange: service.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address,
      addressLocality: SITE_CONFIG.contact.city,
      addressRegion: SITE_CONFIG.contact.state,
      postalCode: SITE_CONFIG.contact.zipCode,
      addressCountry: SITE_CONFIG.contact.country,
    },
    areaServed: service.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['pt-BR', 'en-US'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  }
}

export const generateServiceSchema = (serviceType = 'furniture') => {
  const service = SITE_CONFIG.services.find((s) => s.id === serviceType)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.business.name,
      url: SITE_CONFIG.siteUrl,
    },
    areaServed: service.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: service.priceRange,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_CONFIG.siteUrl}/${serviceType}`,
    },
  }
}

export const generateBreadcrumbSchema = (pages) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: pages.map((page, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: page.name,
    item: page.url,
  })),
})
