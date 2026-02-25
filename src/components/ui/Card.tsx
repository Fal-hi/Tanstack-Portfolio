import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-xl border border-light-blue/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6',
        'hover:border-light-blue dark:hover:border-gray-700 transition-colors duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
