import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/config/products'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

const tagConfig: Record<string, { label: string; variant: 'default' | 'seasonal' | 'bestseller' | 'new' }> = {
  traditional: { label: 'Tradițional', variant: 'default' },
  sezon: { label: 'De sezon', variant: 'seasonal' },
  bestseller: { label: 'Bestseller', variant: 'bestseller' },
  nou: { label: 'Nou', variant: 'new' },
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      to={`/produse/${product.slug}`}
      className={cn(
        'group bg-surface rounded-2xl overflow-hidden shadow-sm ring-1 ring-border/40 hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1 hover:ring-primary/20 transition-all duration-300 cursor-pointer flex flex-col',
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        {product.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
            {product.tags.slice(0, 2).map((tag) => {
              const config = tagConfig[tag]
              if (!config) return null
              return (
                <Badge key={tag} variant={config.variant}>
                  {config.label}
                </Badge>
              )
            })}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center text-sm font-medium text-primary gap-1.5">
          Vezi produsul
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  )
}
