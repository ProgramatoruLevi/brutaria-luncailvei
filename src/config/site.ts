export const siteConfig = {
  name: 'Brutăria Lunca Ilvei',
  shortName: 'Brutăria Lunca Ilvei',
  description: 'Pâine proaspătă și produse de patiserie făcute cu grijă, din ingrediente atent alese.',
  url: 'https://brutaria-luncailvei.ro',
  logoPath: '/logo.png',
  phone: '+40 744 123 456',
  whatsapp: '+40744123456',
  email: 'contact@brutaria-luncailvei.ro',
  address: {
    street: 'Strada Principală nr. 42',
    city: 'Lunca Ilvei',
    county: 'Bistrița-Năsăud',
    zip: '427145',
    country: 'România',
    full: 'Strada Principală nr. 42, Lunca Ilvei, Bistrița-Năsăud',
  },
  mapEmbedUrl: 'https://maps.google.com/maps?q=Brut%C4%83ria+Lunca+Ilvei,+Lunca+Ilvei,+Bistri%C8%9Ba-N%C4%83s%C4%83ud&hl=ro&z=16&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Brut%C4%83ria+Lunca+Ilvei',
  schedule: {
    weekdays: 'Luni - Vineri: 06:00 - 20:00',
    saturday: 'Sâmbătă: 07:00 - 18:00',
    sunday: 'Duminică: 07:00 - 14:00',
  },
  social: {
    facebook: '',
    instagram: '',
  },
  company: {
    name: 'S.C. Brutăria Lunca Ilvei S.R.L.',
    cui: 'RO00000000',
    regCom: 'J06/000/2024',
  },
  seo: {
    title: 'Brutăria Lunca Ilvei — Pâine Proaspătă și Patiserie Tradițională',
    description: 'Brutăria Lunca Ilvei — pâine proaspătă, cozonaci, patiserie tradițională și produse de sezon. Ingrediente atent alese, preparate zilnic cu grijă.',
    ogImage: '/og-image.jpg',
  },
}

export type SiteConfig = typeof siteConfig
