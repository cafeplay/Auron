'use client';

import { motion } from 'framer-motion';
import { ProductConfig } from '@/types/product';
import { Container } from '@/components/Container';
import * as LucideIcons from 'lucide-react';

interface ProductFeaturesProps {
  config: ProductConfig;
}

// تابع کمکی برای دریافت آیکون
const getIcon = (name: string) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className="w-8 h-8 text-primary" /> : null;
};

export function ProductFeatures({ config }: ProductFeaturesProps) {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-4"
        >
          قابلیت‌های کشت‌یار
        </motion.h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          از پایش لحظه‌ای تا کنترل هوشمند، همه ابزارهای مورد نیاز در یک پلتفرم
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-[8px_8px_16px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.02)]"
            >
              <div className="mb-3">{getIcon(feature.icon)}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
