'use client';

import { motion } from 'framer-motion';
import { ProductConfig } from '@/types/product';
import { Container } from '@/components/Container';

interface ProductIntroProps {
  config: ProductConfig;
}

export function ProductIntro({ config }: ProductIntroProps) {
  return (
    <section id="intro" className="py-16 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {config.intro.title}
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            {config.intro.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
