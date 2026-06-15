import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: { scale: 0.98 },
}

export const logoBreathing: Variants = {
  initial: { opacity: 1, scale: 1 },
  animate: {
    opacity: [1, 0.8, 1],
    scale: [1, 0.98, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const expandableContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}
