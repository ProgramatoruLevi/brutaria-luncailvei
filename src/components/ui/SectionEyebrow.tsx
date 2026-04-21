import { cn } from '@/lib/utils'

interface SectionEyebrowProps {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  align?: 'center' | 'left'
  className?: string
}

export function SectionEyebrow({
  children,
  variant = 'light',
  align = 'center',
  className,
}: SectionEyebrowProps) {
  const color = variant === 'dark' ? 'text-accent-light' : 'text-primary'
  const line = variant === 'dark' ? 'bg-accent-light/50' : 'bg-primary/40'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]',
        color,
        align === 'center' ? 'justify-center' : 'justify-start',
        className
      )}
    >
      <span className={cn('h-px w-8', line)} />
      <span>{children}</span>
      <span className={cn('h-px w-8', line)} />
    </span>
  )
}
