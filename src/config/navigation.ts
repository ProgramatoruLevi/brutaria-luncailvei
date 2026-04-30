export interface NavItem {
  label: string
  href: string
}

export const mainNavigation: NavItem[] = [
  { label: 'Acasă', href: '/' },
  { label: 'Produse', href: '/produse' },
  { label: 'Despre noi', href: '/despre-noi' },
  { label: 'Contact', href: '/contact' },
]

export const footerNavigation = {
  navigare: [
    { label: 'Acasă', href: '/' },
    { label: 'Produse', href: '/produse' },
    { label: 'Despre noi', href: '/despre-noi' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Termeni și condiții', href: '/termeni-conditii' },
    { label: 'Politica de confidențialitate', href: '/politica-confidentialitate' },
    { label: 'Politica de cookie-uri', href: '/politica-cookies' },
    { label: 'Setări cookie', href: '/setari-cookie' },
  ],
}
