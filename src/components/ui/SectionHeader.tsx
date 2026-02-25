import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  delay?: number
}

export function SectionHeader({
  title,
  subtitle,
  className,
  delay = 0,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn('mb-12 space-y-2', className)}
    >
      <h2 className="text-3xl font-bold tracking-tight text-neutral-gray dark:text-gray-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-gray/60 dark:text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
