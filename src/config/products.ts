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
  availabilityNote?: string
}

export type ProductCategory = 'paine' | 'patiserie' | 'cozonaci' | 'sezon' | 'specialitati'

export type ProductTag = 'traditional' | 'sezon' | 'bestseller' | 'nou'

export const categoryLabels: Record<ProductCategory, string> = {
  paine: 'Pâine',
  patiserie: 'Patiserie',
  cozonaci: 'Cozonaci',
  sezon: 'Produse de sezon',
  specialitati: 'Specialități tradiționale',
}

export const products: Product[] = [
  {
    slug: 'paine-de-casa',
    name: 'Pâine de casă',
    shortDescription: 'Pâine tradițională cu coajă crocantă și miez pufos, coaptă zilnic.',
    longDescription: 'Pâinea noastră de casă este preparată după o rețetă veche, transmisă din generație în generație. Folosim făină de cea mai bună calitate și drojdie naturală, lăsând aluatul să crească lent pentru un gust autentic. Coaja crocantă și miezul pufos o fac ideală atât pentru masa de zi cu zi, cât și pentru ocazii speciale.',
    category: 'paine',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    tags: ['traditional', 'bestseller'],
    featured: true,
    seasonal: false,
  },
  {
    slug: 'franzela-proaspata',
    name: 'Franzelă proaspătă',
    shortDescription: 'Franzelă moale și pufoasă, perfectă pentru micul dejun.',
    longDescription: 'Franzela noastră proaspătă este coaptă în fiecare dimineață, astfel încât să ajungă caldă pe masa ta. Textura moale și pufoasă, combinată cu o crustă aurie subțire, o face alegerea perfectă pentru micul dejun alături de unt, gem sau brânză proaspătă.',
    category: 'paine',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&h=400&fit=crop',
    tags: ['bestseller'],
    featured: true,
    seasonal: false,
  },
  {
    slug: 'cozonac-traditional',
    name: 'Cozonac tradițional',
    shortDescription: 'Cozonac pufos cu nucă, preparat după rețeta tradițională.',
    longDescription: 'Cozonacul nostru tradițional cu nucă este mândria brutăriei. Aluatul moale și aromat, îmbogățit cu unt, ouă proaspete și vanilie naturală, este împletit cu grijă peste o umplutură generoasă de nucă proaspătă. Fiecare cozonac este preparat manual și copt la temperatura perfectă pentru un rezultat excepțional.',
    category: 'cozonaci',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&crop=bottom',
    tags: ['traditional', 'bestseller'],
    featured: true,
    seasonal: false,
  },
  {
    slug: 'cozonac-cu-nuca',
    name: 'Cozonac cu nucă',
    shortDescription: 'Cozonac bogat în nucă, cu aluat fin și aromat.',
    longDescription: 'Acest cozonac generos este umplut cu o pastă bogată de nucă măcinată, zahăr și scorțișoară. Aluatul nostru special, frământat cu răbdare și lăsat să crească natural, dă un rezultat incredibil de pufos. Nucile sunt atent selecționate pentru prospețime și aromă.',
    category: 'cozonaci',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&h=400&fit=crop',
    tags: ['traditional'],
    featured: false,
    seasonal: false,
  },
  {
    slug: 'pasca-dulce',
    name: 'Pască dulce',
    shortDescription: 'Pască tradițională cu brânză dulce, specifică sărbătorilor de Paște.',
    longDescription: 'Pasca dulce este unul dintre cele mai așteptate produse ale sărbătorilor pascale. Umplutura cremoasă de brânză dulce de vaci, îmbogățită cu stafide, lămâie și vanilie, este așezată cu grijă într-un aluat moale de cozonac. Fiecare pască este decorată tradițional cu benzi de aluat în formă de cruce.',
    category: 'sezon',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop',
    tags: ['traditional', 'sezon'],
    featured: true,
    seasonal: true,
    availabilityNote: 'Disponibilă în perioada Paștelui',
  },
  {
    slug: 'pasca-sarata',
    name: 'Pască sărată',
    shortDescription: 'Pască cu brânză sărată și mărar, perfectă pentru masa de Paște.',
    longDescription: 'Pasca sărată este varianta savuroasă a clasicei păști, umplută cu o combinație delicioasă de brânză de vaci, telemea, ouă și mărar proaspăt. Aluatul pufos contrastează frumos cu umplutura aromată, creând un echilibru perfect de gusturi.',
    category: 'sezon',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=600&h=400&fit=crop',
    tags: ['traditional', 'sezon'],
    featured: true,
    seasonal: true,
    availabilityNote: 'Disponibilă în perioada Paștelui',
  },
  {
    slug: 'miel-din-aluat',
    name: 'Miel din aluat',
    shortDescription: 'Figurină de miel din aluat, tradiție pascală românească.',
    longDescription: 'Mielul din aluat este o tradiție frumoasă a Paștelui românesc. Fiecare figurină este modelată manual cu atenție și migală, apoi coaptă la temperatura perfectă pentru a obține o culoare aurie uniformă. Este atât o decorație tradițională pentru masa de Paște, cât și un cadou deosebit.',
    category: 'sezon',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop',
    tags: ['traditional', 'sezon'],
    featured: false,
    seasonal: true,
    availabilityNote: 'Disponibil în perioada Paștelui',
  },
  {
    slug: 'cornuri-patiserie',
    name: 'Cornuri cu unt',
    shortDescription: 'Cornuri fragede cu unt, ideale pentru gustare.',
    longDescription: 'Cornurile noastre cu unt sunt preparate din aluat foietat, stratificat cu grijă și multă răbdare. Fiecare strat subțire de aluat și unt creează o textură incredibil de fragedă și crocantă. Sunt perfecte atât simple, cât și umplute cu gem sau ciocolată.',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop',
    tags: ['bestseller'],
    featured: true,
    seasonal: false,
  },
  {
    slug: 'chifle-artizanale',
    name: 'Chifle artizanale',
    shortDescription: 'Chifle moi și parfumate, coapte proaspăt în fiecare zi.',
    longDescription: 'Chiflele noastre artizanale sunt coapte proaspăt în fiecare dimineață. Aluatul fermentat lent dezvoltă arome complexe și o textură deosebită. Sunt perfecte pentru sandvișuri, burgeri sau pur și simplu cu unt proaspăt.',
    category: 'paine',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop',
    tags: [],
    featured: false,
    seasonal: false,
  },
  {
    slug: 'placinta-cu-mere',
    name: 'Plăcintă cu mere',
    shortDescription: 'Plăcintă tradițională cu mere și scorțișoară.',
    longDescription: 'Plăcinta noastră cu mere este preparată cu mere proaspete de livadă, scorțișoară și un strop de lămâie. Foile subțiri de aluat, întinse manual, îmbrățișează umplutura succulentă de mere caramelizate. Se servește caldă, presărată cu zahăr pudră.',
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&h=400&fit=crop',
    tags: ['traditional'],
    featured: false,
    seasonal: false,
  },
  {
    slug: 'covrig-traditional',
    name: 'Covrig tradițional',
    shortDescription: 'Covrigi pufoși cu sare sau susan, proaspăt cocinați.',
    longDescription: 'Covrigii noștri tradițional sunt preparați din aluat moale, opărit și cocinați zilnic. Poți alege varianta cu sare, susan sau mac. Textura lor unică — crocantă la exterior și moale în interior — îi face un favorit al clienților noștri de toate vârstele.',
    category: 'specialitati',
    image: 'https://images.unsplash.com/photo-1586444248902-2367d0ee9cd8?w=600&h=400&fit=crop',
    tags: ['traditional'],
    featured: false,
    seasonal: false,
  },
  {
    slug: 'paine-integrala',
    name: 'Pâine integrală',
    shortDescription: 'Pâine integrală bogată în fibre, pentru un stil de viață sănătos.',
    longDescription: 'Pâinea noastră integrală este preparată din făină integrală de grâu, bogată în fibre și substanțe nutritive. Fermentarea lentă îi conferă un gust complex și o textură densă, dar plăcută. Este alegerea ideală pentru cei care apreciază un stil de viață sănătos fără a renunța la gust.',
    category: 'paine',
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&h=400&fit=crop',
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
