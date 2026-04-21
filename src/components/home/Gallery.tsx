import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=900&fit=crop',
    alt: 'Pâine proaspăt coaptă cu crustă aurie',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&h=500&fit=crop',
    alt: 'Franzele aliniate pe raftul brutăriei',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1612392062422-ef19b42f74df?w=500&h=500&fit=crop',
    alt: 'Aluat frământat pentru cozonac',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&h=500&fit=crop',
    alt: 'Cozonac tradițional cu nucă',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&h=500&fit=crop',
    alt: 'Produse de patiserie artizanale',
    className: 'col-span-1 row-span-1',
  },
]

export function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-main">
        <Reveal className="text-center mb-14">
          <div className="mb-5">
            <SectionEyebrow>Galerie</SectionEyebrow>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Din brutăria noastră
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Imagini din procesul de preparare și din produsele noastre proaspete.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[180px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className={`${image.className} group relative overflow-hidden rounded-2xl ring-1 ring-accent/30 shadow-md hover:shadow-xl hover:ring-accent/60 transition-all duration-300`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/95 text-primary shadow-lg">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
