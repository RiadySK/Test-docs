const homePage = {
  '@context': 'http://schema.org',
  '@type': 'Website',
  name: 'KASKUS',
  url: 'http://www.kaskus.co.id',
  sameAs: [
    'https://www.facebook.com/officialkaskus',
    'https://www.twitter.com/kaskus',
    'https://www.twitter.com/kaskusjualbeli',
    'https://www.instagram.com/kaskusnetworks',
    'https://www.instagram.com/kaskusjualbeli',
    'https://plus.google.com/+kaskus',
    'https://id.wikipedia.org/wiki/Kaskus',
    'https://en.wikipedia.org/wiki/Kaskus',
  ],
  author: [
    {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: 'KASKUS',
      legalName: 'PT. Darta Media Indonesia',
      url: 'http://www.kaskus.co.id',
      logo: 'http://www.kaskus.co.id/e3.1/images/layout/home-logo-n.png',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+62-21-2922-3600',
          contactType: 'customer service',
        },
      ],
      address:
        'Menara Palma Annex Building P11 H. R. X2 Kav 6, Jalan Haji R. Rasuna Said, Daerah Khusus Ibukota Jakarta 12950',
    },
  ],
}

export { homePage }
