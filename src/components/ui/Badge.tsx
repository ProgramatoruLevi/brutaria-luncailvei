import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'seasonal' | 'bestseller' | 'new'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface/95 text-secondary-dark ring-1 ring-secondary/10',
    seasonal: 'bg-accent-dark text-white',
    bestseller: 'bg-primary text-white',
    new: 'bg-green-600 text-white',
  }

  return (
    <span className={cn('inline-flex items-center text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm', variants[variant], className)}>
      {children}
    </span>
  )
}
