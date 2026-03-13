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
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21576.0!2d24.92!3d47.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4735b0!2sLunca+Ilvei!5e0!3m2!1sen!2sro!4v1',
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
