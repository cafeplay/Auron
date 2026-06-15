'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { products } from '@/config/products'
import { Container } from './Container'

export function ProductSection() {
  const product = products[0]

  return (
    <section id="products" className="py-24 md:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-text-secondary mb-12"
          >
            محصولات
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <div className="neumorphic-card max-w-2xl mx-auto p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
                {product.name}
                <span className="text-text-tertiary text-xl md:text-2xl mr-2">
                  {product.nameEn}
                </span>
              </h3>

              <p className="text-text-secondary text-lg mb-8">
                {product.description}
              </p>

              <a
                href={product.link}
                className="neumorphic-button inline-flex items-center gap-2 px-6 py-3 text-text-primary hover:text-primary transition-colors duration-300"
              >
                {product.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
