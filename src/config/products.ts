export interface Product {
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  category: ProductCategory
  image: string
  tags: ProductTag[]
  featured: boolean
  seasonal: boolean
  weight?: string
  variants?: string[]
  availabilityNote?: string
}

export type ProductCategory = 'paine' | 'patiserie' | 'cozonaci'

export type ProductTag = 'traditional' | 'sezon' | 'bestseller' | 'nou'

export const categoryLabels: Record<ProductCategory, string> = {
  paine: 'Pâine',
  patiserie: 'Patiserie',
  cozonaci: 'Cozonaci',
}

export const products: Product[] = [
  // === COZONACI ===
  {
    slug: 'cozonac-800g',
    name: 'Cozonac 800g',
    shortDescription: 'Cozonac pufos de 800g, disponibil cu nucă, mac, rahat sau ciocolată.',
    longDescription:
      'Cozonacul nostru tradițional de 800g este preparat după rețeta moștenită din generație în generație. Aluatul moale și aromat, îmbogățit cu unt, ouă proaspete și vanilie naturală, este împletit cu grijă peste o umplutură generoasă, la alegere: nucă, mac, rahat sau ciocolată. Fiecare cozonac este pregătit manual și copt la temperatura perfectă pentru un rezultat excepțional — pufos, parfumat și plin de aromă.',
    category: 'cozonaci',
    image: '/produse/cozonac-800g.jpg',
    tags: ['traditional', 'bestseller'],
    featured: true,
    seasonal: true,
    weight: '800g',
    variants: ['Nucă', 'Mac', 'Rahat', 'Ciocolată'],
  },
  {
    slug: 'cozonac-400g',
    name: 'Cozonac 400g',
    shortDescription: 'Cozonac aromat de 400g, perfect pentru porții mai mici.',
    longDescription:
      'Varianta mai mică a cozonacului nostru tradițional, ideală pentru familii mici sau ca atenție specială pentru cei dragi. Același aluat pufos, frământat cu răbdare, aceeași umplutură generoasă — într-o porție potrivită pentru orice ocazie. Perfect pentru masa de duminică sau pentru cadou.',
    category: 'cozonaci',
    image: '/produse/cozonac-400g.jpg',
    tags: ['traditional'],
    featured: true,
    seasonal: true,
    weight: '400g',
  },

  // === PÂINE ===
  {
    slug: 'paine-de-casa-1kg',
    name: 'Pâine de casă 1kg',
    shortDescription: 'Pâine tradițională cu coajă crocantă și miez pufos, coaptă zilnic.',
    longDescription:
      'Pâinea noastră de casă este preparată după o rețetă veche, transmisă din generație în generație. Folosim făină de cea mai bună calitate și drojdie naturală, lăsând aluatul să crească lent pentru un gust autentic. Coaja crocantă și miezul pufos o fac ideală atât pentru masa de zi cu zi, cât și pentru ocazii speciale.',
    category: 'paine',
    image: '/produse/paine-de-casa-1kg.jpg',
    tags: ['traditional', 'bestseller'],
    featured: true,
    seasonal: false,
    weight: '1kg',
  },
  {
    slug: 'paine-rotunda-1kg',
    name: 'Pâine rotundă 1kg',
    shortDescription: 'Pâine rotundă tradițională, cu o crustă bine rumenită.',
    longDescription:
      'Pâinea rotundă este coaptă în tăvi tradiționale care îi conferă forma clasică și o crustă bine rumenită. Cântărește 1kg și este perfectă pentru mesele de familie. Aluatul fermentat lent dezvoltă arome complexe, iar miezul pufos se păstrează moale câteva zile.',
    category: 'paine',
    image: '/produse/paine-rotunda-1kg.jpg',
    tags: ['traditional'],
    featured: true,
    seasonal: false,
    weight: '1kg',
  },
  {
    slug: 'franzela-alba-600g',
    name: 'Franzelă albă 600g',
    shortDescription: 'Franzelă moale și pufoasă, perfectă pentru micul dejun.',
    longDescription:
      'Franzela noastră albă este coaptă în fiecare dimineață, astfel încât să ajungă caldă pe masa ta. Textura moale și pufoasă, combinată cu o crustă aurie subțire, o face alegerea perfectă pentru micul dejun alături de unt, gem sau brânză proaspătă. Cântărește 600g.',
    category: 'paine',
    image: '/produse/franzela-alba-600g.jpg',
    tags: ['bestseller'],
    featured: true,
    seasonal: false,
    weight: '600g',
  },
  {
    slug: 'paine-la-tava-600g',
    name: 'Pâine la tavă 600g',
    shortDescription: 'Pâine coaptă la tavă, cu formă rectangulară clasică.',
    longDescription:
      'Pâinea la tavă are o formă rectangulară perfectă pentru sandvișuri și prăjiri. Coaja moale și miezul aerat o fac potrivită pentru consumul zilnic. 600g de pâine proaspătă, coaptă în fiecare dimineață în tăvi tradiționale.',
    category: 'paine',
    image: '/produse/paine-la-tava-600g.jpg',
    tags: ['traditional'],
    featured: false,
    seasonal: false,
    weight: '600g',
  },
  {
    slug: 'paine-alba-300g',
    name: 'Pâine albă 300g',
    shortDescription: 'Pâine albă mică, ideală pentru o singură masă.',
    longDescription:
      'Pâinea albă de 300g este perfectă pentru cei care preferă pâinea proaspătă în fiecare zi, fără surplus. Aluatul fermentat natural îi conferă un gust autentic, iar dimensiunea redusă o face ușor de purtat și păstrat. Coaptă zilnic.',
    category: 'paine',
    image: '/produse/paine-alba-300g.jpg',
    tags: [],
    featured: false,
    seasonal: false,
    weight: '300g',
  },
  {
    slug: 'paine-neagra-300g',
    name: 'Pâine neagră 300g',
    shortDescription: 'Pâine neagră, bogată în fibre, pentru un stil de viață sănătos.',
    longDescription:
      'Pâinea neagră de 300g este preparată din făină integrală de calitate, bogată în fibre și substanțe nutritive. Fermentarea lentă îi conferă un gust complex, ușor acrișor, și o textură densă, dar plăcută. Este alegerea ideală pentru cei care apreciază un stil de viață sănătos fără a renunța la gust.',
    category: 'paine',
    image: '/produse/paine-neagra-300g.jpg',
    tags: ['nou'],
    featured: false,
    seasonal: false,
    weight: '300g',
  },

  // === PATISERIE ===
  {
    slug: 'corn-vanilie',
    name: 'Corn cu vanilie',
    shortDescription: 'Corn fraged cu cremă fină de vanilie, copt proaspăt.',
    longDescription:
      'Corn fraged din aluat foietat, umplut cu o cremă fină de vanilie naturală. Stratificat cu grijă și copt la temperatura perfectă, fiecare strat de aluat și unt creează o textură incredibil de crocantă pe dinafară și moale pe dinăuntru. Ideal pentru micul dejun sau gustarea de la pauză.',
    category: 'patiserie',
    image: '/produse/corn-vanilie.jpg',
    tags: ['bestseller'],
    featured: true,
    seasonal: false,
  },
  {
    slug: 'corn-ciocolata',
    name: 'Corn cu ciocolată',
    shortDescription: 'Corn fraged cu umplutură generoasă de ciocolată.',
    longDescription:
      'Cornul nostru cu ciocolată combină un aluat foietat fraged cu o umplutură generoasă de ciocolată fină. Stratul exterior crocant, ușor caramelizat, contrastează frumos cu interiorul moale și aromat. Favoritul celor mici și mari.',
    category: 'patiserie',
    image: '/produse/corn-ciocolata.jpg',
    tags: ['bestseller'],
    featured: false,
    seasonal: false,
  },
  {
    slug: 'corn-mar',
    name: 'Corn cu măr',
    shortDescription: 'Corn cu umplutură de mere caramelizate și scorțișoară.',
    longDescription:
      'Cornul cu măr este preparat cu mere proaspete caramelizate și scorțișoară, învelite într-un aluat foietat. Aroma caldă a scorțișoarei și dulceața naturală a merelor se combină perfect într-o gustare autentică, ca acasă.',
    category: 'patiserie',
    image: '/produse/corn-mar.jpg',
    tags: ['traditional'],
    featured: false,
    seasonal: false,
  },
  {
    slug: 'corn-visine',
    name: 'Corn cu vișine',
    shortDescription: 'Corn cu umplutură aromată de vișine.',
    longDescription:
      'Cornul cu vișine îmbină aluatul foietat fraged cu o umplutură aromată de vișine, ușor acrișoară. Combinația dintre textura crocantă și gustul intens al vișinelor face acest corn o alegere specială pentru cei care preferă fructele.',
    category: 'patiserie',
    image: '/produse/corn-visine.jpg',
    tags: ['nou'],
    featured: false,
    seasonal: false,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getSeasonalProducts(): Product[] {
  return products.filter(p => p.seasonal)
}

export function getRelatedProducts(currentSlug: string, limit = 4): Product[] {
  const current = getProductBySlug(currentSlug)
  if (!current) return products.slice(0, limit)
  return products
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
    .concat(
      products.filter(p => p.slug !== currentSlug && p.category !== current.category)
    )
    .slice(0, limit)
}
