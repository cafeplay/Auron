'use client'

import { motion } from 'framer-motion'
import { logoBreathing } from '@/lib/animations'
import { branding } from '@/config/branding'

export function Logo() {
  return (
    <motion.div
      variants={logoBreathing}
      initial="initial"
      animate="animate"
      className="inline-block"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.3" />
        <path
          d="M24 4 L24 8 M24 40 L24 44 M4 24 L8 24 M40 24 L44 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 8.5 L11.5 11.5 M36.5 36.5 L39.5 39.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    </motion.div>
  )
}
