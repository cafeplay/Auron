'use client';

import { motion } from 'framer-motion';
import { ProductConfig } from '@/types/product';
import { Container } from '@/components/Container';

interface ProductSummaryProps {
  config: ProductConfig;
}

export function ProductSummary({ config }: ProductSummaryProps) {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {config.summary.title}
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            {config.summary.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
