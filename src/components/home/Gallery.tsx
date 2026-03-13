const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    alt: 'Pâine proaspăt coaptă cu crustă aurie',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=400&h=300&fit=crop',
    alt: 'Franzele aliniate pe raftul brutăriei',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=300&fit=crop',
    alt: 'Aluat frământat pentru cozonac',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&h=400&fit=crop',
    alt: 'Cozonac tradițional cu nucă',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=400&h=400&fit=crop',
    alt: 'Produse de patiserie artizanale',
    className: 'col-span-1 row-span-1',
  },
]

export function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Din brutăria noastră
          </h2>
          <p className="text-muted-foreground">
            Imagini din procesul de preparare și din produsele noastre proaspete.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} overflow-hidden rounded-lg`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
