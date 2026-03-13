import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'seasonal' | 'bestseller' | 'new'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    seasonal: 'bg-accent/20 text-accent-dark',
    bestseller: 'bg-primary/10 text-primary',
    new: 'bg-green-50 text-green-700',
  }

  return (
    <span className={cn('inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full', variants[variant], className)}>
      {children}
    </span>
  )
}
