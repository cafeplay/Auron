'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import Link from 'next/link';

const researchItems = [
  {
    id: 'persona',
    title: 'پرسونای مشتری',
    description: 'تحلیل و شناسایی نیازها، رفتارها و انتظارات کاربران بالقوه کشت‌یار',
    icon: '📊',
    href: '/persona',
    status: 'active',
  },
  {
    id: 'admin',
    title: 'مدیریت پرسشنامه',
    description: 'مشاهده و تحلیل پاسخ‌های ثبت‌شده از کاربران',
    icon: '📋',
    href: '/admin/persona',
    status: 'active',
  },
  {
    id: 'analytics',
    title: 'گزارش‌های تحلیلی',
    description: 'تحلیل داده‌های جمع‌آوری شده و استخراج الگوهای رفتاری',
    icon: '📈',
    href: '/research/analytics',
    status: 'coming-soon',
  },
  {
    id: 'prototype',
    title: 'نمونه‌های اولیه',
    description: 'نسخه‌های آزمایشی و نمونه‌های اولیه محصولات در حال توسعه',
    icon: '🧪',
    href: '/research/prototype',
    status: 'coming-soon',
  },
  {
    id: 'survey',
    title: 'نظرسنجی‌ها',
    description: 'نظرسنجی‌های انجام شده و نتایج آن‌ها',
    icon: '📝',
    href: '/research/survey',
    status: 'coming-soon',
  },
  {
    id: 'report',
    title: 'گزارش نهایی',
    description: 'گزارش جامع تحقیق و توسعه پروژه کشت‌یار',
    icon: '📄',
    href: '/research/report',
    status: 'coming-soon',
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            🔬 تحقیق و توسعه
          </h1>
          <p className="text-text-tertiary text-sm md:text-base max-w-2xl mx-auto">
            پژوهش‌ها، تحلیل‌ها و پروژه‌های در دست توسعه کشت‌یار
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={item.status === 'active' ? item.href : '#'}
                className={`block h-full p-6 rounded-2xl border transition-all duration-300 ${
                  item.status === 'active'
                    ? 'border-border hover:border-primary bg-surface hover:bg-surface/80 hover:shadow-[0_0_30px_rgba(156,176,128,0.05)] hover:-translate-y-1'
                    : 'border-border/50 bg-surface/50 cursor-not-allowed opacity-60'
                }`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-tertiary leading-relaxed">
                  {item.description}
                </p>
                {item.status === 'coming-soon' && (
                  <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/60">
                    به زودی
                  </span>
                )}
                {item.status === 'active' && (
                  <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
                    فعال
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-2 text-sm text-text-tertiary hover:text-text-primary border border-border rounded-full hover:border-primary transition-all duration-300"
          >
            ← بازگشت به صفحه اصلی
          </Link>
        </div>
      </Container>
    </main>
  );
}
