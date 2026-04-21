import { Wheat } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OrnamentDividerProps {
  className?: string
}

export function OrnamentDivider({ className }: OrnamentDividerProps) {
  return (
    <div className={cn('relative flex items-center justify-center py-2', className)} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-background ring-1 ring-accent/40 shadow-sm">
        <Wheat className="w-4 h-4 text-accent-dark" />
      </div>
    </div>
  )
}
