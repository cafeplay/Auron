'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductConfig } from '@/types/product';
import { Container } from '@/components/Container';
import { ChevronDown } from 'lucide-react';

interface ProductFAQProps {
  config: ProductConfig;
}

export function ProductFAQ({ config }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 border-t border-border">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12"
        >
          سوالات متداول
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {config.faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-right"
              >
                <span className="text-text-primary font-medium">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-tertiary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-4 text-text-secondary text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
