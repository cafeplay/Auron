'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

export function MotionWrapper({ children, className = '', ...props }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
